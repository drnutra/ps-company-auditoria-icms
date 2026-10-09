> **Pesquisa da primeira rodada.** Consulte [correções prioritárias](../docs/CORRECOES_E_REGRAS_CRITICAS.md) e os relatórios em `segunda-auditoria/` antes de aplicar conclusões.

# Braip, DIMP e conciliação — pesquisa em 09/10/2026

## Conclusão operacional

A divergência mensal agregada precisa ser decomposta em operações identificáveis. A pesquisa pública não permite concluir que a diferença seja integralmente mercadoria sem nota, que os 19 PIX sejam novas vendas, ou que exista duplicidade na informação fiscal. Cada uma dessas possibilidades depende de prova transacional. Não acessamos contas privadas; os campos abaixo são requisitos de auditoria propostos, não promessa de que uma exportação Braip contenha todos eles.

## 1. O que as fontes confirmam

**DIMP não é cadastro exclusivo de vendas tributáveis pelo ICMS.** O Convênio ICMS 134/2016 alcança instituições e intermediadores financeiros, pagamentos e intermediários de serviços/negócios, inclusive usuários sem inscrição estadual. Há fluxos de declaração distintos para pagamentos e intermediação; a obrigação pode ser transferida a outra instituição. Isso justifica identificar o declarante e o evento informado; não demonstra cobrança duplicada no caso concreto. [Convênio, cláusulas terceira, terceira-A, quarta e quinta](https://www.confaz.fazenda.gov.br/legislacao/convenios/2016/CV134_16). [Orientação SEF/MG](https://www.fazenda.mg.gov.br/empresas/instituicoes-e-intermediadores-de-pagamentos-servicos-e-negocios/).

**Versão histórica exige cuidado.** O Ato COTEPE 124/2025 manteve a DIMP v9 até 31/05/2026 e deslocou a v10 para 01/06/2026. Portanto o PDF v10 ainda encontrado na busca com fevereiro/2026 não deve ser seguido isoladamente para o período investigado. Conferir versão dos arquivos originais/substitutos efetivamente usados pela SEF. [Ato 124/2025, arts. 1–4](https://www.confaz.fazenda.gov.br/legislacao/atos/2025/ato-cotepe-icms-124-25).

**Manual v9:** o registro 1115 contempla valor integral de transação parcelada por competência, sem juros/encargos pagos pelo portador à instituição financeira; identifica NSU, autorização, pedido/transação, natureza de pagamento e split. O split admite repetição de identificadores entre beneficiários, logo identificador repetido isoladamente não prova duplicidade. O registro 1200 informa cancelamentos extemporâneos com datas original/cancelamento, valores original/cancelado e tipo; operações canceladas no mesmo mês não devem ser enviadas nesse fluxo. Arquivo substituto sobrescreve informações do período. Transações financeiras consolidadas têm regras próprias, incluindo liquidação. Não presumir uma mesma regra temporal para todos os registros. [Manual oficial v9, pp. 1, 31–33, 36–38 e 43–45](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a11-anexo-ii-dimp-v09.pdf).

**Braip:** os termos públicos atuais, atualizados em 27/07/2026, distinguem produtor, afiliado, coprodutor, carteira virtual, saque e antecipação. A definição de “transações” também abrange comissões, transferências bancárias e internas. Há descontos de tarifas, estornos e retenções; antecipação adianta recebíveis preexistentes. Saque é transferência da carteira para o banco. Esses termos são posteriores às competências analisadas: solicitar contratos/versões aceitas na época, sem presumir aplicação retroativa. [Termos atuais, pp. 3–4, 11–15 e 18–19](https://braip.com/termos_de_uso_new.pdf).

O termo de compra atribui ao produtor a emissão da nota ao comprador; não afirma que o comprovante Braip seja documento fiscal. [Termos de compra, p. 10](https://braip.com/termos_de_compra.pdf). A central pública separa perfis de produtor e afiliado, mas não localizei documentação oficial pública que confirmasse um leiaute de exportação, nomes de colunas ou caminho atual para exportar vendas. Solicitar o arquivo nativo real e seu dicionário ao suporte, sem reutilizar instruções de Hotmart/Kiwify como se fossem da Braip. [Central oficial](https://ajuda.braip.com/).

## 2. Bruto, líquido e titularidade

O art. 12 do Decreto-Lei 1.598 diferencia o produto das vendas por conta própria, preço de serviços e resultado de operações por conta alheia. Logo, primeiro se prova o papel da empresa por contrato, oferta ao comprador, titularidade do produto, responsabilidade por entrega/reembolso e documentação. Rótulos no painel e percentuais de split não bastam. [DL 1.598, art. 12](https://www.planalto.gov.br/ccivil_03/decreto-lei/del1598.htm).

**Não deduzir automaticamente da receita de venda taxas Braip, comissões de afiliados, repasses de coprodução ou custos de antecipação para chegar ao depósito líquido.** A SC Cosit 94/2025 trata especificamente de criador de cursos no Simples: naquela estrutura, receita é o total vendido, sem comissão da plataforma ou parcela do coprodutor. É um alerta contra o raciocínio “recebi só minha parte”, mas não decisão específica sobre esta empresa no Lucro Presumido nem sobre ICMS/ISS. [DOU, Cosit 94/2025](https://pesquisa.in.gov.br/imprensa/servlet/INPDFViewer?captchafield=firstAccess&data=27%2F06%2F2025&jornal=515&pagina=53).

## 3. Pacote documental proposto

Solicitar os meses completos de 01/2025 a 05/2026, inclusive os ausentes da planilha fiscal; agregar períodos anteriores/posteriores apenas para rastrear parcelas, cancelamentos e emissões tardias vinculados ao intervalo.

1. **SEF:** memória de cálculo editável, fonte de “faturamento”, CNPJ de cada instituição declarante, detalhe transacional atribuído à empresa, identificação dos arquivos/retificações e tratamento aplicado a cancelamentos e repasses. Pedir explicação da ausência de competências.
2. **Braip:** exportações integrais com todos os status; extrato da carteira e saques; comissões pagas/recebidas; antecipações, taxas, reservas e liberações; estornos dentro e fora da plataforma; contratos e configuração histórica de produtor/coprodutor/afiliado. A falta de coluna deve virar pendência, nunca valor zero.
3. **Fiscal:** XML de NF-e/NFC-e com protocolo e eventos, NFS-e e cancelamentos, EFD original e retificadora com recibos, DAPI, memória de apuração e DAE/pagamentos. Acrescentar declarações federais e escrituração contábil para outra frente da auditoria.
4. **Operação:** pedidos/itens, logística e comprovantes de saída, entrega e retorno; catálogo e descrição real dos serviços digitais; contratos, acessos e entregas da mentoria.
5. **Bancos:** extratos completos e comprovantes individualizados dos 19 PIX, identificação do pagador, identificador de transação e documento da causa econômica. Nome do remetente sozinho não classifica receita, empréstimo, repasse ou devolução.

## 4. Algoritmo proposto — executável quando os arquivos chegarem

**A. Preservar e normalizar.** Guardar originais, versão, hash, data de extração e filtros. Datas de compra, aprovação, saída/serviço, nota, liberação, saque e cancelamento ficam em colunas distintas. Valores monetários devem ser tratados em centavos. Não apagar tentativas falhas ou linhas repetidas sem decisão auditável.

**B. Separar entidades.** Manter tabelas de pedidos/itens, eventos de pagamento, participantes, documentos fiscais, movimentações de carteira/banco e declarações. Uma venda pode gerar várias parcelas, notas ou eventos; um saque pode liquidar muitas vendas. Evitar junções que multipliquem o total.

**C. Identificar vínculos.** Priorizar chave documental e identificador de pedido/transação. Combinação de CPF/CNPJ, produto, valor e datas serve como candidato, com revisão; igualdade de valor/data não constitui prova suficiente. Registrar vínculo, evidência, responsável, critério e confiança.

**D. Montar ponte financeira.** Para cada período, explicar saldo inicial da carteira, créditos atribuídos, deduções, retenções/liberações, ajustes, saques e saldo final. Só aplicar a equação depois de ler a semântica real do extrato: alguns sistemas já mostram créditos líquidos. Vincular o saque ao crédito bancário e nunca somar os dois como vendas distintas.

**E. Reproduzir a planilha fiscal.** Primeiro reproduzir os totais sem ajustes; depois criar uma ponte de diferenças mutuamente exclusivas: mercadoria documentada; serviço documentado; documento emitido em outra competência; cancelamento/devolução comprovado; pagamento/repasse já relacionado; operação de terceiro comprovada; possível duplicidade a confirmar; venda efetiva sem nota; origem pendente. Nenhuma hipótese reduz o valor sem evidência e fundamento.

**F. Apurar por operação e competência.** Entregar lista de notas faltantes e atrasadas, quantidade/valor por mês, mercadorias por NCM/CFOP/CST/destino, notas de serviços, bases/alíquotas aplicáveis, débitos/créditos já escriturados e pagamentos. Refazer as apurações afetadas para evitar cobrança dupla e separar erro documental de imposto efetivamente não recolhido.

## 5. Notas posteriores e devoluções

Nota emitida depois pode ajudar a identificar a operação, mas não demonstra por si que a obrigação original foi cumprida ou o imposto pago corretamente. A CC-e não pode alterar data de emissão/saída nem variáveis de imposto. Não corrigir datas ficticiamente; verificar o procedimento de regularização e escrituração com a contabilidade. [SEF/MG — Carta de Correção](https://portalsped.fazenda.mg.gov.br/spedmg/nfe/Carta-de-Correcao/).

Reembolso financeiro, cancelamento de nota e devolução física são eventos diferentes. O RICMS/MG possui condições para crédito em devolução por não contribuinte, inclusive hipóteses/prazos e emissão de nota de entrada. Seu art. 19 também alcança importâncias acessórias na base. Portanto não subtrair todo chargeback como reversão de ICMS sem verificar circulação e documentação. Examinar a redação vigente na data de cada operação. [RICMS/2023, arts. 19 e 48](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/regulamento2023_1.html).

**Limite desta pesquisa:** nenhum valor ajustável foi confirmado. A internet fornece regras e requisitos; os arquivos da empresa e a memória analítica da SEF demonstrarão a composição real da divergência.
