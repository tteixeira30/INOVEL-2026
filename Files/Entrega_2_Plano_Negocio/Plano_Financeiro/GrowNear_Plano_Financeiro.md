# GrowNear — Plano Financeiro

> Base: slides "The Financial Plan" (`Inovel.Context/INOVEL_P8_Financial_Plan.pptx`; capítulo VI nos slides, VII na numeração do Milestone 02). Calendário da UC: plano financeiro nas semanas 10 e 11; apresentação final a 19/12.
> **Modelo:** `GrowNear_Plano_Financeiro.xlsx`, com fórmulas vivas. Folhas: Leia_me, Perguntas_Professor, Resumo, Pressupostos, Mensal (120 meses) e Anual (anos 1–10; VI.1 a VI.6). Mudar um pressuposto recalcula tudo. `GrowNear_Plano_Financeiro.js` calcula só os valores que vêm do inquérito. O Excel entrega-se com o relatório (PP7).
> Parte do Plano de Marketing (`GrowNear_Plano_Marketing.md`, previsão e orçamento), do Plano de Produção (`GrowNear_Plano_Producao.md`) e do Plano Organizacional (`GrowNear_Plano_Organizacional.md`, incluindo as propostas de 18/11 na §13).
> **Estado:** 3.ª versão (20/11). A 1.ª versão (Bruno, 18/11) fixou a estrutura VI.1–VI.6 e o compêndio Q1–Q23; a 2.ª (18/11) completou os mapas com as decisões de 18/11. Esta versão aplica as respostas do professor de 19/11 às perguntas PP1–PP9 (§11) e as decisões de 20/11 (§1.1), **a confirmar com o grupo**. Horizonte de 10 anos. Os números são do **cenário de referência**, salvo indicação. Valores sem origem no repositório estão marcados como **pressuposto** no Excel, cada um com a fonte; os que ainda não foram calculados estão marcados como **por calcular**.

## 0. Resposta às três perguntas do capítulo (slide 2)

| Pergunta | Resposta (cenário de referência, 10 anos) |
|---|---|
| **O projeto é viável?** | **Sim, sob condições, e no limite.** O resultado líquido melhora todos os anos até ao ano 6 (−117 k€ no ano 1 → −26 k€ no ano 5) e passa a positivo no ano 6 (**+45 k€**). Nos anos 7–10 fica perto de zero (+22 k€ → −1 k€), porque as contratações da D10 entram no mês 76. Acumulado a 10 anos: **−456 k€**. No ano 5 as reservas previstas (30 112 por mês) cobrem 92 % do ponto crítico (32 581); no ano 6, 122 %. A partir do ano 3 as reservas são limitadas pela oferta de produtores, por isso o volume deixa de crescer quando param as zonas novas (ano 5) |
| **De quanto financiamento precisa?** | **≈ 506 k€** até ao mês 120 (défice acumulado máximo no mês 62, incluindo a caixa mínima de segurança de 15 k€); ≈ 394 k€ até ao mês 36. Com o serviço do empréstimo, o plano prevê **610 k€ em duas tranches**: 155 k€ no arranque (5 k€ de capital social + **150 k€ de empréstimo da Linha Impulsar Portugal**) e **455 k€ no mês 15**, só se o marco 2 for cumprido (§6). A isto somam-se ≈ 75 k€ de apoios a fundo perdido (Empreende XXI e +Emprego), que entram na DR como subsídios à exploração |
| **Que retorno gera?** | **Negativo no horizonte.** À taxa de 9 %: VAL a 3 anos de −319 k€, a 5 anos de −379 k€ e a 10 anos de **−326 k€** (sem valor residual); TIR a 10 anos de −33 %; sem *payback* em 10 anos. Só o cenário otimista tem retorno positivo (VAL a 10 anos de +46 k€, TIR de 12 %, *payback* em ≈ 7,4 anos; §9) |

**Leitura crítica.**
- **Os 5 fundadores passam a ter salário desde o mês 1** (PP4). O problema da 2.ª versão (três fundadores 5 anos sem salário; Q24) deixa de existir, mas o custo fixo sobe: ≈ 123 k€ de pessoal no ano 1 e ≈ 152 k€ por ano nos anos 3–6.
- **O problema continua a ser estrutural:** cada reserva deixa ≈ 0,61–0,68 € de margem de contribuição (§4). O ponto crítico (≈ 30–37 mil reservas por mês) só se atinge com as 16 zonas maduras e a oferta no máximo (≈ 37 mil reservas por mês). Não sobra folga para as contratações da D10: quando entram (mês 76), o resultado volta a ≈ 0.
- **A previsão já não tem os descontos de 0,75 no cenário de referência** (PP5). Ficam só no pessimista, que não é viável: acumulado a 10 anos de ≈ −1 089 k€ e faltam ≈ 624 k€ de financiamento.
- **Os apoios presumem-se conseguidos** (PP8). O Empreende XXI (40 k€) está fechado desde 23/06/2023: o plano presume a reabertura em 2027 (Q27).

## 1. Decisões e pressupostos

### 1.1 Decisões de 20/11 (respostas do professor de 19/11; a confirmar com o grupo)

As perguntas, as respostas e as decisões estão na folha **Perguntas_Professor** do Excel e na §11.

