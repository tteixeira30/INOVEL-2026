# GrowNear — Plano de Produção (Plano Operacional)

> Base: slides "The Production Plan" (Capítulo V; `Inovel.Context/Production_Plan (1).pptx`) e "The Organisational Operating Model" (P7; `Inovel.Context/INOVEL_P7_Organizational_Operating_Model_EN.pptx`). As notas do orador das duas apresentações estão vazias.
> Liga-se ao BMC (atividades, recursos, custos), ao Plano Organizacional (`GrowNear_Plano_Organizacional.md`: funções, decisões D1–D16), à análise do inquérito (`GrowNear_Inquerito/GrowNear_Analise_Resultados.md`) e alimenta o Plano Financeiro (`GrowNear_Plano_Financeiro.md`).
> Os números da §3, §4.1, §7 e §8 vêm do modelo `GrowNear_Plano_Financeiro.xlsx` (cenário de referência, com as decisões de 18/11). Os valores marcados **[Pressuposto — validar com o grupo]** não vêm do repositório; as questões **Q1, Q2, …** estão no compêndio (`GrowNear_Plano_Financeiro.md`, §10).
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
| Pessoas | Quem responde? | 5 funções do Plano Organizacional (§5.1): CEO / Gerente; CTO / Tecnologia; Marketing e Crescimento; Operações e Comunidade; Finanças e Administração |
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
- compradores ativos = agregados da zona × quota × conversão da intenção (0,75) × adoção da zona;
- procura no pico = compradores × reservas declaradas por mês × desconto da frequência (0,75);
- oferta no pico = produtores captados × reservas por produtor;
- **reservas = mínimo entre procura e oferta × sazonalidade do mês.**

| Parâmetro | Valor | Origem |
|---|---|---|
| Lançamento aos compradores | Mês 7 (julho do ano 1); captação de produtores nos meses 5–6 | Decisão de 18/11 (§9) |
| Agregados por zona | ≈ 10 650 (Águas Santas, Maia: 26 632 residentes ÷ 2,5) | INE, Censos 2021; proposta de 18/11 (Q2) |
| Zonas abertas | 1 / 3 / 5 / 7 / 9 nos anos 1–5; as novas abrem em abril | Plano Organizacional §1; anos 4–5 extrapolados **[Pressuposto]** (Q3) |
| Quota na maturidade | 9,2 % / **15,9 %** / 45,1 % (pessimista / referência / otimista) | Análise §11.1 |
| Conversão da intenção e desconto da frequência | 0,75 e 0,75 | **[Pressuposto]**: a intenção declarada sobrestima o uso (Análise §14) |
| Reservas declaradas por comprador e por mês | 3,44 (entusiastas) / 3,10 (núcleo) | P21; `GrowNear_Plano_Financeiro.js` |
| Adoção da zona | Linear até à maturidade aos 30 meses (≈ 25 % / 60 % / 90 % da quota nos anos 1–3 da zona) | **[Pressuposto]** (Q3) |
| Sazonalidade | Pico de junho a setembro; inverno a 0,4 do pico; média anual de 0,725 | **[Pressuposto]** (SWOT: "Oferta irregular e sazonal") |
| Produtores na maturidade | 2 % dos agregados; captação 2 meses antes da abertura; maturidade aos 18 meses | **[Pressuposto]** (Q17) |
| Reservas por produtor ativo no pico | 15 por mês | **[Pressuposto]** (Q17) |
| Cancelamentos pelo produtor | 5 % (taxa devolvida) | Q15, decidida a 18/11 |
| Gasto por encomenda / taxa por reserva | 19,40 € / 1,47 € com IVA (1,20 € sem IVA) | Análise §11.1; D16; Q4 |

**Resultado (cenário de referência):**

