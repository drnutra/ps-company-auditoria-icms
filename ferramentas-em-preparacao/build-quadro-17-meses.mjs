import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Workbook, SpreadsheetFile} from '@oai/artifact-tool';

const here=path.dirname(fileURLToPath(import.meta.url));
const outputDir=process.env.OUTPUT_DIR || path.resolve(here,'../output/auditoria-icms');
const records=[
 ['202501',990856.85,440261.89,null,373982.46,176612.50,535309.00,-455547.85],
 ['202502',1498424.57,924931.48,null,220693.00,352800.09,817387.04,-681037.53],
 ['202503',2023392.63,1471869.78,null,100010.00,451512.85,630060.01,-1393332.62],
 ['202504',2305315.32,1795466.84,null,170010.00,339838.48,1122746.01,-1182569.31],
 ['202505',2001897.62,1698619.62,null,null,303278.00,1909707.00,-92190.62],
 ['202506',3208837.69,2842179.73,null,11641.75,355016.21,983986.08,-2224851.61],
 ['202507',3000215.71,2630627.91,null,14597.66,354990.14,1513579.53,-1486636.18],
 ['202508',2591099.36,2249582.30,null,14654.16,326862.90,1424728.04,-1166371.32],
 ['202509',2857110.88,2512741.49,null,1853.39,342516.00,1229265.02,-1627845.86],
 ['202511',1618280.06,1355372.15,null,1190.91,261717.00,1492592.64,-125687.42],
 ['202512',2481210.99,2205002.99,null,null,276208.00,1297706.80,-1183504.19],
 ['202601',3020204.48,2779971.48,null,null,240233.00,909741.92,-2110462.56],
 ['202602',2235463.99,2019381.99,null,null,216082.00,583718.92,-1651745.07],
 ['202603',1111751.36,952769.57,null,null,158981.79,477215.96,-634535.40],
 ['202605',260838.16,195998.08,null,null,64840.08,210851.96,-49986.20],
];
const wb=Workbook.create();
const q=wb.worksheets.add('Quadro mensal');
const s=wb.worksheets.add('Fonte SEF');
const dark='#26384A', muted='#596675', amber='#FFF2CC', grey='#EBEFF3';
const money='#,##0.00;-#,##0.00;0.00';
function base(sh,range){sh.showGridLines=false;sh.getRange(range).format={font:{name:'Arial',size:10,color:'#202B36'},verticalAlignment:'center',rowHeight:25};}
function title(sh,text){sh.getRange('A2').values=[[text]];sh.getRange('A2').format={font:{name:'Arial',size:16,bold:true,color:dark},rowHeight:33};}
function head(sh,range,height=65){sh.getRange(range).format={fill:dark,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},horizontalAlignment:'center',verticalAlignment:'center',wrapText:true,rowHeight:height,borders:{insideVertical:{style:'thin',color:'#FFFFFF'}}};}
function widths(sh,vals){for(const[c,w]of Object.entries(vals))sh.getRange(`${c}1:${c}38`).format.columnWidthPx=w;}
function note(sh,cell,text){sh.getRange(cell).values=[[text]];sh.getRange(cell).format.font={name:'Arial',size:10,color:muted};}

base(s,'A1:I26');title(s,'PS COMPANY LTDA — fonte fiscal');
note(s,'A3','Fonte: INTIMAÇÃO FISCAL SEFAZ-MG ICMS.pdf, página 3. Termo emitido em 31/08/2026.');
s.getRange('A5:I5').values=[['NM_CONTRIBUINTE','NR_ANO_MES','VENDAS_CARTAO','VR_TOTAL_CREDITO','VR_TOTAL_DEBITO','TRANSFERENCIA_RECURSOS','VR_TOTAL_PIX','FATURAMENTO','DIFERENCA']];head(s,'A5:I5',46);
s.getRange('A6:I20').values=records.map(r=>['PS COMPANY LTDA',...r]);
s.getRange('C6:I23').setNumberFormat(money);s.getRange('C6:I23').format.horizontalAlignment='right';
s.getRange('B6:B20').format.horizontalAlignment='center';
s.getRange('H21:I21').values=[['TOTAL do PDF',-16066303.74]];
s.getRange('A23').values=[['Totais calculados']];
for(const c of ['C','D','F','G','H','I'])s.getRange(`${c}23`).formulas=[[`=ROUND(SUM(${c}6:${c}20),2)`]];
s.getRange('A23:I23').format={fill:grey,font:{name:'Arial',size:10,bold:true}};
note(s,'A25','Vazios e diferença negativa do documento preservados. VENDAS_CARTAO já inclui crédito, transferências e PIX.');
note(s,'A26','Outubro/2025 e abril/2026 não constam no anexo. Nenhuma conclusão sobre ausência de vendas decorre disso.');
widths(s,{A:200,B:110,C:150,D:153,E:153,F:180,G:150,H:150,I:153});s.freezePanes.freezeRows(5);