| PP | Resposta do professor (19/11) | Decisão aplicada ao modelo (20/11, a confirmar com o grupo) | Onde |
|---|---|---|---|
| PP1 | Aproximar receitas e gastos | Zonas **1 / 4 / 8 / 12 / 16** nos anos 1–5 (eram 1/3/5/7/9). GrowNear Pro com **10 %** de adesão **desde o mês 13** (era 5 % desde o mês 25). A taxa (D16) e o custo de aquisição (6 €) mantêm-se | §1.3, §3 |
| PP2 | Horizonte entre 5 e 10 anos | Modelo a **10 anos** (120 meses). Anos 6–10 sem zonas novas, só maturação. VAL a 3, 5 e 10 anos; valor residual opcional (`Incluir_VR` = 0 por defeito). Substitui a D15 (horizonte de 3 anos), que continua a ser mostrada | §8 |
| PP3 | Taxa de atualização ≈ 9 % | **9 %** (era 12 %) | §8 |
| PP4 | Pôr salário aos fundadores (sem outra fonte de rendimento) | Os **5 fundadores com salário desde o mês 1**, com os salários do Plano Organizacional §5.4 (CEO 1 700, CTO 1 600, marketing 1 300, operações 1 200, finanças 1 250 € brutos). Substitui as propostas P1 e P2 de 18/11 (Plano Organizacional §13). As propostas P3 (contratações da D10 pela margem, regra 3), P4 (assistente pelo volume, regra 4) e P5 (financiamento por tranches com marcos) mantêm-se | §3 |
| PP5 | Testar sem o desconto de 0,75 | Conversão da intenção e desconto da frequência: **1** na referência e no otimista; **0,75** no pessimista | §1.3, §9 |
| PP6 | A app é ativo intangível | Custo do CTO nos meses 1–4 (MVP) **capitalizado como ativo intangível** (trabalhos para a própria entidade, ≈ 9 315 €), amortizado em 36 meses desde o lançamento (mês 7) | §2 |
| PP7 | Pode entregar-se o Excel | Entrega-se o Excel | — |
| PP8 | Procurar apoios e presumir que se conseguem | **Empreende XXI** (40 285 € a fundo perdido), **+Emprego** (8 702 € por contratado ≤ 35 anos, não sócio) e **empréstimo da Linha Impulsar Portugal** (150 000 € no mês 1; 24 meses de carência + 96 de reembolso; TAN 6,1 %). 2.ª tranche: **455 000 €** no mês 15. Financiamento total: 610 000 € | §6 |
| PP9 | Entregar tudo (P1 + P2) e mostrar a ligação | Relatório final com a P1 e a P2 e a ligação entre as duas (inquérito → previsão e preço); apresentação: relembrar a P1, centrar na P2 | — |

Correção ao modelo (20/11): os compradores novos a adquirir (custo de aquisição) passam a ser só os que a oferta consegue servir no pico. Antes, o modelo pagava a aquisição de compradores que não havia produtores para servir.

### 1.2 Decisões de 18/11 (reunião de trabalho; as marcadas "proposta" vão aos sócios)

| Tema | Decisão | Onde |
|---|---|---|
| Lançamento | App aos compradores no **mês 7** (julho do ano 1). Meses 1–4: MVP da app; meses 5–6: captação de produtores e pontos de recolha | Plano de Produção §9 |
| Salários | A proposta de 18/11 era só o CTO e o responsável de Operações com salário, desde o lançamento, e os outros 3 fundadores pela margem (fase 2). **A 20/11 passou a: os 5 fundadores desde o mês 1 (PP4).** As contratações da D10 continuam a entrar pela margem (regra 3) e o assistente de apoio pelo volume (Q18) | Plano Organizacional §13 |
| Financiamento | Por fases, com marcos de validação. A proposta de 18/11 era 80 k€ no arranque (empréstimo de 75 k€) + 310 k€ no mês 15; **a 20/11 passou a 155 k€ + 455 k€** (PP8) | §6 |
| Previsão de vendas | Três cenários, com sazonalidade e teto pela oferta de produtores. O desconto da intenção declarada (0,75 na quota e 0,75 na frequência) era aplicado aos três cenários; **a 20/11 ficou só no pessimista** (PP5) | Plano de Marketing §6.3 |
| Zona de lançamento | **Proposta:** Águas Santas (Maia), ≈ 10 650 agregados (INE, Censos 2021) | Plano de Marketing, M1 |
| IVA (Q4) | Os 0,50 € + 5 % **incluem IVA**: o comprador paga o valor testado; a GrowNear recebe 1,20 € por reserva | — |
| Pagamento do produto na app | Mantém-se, apesar do custo (Stripe Connect), por ser a alavanca da confiança | §4 |
| Q8, Q10, Q11, Q15, Q16, Q19 | Aceites as recomendações do Bruno (ver §10). A Q8 foi alterada a 20/11 (PP6) | §10 |
| Horizonte (Q7) | Era "em aberto: perguntar ao professor"; **a 20/11 passou a 10 anos (PP2)** | §8 |

### 1.3 Pressupostos-chave

Todos os pressupostos, com fonte, estão na folha **Pressupostos** do Excel. Os que mais pesam:

| Pressuposto | Valor | Origem | Estado |
|---|---|---|---|
| Receita | Taxa de serviço + GrowNear Pro **desde o mês 13, com 10 % dos produtores ativos a 5 €/mês** (era 5 % desde o mês 25) | D16; BMC; PP1 | Taxa decidida; Pro decidido a 20/11 (valor sem base: validar com produtores) |
| Taxa por reserva | 1,47 € com IVA → **1,20 € sem IVA** (encomenda média de 19,40 €) | D16; Análise §11.1; Q4 | Decidido |
| CMVMC | 0 € | Plano de Produção §0 | Decorre do modelo |
| Quota de compradores na maturidade | 9,2 % / **15,9 %** / 45,1 % (pessimista / referência / otimista) × conversão da intenção de **0,75 / 1 / 1** | Análise §11.1; PP5; Jamieson e Bass (1989) | Quota: pressuposto; conversão: decidido a 20/11 |
| Reservas por comprador e por mês | 3,44 / **3,44** / 3,10 declaradas × desconto de **0,75 / 1 / 1** | P21; PP5 | Pressuposto; desconto decidido a 20/11 |
| Sazonalidade | Pico de junho a setembro; 0,4 do pico no inverno; média de 0,725 | — | Pressuposto |
| Oferta | 1,5 % / **2 %** / 3 % dos agregados como produtores; 15 reservas por produtor no pico | Q17 | Pressuposto (validar com entrevistas). Limita as reservas a partir do ano 3 |
| Zonas | **1 / 4 / 8 / 12 / 16** nos anos 1–5 (zonas novas abrem em abril); sem zonas novas nos anos 6–10 | PP1, PP2 | Decidido a 20/11 (era 1 / 3 / 5 / 7 / 9) |
| Comissões de pagamento | Stripe: 1,5 % + 0,25 € por cobrança. Stripe Connect: 2 € por produtor com transferências no mês + 0,25 % + 0,10 € por transferência | Stripe, preços para Portugal (confirmar) | Fonte pública |
| Custo de aquisição | 6 € por comprador novo (só os que a oferta consegue servir); 1 500 € por zona lançada | Plano de Marketing §6.4; correção de 20/11 | Pressuposto |
| Salários | **5 fundadores desde o mês 1** (7 050 €/mês brutos no total). Bruto do Plano Organizacional §5.4 × 14 + TSU 23,75 %; benefícios de 120 €/pessoa/mês e formação de 500 €/pessoa/ano a partir do ano 2. Contratações da D10 pela margem (regra 3); assistente pelo volume (regra 4) | Plano Organizacional §5.4, §9; PP4 | Decidido a 20/11 (valores dos benefícios: pressuposto) |
| Ativo intangível (app) | Custo do CTO nos meses 1–4 (≈ 9 315 €), amortizado em 36 meses desde o mês 7 | PP6; SNC, NCRF 6 | Decidido a 20/11 |
| Apoios | Empreende XXI: 15 × IAS × 5 promotores = 40 285 € (65 % no mês 3, 35 % no mês 13). +Emprego: 8 702 € por colaborador contratado ≤ 35 anos, não sócio (40 / 40 / 20 % em 24 meses) | IEFP; PP8 | Decidido a 20/11; **Empreende XXI fechado desde 23/06/2023, presume-se a reabertura em 2027** |
| Empréstimo | **150 000 €** no mês 1, Linha Impulsar Portugal (BPF + garantia mútua até 80 %), TAN 6,1 %, 24 meses de carência + 96 de reembolso | Exemplo representativo do ABANCA (Euribor 12m + 3,13 %); PP8 | Decidido a 20/11 (confirmar com o banco) |
| 2.ª tranche | **455 000 €** no mês 15, capital próprio (sócios ou investidor), se o marco 2 for cumprido | PP8 | Valor decidido a 20/11; fonte por decidir (Q25) |
| IRC | 15 % nos primeiros 50 000 € (PME), 17 % no resto; derrama de 1,5 %; reporte de prejuízos até 65 % do lucro | OE 2026; Lei 64/2025 | Lei (confirmar) |
| Taxa de atualização | **9 %** (era 12 %) | Professor (19/11), PP3 | Decidido a 20/11 |

