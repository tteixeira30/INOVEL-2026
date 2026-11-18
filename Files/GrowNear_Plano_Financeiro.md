# GrowNear — Plano Financeiro

> Base: slides "The Financial Plan" (`Inovel.Context/INOVEL_P8_Financial_Plan.pptx`; capítulo VI nos slides, VII na numeração do Milestone 02). Calendário da UC: plano financeiro nas semanas 10 e 11; apresentação final a 19/12.
> **Modelo:** `GrowNear_Plano_Financeiro.xlsx`, com fórmulas vivas. Folhas: Leia_me, Resumo, Pressupostos, Mensal (60 meses) e Anual (VI.1 a VI.6). Mudar um pressuposto recalcula tudo. `GrowNear_Plano_Financeiro.js` calcula só os valores que vêm do inquérito.
> Parte do Plano de Marketing (`GrowNear_Plano_Marketing.md`, previsão e orçamento), do Plano de Produção (`GrowNear_Plano_Producao.md`) e do Plano Organizacional (`GrowNear_Plano_Organizacional.md`, incluindo as propostas de 18/11 na §13).
> **Estado:** 2.ª versão (18/11). A 1.ª versão (Bruno, 18/11) fixou a estrutura VI.1–VI.6 e o compêndio Q1–Q23. Esta versão completa os mapas com as decisões tomadas a 18/11 (§1). Os números são do **cenário de referência**, salvo indicação. Valores sem origem no repositório estão marcados como **pressuposto** no Excel, cada um com a fonte.

## 0. Resposta às três perguntas do capítulo (slide 2)

| Pergunta | Resposta (cenário de referência, equipa mínima) |
|---|---|
| **O projeto é viável?** | **Não em 5 anos; é viável sob condições.** O resultado líquido melhora todos os anos (−48 k€ no ano 1 → −32 k€ no ano 5), mas não chega a zero: no ano 5 as reservas previstas (14 603 por mês) cobrem 79 % do ponto crítico (18 602). Ao ritmo dos anos 3–5, o equilíbrio chegaria no ano 6, fora do horizonte. Várias alavancas isoladas tornam o ano 5 positivo (§9) |
| **De quanto financiamento precisa?** | **≈ 300 k€** de défice acumulado máximo até ao mês 60, incluindo a caixa mínima de segurança (≈ 217 k€ até ao mês 36). Com o serviço do empréstimo, o plano prevê **390 k€ em duas tranches**: 80 k€ no arranque (5 k€ de capital social + 75 k€ de empréstimo) e 310 k€ no mês 15, só se o marco 2 for cumprido (§6) |
| **Que retorno gera?** | **Negativo no horizonte:** VAL a 5 anos de −210 k€ (taxa de 12 %), VAL a 3 anos de −158 k€; sem TIR (os fluxos nunca passam a positivos); *payback* acima de 5 anos. O retorno depende dos anos 6 em diante (valor residual; Q7) |

**Leitura crítica.**
- **O plano só fecha com a equipa mínima.** Com a D3/D10 como decidida a 12/11 (5 fundadores pagos desde o lançamento e 4 contratações), o mesmo cenário perde **965 k€** em 5 anos e precisa de ≈ 940 k€.
- **Mesmo com a equipa mínima, os outros 3 fundadores trabalham 5 anos sem salário** (a regra de entrada nunca é cumprida no cenário de referência). Isto só é realista se tiverem outro rendimento, o que limita a dedicação (Q24).
- **O problema é estrutural, não de previsão:**
  - cada reserva deixa ≈ 0,62 € de margem de contribuição (§4);
  - a previsão mínima do Bruno (sem descontos), com os custos completos e a equipa da D3, dá o mesmo défice (−968 k€).

## 1. Decisões e pressupostos

### 1.1 Decisões de 18/11 (reunião de trabalho; as marcadas "proposta" vão aos sócios)

