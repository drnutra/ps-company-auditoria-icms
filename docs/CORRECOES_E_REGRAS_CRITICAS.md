# Correções e regras críticas para continuar a auditoria

**Referência: 09/10/2026.** Leia este arquivo antes dos relatórios antigos. Ele consolida a segunda auditoria; não substitui os documentos empresariais, os textos legais nem a revisão do contador e da advogada. Revalide normas, sistemas e andamento ao executar.

## 1. Estado real do trabalho

- Empresa: **PS COMPANY LTDA, Lagoa Santa/MG**. Lucro Presumido foi informado pelo usuário; “Débito e Crédito” consta do termo estadual. Confirmar ambos nos períodos relevantes.
- Documento conhecido: intimação de **31/08/2026**, Delegacia Fiscal de Divinópolis, com quinze competências. A ciência e os atos posteriores não estão comprovados.
- O usuário relata que relatórios Braip, planilhas e outros documentos estão com o destinatário deste repositório. **Esses arquivos internos não foram examinados nesta pesquisa.** Não confundir sua existência relatada com recebimento ou validação.
- Há pesquisa, minuta e planilha preparatória. **O quadro real pedido pela advogada ainda não foi executado.** Não afirmar que abatimentos, vendas sem nota, imposto líquido, protocolo ou regularização estejam concluídos. Este arquivo também não atesta produção de um PDF final.

Prioridade documental: documento empresarial original → evidência vinculada → cálculo reproduzível → conclusão revisada. Texto de conversa não prevalece sobre esses elementos.

## 2. Executar o quadro solicitado: dezessete meses, seis itens

Siga [o método detalhado da advogada](../pesquisa/segunda-auditoria/quadro_advogada_metodo.md). Crie **17 linhas, janeiro/2025 a maio/2026**. Outubro/2025 e abril/2026 não aparecem no PDF: registrar **“não informado”**, nunca zero.

Preserve os três valores originais, sem lhes atribuir natureza tributária antecipadamente:

| Campo | Total conhecido das quinze competências |
|---|---:|
| F: financeiro do Fisco, coluna `VENDAS_CARTAO` | R$ 31.204.899,67 |
| B: `FATURAMENTO` usado pelo Fisco | R$ 15.138.595,93 |
| D: diferença analítica F − B | R$ 16.066.303,74 |

O PDF apresenta a diferença com sinal negativo: preserve também esse campo original. **F já inclui crédito, transferências e PIX.** Não somar PIX novamente. A composição de B depende da memória do cruzamento.

| Item da advogada | Executar e exigir |
|---|---|
| **1. Valor apontado** | Exibir F, B e D por mês, fonte/página e campos originais. Separar valores corrigidos. |
| **2. Mesma venda declarada duas vezes** | Vincular duas linhas efetivamente incluídas em F ao mesmo evento. Investigar Braip, Zoop, ASAAS e Nubank; sua sobreposição ainda não está provada. Repasse bancário correspondente não demonstra soma duplicada pelo Fisco. |
| **3. Juros do parcelamento** | Separar preço, acréscimo do comprador, beneficiário, taxa comercial e antecipação. Deduzir apenas encargo incluído em F e juridicamente excluível. |
| **4. Devolução, chargeback ou análise** | Separar cada status, data, reversão efetiva, documento e efeito fiscal. “Em análise”, reserva, bloqueio e retenção não permitem abatimento automático. Chargeback não prova retorno da mercadoria. |
| **5. Nota existente, inclusive em outro mês** | Vincular XML, autorização, saída, escrituração e transmissão. Identificar quanto já integra B e em qual mês. Não deduzir todas as notas novamente dos R$ 16 milhões. |
| **6. Sobra sem nota, com ID Braip** | Listar operações confirmadas sem documento com seus IDs. Manter **saldo não identificado separado**: residual aritmético não comprova venda nem ausência de nota. |

Use `F_ajustado = F − U − J − C`, `B_ajustado = B + ΔB` e `Residual = F_ajustado − B_ajustado`. U é duplicidade comprovada; J, encargo excluível; C, reversão admissível; ΔB, correção documentada da cobertura fiscal.

Cada parcela só pode ser ajustada uma vez. Excluir duplicidade antes de tratar a operação remanescente. Realocar nota entre meses exige contrapartida: aumento num mês e redução no outro, quando cabível. Controle eventos fora do intervalo. **Não truncar saldo negativo nem compensar meses livremente.** Realocação analítica não altera competência legal ou declaração automaticamente.

O anexo transacional deve conter linha fiscal, declarante, beneficiário, ID Braip, identificador financeiro, datas, valores, alocações, chave fiscal, prova, decisão e responsável. Teste relações um-para-muitos para impedir multiplicação em junções.

## 3. Juros: corrigir a hipótese antes de descontar

**Súmula 395/STJ:** acréscimo da venda a prazo integra o preço. **Súmula 237/STJ:** encargos de financiamento autônomo por cartão não se confundem com preço da compra. Exigir contrato histórico, liquidação e identificação de quem recebe o acréscimo. Nota pelo preço à vista pode estar incompleta se o acréscimo pertencer ao vendedor.