## 2. VI.1 Plano de investimento

O slide 4 pede um inventário exaustivo. A decisão de 18/11 sobre a Q8 era tratar o desenvolvimento da app como gasto; **a 20/11 passou a ativo intangível** (PP6): o custo do CTO nos meses 1–4 (salário, subsídios, TSU e seguro de acidentes de trabalho) capitaliza-se como trabalhos para a própria entidade. Os fundadores usam os seus computadores.

| Ativo | Valor | Quando | Vida útil |
|---|---|---|---|
| Ativo intangível: desenvolvimento da app (MVP) | 9 315 € | Meses 1–4 | 3 anos, a partir do lançamento (mês 7) |
| Equipamento de teste (1 telemóvel iOS + 1 Android) | 800 € | Mês 1 | 3 anos |
| Computador por colaborador contratado | 900 € cada | Na entrada: assistente no mês 23 (900 €); contratações da D10 no mês 76 (2 700 €) | 3 anos |
| **Total nos 10 anos** | **13 715 €** (10 115 € no ano 1) | | |

Os gastos de arranque também se inventariam, mas vão à DR como FSE: constituição (360 €), registo da marca (200 €), jurídico (1 500 €), contas nas lojas de apps (115 €) e material dos pontos de recolha (450 €). Somam ≈ 2 600 €.

## 3. VI.2 Demonstração de resultados previsional

Modelo do slide 6 do P8 (cenário de referência; valores em €):

| | Ano 1 (2027) | Ano 2 | Ano 3 | Ano 4 | Ano 5 | Ano 6 | Ano 7 | Ano 8 | Ano 9 | Ano 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| (+) Vendas e serviços prestados | 3 219 | 48 598 | 161 921 | 290 765 | 420 049 | 507 642 | 517 136 | 517 136 | 517 136 | 517 136 |
| (+) Trabalhos para a própria entidade (app) | 9 315 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| (−) CMVMC | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| (−) FSE | 22 485 | 70 307 | 146 622 | 218 321 | 287 603 | 301 572 | 296 360 | 297 500 | 297 500 | 297 500 |
| (−) Gastos com pessoal | 123 128 | 136 062 | 152 233 | 152 233 | 152 233 | 152 233 | 203 099 | 220 054 | 220 054 | 220 054 |
| (+) Subsídios à exploração | 26 185 | 17 580 | 3 481 | 1 740 | 0 | 0 | 10 442 | 10 442 | 5 221 | 0 |
| **(=) EBITDA** | **−106 894** | **−140 192** | **−133 453** | **−78 049** | **−19 788** | **53 836** | **28 119** | **10 023** | **4 802** | **−418** |
| (−) Amortizações | 1 819 | 3 422 | 3 672 | 1 852 | 250 | 0 | 675 | 900 | 900 | 225 |
| (−) Juros | 8 388 | 9 150 | 8 713 | 7 577 | 6 434 | 5 290 | 4 146 | 3 002 | 1 859 | 715 |
| (−) IRC | 0 | 0 | 0 | 0 | 0 | 3 277 | 1 573 | 413 | 138 | 0 |
| **(=) Resultado líquido** | **−117 100** | **−152 763** | **−145 838** | **−87 479** | **−26 471** | **45 269** | **21 725** | **5 708** | **1 906** | **−1 358** |
| Acumulado | −117 100 | −269 864 | −415 701 | −503 180 | −529 652 | −484 382 | −462 657 | −456 950 | −455 044 | **−456 402** |

Vendas: taxas de serviço (3 219 € → 410 256 € no ano 5 → 505 080 € por ano a partir do ano 7) + GrowNear Pro (1 342 € no ano 2 → 9 792 € no ano 5 → 12 056 € por ano). Há IRC nos anos 6–9 apesar do acumulado negativo, porque o reporte de prejuízos só deduz até 65 % do lucro.

**FSE por natureza** (ano 1 → ano 5 → ano 10):
- **Variáveis por reserva:**
  - comissões Stripe: 903 € → 115 022 € → 141 608 €;
  - Stripe Connect: 529 € → 51 698 € → 63 647 €;
  - reembolsos: 42 € → 5 294 € → 6 518 €;
  - nuvem: 28 € → 3 613 € → 4 449 €.
- **Crescimento:**
  - aquisição de compradores: 2 185 € → 47 380 € → 32 107 €;
  - captação de produtores: 473 € → 12 783 € → 0 € (sem zonas novas);
  - lançamento de zonas: 1 500 € → 6 000 € → 0 €.
- **Fixos:**
  - deslocações: 1 200 € → 28 200 € → 28 800 €;
  - *coworking* (100 €/pessoa/mês): 6 000 € → 7 200 € → 10 800 €;
  - contabilista: 2 400 €/ano;
  - nuvem: 1 800 € → 2 400 €;
  - software: 1 200 € → 1 440 € → 2 160 €;
  - seguros, HSST, lojas e arranque.

