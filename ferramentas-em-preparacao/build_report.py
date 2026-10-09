#!/usr/bin/env python3
"""Build the approved Markdown as a readable A4 report; no legal text generation."""
from pathlib import Path
import sys, re, html, json, hashlib, unicodedata
from collections import Counter
from urllib.parse import quote
from reportlab.pdfgen import canvas
from reportlab.platypus import BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether, PageBreak, CondPageBreak
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import simpleSplit
import pdfplumber
from pypdf import PdfReader

BASE = Path(__file__).resolve().parents[1]
SRC = BASE/'output/auditoria-icms/relatorio-completo-segunda-auditoria.md'
DEST = BASE/'output/auditoria-icms/relatorio-completo-segunda-auditoria.pdf'
TMP = BASE/'tmp/pdf-relatorio2'
FONTS = Path('/System/Library/Fonts/Supplemental')
for name,fn in [('Arial','Arial.ttf'),('Arial-Bold','Arial Bold.ttf'),('Arial-Italic','Arial Italic.ttf'),('Arial-BoldItalic','Arial Bold Italic.ttf')]:
    pdfmetrics.registerFont(TTFont(name,str(FONTS/fn)))
pdfmetrics.registerFontFamily('Arial',normal='Arial',bold='Arial-Bold',italic='Arial-Italic',boldItalic='Arial-BoldItalic')
INK=colors.HexColor('#172A37'); MUTED=colors.HexColor('#586872'); TEAL=colors.HexColor('#176879'); LINE=colors.HexColor('#CCD6DC'); PALE=colors.HexColor('#EFF4F6')
PAGE_W,PAGE_H=A4; LEFT=48; RIGHT=48; TOP=54; BOTTOM=48; WIDTH=PAGE_W-LEFT-RIGHT
styles={
'body':ParagraphStyle('Body',fontName='Arial',fontSize=10.5,leading=15,spaceAfter=7,textColor=INK,allowWidows=0,allowOrphans=0,splitLongWords=True),
'lead':ParagraphStyle('Lead',fontName='Arial',fontSize=11,leading=16,spaceAfter=10,textColor=INK),
'h1':ParagraphStyle('H1',fontName='Arial-Bold',fontSize=22,leading=27,spaceAfter=16,textColor=INK,keepWithNext=True),
'h2':ParagraphStyle('H2',fontName='Arial-Bold',fontSize=14,leading=19,spaceBefore=16,spaceAfter=9,textColor=TEAL,keepWithNext=True),
'h3':ParagraphStyle('H3',fontName='Arial-Bold',fontSize=11.5,leading=16,spaceBefore=12,spaceAfter=6,textColor=INK,keepWithNext=True),
'h4':ParagraphStyle('H4',fontName='Arial-Bold',fontSize=10.5,leading=15,spaceBefore=9,spaceAfter=5,textColor=INK,keepWithNext=True),
'bullet':ParagraphStyle('Bullet',fontName='Arial',fontSize=10.5,leading=15,spaceAfter=5,leftIndent=13,firstLineIndent=-10,textColor=INK,allowWidows=0,allowOrphans=0),
'quote':ParagraphStyle('Quote',fontName='Arial',fontSize=10.5,leading=15,spaceAfter=8,spaceBefore=3,leftIndent=11,rightIndent=9,borderColor=LINE,borderWidth=0.6,borderPadding=8,backColor=PALE,textColor=INK),
'cell':ParagraphStyle('Cell',fontName='Arial',fontSize=9.4,leading=12.5,spaceAfter=0,textColor=INK,splitLongWords=True),
'cellhead':ParagraphStyle('CellHead',fontName='Arial-Bold',fontSize=9.4,leading=12.5,spaceAfter=0,textColor=colors.white,splitLongWords=True),
'caption':ParagraphStyle('Caption',fontName='Arial',fontSize=8.5,leading=11.5,textColor=MUTED,spaceAfter=6),
'kicker':ParagraphStyle('Kicker',fontName='Arial-Bold',fontSize=8.5,leading=12,textColor=TEAL,spaceAfter=9),
'code':ParagraphStyle('Code',fontName='Arial',fontSize=9.5,leading=13,textColor=INK,backColor=PALE,borderPadding=8,spaceAfter=8),
}
CHUNKS=[]; PATH_LABEL_CHANGES=[]; LINK_URLS=[]; HEADINGS=[]; PARSED=[]

