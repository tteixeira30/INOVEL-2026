# GrowNear — Plano de Produção (Plano Operacional)

> Base: slides "The Production Plan" (Capítulo V; `Inovel.Context/Production_Plan (1).pptx`) e "The Organisational Operating Model" (P7; `Inovel.Context/INOVEL_P7_Organizational_Operating_Model_EN.pptx`). As notas do orador das duas apresentações estão vazias.
> Liga-se ao BMC (atividades, recursos, custos), ao Plano Organizacional (`GrowNear_Plano_Organizacional.md`: funções, decisões D1–D16), à análise do inquérito (`GrowNear_Inquerito/GrowNear_Analise_Resultados.md`) e alimenta o Plano Financeiro (`GrowNear_Plano_Financeiro.md`).
> Os números da §3 e da §7 são calculados por `GrowNear_Plano_Financeiro.js` (`node GrowNear_Plano_Financeiro.js`). Os valores marcados **[Pressuposto — validar com o grupo]** não vêm do repositório; as questões **Q1, Q2, …** estão no compêndio (`GrowNear_Plano_Financeiro.md`, §8).
> Numeração do capítulo: os slides de produção chamam-lhe "V. Production Plan", os do plano financeiro "V. Operational Plan" e a apresentação da UC "VI. Operational Plan" (Q21).

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

## 3. Programa de vendas (previsão mínima)

**Porque é precisa.** O Plano de Produção parte da previsão de vendas do plano de marketing (slides 3 e 5). O plano de marketing ainda não existe no repositório. Para avançar, constrói-se aqui a previsão **mínima**, a substituir pela do plano de marketing quando existir (Q1).

**Derivação.** Reservas por ano = agregados da zona × quota de compradores × fração da quota atingida (rampa) × reservas por comprador e por mês × 12.

| Parâmetro | Valor | Origem |
|---|---|---|
| Quota de compradores na maturidade | **15,9 %** (referência) / 45,1 % (otimista) | Entusiastas (P19 = 5 e P20 = 5) e núcleo de potenciais utilizadores; a análise manda planear com o cenário prudente como referência (Análise §11.1 e §15, "Metas") |
| Reservas por comprador e por mês | **3,44** (entusiastas) / 3,10 (núcleo) | P21 de cada grupo convertida em reservas por mês: semanal = 52/12; 2 a 3 vezes = 2,5; 1 vez = 1; menos de 1 vez = 0,5 **[Pressuposto — validar com o grupo]** (só afeta o núcleo). É intenção declarada: sobrestima o uso (Análise §14) |
| Gasto por encomenda | 19,40 € (IC: 17,63 € a 21,17 €) | P12, amostra toda (Análise §11.1). Os entusiastas preveem 20,97 €; usa-se 19,40 €, o valor fixado na análise |
| Taxa por reserva | **1,47 €** (0,50 € + 5 % × 19,40 €) | D16; Análise §11.1 |
| Agregados por zona | **10 000** | **[Pressuposto — validar com o grupo]** A zona de lançamento ainda não está escolhida. Valor redondo para uma zona urbana ou suburbana com raio de 10 minutos (Análise §7); substituir pelos Censos (INE) da zona escolhida (Q2) |
| Zonas ativas | Ano 1: 1 · ano 2: 3 · ano 3: 5 | Ano 1 numa zona e "novas zonas" no ano 2 (Plano Organizacional §1). O número de zonas novas é **[Pressuposto — validar com o grupo]** (Q3) |
| Rampa de adoção numa zona | 25 % da quota no 1.º ano, 60 % no 2.º, 90 % no 3.º (média do ano) | **[Pressuposto — validar com o grupo]** Um marketplace de dois lados cresce devagar: primeiro a oferta, depois os compradores (Q3) |

**Resultado (cenário de referência):**

| Ano | Zonas | Compradores ativos (média do ano) | Reservas/ano | Reservas/mês | Taxas cobradas |
|---|---|---|---|---|---|
| 1 | 1 | 398 | 16 416 | 1 368 | 24 134 € |
| 2 | 3 | 1 752 | 72 230 | 6 019 | 106 188 € |
| 3 | 5 | 4 142 | 170 726 | 14 227 | 250 989 € |

Cenário otimista (núcleo, 45 %): 41 991 / 184 761 / 436 708 reservas nos anos 1–3. Se a taxa de 0,50 € + 5 % incluir IVA, a receita da GrowNear é 23 % menor do que as taxas cobradas (Q4).

**Sazonalidade.** A oferta é de produtos da época (SWOT, fraquezas: "Oferta irregular e sazonal") e 60 % compram noutro lado quando falta o produto (Análise §9). A previsão anual não tem perfil mensal; o orçamento de tesouraria (Plano Financeiro, VI.5) vai precisar dele (Q11).

## 4. Quantidades a "produzir" e "stocks"

### 4.1 Capacidade necessária

A app processa reservas sem limite prático. O que tem de crescer com as reservas é a **oferta** (produtores e pontos de recolha) e o **apoio**.

| Recurso | Fórmula | Ano 1 | Ano 2 | Ano 3 | Origem do rácio |
|---|---|---|---|---|---|
| Reservas a processar por mês | Programa de vendas (§3) | 1 368 | 6 019 | 14 227 | §3 |
| Produtores ativos necessários | Reservas/mês ÷ 15 reservas por produtor ativo | ≈ 91 | ≈ 401 | ≈ 948 | **[Pressuposto — validar com o grupo]** Não há dados de produtores (o estudo só inquiriu compradores; Análise §14) (Q17) |
| Contactos de apoio por mês | 5 % das reservas | ≈ 68 | ≈ 301 | ≈ 711 | **[Pressuposto — validar com o grupo]** (Q18) |
| Pontos de recolha | Pelo menos 3 por zona ativa | 3 | 9 | 15 | **[Pressuposto — validar com o grupo]** 44 % preferem o ponto de recolha (Análise §7) |