**Gastos com pessoal:**
- **Desde o mês 1:** os 5 fundadores (7 050 €/mês brutos). No ano 1, o custo do CTO nos meses 1–4 (≈ 9 315 €) está nos gastos com pessoal e volta como trabalhos para a própria entidade (§2).
- **A partir do mês 23:** entra o assistente de apoio e comunidade, porque os produtores captados passam de 500 (regra 4).
- **A partir do mês 76:** entram as contratações da D10 (programador júnior, marketing júnior e técnico administrativo e financeiro; regra 3), quando a margem dos últimos 12 meses cobre os custos fixos mais o seu custo. A equipa passa de 6 para 9 pessoas e os gastos com pessoal de ≈ 152 k€ para ≈ 220 k€ por ano.
- A parte variável do CEO não está no modelo (só com metas cumpridas).

**Subsídios à exploração:** Empreende XXI de 26 185 € (mês 3) e 14 100 € (mês 13); +Emprego pelo assistente (meses 24, 36 e 48) e pelas 3 contratações da D10 (meses 77, 89 e 101). ≈ 75 k€ em 10 anos.

## 4. Margem por reserva e ponto crítico

| € por reserva (encomenda de 19,40 €) | Ano 1 | Ano 5 |
|---|---|---|
| Taxa paga pelo comprador | 1,47 | 1,47 |
| Receita sem IVA, com 5 % de cancelamentos com devolução | 1,14 | 1,14 |
| Comissões Stripe (taxa + produto, quando pago na app) | −0,32 | −0,32 |
| Stripe Connect | −0,19 | −0,14 |
| Reembolsos e nuvem | −0,02 | −0,02 |
| GrowNear Pro (por reserva) | 0,00 | +0,03 |
| **Margem de contribuição** | **0,61** | **0,68** |

O Stripe Connect pesa mais no arranque, porque cada produtor faz poucas reservas por mês. Na 2.ª versão estimou-se que **pagar o produto na app custa à GrowNear ≈ 1,3 € a 1,5 € por reserva paga na app** (Connect + 1,5 % sobre o produto), mais do que a taxa rende; com o modelo de 20/11, deixar de oferecer o pagamento na app melhora o acumulado a 10 anos em ≈ 508 k€ (§9). Mantém-se por decisão de 18/11: é a base do reembolso garantido, que responde à barreira principal (a confiança).

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 | Ano 6 | Ano 7 | Ano 8 | Ano 9 | Ano 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Ponto crítico (reservas por mês) | 20 070 | 23 727 | 28 951 | 30 902 | 32 581 | 29 759 | 34 977 | 37 234 | 37 234 | 37 151 |
| Reservas por mês previstas (com a app lançada) | 473 | 3 468 | 11 604 | 20 844 | 30 112 | 36 391 | 37 072 | 37 072 | 37 072 | 37 072 |
| Previsto ÷ ponto crítico | 1 % | 15 % | 40 % | 67 % | 92 % | 122 % | 106 % | 100 % | 100 % | 100 % |

O ponto crítico sobe face à 2.ª versão (18 602 reservas por mês no ano 5) por causa dos salários dos 5 fundadores e das zonas extra. A partir do ano 7, as contratações da D10 levam-no até ao volume máximo que a oferta permite (≈ 37 mil reservas por mês com 16 zonas): a regra 3 contrata enquanto a margem chega, e o resultado fica em ≈ 0 (Q28).

## 5. VI.3 Balanço previsional (fim do ano)

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 | Ano 10 |
|---|---|---|---|---|---|---|
| Ativo fixo tangível | 533 € | 1 117 € | 550 € | 250 € | 0 € | 0 € |
| Ativo intangível (app) | 7 762 € | 4 657 € | 1 552 € | 0 € | 0 € | 0 € |
| Estado: IVA a recuperar | 2 675 € | 0 € | 0 € | 0 € | 0 € | 0 € |
| Caixa e depósitos | 30 278 € | 340 875 € | 187 595 € | 89 371 € | 50 551 € | 34 285 € |
| **Total do ativo** | **41 248 €** | **346 649 €** | **189 698 €** | **89 621 €** | **50 551 €** | **34 285 €** |
| Capital social | 5 000 € | 5 000 € | 5 000 € | 5 000 € | 5 000 € | 5 000 € |
| 2.ª tranche (capital / prestações suplementares) | 0 € | 455 000 € | 455 000 € | 455 000 € | 455 000 € | 455 000 € |
| Resultados transitados + resultado do ano | −117 100 € | −269 864 € | −415 701 € | −503 180 € | −529 652 € | −456 402 € |
| **Total do capital próprio** | **−112 100 €** | **190 136 €** | **44 299 €** | **−43 180 €** | **−69 652 €** | **3 598 €** |
| Financiamentos obtidos | 150 000 € | 150 000 € | 132 813 € | 114 063 € | 95 313 € | 1 563 € |
| Estado (IVA, TSU e IRC a pagar) | 3 349 € | 6 512 € | 12 586 € | 18 739 € | 24 891 € | 29 125 € |
| **Total do passivo** | **153 349 €** | **156 512 €** | **145 399 €** | **132 801 €** | **120 203 €** | **30 687 €** |

O balanço fecha nos 10 anos (verificação no Excel).

**Atenção:** o capital próprio é negativo no fim do ano 1 (−112 k€) e de novo nos anos 4 a 7 (−43 k€ no ano 4, −70 k€ no ano 5, −24 k€ no ano 6, −3 k€ no ano 7); nos anos 8–10 fica em 3–5 k€. Com 5 000 € de capital social, a Lda. perde metade do capital logo nos primeiros meses (art. 35.º do Código das Sociedades Comerciais; Q6). Além disso, a Linha Impulsar exige pelo menos 15 % de capitais próprios. A 2.ª tranche como capital ou prestações suplementares repõe-no no ano 2, mas não chega para os anos 4–7. Alternativas: capital social maior no arranque, ou parte da 2.ª tranche mais cedo (Q6).

**Valores dos produtos pagos na app:** são dos produtores. Passam pela Stripe e não são ativo nem receita da GrowNear (tratamento de agente; decisão sobre a Q11: transferência depois da recolha confirmada).

## 6. VI.4 Plano de financiamento (por fases)

