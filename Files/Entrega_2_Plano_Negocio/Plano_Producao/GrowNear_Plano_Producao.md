# GrowNear — Plano de Produção (Plano Operacional)

> Base: slides "The Production Plan" (Capítulo V; `Inovel.Context/Production_Plan (1).pptx`) e "The Organisational Operating Model" (P7; `Inovel.Context/INOVEL_P7_Organizational_Operating_Model_EN.pptx`). As notas do orador das duas apresentações estão vazias.
> Liga-se ao BMC (atividades, recursos, custos), ao Plano Organizacional (`GrowNear_Plano_Organizacional.md`: funções, decisões D1–D16), à análise do inquérito (`Analise_Inquerito/GrowNear_Analise_Resultados.md`) e alimenta o Plano Financeiro (`GrowNear_Plano_Financeiro.md`).
> Os números da §3, §4.1, §7, §8 e §9 vêm do modelo `GrowNear_Plano_Financeiro.xlsx` (cenário de referência, 10 anos), com as decisões de 18/11 e as de 20/11, tomadas depois das respostas do professor de 19/11 (PP1–PP9, folha Perguntas_Professor do Excel). **As decisões de 20/11 estão por confirmar com o grupo.** Os valores marcados **[Pressuposto — validar com o grupo]** não vêm do repositório; as questões **Q1, Q2, …** estão no compêndio (`GrowNear_Plano_Financeiro.md`, §10).
> Numeração do capítulo: decidida a 18/11 (Q21). No plano de negócio é o capítulo VI, "Plano Operacional (Plano de Produção)", pela numeração do Milestone 02.

## 0. O que o material pede e como se adapta à GrowNear

A GrowNear não fabrica nem vende produtos: é uma plataforma que liga produtores a compradores. O que a GrowNear "produz" é o **serviço da plataforma**: cada **reserva** concluída (descoberta no mapa, reserva, cobrança da taxa, recolha, avaliação). A unidade de produção é, por isso, a **reserva**.

| Conceito dos slides | O que pedem | Equivalente na GrowNear |
|---|---|---|
| Programa de vendas (Production Plan, slide 3) | Partir da previsão de vendas do plano de marketing | Reservas por ano e por zona (§3). Ainda não há plano de marketing: previsão mínima a partir do inquérito, como pressuposto |
| Quantidades a produzir | O que é preciso fazer para cumprir as vendas | Reservas a processar e a capacidade que exigem: produtores ativos, pontos de recolha, contactos de apoio (§4). A plataforma é automática: o limite está na **oferta** e no **apoio**, não em máquinas |
| Stocks de matérias-primas e de produto acabado | Níveis de stock | A GrowNear **não tem stock** (SWOT, forças: "Modelo leve: sem stock nem armazém"). O "stock" é a **oferta ativa** dos produtores (anúncios com quantidade disponível); o que se gere é a rutura (falta de produto) e o desperdício (produto não reservado) (§4) |
| Processos de produção | Como se transformam entradas em produto | Processos ponta a ponta do comprador e do produtor (§5) e sub-processos por atividade (§6) |
| Custo de produção por unidade | Custo de cada unidade | **Custo por reserva**: custo de pagamento por reserva (variável) + custos fixos repartidos pelas reservas (§7) |
| CMVMC (Plano Financeiro, DR) | Custo das mercadorias vendidas | **Zero.** A GrowNear não compra nem revende produtos; o valor do produto é do produtor e não é receita da GrowNear. A receita é só a taxa de serviço. Os custos variáveis (comissões de pagamento, nuvem, mapas) vão para FSE |
| Logística e distribuição (P7, slide 10) | Receber, armazenar, preparar, expedir, entregar | **Não há entrega ao domicílio.** O produtor prepara a encomenda; o comprador recolhe em casa do produtor ou num ponto de recolha. A GrowNear gere a rede de pontos de recolha e a coordenação da recolha (§6) |
| OTIF (entregas a tempo e completas) | Indicador de serviço | **Taxa de recolha concluída** e **reservas canceladas por falta de produto** (§8) |
| Defeitos / refugo | Indicador de qualidade | Reclamações e reembolsos por 100 reservas; nota média das avaliações (§8) |
| Lead time de produção | Indicador de fluxo | Tempo da reserva à recolha; tempo de resposta do produtor (§8) |

## 1. Modelo operacional

O P7 define o modelo operacional como a ligação entre a estratégia e a execução, em quatro componentes.

| Componente | Pergunta | GrowNear |
|---|---|---|
| Processos | Que trabalho se faz? | Anunciar, descobrir, reservar, cobrar a taxa, recolher, avaliar; captar produtores e pontos de recolha; apoio e reembolsos (§5, §6) |
| Pessoas | Quem responde? | 5 funções do Plano Organizacional (§5.1): CEO / Gerente; CTO / Tecnologia; Marketing e Crescimento; Operações e Comunidade; Finanças e Administração. Os 5 fundadores são pagos desde o mês 1 (PP4; decidido a 20/11, a confirmar com o grupo) |
| Tecnologia | Que ferramentas e dados? | App iOS e Android desenvolvida dentro de casa (D6), nuvem (AWS / Azure), mapas (Google Maps / OpenStreetMap), pagamentos (Stripe / MB Way), FAQ e *chatbot* (D8) — BMC, parceiros e recursos-chave |
| Governação | Como se decide? | Responsável de cada área no dia a dia; CEO entre áreas; sócios por maioria no orçamento e na abertura de zonas; reunião semanal de indicadores e mensal de sócios (Plano Organizacional §6) |

Estratégia que o modelo serve (Plano Organizacional §1–§2): "oferta primeiro, zona a zona"; operação leve e automatizada; confiança como prioridade.

## 2. Cadeia de valor

Atividades primárias (P7, slides 4 e 6) adaptadas a um marketplace, com o responsável no Plano Organizacional.

