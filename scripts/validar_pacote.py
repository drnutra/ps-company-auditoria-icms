#!/usr/bin/env python3
"""Valida integridade e aritmética do pacote original. Não calcula tributo."""
from pathlib import Path
from decimal import Decimal
from datetime import datetime, timedelta
import csv
import hashlib
import json
import re
import sys
import xml.etree.ElementTree as ET
import zipfile

ROOT = Path(__file__).resolve().parents[1]
errors = []
checks = []
NS = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}

def require(condition, message):
    if not condition:
        errors.append(message)

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def money(value):
    return Decimal(value or '0').quantize(Decimal('0.01'))

manifest_path = ROOT / 'validacao/MANIFESTO.json'
if manifest_path.exists():
    manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
    for item in manifest['arquivos']:
        p = (ROOT / item['caminho']).resolve()
        require(p.is_relative_to(ROOT), 'Caminho fora da raiz no manifesto')
        if not p.is_relative_to(ROOT):
            continue
        require(p.is_file(), 'Arquivo ausente: ' + item['caminho'])
        if p.is_file():
            require(sha(p) == item['sha256'], 'Hash alterado: ' + item['caminho'])
    checks.append(f"Manifesto: {len(manifest['arquivos'])} arquivos conferidos")
else:
    errors.append('MANIFESTO.json ausente')

facts = json.loads((ROOT / 'dados/fatos-confirmados.json').read_text(encoding='utf-8'))
pdf = ROOT / facts['fonte_pdf']
require(pdf.is_file() and sha(pdf) == facts['fonte_sha256'], 'PDF original não corresponde ao hash registrado')
if pdf.is_file():
    require(pdf.read_bytes().startswith(b'%PDF'), 'Fonte sem assinatura de formato PDF')
checks.append('Hash do documento original conferido; assinatura digital não validada por este script')

with (ROOT / 'dados/fisco-15-competencias.csv').open(encoding='utf-8', newline='') as f:
    rows = list(csv.DictReader(f))
require(len(rows) == 15, 'Número de competências do anexo diferente de 15')
keys = [r['NR_ANO_MES'] for r in rows]
require(len(set(keys)) == 15, 'Competência duplicada')
require(keys == facts['competencias_anexo'], 'Competências do CSV diferentes das registradas')
require(all(k not in keys for k in facts['competencias_ausentes_no_intervalo']), 'Mês ausente indevidamente incluído')
for r in rows:
    financial = money(r['VENDAS_CARTAO'])
    components = sum(money(r[k]) for k in ['VR_TOTAL_CREDITO', 'VR_TOTAL_DEBITO', 'TRANSFERENCIA_RECURSOS', 'VR_TOTAL_PIX'])
    require(financial == components, 'Componentes não fecham em ' + r['NR_ANO_MES'])
    require(money(r['FATURAMENTO']) - financial == money(r['DIFERENCA']), 'Diferença não fecha em ' + r['NR_ANO_MES'])
expected = {'VENDAS_CARTAO': '31204899.67', 'VR_TOTAL_CREDITO': '26074777.30', 'TRANSFERENCIA_RECURSOS': '908633.33', 'VR_TOTAL_PIX': '4221489.04', 'FATURAMENTO': '15138595.93', 'DIFERENCA': '-16066303.74'}
for col, val in expected.items():
    require(sum(money(r[col]) for r in rows) == Decimal(val), 'Total divergente: ' + col)
require(all(r['VR_TOTAL_DEBITO'] == '' for r in rows), 'Vazios originais de débito não preservados')
checks.append('15 linhas: componentes, totais, sinais, competências e vazios conferidos em Decimal')

def workbook(path):
    with zipfile.ZipFile(path) as z:
        require(z.testzip() is None, 'ZIP/XLSX com falha: ' + path.name)
        strings = []
        if 'xl/sharedStrings.xml' in z.namelist():
            for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('m:si', NS):
                strings.append(''.join(t.text or '' for t in si.findall('.//m:t', NS)))
        wb = ET.fromstring(z.read('xl/workbook.xml'))
        rels = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
        relmap = {x.attrib['Id']: x.attrib['Target'] for x in rels}
        sheets = {}
        for sh in wb.findall('m:sheets/m:sheet', NS):
            rid = sh.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']
            target = relmap[rid]
            target = target.lstrip('/') if target.startswith('/') else 'xl/' + target
            cells = {}
            for c in ET.fromstring(z.read(target)).findall('.//m:c', NS):
                v = c.find('m:v', NS)
                value = None if v is None else v.text
                kind = c.attrib.get('t')
                require(kind != 'e', f"Erro de fórmula em {path.name}/{sh.attrib['name']}/{c.attrib['r']}: {value}")
                if kind == 's' and value is not None:
                    value = strings[int(value)]
                elif kind == 'inlineStr':
                    value = ''.join(t.text or '' for t in c.findall('.//m:t', NS))
                cells[c.attrib['r']] = value
            sheets[sh.attrib['name']] = cells
        return sheets

for filename in ['conciliacao-icms.xlsx', 'quadro-mensal-17-meses.xlsx']:
    p = ROOT / 'output/auditoria-icms' / filename
    require(p.is_file(), 'Planilha ausente: ' + filename)
    if not p.is_file():
        continue
    sheets = workbook(p)
    if filename.startswith('quadro-mensal'):
        q = sheets['Quadro mensal']
        months = []
        for row in range(10, 27):
            serial = q.get(f'A{row}')
            require(serial is not None, f'Competência vazia no quadro, linha {row}')
            if serial is not None:
                if 'T' in serial or re.match(r'^\d{4}-\d{2}-\d{2}$', serial):
                    months.append(datetime.fromisoformat(serial.replace('Z', '+00:00')).strftime('%Y%m'))
                else:
                    months.append((datetime(1899, 12, 30) + timedelta(days=float(serial))).strftime('%Y%m'))
            for col in ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O']:
                require(q.get(f'{col}{row}') in (None, ''), f'Entrada interna não vazia no modelo: {col}{row}')
            require(q.get(f'N{row}') == 'Pendente', f'Status inicial não pendente: linha {row}')
        expected_months = [f'2025{m:02d}' for m in range(1, 13)] + [f'2026{m:02d}' for m in range(1, 6)]
        require(months == expected_months, 'Quadro não cobre os 17 meses na ordem correta')
        for c, expected_value in [('B28', '31204899.67'), ('C28', '15138595.93'), ('D28', '16066303.74')]:
            require(money(q.get(c)) == Decimal(expected_value), 'Total XLSX divergente em ' + c)
        for row in [19, 25]:
            require(q.get(f'B{row}') == 'Não consta no anexo' and q.get(f'C{row}') in (None, '') and q.get(f'D{row}') == 'Não disponível', 'Mês não informado virou zero')
    checks.append(filename + ': estrutura ZIP e ausência de erros de fórmula verificadas')

for line in checks:
    print('OK:', line)
if errors:
    for line in errors:
        print('ERRO:', line)
    sys.exit(1)
print('RESULTADO: pacote íntegro e aritmética conferida. Não é validação jurídica nem conciliação das bases internas.')
