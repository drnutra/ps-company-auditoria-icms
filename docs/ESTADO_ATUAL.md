# Estado atual e contexto integral de continuidade

Referência: 09/10/2026, America/Bahia. O usuário Diego trouxe perguntas recebidas pelo WhatsApp, primeiro atribuídas a um amigo/sócio. Depois encaminhou uma solicitação que acredita ter vindo da advogada. A atribuição à advogada é relato, não identidade profissional verificada.

## O problema

PS COMPANY LTDA, Lagoa Santa/MG, recebeu Termo de Intimação da Delegacia Fiscal de Divinópolis, datado de 31/08/2026. O termo compara informações de pagamentos com faturamento, pede esclarecimentos em cinco dias do recebimento e menciona denúncia espontânea antes de ação fiscal. O campo de recebimento está vazio na cópia. Não foram fornecidos comprovante de ciência, respostas, prorrogações ou atos posteriores.

O usuário informou **Lucro Presumido**. O PDF indica **Débito e Crédito** para ICMS. Confirmar a vigência histórica, sem aplicar regras do Simples só porque o termo contém um parágrafo padronizado sobre esse regime.

Foram recebidos apenas o PDF e os textos do usuário. As planilhas/relatórios citados como já enviados à advogada **não foram recebidos aqui**. Na última orientação, o usuário explicou que o destinatário da continuidade tem esses documentos no próprio computador e poderá encaminhá-los à nova IA.

## Quatro perguntas iniciais

1. Existem vendas da Braip sem nota nas planilhas; a empresa quer regularizá-las, emitir notas e recolher ICMS por denúncia espontânea sem multa?
2. Por que as notas atrasaram, se a falha foi corrigida e quantas notas ainda faltam, por mês?
3. O que são dezenove PIX no Nubank recebidos de Zen Company, Zen Caps, TMB Educação, A&A Nutra e AG Nutra?
4. Quanto representam a mentoria e outros produtos digitais vendidos na Braip e foram emitidas notas de serviço?

Não há resposta factual concluída para esses quatro itens. Não foram identificados remetentes por homônimos nem inventada causa dos pagamentos.

## Solicitação posterior — entrega central

O texto encaminhado explica que as planilhas de conferência de notas e os relatórios Braip já foram reunidos por eles. Falta um **quadro único, mês a mês, de janeiro de 2025 a maio de 2026**, mostrando:

1. Valor apontado pelo Fisco na intimação.
2. Quanto é a mesma venda declarada duas vezes: Braip e Zoop, ASAAS ou Nubank.
3. Quanto é juros do parcelamento: alegação de que a Braip informa com juros e a nota apresenta o preço do produto.
4. Quanto é venda devolvida, chargeback ou em análise.
5. Quanto tem nota emitida, mesmo transmitida em outro mês.
6. O que sobra sem nota, com o código da venda Braip.

Esses itens descrevem **hipóteses e uma estrutura de prova**; não demonstram que exista duplicidade ou que todo juro/chargeback seja dedutível. Leia `CORRECOES_E_REGRAS_CRITICAS.md` e o método específico antes de implementar fórmulas.

## Números e limites documentais

O anexo tem quinze linhas: janeiro–setembro/2025, novembro–dezembro/2025, janeiro–março/2026 e maio/2026. Outubro/2025 e abril/2026 faltam na tabela. A coleta deve abranger os dezessete meses, além de eventos adjacentes necessários para notas/liquidações tardias.

| Campo | Total confirmado |
|---|---:|
| Crédito | R$ 26.074.777,30 |
| Transferências | R$ 908.633,33 |
| PIX | R$ 4.221.489,04 |
| VENDAS_CARTAO, agregado financeiro | R$ 31.204.899,67 |
| FATURAMENTO na tabela | R$ 15.138.595,93 |
| DIFERENCA original | −R$ 16.066.303,74 |

As quinze diferenças mensais e o total foram conferidos. O agregado já contém PIX e transferências. A coluna débito está vazia. Não foi identificado no PDF qual arquivo ou campo formou FATURAMENTO. DIMP é fonte possível a confirmar. Não há prova de que todos os valores venham da Braip ou de que os dezenove PIX correspondam ao conjunto do anexo.

## Trabalho concluído

- Inspeção textual e visual das três páginas; extração da imagem do anexo.
- Auditoria aritmética e transcrição para dados estruturados.
- Primeira pesquisa em seis frentes, com dossiê e minuta preliminares.
- Segunda auditoria independente de legislação, jurisprudência, procedimento, DIMP, apuração e vias administrativas.
- Identificação de erros/omissões reais, mantidos com prioridade em `CORRECOES_E_REGRAS_CRITICAS.md`.
- Modelo de quinze competências e modelo mais recente de dezessete meses, ambos sem ajustes empresariais fictícios.
- Método específico para os seis itens da solicitação posterior.

## Trabalho não concluído

- Coleta dos arquivos empresariais e comprovação da ciência/fase atual.
- Conciliação por transação, mensuração dos ajustes e identificação final das notas faltantes.
- Cálculo de ICMS, juros e multas da empresa; classificação definitiva de digitais/PIX.
- Relatório final integrado após a segunda auditoria e o pedido dos seis itens.
- Representação final revisada; nenhuma minuta foi enviada.
- PDF final: havia apenas um builder preparado, não renderizado.

## Ordem final do usuário para a próxima IA

**Primeiro pedir documento por documento.** Conferir cada envio, registrar o que ele comprova e pedir o próximo. Depois que todos os documentos necessários forem recebidos, executar nova varredura de fontes e auditoria geral para definir o melhor caminho e preparar a representação. Não confundir validação inicial de um arquivo com auditoria geral já concluída.

Não é necessário refazer do zero a leitura da intimação ou perguntar estado, município e regime já informados. É necessário confirmar o histórico por documentos e esclarecer o que falta. A primeira solicitação deve ser o comprovante de ciência, sem aguardar demais arquivos para sinalizar prazo urgente.

## Hierarquia e uso dos materiais

Documentos reais e normas verificadas prevalecem. As correções da segunda auditoria prevalecem sobre relatos anteriores nos pontos revistos. As primeiras respostas estão preservadas no histórico para rastreabilidade, não para serem repetidas sem análise. Os caminhos absolutos eventualmente presentes no histórico pertenciam ao computador de origem; o mapa atual está no README.

Não existe resultado de mérito garantindo defesa vencedora. Casos favoráveis e desfavoráveis servem para desenhar a prova. O termo oferecia regularização, mas não prova que essa possibilidade continue aberta no momento da continuidade.