| Atividade primária (P7) | Na GrowNear | Responsável |
|---|---|---|
| Desenvolver produtos | Desenvolver e manter a app: mapa, reservas, pagamentos, avaliações, alertas | CTO / Tecnologia |
| Desenvolver marketing | Previsão da procura, preço (taxa D16), posicionamento ("frescura, perto de si"), campanhas, programa "convida um vizinho" | Marketing e Crescimento |
| Vender | Captar e ativar os **dois lados**: compradores (Marketing e Crescimento) e produtores, zona a zona (Operações e Comunidade) | Marketing e Crescimento; Operações e Comunidade |
| Produzir | **Operar a plataforma:** publicação e moderação de anúncios, reserva, cobrança da taxa, notificações. Maioritariamente automático | CTO / Tecnologia (sistema); Operações e Comunidade (moderação) |
| Logística e distribuição | Rede de **pontos de recolha** (cafés, mercearias, mercados) e coordenação da recolha. Sem transporte nem armazém | Operações e Comunidade |
| Servir clientes | Apoio (FAQ, *chatbot*, fundadores), conflitos, reembolsos, avaliações | Operações e Comunidade |

| Atividade de suporte (P7, slide 11) | Na GrowNear | Responsável |
|---|---|---|
| Infraestrutura | Trabalho remoto + *coworking* (D14); administração geral | CEO / Gerente |
| Finanças | Orçamento, tesouraria, empréstimo, faturação da taxa, contabilista externo | Finanças e Administração |
| Pessoas | Recrutamento, contratos, Segurança Social, seguros, HSST, formação (Plano Organizacional §7–§9) | Finanças e Administração (processos); CEO + líder da equipa (escolha) |
| Jurídico | Termos de uso, RGPD, regras fiscais da plataforma e dos vendedores, regras de segurança alimentar dos anúncios | Finanças e Administração; CTO (RGPD técnico) |
| Planeamento e controlo | Orçamento anual, indicadores, abertura de zonas | CEO / Gerente + Finanças e Administração; aprovação pelos sócios |
| Aprovisionamento | Contratar serviços: nuvem, mapas, pagamentos, *coworking*, contabilista | CTO (serviços técnicos); Finanças e Administração (contratos) |
| TI e sistemas | Infraestrutura, segurança, dados e relatórios de indicadores | CTO / Tecnologia |

**Margem.** A margem da GrowNear é a taxa de serviço menos o custo de pagamento por reserva e os custos fixos (§7). Vender é grátis: o produtor não gera receita direta, mas sem ele não há reservas.

## 3. Programa de vendas

**Origem.** O Plano de Produção parte da previsão de vendas do plano de marketing (slides 3 e 5). A previsão está no rascunho do Plano de Marketing (`GrowNear_Plano_Marketing.md`, §6.3) e é calculada mês a mês no modelo `GrowNear_Plano_Financeiro.xlsx` (folha Mensal). Substitui a previsão mínima da 1.ª versão deste plano (decisão de 18/11).

**Derivação, por zona e por mês:**
- compradores ativos = agregados da zona × quota × conversão da intenção × adoção da zona;
- procura no pico = compradores × reservas declaradas por mês × desconto da frequência;
- oferta no pico = produtores captados × reservas por produtor;
- **reservas = mínimo entre procura e oferta × sazonalidade do mês.**

| Parâmetro | Valor | Origem |
|---|---|---|
| Lançamento aos compradores | Mês 7 (julho do ano 1); captação de produtores nos meses 5–6 | Decisão de 18/11 (§9) |
| Horizonte | 10 anos (120 meses); anos 6–10 sem zonas novas, só maturação das existentes | PP2; decidido a 20/11 (a confirmar com o grupo) |
| Agregados por zona | ≈ 10 650 (Águas Santas, Maia: 26 632 residentes ÷ 2,5) | INE, Censos 2021; proposta de 18/11 (Q2) |
| Zonas abertas | **1 / 4 / 8 / 12 / 16** nos anos 1–5; as novas abrem em abril (meses 16, 28, 40 e 52), com captação de produtores 2 meses antes | PP1; decidido a 20/11 (a confirmar com o grupo). A proposta de 18/11 era 1 / 3 / 5 / 7 / 9; a 20/11 passou a 1 / 4 / 8 / 12 / 16 para aproximar a receita dos gastos |
| Quota na maturidade | 9,2 % / **15,9 %** / 45,1 % (pessimista / referência / otimista) | Análise §11.1 |
| Conversão da intenção e desconto da frequência | **1 e 1** na referência e no otimista; 0,75 e 0,75 no pessimista | PP5; decidido a 20/11 (a confirmar com o grupo). Até 20/11 eram 0,75 e 0,75 em todos os cenários (a intenção declarada sobrestima o uso; Análise §14) |
| Reservas declaradas por comprador e por mês | 3,44 (entusiastas) / 3,10 (núcleo) | P21; `GrowNear_Plano_Financeiro.js` |
| Adoção da zona | Linear até à maturidade aos 30 meses (≈ 22 % / 62 % / 96 % da quota nos anos 1–3 da zona) | **[Pressuposto]** (Q3) |
| Sazonalidade | Pico de junho a setembro; inverno a 0,4 do pico; média anual de 0,725 (soma dos 12 meses: 8,7) | **[Pressuposto]** (SWOT: "Oferta irregular e sazonal") |
| Produtores na maturidade | 1,5 % / **2 %** / 3 % dos agregados; captação 2 meses antes da abertura; maturidade aos 18 meses | **[Pressuposto sem dados]** (Q17): o inquérito só ouviu compradores. Ver §3.1 |
| Reservas por produtor ativo no pico | 15 por mês | **[Pressuposto sem dados]** (Q17). Ver §3.1 |
| Cancelamentos pelo produtor | 5 % (taxa devolvida) | Q15, decidida a 18/11 |
| Gasto por encomenda / taxa por reserva | 19,40 € / 1,47 € com IVA (1,20 € sem IVA) | Análise §11.1; D16; Q4 |
| GrowNear Pro | 5 € por mês (com IVA); 10 % dos produtores ativos; desde o mês 13 | PP1; decidido a 20/11 (a confirmar com o grupo). Era 5 % desde o mês 25. Preço sem base **[Pressuposto]** |

**Resultado (cenário de referência):**

