# Segunda auditoria — DIMP, Braip e método de conciliação

Data de corte: 09/10/2026. Revisados `braip_conciliacao.md`, `jurisprudencia_dimp.md` e `dossie-icms.md`. Pesquisa pública, sem acesso a contas ou consulta ao CNPJ da empresa. Os valores empresariais não foram reauditados nesta etapa.

**Conclusão:** o método geral é adequado, mas precisa identificar a revisão e a finalidade de cada arquivo DIMP, tratar suas regras temporais por registro e separar a conciliação econômica da apuração fiscal. Não há prova de duplicidade, de que a fonte do PDF seja DIMP, nem de que seus valores sejam integralmente vendas tributáveis.

## Confirmado

### 1. Cadeia normativa e documentos efetivamente conferidos

A consolidação do [Ato COTEPE 65/18](https://www.confaz.fazenda.gov.br/legislacao/atos/2018/ato-cotepe-icms-65-18), seu histórico e os atos individuais mostram:

| Documento | Achado relevante |
|---|---|
| [148/23](https://www.confaz.fazenda.gov.br/legislacao/atos/2023-1/ato-cotepe-icms-148-23) | Desde novembro/2023, disciplina versão no envio de arquivos retroativos e opção histórica para finalidade 3. |
| [177/23](https://www.confaz.fazenda.gov.br/legislacao/atos/2023-1/ato-cotepe-icms-177-23) | Instituiu revisão v9, MD5 `598c866e3193187bdc7a965d528a6113`. |
| [158/24](https://www.confaz.fazenda.gov.br/legislacao/atos/2024/ato-cotepe-icms-158-24) | Instituiu v10, com vigência na publicação; o [manual correspondente](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a19-anexo-ii-dimp-v10.pdf), p. 8, previa obrigatoriedade em junho/2025. MD5 conferido: `a962baaae671d48427efd1eb44838903`. |
| [44/25](https://www.confaz.fazenda.gov.br/legislacao/atos/2025/ato-cotepe-icms-44-25) | Outra revisão v10, efeitos previstos em fevereiro/2026. [PDF](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a06___anexo_ii___dimp_v10.pdf) com MD5 conferido `0a56fbedeb7d3b8f29f909fdb50b62ba`. |
| [80/25](https://www.confaz.fazenda.gov.br/legislacao/atos/2025/ato-cotepe-icms-80-25) | Nova revisão v10, mantendo fevereiro/2026; o hash normativo é `efc2487edb5c5f0948703b169712a62e`. |
| [124/25](https://www.confaz.fazenda.gov.br/legislacao/atos/2025/ato-cotepe-icms-124-25) | Revogou os três atos anteriores. Estabeleceu revisão v9 de 26/09/2025 a 31/05/2026 e v10 desde 01/06/2026. |

Consultei também o [índice oficial de 2026](https://www.confaz.fazenda.gov.br/legislacao/atos/2026): não localizei nova alteração da DIMP. Não confundir o Ato 81/25, relativo ao resumo RCAD, com o Ato 80/25 sobre o leiaute DIMP.

Os dois PDFs hoje ligados pelo [catálogo de manuais](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais) correspondem exatamente aos hashes do Ato 124/25:

- [v9, 52 páginas](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a16___anexo_ii___dimp_v09-1.pdf): `176500a50cde51dc5560f5cb62f07031`.
- [v10, 58 páginas](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a16___anexo_iv_dimp_v10.pdf): `1c6d50499b76f664163eb0d07ae79ab3`; tabela da p. 6 confirma junho/2026.

### 2. Alcance e Braip

O [Convênio 134/16, cláusulas terceira e terceira-A](https://www.confaz.fazenda.gov.br/legislacao/convenios/2016/CV134_16), alcança pagamentos e intermediação de serviços/negócios, inclusive beneficiários sem inscrição estadual. Informação financeira não é uma classificação automática de incidência do ICMS.

Os [termos Braip](https://braip.com/termos_de_uso_new.pdf) indicam atualização em **27/07/2026** na primeira página. As definições 17–21 distinguem venda, comissão, transferência, saque e antecipação de crédito já existente. Há deduções, retenções e liberação de saldo. Isso sustenta a necessidade de reconstruir a carteira, mas não prova os contratos e as condições de 2025–maio/2026.

## Corrigir ou qualificar

**1. Não escrever que uma única revisão v9 rege necessariamente todos os arquivos das quinze competências.** O Ato 124/25 sustenta diretamente seu intervalo expresso, não identifica o leiaute dos arquivos anteriores ou posteriormente retransmitidos. Pelo art. 1º, §§4º–5º, do Ato 65/18, há regra de versão vigente no envio de arquivos retroativos e exceção para finalidade 3. Conferir `COD_VER`, finalidade, data de entrega e substituições. A anotação do Ato 177/23 na consolidação reproduz texto/hash incompatíveis com o ato original; usar o original nessa reconstrução, sem transformar erro editorial em tese de nulidade.

**2. Corrigir a referência documental.** `braip_conciliacao.md` usa `a11-anexo-ii-dimp-v09.pdf`, de 48 páginas: seu MD5 é o do Ato 177/23, não o do Ato 124/25. O dossiê já aponta o PDF de 52 páginas. O [histórico v9](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a16___anexo_iii___dimp_v9___historico_de_alteracoes.pdf), MD5 conferido `c1e71bb4b87bc54450d2db72785f028f`, registra alterações, inclusive em intermediação e identificação de pedidos. Não misturar páginas/campos entre revisões.

**3. Regras essenciais da revisão v9/124:**

- 1115: valor integral do parcelamento; exclui juros/encargos do portador à instituição. Naturezas 3/4/6/8 observam liquidação; parcelamento garantido e natureza 2, captura integral.
- 1120: complementa intermediação; inclui pedido, destinatário e campos fiscais. Repetição pode ser legítima, inclusive em split.
- 1200 cancela 1115; 1220 complementa cancelamento de intermediação; 1600 cancela 1500. Não descontar os três como eventos independentes.
- Cancelamento no próprio mês não deve compor o fluxo; o extemporâneo referencia operação anterior. Usar valor cancelado, não somar valores originais reiterados.
- 1500 é consolidado. Suas referências a captura, liquidação confirmada, período e extemporaneidade exigem leitura conjunta; boleto apresenta redações temporais que demandam esclarecer o critério aplicado.

Referência: [manual v9/124, pp. 34–49](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a16___anexo_ii___dimp_v09-1.pdf). Não há base para usar universalmente a data do saque.

**4. Não converter “bruto versus líquido” em abatimento.** O valor da venda, valor atribuído ao beneficiário, comissão, tarifa, juros do comprador, custo de antecipação e depósito bancário devem ficar separados. A exclusão de encargos do portador na DIMP não autoriza deduzir taxas comerciais do vendedor. A RFB distingue vendas próprias e resultado de operações por conta alheia; o papel contratual precisa ser demonstrado. [RFB, Perguntas e Respostas PJ, pergunta 003, p. 158](https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/ecf/perguntas-e-respostas-da-pessoa-juridica-2022/@@download/file/PeRPJ2022v1.pdf). A Cosit 94/2025 permanece limitada à estrutura de cursos/Simples examinada; não resolve diretamente esta empresa.

**5. Datas de ICMS exigem trilha própria.** No RICMS/2023, arts. 6º, V, e 7º, I, resultado financeiro e saída são conceitos diferentes; existem fatos equiparados/especiais. A opção federal por caixa não desloca automaticamente o ICMS. Devolução por não contribuinte e retorno por entrega frustrada têm requisitos distintos nos arts. 48 e 50. Chargeback sozinho não prova retorno nem crédito fiscal. [Regulamento oficial](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms2023/regulamento2023.pdf).

**6. Incluir remessas e entrega futura.** Uma operação pode produzir simples faturamento e notas de saída parcial. Vinculá-las evita contar duas vendas; remessa não pode ser descartada sem verificar natureza e efeitos. Os arts. 215–217 do [Anexo VIII](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms2023/anexoviii2023.pdf) disciplinam entrega futura, saída e desfazimento anterior à entrega. Não usar números do regulamento antigo.

**7. Ajustar o algoritmo:** minhas recomendações técnicas são preservar camadas independentes de evento econômico, pagamento, declaração, documento fiscal e banco; testar cardinalidade antes de qualquer junção; controlar alocações parciais e cobertura dos valores. Igualdade de NSU, CPF, data ou montante produz candidato, não exclusão automática. Categorias como “nota tardia”, “serviço” e “cancelamento” são dimensões que podem coexistir: o ajuste monetário precisa de identificador único para não ser descontado duas vezes.

**8. Não presumir sobreposição sistêmica.** O [histórico v9, registros 1100/1500](https://www.confaz.fazenda.gov.br/legislacao/arquivo-manuais/a16___anexo_iii___dimp_v9___historico_de_alteracoes.pdf) documenta exclusões como mesma titularidade/mesma raiz de CNPJ, empréstimos e liquidação via SLC/CIP de crédito, débito e antecipações; também determina envio quando há dúvida sobre enquadramento/remetente. A mera coexistência de cartão e transferência bancária não demonstra que ambos entraram no cálculo. Sócios comuns não equivalem a mesma raiz cadastral.

## Pendente — dados indispensáveis

1. **Origem fiscal:** instituição, beneficiário, arquivo, finalidade, versão, entrega, retificação aceita e transformação que produziu cada coluna. Especificar fonte/campo de `FATURAMENTO`. O PDF, conforme os documentos revisados, não confirma DIMP.
2. **Detalhe nativo:** preservação dos registros e seus pais, identificação da instituição parceira, adquirente/liquidante, meio de captura, natureza, split, pedido, datas e cancelamentos. Se só houver consolidação mensal, pedir analítico complementar; não inventar transações para repartir total.
3. **Braip/banco:** arquivos integrais e dicionários reais, contratos históricos, comissões pagas/recebidas, reservas, liberações, antecipações e saques. Solicitar E2E/identificador PIX quando disponível no comprovante, sem afirmar que seja uma coluna nativa DIMP/Braip. Demonstrar a relação dos dezenove PIX com o universo fiscal.
4. **Cortes:** coletar todos os dezessete meses de janeiro/2025 a maio/2026, incluindo outubro/2025 e abril/2026 ausentes da tabela, além de eventos anteriores/posteriores vinculados. Não tomar ausência de competência como zero.
5. **Teste da possível duplicidade:** comparar o mesmo evento entre declarantes, carteira e banco, documentando se a SEF já eliminou sobreposição. Repasses e antecipações são hipóteses a rastrear, não percentuais dedutíveis.

Nenhum desses ajustes está quantificado ou comprovado no caso concreto. O trabalho seguinte deve reproduzir o cálculo original, explicar diferenças com documentos e só então refazer a apuração por operação e competência.
