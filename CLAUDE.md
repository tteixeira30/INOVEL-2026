# CLAUDE.md

Projeto de grupo da UC **Empreendedorismo e Inovação (INOVEL)**, ISEP, 2026/2027. Não é código: é o plano de negócio da **GrowNear**, uma app marketplace que liga pequenos produtores não profissionais (excedentes de horta, pomar, galinheiro) a compradores vizinhos, com descoberta por mapa, reserva na app e recolha em casa do produtor ou num ponto de recolha (sem entrega ao domicílio).

Língua de trabalho: **português de Portugal**, grafia do Acordo Ortográfico ("objetivo", "ação"). A declaração de proposta de valor também está em português (Para/Que/A/Que/Ao contrário de).

## Estrutura

- `Files/` — trabalho do grupo, organizado pelas duas entregas da UC. `Files/README.md` é o índice para o grupo (ao mover ou criar ficheiros, atualizá-lo).
  - `Entrega_1_Ideia_Estudo_Mercado/` — Milestone 01 "Business Idea & Market Study" (entregue a 19/10).
  - `Entrega_2_Plano_Negocio/` — Milestone 02 "Final Business Plan" (trabalho depois de 19/10).
- `Inovel.Context/` — material da UC (slides, templates, enunciado do inquérito). Só leitura; não renomear nem editar.
- `Apoio_Aulas/` — material de estudo do grupo, não entregável (ex.: resolução das fichas de IC e testes de hipóteses).

### `Files/Entrega_1_Ideia_Estudo_Mercado/`

Relatório e apresentação na raiz da pasta; `Modelo_Negocio/` (missão, proposta de valor, BMC, SWOT); `Estudo_Mercado/` (objetivos, inquérito, respostas). O BMC, a proposta de valor, o relatório e os objetivos foram revistos depois de 19/10 (05/11 e 18/11) e continuam a ser editados aqui; a versão entregue está no commit `879e5c3`.

| Ficheiro | Conteúdo |
|---|---|
| `GrowNear_Relatorio.docx` / `.pdf` | Relatório consolidado: Capa → Ideia de negócio → Missão/Visão → Proposta de valor → BMC → SWOT → Objetivos do estudo de mercado → Inquérito. Os resultados do inquérito ainda não estão no relatório (estão em `Entrega_2_Plano_Negocio/Analise_Inquerito/`). O BMC entra como imagem (`word/media/image1.png`), exportada do PDF do BMC: ao mudar o BMC, atualizar também a imagem. O PDF exporta-se do Word |
| `GrowNear_Apresentacao.pptx` | Apresentação do Momento 1 (5 min): ideia, proposta de valor, BMC (front stage, depois back stage), SWOT, objetivos do estudo, inquérito. Resultados, hipóteses e implicações não entram no Momento 1. O guião está nas notas do orador |
| `Modelo_Negocio/GrowNear_Missao_Visao.md` | Missão, visão e mantra ("Do quintal para a mesa do vizinho") |
| `Modelo_Negocio/GrowNear_Proposta_Valor.docx` | Declaração de proposta de valor |
| `Modelo_Negocio/GrowNear_Business_Model_Canvas.docx` / `.pdf` | Business Model Canvas (9 blocos) |
| `Modelo_Negocio/GrowNear_SWOT.pdf` / `.png` | Análise SWOT. Cita-se sempre pelo texto do item (ex.: "Risco de fuga à plataforma"), nunca por códigos (decisão de 18/11) |
| `Estudo_Mercado/GrowNear_Objetivos_Estudo_Mercado.md` | Objetivo geral, objetivos específicos OE1–OE8, ficha técnica e hipóteses H1–H6 |
| `Estudo_Mercado/GrowNear_Inquerito_Estrutura_e_Perguntas.md` | Estrutura e perguntas do inquérito (P1–P29), ligadas aos OE |
| `Estudo_Mercado/GrowNear_Inquerito_Forms.gs` | Google Apps Script que cria/atualiza o formulário no Google Forms a partir do `.md` do inquérito |
| `Estudo_Mercado/GrowNear_Inquerito_Respostas.xlsx` / `.csv` | Respostas em bruto exportadas do Google Forms (114 respostas, 08–11/10), sem alterações ao conteúdo |