| Ano | Zonas (fim do ano) | Compradores ativos (fim do ano) | Produtores captados (fim do ano) | Reservas no ano | Reservas por mês (com a app lançada) | Meses limitados pela oferta | Taxas sem IVA | GrowNear Pro sem IVA |
|---|---|---|---|---|---|---|---|---|
| 1 | 1 | 339 | 95 | 2 836 | 473 | 0 | 3 219 € | 0 € |
| 2 | 4 | 2 541 | 604 | 41 622 | 3 468 | 0 | 47 256 € | 1 342 € |
| 3 | 8 | 7 283 | 1 373 | 139 252 | 11 604 | 6 | 158 102 € | 3 820 € |
| 4 | 12 | 13 550 | 2 225 | 250 128 | 20 844 | 12 | 283 986 € | 6 779 € |
| 5 | 16 | 20 326 | 3 077 | 361 343 | 30 112 | 12 | 410 256 € | 9 792 € |
| 6 | 16 | 25 068 | 3 409 | 436 694 | 36 391 | 12 | 495 807 € | 11 835 € |
| 7 a 10 (cada) | 16 | 27 101 | 3 409 | 444 861 | 37 072 | 12 | 505 080 € | 12 056 € |

Pessimista: 923 / 13 547 / 48 390 / 105 207 / 169 792 reservas nos anos 1–5 e 263 980 por ano nos anos 8–10; **nunca é limitado pela oferta** (a procura, com os descontos de 0,75, fica abaixo de 1,5 % de produtores × 15). Otimista: 6 070 / 74 241 / 211 431 / 375 192 / 542 014 reservas nos anos 1–5 e 667 291 por ano a partir do ano 7; **limitado pela oferta desde o ano 1** (4 meses no ano 1, 11 no ano 2, todos a partir do ano 3).

**Diferença face às versões anteriores.** A 1.ª versão deste plano dava 16 416 / 72 230 / 170 726 reservas nos anos 1–3 (sem lançamento no mês 7, sem desconto da intenção, sem sazonalidade no volume e sem teto pela oferta). A versão de 18/11 dava 1 595 / 19 665 / 61 114 / 118 208 / 175 237 nos anos 1–5; a 20/11 passou aos valores acima. No ano 1 (uma só zona) a subida é de 1,78×, o efeito de retirar os dois descontos de 0,75 (1 ÷ 0,75²; PP5); nos anos 2–3 soma-se o efeito das zonas a mais (PP1); a partir do ano 3 a subida é travada pela oferta (§3.1).

**Compradores ativos.** A linha "Compradores ativos" do modelo é a procura potencial e não está limitada pela oferta: nos anos 7–10 há 27 101 compradores, mas a oferta só serve ≈ 14 900 (51 133 reservas no pico ÷ 3,44). Desde a correção de 20/11, o modelo só paga a aquisição dos compradores que a oferta consegue servir no pico.

**Sazonalidade.** Já está no volume e no perfil mensal (folha Mensal), que alimenta o orçamento de tesouraria (Plano Financeiro, §7). O lançamento em julho aproveita o pico da época.

### 3.1 O peso do pressuposto dos produtores (Q17)

O inquérito mediu a procura (quota, frequência, gasto), mas **não há dados sobre a oferta**: a percentagem de agregados que serão produtores ativos (2 %) e as reservas que cada um consegue servir no pico (15 por mês) são pressupostos sem base (Análise §14; Q17). No cenário de referência, são estes dois números, e não o inquérito, que determinam as reservas a partir do ano 3.

- **A oferta é o limite a partir do mês 31** (julho do ano 3) e em todos os meses a partir do ano 4. Na maturidade, a procura no pico é de 93 226 reservas por mês e a oferta de 51 133 (3 409 produtores × 15): a procura fica 82 % acima do que os produtores conseguem servir.
- **As reservas na maturidade são produtores × 15 × 8,7** (soma da sazonalidade): 3 409 × 15 × 8,7 = 444 861 por ano. A quota de 15,9 % e a retirada dos descontos (PP5) deixam de contar a partir do ano 3; contam só nos anos 1–2.
- **A diferença entre a referência e o otimista na maturidade é só a dos produtores**: 667 291 ÷ 444 861 = 1,5 = 3 % ÷ 2 %. A quota de 45,1 % do otimista não chega a ser usada.
- **O resultado está no ponto crítico porque o pressuposto é 2 %.** Nos anos 8–10 o ponto crítico é de ≈ 37 234 reservas por mês, contra 37 072 previstas (Plano Financeiro, §4). Com 15 reservas no pico, isso exige ≈ 3 424 produtores (37 234 × 12 ÷ (15 × 8,7)), ou seja ≈ 2,0 % dos 170 445 agregados das 16 zonas. Abaixo de 2 %, o resultado dos anos 8–10 (hoje entre −1 400 € e +5 700 €) fica negativo.
- **Ordem de grandeza** (estimativa linear, não corrida no modelo): cada 0,1 ponto percentual de produtores (≈ 170 produtores nas 16 zonas) vale ≈ 22 200 reservas e ≈ 15 000 € de margem de contribuição por ano na maturidade, antes do custo de adquirir os compradores a mais. Com 1,5 % (o valor do pessimista) seriam ≈ −111 000 reservas e ≈ −75 000 € de margem por ano. As 15 reservas por produtor pesam o mesmo: 12 em vez de 15 equivale a 1,6 % em vez de 2 %.

**Consequência para o plano.** O risco principal do programa de vendas não é a procura, é a oferta: confirma a estratégia "oferta primeiro, zona a zona" e a SWOT ("Oferta irregular e sazonal"). Antes do plano final, o grupo deve validar os dois números com entrevistas a produtores (Q17). Na operação, mede-se com dois KPI (§8): produtores ativos por zona e reservas por produtor ativo no pico. O marco 2 (§9) só mede a captação de produtores, não as reservas que cada um serve.

## 4. Quantidades a "produzir" e "stocks"

### 4.1 Capacidade necessária

A app processa reservas sem limite prático. O que tem de crescer com as reservas é a **oferta** (produtores e pontos de recolha) e o **apoio**.