| Ano | Zonas | Compradores ativos (fim do ano) | Produtores captados (fim do ano) | Reservas no ano | Reservas por mês (com a app lançada) | Taxas sem IVA |
|---|---|---|---|---|---|---|
| 1 | 1 | 254 | 95 | 1 595 | 266 | 1 811 € |
| 2 | 3 | 1 524 | 473 | 19 665 | 1 639 | 22 327 € |
| 3 | 5 | 3 811 | 900 | 61 114 | 5 093 | 69 387 € |
| 4 | 7 | 6 352 | 1 326 | 118 208 | 9 851 | 134 210 € |
| 5 | 9 | 8 892 | 1 752 | 175 237 | 14 603 | 198 958 € |

Pessimista: 923 / 11 378 / 35 362 / 68 397 / 101 395 reservas. Otimista: 4 077 / 50 266 / 144 751 / 229 302 / 312 713 reservas, **limitado pela oferta** em 7 a 12 meses por ano a partir do ano 3.

**Diferença face à 1.ª versão** (16 416 / 72 230 / 170 726 nos anos 1–3, que o modelo reproduz se se retirarem os ajustes): lançamento no mês 7, desconto da intenção, sazonalidade no volume e teto pela oferta.

**Sazonalidade.** Já está no volume e no perfil mensal (folha Mensal), que alimenta o orçamento de tesouraria (Plano Financeiro, §7). O lançamento em julho aproveita o pico da época.

## 4. Quantidades a "produzir" e "stocks"

### 4.1 Capacidade necessária

A app processa reservas sem limite prático. O que tem de crescer com as reservas é a **oferta** (produtores e pontos de recolha) e o **apoio**.

| Recurso | Fórmula | Ano 1 | Ano 2 | Ano 3 | Ano 5 | Origem do rácio |
|---|---|---|---|---|---|---|
| Reservas a processar por mês (com a app lançada) | Programa de vendas (§3) | 266 | 1 639 | 5 093 | 14 603 | §3 |
| Produtores captados (fim do ano) | Agregados × 2 % × captação da zona | 95 | 473 | 900 | 1 752 | **[Pressuposto]** (Q17). Nos meses de pico, a capacidade da oferta (produtores × 15) fica acima da procura no cenário de referência; no otimista não |
| Contactos de apoio humano por dia útil (máximo do ano) | 5 % das reservas ÷ 21 dias úteis | 0,8 | 7,0 | 19,5 | 51,5 | **[Pressuposto]** (Q18) |
| Pontos de recolha | 3 por zona aberta | 3 | 9 | 15 | 27 | **[Pressuposto]**; 44 % preferem o ponto de recolha (Análise §7) |
| Pessoas pagas pela empresa (fim do ano) | Regras de entrada (Plano Organizacional §13) | 2 | 2 | 3 | 3 | CTO + Operações; assistente de apoio a partir do mês 27 |

**Ligação ao Plano Organizacional.** Com a equipa mínima proposta a 18/11, o apoio e a captação ficam com o responsável de Operações, ajudado a tempo parcial pelos outros fundadores e, a partir do ano 2, pelos embaixadores. O assistente de apoio e comunidade entra quando passar um destes limites: mais de 20 contactos humanos por dia útil, ou mais de 500 produtores captados (Q18, decidida a 18/11). No cenário de referência entra no mês 27, pelos produtores.

**Estrangulamento.** No ano 5 há ≈ 1 750 produtores e ≈ 50 contactos por dia útil para 2 pessoas de Operações. A capacidade de apoio é o primeiro limite operacional a rever no marco 3 (Plano Financeiro, §6).

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
| Stripe Connect (transferências aos produtores) | 0,25 € (ano 1) → 0,16 € (ano 5) | 2 € por produtor com transferências no mês + 0,25 % + 0,10 € por transferência (Q23) |
| Reembolsos suportados e nuvem | 0,03 € | Q19; pressupostos |
| **Margem de contribuição** | **0,54 € (ano 1) → 0,65 € (ano 5)** | Modelo |
| Gastos com pessoal por reserva | 15,33 € (ano 1) · 2,68 € (ano 2) · 1,13 € (ano 3) · 0,41 € (ano 5) | Equipa mínima (Plano Organizacional §13) ÷ reservas (§3) |
| FSE fixos e de crescimento por reserva | 12,61 € (ano 1) · 0,41 € (ano 5) | Marketing, deslocações, *coworking*, contabilista, nuvem, seguros (Plano Financeiro, §3) |

