# Escopo da verificação deste pacote

Este pacote transfere contexto e trabalho preparatório. Não comprova regularidade fiscal, imposto devido, ausência de multa, eficácia de declaração ou resultado de representação.

## Evidências já produzidas

- PDF original copiado byte a byte e comparado por SHA-256.
- Três páginas visualmente inspecionadas; a tabela da terceira foi lida como imagem.
- Quinze competências transcritas, somas e diferenças conferidas com aritmética decimal.
- Dois meses ausentes preservados como indisponíveis no modelo de dezessete meses.
- Primeira planilha: fórmulas recalculadas, teste de mudança temporária de R$ 100 e restauração, sem erros de fórmula, abas renderizadas.
- Modelo de dezessete meses: recálculo e restauração, testes de meses ausentes e entradas internas sem geração automática de deduções, revisão visual e integridade do XLSX.
- Planilhas verificadas no Artifact Tool e por leitura do XLSX; não foram abertas no aplicativo Microsoft Excel nesta sessão.
- Documentação de continuidade revisada; links locais atuais verificados. O histórico conserva caminhos antigos como referências históricas.
- Busca de padrões comuns de credenciais nos arquivos textuais candidatos sem ocorrências; isso não é auditoria universal de segurança.

## Reproduzir

Execute `python3 scripts/validar_pacote.py` a partir de qualquer diretório. O script resolve a raiz, compara os arquivos com `MANIFESTO.json`, confere o hash do PDF, a tabela CSV em Decimal e a estrutura/valores essenciais das planilhas. Requer apenas Python 3.9 ou superior.

O manifesto exclui a si próprio para evitar referência circular. Se o destinatário modificar legitimamente os arquivos, os hashes alterados serão apontados; isso distingue o pacote recebido de versões posteriores. Preservar uma cópia inicial antes de continuar.

## Não confundir com concluído

Não houve validação criptográfica da assinatura do PDF, acesso autenticado à SEF/Braip/bancos, validação dos documentos internos, execução da conciliação por venda, apuração de tributo ou transmissão de ato fiscal.

O modelo de dezessete meses tem campos internos vazios. O campo de status é manual. Não contém mecanismo completo de deduplicação nem calcula as vendas sem nota; esses passos dependem da próxima fase com arquivos reais.
