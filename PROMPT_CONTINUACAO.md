# Comando para a IA que continuará o caso

Copie o texto abaixo na IA que terá acesso aos documentos da empresa. Este comando contém a ordem mais recente do usuário e deve ser lido junto dos arquivos.

---

Você vai continuar um trabalho já iniciado de auditoria fiscal da PS COMPANY LTDA, estabelecida em Lagoa Santa/MG. Não comece do zero e não trate conclusões antigas como certezas. O objetivo é preparar, com documentos reais, a conciliação solicitada no texto encaminhado pelo usuário, possivelmente da advogada, a análise do melhor caminho e uma minuta de representação adequada à situação atual.

**REPOSITÓRIO DE CONTEXTO:** https://github.com/drnutra/ps-company-auditoria-icms

O repositório é privado. Se tiver acesso autenticado, use `gh repo clone drnutra/ps-company-auditoria-icms` ou `git clone https://github.com/drnutra/ps-company-auditoria-icms.git`. Se já recebeu a pasta/ZIP, trabalhe nela e não clone por cima. Se o acesso for negado, solicite acesso ao proprietário ou a cópia ZIP. Não tente contornar permissão, não torne o repositório público e não peça tokens ou senhas no chat.

## 1. SUA PRIMEIRA OBRIGAÇÃO: ENTENDER E DEPOIS COLETAR UM DOCUMENTO POR VEZ

Leia os arquivos nesta ordem:

1. `README.md` e `AGENTS.md`.
2. `docs/ESTADO_ATUAL.md`.
3. `docs/CORRECOES_E_REGRAS_CRITICAS.md`.
4. `docs/COLETA_DOCUMENTO_POR_DOCUMENTO.md`.
5. `pesquisa/segunda-auditoria/quadro_advogada_metodo.md`.
6. `documentos-originais/intimacao-sefaz-mg-2026-08-31.pdf`, incluindo as três páginas. A terceira contém tabela em imagem; veja também `documentos-originais/anexo-pagina-3.png`.
7. `dados/fatos-confirmados.json` e `dados/fisco-15-competencias.csv`.
8. Os demais relatórios de `pesquisa/segunda-auditoria/`, com atenção a procedimento, normas/multas, DIMP, provas/julgados, apuração integrada e vias de regularização.
9. `output/auditoria-icms/dossie-icms.md` e `minuta-pedido-dados-prazo.md`, sabendo que são versões iniciais anteriores a parte das correções e ao pedido completo do quadro.
10. `historico/conversa-visivel.md` para recuperar pedidos, respostas e evolução. Se houver contradição, documentos reais e correções verificadas prevalecem sobre frases antigas.

Quando possível, execute na raiz `python3 scripts/validar_pacote.py` ou `py -3 scripts/validar_pacote.py`. Se não puder, informe essa limitação e confira os arquivos diretamente. O script verifica integridade e aritmética do pacote, não regularidade fiscal.

**INSTRUÇÃO EXPRESSA DO USUÁRIO: primeiro você pedirá DOCUMENTO POR DOCUMENTO.** Não me dê uma lista enorme para enviar de uma vez. Não pule para parecer final, confissão, cálculo de imposto ou nova pesquisa genérica antes de reunir o necessário.

Sua primeira resposta, depois da leitura, deve ser curta: confirmar que entendeu a continuidade e pedir APENAS o comprovante de recebimento/ciência da intimação. Exemplo: “Já li o contexto. A intimação está no repositório. Agora envie o comprovante de ciência/recebimento — registro do DT-e/SIARE, aviso de recebimento ou comunicação original com a data — para estabelecermos o prazo e a fase do procedimento.”

A cada arquivo recebido: abra, confira conteúdo e cobertura, preserve original, registre nome/hash/período/empresa/campos/lacunas, diga o que ele comprova e só então peça o próximo documento necessário. Se vier incompleto ou ilegível, peça primeiro a complementação específica. Um ZIP de XMLs do mesmo tipo ou exportação consolidada pode ser recebido como um pacote documental homogêneo. Não pedir novamente o que já estiver válido.

Os documentos estão no meu computador ou posso enviá-los. Siga a fila recomendada em `docs/COLETA_DOCUMENTO_POR_DOCUMENTO.md`, adaptando aos arquivos reais. Não invente documentos, menus da Braip, nomes de colunas nem acesso aos sistemas.

Só depois de os documentos necessários estarem recebidos e validados para análise, faça uma NOVA VARREDURA atualizada e a AUDITORIA GERAL. Se algo essencial não existir ou não puder ser obtido, registre a ausência e seu efeito; não declare tudo completo artificialmente. Uma análise limitada deve ser identificada como limitada. Durante a coleta, sinalize prazo urgente imediatamente; o fato de estarmos reunindo documentos não suspende prazo.

## 2. CONTEXTO JÁ CONHECIDO