**Leitura.**
- **A parte fixa da comissão de pagamento come ≈ 22 % da receita da taxa**, e o Connect mais ≈ 14 %.
- **As reservas com o produto pago na app custam mais do que rendem** (≈ 1,3–1,5 € de custo contra 1,14 € de receita). Mantêm-se por decisão de 18/11, porque são a base do reembolso garantido.
- **O ponto crítico é de ≈ 18 600 reservas por mês no ano 5**, contra 14 603 previstas (Plano Financeiro, §4).

## 8. Indicadores (KPI)

Os KPI seguem os princípios do P7 (slide 12): relevantes, definidos (fórmula, unidade, responsável), atempados, comparáveis e equilibrados entre custo, tempo, qualidade e cliente. Incluem os indicadores já fixados no Plano Organizacional (§1 e §5.1). As metas do ano 1 com origem no programa de vendas dependem dos pressupostos da §3; as outras são **[Pressuposto — validar com o grupo]** e fixam-se com o orçamento (Plano Organizacional §1, "Metas") (Q20).

| KPI | Dimensão | Fórmula | Unidade | Frequência | Responsável | Meta do ano 1 | Origem da meta |
|---|---|---|---|---|---|---|---|
| Reservas concluídas | Cliente / volume | Reservas com recolha confirmada no mês | n.º/mês | Semanal | CEO / Gerente | 266 em média de julho a dezembro; 328 em setembro (marco 1) | §3; Plano Financeiro §6 |
| Compradores ativos | Cliente | Compradores com ≥ 1 reserva nos últimos 30 dias | n.º | Mensal | Marketing e Crescimento | ≈ 250 no fim do ano 1; ≥ 267 em março do ano 2 (marco 2) | §3; Plano Financeiro §6 |
| Compradores recorrentes | Cliente | Compradores com ≥ 2 reservas no mês ÷ compradores ativos | % | Mensal | Marketing e Crescimento | ≥ 50 % | Pressuposto; os entusiastas preveem 3,4 reservas/mês |
| Custo por aquisição | Custo | Gasto de marketing ÷ novos compradores | €/comprador | Mensal | Marketing e Crescimento | ≤ 6 € | Plano de Marketing §6.4 (M3) |
| Produtores ativos por zona | Oferta | Produtores com ≥ 1 anúncio ativo no mês | n.º | Semanal | Operações e Comunidade | ≈ 95 captados no fim do ano 1; ≥ 124 em março do ano 2 (marco 2) | §4.1 (pressuposto Q17) |
| Pontos de recolha ativos | Oferta | Pontos com ≥ 1 recolha no mês | n.º | Mensal | Operações e Comunidade | ≥ 3 por zona | §4.1 |
| Taxa de recolha concluída (equivalente ao OTIF) | Cliente / serviço | Reservas recolhidas ÷ reservas confirmadas | % | Semanal | Operações e Comunidade | ≥ 95 % | Pressuposto |
| Cancelamentos por falta de produto (rutura) | Serviço | Reservas canceladas pelo produtor ÷ reservas | % | Semanal | Operações e Comunidade | ≤ 5 % | Pressuposto |
| Escoamento da oferta (desperdício evitado) | Missão | Unidades reservadas ÷ unidades anunciadas | % | Mensal | Operações e Comunidade | A medir no arranque | Missão "sem desperdício" |
| Tempo da reserva à recolha | Fluxo | Mediana do tempo entre reserva e recolha | horas | Semanal | Operações e Comunidade | ≤ 48 h | Pressuposto; a frescura é o 1.º critério (Análise §6) |
| Tempo de resposta do produtor | Fluxo | Mediana do tempo entre reserva e confirmação | horas | Semanal | Operações e Comunidade | ≤ 4 h | Pressuposto |
| Nota média das avaliações | Qualidade | Média das avaliações do mês | 1–5 | Mensal | Operações e Comunidade | ≥ 4,5 | Pressuposto |
| Reembolsos por 100 reservas | Qualidade / custo | Reembolsos ÷ reservas × 100 | n.º | Mensal | Operações e Comunidade | ≤ 2 | Pressuposto |
| Tempo de resposta ao apoio | Serviço | Mediana do tempo até à 1.ª resposta humana | horas | Semanal | Operações e Comunidade | ≤ 24 h | Pressuposto |
| % de reservas com o produto pago na app | Confiança | Reservas com produto pago na app ÷ reservas | % | Mensal | Marketing e Crescimento | > 16 % (subir) | Base: 16 % preferem pagar na app (Análise §8) |
| Disponibilidade da app | Qualidade técnica | Tempo disponível ÷ tempo total | % | Mensal | CTO / Tecnologia | ≥ 99,5 % | Pressuposto |
| Erros críticos | Qualidade técnica | Erros que impedem reservar ou pagar | n.º/mês | Semanal | CTO / Tecnologia | 0 por mais de 24 h | Pressuposto |
| Custo de pagamento por reserva | Custo | (Comissões Stripe + Stripe Connect) ÷ reservas | €/reserva | Mensal | Finanças e Administração | ≤ 0,57 € no ano 1; ≤ 0,48 € no ano 5 | §7 |
| Margem por reserva | Custo | (Taxas sem IVA − custos variáveis) ÷ reservas | €/reserva | Mensal | Finanças e Administração | ≥ 0,54 € no ano 1; ≥ 0,65 € no ano 5 | §7 (Q4 decidida) |
| Cobertura dos custos fixos | Financeiro | Margem de contribuição dos últimos 12 meses ÷ custos fixos anualizados | % | Mensal | Finanças e Administração | Ano 5: ≈ 79 % do ponto crítico. Acima de 100 % mais o custo de quem entra, abre a fase 2 da equipa | Plano Financeiro §4; Plano Organizacional §13 |
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