def clean_text(s):
    return s.replace('\u00a0',' ').replace('\u2011','-').replace('\u2013','-').replace('\u2014','-').replace('\u2212','-')

def shorten_path_text(s):
    # A readable file name preserves source traceability without a long host directory.
    if s.startswith('/') and ('/Users/' in s or '/tmp/' in s):
        out=Path(s).name
        PATH_LABEL_CHANGES.append({'original':s,'display':out})
        return out
    return s

def inline(s):
    s=clean_text(s)
    parts=[]; idx=0
    pattern=re.compile(r'\[([^\]]+)\]\(([^\n]+?)\)|`([^`]+)`|\*\*(.+?)\*\*|(?<!\*)\*([^*\n]+)\*(?!\*)')
    for m in pattern.finditer(s):
        parts.append(html.escape(s[idx:m.start()]))
        if m.group(1) is not None:
            label=shorten_path_text(m.group(1)); url=m.group(2).strip()
            if url.startswith('<') and url.endswith('>'): url=url[1:-1]
            if url.startswith(('https://','http://','mailto:')):
                LINK_URLS.append(url)
                parts.append('<link href="'+html.escape(url,quote=True)+'" color="#176879"><u>'+html.escape(label)+'</u></link>')
            else:
                parts.append(html.escape(label))
        elif m.group(3) is not None:
            parts.append(html.escape(shorten_path_text(m.group(3))))
        elif m.group(4) is not None:
            parts.append('<b>'+inline(m.group(4))+'</b>')
        else:
            parts.append('<i>'+inline(m.group(5))+'</i>')
        idx=m.end()
    parts.append(html.escape(s[idx:]))
    return ''.join(parts)

def plain_markup(s):
    return html.unescape(re.sub(r'<[^>]+>','',s)).replace('\u00a0',' ')

def para(raw,sty='body',prefix=''):
    rendered=prefix+inline(raw)
    CHUNKS.append(plain_markup(rendered))
    return Paragraph(rendered,styles[sty])

def split_row(line):
    line=line.strip().strip('|')
    return [c.strip().replace('\\|','|') for c in re.split(r'(?<!\\)\|',line)]

def is_rule(line):
    return re.fullmatch(r'\s*[|:]?\s*:?-{3,}[-:\s|]*',line) is not None

def parse(md):
    lines=md.splitlines(); out=[]; i=0
    while i<len(lines):
        line=lines[i]; stripped=line.strip()
        if not stripped: i+=1; continue
        if stripped.startswith('```'):
            block=[]; i+=1
            while i<len(lines) and not lines[i].strip().startswith('```'):
                block.append(lines[i]); i+=1
            out.append(('code','\n'.join(block))); i+=1; continue
        m=re.match(r'^(#{1,6})\s+(.+?)\s*#*$',stripped)
        if m: out.append(('h',len(m.group(1)),m.group(2))); i+=1; continue
        if re.fullmatch(r'[-*_]{3,}',stripped): out.append(('hr',)); i+=1; continue
        if '|' in stripped and i+1<len(lines) and is_rule(lines[i+1]):
            rows=[split_row(stripped)]; i+=2
            while i<len(lines) and '|' in lines[i] and lines[i].strip():
                rows.append(split_row(lines[i])); i+=1
            cols=len(rows[0]); rows=[r+['']*(cols-len(r)) for r in rows]
            if any(len(r)!=cols for r in rows): raise ValueError('Inconsistent Markdown table width')
            out.append(('table',rows)); continue
        if stripped.startswith('>'):
            block=[]
            while i<len(lines) and lines[i].strip().startswith('>'):
                block.append(re.sub(r'^\s*>\s?','',lines[i])); i+=1
            out.append(('quote',' '.join(block))); continue
        m=re.match(r'^(\s*)([-*+]\s+|\d+[.)]\s+)(.+)$',line)
        if m:
            content=m.group(3); indent=len(m.group(1)); marker=m.group(2).strip(); i+=1
            while i<len(lines) and lines[i].strip() and re.match(r'^\s{2,}\S',lines[i]) and not re.match(r'^\s*(?:[-*+]\s+|\d+[.)]\s+)',lines[i]):
                content+=' '+lines[i].strip(); i+=1
            out.append(('bullet',marker,content,indent)); continue
        block=[stripped]; i+=1
        while i<len(lines) and lines[i].strip():
            nxt=lines[i].strip()
            if re.match(r'^(#{1,6}\s+|>|```|[-*+]\s+|\d+[.)]\s+)',nxt) or (i+1<len(lines) and '|' in nxt and is_rule(lines[i+1])) or re.fullmatch(r'[-*_]{3,}',nxt): break
            block.append(nxt); i+=1
        out.append(('p',' '.join(block)))
    return out