| Recurso | Fórmula | Ano 1 | Ano 2 | Ano 3 | Ano 5 | Anos 7–10 | Origem do rácio |
|---|---|---|---|---|---|---|---|
| Reservas a processar por mês (com a app lançada) | Programa de vendas (§3) | 473 | 3 468 | 11 604 | 30 112 | 37 072 | §3 |
| Produtores captados (fim do ano) | Agregados × 2 % × captação da zona | 95 | 604 | 1 373 | 3 077 | 3 409 | **[Pressuposto sem dados]** (Q17; §3.1) |
| Procura no pico ÷ oferta no pico (dezembro) | Compradores × 3,44 ÷ (produtores × 15) | 0,82 | 0,97 | 1,22 | 1,51 | 1,82 | Acima de 1, a oferta limita as reservas (§3.1) |
| Contactos de apoio humano por dia útil (máximo do ano) | 5 % das reservas ÷ 21 dias úteis | 1,5 | 15 | 44 | 105 | 122 | **[Pressuposto]** (Q18) |
| Pontos de recolha (fim do ano) | 3 por zona aberta | 3 | 12 | 24 | 48 | 48 | **[Pressuposto]**; 44 % preferem o ponto de recolha (Análise §7) |
| Pessoas pagas pela empresa (fim do ano) | Regras de entrada (Plano Organizacional §13; PP4) | 5 | 6 | 6 | 6 | 9 | 5 fundadores desde o mês 1; assistente de apoio desde o mês 23; contratações da D10 no mês 76 |
| Pessoas no apoio e na comunidade | Responsável de Operações + assistente | 1 | 2 | 2 | 2 | 2 | As contratações da D10 (programador, marketing, administrativo) não são de apoio |

**Ligação ao Plano Organizacional.** A proposta de 18/11 era uma equipa mínima de 2 pessoas pagas (CTO e Operações) desde o lançamento; a 20/11 passou a 5 fundadores pagos desde o mês 1 (PP4; a confirmar com o grupo). Para a operação muda pouco: o apoio e a captação continuam com o responsável de Operações, ajudado a tempo parcial pelos outros fundadores e, a partir do ano 2, pelos embaixadores. O assistente de apoio e comunidade entra quando passar um destes limites: mais de 20 contactos humanos por dia útil, ou mais de 500 produtores captados (Q18, decidida a 18/11). No cenário de referência entra no **mês 23** (novembro do ano 2), pelos produtores (mais de 500 desde o mês 22; os contactos só passam 20 no mês 28). Na versão de 18/11 entrava no mês 27; com mais zonas (PP1), entra mais cedo. Pessimista: mês 27; otimista: mês 19.

**A equipa de apoio não é credível face aos limites do próprio plano.** No modelo, a regra do assistente contrata **uma** pessoa e não volta a contratar, por mais que o volume cresça. Lendo os limites da Q18 como a capacidade de uma pessoa (20 contactos por dia útil; 500 produtores acompanhados):

| | Ano 3 | Ano 5 | Anos 6–10 |
|---|---|---|---|
| Contactos por dia útil no pico | 44 | 105 | 122 |
| Produtores captados | 1 373 | 3 077 | 3 409 |
| Pessoas necessárias pelos contactos (÷ 20) | 3 | 6 | 7 |
| Pessoas necessárias pelos produtores (÷ 500) | 3 | 7 | 7 |
| Pessoas no apoio no modelo | 2 | 2 | 2 |

- Nos anos 6–10 cada uma das 2 pessoas teria ≈ 61 contactos por dia útil no pico e ≈ 1 700 produtores, 3 vezes o limite que o próprio plano fixou. Nos meses de inverno os contactos descem para ≈ 49 por dia (3 pessoas pela regra), mas no pico precisam-se de ≈ 7.
- **Custo** (cálculo à parte, com os salários e encargos dos Pressupostos; não corrido no modelo): cada assistente custa ≈ 19 400 € por ano (1 000 € × 14 × (1 + 23,75 % TSU + 1 % seguro) + 1 440 € de benefícios + 500 € de formação), sem *coworking* nem computador. Mais 4 a 5 assistentes a partir do ano 5 são ≈ 78 000 a 97 000 € por ano: o resultado positivo do ano 6 (+45 000 €) e o resultado ≈ 0 dos anos 7–10 passariam a negativos.
- **Como reduzir a necessidade** (por decidir): baixar a taxa de 5 % de reservas com contacto humano (FAQ, *chatbot* e regras claras na app; meta no §8); contratos sazonais de junho a setembro; dar aos embaixadores o acompanhamento dos produtores da sua zona; aplicar a regra do assistente como rácio (1 pessoa por cada 20 contactos ou 500 produtores) e não como contratação única.

**Estrangulamento.** A capacidade de apoio é o primeiro limite operacional e deve rever-se no marco 3 (mês 27; Plano Financeiro, §6), antes de abrir as zonas do ano 3. No ano 3 já são precisas ≈ 3 pessoas no apoio, contra 2 no modelo.

### 4.2 Stocks

A GrowNear não compra, não armazena e não é dona do produto. O equivalente aos stocks é a **oferta ativa**:

| Stock industrial | Equivalente | Como se gere | Indicador (§8) |
|---|---|---|---|
| Produto acabado em armazém | Unidades anunciadas e ainda não reservadas, em casa de cada produtor | Anúncio com quantidade e prazo de validade; o anúncio expira sozinho | Taxa de escoamento da oferta |
| Rutura de stock | Produto procurado sem oferta na zona | Sugerir alternativas disponíveis (27 % aceitam; Análise §9); alerta "avisem-me" como secundário (12 %) | Pesquisas sem resultado; reservas canceladas por falta de produto |
| Stock em trânsito | Encomenda preparada à espera de recolha (em casa do produtor ou no ponto) | Janela de recolha na reserva; lembrete ao comprador | Taxa de recolha concluída |

## 5. Processos ponta a ponta

O P7 (slide 5) descreve seis passos, da necessidade do cliente ao valor entregue, com três fluxos.