base(q,'A1:O38');q.tabColor=dark;title(q,'PS COMPANY LTDA — quadro mensal de janeiro/2025 a maio/2026');
note(q,'A4','Modelo de preenchimento: os relatórios Braip, extratos, notas e documentos dos ajustes ainda não foram recebidos.');
note(q,'A5','B contém o agregado financeiro do Fisco. C preserva o faturamento informado no anexo. D calcula apenas B − C.');
note(q,'A6','Os seis itens solicitados estão numerados nos cabeçalhos. Campos amarelos vazios significam pendência, nunca zero confirmado.');
note(q,'A7','Não há cálculo automático de ICMS, saldo ajustado ou venda sem nota. A conciliação depende de documentos e identificação das operações.');
q.getRange('A8').values=[['BASE FISCAL']];q.getRange('E8').values=[['SEGREGAÇÕES A COMPROVAR']];q.getRange('I8').values=[['COBERTURA DOCUMENTAL']];q.getRange('K8').values=[['PENDÊNCIAS POR VENDA']];q.getRange('N8').values=[['REVISÃO']];
for(const r of ['A8:D8','E8:H8','I8:J8','K8:M8','N8:O8'])q.getRange(r).format={fill:grey,font:{name:'Arial',size:10,bold:true,color:dark}};
q.getRange('A9:O9').values=[[
 'Competência','1. Valor do Fisco\nVENDAS_CARTAO (R$)','Faturamento informado\nno anexo (R$)','Diferença do anexo\nB − C (R$)',
 '2. Mesma venda duplicada\nBraip / financeiro (R$)','3. Juros de parcelamento\nsegregados (R$)','4. Devolução / chargeback\nadmissível (R$)','4. Em análise\ninformativo (R$)',
 '5. Vendas com nota\nmesmo em outro mês (R$)','5. Ajuste comprovado\nde cobertura ± (R$)','6. Sem nota confirmado\npor ID Braip (R$)','6. IDs Braip\ndas vendas sem nota',
 'Não identificado\nvalor a apurar (R$)','Situação da\nconciliação','Documentos, classificação\ne responsável pela revisão'
 ]];head(q,'A9:O9');
const keys=[];
for(let i=0;i<17;i++){
 const dt=new Date(Date.UTC(2025,0+i,1,12)); const key=`${dt.getUTCFullYear()}${String(dt.getUTCMonth()+1).padStart(2,'0')}`;keys.push(key);
 const row=10+i, idx=records.findIndex(r=>r[0]===key);
 q.getRange(`A${row}`).values=[[dt]];
 if(idx>=0)q.getRange(`B${row}:C${row}`).formulas=[[`='Fonte SEF'!C${idx+6}`,`='Fonte SEF'!H${idx+6}`]];
 else {q.getRange(`B${row}`).values=[['Não consta no anexo']];q.getRange(`B${row}:D${row}`).format.fill='#F6F0EA';}
 q.getRange(`D${row}`).formulas=[[`=IF(AND(ISNUMBER(B${row}),ISNUMBER(C${row})),ROUND(B${row}-C${row},2),"Não disponível")`]];
}
q.getRange('A10:A26').setNumberFormat('mm/yyyy');q.getRange('A10:A26').format.horizontalAlignment='center';
q.getRange('B10:K28').setNumberFormat(money);q.getRange('M10:M26').setNumberFormat(money);
q.getRange('B10:K28').format.horizontalAlignment='right';q.getRange('M10:M26').format.horizontalAlignment='right';
q.getRange('B19:D19').format.horizontalAlignment='left';q.getRange('B25:D25').format.horizontalAlignment='left';
q.getRange('E10:O26').format.fill=amber;
q.getRange('N10:N26').values=[['Pendente']];
q.getRange('N10:N26').dataValidation={rule:{type:'list',values:['Pendente','Em conferência','Documentado para revisão']}};
q.getRange('N10:N26').conditionalFormats.add('containsText',{text:'Pendente',format:{font:{color:'#9A5B00',bold:true}}});
q.getRange('N10:N26').conditionalFormats.add('containsText',{text:'Em conferência',format:{font:{color:'#24549C',bold:true}}});
q.getRange('A28').values=[['TOTAL DO ANEXO']];
for(const c of ['B','C','D'])q.getRange(`${c}28`).formulas=[[`=ROUND(SUM(${c}10:${c}26),2)`]];
q.getRange('A28:D28').format={fill:grey,font:{name:'Arial',size:10,bold:true},borders:{top:{style:'thin',color:dark}}};
note(q,'A30','Total fiscal cobre somente os 15 meses presentes no anexo. As outras duas competências permanecem sem valor fiscal disponível.');
note(q,'A31','Duplicidade: comprovar a mesma operação com ID de venda e duas linhas financeiras. Não somar PIX ao agregado nem chamar todo repasse de nova venda.');
note(q,'A32','Juros: distinguir financiamento bancário de preço da venda a prazo e registrar a classificação jurídica. Segregar não significa deduzir.');
note(q,'A33','Cancelamentos: vincular evento, data, valor e prova. Em análise é informação pendente e não é dedução admissível por si.');
note(q,'A34','Notas: I é informativo. J recebe somente ajuste comprovado sobre a base C, sem deduzir novamente notas já incluídas. Mudanças de mês devem ser pareadas.');
note(q,'A35','Sem nota: K exige identificação em L e documentos em O. A diferença fiscal ou um saldo residual não comprova, sozinha, venda sem nota.');
note(q,'A36','M registra valores ainda não identificados após a conciliação documental. Não preencher zero enquanto existirem arquivos, operações ou critérios pendentes.');
note(q,'A37','A situação é manual. Arquivo preparatório para investigação, ainda sem conciliação das operações e sem conclusão sobre imposto devido.');
widths(q,{A:140,B:178,C:170,D:165,E:185,F:175,G:185,H:165,I:190,J:178,K:180,L:235,M:170,N:195,O:360});
q.freezePanes.freezeRows(9);q.freezePanes.freezeColumns(1);