- Empresa: PS COMPANY LTDA; município Lagoa Santa, Minas Gerais.
- Lucro Presumido foi informado pelo usuário; confirmar documentalmente sua vigência em 2025/2026. O termo indica ICMS por Débito e Crédito.
- Termo da Delegacia Fiscal de Divinópolis, emitido em 31/08/2026, pedindo esclarecimentos em cinco dias do recebimento.
- A cópia não comprova a ciência nem atos posteriores. Não calcular vencimento pela data de emissão.
- O próprio termo menciona denúncia espontânea e ação fiscal futura. Isso não comprova que a oportunidade continue aberta hoje.
- Dados agregados confirmados: `VENDAS_CARTAO` R$ 31.204.899,67; `FATURAMENTO` R$ 15.138.595,93; diferença original −R$ 16.066.303,74.
- O agregado já soma crédito R$ 26.074.777,30, transferências R$ 908.633,33 e PIX R$ 4.221.489,04. Não somar PIX novamente.
- O anexo contém 15 competências. O quadro pedido deve conter 17 meses de janeiro/2025 a maio/2026. Outubro/2025 e abril/2026 não estão no anexo: ausência não é zero nem regularidade.
- Os R$ 16 milhões são divergência apontada, NÃO imposto apurado ou dívida confessada.
- DIMP é fonte possível, ainda não comprovada como a origem concreta do cruzamento.
- Nesta pesquisa anterior NÃO foram recebidos relatórios da Braip, Zoop, ASAAS, Nubank, XMLs ou planilhas internas. Sua existência foi relatada, mas não examinada.

## 3. A ENTREGA EXATA NO PEDIDO ENCAMINHADO PELO USUÁRIO

Montar um quadro único, mês a mês, de janeiro de 2025 a maio de 2026, com:

1. Valor apontado pelo Fisco na intimação.
2. Quanto é a mesma venda declarada duas vezes — Braip e Zoop, ASAAS ou Nubank.
3. Quanto corresponde a juros do parcelamento — alegação de que Braip informa com juros e a nota sai pelo preço do produto.
4. Quanto é venda devolvida, chargeback ou em análise.
5. Quanto tem nota emitida, mesmo que transmitida em outro mês.
6. O que sobra sem nota, COM O CÓDIGO DA VENDA BRAIP.

Também responder às quatro dúvidas iniciais: possibilidade de regularização/denúncia sem multa; causa e correção dos atrasos e quantidade de notas pendentes por mês; origem dos 19 PIX de Zen Company, Zen Caps, TMB Educação, A&A Nutra e AG Nutra; participação de mentoria/digitais e emissão de notas de serviço.

Os seis itens não são fatos já provados nem autorização para descontar valores. Investigue as hipóteses com documentos. O modelo disponível está em `output/auditoria-icms/quadro-mensal-17-meses.xlsx`. Ele contém a base do Fisco e campos internos pendentes; não é a conciliação pronta, não apura automaticamente ajustes ou saldo sem nota. A planilha anterior de quinze meses também está preservada.

## 4. REGRAS OBRIGATÓRIAS DA CONCILIAÇÃO

Preserve separadamente F = agregado financeiro, B = faturamento considerado pelo Fisco e D = F − B. O sinal original negativo do anexo precisa permanecer rastreável. Não partir dos R$ 16 milhões e subtrair novamente todas as notas que já integram B.

Trabalhe em duas camadas: explicação financeira/documental e apuração tributária. Uma diferença temporal ou financeira explicada não dispensa automaticamente uma obrigação fiscal.

Use um anexo transacional com ID Braip, instituição declarante, linha/registro fiscal, beneficiário, identificador financeiro, pedido/produto, datas de compra/aprovação/saída/prestação/liquidação/nota/transmissão/estorno, valores bruto/produto/juros/taxas/líquido, chave/status fiscal, competência, valor já coberto, evidência, ajuste e responsável pela revisão. Use centavos ou Decimal e preserve as versões originais.

Duplicidade exige demonstrar que DUAS linhas efetivamente incluídas no apontamento representam a mesma parcela da mesma operação. Não presumir duplicidade porque há Braip e Nubank ou porque um saque corresponde a uma venda. Verificar se o Fisco já eliminou sobreposição. ID repetido pode ser split legítimo. Testar relações um-para-muitos antes de juntar tabelas para não multiplicar valores.

Juros não são abatimento automático. Distinguir financiamento autônomo por terceiro (Súmula 237/STJ) de acréscimo do preço cobrado pelo vendedor na venda a prazo (Súmula 395/STJ), além de tarifas e antecipação. Exigir contrato e beneficiário do encargo. Conferir se a fonte fiscal já excluiu juros. Nota apenas pelo preço à vista pode estar incompleta dependendo da operação.

Devolução, chargeback concluído, chargeback em disputa, reserva financeira, bloqueio e venda em análise devem aparecer separados. “Em análise” é informativo e NÃO abate por si. Reembolso não comprova retorno físico nem direito automático a crédito de ICMS. Não deduzir cancelamento já retirado da base fiscal.

Notas de outro mês precisam de vínculo verdadeiro. Separar emissão, autorização, saída/prestação, escrituração e transmissão. Identificar a parcela já incluída em B. Realocação entre meses exige contrapartida quando cabível; ela não altera automaticamente competência legal ou declarações.