| Passo (P7) | GrowNear |
|---|---|
| 1. Compreender as necessidades | Inquérito (feito); dados de pesquisa e reservas na app; avaliações |
| 2. Desenhar a oferta | Funcionalidades da app; regras de anúncio; taxa e valor mínimo |
| 3. Planear e aprovisionar | Escolher a zona; captar produtores e pontos de recolha antes de abrir aos compradores ("oferta primeiro") |
| 4. Produzir / entregar | O produtor anuncia e prepara; a plataforma faz a correspondência e a reserva |
| 5. Vender e cumprir encomendas | Reserva, cobrança da taxa, recolha, pagamento do produto |
| 6. Apoiar e aprender | Apoio, reembolsos, avaliações, indicadores semanais |

| Fluxo (P7) | GrowNear |
|---|---|
| Informação | Anúncios, pesquisas no mapa, reservas, estado da reserva, avaliações, indicadores |
| Material / serviço | O produto vai **do produtor para o comprador**, diretamente ou através de um ponto de recolha. A GrowNear nunca toca no produto |
| Financeiro | **Taxa** (0,50 € + 5 %): do comprador para a GrowNear, na app, no momento da reserva. **Produto**: do comprador para o produtor, na app (a GrowNear recebe por conta do produtor e transfere) ou diretamente ao produtor na recolha, à escolha do comprador |

### 5.1 Processo do produtor (lado da oferta)

| # | Passo | Entrada | Saída | Responsável | Interfaces |
|---|---|---|---|---|---|
| PR1 | Conhecer a GrowNear | Sessões com juntas, cooperativas, feiras; embaixadores (ano 2+) | Produtor interessado | Operações e Comunidade | Marketing (materiais); CEO (parcerias) |
| PR2 | Registar-se e criar o perfil | Dados, localização, forma de receber | Perfil validado | Operações e Comunidade (ajuda presencial aos primeiros; BMC); app | Finanças e Administração (dados para o pagamento) |
| PR3 | Publicar um anúncio | Produto, quantidade, preço, fotografia, janela e local de recolha (casa ou ponto) | Anúncio ativo no mapa | Produtor; moderação: Operações e Comunidade | Regras de anúncio (jurídico) |
| PR4 | Receber e confirmar a reserva | Notificação da reserva | Reserva confirmada ou recusada | Produtor; app | Comprador (CO3) |
| PR5 | Preparar e disponibilizar | Reserva confirmada | Encomenda em casa ou deixada no ponto de recolha | Produtor | Ponto de recolha |
| PR6 | Receber o pagamento | Recolha confirmada | Valor do produto: transferido pela app ou recebido na recolha | Finanças e Administração (pagamentos na app); produtor | Stripe / MB Way |
| PR7 | Ser avaliado e voltar a anunciar | Avaliação do comprador | Reputação; novo anúncio | App | Marketing (alertas sazonais) |

### 5.2 Processo do comprador (lado da procura)

| # | Passo | Entrada | Saída | Responsável | Interfaces |
|---|---|---|---|---|---|
| CO1 | Conhecer e instalar | Redes sociais, juntas, "convida um vizinho" | Comprador registado | Marketing e Crescimento | Operações (pontos de recolha como montra) |
| CO2 | Descobrir no mapa | Localização; raio de 10 minutos por omissão (Análise §7) | Lista de produtos perto de casa | App (CTO) | Oferta ativa (PR3) |
| CO3 | Reservar e pagar a taxa | Produto, quantidade, forma de recolha, forma de pagamento do produto | Reserva com taxa cobrada na app; código de recolha | App (CTO); faturação da taxa: Finanças e Administração | Produtor (PR4) |
| CO4 | Recolher | Código, janela de recolha | Recolha confirmada na app | Comprador; produtor ou ponto de recolha | Operações (pontos de recolha) |
| CO5 | Pagar o produto, se não pagou na app | Valor da reserva | Produtor pago | Comprador → produtor | Num ponto de recolha: na app ou por MB WAY direto ao produtor; o parceiro não recebe dinheiro (Q16, decidida a 18/11) |
| CO6 | Avaliar | Experiência | Avaliação visível | App | Moderação |

### 5.3 Exceções (onde a confiança se ganha ou se perde)

| Situação | Tratamento | Responsável | Estado |
|---|---|---|---|
| Produtor cancela ou não tem o produto | Reserva cancelada; sugerir alternativas na zona; **taxa devolvida** | App; Operações e Comunidade | Decidido a 18/11 (Q15) |
| Comprador não recolhe | Lembrete antes do fim da janela; reserva expira; o produtor volta a anunciar; **taxa retida** | App | Decidido a 18/11 (Q15) |
| Produto com problema (qualidade, quantidade) | Reclamação na app; reembolso garantido para compras pagas na app (BMC, relação com clientes). A GrowNear reembolsa e desconta ao produtor quando a falha é dele; a transferência ao produtor só se faz depois da recolha confirmada | Operações e Comunidade; Finanças e Administração (reembolso) | Decidido a 18/11 (Q19, Q11); custo no modelo |
| Anúncio impróprio ou risco alimentar | Moderação e remoção; regras de anúncio (SWOT, ameaças: "Um caso de intoxicação afeta a marca") | Operações e Comunidade | Regras a redigir |
| Combinar fora da app (30 %; Análise §8) | Razões para ficar: reembolso, avaliações, histórico, alertas | Marketing e Crescimento; Operações e Comunidade | Decidido (Análise §15) |
| Produtor cancela e o comprador já pagou o produto na app | Devolver também o valor do produto (a transferência ao produtor só se faz depois da recolha) | App; Finanças e Administração | Por decidir (não está no modelo nem nos fluxogramas) |
| Comprador cancela antes da recolha, ou não recolhe tendo pago o produto na app | Taxa retida; regra para o valor do produto (devolver, ou pagar ao produtor que preparou a encomenda) | App; Finanças e Administração | Por decidir |