| Fonte | Valor | Quando | Condição |
|---|---|---|---|
| Capital social | 5 000 € (1 000 € por sócio) | Mês 1 | — |
| Empréstimo da Linha Impulsar Portugal (1.ª tranche) | 150 000 € | Mês 1 (pedido antes da constituição) | TAN 6,1 % (exemplo do ABANCA; confirmar com o banco); 24 meses de carência + 96 de reembolso; garantia mútua até 80 %; exige ≥ 15 % de capitais próprios; provavelmente com aval dos sócios |
| 2.ª tranche (capital próprio: sócios ou investidor) | 455 000 € | Mês 15 (março do ano 2) | Só se o marco 2 for cumprido |
| **Total** | **610 000 €** | | |
| Apoios a fundo perdido (na DR, não no financiamento) | Empreende XXI 40 285 € (meses 3 e 13); +Emprego 8 702 € por contratado | Ver §3 | Empreende XXI: presume-se a reabertura em 2027; manter os postos ≥ 2 anos. +Emprego: contratado ≤ 35 anos, desempregado inscrito no IEFP, sem termo, não sócio |

A proposta de 18/11 era 390 k€ (75 k€ de empréstimo + 310 k€ no mês 15); a 20/11 passou a 610 k€, porque os 5 fundadores têm salário desde o mês 1 e o horizonte passou a 10 anos. O empréstimo foi dimensionado para manter a caixa mínima até ao marco 2; a 2.ª tranche, para a manter até ao mês 120, depois dos apoios.

**Serviço do empréstimo:** juros de 762,50 €/mês desde o mês 2; capital de 1 562,50 €/mês a partir do mês 26. Juros em 10 anos: ≈ 55 k€. A última prestação cai no mês 121, fora do horizonte (1 563 € em dívida no fim do ano 10).

**Marcos de validação** (folha Resumo; mínimo = 70 % do previsto):

| Marco | Mês | Indicador | Previsto | Mínimo | Se falhar |
|---|---|---|---|---|---|
| 1 | 9 (setembro do ano 1) | Reservas no mês, zona 1 | 583 | 408 | Rever produto e captação antes do inverno |
| 2 | 15 (março do ano 2) | Compradores ativos na zona 1 | 508 | 356 | Não há 2.ª tranche nem zonas novas: rever o modelo ou parar |
| 2 | 15 | Produtores captados na zona 1 | 201 | 141 | Idem |
| 3 | 27 (março do ano 3) | Reservas no mês | 6 642 | 4 650 | Adiar as zonas do ano 3 |

Se o marco 2 falhar, a perda máxima fica limitada à 1.ª tranche (155 k€, dos quais 150 k€ de empréstimo a reembolsar) e ao trabalho dos fundadores. Falta confirmar se o Empreende XXI teria de ser devolvido nesse caso, por os postos não se manterem 2 anos (Q27).

## 7. VI.5 Orçamento de tesouraria

Mensal, na folha **Mensal** (secção "Orçamento de tesouraria"). Pontos principais:

| Fluxo | Momento no modelo |
|---|---|
| Taxas | Recebidas no mês da reserva, com IVA |
| Salários | Pagos no mês, desde o mês 1; os subsídios em junho e dezembro (meses com o dobro do pagamento) |
| TSU | Paga no mês seguinte |
| IVA | Regime trimestral: pago em fevereiro, maio, agosto e novembro. Crédito no ano 1; pagamentos a partir do ano 2 (1 469 €; 26 607 € no ano 3; 85 740 € no ano 5; ≈ 115 k€ por ano a partir do ano 7) |
| IRC | Maio do ano seguinte (primeiro pagamento no ano 7, sobre o lucro do ano 6) |
| Apoios | Empreende XXI nos meses 3 e 13; +Emprego no mês seguinte à contratação, 12 e 24 meses depois |
| Empréstimo | Juros mensais desde o mês 2; capital a partir do mês 26 (1 562,50 €/mês) |

**Caixa:**

| Mês | 1 | 6 | 12 | 14 | 15 | 24 | 36 | 48 | 60 | 62 | 120 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Caixa (fim do mês) | 145 284 € | 108 485 € | 30 278 € | **18 025 €** | 460 639 € | 340 875 € | 187 595 € | 89 371 € | 50 551 € | 20 428 € | 34 285 € |

Os pontos mais apertados são o **mês 14**, antes da 2.ª tranche, o mês 62 (défice acumulado máximo) e o mês 110 (17 144 €, o mínimo dos 120 meses). A caixa nunca fica abaixo do mínimo de segurança (15 000 €) no cenário de referência.

## 8. VI.6 Análise de rentabilidade

| Indicador | Valor | Nota |
|---|---|---|
| *Cash flow* antes de financiamento | −116 335 / −135 253 / −127 379 / −71 897 / −13 636 € (anos 1–5); +56 646 / +23 566 / +8 451 / +4 389 / −556 € (anos 6–10) | Acumulado a 10 anos: −372 004 € |
| VAL a 3 anos (D15) | −318 929 € | Taxa de atualização de 9 % (PP3) |
| VAL a 5 anos | −378 725 € | |
| VAL a 10 anos | −326 030 € | Sem valor residual (`Incluir_VR` = 0; Q7) |
| TIR a 10 anos | −33 % | Os fluxos mudam de sinal no ano 6, mas não recuperam o investimento |
| *Payback* | Não recupera em 10 anos | |
| Fundo de maneio de exploração | −24 891 € no ano 5; −29 125 € no ano 10 | Negativo: recebe na reserva e paga IVA e TSU mais tarde, por isso o fundo de maneio financia a empresa |

Na 2.ª versão (5 anos, 12 %), o VAL era −158 k€ a 3 anos e −210 k€ a 5 anos. Os valores pioram: os salários dos 5 fundadores desde o mês 1 aumentam o défice dos primeiros anos; a taxa de 9 % atenua. O horizonte de 10 anos não muda o sinal no cenário de referência: os anos 6–10 têm fluxos pequenos, porque as contratações da D10 absorvem a margem. Com valor residual (`Incluir_VR` = 1), o VAL a 10 anos não muda, porque o fluxo do ano 10 não é positivo; só conta nas variantes em que o ano 10 dá lucro (§9).

## 9. Cenários e sensibilidade (financiamento de 610 k€, salvo indicação)

**Cenários** (folha Pressupostos, célula "Cenário ativo"):