| Tema | Decisão | Onde |
|---|---|---|
| Lançamento | App aos compradores no **mês 7** (julho do ano 1). Meses 1–4: MVP da app; meses 5–6: captação de produtores e pontos de recolha | Plano de Produção §9 |
| Salários | **Proposta:** só o CTO e o responsável de Operações recebem salário, desde o lançamento. CEO, marketing e finanças entram quando a margem dos últimos 12 meses cobrir os custos fixos mais o seu custo; as contratações da D10 seguem a mesma regra, depois. O assistente de apoio entra pelo volume (Q18) | Plano Organizacional §13 |
| Financiamento | **Proposta:** por fases, com marcos de validação. 1.ª tranche de 80 k€ (capital + empréstimo de 75 k€, em vez de 125 k€); 2.ª tranche de 310 k€ no mês 15, se o marco 2 for cumprido | §6 |
| Previsão de vendas | Três cenários, com desconto da intenção declarada (0,75 na quota e 0,75 na frequência), sazonalidade e teto pela oferta de produtores | Plano de Marketing §6.3 |
| Zona de lançamento | **Proposta:** Águas Santas (Maia), ≈ 10 650 agregados (INE, Censos 2021) | Plano de Marketing, M1 |
| IVA (Q4) | Os 0,50 € + 5 % **incluem IVA**: o comprador paga o valor testado; a GrowNear recebe 1,20 € por reserva | — |
| Pagamento do produto na app | Mantém-se, apesar do custo (Stripe Connect), por ser a alavanca da confiança | §4 |
| Q8, Q10, Q11, Q15, Q16, Q19 | Aceites as recomendações do Bruno (ver §10) | §10 |
| Horizonte (Q7) | Em aberto: perguntar ao professor. O modelo mostra 3 e 5 anos | §8 |

### 1.2 Pressupostos-chave

Todos os pressupostos, com fonte, estão na folha **Pressupostos** do Excel. Os que mais pesam:

| Pressuposto | Valor | Origem | Estado |
|---|---|---|---|
| Receita | Só a taxa de serviço (e o GrowNear Pro a partir do mês 25, com 5 % dos produtores a 5 €/mês) | D16; BMC | Decidido; Pro é pressuposto |
| Taxa por reserva | 1,47 € com IVA → **1,20 € sem IVA** (encomenda média de 19,40 €) | D16; Análise §11.1; Q4 | Decidido |
| CMVMC | 0 € | Plano de Produção §0 | Decorre do modelo |
| Quota de compradores na maturidade | 9,2 % / **15,9 %** / 45,1 % (pessimista / referência / otimista) × conversão de 0,75 | Análise §11.1; Jamieson e Bass (1989) | Pressuposto |
| Reservas por comprador e por mês | 3,44 declaradas × 0,75 | P21 | Pressuposto |
| Sazonalidade | Pico de junho a setembro; 0,4 do pico no inverno; média de 0,725 | — | Pressuposto |
| Oferta | 2 % dos agregados como produtores; 15 reservas por produtor no pico | Q17 | Pressuposto (validar com entrevistas) |
| Zonas | 1 / 3 / 5 / 7 / 9 (zonas novas abrem em abril) | Plano de Produção §3; anos 4–5 extrapolados | Pressuposto |
| Comissões de pagamento | Stripe: 1,5 % + 0,25 € por cobrança. Stripe Connect: 2 € por produtor com transferências no mês + 0,25 % + 0,10 € por transferência | Stripe, preços para Portugal (confirmar) | Fonte pública |
| Custo de aquisição | 6 € por comprador novo; 1 500 € por zona lançada | Plano de Marketing §6.4 | Pressuposto |
| Salários | Bruto do Plano Organizacional §5.4 × 14 + TSU 23,75 %; benefícios de 120 €/pessoa/mês e formação de 500 €/pessoa/ano a partir do ano 2 | Plano Organizacional §5.4, §9 | Decidido (valores dos benefícios: pressuposto) |
| Empréstimo | 75 000 € no mês 1, 6 % ao ano, 12 meses de carência, 48 meses de reembolso | BdP: 4,08 % nos novos empréstimos a empresas (junho de 2026) + risco | Proposta / pressuposto |
| IRC | 15 % nos primeiros 50 000 € (PME), 17 % no resto; derrama de 1,5 %; reporte de prejuízos até 65 % do lucro | OE 2026; Lei 64/2025 | Lei (confirmar) |
| Taxa de atualização | 12 % | — | Pressuposto (Q12) |

