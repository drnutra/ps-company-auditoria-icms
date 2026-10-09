# Coleta interativa — um documento por vez

Esta sequência é a orientação expressa mais recente do usuário. O destinatário tem os documentos em seu computador. A IA deve conduzir a coleta sem pedir tudo ao mesmo tempo e sem repetir arquivos já válidos.

## Como conduzir cada rodada

1. Solicitar **um documento ou conjunto homogêneo específico**, informando a finalidade. Se houver múltiplos meses, pode receber um arquivo consolidado/exportação ou ZIP desse mesmo tipo, sem exigir reenvio individual inútil.
2. Abrir o arquivo, verificar legibilidade, empresa, período, filtros, formato, completude, IDs e campos necessários. Em PDF, verificar imagens/tabelas; OCR não substitui conferência dos números.
3. Preservar o original e registrar nome, hash, origem, período, data de recebimento, resultado da validação e pendências.
4. Responder brevemente: o que recebeu, o que comprovou e se o item ficou completo. Se faltou algo, pedir somente a complementação daquele item.
5. Passar ao próximo documento ainda necessário. Não despejar toda a lista abaixo para o usuário de uma vez.

Durante a coleta, não afirmar duplicidade, inexistência de nota, imposto devido ou benefício fiscal. Validar conteúdo e cobertura; reservar a auditoria global e a pesquisa atualizada para depois da documentação necessária.

## Primeiro pedido

“Envie o comprovante de recebimento/ciência da intimação de 31/08/2026: registro do DT-e/SIARE, aviso de recebimento ou comunicação original com a data de recebimento. A intimação já está no repositório; agora precisamos estabelecer o prazo e a fase do procedimento.”

Se o documento não existir ou não estiver disponível, registrar a resposta e pedir o próximo elemento específico que possa esclarecer a ciência. Não transformar ausência do comprovante em ausência de intimação. Se houver prazo iminente, sinalizar imediatamente à pessoa/advogada; a coleta não suspende o prazo.

## Fila recomendada, adaptável ao conteúdo recebido

| Ordem | Documento específico | O que deve resolver |
|---|---|---|
| 1 | Comprovante de ciência/recebimento | Data, meio, destinatário e início da contagem. |
| 2 | Primeira comunicação/ato posterior ainda não visto | Resposta, prorrogação, AIAF ou AI; pedir cada ato cronologicamente até completar o histórico. |
| 3 | Planilha analítica/memória do cruzamento da SEF, se fornecida | Instituições, beneficiários, IDs, composição de FATURAMENTO, período, versões e ajustes já realizados. Se indisponível, registrar necessidade de solicitação formal; não inventar transações. |
| 4 | Planilha de conferência de notas já enviada à advogada | Quais fontes foram usadas, cobertura, colunas, vínculos e conclusões ainda preliminares. Pedir versões adicionais somente se necessário. |
| 5 | Exportação completa de vendas Braip | Janeiro/2025–maio/2026, todos os status, ID da venda, produto, datas, parcelas, valores e beneficiário. |
| 6 | Exportação financeira/carteira Braip | Créditos, taxas, juros, antecipações, saques, reservas, estornos e vínculo com vendas. |
| 7 | Contrato/configuração histórica do parcelamento Braip | Quem financiou e recebeu juros, estrutura de produtor/coprodutor/afiliado, versões vigentes. |
| 8 | Relatório Zoop do período pertinente | Identificadores e operações que podem corresponder às vendas Braip. |
| 9 | Relatório ASAAS do período pertinente | Mesmo objetivo, sem presumir sobreposição. |
| 10 | Extrato Nubank do período pertinente | Movimentações e vínculos; distinguir venda e repasse já registrado. |
| 11 | Comprovante do primeiro dos dezenove PIX ainda não explicado | Identificar transação e causa econômica. Depois pedir o documento de suporte correspondente, um por vez, até os dezenove estarem tratados. |
| 12 | Pacote XML de NF-e/NFC-e com protocolos/eventos | Notas válidas/canceladas, emissão/autorização, vínculo; incluir meses posteriores ligados às vendas. |
| 13 | Relatório/pacote de NFS-e e declarações municipais | Prestação, competência, cancelamentos, tomador; considerar sistemas municipais antigo e novo. |
| 14 | Relatório de cancelamentos/chargebacks/devoluções Braip | Evento original, valor, data e desfecho; pedir provas adicionais conforme lacuna. |
| 15 | Prova operacional específica de devolução/entrega pendente | Distinguir estorno financeiro, retorno físico, não entrega e venda ainda em análise. |
| 16 | Documentação dos produtos digitais/mentoria | Oferta/contrato, serviço entregue, preço e participação própria; pedir cada material necessário separadamente. |
| 17 | EFD original e retificadora da competência prioritária | Escrituração, débitos, recibos e estado do período. Expandir para demais meses afetados. |
| 18 | DAPI/DAPI Virtual e apuração correspondente | Fonte da declaração comparada, dispensa histórica e saldos. |
| 19 | Comprovante de recolhimento vinculado | Evitar pagar de novo imposto já recolhido; guia emitida não basta. |
| 20 | Prova do regime/opções de 2025 e 2026 | Lucro Presumido histórico e caixa/competência; demais reflexos somente se relevantes. |
| 21 | Fichas/entradas dos produtos físicos necessários ao cálculo | NCM, CEST, origem/destino, ST, CST/CFOP, benefícios e créditos. |

Esta fila é um roteiro interno, não lista para pedir de uma vez. Dispensar documento sem pertinência ou já suprido por outro, registrando o motivo. Se surgir questão nova, inserir um pedido específico antes da conclusão.

## Registro da coleta

Criar localmente `entrada-local/inventario-documentos.csv` ou formato equivalente com: ID, arquivo, SHA-256, origem, período, empresa, tipo, recebimento, legível, completo, validações, lacunas, substitui/é substituído por, situação. Nunca alterar o original para corrigir dados.

Situações: `não recebido`, `recebido em validação`, `complementação necessária`, `validado para análise`, `indisponível declarado`, `dispensado com fundamento`. “Validado” aqui significa apto à análise, não regularidade tributária.

## Quando iniciar a nova auditoria geral

Antes de mudar de fase, apresentar um resumo: recebidos, dispensados, indisponíveis e o efeito de cada lacuna. Todos os elementos essenciais devem estar validados; se algum faltar, pedir o próximo documento específico. Não declarar a coleta completa por cansaço ou por encerramento do envio.

Se o usuário declarar que um documento essencial não existe/não pode ser obtido, registrar a limitação e o que pode ou não ser concluído. Uma análise parcial pode ser preparada como parcial, sem transformá-la em representação conclusiva completa.

Após a coleta, a IA deverá: revalidar legislação e jurisprudência na data da execução; pesquisar questões reveladas pelos arquivos; reproduzir os totais fiscais; conciliar integralmente por operação; revisar ajustes, prazos e consequências; preparar quadro mensal, anexos, relatório e minuta compatível com a fase. A autorização para preparar não é autorização automática para protocolar ou reconhecer dívida.