### `Files/Entrega_2_Plano_Negocio/`

Uma pasta por capítulo do plano de negócio. Os scripts Node leem o CSV em `Entrega_1_Ideia_Estudo_Mercado/Estudo_Mercado/`.

| Ficheiro | Conteúdo |
|---|---|
| `Analise_Inquerito/GrowNear_Analise_Resultados.md` | Análise das respostas: variáveis e escalas, questões de investigação (QI1–QI18), resultados por OE, inferência (IC e testes, incluindo H1–H6), segmentos (OE7) e implicações para o negócio |
| `Analise_Inquerito/GrowNear_Analise_Estatistica.js` | Script Node que calcula a partir do CSV os IC e os testes da §11 da análise (`node GrowNear_Analise_Estatistica.js`) |
| `Plano_Organizacional/GrowNear_Plano_Organizacional.md` | Plano Organizacional redigido a partir das decisões de 12/11: estrutura, organograma, funções, decisão, gestão de pessoas, recrutamento, pressupostos para o plano financeiro (salários de entrada de mercado por perfil; salários do ano 1 financiados por empréstimo de ≈ 125 000 €). A §13 tem as propostas de 18/11 (equipa mínima até ao ponto crítico, contratações por fases, financiamento por tranches), por aprovar pelos sócios |
| `Plano_Organizacional/GrowNear_Plano_Organizacional.html` | Mesmo conteúdo em página: organograma com os perfis de cada equipa, cartões das funções e restantes secções. Abre-se no browser; ao mudar o `.md`, atualizar também o `.html` |
| `Plano_Organizacional/GrowNear_Decisoes_Plano_Organizacional.html` | Página de apoio à reunião de 12/11 (não entregável): decisões D1–D16 para o Plano Organizacional (semana 9), com contexto, opções e recomendação; gera um resumo para colar no Claude |
| `Plano_Producao/GrowNear_Plano_Producao.md` | Plano de Produção / Operacional (Cap. VI no Milestone 02): adaptação dos conceitos a um marketplace (unidade = reserva; CMVMC = 0; sem stock), modelo operacional, cadeia de valor, programa de vendas (do modelo Excel), capacidade, processos do comprador e do produtor, custo por reserva, KPI e calendário de implementação com marcos (§9) |
| `Plano_Marketing/GrowNear_Plano_Marketing.md` | Rascunho do Plano de Marketing (18/11; 20 % da nota): mercado (PESTEL, dimensão da zona), concorrência, SWOT revisitada e objetivos, segmentação e posicionamento, 4P, margem, ponto crítico, previsão de vendas (3 cenários) e orçamento por custo de aquisição; questões M1–M5 |
| `Plano_Financeiro/GrowNear_Plano_Financeiro.md` | Plano Financeiro (Cap. VII no Milestone 02), 2.ª versão (18/11): resposta às três perguntas do P8, decisões de 18/11, VI.1–VI.6 com os números do modelo, cenários e sensibilidade, compêndio Q1–Q26 (decididas e em aberto) |
| `Plano_Financeiro/GrowNear_Plano_Financeiro.xlsx` | Modelo financeiro com fórmulas vivas (5 anos, mensal): folhas Leia_me, Perguntas_Professor (perguntas ao professor PP1–PP9 com as respostas de 19/11; notas a laranja nas outras folhas), Resumo, Pressupostos (só se editam as células a azul; cenário ativo 1/2/3), Mensal e Anual (DR, balanço, financiamento, tesouraria, VAL/TIR/payback, ponto crítico). Os números do `.md` do Financeiro, do Marketing e da Produção vêm daqui: ao mudar um pressuposto, atualizar os `.md` |
| `Plano_Financeiro/GrowNear_Plano_Financeiro.js` | Script Node que calcula a partir do CSV do inquérito os valores que entram nos Pressupostos do Excel (quotas e IC dos cenários, frequência, gasto médio, % que paga na app, taxa e comissão Stripe) e verifica-os (`node GrowNear_Plano_Financeiro.js`) |

