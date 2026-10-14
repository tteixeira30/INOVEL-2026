# CLAUDE.md

Projeto de grupo da UC **Empreendedorismo e Inovação (INOVEL)**, ISEP, 2025/2026. Não é código: é o plano de negócio da **GrowNear**, uma app marketplace que liga pequenos produtores não profissionais (excedentes de horta, pomar, galinheiro) a compradores vizinhos, com descoberta por mapa, reserva na app e recolha em casa do produtor ou num ponto de recolha (sem entrega ao domicílio).

Língua de trabalho: **português de Portugal**, grafia do Acordo Ortográfico ("objetivo", "ação"). A declaração de proposta de valor também está em português (Para/Que/A/Que/Ao contrário de); o `GrowNear_Proposta_Valor.docx` ainda tem a versão antiga, em inglês.

## Estrutura

- `Files/` — trabalho do grupo (entregáveis).
- `Inovel.Context/` — material da UC (slides, templates, enunciado do inquérito). Só leitura; não renomear nem editar.

### Ficheiros em `Files/`

| Ficheiro | Conteúdo |
|---|---|
| `GrowNear_Relatorio.docx` | Relatório consolidado: Capa → Ideia de negócio → Missão/Visão → Proposta de valor → BMC → SWOT → Objetivos do estudo de mercado → Inquérito |
| `GrowNear_Missao_Visao.md` | Missão, visão e mantra ("Do quintal para a mesa do vizinho") |
| `GrowNear_Proposta_Valor.docx` | Declaração de proposta de valor |
| `GrowNear_Business_Model_Canvas.docx` / `.pdf` | Business Model Canvas (9 blocos) |
| `GrowNear_SWOT.pdf` / `.png` | Análise SWOT (códigos S/W/O/T usados nos outros documentos, ex. T1, W3) |
| `GrowNear_Apresentacao.pptx` | Apresentação do Momento 1 (5 min): ideia, proposta de valor, BMC, SWOT, objetivos do estudo, recolha de respostas |

### Ficheiros em `Files/GrowNear_Inquerito/` (estudo de mercado)

| Ficheiro | Conteúdo |
|---|---|
| `GrowNear_Objetivos_Estudo_Mercado.md` | Objetivo geral, objetivos específicos OE1–OE8, ficha técnica e hipóteses H1–H6 |
| `GrowNear_Inquerito_Estrutura_e_Perguntas.md` | Estrutura e perguntas do inquérito (P1–P29), ligadas aos OE |
| `GrowNear_Inquerito_Forms.gs` | Google Apps Script que cria/atualiza o formulário no Google Forms a partir do `.md` do inquérito |
| `GrowNear_Inquerito_Respostas.xlsx` / `.csv` | Respostas em bruto exportadas do Google Forms (114 respostas, 08–11/10), sem alterações ao conteúdo |
| `GrowNear_Analise_Resultados.md` | Análise das respostas: resultados por OE, testes H1–H6, segmentos (OE7) e implicações para o negócio |

Página com os gráficos da análise (privada; partilhar no menu Share): https://claude.ai/artifact/RGzz4j5PXWpg6aCHwVu8jy

## Convenções

- **Pastas:** tudo o que é do inquérito (objetivos, perguntas, script, respostas, análise) fica em `Files/GrowNear_Inquerito/`.
- **Nomes de ficheiros em `Files/`:** `GrowNear_<Tema>.<ext>` — prefixo `GrowNear_`, palavras com inicial maiúscula separadas por `_`, sem acentos, sem espaços, sem números de ordem. Versões do mesmo documento noutro formato partilham o nome base (`GrowNear_SWOT.pdf` + `GrowNear_SWOT.png`).
- Ao renomear, atualizar as referências cruzadas: os `.md` referem-se entre si e o `.gs` refere o `.md` do inquérito.
- O inquérito tem **29 perguntas (P1–P29)**: a antiga P9 ("fator mais importante") foi retirada a 08/10 e as seguintes renumeradas. O `.gs` reflete o formulário real; o `.md` do inquérito e o dos objetivos usam a mesma numeração. Qualquer alteração ao inquérito tem de ser feita nos dois (numeração, textos, valor da taxa em `TAXA_P14`).
- **Taxa de serviço (decisão do grupo):** 0,50 € + 5 % por compra paga na app, paga pelo comprador (1,00 € numa encomenda de 10 €). Vender é grátis.
- Regras do inquérito (ver `GrowNear_Inquerito_Estrutura_e_Perguntas.md` §1): só perguntas fechadas, resposta única, escalas 1–5, sem pergunta-filtro, todas obrigatórias.
- `.docx`/`.pdf`/`.png` são editados fora daqui (Word/Canva). Para ler `.docx`: `unzip -p f.docx word/document.xml`; para `.pdf`: `pdftotext` (disponível no Git Bash).
- Não há Python neste PC; para analisar o CSV das respostas usar Node (`node`).

## Apps Script

Não corre localmente. Colar em script.google.com e executar `criarInquerito` (só uma vez — cria um formulário novo) ou `atualizarFormulario` (aplica alterações ao formulário existente, `FORM_ID`). Instruções completas no cabeçalho do `.gs`.