| Cenário | Resultado do ano 5 | Resultado do ano 6 | Acumulado a 10 anos | Necessidade até ao mês 120 | Financiamento em falta | VAL a 5 anos | VAL a 10 anos | TIR | *Payback* |
|---|---|---|---|---|---|---|---|---|---|
| Pessimista (quota de 9,2 %; descontos de 0,75) | −143 168 € | −92 508 € | −1 088 696 € | 1 030 638 € | **624 349 €** (caixa abaixo do mínimo desde o mês 44) | −564 052 € | −712 426 € | Não existe | Não recupera |
| **Referência** (quota de 15,9 %; sem descontos) | **−26 471 €** | **+45 269 €** | **−456 402 €** | **505 537 €** | **0 €** | **−378 725 €** | **−326 030 €** | **−33 %** | **Não recupera** |
| Otimista (quota de 45,1 %; limitado pela oferta desde o ano 1) | +54 050 € | +97 456 € | +206 138 € | 411 233 € | 0 € | −259 936 € | +46 385 € | 12 % | ≈ 7,4 anos |

- **Referência:** a oferta limita as reservas a partir do ano 3 (6 meses no ano 3, todos os meses depois). Equipa de 9 pessoas a partir do mês 76.
- **Pessimista:** a oferta nunca limita; a margem nunca cobre os custos fixos, por isso as contratações da D10 não entram. O financiamento de 610 k€ esgota-se no ano 4.
- **Otimista:** a oferta limita quase sempre (4 meses no ano 1, 11 no ano 2, todos depois). Lucro a partir do ano 5; contratações da D10 no mês 61; *payback* no ano 8.

**Sensibilidade** (modelo de 20/11, cenário de referência, uma alteração de cada vez salvo nas combinadas; financiamento previsto de 610 k€). A tabela da 2.ª versão (5 anos, 12 %, equipa mínima, 390 k€) deixou de ser comparável e foi retirada.

| Variante | Resultado do ano 5 | Resultado do ano 6 | Acumulado a 10 anos | Necessidade até ao mês 120 | Em falta | VAL a 10 anos | TIR | *Payback* |
|---|---|---|---|---|---|---|---|---|
| **Referência** | **−26 k€** | **+45 k€** | **−456 k€** | **506 k€** | **0** | **−326 k€** | **−33 %** | **não recupera** |
| Com valor residual (`Incluir_VR` = 1) | −26 k€ | +45 k€ | −456 k€ | 506 k€ | 0 | −326 k€ (sem efeito: o fluxo do ano 10 não é positivo) | −33 % | não recupera |
| Encomenda média de 10 € (em vez de 19,40 €) | −143 k€ | −92 k€ | −1 175 k€ | 1 115 k€ | 709 k€ | −753 k€ | não existe | não recupera |
| Custo de aquisição de 12 € | −74 k€ | +8 k€ | −516 k€ | 647 k€ | 138 k€ | −392 k€ | −21 % | não recupera |
| Custo de aquisição de 3 € | −3 k€ | +56 k€ | −344 k€ | 450 k€ | 0 | −255 k€ | −19 % | não recupera |
| Taxa de 0,75 € + 5 % | +39 k€ | +81 k€ | +15 k€ | 406 k€ | 0 | −57 k€ | 5 % | 8,6 anos |
| Taxa de 0,50 € + 5 % mais IVA (comprador paga ≈ 1,81 €) | +60 k€ | +91 k€ | +176 k€ | 381 k€ | 0 | +35 k€ | 11 % | 7,4 anos |
| Sem pagamento do produto na app | +44 k€ | +81 k€ | +52 k€ | 400 k€ | 0 | −39 k€ | 6 % | 8,3 anos |
| Stripe Connect sem custo por conta e por transferência (contas Standard) | +24 k€ | +68 k€ | −109 k€ | 428 k€ | 0 | −130 k€ | −1 % | não recupera |
| Sem Empreende XXI (não reabre) | −26 k€ | +45 k€ | −497 k€ | 546 k€ | 38 k€ | −362 k€ | −34 % | não recupera |
| Sem as contratações da D10 | −26 k€ | +45 k€ | −225 k€ | 506 k€ | 0 | −214 k€ | −6 % | não recupera |
| 10 reservas por produtor no pico (em vez de 15) | −100 k€ | −46 k€ | −840 k€ | 780 k€ | 374 k€ | −560 k€ | não existe | não recupera |
| 20 reservas por produtor no pico | +47 k€ | +90 k€ | +56 k€ | 452 k€ | 0 | −45 k€ | 6 % | 8,4 anos |
| 3 % dos agregados como produtores (em vez de 2 %) | +43 k€ | +115 k€ | +154 k€ | 493 k€ | 0 | −3 k€ | 9 % | 7,9 anos |
| Decisão anterior: zonas 1/3/5/7/9 | −84 k€ | −47 k€ | −798 k€ | 741 k€ | 334 k€ | −525 k€ | não existe | não recupera |
| Decisão anterior: Pro a 5 % desde o mês 25 | −31 k€ | +40 k€ | −485 k€ | 518 k€ | 22 k€ | −343 k€ | não existe | não recupera |
| Decisão anterior: conversão de 0,75 na referência | −87 k€ | −3 k€ | −487 k€ | 679 k€ | 181 k€ | −386 k€ | −16 % | não recupera |
| Decisão anterior: taxa de atualização de 12 % | −26 k€ | +45 k€ | −456 k€ | 506 k€ | 0 | −312 k€ | −33 % | não recupera |
| Combinada: taxa de 0,75 € + 5 %, aquisição de 3 € e valor residual | +60 k€ | +82 k€ | +131 k€ | 367 k€ | 0 | +453 k€ | 10 % | 7,6 anos |
| Combinada, também sem as contratações da D10 | +61 k€ | +141 k€ | +422 k€ | 367 k€ | 0 | +854 k€ | 19 % | 6,5 anos |
| Capital social de 20 k€ (2.ª tranche 15 k€ menor) | −26 k€ | +45 k€ | −456 k€ | 506 k€ | 0 | −326 k€ | −33 % | não recupera |