def col_widths(rows):
    n=len(rows[0]); weights=[]
    for c in range(n):
        contents=[plain_markup(inline(row[c])) for row in rows]
        lengths=sorted([len(x) for x in contents])
        typical=lengths[int(.7*(len(lengths)-1))]
        weight=max(len(contents[0])*.5,typical**.65,8)
        weights.append(weight)
    mins=[50 if n<6 else 42]*n
    rest=WIDTH-sum(mins)
    return [mins[i]+rest*weights[i]/sum(weights) for i in range(n)]

def make_table(rows):
    widths=col_widths(rows)
    data=[[para(v,'cellhead' if ri==0 else 'cell') for v in row] for ri,row in enumerate(rows)]
    t=Table(data,colWidths=widths,repeatRows=1,hAlign='LEFT',splitByRow=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0),TEAL),('VALIGN',(0,0),(-1,-1),'TOP'),
        ('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),
        ('TOPPADDING',(0,0),(-1,-1),7),('BOTTOMPADDING',(0,0),(-1,-1),7),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,PALE]),
        ('LINEBELOW',(0,0),(-1,0),.7,TEAL),('LINEBELOW',(0,1),(-1,-1),.3,LINE),
    ]))
    return t

class Report(BaseDocTemplate):
    def __init__(self,path,**kwargs):
        super().__init__(path,pagesize=A4,leftMargin=LEFT,rightMargin=RIGHT,topMargin=TOP,bottomMargin=BOTTOM,**kwargs)
        frame=Frame(LEFT,BOTTOM,WIDTH,PAGE_H-TOP-BOTTOM,id='body',leftPadding=0,rightPadding=0,topPadding=0,bottomPadding=0)
        self.addPageTemplates(PageTemplate(id='normal',frames=[frame],onPage=self.page_art))
        self.heading_num=0
    def page_art(self,c,doc):
        c.saveState(); c.setStrokeColor(LINE); c.setLineWidth(.5)
        c.line(LEFT,PAGE_H-36,PAGE_W-RIGHT,PAGE_H-36)
        c.setFillColor(MUTED); c.setFont('Arial',8)
        c.drawString(LEFT,PAGE_H-27,'SEGUNDA AUDITORIA | DOCUMENTAÇÃO FISCAL')
        c.drawRightString(PAGE_W-RIGHT,PAGE_H-27,'ICMS')
        c.line(LEFT,32,PAGE_W-RIGHT,32)
        c.setFont('Arial',8); c.drawString(LEFT,20,'Relatório completo de auditoria')
        c.drawRightString(PAGE_W-RIGHT,20,f'{doc.page}')
        c.restoreState()
    def afterFlowable(self,flowable):
        if isinstance(flowable,Paragraph) and hasattr(flowable,'report_heading'):
            level,label,key=flowable.report_heading
            self.canv.bookmarkPage(key)
            self.canv.addOutlineEntry(label,key,level=level,closed=False)
            if level==0: self.notify('TOCEntry',(level,label,self.page,key))