Os fluxogramas `Fluxogramas/GrowNear_Fluxograma_Comprador` e `GrowNear_Fluxograma_Vendedor` (lado do produtor) representam a §5.2 e a §5.1 a partir da reserva e do anúncio; não incluem os passos CO1–CO2 nem PR1–PR2.

## 6. Sub-processos por atividade

O P7 (slide 16) define um processo pelas entradas, saídas, clientes, responsáveis e interfaces.

| Processo | Sub-processos | Entradas | Saídas (cliente) | Responsável | Interfaces |
|---|---|---|---|---|---|
| Desenvolvimento da app | Descobrir (dados, avaliações) → desenhar → desenvolver → testar com utilizadores → lançar → melhorar | Pedidos das áreas, dados de uso, erros | Versões da app (compradores, produtores, equipa) | CTO / Tecnologia | Todas as áreas |
| Marketing | Previsão da procura; plano e orçamento; posicionamento; preço (taxa); campanhas; canais | Inquérito, dados da app, orçamento | Previsão, campanhas, comunicação (compradores) | Marketing e Crescimento | Finanças (orçamento); Operações (oferta disponível) |
| Captação de oferta | Escolher a zona; sessões com produtores; registo assistido; pontos de recolha; embaixadores (ano 2+) | Parcerias com juntas e cooperativas | Produtores ativos e pontos de recolha (compradores) | Operações e Comunidade | CEO (parcerias); Marketing (materiais) |
| Operação da plataforma | Moderar anúncios; correspondência no mapa; reserva; cobrança da taxa; notificações; recolha | Anúncios e reservas | Reservas concluídas (compradores e produtores) | CTO (sistema); Operações (moderação) | Finanças (cobranças) |
| Apoio e confiança | FAQ e *chatbot* (1.ª linha); apoio humano; conflitos; reembolsos; avaliações | Contactos e reclamações | Casos resolvidos; reembolsos (utilizadores) | Operações e Comunidade | Finanças (reembolsos); CTO (erros) |
| Finanças e conformidade | Faturação da taxa; pagamentos aos produtores; tesouraria e empréstimo; obrigações fiscais e de Segurança Social; RGPD e termos | Cobranças, gastos, legislação | Contas, relatórios, obrigações cumpridas (sócios, Estado) | Finanças e Administração | Contabilista; CTO (dados) |
| Planeamento e controlo | Orçamento anual; indicadores semanais e mensais; decisão de abrir zonas e de contratar | Indicadores (§8), orçamento | Decisões (sócios) | CEO / Gerente | Todas as áreas |

## 7. Custo por reserva

Valores do modelo (`GrowNear_Plano_Financeiro.xlsx`), com a taxa a incluir IVA (Q4, decidida a 18/11).

| Componente | Valor por reserva | Origem |
|---|---|---|
| Taxa cobrada ao comprador | 1,47 € (com IVA) | D16; Análise §11.1 |
| Receita sem IVA, depois de 5 % de cancelamentos com devolução | 1,14 € | Q4; Q15 |
| Comissões de pagamento (Stripe) | 0,32 € | 1,5 % + 0,25 € por cobrança (Stripe, preços para Portugal); 15,9 % pagam também o produto na app (Q10) |
| Stripe Connect (transferências aos produtores) | 0,19 € (ano 1) → 0,16 € (ano 2) → 0,14 € (ano 4 em diante) | 2 € por produtor com transferências no mês + 0,25 % + 0,10 € por transferência (Q23) |
| Reembolsos suportados e nuvem | 0,03 € (0,015 + 0,010) | Q19; pressupostos |
| **Margem de contribuição** | **0,61 € (ano 1) → 0,66 € (ano 2) → 0,68 € (ano 4 em diante)** | Modelo |
| Gastos com pessoal por reserva | 43,42 € (ano 1) · 3,27 € (ano 2) · 1,09 € (ano 3) · 0,42 € (ano 5) · 0,50 € (anos 8–10) | Equipa (Plano Organizacional §5.4; PP4) ÷ reservas (§3) |
| FSE fixos e de crescimento por reserva | 7,40 € (ano 1) · 1,19 € (ano 2) · 0,57 € (ano 3) · 0,31 € (ano 5) · 0,18 € (anos 8–10) | Marketing, captação de produtores, deslocações, *coworking*, contabilista, nuvem, seguros (Plano Financeiro, §3) |
| **Custo total por reserva** (variáveis + pessoal + FSE fixos) | 1,22 € (ano 5) · 1,17 € (anos 8–10) | Contra 1,16 € de receita por reserva (taxa + GrowNear Pro, sem IVA) |

O pessoal por reserva subiu face à versão de 18/11 (15,33 € no ano 1) porque os 5 fundadores passaram a ser pagos desde o mês 1 (PP4) e o ano 1 só tem 6 meses de vendas. O custo das contratações de apoio que faltam (§4.1) não está nestes valores.

**Leitura.**
- **A parte fixa da comissão de pagamento come ≈ 22 % da receita da taxa** (0,25 € em 1,14 €), e o Connect mais 13 % a 16 %.
- **As reservas com o produto pago na app custam mais do que rendem**: ≈ 1,5 € (ano 5) a 1,8 € (ano 1) de custo (uma cobrança de taxa + produto ≈ 0,56 €, o Connect repartido por estas reservas ≈ 0,90–1,17 €, reembolsos e nuvem) contra 1,14 € de receita. Mantêm-se por decisão de 18/11, porque são a base do reembolso garantido.
- **O ponto crítico é de ≈ 32 600 reservas por mês no ano 5**, contra 30 112 previstas (92 %); no ano 6 as reservas ficam 22 % acima; nos anos 8–10 ficam no ponto crítico (37 072 contra ≈ 37 234; Plano Financeiro, §4). Na versão de 18/11 o ponto crítico do ano 5 era de ≈ 18 600 reservas por mês; subiu com os salários dos 5 fundadores (PP4) e com os custos de mais zonas (PP1). Como as reservas a partir do ano 3 dependem dos produtores, o ponto crítico corresponde a ≈ 2,0 % de produtores (§3.1).

## 8. Indicadores (KPI)

