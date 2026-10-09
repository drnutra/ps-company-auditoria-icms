> **Pesquisa da primeira rodada.** Consulte [correções prioritárias](../docs/CORRECOES_E_REGRAS_CRITICAS.md) e os relatórios em `segunda-auditoria/` antes de aplicar conclusões.

# Notas fiscais e apuração do ICMS — pesquisa técnica

Verificação: 09/10/2026. Escopo: Lucro Presumido informado pelo usuário, ICMS Débito e Crédito, operações de 2025–2026 em Minas Gerais. Este relatório trata dos procedimentos fiscais; não reconhece os valores da intimação como dívida e não substitui a conciliação dos documentos da empresa. Nenhuma emissão, declaração, protocolo ou pagamento foi realizado.

## Conclusão operacional

É incorreto tratar como uma mesma pendência: (a) nota existente, ausente da planilha; (b) nota autorizada no período certo, escriturada tarde; (c) documento emitido depois da operação; (d) venda cujo documento nunca foi emitido; (e) imposto já escriturado/declarado, mas não pago. Cada situação exige evidência e tratamento próprios. Não se deve emitir novamente uma operação documentada nem transformar toda diferença entre pagamentos e faturamento em nova venda.

### 1. Inventário mínimo por operação

Construir uma linha por pedido/transação, identificando produto e quantidade, comprador, UF de destino, datas da aprovação, da saída/entrega, do pagamento, do repasse, do cancelamento/devolução, valor bruto, taxas e líquido. Vincular chave da NF-e/NFC-e/NFS-e, autorização e eventos, período e recibo da EFD/DAPI, imposto e recolhimento. Conservar os originais e as versões substituídas.

Para notas: consultar XML e protocolo de autorização/eventos; um DANFE ou linha em planilha não resolve sozinho a situação. Segregar documentos rejeitados, cancelados, duplicados e autorizados; localizar documentos emitidos em meses posteriores vinculados a pedidos anteriores. Validar separadamente cancelamento comercial, reembolso financeiro e retorno físico da mercadoria.

O RICMS/23, art. 60, exige emissão, escrituração e guarda de documentos digitais e autorização de uso. Proíbe usar carta de correção para alterar valores/quantidades ou substituir datas de emissão/saída e pessoas. Logo, CC-e não é atalho para consertar fatos essenciais. [RICMS/23, art. 60](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/regulamento2023_2.html).

### 2. Documento tardio não desloca automaticamente o fato gerador

Para a saída ordinária de mercadoria, o fato gerador ocorre na saída (RICMS/23, art. 7º, I). Créditos dependem de documentação idônea e observância das condições legais; o art. 32, §2º, prevê apropriação extemporânea de crédito corretamente destacado, não aproveitado antes, observados os registros próprios e o prazo legal. Isso não autoriza compensar indiscriminadamente débitos antigos. [RICMS/23, arts. 7º e 31–35](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/regulamento2023_1.html).

A NF-e deve normalmente anteceder a saída; o Anexo V distingue suas hipóteses ordinárias, complementação e regularização. Também veda notas sem operação efetiva, fora das hipóteses previstas. Portanto, regularizar agora exige registrar fatos verdadeiros e rastreáveis, sem simular uma emissão passada ou inventar uma venda atual. Não há suporte para uma nota global genérica correspondente à diferença inteira da planilha. [RICMS/23, Anexo V, Parte 1, arts. 1º–6º](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/anexov2023_2.html).

**Venda nunca documentada:** individualizar as operações e submeter ao contador a forma de emissão e escrituração adequada, vinculada à regularização perante a Delegacia Fiscal quando necessária. Não é seguro aplicar automaticamente o procedimento de nota complementar, que pressupõe documento/operação original com complemento identificável. Não foi localizada norma geral mineira que autorize, para este caso concreto, um único CFOP, uma nota global ou a mera emissão atual como solução integral.

### 3. Existe manual atual — não copiar instruções de 2014

O Portal SPED-MG disponibiliza o **Manual Consolidado de Escrituração, versão 2026.03**. A seção 15 diferencia:

| Situação real | Tratamento documentado no manual |
|---|---|
| NF-e já emitida, escriturada em período posterior | C100, COD_SIT 01; ICMS em débitos especiais, extra-apuração (E110; E210 para ST). |
| NF-e complementar emitida agora para fato gerador anterior | Documento no período de emissão, COD_SIT 06; ajustes específicos para separar o débito extemporâneo. |
| Complementar também escriturada depois de sua emissão | COD_SIT 07; débito especial. |