**Leitura:**
- **A margem por reserva continua a ser o problema central:** 0,61–0,68 € por reserva para custos fixos e de crescimento de ≈ 146–294 k€ por ano. As alavancas que a aumentam (preço, IVA fora da taxa, pagamento do produto fora da app, custo do Connect) são as únicas que, sozinhas, tornam o acumulado a 10 anos positivo.
- **O preço é a decisão mais forte nas mãos do grupo:** subir a parte fixa para 0,75 € ou cobrar o IVA por cima dos 0,50 € + 5 % fecha o plano (acumulado positivo, *payback* em 7–9 anos). Mas afasta-se do valor testado no inquérito (P14) e da D16 (Q4, Q13).
- **O pagamento do produto na app custa ≈ 0,5 M€ em 10 anos** (comparação com "sem pagamento na app", que inclui os efeitos indiretos nas contratações). Mantém-se por decisão de 18/11 (confiança), mas é a segunda alavanca mais forte; usar contas Connect Standard recupera parte (Q11).
- **O volume está limitado pela oferta** desde o ano 3: 3 % de produtores, ou 20 reservas por produtor, fecham o plano; 10 reservas por produtor fazem-no falhar. É o pressuposto com menos base (Q17) e o primeiro a validar.
- **A regra das contratações da D10 consome o lucro dos anos 7–10** (Q28): sem elas, o acumulado melhora ≈ 231 k€.
- **O valor da encomenda média é o maior risco** (SWOT: "Valor por venda baixo (2 a 5 €)"; Plano de Marketing, M2): com 10 €, o plano precisa de mais 709 k€.
- **O valor residual e a taxa de atualização quase não mudam a conclusão** no cenário de referência. O capital social de 20 k€ não muda os resultados, mas melhora o capital próprio (Q6).

## 10. Questões para o grupo (compêndio)

Estado a 20/11. As questões decididas ficam com a decisão; as abertas mantêm a recomendação. As decisões de 20/11 vêm das respostas do professor (§11) e estão **a confirmar com o grupo**.

**Decididas a 18/11:**

| # | Questão | Decisão |
|---|---|---|
| Q1 | Previsão mínima ou plano de marketing primeiro? | Previsão com 3 cenários e ajustes, feita no rascunho do Plano de Marketing (`GrowNear_Plano_Marketing.md`) |
| Q2 | Zona de lançamento | Proposta: Águas Santas (Maia), ≈ 10 650 agregados (confirmar no INE; Plano de Marketing, M1) |
| Q4 | A taxa inclui IVA? | Sim: o comprador paga 1,47 €; a GrowNear recebe 1,20 € |
| Q10 | Custo dos pagamentos | Fica com a GrowNear. Tarifa Stripe confirmada (1,5 % + 0,25 €); falta confirmar o MB WAY. O Connect acrescenta ≈ 0,14–0,19 € por reserva |
| Q11 | Tesouraria | Perfil sazonal no modelo; transferência ao produtor depois da recolha confirmada, quinzenal |
| Q15 | Taxa em cancelamentos | Devolvida se o produtor cancelar (5 % das reservas no modelo); retida se o comprador não recolher |
| Q16 | Pagamento num ponto de recolha | Na app ou por MB WAY direto ao produtor; o parceiro não recebe dinheiro |
| Q18 | Critério para o assistente de apoio | Mais de 20 contactos humanos por dia útil, ou mais de 500 produtores captados. Com as zonas de 20/11, entra no mês 23 no cenário de referência (era o mês 27) |
| Q19 | Custo do reembolso | A GrowNear reembolsa e desconta ao produtor quando a falha é dele; suporta 25 % dos casos (pressuposto) |
| Q21 | Numeração dos capítulos | Numeração do Milestone 02 no plano de negócio (Financeiro = VII) |
| Q22 | Referências à SWOT | Sempre pelo texto do item |

**Decididas ou alteradas a 20/11 (a confirmar com o grupo):**

| # | Questão | Decisão |
|---|---|---|
| Q3 | Expansão e rampa | Era 1/3/5/7/9 zonas; passou a **1 / 4 / 8 / 12 / 16** nos anos 1–5 e sem zonas novas nos anos 6–10 (PP1, PP2). Adoção linear até à maturidade em 30 meses |
| Q5 | Como cobrir o défice? | Era equipa mínima até ao ponto crítico + 390 k€ por fases; passou a **5 fundadores pagos desde o mês 1 + 610 k€ por fases** (150 k€ de empréstimo + 455 k€ no marco 2) **+ apoios** (PP4, PP8) |
| Q7 | Horizonte de 3 ou 5 anos | **10 anos** (PP2); o modelo mostra também o VAL a 3 e a 5 anos. Falta decidir o valor residual (ver "Em aberto") |
| Q8 | Investimento | Era "o desenvolvimento da app é gasto"; passou a **ativo intangível** (≈ 9 315 €, amortizado em 36 meses; PP6) |
| Q12 | Taxa de atualização | **9 %** (PP3; era 12 %) |
| Q14 | Ferramenta | Modelo Excel próprio, **entregue com o relatório** (PP7), com a estrutura do P8 e DR a 10 anos |
| Q24 | Três fundadores sem salário | **Resolvida:** os 5 fundadores têm salário desde o mês 1 (PP4) |

**Em aberto:**

**Q6. Condições do empréstimo e capital social.**
- *Contexto:* o modelo usa 150 000 € da Linha Impulsar Portugal a 6,1 % (exemplo do ABANCA), com 24 meses de carência e 96 de reembolso, e 5 000 € de capital social. O capital próprio fica negativo no ano 1 e nos anos 4–7 (§5); a Linha Impulsar exige ≥ 15 % de capitais próprios.
- *Recomendação:* pedir uma simulação a um banco da linha. Ponderar um capital social de 10 000–20 000 € (ou parte da 2.ª tranche como capital no arranque) e ver se chega para os anos 4–7.

**Q7 (parte em aberto). Valor residual.**
- *Contexto:* o horizonte está decidido (10 anos), mas o VAL a 10 anos não inclui valor residual (`Incluir_VR` = 0).
- *Próximo passo:* correr com `Incluir_VR` = 1 (§9) e decidir se entra no plano.

**Q9. FSE.**
- *Contexto:* estão todos estimados no Excel, mas a maioria é pressuposto.
- *Recomendação:* cada área confirma os seus (orçamento pedido ou preço público): CTO (nuvem, lojas), Marketing (custo de aquisição, campanhas), Finanças (contabilista, seguros, HSST, jurídico), Operações (deslocações, pontos de recolha, embaixadores).

**Q13. IRC.**
- *Contexto:* há IRC nos anos 6–9 (3 277 € no ano 6), porque o reporte de prejuízos só deduz até 65 % do lucro.
- *Próximo passo:* confirmar as taxas, o limite do reporte e a derrama da Maia com o contabilista.

**Q17. Reservas por produtor e produtores por zona.**
- *Contexto:* 15 reservas por produtor no pico e 2 % dos agregados como produtores. Com as decisões de 20/11, a oferta limita as reservas a partir do ano 3 no cenário de referência (e desde o ano 1 no otimista): é agora o pressuposto que fixa o volume máximo.
- *Próximo passo:* entrevistas a produtores (Plano de Marketing, M5) e sensibilidade (§9).