Os KPI seguem os princípios do P7 (slide 12): relevantes, definidos (fórmula, unidade, responsável), atempados, comparáveis e equilibrados entre custo, tempo, qualidade e cliente. Incluem os indicadores já fixados no Plano Organizacional (§1 e §5.1). As metas do ano 1 com origem no programa de vendas dependem dos pressupostos da §3; as outras são **[Pressuposto — validar com o grupo]** e fixam-se com o orçamento (Plano Organizacional §1, "Metas") (Q20).

| KPI | Dimensão | Fórmula | Unidade | Frequência | Responsável | Meta do ano 1 | Origem da meta |
|---|---|---|---|---|---|---|---|
| Reservas concluídas | Cliente / volume | Reservas com recolha confirmada no mês | n.º/mês | Semanal | CEO / Gerente | 473 em média de julho a dezembro; 583 em setembro (marco 1; mínimo 408) | §3; Plano Financeiro §6 |
| Compradores ativos | Cliente | Compradores com ≥ 1 reserva nos últimos 30 dias | n.º | Mensal | Marketing e Crescimento | ≈ 340 no fim do ano 1; ≥ 356 em março do ano 2 (marco 2; previsto 508) | §3; Plano Financeiro §6 |
| Compradores recorrentes | Cliente | Compradores com ≥ 2 reservas no mês ÷ compradores ativos | % | Mensal | Marketing e Crescimento | ≥ 50 % | Pressuposto; os entusiastas preveem 3,4 reservas/mês |
| Custo por aquisição | Custo | Gasto de marketing ÷ novos compradores | €/comprador | Mensal | Marketing e Crescimento | ≤ 6 € | Plano de Marketing §6.4 (M3) |
| Produtores ativos por zona | Oferta | Produtores com ≥ 1 anúncio ativo no mês | n.º | Semanal | Operações e Comunidade | ≈ 95 captados no fim do ano 1; ≥ 141 em março do ano 2 (marco 2; previsto 201) | §4.1 (pressuposto Q17) |
| Reservas por produtor ativo no pico | Oferta | Reservas do mês ÷ produtores com ≥ 1 anúncio ativo, de junho a setembro | n.º/mês | Mensal | Operações e Comunidade | ≥ 15 | §3.1 (pressuposto Q17): com os produtores, determina as reservas a partir do ano 3 |
| Pontos de recolha ativos | Oferta | Pontos com ≥ 1 recolha no mês | n.º | Mensal | Operações e Comunidade | ≥ 3 por zona | §4.1 |
| Taxa de recolha concluída (equivalente ao OTIF) | Cliente / serviço | Reservas recolhidas ÷ reservas confirmadas | % | Semanal | Operações e Comunidade | ≥ 95 % | Pressuposto |
| Cancelamentos por falta de produto (rutura) | Serviço | Reservas canceladas pelo produtor ÷ reservas | % | Semanal | Operações e Comunidade | ≤ 5 % | Pressuposto |
| Escoamento da oferta (desperdício evitado) | Missão | Unidades reservadas ÷ unidades anunciadas | % | Mensal | Operações e Comunidade | A medir no arranque | Missão "sem desperdício" |
| Tempo da reserva à recolha | Fluxo | Mediana do tempo entre reserva e recolha | horas | Semanal | Operações e Comunidade | ≤ 48 h | Pressuposto; a frescura é o 1.º critério (Análise §6) |
| Tempo de resposta do produtor | Fluxo | Mediana do tempo entre reserva e confirmação | horas | Semanal | Operações e Comunidade | ≤ 4 h | Pressuposto |
| Nota média das avaliações | Qualidade | Média das avaliações do mês | 1–5 | Mensal | Operações e Comunidade | ≥ 4,5 | Pressuposto |
| Reembolsos por 100 reservas | Qualidade / custo | Reembolsos ÷ reservas × 100 | n.º | Mensal | Operações e Comunidade | ≤ 2 | Pressuposto |
| Contactos de apoio humano por 100 reservas | Serviço / custo | Contactos tratados por pessoas ÷ reservas × 100 | n.º | Mensal | Operações e Comunidade | ≤ 5 | §4.1 (pressuposto Q18): acima disto, a equipa de apoio não chega |
| Tempo de resposta ao apoio | Serviço | Mediana do tempo até à 1.ª resposta humana | horas | Semanal | Operações e Comunidade | ≤ 24 h | Pressuposto |
| % de reservas com o produto pago na app | Confiança | Reservas com produto pago na app ÷ reservas | % | Mensal | Marketing e Crescimento | > 16 % (subir) | Base: 16 % preferem pagar na app (Análise §8) |
| Disponibilidade da app | Qualidade técnica | Tempo disponível ÷ tempo total | % | Mensal | CTO / Tecnologia | ≥ 99,5 % | Pressuposto |
| Erros críticos | Qualidade técnica | Erros que impedem reservar ou pagar | n.º/mês | Semanal | CTO / Tecnologia | 0 por mais de 24 h | Pressuposto |
| Custo de pagamento por reserva | Custo | (Comissões Stripe + Stripe Connect) ÷ reservas | €/reserva | Mensal | Finanças e Administração | ≤ 0,50 € no ano 1; ≤ 0,46 € no ano 5 | §7 |
| Margem por reserva | Custo | (Taxas sem IVA − custos variáveis) ÷ reservas | €/reserva | Mensal | Finanças e Administração | ≥ 0,61 € no ano 1; ≥ 0,68 € no ano 5 | §7 (Q4 decidida) |
| Cobertura dos custos fixos | Financeiro | Margem de contribuição dos últimos 12 meses ÷ custos fixos anualizados | % | Mensal | Finanças e Administração | Ano 5: ≈ 92 % do ponto crítico. A margem cobre os custos fixos no mês 65 (fase 2); acima de 100 % mais o custo de quem entra, abre a fase 3 (contratações da D10, mês 76) | Plano Financeiro §4; Plano Organizacional §13 |
| Erro da previsão | Planeamento | \|reservas reais − previstas\| ÷ previstas | % | Mensal | Marketing e Crescimento | ≤ 25 % | Pressuposto; P7, slide 7 |
| Desvio ao orçamento | Planeamento | (Real − orçamentado) ÷ orçamentado | % | Mensal | Finanças e Administração | ± 10 % | Pressuposto |