**Ligação ao Plano Organizacional.** O apoio fica com os fundadores no ano 1 e o assistente de apoio e comunidade só entra "se o volume o justificar" (D8, D10; não orçamentado). Com o rácio acima, o ano 1 dá cerca de 3 contactos por dia útil, o que cabe nos fundadores. No ano 3 seriam cerca de 32 por dia útil. Propõe-se um critério objetivo para abrir a vaga (Q18); a decisão continua a ser dos sócios, no orçamento.

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
| CO5 | Pagar o produto, se não pagou na app | Valor da reserva | Produtor pago | Comprador → produtor | Ver Q16 (pagamento num ponto de recolha) |
| CO6 | Avaliar | Experiência | Avaliação visível | App | Moderação |

### 5.3 Exceções (onde a confiança se ganha ou se perde)

| Situação | Tratamento | Responsável | Estado |
|---|---|---|---|
| Produtor cancela ou não tem o produto | Reserva cancelada; sugerir alternativas na zona | App; Operações e Comunidade | Devolução da taxa: regra a decidir (Q15) |
| Comprador não recolhe | Lembrete antes do fim da janela; reserva expira; o produtor volta a anunciar | App | Retenção ou devolução da taxa: regra a decidir (Q15) |
| Produto com problema (qualidade, quantidade) | Reclamação na app; reembolso garantido para compras pagas na app (BMC, relação com clientes) | Operações e Comunidade; Finanças e Administração (reembolso) | Decidido (BMC); custo a estimar (Q19) |
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

| Componente | Valor | Origem |
|---|---|---|
| Taxa cobrada ao comprador | 1,47 € | D16; Análise §11.1 |
| Custo de pagamento por reserva | 0,27 € (só a taxa) · 0,56 € (taxa + produto na app) · **0,32 € em média** (21,7 % da taxa) | Tarifa de 1,5 % + 0,25 € por cobrança **[Pressuposto — validar com o grupo]** (tarifa pública da Stripe para cartões do EEE; confirmar a do MB Way); 15,9 % pagam o produto na app (P13; Análise §8) (Q10) |
| **Margem por reserva** | **1,15 €** se a taxa não incluir IVA · **0,88 €** se incluir | Q4 |
| Gastos com pessoal por reserva | Ano 1: 7,44 € · ano 2: 2,27 € · ano 3: 1,08 € | 122 141 € / 163 721 € / 183 645 € (Plano Organizacional §5.4) ÷ reservas do cenário de referência (§3) |
| Outros custos fixos e variáveis | Por estimar | Nuvem, mapas, contas nas lojas de apps, *coworking*, contabilista, marketing, seguros (Plano Financeiro, VI.2) |

**Leitura.** A parte fixa de 0,25 € por cobrança pesa muito numa taxa de 1,47 €: come cerca de um quinto da receita. E só no ano 3 o cenário de referência cobre os gastos com pessoal (Plano Financeiro, §3). As duas coisas são decisões para o grupo (Q4, Q10, Q5).

## 8. Indicadores (KPI)

Os KPI seguem os princípios do P7 (slide 12): relevantes, definidos (fórmula, unidade, responsável), atempados, comparáveis e equilibrados entre custo, tempo, qualidade e cliente. Incluem os indicadores já fixados no Plano Organizacional (§1 e §5.1). As metas do ano 1 com origem no programa de vendas dependem dos pressupostos da §3; as outras são **[Pressuposto — validar com o grupo]** e fixam-se com o orçamento (Plano Organizacional §1, "Metas") (Q20).

| KPI | Dimensão | Fórmula | Unidade | Frequência | Responsável | Meta do ano 1 | Origem da meta |
|---|---|---|---|---|---|---|---|
| Reservas concluídas | Cliente / volume | Reservas com recolha confirmada no mês | n.º/mês | Semanal | CEO / Gerente | 1 368 em média | §3 (pressupostos Q2–Q3) |
| Compradores ativos | Cliente | Compradores com ≥ 1 reserva nos últimos 30 dias | n.º | Mensal | Marketing e Crescimento | ≈ 400 em média | §3 |
| Compradores recorrentes | Cliente | Compradores com ≥ 2 reservas no mês ÷ compradores ativos | % | Mensal | Marketing e Crescimento | ≥ 50 % | Pressuposto; os entusiastas preveem 3,4 reservas/mês |
| Custo por aquisição | Custo | Gasto de marketing ÷ novos compradores | €/comprador | Mensal | Marketing e Crescimento | A fixar com o orçamento | Q20 |
| Produtores ativos por zona | Oferta | Produtores com ≥ 1 anúncio ativo no mês | n.º | Semanal | Operações e Comunidade | ≈ 90 | §4.1 (pressuposto Q17) |
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
| Custo de pagamento por reserva | Custo | Comissões de pagamento ÷ reservas | €/reserva | Mensal | Finanças e Administração | ≤ 0,32 € | §7 |
| Margem por reserva | Custo | (Taxas sem IVA − custos variáveis) ÷ reservas | €/reserva | Mensal | Finanças e Administração | ≥ 1,15 € (ou 0,88 €) | §7 (Q4) |
| Cobertura dos custos fixos | Financeiro | Margem total ÷ custos fixos do mês | % | Mensal | Finanças e Administração | Ano 1: ≈ 15 % dos gastos com pessoal; 100 % dos custos fixos durante um trimestre abre os aumentos | §3; regra dos aumentos (D3) |
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
