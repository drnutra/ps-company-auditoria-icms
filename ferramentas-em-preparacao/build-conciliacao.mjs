import fs from 'node:fs/promises';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const outDir = new URL('../output/auditoria-icms/', import.meta.url).pathname;
const workDir = new URL('../tmp/auditoria/', import.meta.url).pathname;
const workbook = Workbook.create();
const review = workbook.worksheets.add('Revisao mensal');
const tasks = workbook.worksheets.add('Pendencias');
const source = workbook.worksheets.add('Fonte SEF');
const dark = '#26384A';
const grey = '#EBEFF3';
const muted = '#596675';
const amber = '#FFF2CC';
const money = '#,##0.00;-#,##0.00;0.00';

// Transcrição visual da página 3. Os valores vazios permanecem null.
// Ordem: competência, agregado, crédito, débito, transferências, PIX, faturamento, diferença.
const records = [
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
const sumCents = idx => records.reduce((t,r)=>t+Math.round((r[idx] ?? 0)*100),0)/100;
const expected = {1:31204899.67,2:26074777.30,4:908633.33,5:4221489.04,6:15138595.93,7:-16066303.74};
for (const [k,v] of Object.entries(expected)) {
  if (sumCents(Number(k)) !== v) throw new Error(`Total da coluna ${k} diverge: ${sumCents(Number(k))}`);
}
for (const r of records) {
  const cents = n => Math.round((n??0)*100);
  if (cents(r[1]) !== [2,3,4,5].reduce((s,i)=>s+cents(r[i]),0)) throw new Error(`Meios divergem ${r[0]}`);
  if (cents(r[6])-cents(r[1]) !== cents(r[7])) throw new Error(`Diferença diverge ${r[0]}`);
}

function base(sheet,range) {
  sheet.showGridLines = false;
  sheet.getRange(range).format = {font:{name:'Arial',size:10,color:'#202B36'},verticalAlignment:'center',rowHeight:24};
}
function title(sheet,cell,text) {
  sheet.getRange(cell).values = [[text]];
  sheet.getRange(cell).format.font = {name:'Arial',size:16,bold:true,color:dark};
  sheet.getRange(cell).format.rowHeight = 32;
}
function header(sheet,range) {
  sheet.getRange(range).format = {
    fill:dark,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},
    horizontalAlignment:'center',verticalAlignment:'center',wrapText:true,rowHeight:43,
    borders:{insideVertical:{style:'thin',color:'#FFFFFF'}},
  };
}
function total(sheet,range) {
  sheet.getRange(range).format = {fill:grey,font:{name:'Arial',size:10,bold:true},borders:{top:{style:'thin',color:dark}}};
}
function widths(sheet,cols) { for (const [col,px] of Object.entries(cols)) sheet.getRange(`${col}1:${col}45`).format.columnWidthPx=px; }
function warnNonzero(sheet,range) {
  sheet.getRange(range).conditionalFormats.add('cellIs',{operator:'notEqual',formula:0,format:{fill:'#FDE9E7',font:{color:'#A61C16',bold:true}}});
}
function pendingFormatting(sheet,range) {
  sheet.getRange(range).conditionalFormats.add('containsText',{text:'Pendente',format:{font:{color:'#9A5B00',bold:true}}});
  sheet.getRange(range).conditionalFormats.add('containsText',{text:'Em revisão',format:{font:{color:'#275D9A',bold:true}}});
}

base(source,'A1:I28');
title(source,'A2','PS COMPANY LTDA — dados do anexo SEF/MG');
source.getRange('A3').values=[['Fonte: INTIMAÇÃO FISCAL SEFAZ-MG ICMS.pdf, página 3. Termo emitido em 31/08/2026.']];
source.getRange('A3').format.font={name:'Arial',size:10,italic:true,color:muted};
source.getRange('A5:I5').values=[['NM_CONTRIBUINTE','NR_ANO_MES','VENDAS_CARTAO','VR_TOTAL_CREDITO','VR_TOTAL_DEBITO','TRANSFERENCIA_RECURSOS','VR_TOTAL_PIX','FATURAMENTO','DIFERENCA']];
header(source,'A5:I5');
source.getRange('A6:I20').values=records.map(r=>['PS COMPANY LTDA',...r]);
source.getRange('B6:B20').format.horizontalAlignment='center';
source.getRange('C6:I23').setNumberFormat(money);
source.getRange('C6:I20').format.font.color='#24549C';
source.getRange('C6:I26').format.horizontalAlignment='right';
source.getRange('H21:I21').values=[['TOTAL do PDF',-16066303.74]];
total(source,'H21:I21');
source.getRange('A23').values=[['Totais calculados']];
for (const col of ['C','D','F','G','H','I']) source.getRange(`${col}23`).formulas=[[`=SUM(${col}6:${col}20)`]];
source.getRange('E23').values=[[null]];
total(source,'A23:I23');
source.getRange('A25').values=[['Desvio dos meios (R$)']];
source.getRange('C25').formulas=[['=ROUND(C23-SUM(D23:G23),2)']];
source.getRange('D25').values=[['Agregado menos soma dos meios: resultado esperado 0,00.']];
source.getRange('A26').values=[['Desvio total PDF (R$)']];
source.getRange('C26').formulas=[['=ROUND(I23-I21,2)']];
source.getRange('D26').values=[['Total das diferenças menos total do PDF: resultado esperado 0,00.']];
source.getRange('C25:C26').setNumberFormat(money);
warnNonzero(source,'C25:C26');
source.getRange('A28').values=[['Vazios preservados. VENDAS_CARTAO agrega crédito, transferências e PIX. Não somar PIX novamente ao agregado.']];
source.getRange('A28').format.font={name:'Arial',size:10,italic:true,color:muted};
widths(source,{A:195,B:110,C:153,D:153,E:153,F:180,G:153,H:153,I:153});
source.freezePanes.freezeRows(5);