Página com os gráficos da análise (privada; partilhar no menu Share): https://claude.ai/artifact/RGzz4j5PXWpg6aCHwVu8jy

## Convenções

- **Pastas:** cada ficheiro fica na pasta da entrega a que pertence (ver Estrutura); o desenho do inquérito e as respostas ficam em `Entrega_1_Ideia_Estudo_Mercado/Estudo_Mercado/`, a análise em `Entrega_2_Plano_Negocio/Analise_Inquerito/`. Um novo capítulo do plano de negócio ganha a sua pasta em `Entrega_2_Plano_Negocio/`. Nomes de pastas sem prefixo, palavras separadas por `_`, sem acentos.
- **Nomes de ficheiros em `Files/`:** `GrowNear_<Tema>.<ext>` — prefixo `GrowNear_`, palavras com inicial maiúscula separadas por `_`, sem acentos, sem espaços, sem números de ordem. Versões do mesmo documento noutro formato partilham o nome base (`GrowNear_SWOT.pdf` + `GrowNear_SWOT.png`).
- Ao renomear, atualizar as referências cruzadas: os `.md` referem-se entre si e o `.gs` refere o `.md` do inquérito.
- O inquérito tem **29 perguntas (P1–P29)**: a antiga P9 ("fator mais importante") foi retirada a 08/10 e as seguintes renumeradas. O `.gs` reflete o formulário real; o `.md` do inquérito e o dos objetivos usam a mesma numeração. Qualquer alteração ao inquérito tem de ser feita nos dois (numeração, textos, valor da taxa em `TAXA_P14`).
- **Taxa de serviço (decisão do grupo):** paga pelo comprador na app, no momento da reserva. O produto paga-se na app ou ao produtor na recolha, à escolha do comprador (decisão de 05/11). Vender é grátis. **Valor decidido a 12/11 (D16): 0,50 € + 5 % do valor reservado** (1,00 € numa encomenda de 10 €), a proposta testada no inquérito, **com IVA incluído** (Q4, decidida a 18/11). O BMC e o relatório ainda não indicam valores; estão no Plano de Marketing (preço).
- **Decisões de 18/11** (reunião de trabalho; registadas no `GrowNear_Plano_Financeiro.md` §1.1): lançamento no mês 7 (julho do ano 1); previsão com 3 cenários e descontos à intenção declarada; zona de lançamento proposta: Águas Santas (Maia); pagamento do produto na app mantém-se. As alterações à D3/D10 e ao financiamento são **propostas** (Plano Organizacional §13) até os sócios as aprovarem.
- Regras do inquérito (ver `GrowNear_Inquerito_Estrutura_e_Perguntas.md` §1): só perguntas fechadas, resposta única, escalas 1–5, sem pergunta-filtro, todas obrigatórias.
- `.docx`/`.pdf`/`.png` são editados fora daqui (Word/Canva). Para ler `.docx`: `unzip -p f.docx word/document.xml`; para `.pdf`: `pdftotext` (disponível no Git Bash).
- Não há Python neste PC; para analisar o CSV das respostas usar Node (`node`). O `.xlsx` do Plano Financeiro edita-se no Excel (se os valores não aparecerem, F9 recalcula).

## Apps Script

Não corre localmente. Colar em script.google.com e executar `criarInquerito` (só uma vez — cria um formulário novo) ou `atualizarFormulario` (aplica alterações ao formulário existente, `FORM_ID`). Instruções completas no cabeçalho do `.gs`.
