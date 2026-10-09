# PS Company — continuidade da auditoria fiscal

**Repositório privado. Referência da pesquisa: 09/10/2026.** Pacote de continuidade da análise de uma intimação de ICMS da SEF/MG. Contém o documento fornecido, o histórico visível, as pesquisas de duas auditorias, modelos de planilha e instruções para a próxima IA. Não contém as bases internas da Braip, Zoop, ASAAS, Nubank ou notas fiscais da empresa.

## Comece por aqui

1. Leia [AGENTS.md](AGENTS.md).
2. Leia [o comando de continuidade](PROMPT_CONTINUACAO.md).
3. Leia [o estado atual](docs/ESTADO_ATUAL.md) e [as correções prioritárias](docs/CORRECOES_E_REGRAS_CRITICAS.md).
4. Siga [a coleta de um documento por vez](docs/COLETA_DOCUMENTO_POR_DOCUMENTO.md).
5. Só depois de concluir a coleta, faça a nova pesquisa atualizada, a auditoria integral dos dados e a representação, conforme [método do quadro solicitado](pesquisa/segunda-auditoria/quadro_advogada_metodo.md).

**Instrução mais recente do usuário:** a IA deve pedir um documento por vez, conferir cada envio e só pedir o seguinte depois. Após receber os documentos necessários, deve fazer nova varredura e auditoria geral. Não pedir um pacote genérico inteiro nem reiniciar perguntas já respondidas. Alertas de prazo devem ser tratados durante a coleta.

## O que existe e o que ainda não existe

| Situação | Conteúdo |
|---|---|
| Conferido | PDF de três páginas, leitura visual, tabela de quinze competências, somas e diferenças. |
| Pesquisado | Legislação e decisões oficiais, duas rodadas de auditoria, correções e limitações registradas. |
| Preparado | Dossiê inicial, minuta inicial não enviada, planilha de quinze competências e modelo de dezessete meses. |
| Relatado pelo usuário | Os relatórios e planilhas empresariais estão no computador do destinatário, prontos para serem enviados. |
| Ainda não recebido neste trabalho | Relatórios transacionais, extratos, XMLs/NFS-e, declarações, ciência e atos posteriores. |
| Ainda não executado | Conciliação real dos seis itens, identificação definitiva de vendas sem nota, cálculo de imposto, relatório final integrado e representação final. |
| Não realizado | Emissão de notas, retificações, protocolos, comunicações ao Fisco, pagamentos ou parcelamentos. |

Não há PDF final da segunda auditoria: o trabalho foi redirecionado para transferência antes da sua redação/renderização. O script existente é preparação técnica, não prova de relatório concluído.

## Mapa dos arquivos

| Caminho | Finalidade e limite |
|---|---|
| `documentos-originais/intimacao-sefaz-mg-2026-08-31.pdf` | Cópia byte a byte do PDF recebido; fonte documental central. |
| `documentos-originais/pagina-1.png` a `pagina-3.png` | Renderizações para leitura visual. |
| `documentos-originais/anexo-pagina-3.png` | Tabela extraída como imagem; a extração textual sozinha não a contém. |
| `documentos-originais/extracao-textual.txt` | Texto auxiliar; incompleto quanto à tabela rasterizada. |
| `dados/fisco-15-competencias.csv` | Transcrição conferida da tabela, vazios e sinal original preservados. |
| `dados/fatos-confirmados.json` | Fatos conhecidos, totais em centavos, hash do original e pendências. |
| `historico/conversa-visivel.md` e `.json` | Mensagens de usuário e respostas visíveis; versões antigas não prevalecem sobre correções posteriores. |
| `docs/ESTADO_ATUAL.md` | Contexto do caso, pedidos e o ponto exato de continuidade. |
| `docs/CORRECOES_E_REGRAS_CRITICAS.md` | Leitura obrigatória para evitar repetição de erros e generalizações. |
| `docs/COLETA_DOCUMENTO_POR_DOCUMENTO.md` | Sequência interativa, critérios de recebimento e liberação da auditoria. |
| `pesquisa/*.md` | Primeira rodada: procedimento, denúncia, jurisprudência, Braip, digitais e notas. Histórico técnico. |
| `pesquisa/segunda-auditoria/*.md` | Revisões mais recentes e método específico dos seis itens. Prevalecem sobre sínteses antigas nos pontos corrigidos, sujeitos às fontes reais. |
| `pesquisa/segunda-auditoria/fontes-regularizacao/` | Formulários públicos oficiais, não preenchidos nem protocolados. |
| `output/auditoria-icms/dossie-icms.md` | Dossiê inicial; ler com as correções da segunda auditoria e o pedido posterior da advogada. |
| `output/auditoria-icms/minuta-pedido-dados-prazo.md` | Minuta inicial não enviada; deve incorporar resposta material, estágio e ciência antes do uso. |
| `output/auditoria-icms/conciliacao-icms.xlsx` | Primeira base mensal; não é conciliação transacional. |
| `output/auditoria-icms/quadro-mensal-17-meses.xlsx` | Modelo mais recente, com seis itens e dezessete meses; ajustes em branco e pendentes. Não calcula saldo sem nota automaticamente. |
| `scripts/validar_pacote.py` | Validação reprodutível do manifesto, fonte, dados e somas; não valida direito tributário. |
| `validacao/MANIFESTO.json` | Inventário com SHA-256 dos arquivos do pacote. |
| `ferramentas-em-preparacao/` | Builders e evidências de QA; opcionais, alguns dependentes do runtime Codex/Mac. Não executar cegamente. |
| `entrada-local/` | Destino recomendado dos novos documentos; ignorado pelo Git por padrão. |

## Números que a próxima IA precisa preservar

- Agregado financeiro do Fisco, `VENDAS_CARTAO`: **R$ 31.204.899,67**.
- `FATURAMENTO` utilizado na tabela: **R$ 15.138.595,93**.
- Diferença original: **−R$ 16.066.303,74**. Diferença analítica `F − B`: positiva, mesmo valor absoluto.
- O agregado já inclui crédito, transferências e PIX; não somar novamente.
- O anexo tem quinze competências. A entrega solicitada tem dezessete: janeiro/2025 a maio/2026. Outubro/2025 e abril/2026 não estão no anexo, o que não significa valor zero.
- Esses valores são apontamentos do documento, não imposto ou dívida reconhecida.

## Validação local

Após baixar ou clonar, a partir da raiz:

```bash
python3 scripts/validar_pacote.py
```

Em Windows, pode ser necessário `py -3 scripts/validar_pacote.py`. O validador usa apenas a biblioteca padrão. Para ler os XLSX, use Excel, LibreOffice ou uma biblioteca de leitura; não é necessário executar os builders.

## Privacidade e acesso

O repositório é privado porque contém documento empresarial e contexto fiscal. O destinatário precisa de permissão para clonar pelo GitHub; alternativamente, o proprietário pode enviar uma cópia ZIP. Não tornar público para contornar falta de acesso. Não incluir credenciais, certificados privados, tokens ou senhas. Novos documentos e resultados locais não devem ser publicados automaticamente sem autorização do responsável.