O modelo assume a Lda. constituída em janeiro do ano 1 (2027) **[Pressuposto]** e o lançamento aos compradores em julho (decisão de 18/11).

| Mês | Quando | O que acontece | Responsável |
|---|---|---|---|
| 1 | Janeiro do ano 1 | Constituição da Lda.; capital social e empréstimo (1.ª tranche); contas nas lojas de apps; equipamento de teste | CEO; Finanças e Administração |
| 1–4 | Janeiro a abril | MVP da app: mapa, anúncio, reserva, pagamento da taxa (e do produto, opcional), avaliações; testes com utilizadores. Registo da marca (mês 2) | CTO |
| 4–5 | Abril e maio | Termos de uso, RGPD e regras de anúncio (jurídico, mês 5); escolha da tarifa e do modelo de contas da Stripe (Q23) | Finanças e Administração; CTO |
| 5–6 | Maio e junho | **Oferta primeiro:** sessões com a junta de freguesia de Águas Santas e cooperativas; registo assistido dos primeiros produtores; acordo com 3 pontos de recolha | Operações e Comunidade |
| 7 | Julho | **Lançamento aos compradores** em Águas Santas; campanha de lançamento; salários do CTO e do responsável de Operações | Marketing e Crescimento |
| 9 | Setembro | **Marco 1:** reservas no mês (previsto 328; mínimo 229) | CEO |
| 15 | Março do ano 2 | **Marco 2:** compradores ativos (≥ 267) e produtores captados (≥ 124) na zona 1 → 2.ª tranche de financiamento e captação nas zonas 2 e 3 | Sócios |
| 16 | Abril do ano 2 | Abertura das zonas 2 e 3 (embaixadores a partir daqui) | Operações e Comunidade |
| 25 | Janeiro do ano 3 | GrowNear Pro | CTO; Marketing e Crescimento |
| 27 | Março do ano 3 | **Marco 3:** reservas no mês (previsto 2 950; mínimo 2 065) → zonas 4 e 5. No cenário de referência entra o assistente de apoio | Sócios |