## 2. VI.1 Plano de investimento

O slide 4 pede um inventário exaustivo. Com a decisão sobre a Q8 (o desenvolvimento da app é gasto, porque está nos salários; os fundadores usam os seus computadores), o investimento é pequeno:

| Ativo | Valor | Quando | Vida útil |
|---|---|---|---|
| Equipamento de teste (1 telemóvel iOS + 1 Android) | 800 € | Mês 1 | 3 anos |
| Computador por colaborador contratado | 900 € cada | Na entrada (no cenário de referência, só o assistente, no mês 27) | 3 anos |
| **Total nos 5 anos** | **1 700 €** | | |

Os gastos de arranque também se inventariam, mas vão à DR como FSE: constituição (360 €), registo da marca (200 €), jurídico (1 500 €), contas nas lojas de apps (115 €) e material dos pontos de recolha (450 €). Somam ≈ 2 600 €.

## 3. VI.2 Demonstração de resultados previsional

Modelo do slide 6 do P8 (cenário de referência, equipa mínima):

| | Ano 1 (2027) | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---|---|---|---|---|
| (+) Vendas e serviços prestados | 1 811 € | 22 327 € | 70 705 € | 136 281 € | 201 783 € |
| (−) CMVMC | 0 € | 0 € | 0 € | 0 € | 0 € |
| (−) FSE | 21 060 € | 47 910 € | 85 040 € | 123 526 € | 160 315 € |
| (−) Gastos com pessoal | 24 451 € | 52 782 € | 68 953 € | 72 187 € | 72 187 € |
| **(=) EBITDA** | **−43 700 €** | **−78 365 €** | **−83 288 €** | **−59 432 €** | **−30 720 €** |
| (−) Amortizações | 267 € | 267 € | 517 € | 300 € | 300 € |
| (−) Juros | 4 125 € | 4 070 € | 2 953 € | 1 828 € | 703 € |
| (−) IRC | 0 € | 0 € | 0 € | 0 € | 0 € |
| **(=) Resultado líquido** | **−48 092 €** | **−82 702 €** | **−86 758 €** | **−61 560 €** | **−31 723 €** |
| Acumulado | −48 092 € | −130 794 € | −217 552 € | −279 112 € | **−310 834 €** |

**FSE por natureza** (ano 1 → ano 5):
- **Variáveis por reserva:**
  - comissões Stripe: 508 € → 55 781 €;
  - Stripe Connect: 396 € → 28 411 €;
  - reembolsos: 23 € → 2 568 €;
  - nuvem: 16 € → 1 752 €.
- **Crescimento:**
  - aquisição de compradores: 1 639 € → 31 479 €;
  - captação de produtores: 473 € → 6 392 €;
  - lançamento de zonas: 1 500 € → 3 000 €.
- **Fixos:**
  - deslocações: 1 200 € → 15 900 €;
  - *coworking* (5 fundadores, 100 €/mês): 6 000 €/ano;
  - contabilista: 2 400 €/ano;
  - nuvem: 1 800 € → 2 400 €;
  - software: 1 200 €/ano;
  - seguros, HSST, lojas e arranque.

**Gastos com pessoal:**
- **Anos 1–2:** CTO + responsável de Operações (2 800 €/mês brutos), desde julho do ano 1.
- **A partir do mês 27:** entra o assistente de apoio e comunidade, porque os produtores captados passam de 500.
- **Fases 2 e 3** (CEO, marketing, finanças e as contratações da D10): não chegam a entrar nos 60 meses.

## 4. Margem por reserva e ponto crítico

| € por reserva (encomenda de 19,40 €) | Valor |
|---|---|
| Taxa paga pelo comprador | 1,47 |
| Receita sem IVA, com 5 % de cancelamentos com devolução | 1,14 |
| Comissões Stripe (taxa + produto, quando pago na app) | −0,32 |
| Stripe Connect | −0,16 |
| Reembolsos e nuvem | −0,03 |
| **Margem de contribuição** | **0,54 (ano 1) → 0,65 (ano 5)** |