**Q20. Metas dos KPI.**
- *Contexto:* as metas de volume vêm do modelo (Plano de Produção §8), que mudou a 20/11.
- *Próximo passo:* atualizar o Plano de Produção §8 e aprovar na reunião de sócios.

**Q23. Pagamentos por conta dos produtores (Stripe Connect, DAC7).**
- *Contexto:* o Connect custa ≈ 2 € por produtor com transferências no mês.
- *Opções:*
  - contas "Express" (a GrowNear paga, o produtor tem menos burocracia: é o que está no modelo);
  - contas "Standard" (sem custo por conta para a GrowNear, mas o produtor paga a comissão sobre o produto e trata da conta com a Stripe).
- *Próximo passo:* confirmar a tarifa e a solução antes do lançamento (CTO + Finanças).

**Q25. Fonte da 2.ª tranche (455 k€).**
- *Contexto:* a 18/11 eram 310 k€; a 20/11 passou a 455 k€ no mês 15 (PP8), como capital próprio. Os apoios encontrados (Empreende XXI, +Emprego) são a fundo perdido mas pequenos (≈ 75 k€) e já estão no modelo; não substituem a tranche. 455 k€ é demasiado para os sócios.
- *Opções:* investidor (*business angel* ou capital de risco), que exige 3/4 dos votos (Plano Organizacional §6) e dilui os 20 % de cada sócio; parte em empréstimo com garantia mútua (a Linha Impulsar já está usada na 1.ª tranche).
- *Recomendação:* apresentar a 2.ª tranche como **ronda de investimento ligada ao marco 2**.

**Q26. Valor da encomenda média (Plano de Marketing, M2).**
- *Contexto:* na 2.ª versão, com 10 € em vez de 19,40 €, o défice a 5 anos subia de 311 k€ para 432 k€. Com o modelo de 20/11, o acumulado a 10 anos passa de −456 k€ para −1 175 k€ e faltam 709 k€ de financiamento (§9).
- *Recomendação:* manter 19,40 € (evidência do inquérito) e mostrar a sensibilidade. Medir no marco 1.

**Novas (20/11):**

**Q27. Empreende XXI fechado.**
- *Contexto:* o programa está fechado desde 23/06/2023; o modelo presume a reabertura em 2027 (40 285 €, 65 % no mês 3). Obriga a manter os postos ≥ 2 anos, o que pode chocar com a regra de parar se o marco 2 falhar (mês 15).
- *Próximo passo:* confirmar as condições de elegibilidade dos 5 promotores, o que acontece ao apoio se a empresa parar antes dos 2 anos, e correr a variante sem o apoio (§9).

**Q28. Contratações da D10 levam o resultado a ≈ 0.**
- *Contexto:* pela regra 3, o programador júnior, o marketing júnior e o técnico administrativo entram no mês 76, quando a margem cobre os custos fixos mais o seu custo. O resultado passa de +45 k€ (ano 6) para ≈ 0 nos anos 7–10 e o VAL a 10 anos não melhora.
- *Opções:* (a) manter (a equipa cresce com a margem); (b) exigir uma folga de lucro antes da fase 3; (c) contratar só o necessário para crescer além das 16 zonas.
- *Próximo passo:* correr a variante sem a D10 (§9) e decidir.

**Q29. Crescimento depois do ano 5.**
- *Contexto:* sem zonas novas nos anos 6–10 (PP2) e com a oferta a limitar, as reservas param em ≈ 445 mil por ano a partir do ano 7. O plano não tem crescimento nos anos 6–10.
- *Próximo passo:* decidir se se mantém (prudência) ou se se testam zonas novas nos anos 6–10, e escrever a escolha no Plano de Marketing.

## 11. Perguntas ao professor (PP1–PP9)

Feitas a partir da 2.ª versão; respondidas a 19/11; aplicadas ao modelo a 20/11 (decisões a confirmar com o grupo). Texto completo na folha **Perguntas_Professor** do Excel.

| PP | Pergunta | Resposta do professor (19/11) | Decisão (20/11, a confirmar) | Questão do compêndio |
|---|---|---|---|---|
| PP1 | Viabilidade: é aceitável não haver lucro em 5 anos (financiamento por fases e marcos)? | Analisar se é possível alterar um pouco os valores para aproximar lucro e gastos | Zonas 1 / 4 / 8 / 12 / 16; GrowNear Pro a 10 % desde o mês 13. Lucro no ano 6 (≈ +45 k€); acumulado a 10 anos ≈ −456 k€ | Q3, Q28 |
| PP2 | Horizonte de 3 ou 5 anos? Valor residual? | Entre 5 e 10 anos | 10 anos (120 meses); anos 6–10 sem zonas novas; valor residual opcional | Q7, Q29 |
| PP3 | Taxa de atualização (usámos 12 %) | ≈ 9 %; testar com 9 % | 9 % | Q12 |
| PP4 | Três fundadores sem salário até ao ponto crítico? | Pôr salário, presumindo que não têm outro rendimento | Os 5 fundadores com salário desde o mês 1 (Plano Organizacional §5.4); substitui P1 e P2 de 18/11 | Q24 |
| PP5 | Desconto de 0,75 à intenção declarada | Testar com 1 para ver o impacto (ligado à PP1) | 1 na referência e no otimista; 0,75 no pessimista | — |
| PP6 | Desenvolvimento da app: gasto ou ativo intangível? | Ativo intangível | Custo do CTO nos meses 1–4 capitalizado (≈ 9 315 €), amortizado em 36 meses | Q8 |
| PP7 | Entregar o Excel em vez do modelo do IAPMEI? | Pode entregar-se em Excel | Entrega-se o Excel | Q14 |
| PP8 | Apoios para a 2.ª tranche (310 k€)? | Verificar se há apoios e, havendo, presumir que se conseguem | Empreende XXI, +Emprego e Linha Impulsar Portugal (150 k€); 2.ª tranche de 455 k€ | Q6, Q25, Q27 |
| PP9 | Relatório final e apresentação do Milestone 02 | Entregar tudo (P1 + P2) e verificar a ligação entre as duas (ex.: inquérito, preços); na apresentação, relembrar a P1 e explicar a P2 | Relatório com P1 + P2 e a ligação; apresentação centrada na P2 | — |