def build():
    if not SRC.exists(): raise SystemExit('Approved Markdown is not available yet.')
    md=SRC.read_text(); parsed=parse(md); PARSED.extend(parsed)
    title=next((x[2] for x in parsed if x[0]=='h' and x[1]==1),'Relatório completo da segunda auditoria')
    doc=Report(str(DEST),title=plain_markup(inline(title)),author='Relatório fiscal',subject='Segunda auditoria de documentação fiscal')
    story=[]; hkeys=0; first_title=True; levels_seen=[]
    h2count=sum(1 for x in parsed if x[0]=='h' and x[1]==2)
    use_toc=h2count>=8 and len(md)>14000
    toc_added=False
    for item in parsed:
        kind=item[0]
        if kind=='h':
            level,raw=item[1:]; sty='h'+str(min(level,4))
            if level==1 and first_title:
                story.append(Paragraph('RELATÓRIO COMPLETO',styles['kicker']))
                story.append(para(raw,sty)); first_title=False
                continue
            if level==2 and use_toc and not toc_added:
                story.append(Spacer(1,10))
                story.append(Paragraph('Sumário',styles['h2']))
                toc=TableOfContents()
                toc.levelStyles=[ParagraphStyle('TOC0',fontName='Arial',fontSize=10.5,leading=15,textColor=INK,spaceBefore=7,leftIndent=0,firstLineIndent=0)]
                toc.dotsMinLevel=0
                story.append(toc)
                story.append(PageBreak())
                toc_added=True
            # Use document outline for quick navigation; avoid orphaned headings.
            hkeys+=1; label=plain_markup(inline(raw)); key='sec-'+str(hkeys)
            p=para(raw,sty); outline_level=max(0,min(level-2,2))
            if not levels_seen: outline_level=0
            elif outline_level>levels_seen[-1]+1: outline_level=levels_seen[-1]+1
            levels_seen.append(outline_level)
            p.report_heading=(outline_level,label,key)
            HEADINGS.append({'heading':label,'level':level,'key':key})
            story.append(CondPageBreak(75 if level<=2 else 48)); story.append(p)
        elif kind=='p': story.append(para(item[1]))
        elif kind=='quote': story.append(para(item[1],'quote'))
        elif kind=='bullet':
            marker=('-' if item[1] in '-*+' else item[1])+' '
            p=para(item[2],'bullet',html.escape(marker)); story.append(p)
        elif kind=='table':
            story.append(Spacer(1,3)); story.append(make_table(item[1])); story.append(Spacer(1,10))
        elif kind=='hr': story.append(HRFlowable(width='100%',thickness=.6,color=LINE,spaceBefore=8,spaceAfter=10))
        elif kind=='code':
            for ln in item[1].splitlines(): story.append(para(ln,'code'))
    DEST.parent.mkdir(parents=True,exist_ok=True)
    doc.multiBuild(story) if use_toc else doc.build(story)
    with pdfplumber.open(DEST) as pdf:
        pages=[p.extract_text(layout=False) or '' for p in pdf.pages]
        page_count=len(pdf.pages)
        geometry=[]
        for i,p in enumerate(pdf.pages,1):
            chars=[c for c in p.chars if c.get('text','').strip()]
            outside=[c['text'] for c in chars if c['x0']<LEFT-1 or c['x1']>PAGE_W-RIGHT+1 or c['top']<10 or c['bottom']>PAGE_H-10]
            if outside: geometry.append({'page':i,'out_of_bounds_chars':''.join(outside)})
    alltext='\n\n'.join(pages); (TMP/'extracted.txt').write_text(alltext)
    def norm(t): return re.sub(r'\s+','',unicodedata.normalize('NFKC',clean_text(t)))
    missing=[c for c in CHUNKS if norm(c) not in norm(alltext)]
    # Numeric integrity is checked independently from paragraphs.
    numbers=lambda s: Counter(re.findall(r'(?<![\w])\d+(?:[.,/-]\d+)*(?:%)?',s))
    expected_nums=numbers('\n'.join(CHUNKS)); actual_nums=numbers(alltext)
    missing_nums={n:c-actual_nums[n] for n,c in expected_nums.items() if c>actual_nums[n]}
    reader=PdfReader(DEST); uris=[]
    for p in reader.pages:
        for a in p.get('/Annots',[]):
            obj=a.get_object(); act=obj.get('/A')
            if act and act.get('/URI'): uris.append(str(act['/URI']))
    qa={'source':str(SRC),'source_sha256':hashlib.sha256(md.encode()).hexdigest(),'pdf':str(DEST),'pages':page_count,'paragraph_chunks':len(CHUNKS),'headings':HEADINGS,'tables':sum(x[0]=='table' for x in parsed),'source_external_link_count':len(set(LINK_URLS)),'pdf_external_link_count':len(set(uris)),'missing_external_links':sorted(set(LINK_URLS)-set(uris)),'missing_text_chunks':missing,'missing_numbers':missing_nums,'text_geometry_issues':geometry,'path_label_changes':PATH_LABEL_CHANGES,'pdf_sha256':hashlib.sha256(DEST.read_bytes()).hexdigest()}
    (TMP/'qa.json').write_text(json.dumps(qa,ensure_ascii=False,indent=2)); print(json.dumps(qa,ensure_ascii=False,indent=2))
    if missing or missing_nums or geometry or qa['missing_external_links']: raise SystemExit('QA requires review')

if __name__=='__main__': build()