O Stripe Connect pesa mais no arranque, porque cada produtor faz poucas reservas por mês. **Pagar o produto na app custa à GrowNear ≈ 1,3 € a 1,5 € por reserva paga na app** (Connect + 1,5 % sobre o produto; anos 5 e 3), mais do que a taxa rende. Mantém-se por decisão de 18/11: é a base do reembolso garantido, que responde à barreira principal (a confiança).

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---|---|---|---|---|
| Ponto crítico (reservas por mês) | 6 868 | 13 154 | 16 370 | 17 647 | 18 602 |
| Reservas por mês previstas (com a app lançada) | 266 | 1 639 | 5 093 | 9 851 | 14 603 |
| Previsto ÷ ponto crítico | 4 % | 12 % | 31 % | 56 % | 79 % |

## 5. VI.3 Balanço previsional (fim do ano)

| | Ano 1 | Ano 2 | Ano 3 | Ano 4 | Ano 5 |
|---|---|---|---|---|---|
| Ativo fixo tangível | 533 € | 267 € | 650 € | 350 € | 50 € |
| Estado: IVA a recuperar | 2 925 € | 1 208 € | 0 € | 0 € | 0 € |
| Caixa e depósitos | 29 779 € | 241 874 € | 141 412 € | 64 582 € | 17 526 € |
| **Total do ativo** | **33 238 €** | **243 349 €** | **142 062 €** | **64 932 €** | **17 576 €** |
| Capital social | 5 000 € | 5 000 € | 5 000 € | 5 000 € | 5 000 € |
| 2.ª tranche (capital / prestações suplementares) | 0 € | 310 000 € | 310 000 € | 310 000 € | 310 000 € |
| Resultados transitados + resultado do ano | −48 092 € | −130 794 € | −217 552 € | −279 112 € | −310 834 € |
| **Total do capital próprio** | **−43 092 €** | **184 206 €** | **97 448 €** | **35 888 €** | **4 166 €** |
| Financiamentos obtidos | 75 000 € | 57 812 € | 39 062 € | 20 312 € | 1 562 € |
| Estado (IVA e TSU a pagar) | 1 330 € | 1 330 € | 5 551 € | 8 731 € | 11 848 € |
| **Total do passivo** | **76 330 €** | **59 142 €** | **44 614 €** | **29 044 €** | **13 411 €** |

O balanço fecha nos 5 anos (verificação no Excel).

**Atenção:** no fim do ano 1, o capital próprio é negativo. Com 5 000 € de capital social, a Lda. perde metade do capital logo nos primeiros meses, situação regulada pelo art. 35.º do Código das Sociedades Comerciais (Q6). A 2.ª tranche como capital ou prestações suplementares repõe-no no ano 2. Alternativa: capital social maior no arranque.

**Valores dos produtos pagos na app:** são dos produtores. Passam pela Stripe e não são ativo nem receita da GrowNear (tratamento de agente; decisão sobre a Q11: transferência depois da recolha confirmada).

## 6. VI.4 Plano de financiamento (por fases)

| Fonte | Valor | Quando | Condição |
|---|---|---|---|
| Capital social | 5 000 € (1 000 € por sócio) | Mês 1 | — |
| Empréstimo bancário (1.ª tranche) | 75 000 € | Mês 1 | Carência de 12 meses; reembolso em 48 meses; provavelmente com aval dos sócios ou garantia mútua |
| 2.ª tranche (capital próprio, investidor ou apoios) | 310 000 € | Mês 15 (março do ano 2) | Só se o marco 2 for cumprido |
| **Total** | **390 000 €** | | |

**Marcos de validação** (folha Resumo; mínimo = 70 % do previsto):