base(review,'A1:I30');
review.tabColor=dark;
title(review,'A2','PS COMPANY LTDA — revisão mensal');
review.getRange('A4').values=[['Diferença do anexo (R$)']];
review.getRange('D4').formulas=[['=D26']];
review.getRange('D4').setNumberFormat(money);
review.getRange('D4').format.font={name:'Arial',size:16,bold:true,color:dark};
review.getRange('A5').values=[['Base preliminar interna. Não apura ICMS e não está pronta para protocolo.']];
review.getRange('A6').values=[['Outubro/2025 e abril/2026 não constam no anexo. Ausência não significa valor zero.']];
review.getRange('A7').values=[['Campos amarelos: preencha status, documentos e fundamento de cada competência. Conclusões exigem revisão.']];
review.getRange('A5:A7').format.font={name:'Arial',size:10,color:muted};
review.getRange('A9:I9').values=[['Competência','VENDAS_CARTAO\n(R$)','FATURAMENTO\n(R$)','Diferença calculada\nC − B (R$)','DIFERENCA\noriginal (R$)','Desvio aritmético\nD − E (R$)','Status da revisão','Documentos / referência','Justificativa / fundamento verificado']];
header(review,'A9:I9');
for(let i=0;i<records.length;i++) {
  const row=i+10, src=i+6, key=records[i][0];
  review.getRange(`A${row}`).values=[[new Date(`${key.slice(0,4)}-${key.slice(4)}-01T12:00:00Z`)]];
  review.getRange(`B${row}:F${row}`).formulas=[[
    `='Fonte SEF'!C${src}`,`='Fonte SEF'!H${src}`,`=ROUND(C${row}-B${row},2)`,
    `='Fonte SEF'!I${src}`,`=ROUND(D${row}-E${row},2)`,
  ]];
}
review.getRange('A10:A24').setNumberFormat('mm/yyyy');
review.getRange('A10:A24').format.horizontalAlignment='center';
review.getRange('B10:F26').setNumberFormat(money);
review.getRange('B10:F26').format.horizontalAlignment='right';
review.getRange('G10:G24').values=[['Pendente']];
review.getRange('G10:I24').format.fill=amber;
review.getRange('G10:G24').dataValidation={rule:{type:'list',values:['Pendente','Em revisão','Documentada para revisão']}};
pendingFormatting(review,'G10:G24');
warnNonzero(review,'F10:F24');
review.getRange('A26').values=[['TOTAL']];
for(const col of ['B','C','D','E']) review.getRange(`${col}26`).formulas=[[`=SUM(${col}10:${col}24)`]];
total(review,'A26:E26');
review.getRange('A28').values=[['O desvio aritmético confere a transcrição. O valor negativo preserva o sinal do anexo e não representa ICMS calculado.']];
review.getRange('A29').values=[['Nenhuma justificativa deduz valores automaticamente. Vincule venda, nota, declaração e pagamento antes de concluir.']];
review.getRange('A28:A29').format.font={name:'Arial',size:10,italic:true,color:muted};
widths(review,{A:115,B:153,C:153,D:155,E:153,F:135,G:178,H:220,I:310});
review.freezePanes.freezeRows(9);
review.freezePanes.freezeColumns(1);

