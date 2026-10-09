# Quadro da advogada — método dos seis itens

Referência: 09/10/2026. **Modelo não executado: faltam os relatórios financeiros, fiscais e operacionais internos.** Somente o PDF fiscal foi disponibilizado à equipe. Zoop, ASAAS e Nubank são fontes indicadas para investigação; sua participação no cálculo e qualquer duplicidade não estão comprovadas.

## Estrutura mensal e ponto de partida

Criar **17 linhas**, janeiro/2025 a maio/2026, na ordem cronológica. Outubro/2025 e abril/2026 estão ausentes do PDF: registrar “não informado”, nunca zero. O total conhecido corresponde às outras quinze competências.

O quadro deve começar pelo agregado financeiro do Fisco, preservando também o faturamento comparado e a diferença:

- **F — financeiro:** R$ 31.204.899,67, denominado `VENDAS_CARTAO`, já incluindo crédito, transferências e PIX; não somar PIX novamente.
- **B — faturamento considerado:** R$ 15.138.595,93; origem/campos ainda dependem da memória da SEF.
- **D — diferença analítica positiva:** F − B = R$ 16.066.303,74. O PDF apresenta o sinal inverso: −R$ 16.066.303,74; preservá-lo em campo original.

**Não começar pelos R$ 16 milhões e descontar novamente todas as notas fiscais.** Parte delas pode já integrar B.

| Item solicitado | Conteúdo e regra de cálculo |
|---|---|
| **1. Valor do Fisco** | Manter F, B e D originais, por mês, com página/linha da fonte. Registrar separadamente os valores corrigidos. |
| **2. Duplicidade Braip + outras fontes** | Excluir somente a parcela repetida comprovadamente incluída em F. Vincular as duas linhas fiscais ao mesmo evento econômico. Um saque, repasse ou crédito bancário correspondente à venda não prova que o Fisco o somou duas vezes. |
| **3. Juros do parcelamento** | Separar preço, acréscimo cobrado do comprador, beneficiário do acréscimo, taxa da plataforma e custo da antecipação. Ajustar somente encargos comprovadamente incluídos em F e juridicamente excluíveis; não aplicar percentual genérico. |
| **4. Devolvida / chargeback / em análise** | Discriminar status, datas, valor efetivamente revertido, prova e efeito fiscal. “Em análise”, reserva, bloqueio e retenção não geram abatimento automático. Estorno financeiro e devolução fiscal não são equivalentes. |
| **5. Notas emitidas, inclusive em outro mês** | Vincular XML/protocolo, emissão, saída, escrituração e transmissão. Marcar quanto da nota já está coberto por B e em qual mês. Só acrescentar cobertura ainda ausente; deslocamentos entre meses precisam de contrapartida. |
| **6. Sobra sem nota com ID Braip** | Informar separadamente vendas efetivamente comprovadas sem documento e saldo não identificado. Residual aritmético não comprova venda nem ausência de nota. Cada venda confirmada exige ID Braip e evidência da operação. |

## Fórmulas e travas

Por mês, definir **U** = duplicidade comprovada; **J** = encargos excluíveis; **C** = ajuste admissível de cancelamento/devolução; **ΔB** = correção documentada da cobertura fiscal e sua alocação temporal.

`F_ajustado = F − U − J − C`

`B_ajustado = B + ΔB`

`Residual = F_ajustado − B_ajustado`

Cada ajuste deve incidir sobre parcela ainda não ajustada. Exemplo: se uma venda foi reportada duas vezes, retirar a repetição primeiro; eventual cancelamento atua sobre a operação remanescente. Não descontar novamente juros ou notas atribuídos à linha já eliminada.

Nota incluída em B de março, mas vinculada à operação de fevereiro: a realocação analítica exige **+valor em fevereiro e −valor em março**, se comprovadamente cabível. Seu efeito total no intervalo é zero. Operações fora do intervalo exigem controle de fronteira. A conciliação analítica não altera, por si, declarações ou competência legal.

Não truncar saldos negativos para zero nem compensá-los livremente com meses positivos. Eles podem revelar alocação errada, faturamento não correspondente à população financeira ou ajuste excessivo. Demonstrar as divergências até resolver sua causa.

## Juros: distinção jurídica obrigatória

A [LC 87/1996, art. 13, §1º, II, “a”](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp87.htm) inclui juros e outras importâncias na base. O [RICMS/MG, art. 19, I, “a”](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms2023/regulamento2023.pdf) alcança valores recebidos/debitados pelo vendedor.

A **Súmula 395/STJ** trata da venda a prazo, em que o acréscimo integra o preço; a **Súmula 237/STJ** afasta encargos de financiamento por cartão distintos da compra e venda. O [acórdão oficial no AgRg no Ag 1.305.819/DF](https://scon.stj.jus.br/SCON/GetInteiroTeorDoAcordao?dt_publicacao=08%2F09%2F2010&num_registro=201000827502) explicita a diferença entre financiamento pelo vendedor e financiamento autônomo por instituição financeira. [Enunciados oficiais do STJ](https://www.stj.jus.br/docs_internet/jurisprudencia/tematica/download/SU/Sumulas/SumulasSTJ.pdf).

Logo, “Braip com juros e NF pelo preço do produto” é uma hipótese a testar. Se o acréscimo pertence ao vendedor, a nota pelo preço à vista pode estar incompleta. Se pertence ao financiador autônomo, examinar exclusão com contrato e liquidação. Se a fonte for DIMP, conferir se os encargos do portador já foram excluídos no campo `VALOR` do 1115, evitando novo abatimento. [Manual v9, p. 36](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a16___anexo_ii___dimp_v09-1.pdf).

## Provas e rastreabilidade

Manter anexo transacional que alimente o quadro: ID da linha fiscal, declarante, beneficiário, ID Braip, NSU/identificador financeiro, datas, valores, parcela alocada, chave fiscal, arquivo/protocolo, categoria, decisão e responsável. Uma venda pode ter múltiplos pagamentos/notas; controlar a soma das alocações.

Os [termos Braip de julho/2026](https://braip.com/termos_de_uso_new.pdf) distinguem retenção, análise e chargeback concluído, mas não comprovam condições históricas. Exigir os documentos da época. Devolução e retorno por não entrega devem observar os arts. 48 e 50 do RICMS/MG, além do estorno financeiro.

O [CCMG 23.607/23/2ª](https://www.fazenda.mg.gov.br/secretaria/conselho_contribuintes/acordaos/2023/2/23607232.pdf) evidencia a utilidade da vinculação pagamentos–notas e dos totalizadores mensais; não garante resultado antecipado. **Nenhum abatimento, imposto ou quantidade de vendas sem nota foi apurado neste modelo.**
