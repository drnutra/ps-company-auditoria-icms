# Ferramentas auxiliares e estado de execução

Estes arquivos são apoio técnico. Leia o código e as dependências antes de executar. A análise não exige reexecutá-los; os XLSX entregues são arquivos comuns.

- `build-conciliacao.mjs`: builder usado para a primeira planilha, dependente de `@oai/artifact-tool` e originalmente do runtime Codex. Pode conter caminhos do computador de origem. Resultado já produzido em `output/auditoria-icms/conciliacao-icms.xlsx`.
- `verification.json`: evidência de QA da primeira planilha, não certificação de fatos tributários.
- `build-quadro-17-meses.mjs`: builder do modelo mais recente. Depende de `@oai/artifact-tool`; utiliza diretório relativo e aceita `OUTPUT_DIR`. O modelo não apura deduções/sem nota automaticamente.
- `build_report.py`: script preparado para um PDF completo, **não executado para gerar o relatório final**. Depende de ReportLab, pdfplumber, pypdf, fontes Arial e ajustes de caminhos para o ambiente. Não há Markdown final integrado nem PDF final decorrente dele neste pacote.

Se reexecutar builders, usar cópia de trabalho e preservar os arquivos entregues. Não apresentar a existência de um script como prova de relatório ou auditoria concluídos.