const get=(sh,c)=>sh.getRange(c).values[0][0];const close=(a,b)=>Math.abs(a-b)<0.005;
wb.recalculate();
if(keys.length!==17||new Set(keys).size!==17||keys[0]!=='202501'||keys[16]!=='202605')throw Error('Intervalo inválido');
for(const[c,v]of [['B28',31204899.67],['C28',15138595.93],['D28',16066303.74]])if(!close(get(q,c),v))throw Error(`Total divergente ${c}`);
for(const r of [19,25])if(get(q,`B${r}`)!=='Não consta no anexo'||get(q,`C${r}`)!==null||get(q,`D${r}`)!=='Não disponível')throw Error('Mês ausente convertido em valor');
// Testa a propagação da única operação calculada e restaura a fonte.
s.getRange('C6').values=[[990956.85]];wb.recalculate();
if(!close(get(q,'D10'),455647.85)||!close(get(q,'D28'),16066403.74))throw Error('Falha de recálculo');
s.getRange('C6').values=[[990856.85]];
// Entradas internas não geram deduções nem saldo sem nota automaticamente.
q.getRange('E10:J10').values=[[100,20,30,40,500,0]];
wb.recalculate();
if(!close(get(q,'D10'),455547.85)||get(q,'K10')!==null||get(q,'M10')!==null||get(q,'N10')!=='Pendente')throw Error('Conclusão automática indevida');
q.getRange('E10:J10').clear({applyTo:'contents'});
wb.recalculate();
for(let r=10;r<=26;r++){for(const c of ['E','F','G','H','I','J','K','L','M','O'])if(get(q,`${c}${r}`)!==null)throw Error('Entrada de teste não restaurada');}
if(!close(get(q,'D28'),16066303.74)||get(s,'E6')!==null||get(s,'F10')!==null)throw Error('Fonte não restaurada');
const errors=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:30},maxChars:1200});
console.log(errors.ndjson);
console.log(JSON.stringify({months:17,fiscalRows:15,missing:['202510','202604'],totals:[get(q,'B28'),get(q,'C28'),get(q,'D28')],tests:'recálculo, restauração, meses ausentes, entradas sem dedução automática e campos internos vazios aprovados'}));
for(const[name,range,file]of [['Quadro mensal','A1:H37','quadro17-esquerda'],['Quadro mensal','I8:O28','quadro17-direita'],['Fonte SEF','A1:I27','quadro17-fonte']]){
 const preview=await wb.render({sheetName:name,range,scale:1.3,format:'png'});
 await fs.writeFile(path.join(here,`${file}.png`),new Uint8Array(await preview.arrayBuffer()));
}
await fs.mkdir(outputDir,{recursive:true});
const out=await SpreadsheetFile.exportXlsx(wb);const target=path.join(outputDir,'quadro-mensal-17-meses.xlsx');await out.save(target);
try{await fs.rename(`${target}.inspect.ndjson`,path.join(here,'quadro-mensal-17-meses.xlsx.inspect.ndjson'));}catch(e){if(e.code!=='ENOENT')throw e;}
console.log(`SAVED ${target}`);