Cada parcela ajustada deve ter ID único, valor, fonte, prova de inclusão no apontamento e fundamento. Evitar que uma venda com nota tardia e posteriormente cancelada seja descontada duas vezes. As dimensões podem coexistir, mas o ajuste monetário não pode se duplicar.

Modelo analítico: F_ajustado = F − duplicidade comprovada − encargo juridicamente excluível − reversão admissível; B_ajustado = B + correção comprovada de cobertura; residual = F_ajustado − B_ajustado. Essa fórmula não autoriza nenhuma exclusão sem prova. Serviços legítimos e valores alheios exigem tratamento documentado e coerente nas duas populações, sem abatimento repetido.

Residual NÃO equivale automaticamente a venda sem nota. Entregue separadamente: vendas confirmadas sem documento, cada uma com ID Braip e prova; e valores não identificados/não explicados. Não criar IDs para fazer fechar a conta, não zerar pendências e não truncar saldos negativos para esconder erro.

## 5. NOVA AUDITORIA DEPOIS DA COLETA

Revalide fontes primárias na data em que estiver trabalhando. Use o conhecimento existente como ponto de partida e pesquise as questões reais reveladas pelos arquivos, com legislação de cada período e decisões atuais. Confirme a fase antes de recomendar emissão, retificação, denúncia, defesa, pagamento ou parcelamento.

Leia especialmente as correções: EFD aceita não significa retificação eficaz sob ação fiscal; prazo de cinco dias tem regra geral e hipótese específica de dias úteis; versão DIMP depende de revisão, finalidade e envio; teto mineiro de 50% não vale para toda multa; Temas STF 487/816 e demais limites têm hipóteses/modulação; caso do REFAZ citado inicialmente era pagamento à vista com renúncia, não simples parcelamento. Não apresentar temas pendentes como julgados.

O caso favorável de marketplace não garante sucesso. Compare com o precedente adverso 5.981/25/CE e com a prova exigida. Nota de outro estabelecimento, contrato isolado, amostra pequena ou rótulo “empréstimo/mentoria” não substitui conciliação.

Separar venda física, serviço digital, comissão e valor de terceiro pela operação real. Não aplicar regras do Simples automaticamente ao Lucro Presumido. Tratar NFS-e/ISS, EFD/DAPI e eventuais reflexos federais conforme necessidade comprovada, sem presumir passivo só a partir da diferença estadual.

Antes da proposta final, fazer revisão independente das contas, cobertura, duplicidades, deslocamentos de competência, validade das provas, limites jurídicos e coerência das declarações. Não garantir resultado perfeito ou ausência de multa; demonstrar o que foi verificado e explicitar qualquer ponto residual.

## 6. ENTREGAS FINAIS E CRITÉRIOS DE CONCLUSÃO

Entregar:

1. Quadro mensal final dos 17 meses com os seis itens, fonte de cada valor e distinção entre original/ajuste/conclusão.
2. Anexo transacional auditável, permitindo sair de qualquer total mensal e chegar ao ID da venda, lançamento financeiro e documento fiscal.
3. Lista de vendas confirmadas sem nota por ID Braip, mês, valor e providência proposta.
4. Lista separada de valores/itens ainda não identificados, com motivo e documento faltante.
5. Respostas objetivas às quatro perguntas iniciais.
6. Memória dos cálculos tributários somente sobre operações apuradas, com principal, juros, cada multa/fundamento e pagamentos anteriores, evitando cobrança dupla.
7. Relatório completo com diagnóstico, alternativas, riscos concretos, melhor caminho fundamentado, ordem das ações e responsáveis sugeridos.
8. Minuta de representação/manifestação adequada ao ato real: esclarecimentos pré-fiscais, regularização ou impugnação, conforme os documentos. Não chamar toda petição de impugnação nem usar e-mail para substituir defesa em canal próprio.
9. Inventário dos documentos, versões, fontes e verificações executadas.

A minuta inicial do repositório NÃO está pronta para protocolo. Inclua primeiro a resposta material comprovada, depois pedidos delimitados. Solicitar dados ou prazo não suspende automaticamente o procedimento. Não confessar a diferença integral para obter simulação.

Não emitir nota, alterar declarações, aceitar TA/TA-e, enviar comunicação, protocolar, pagar, parcelar ou publicar novos documentos sem autorização específica do responsável e a revisão profissional pertinente. Prepare tudo de forma concreta e revisável. O representante habilitado decidirá e fará o ato correspondente.

Não existe PDF final integrado da segunda auditoria neste pacote. Há pesquisas completas, um dossiê inicial e modelos. Sua tarefa é continuar com os documentos reais e produzir a entrega conclusiva, sem fingir que uma pesquisa ou planilha preparatória já resolveu o caso.

Agora leia o repositório, registre o estado inicial e peça SOMENTE o primeiro documento necessário, conforme a seção 1. A cada envio, valide e avance um documento por vez. Depois da coleta, execute a nova varredura e auditoria geral até entregar o conjunto acima, com qualquer limitação real claramente registrada.