**Painel semanal** (P7, slide 13: um indicador por dimensão, cada um com pergunta, responsável e ação):

| Dimensão | KPI | Se falhar a meta: pergunta | Responsável | Ação |
|---|---|---|---|---|
| Cliente | Taxa de recolha concluída | Porque é que as reservas não são recolhidas? | Operações e Comunidade + CTO | Rever janelas, lembretes e pontos de recolha |
| Qualidade | Reembolsos por 100 reservas | Que produtores ou produtos geram reclamações? | Operações e Comunidade | Falar com o produtor; moderar ou suspender |
| Fluxo | Tempo da reserva à recolha | Onde está a espera: confirmação do produtor ou recolha? | Operações e Comunidade | Alertas ao produtor; janelas mais curtas |
| Custo | Margem por reserva | O custo de pagamento subiu? A encomenda média desceu? | Finanças e Administração | Rever meios de pagamento e valor mínimo (Q10, Q5) |

Como no caso do P7 (slides 14–15), os indicadores leem-se juntos: subir as reservas com mais cancelamentos por falta de produto é crescer sem oferta, o contrário de "oferta primeiro".

## 9. Calendário de implementação e marcos

O modelo assume a Lda. constituída em janeiro do ano 1 (2027) **[Pressuposto]** e o lançamento aos compradores em julho (decisão de 18/11). Os marcos exigem 70 % do previsto para avançar (proposta de 18/11); os valores são os do Resumo do modelo, cenário de referência.

| Mês | Quando | O que acontece | Responsável |
|---|---|---|---|
| 1 | Janeiro do ano 1 | Constituição da Lda.; capital social (5 000 €); empréstimo da Linha Impulsar Portugal (150 000 €; PP8); salários dos 5 fundadores (PP4); candidatura ao Empreende XXI (fechado desde 23/06/2023; presume-se a reabertura em 2027); contas nas lojas de apps; equipamento de teste | CEO; Finanças e Administração |
| 1–4 | Janeiro a abril | MVP da app: mapa, anúncio, reserva, pagamento da taxa (e do produto, opcional), avaliações; testes com utilizadores. O custo do CTO nestes meses (≈ 9 315 €) é ativo intangível (PP6). Registo da marca (mês 2) | CTO |
| 3 | Março | Empreende XXI: adiantamento de 65 % (≈ 26 185 €) | Finanças e Administração |
| 4–5 | Abril e maio | Termos de uso, RGPD e regras de anúncio (jurídico, mês 5); escolha da tarifa e do modelo de contas da Stripe (Q23) | Finanças e Administração; CTO |
| 5–6 | Maio e junho | **Oferta primeiro:** sessões com a junta de freguesia de Águas Santas e cooperativas; registo assistido dos primeiros produtores; acordo com 3 pontos de recolha | Operações e Comunidade |
| 7 | Julho | **Lançamento aos compradores** em Águas Santas; campanha de lançamento. (Na proposta de 18/11 era também o início dos salários do CTO e do responsável de Operações; a 20/11 os salários passaram ao mês 1, PP4) | Marketing e Crescimento |
| 9 | Setembro | **Marco 1:** reservas no mês (previsto 583; mínimo 408). Se falhar: rever produto e captação antes do inverno | CEO |
| 13 | Janeiro do ano 2 | GrowNear Pro (10 % dos produtores ativos; PP1, a confirmar com o grupo; era no mês 25); Empreende XXI: saldo de 35 % (≈ 14 100 €) | CTO; Marketing e Crescimento; Finanças e Administração |
| 14 | Fevereiro do ano 2 | Captação de produtores nas 3 zonas do ano 2 (2 meses antes da abertura) | Operações e Comunidade |
| 15 | Março do ano 2 | **Marco 2:** compradores ativos na zona 1 (previsto 508; mínimo 356) e produtores captados na zona 1 (previsto 201; mínimo 141) → 2.ª tranche de **455 000 €** (capital próprio: sócios ou investidor; PP8) e abertura das zonas do ano 2 | Sócios |
| 16 | Abril do ano 2 | Abertura das zonas 2 a 4 (embaixadores a partir daqui) | Operações e Comunidade |
| 23 | Novembro do ano 2 | Assistente de apoio e comunidade (mais de 500 produtores; §4.1) | CEO; Operações e Comunidade |
| 27 | Março do ano 3 | **Marco 3:** reservas no mês antes de abrir as zonas do ano 3 (previsto 6 642; mínimo 4 650) → abertura das zonas 5 a 8 no mês 28. Rever aqui a capacidade de apoio (§4.1) | Sócios |
| 31 | Julho do ano 3 | Primeiro mês em que a oferta limita as reservas (§3.1) | Operações e Comunidade |
| 40 e 52 | Abril dos anos 4 e 5 | Abertura das zonas 9 a 12 e 13 a 16 (sem marco definido no modelo) | Sócios; Operações e Comunidade |
| 65 | Maio do ano 6 | Fase 2: a margem de contribuição dos últimos 12 meses cobre os custos fixos | Finanças e Administração |
| 76 | Abril do ano 7 | Fase 3: contratações da D10 (programador júnior, marketing júnior, técnico administrativo e financeiro); a equipa passa a 9 pessoas | CEO; sócios |

Na versão de 18/11 os marcos eram: marco 1 com 328 reservas (mínimo 229); marco 2 com 267 compradores e 124 produtores; marco 3 com 2 950 reservas (mínimo 2 065), seguido das zonas 4 e 5. Subiram com a retirada dos descontos (PP5) e com as zonas a mais (PP1).

**Pessimista e otimista.** Marco 1: 190 e 1 332 reservas; marco 2: 221 e 1 441 compradores, 151 e 302 produtores; marco 3: 2 162 e 10 866 reservas. No pessimista, a fase 2 e a fase 3 não chegam em 120 meses e o assistente entra no mês 27; no otimista, a fase 3 entra no mês 61 e o assistente no mês 19.