| Marco | Mês | Indicador | Previsto | Mínimo | Se falhar |
|---|---|---|---|---|---|
| 1 | 9 (setembro do ano 1) | Reservas no mês, zona 1 | 328 | 229 | Rever produto e captação antes do inverno |
| 2 | 15 (março do ano 2) | Compradores ativos na zona 1 | 381 | 267 | Não há 2.ª tranche nem zonas novas: rever o modelo ou parar |
| 2 | 15 | Produtores captados na zona 1 | 178 | 124 | Idem |
| 3 | 27 (março do ano 3) | Reservas no mês | 2 950 | 2 065 | Adiar as zonas do ano 3 |

Se o marco 2 falhar, a perda máxima fica limitada à 1.ª tranche (≈ 80 k€) e ao trabalho dos fundadores.

## 7. VI.5 Orçamento de tesouraria

Mensal, na folha **Mensal** (secção "Orçamento de tesouraria"). Pontos principais:

| Fluxo | Momento no modelo |
|---|---|
| Taxas | Recebidas no mês da reserva, com IVA |
| Salários | Pagos no mês; os subsídios em junho e dezembro (meses com o dobro do pagamento) |
| TSU | Paga no mês seguinte |
| IVA | Regime trimestral: pago em fevereiro, maio, agosto e novembro. Crédito nos anos 1–2; pagamentos a partir do ano 3 (7 668 €; 39 857 € no ano 5) |
| IRC | Maio do ano seguinte (não há IRC nos 5 anos: prejuízos) |
| Empréstimo | Juros mensais desde o mês 2; capital a partir do mês 13 (1 563 €/mês) |

**Caixa:**

| Mês | 1 | 6 | 12 | 14 | 15 | 24 | 36 | 48 | 60 |
|---|---|---|---|---|---|---|---|---|---|
| Caixa (fim do mês) | 77 457 € | 67 699 € | 29 779 € | **15 277 €** | 317 497 € | 241 874 € | 141 412 € | 64 582 € | 17 526 € |

O ponto mais apertado é o **mês 14**, antes da 2.ª tranche. A caixa nunca fica abaixo do mínimo de segurança (15 000 €).

## 8. VI.6 Análise de rentabilidade

| Indicador | Valor | Nota |
|---|---|---|
| *Cash flow* antes de financiamento | −46 096 / −76 648 / −78 759 / −56 252 / −27 603 € (anos 1–5) | Acumulado: −285 357 € |
| VAL a 3 anos (D15) | −158 319 € | Taxa de atualização de 12 % (Q12) |
| VAL a 5 anos | −209 730 € | Sem valor residual (Q7) |
| TIR | Não existe | Os fluxos são todos negativos |
| *Payback* | Mais de 5 anos | |
| Fundo de maneio de exploração | −11 848 € no ano 5 | Negativo: recebe na reserva e paga IVA e TSU mais tarde, por isso o fundo de maneio financia a empresa |

O horizonte (Q7) não muda o sinal: o VAL é negativo a 3 e a 5 anos. Só um valor residual (anos 6+) pode dar retorno positivo, e só faz sentido depois de o ano 5 ter fluxo positivo.

## 9. Cenários e sensibilidade (equipa mínima e financiamento de 390 k€, salvo indicação)

| Variante | Resultado do ano 5 | Acumulado em 5 anos | Necessidade até ao mês 60 | VAL a 5 anos |
|---|---|---|---|---|
| **Referência** | **−31 723 €** | **−310 834 €** | **300 357 €** | **−209 730 €** |
| Pessimista (quota de 9,2 %) | −67 084 € | −368 856 € | 362 928 € (faltam 60 k€) | −247 420 € |
| Otimista (quota de 45,1 %; limitado pela oferta a partir do ano 3) | +1 296 € | −242 761 € | 252 018 € | −163 003 € |
| Encomenda média de 10 € (em vez de 19,40 €) | −88 305 € | −432 183 € | 425 073 € | −288 003 € |
| Custo de aquisição de 12 € (em vez de 6 €) | −63 202 € | −398 237 € | 387 759 € | −266 500 € |
| Sem descontos à intenção declarada | −17 293 € | −250 818 € | 246 717 € | −168 175 € |
| Mais zonas (4 / 8 / 12 / 16) | −4 811 € | −304 695 € | 315 826 € | −205 437 € |
| Stripe Connect sem custo por conta (contas Standard) | −7 061 € | −253 912 € | 258 561 € | −173 726 € |
| Sem pagamento do produto na app | +6 867 € | −223 068 € | 237 364 € | −154 077 € |
| Taxa de 0,50 € + 5 % mais IVA (comprador paga ≈ 1,81 €) | +12 261 € | −215 489 € | 233 540 € | −147 830 € |
| **D3/D10 de 12/11** (5 fundadores pagos + 4 contratações; empréstimo de 125 k€) | −186 448 € | −965 091 € | 942 097 € | −651 039 € |