base(tasks,'A1:F23');
title(tasks,'A2','Documentos e verificações pendentes');
tasks.getRange('A4').values=[['Registre responsável, status e evidência. O prazo depende do comprovante de ciência e dos atos posteriores.']];
tasks.getRange('A4').format.font={name:'Arial',size:10,color:muted};
tasks.getRange('A6:F6').values=[['ID','Documento / verificação','O que precisa comprovar','Responsável','Status','Evidência / observação']];
header(tasks,'A6:F6');
const checks=[
  ['P01','Comprovante de ciência da intimação','Data, meio de recebimento e destinatário.'],
  ['P02','Atos e comunicações posteriores','Respostas, prorrogações, início de ação fiscal ou autuação.'],
  ['P03','Detalhamento dos valores da SEF/MG','Dados por instituição e operação; DIMP, se utilizada.'],
  ['P04','Exportação completa da Braip','Vendas, produtos, produtor/afiliado, cancelamentos e reembolsos.'],
  ['P05','XMLs, protocolos e eventos de NF-e','Notas autorizadas, canceladas e rejeitadas vinculadas às vendas.'],
  ['P06','Declarações e apuração estaduais','EFD, DAPI/DAPI Virtual quando aplicáveis e recolhimentos dos períodos.'],
  ['P07','Conciliação das 15 competências','Documento de suporte para cada diferença apontada.'],
  ['P08','Outubro/2025 e abril/2026','Motivo da ausência no anexo e cobertura da investigação.'],
  ['P09','Notas emitidas em atraso','Causa comprovada, datas e saldo pendente por competência.'],
  ['P10','Dezenove PIX do Nubank','Data, valor, pagador, causa econômica e comprovante de cada PIX.'],
  ['P11','Mentoria e produtos digitais','Contratos, descrição do serviço, participação nas vendas e NFS-e.'],
  ['P12','Regime tributário nos períodos','Lucro Presumido informado. Confirmar a vigência documental.'],
  ['P13','Revisão tributária antes de formalizar','Enquadramento, espontaneidade, obrigações e cálculos documentados.'],
  ['P14','Resposta final e protocolo','Revisão pelo contador e jurídico, anexos e comprovante de entrega.'],
];
tasks.getRange('A7:F20').values=checks.map(c=>[...c,null,'Pendente',null]);
tasks.getRange('B7:C20').format.wrapText=true;
tasks.getRange('A7:F20').format.rowHeight=43;
tasks.getRange('D7:F20').format.fill=amber;
tasks.getRange('E7:E20').dataValidation={rule:{type:'list',values:['Pendente','Em revisão','Obtido','Revisado']}};
pendingFormatting(tasks,'E7:E20');
tasks.getRange('A22').values=[['O status é manual e não representa conclusão automática sobre dívida, prazo, benefício ou regularização.']];
tasks.getRange('A22').format.font={name:'Arial',size:10,italic:true,color:muted};
widths(tasks,{A:55,B:285,C:445,D:165,E:130,F:350});
tasks.freezePanes.freezeRows(6);

// Recalculation tests. Temporary changes are always restored before export.
workbook.recalculate();
const value = (s,c) => s.getRange(c).values[0][0];
const close=(a,b)=>Math.abs(a-b)<0.005;
if(!close(value(review,'D26'),-16066303.74)) throw new Error('Soma principal divergente');
if(!close(value(review,'B26'),31204899.67) || !close(value(review,'C26'),15138595.93)) throw new Error('Totais principais divergentes');
source.getRange('C6').values=[[990956.85]];
workbook.recalculate();
if(!close(value(review,'D10'),-455647.85) || !close(value(review,'D4'),-16066403.74)) throw new Error('Recalculo não propagou');
source.getRange('C6').values=[[990856.85]];
workbook.recalculate();
if(!close(value(review,'D4'),-16066303.74)) throw new Error('Restauração incorreta');
if(value(source,'E6')!==null || value(source,'F10')!==null) throw new Error('Vazios alterados');
if(value(review,'H10')!==null || value(review,'I10')!==null || value(review,'G10')!=='Pendente') throw new Error('Pendência incorreta');
for(let r=10;r<=24;r++) if(!close(value(review,`F${r}`),0)) throw new Error('Desvio não zero');
console.log(JSON.stringify({rows:records.length,independentTotals:expected,recalculation:'passed',restoration:'passed',blankPreservation:'passed'}));

const inspection=await workbook.inspect({kind:'table',range:"'Revisao mensal'!A24:F26",include:'values,formulas',tableMaxRows:3,tableMaxCols:6,maxChars:3500});
console.log(inspection.ndjson);
const errors=await workbook.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:100},summary:'final formula error scan',maxChars:2500});
console.log(errors.ndjson);
await fs.writeFile(`${workDir}/verification.json`,JSON.stringify({expected,inspection:inspection.ndjson,errors:errors.ndjson},null,2));
for(const [sheetName,range,name] of [['Revisao mensal','A1:I30','review'],['Pendencias','A1:F23','pending'],['Fonte SEF','A1:I29','source']]) {
  if(process.env.RENDER_CHANGED && name!==process.env.RENDER_CHANGED) continue;
  const preview=await workbook.render({sheetName,range,scale:1.5,format:'png'});
  await fs.writeFile(`${workDir}/${name}.png`,new Uint8Array(await preview.arrayBuffer()));
}
await fs.mkdir(outDir,{recursive:true});
const output=await SpreadsheetFile.exportXlsx(workbook);
await output.save(`${outDir}/conciliacao-icms.xlsx`);
try { await fs.rename(`${outDir}/conciliacao-icms.xlsx.inspect.ndjson`,`${workDir}/conciliacao-icms.xlsx.inspect.ndjson`); } catch(e) { if(e.code!=='ENOENT') throw e; }
console.log(`SAVED ${outDir}/conciliacao-icms.xlsx`);