Essas categorias não são intercambiáveis. O manual separa principal dos acréscimos e alerta para evitar pagamento em duplicidade; traz condições para estorno/restituição. Códigos dependem da situação concreta, da versão/tabela aplicável e do histórico de recolhimento. A conciliação deve registrar o mês do fato, o mês de emissão e o mês da escrituração em colunas diferentes. [Manual 2026.03, seção 15, páginas 45–51](https://portalsped.fazenda.mg.gov.br/spedmg/export/sites/spedmg/efd/downloads/Manual-consolidado-v.2026.03.pdf).

### 4. Retificar EFD/DAPI não é tarefa uniforme

A retificação da EFD substitui integralmente o arquivo anterior; não existe arquivo complementar. O art. 16 dispensa autorização para substituição quando não for possível ou conveniente sanar por ajustes. Recepção do arquivo não homologa sua apuração (art. 14). Planejar quais competências e saldos posteriores são afetados, validar o arquivo e conferir sua repercussão no conta-corrente fiscal. Isso não equivale a concluir que qualquer retificação após fiscalização produzirá espontaneidade ou efeitos favoráveis. [RICMS/23, Anexo V, Parte 2, arts. 14–16](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/anexov2023_4.html).

**Mudança confirmada em 2026:** a Portaria SRE 285/2026, alterada pela 296/2026, dispensou a transmissão da DAPI 1 desde 01/07/2026 para contribuintes ainda não dispensados, ressalvadas as hipóteses impeditivas. A apuração passa a decorrer da EFD. A dispensa da empresa pode ter iniciado antes. [Portaria SRE 285/2026 consolidada](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/portarias/2026/port_subsec285_2026.html).

Consultar no SIARE a competência inicial de dispensa da IE: Consulta → Demonstrativos Fiscais → Contribuintes Dispensados da Entrega da DAPI. Para períodos dispensados, a SEF gera DAPI Virtual; EFD inconsistente pode deixá-la omissa até correção. Assim, não se deve ordenar indiscriminadamente “retifique todas as DAPI” nem presumir que a dispensa atual eliminou obrigações antigas. [Orientação atual SPED-MG](https://portalsped.fazenda.mg.gov.br/spedmg/efd/).

O antigo Manual de DAPI aprovado pela Portaria 117/2013 foi revogado em 11/03/2026. Isso reforça a necessidade de observar período e procedimento atuais. [Portaria SRE 289/2026](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/portarias/2026/port_subsec289_2026.html).

### 5. Cálculo: classificar antes de aplicar alíquotas

Exigir por SKU: descrição técnica, NCM/NBM, CEST quando aplicável, fabricante/importador, notas de aquisição, CST, CFOP, tributação efetiva, eventual benefício/regime especial e sua vigência. Também separar destino interno/interestadual, consumidor/contribuinte, ICMS próprio, ST, DIFAL e FEM quando efetivamente aplicáveis. CNAE de comércio de alimentos não define sozinho a tributação de cada produto.

O Anexo VII, arts. 12–15, vincula a ST às mercadorias e hipóteses previstas e distribui responsabilidades, inclusive ao varejista mineiro em certas entradas interestaduais. Os arts. 27–28 tratam da saída de mercadoria com imposto retido/recolhido; o art. 34 exige CEST também em certas mercadorias não submetidas à ST naquela operação. Portanto, **ter CEST não comprova imposto pago**, nem o argumento “é suplemento” comprova incidência ou exclusão. Verificar a cadeia e os documentos antes de alegar que a tributação foi encerrada. [RICMS/23, Anexo VII, Parte 1](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/anexovii2023_2.html).

### 6. Saldo credor não é abatimento automático da omissão

O **art. 116 do RICMS/23** veda compensar créditos com imposto vencido, salvo hipóteses do Anexo III. Separar: imposto comprovadamente pago sobre a mesma operação; crédito legítimo apurado nas condições legais; e tentativa de usar saldo credor para extinguir dívida antiga. O terceiro exige fundamento específico, não mera planilha. [RICMS/23, art. 116](https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/regulamento2023_2.html).

No **Acórdão 25.216/26/1ª**, disponibilizado em 01/04/2026, o Conselho rejeitou alegação sem prova de erro sistêmico e de compensação por créditos para débito decorrente de alíquota incorreta; citou o art. 116. Prometer retificar DAPI não desconstituiu o ilícito. É precedente de contexto diferente, útil para mostrar a necessidade de prova, não decisão antecipada sobre a PS Company. [CC-MG 25.216/26/1ª, p. 2](https://www.fazenda.mg.gov.br/secretaria/conselho_contribuintes/acordaos/2026/1/25216261.pdf).

## Entrega recomendada antes de qualquer formalização

1. Quadro por competência reconciliando valor fiscal apontado, diferença documental comprovada, diferença temporal comprovada, valores já tributados, serviços/receitas de outra natureza comprovados, operação efetivamente omitida e saldo ainda sem explicação.
2. Lista nominal das operações em cada situação documental, com documentos e status de validação.
3. Memória de cálculo por operação/SKU e competência, distinguindo principal, acréscimos e tributos/UF; sem compensações automáticas.
4. Mapa de EFD/DAPI/DAPI Virtual afetadas e demonstração de que a proposta não duplica documentos nem débitos.
5. Minuta de regularização coerente com esse conjunto e com a fase processual atual, revisada pelo contador e advogado responsável.

O número de notas faltantes, a causa do atraso, a conclusão sobre a correção do sistema e o ICMS líquido devido permanecem **não apurados** sem os dados transacionais, XMLs, escrituração e guias da empresa.