**Leitura:**
- **As alavancas mais fortes estão na margem por reserva**, não no volume: IVA fora da taxa, pagamento do produto fora da app, custo do Connect. Mas as duas primeiras contrariam o que o inquérito validou (o valor testado e a confiança).
- **A previsão de vendas importa menos do que parece:** sem os descontos, o ano 5 melhora só 14 k€, porque a oferta passa a limitar.
- **O valor da encomenda média é o maior risco** (SWOT: "Valor por venda baixo (2 a 5 €)"; Plano de Marketing, M2).

## 10. Questões para o grupo (compêndio)

Estado a 18/11. As questões decididas ficam com a decisão; as abertas mantêm a recomendação.

**Decididas a 18/11:**

| # | Questão | Decisão |
|---|---|---|
| Q1 | Previsão mínima ou plano de marketing primeiro? | Previsão com 3 cenários e ajustes, feita no rascunho do Plano de Marketing (`GrowNear_Plano_Marketing.md`) |
| Q2 | Zona de lançamento | Proposta: Águas Santas (Maia), ≈ 10 650 agregados (confirmar no INE; Plano de Marketing, M1) |
| Q3 | Expansão e rampa | Zonas 1/3/5/7/9; adoção linear até à maturidade em 30 meses (≈ 25 % / 60 % / 90 % nos anos 1–3 da zona). Sensibilidade na §9 |
| Q4 | A taxa inclui IVA? | Sim: o comprador paga 1,47 €; a GrowNear recebe 1,20 € |
| Q5 | Como cobrir o défice? | Proposta: equipa mínima até ao ponto crítico + financiamento por fases com marcos (§6; Plano Organizacional §13) |
| Q8 | Investimento | O desenvolvimento da app é gasto; só se listam os ativos comprados (§2) |
| Q10 | Custo dos pagamentos | Fica com a GrowNear. Tarifa Stripe confirmada (1,5 % + 0,25 €); falta confirmar o MB WAY. O Connect acrescenta ≈ 0,16 € por reserva |
| Q11 | Tesouraria | Perfil sazonal no modelo; transferência ao produtor depois da recolha confirmada, quinzenal |
| Q14 | Ferramenta | Modelo Excel próprio (`GrowNear_Plano_Financeiro.xlsx`), com a estrutura do P8 (DR a 5 anos). A ferramenta do IAPMEI pode usar-se para os mapas finais, a partir dele |
| Q15 | Taxa em cancelamentos | Devolvida se o produtor cancelar (5 % das reservas no modelo); retida se o comprador não recolher |
| Q16 | Pagamento num ponto de recolha | Na app ou por MB WAY direto ao produtor; o parceiro não recebe dinheiro |
| Q18 | Critério para o assistente de apoio | Mais de 20 contactos humanos por dia útil, ou mais de 500 produtores captados (entra no mês 27 no cenário de referência) |
| Q19 | Custo do reembolso | A GrowNear reembolsa e desconta ao produtor quando a falha é dele; suporta 25 % dos casos (pressuposto) |
| Q21 | Numeração dos capítulos | Numeração do Milestone 02 no plano de negócio (Financeiro = VII) |
| Q22 | Referências à SWOT | Sempre pelo texto do item |

**Em aberto:**