Se a origem for DIMP, conferir se o `VALOR` do registro 1115 já excluiu os encargos do portador; não deduzi-los novamente. Tarifa da plataforma e custo de antecipação não viram abatimento por serem descontos do saque. Fontes: [LC 87, art. 13](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp87.htm), [distinção expressa no STJ](https://scon.stj.jus.br/SCON/GetInteiroTeorDoAcordao?dt_publicacao=08%2F09%2F2010&num_registro=201000827502), [manual DIMP v9, p. 36](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a16___anexo_ii___dimp_v09-1.pdf).

## 4. Corrigir os erros jurídicos e operacionais antigos

| Tema | Regra obrigatória para a continuação |
|---|---|
| **Cinco dias** | Localizar ciência, meio e objeto. A regra geral mineira é contínua, mas o **Anexo V, Parte 2, art. 22** prevê cinco dias **úteis** para documentos/arquivos ali previstos. Qualificar a exigência; não aplicar nenhuma regra indiscriminadamente. Pedido de prazo não suspende por si. |
| **LC 236/2026** | Não adiar toda a lei por dois anos nem importar imediatamente dias úteis para qualquer intimação. As transições são específicas. A exclusão da mora na denúncia já tinha respaldo jurisprudencial anterior. |
| **Espontaneidade** | O termo conhecido é compatível com cruzamento auxiliar; isso não comprova a situação atual. Obter AIAF, AI, prorrogações e demais atos. Separar tributo nunca declarado, declarado sem pagamento e diferença retificada/paga. Parcelamento não satisfaz, por si, o art. 138 do CTN; benefício estadual específico da isolada é distinto. |
| **Caso do Rio Grande do Sul** | EDcl no AgInt no REsp 2.166.139/RS tratou de **pagamento à vista no REFAZ 2019**, redução de 90% de juros/multas e renúncia expressa. Corrigir a descrição antiga de simples parcelamento. |
| **Teto de 50%** | O limite mineiro do art. 55, §2º, I, não é universal. Separar isolada, revalidação, mora e demais hipóteses. Avaliar retroatividade benigna e cada penalidade. |
| **Tema 487/STF** | Confrontar isoladas com os limites e modulação da tese final: 60%/100% vinculadas a tributo; 20%/30% da operação sem tributo vinculado. Preservar limite estadual de 50% quando mais favorável. Não usar limites anuais de votos que não integraram a tese. |
| **EFD substituta** | Dispensa de autorização e recibo de recepção **não garantem eficácia**. Ação fiscal e dívida ativa têm restrições na cláusula 13, §§7º–9º, do Ajuste SINIEF 02/09. Conferir período, objeto e fundamento antes de transmitir. |
| **DIMP** | Não presumir que seja a fonte nem que uma revisão v9 sirva para todo arquivo. Conferir `COD_VER`, revisão/hash, finalidade, envio e substituições. Arquivo retroativo tem regras próprias; registros 1115/1120/1200/1220/1500/1600 não são parcelas independentes somáveis. |

Fontes e desenvolvimento: [procedimento](../pesquisa/segunda-auditoria/procedimento.md), [normas e multas](../pesquisa/segunda-auditoria/normas_multas.md), [DIMP](../pesquisa/segunda-auditoria/dimp_metodo.md), [apuração integrada](../pesquisa/segunda-auditoria/apuracao_integrada.md); [regra especial de prazo/EFD](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/anexov2023_4.html), [Ajuste SINIEF 02/09](https://www.confaz.fazenda.gov.br/legislacao/ajustes/2009/AJ_002_09), [Tema 487/STF](https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=4071634&numeroTema=487), [CTN consolidado](https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm).

## 5. Controles materiais que não podem desaparecer

- **PIX:** comprovar origem econômica de cada um dos 19 recebimentos; nome do remetente não basta. Não rotular empréstimo, aporte ou receita sem documento e correspondência de datas/valores.
- **Digitais:** segregar mentoria, consultoria, conteúdo e comissão conforme operação real. Ausência de NFS-e não transforma automaticamente serviço em mercadoria. Provar participação e documentação. Controlar a exclusão da população ICMS sem dupla dedução.
- **Notas:** separar nota existente, escrituração tardia, complemento e operação nunca documentada. Não fabricar datas, destinatários, justificativa de falha sistêmica ou NF global da diferença.
- **Tributação:** classificar SKU, NCM/CEST, destino, consumidor, ST, benefício, DIFAL/FEM e créditos admissíveis. A hipótese mineira de 18% para omissão/arbitramento exige análise; não é cálculo definitivo do passivo.
- **Pagamento:** ligar operação, débito, competência, guia e quitação. DAPI/DAPI Virtual e conta-corrente precisam fechar. DAPI dispensada desde julho/2026 não resolve automaticamente 2025–maio/2026.
- **Precedentes:** 23.607/23/2ª é modelo de prova, não salvo-conduto para nota de outro estabelecimento; confrontar o adverso 5.981/25/CE. Ver [auditoria dos julgados](../pesquisa/segunda-auditoria/provas_julgados.md).

## 6. Sequência e critério de encerramento

1. Resolver ciência, prazo e fase atual; responder com provas disponíveis sem presumir prorrogação.
2. Receber bases integrais e memória da SEF; inventariar arquivos, períodos e lacunas.
3. Reproduzir os totais originais; executar quadro e anexo transacional; revisar ajustes sem sobreposição.
4. Apurar somente operações identificadas; revisar reflexos municipais/federais quando a conciliação alterar receita, período ou classificação.
5. Comparar vias reais com contador/advogada. Ver [regularização](../pesquisa/segunda-auditoria/vias_regularizacao.md). Simulação não autoriza confissão; não inserir R$ 16 milhões como dívida. REFIS 2024 não alcança estas competências; descontos do Regularize não são garantidos.
6. Concluir apenas com cálculos revisados, pendências explícitas, documentos/recibos consistentes, pagamentos comprovados e tratamento administrativo confirmado. **Pesquisar mais não substitui executar e provar essas etapas.**