**Q6. Condições do empréstimo e capital social.**
- *Contexto:* o modelo usa 75 000 € a 6 %, com 12 meses de carência e 48 de reembolso, e 5 000 € de capital social. Com este capital, o capital próprio fica negativo no ano 1 (§5).
- *Recomendação:* pedir uma simulação a um banco (incluindo linhas com garantia mútua). Ponderar um capital social de 10 000–20 000 € e reduzir o empréstimo no mesmo valor.

**Q7. Horizonte de 3 ou 5 anos.**
- *Contexto:* o modelo mostra os dois e o VAL é negativo em ambos.
- *Próximo passo:* perguntar ao professor. Se for 5 anos, decidir se entra valor residual (`Incluir_VR` nos Pressupostos).

**Q9. FSE.**
- *Contexto:* estão todos estimados no Excel, mas a maioria é pressuposto.
- *Recomendação:* cada área confirma os seus (orçamento pedido ou preço público): CTO (nuvem, lojas), Marketing (custo de aquisição, campanhas), Finanças (contabilista, seguros, HSST, jurídico), Operações (deslocações, pontos de recolha, embaixadores).

**Q12. Taxa de atualização.**
- *Contexto:* usou-se 12 %.
- *Próximo passo:* confirmar com o professor.

**Q13. IRC.**
- *Contexto:* sem efeito nos 5 anos (só há prejuízos).
- *Próximo passo:* confirmar as taxas e a derrama da Maia com o contabilista.

**Q17. Reservas por produtor e produtores por zona.**
- *Contexto:* 15 reservas por produtor no pico e 2 % dos agregados como produtores. Pesam no cenário otimista, que fica limitado pela oferta.
- *Próximo passo:* entrevistas a produtores (Plano de Marketing, M5).

**Q20. Metas dos KPI.**
- *Contexto:* as metas de volume vêm agora do modelo (Plano de Produção §8).
- *Próximo passo:* aprovar na reunião de sócios.

**Q23. Pagamentos por conta dos produtores (Stripe Connect, DAC7).**
- *Contexto:* o Connect custa ≈ 2 € por produtor com transferências no mês.
- *Opções:*
  - contas "Express" (a GrowNear paga, o produtor tem menos burocracia: é o que está no modelo);
  - contas "Standard" (sem custo por conta para a GrowNear, mas o produtor paga a comissão sobre o produto e trata da conta com a Stripe).
- *Próximo passo:* confirmar a tarifa e a solução antes do lançamento (CTO + Finanças).

**Q24. Três fundadores sem salário durante o horizonte (novo).**
- *Contexto:* com a regra proposta, CEO, marketing e finanças não chegam a ter salário em 5 anos no cenário de referência. No otimista também não, porque a margem nunca cobre os custos fixos mais 73,6 k€ por ano.
- *Opções:*
  - (a) aceitar: trabalham a tempo parcial e têm outro rendimento;
  - (b) pagar-lhes a tempo parcial (por exemplo, meio salário) a partir de um marco e financiar com a 2.ª tranche;
  - (c) reduzir o número de fundadores a tempo inteiro e assumi-lo no Plano Organizacional.
- *Recomendação:* (a) até ao marco 3, com revisão nessa altura. Escrever no Plano Organizacional o que cada fundador faz a tempo parcial.

**Q25. Fonte da 2.ª tranche (310 k€) (novo).**
- *Contexto:* 310 k€ no mês 15 é demasiado para os sócios e demasiado arriscado para um banco (ainda com prejuízo).
- *Opções:* investidor (*business angel* ou capital de risco), que exige 3/4 dos votos (Plano Organizacional §6) e dilui os 20 % de cada sócio; apoios públicos ao empreendedorismo; parte em empréstimo com garantia mútua.
- *Recomendação:* apresentar a 2.ª tranche como **ronda de investimento ligada ao marco 2** e pesquisar apoios públicos aplicáveis antes da versão final.

**Q26. Valor da encomenda média (novo; Plano de Marketing, M2).**
- *Contexto:* com 10 € em vez de 19,40 €, o défice a 5 anos sobe de 311 k€ para 432 k€.
- *Recomendação:* manter 19,40 € (evidência do inquérito) e mostrar a sensibilidade. Medir no marco 1.
