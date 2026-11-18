# GrowNear — Plano Financeiro (estrutura e pressupostos)

> Base: slides "The Financial Plan" (Capítulo VI; `Inovel.Context/INOVEL_P8_Financial_Plan.pptx`; notas do orador vazias). Calendário da UC (`Inovel.Context/Entrepreneurship__Innovation_-_INOVEL_2025-2026.pdf`): plano financeiro nas semanas 10 e 11, plano de negócio nas semanas 13–14, apresentação final a 19/12.
> Parte do Plano Organizacional (`GrowNear_Plano_Organizacional.md`, §5.4, §11, §12) e do Plano de Produção (`GrowNear_Plano_Producao.md`, §3 e §7). Números calculados por `GrowNear_Plano_Financeiro.js` (`node GrowNear_Plano_Financeiro.js`).
> **Estado:** primeira versão. Só está calculado o que tem base no repositório; o resto fica com a estrutura e as questões para o grupo (§8). Valores sem origem no repositório estão marcados **[Pressuposto — validar com o grupo]**.

O capítulo responde a três perguntas (slide 2): o projeto é viável? De quanto financiamento precisa? Que retorno gera? Constrói-se em seis blocos (slide 3), começando pelos pressupostos.

## 1. Pressupostos-chave

| Pressuposto | Valor | Origem | Estado |
|---|---|---|---|
| Receita | Só a taxa de serviço, paga pelo comprador na app, no momento da reserva. Vender é grátis | D16; BMC, fontes de receita | Decidido |
| Taxa por reserva | 0,50 € + 5 % = **1,47 €** numa encomenda média de 19,40 € (IC: 1,38 € a 1,56 €) | D16; Análise §11.1 | Decidido / calculado |
| IVA na taxa | Não definido se os 0,50 € + 5 % incluem IVA (23 %) | — | **Em aberto (Q4)** |
| Valor do produto | Não é receita da GrowNear (é do produtor). Quando pago na app, a GrowNear recebe por conta do produtor e transfere | BMC; decisão de 05/11 | Decidido; tratamento contabilístico na §4 |
| CMVMC | **0 €**: a GrowNear não compra nem revende produtos | Plano de Produção §0 | Decorre do modelo |
| Programa de vendas | Cenário de referência: 16 416 / 72 230 / 170 726 reservas nos anos 1–3 | Plano de Produção §3 | **Pressuposto (Q1–Q3)** |
| Custo de pagamento | 0,32 € por reserva em média (1,5 % + 0,25 € por cobrança; 15,9 % pagam o produto na app) | Plano de Produção §7 | **Pressuposto (Q10)** |
| Gastos com pessoal | 122 141 € / 163 721 € / 183 645 € (bruto × 14 + TSU 23,75 %) | Plano Organizacional §5.4 | Decidido |
| Parte variável do CEO | Até 3 400 € (≈ 4 208 € com TSU), só se as metas forem cumpridas; não financiada pelo empréstimo | Plano Organizacional §5.4 (proposta "a confirmar") | Proposta |
| Empréstimo | ≈ **125 000 €**, para os salários do ano 1 | D3; Plano Organizacional §12 | Decidido; taxa e prazo em aberto (Q6) |
| Constituição da Lda. | ≈ 360 € + capital social (mínimo 1 € por quota) | Plano Organizacional §3 | Decidido; capital em aberto (Q6) |
| Horizonte | 3 anos | D15 | Decidido; o modelo dos slides tem 5 anos (Q7) |

## 2. VI.1 Plano de investimento

O slide 4 pede que se inventarie e valorize **todos** os ativos da fase inicial, porque o financiamento parte deste total.

| Ativo | Valor | Origem | Estado |
|---|---|---|---|
| Constituição da sociedade | ≈ 360 € | Plano Organizacional §3 | Base |
| Desenvolvimento da app (V1.0) | Feito pelos fundadores (D6): o custo está nos salários. Pode ser registado como ativo intangível (desenvolvimento) e amortizado, ou tratado como gasto do ano | BMC, recursos financeiros: "capital inicial para lançar V1.0" | **Em aberto (Q8)** |
| Contas de programador nas lojas de apps | Apple: 99 USD por ano; Google Play: 25 USD uma vez | **[Pressuposto — validar com o grupo]** Preços públicos das lojas, a confirmar | Pressuposto |
| Equipamento informático | Computadores próprios dos fundadores ou comprados pela empresa | — | **Em aberto (Q8)** |
| Marca GrowNear (registo) | A estimar | BMC, recursos intelectuais | **Em aberto (Q8)** |
| Fundo de maneio inicial | Ver VI.6. Os salários do ano 1 já estão cobertos pelo empréstimo | — | Depende de Q5 |

## 3. VI.2 Demonstração de resultados previsional

Linhas do modelo do slide 6, com o conteúdo na GrowNear:

| Linha | Conteúdo na GrowNear | Estado |
|---|---|---|
| + Vendas e serviços prestados | Taxas de serviço sem IVA. Mais tarde: destaques pagos no mapa, GrowNear Pro (ano 3), campanhas financiadas por autarquias (BMC, fontes de receita) | Taxas calculadas (cenário); outras fontes sem valor |
| − CMVMC | 0 € | Decorre do modelo |
| − FSE | Comissões de pagamento (variável); nuvem e mapas; contas nas lojas; *coworking* (100–200 € por posto por mês, nos dias presenciais); contabilista (avença); marketing e aquisição; reembolsos; incentivos aos primeiros produtores; comissões dos embaixadores (ano 2+); seguros; HSST | Só as comissões de pagamento têm valor (pressuposto); o resto em aberto (Q9) |
| − Gastos com pessoal | Salários + TSU (§1); parte variável do CEO; seguro de acidentes de trabalho; formação (≈ 500 € por pessoa a partir do ano 2); benefícios (ano 2+) | Salários: base. Restantes em aberto (Q9) |
| + Outros rendimentos | Apoios à contratação (ex.: estágios IEFP, referidos no Plano Organizacional) | Em aberto |
| = EBITDA | | |
| − Depreciações e amortizações | Dependem do VI.1 | Em aberto (Q8) |
| − Juros | Dependem da taxa e do prazo do empréstimo | Em aberto (Q6) |
| − IRC | Taxa a aplicar | Em aberto (Q13) |
| = Resultado líquido | | |

**DR parcial, cenário de referência** (só as linhas com base; antes dos FSE por estimar, depreciações, juros e IRC):

| Ano | Prestações de serviços (taxa sem IVA) | Se a taxa incluir IVA | Comissões de pagamento | Gastos com pessoal | Resultado parcial | Se a taxa incluir IVA |
|---|---|---|---|---|---|---|
| 1 | 24 134 € | 19 621 € | 5 227 € | 122 141 € | **−103 235 €** | −107 747 € |
| 2 | 106 188 € | 86 332 € | 22 999 € | 163 721 € | **−80 532 €** | −100 389 € |
| 3 | 250 989 € | 204 056 € | 54 361 € | 183 645 € | **+12 983 €** | −33 950 € |
| Acumulado | | | | | **−170 784 €** | −242 086 € |

**Ponto crítico.** Para a margem por reserva (1,15 € sem IVA na taxa) cobrir só os gastos com pessoal são precisas cerca de **8 838 reservas por mês no ano 1**, 11 846 no ano 2 e 13 288 no ano 3. Com a frequência dos entusiastas (3,44 reservas por mês), isso são cerca de 2 573, 3 448 e 3 868 compradores ativos. Se a taxa incluir IVA, os valores sobem cerca de 31 % (11 608 reservas por mês no ano 1).

## 4. VI.3 Balanço previsional

Ativo = capital próprio + passivo, no fim de cada ano (slide 7). Pontos próprios da GrowNear:

| Rubrica | GrowNear | Estado |
|---|---|---|
| Ativo não corrente | Investimento do VI.1 menos amortizações | Depende de Q8 |
| Caixa e depósitos | Do orçamento de tesouraria (VI.5) | Depende de VI.5 |
| Outras contas a pagar (passivo) | Valores de produtos pagos na app ainda não transferidos aos produtores: o dinheiro é dos produtores, não da GrowNear | Depende do prazo de transferência (Q11) |
| Estado (passivo) | IVA da taxa, TSU e retenções do mês | Depende de Q4 |
| Financiamentos obtidos | Empréstimo de ≈ 125 000 € menos amortizações | Depende de Q6 |
| Capital próprio | Capital social + resultados transitados (negativos nos anos 1–2 no cenário de referência) | Depende de Q5–Q6 |

## 5. VI.4 Plano de financiamento

| Fonte (slide 7) | GrowNear | Valor |
|---|---|---|
| Capital próprio | Capital social dos 5 sócios (20 % cada) | Em aberto (Q6) |
| Dívida | Empréstimo para os salários do ano 1 | ≈ 125 000 € (D3) |
| Outros | Apoios públicos, investidores (a entrada de investidores exige 3/4 dos votos; Plano Organizacional §6) | Não decidido |

**O que os números já mostram:**
- O empréstimo (125 000 €) cobre os salários do ano 1 (122 141 €) e deixa **2 859 €** para todos os outros gastos do ano 1 (constituição, *coworking*, contabilista, nuvem, marketing, seguros).
- No cenário de referência, o resultado parcial acumulado dos anos 1–3 é de **−170 784 €** (−242 086 € se a taxa incluir IVA), antes dos FSE por estimar e dos juros. O financiamento decidido não chega para os anos 1–2. A decisão sobre como cobrir a diferença é do grupo (Q5).

## 6. VI.5 Orçamento de tesouraria

Testa o momento dos recebimentos e pagamentos, não só os totais (slide 8). Estrutura mensal; nada calculado ainda, para além do seguinte:

| Fluxo | Momento | Base |
|---|---|---|
| Salários dos fundadores | 8 724 €/mês com TSU no ano 1; o dobro nos meses dos subsídios de férias e de Natal (14 pagamentos) | Plano Organizacional §5.4 |
| Entrada do empréstimo | No arranque, ou em tranches | Q6 |
| Taxas de serviço | Recebidas na reserva; chegam à conta com o prazo de transferência do prestador de pagamentos | Q11 |
| Valores dos produtos pagos na app | Entram e saem (para o produtor): não são receita, mas passam pela tesouraria | Q11 |
| IVA, TSU, retenções | Mês seguinte (TSU, retenções); IVA conforme o regime | Q4 |
| Sazonalidade das reservas | Perfil mensal das reservas | Q11 |

## 7. VI.6 Análise de rentabilidade

| Indicador (slide 9) | O que é preciso | Estado |
|---|---|---|
| Fundo de maneio | Prazos de recebimento (imediato, na reserva) e de pagamento a fornecedores; valores dos produtores retidos | O modelo tende a ter fundo de maneio baixo: recebe na reserva e não tem stocks |
| *Cash flow* | DR completa + investimento + variação do fundo de maneio | Depende de VI.1–VI.5 |
| VAL | *Cash flows* + taxa de atualização + valor residual | Em aberto (Q12) |
| TIR | *Cash flows* | Em aberto |
| *Payback* | *Cash flows* acumulados | Em aberto |

O slide 10 recomenda a ferramenta Excel do IAPMEI (modelo a 5 anos) (Q14).

## 8. Questões para o grupo (compêndio)

Ordenadas por urgência: primeiro o que bloqueia o Plano Financeiro.

**Q1. Previsão de vendas: aceitar a previsão mínima ou fazer primeiro o plano de marketing?**
- *Contexto:* o Plano de Produção e o Plano Financeiro partem da previsão de vendas do plano de marketing (slides de produção 3 e 5; P8, slide 2). Não há plano de marketing no repositório. A previsão mínima (Plano de Produção §3) usa a quota prudente da análise (16 %), a frequência declarada pelos entusiastas (3,44 reservas/mês) e o gasto médio (19,40 €).
- *Opções:* (a) adotar a previsão mínima agora e substituí-la quando o plano de marketing existir; (b) fazer já o plano de marketing (segmento, preço, comunicação, previsão) e só depois o financeiro.
- *Recomendação:* (a). O calendário põe o financeiro nas semanas 10–11; a previsão mínima é rastreável e o script recalcula tudo quando os parâmetros mudarem. Atenção: a frequência é intenção declarada e sobrestima o uso (Análise §14).
- *Se ficar por decidir:* não há receita, nem DR, nem VAL.

**Q2. Zona de lançamento e número de agregados.**
- *Contexto:* "Ano 1: lançar a app e validar o modelo numa zona" (Plano Organizacional §1), mas a zona não está escolhida. A previsão usa 10 000 agregados **[Pressuposto]**. A receita é proporcional a este número.
- *Opções:* uma freguesia urbana ou suburbana da AM do Porto (onde está o grupo e 39 % da amostra; Análise §4), com os agregados dos Censos 2021 (INE) no raio de 10 minutos; ou manter 10 000 como hipótese de trabalho.
- *Recomendação:* escolher a zona já, com os dados do INE. Dá credibilidade ao plano e permite fixar os pontos de recolha.
- *Se ficar por decidir:* toda a receita assenta num número redondo.

**Q3. Ritmo de expansão e rampa de adoção.**
- *Contexto:* zonas 1 / 3 / 5 e rampa de 25 % / 60 % / 90 % da quota de maturidade são **[Pressupostos]**. O Plano Organizacional só diz "Ano 2: abrir novas zonas".
- *Opções:* mais zonas por ano (mais receita, mais esforço de captação e embaixadores); rampa mais lenta ou mais rápida.
- *Recomendação:* manter como base e mostrar uma análise de sensibilidade (é só mudar `ZONAS` e `RAMPA` no script). A abertura de zonas é decisão dos sócios (§6 do Plano Organizacional).
- *Se ficar por decidir:* o ano 3 (único com resultado parcial positivo) depende inteiramente destes valores.

**Q4. A taxa de 0,50 € + 5 % inclui IVA?**
- *Contexto:* a taxa é um serviço prestado a consumidores em Portugal, sujeito a IVA (taxa normal de 23 % no continente). D16 e o inquérito (P14) não dizem se o valor inclui IVA.
- *Opções:* (a) o valor inclui IVA: o comprador paga 1,47 € e a receita é 1,20 €; (b) acresce IVA: o comprador paga ≈ 1,81 €, mais do que o valor testado no inquérito.
- *Recomendação:* (a). O inquérito testou o valor final pago pelo comprador (1,00 € numa encomenda de 10 €), por isso só (a) mantém a aceitação de 64 %. Custo: a margem por reserva desce de 1,15 € para 0,88 €. Confirmar com o contabilista se há isenção aplicável no arranque.
- *Se ficar por decidir:* diferença de ≈ 71 000 € no resultado acumulado dos anos 1–3.

**Q5. Viabilidade: como cobrir o défice dos anos 1–2?**
- *Contexto:* resultado parcial acumulado de −170 784 € nos anos 1–3 (cenário de referência, antes de outros FSE e juros); o empréstimo de 125 000 € está afeto aos salários do ano 1 e sobram 2 859 € para o resto. O ponto crítico do ano 1 é de ≈ 8 838 reservas por mês contra 1 368 previstas. Não se alterou nenhuma decisão.
- *Opções:* (a) mais capital próprio ou um segundo financiamento; (b) acelerar a abertura de zonas; (c) dar valor às outras fontes de receita do BMC (destaques pagos, GrowNear Pro, campanhas com autarquias); (d) apoios à contratação (estágios IEFP); (e) rever os custos com pessoal ou a entrada a tempo inteiro dos 5 fundadores (implica rever D3 e D10).
- *Recomendação:* (c) + (a), quantificados no plano: o BMC já prevê as outras fontes e o plano tem de mostrar quanto financiamento falta (é uma das três perguntas do capítulo). Rever D3/D10 só se, mesmo assim, o VAL for muito negativo.
- *Se ficar por decidir:* o plano financeiro mostra um projeto sem financiamento suficiente.

**Q6. Condições do empréstimo e capital social.**
- *Contexto:* taxa de juro, prazo e carência estão "a fixar no plano financeiro" (Plano Organizacional §11); o capital social também (§3).
- *Opções:* empréstimo bancário com carência de capital no ano 1 (reembolso a partir do ano 2, como diz o §11); linhas com garantia mútua para PME; capital social simbólico ou mais elevado (reforça o capital próprio, ver Q5).
- *Recomendação:* pedir uma simulação a um banco (taxa e prazo reais) e usar 1 ano de carência. Até lá, usar a taxa como parâmetro com análise de sensibilidade, assinalada como pressuposto.
- *Se ficar por decidir:* não há juros na DR, nem serviço da dívida na tesouraria.

**Q7. Horizonte de 3 ou de 5 anos (conflito).**
- *Contexto:* D15 fixa 3 anos. O modelo de DR do P8 (slide 6) e a ferramenta do IAPMEI têm 5 anos. No cenário de referência, o ano 3 é o primeiro com resultado parcial positivo: com 3 anos, o VAL fica quase só com anos negativos.
- *Opções:* (a) manter 3 anos com valor residual no fim; (b) estender só o plano financeiro a 5 anos, mantendo o Plano Organizacional a 3; (c) perguntar ao professor.
- *Recomendação:* (c) e, se for aceite, (b). A decisão D15 não foi alterada.
- *Se ficar por decidir:* o VAL e o *payback* mudam de sinal conforme o horizonte.

**Q8. Investimento inicial (VI.1).**
- *Contexto:* o slide 4 pede um inventário exaustivo. Só há a constituição (≈ 360 €). Faltam o equipamento, o registo da marca e as contas nas lojas de apps, e falta decidir se o desenvolvimento interno da app é capitalizado.
- *Opções:* capitalizar o desenvolvimento (ativo intangível amortizado em 3 anos, se cumprir os critérios contabilísticos) ou tratá-lo como gasto do ano.
- *Recomendação:* tratar como gasto (os salários já estão na DR) e listar só os ativos comprados. É mais simples e prudente; confirmar com o contabilista.
- *Se ficar por decidir:* falta a base do plano de financiamento e das amortizações.

**Q9. FSE e outros gastos por estimar.**
- *Contexto:* sem valor no repositório: nuvem, mapas, *coworking* (quantos dias presenciais?), avença do contabilista, orçamento de marketing, seguros (acidentes de trabalho, responsabilidade civil), HSST, comissão dos embaixadores, benefícios, incentivos aos primeiros produtores.
- *Recomendação:* dividir pelas áreas: CTO (nuvem, mapas, lojas), Marketing (orçamento de aquisição), Finanças e Administração (contabilista, seguros, HSST), Operações (embaixadores, incentivos). Cada valor com a fonte (orçamento pedido ou preço público).
- *Se ficar por decidir:* a DR fica incompleta e o défice está subestimado.

**Q10. Custo dos pagamentos e quem o suporta.**
- *Contexto:* usou-se 1,5 % + 0,25 € por cobrança **[Pressuposto]** (tarifa pública da Stripe para cartões do EEE; o MB Way pode ter outra). A parte fixa come ≈ 22 % da taxa. Quando o produto é pago na app, a comissão sobre o valor do produto fica com a GrowNear (BMC: "comissões de pagamento por transação" são custo variável).
- *Opções:* confirmar a tarifa do MB Way; repercutir a comissão sobre o produto no produtor (contradiz "vender é grátis": não recomendado); juntar a taxa e o produto numa só cobrança (já assumido).
- *Recomendação:* confirmar as tarifas reais e manter a comissão do lado da GrowNear. O valor mínimo de encomenda de 5 € (Análise §15) protege a margem.
- *Se ficar por decidir:* margem por reserva incerta em ± 0,10 €.

**Q11. Tesouraria: perfil mensal e prazo de transferência.**
- *Contexto:* a oferta é sazonal; a previsão é anual. O prazo com que o prestador de pagamentos transfere as taxas e com que a GrowNear transfere o valor dos produtos para os produtores não está definido.
- *Recomendação:* perfil mensal com mais reservas na primavera e no verão (épocas de colheita), assinalado como pressuposto; transferência ao produtor depois da recolha confirmada (protege o reembolso garantido).
- *Se ficar por decidir:* o orçamento de tesouraria (VI.5) não se faz.

**Q12. Taxa de atualização para o VAL.**
- *Contexto:* o VAL e a TIR precisam de uma taxa de atualização (rendimento exigido). Não há valor no repositório.
- *Recomendação:* taxa sem risco + prémio de risco de *startup*, ou a que o professor indicar; mostrar sensibilidade.
- *Se ficar por decidir:* não há VAL.

**Q13. IRC.**
- *Contexto:* a taxa de IRC a aplicar (incluindo a taxa reduzida para PME e a derrama municipal) não está no repositório. Só pesa nos anos com lucro (no cenário de referência, talvez a partir do ano 3).
- *Recomendação:* confirmar com o contabilista as taxas em vigor e o reporte de prejuízos fiscais dos anos 1–2.

**Q14. Ferramenta: IAPMEI ou a folha/script do grupo?**
- *Contexto:* o slide 10 recomenda a ferramenta Excel do IAPMEI (5 anos). O grupo já tem o script `GrowNear_Plano_Financeiro.js`.
- *Recomendação:* usar a ferramenta do IAPMEI para os mapas finais (é o formato que o professor conhece) e o script para os pressupostos e as análises de sensibilidade.

**Q15. Reservas canceladas ou não recolhidas: a taxa devolve-se?**
- *Contexto:* a taxa é cobrada na reserva (D16). Não está decidido o que acontece se o produtor cancelar ou o comprador não recolher (Plano de Produção §5.3).
- *Opções:* devolver sempre; devolver se o produtor cancelar e reter se o comprador não recolher; reter sempre.
- *Recomendação:* devolver quando o produtor cancela, reter quando o comprador não recolhe (desincentiva reservas falsas e protege o produtor). Coerente com "confiança como prioridade".
- *Se ficar por decidir:* a previsão assume que todas as reservas geram taxa (sobrestima a receita na proporção dos cancelamentos).

**Q16. Pagamento "ao produtor na recolha" num ponto de recolha (conflito operacional).**
- *Contexto:* o comprador pode pagar o produto ao produtor na recolha (decisão de 05/11), e o ponto de recolha é a forma preferida (44 %; Análise §7). Mas, num ponto de recolha, o produtor não está presente.
- *Opções:* (a) num ponto de recolha, o produto paga-se na app ou por MB Way direto ao produtor no momento da recolha; (b) o café ou a mercearia recebe em nome do produtor (complexo, com risco legal e de caixa para o parceiro).
- *Recomendação:* (a). Mantém a decisão de 05/11 (o comprador continua a poder pagar diretamente ao produtor) sem pôr dinheiro nos parceiros.
- *Se ficar por decidir:* o processo de recolha num ponto não fecha.

**Q17. Reservas por produtor ativo (oferta necessária).**
- *Contexto:* usou-se 15 reservas por produtor ativo por mês **[Pressuposto]**, porque o estudo só inquiriu compradores. Dá ≈ 91 produtores ativos no ano 1.
- *Recomendação:* validar com 5–10 entrevistas a produtores (já recomendado na Análise §15, "Próximo estudo").
- *Se ficar por decidir:* a meta de captação de produtores e o trabalho dos embaixadores ficam sem base.

**Q18. Volume de apoio e critério para contratar o assistente de apoio.**
- *Contexto:* 5 % das reservas geram um contacto **[Pressuposto]**: ≈ 3 por dia útil no ano 1 e ≈ 32 no ano 3. D8/D10: contratar "se o volume o justificar" (não orçamentado).
- *Recomendação:* fixar um critério objetivo (por exemplo, mais de 20 contactos humanos por dia útil durante um mês) e levá-lo aos sócios. A decisão D10 não foi alterada.

**Q19. Custo do reembolso garantido.**
- *Contexto:* o BMC garante reembolso nas compras pagas na app. Não está decidido se o custo fica com a GrowNear ou com o produtor, nem quanto vale.
- *Recomendação:* a GrowNear reembolsa o comprador e desconta ao produtor quando a falha for dele (a transferência só se faz depois da recolha; Q11). Orçamentar uma reserva para os casos sem culpa definida.

**Q20. Metas dos KPI.**
- *Contexto:* as metas do Plano de Produção §8 que não vêm do programa de vendas são **[Pressupostos]** (recolha ≥ 95 %, avaliação ≥ 4,5, resposta ≤ 24 h, etc.). O Plano Organizacional diz que as metas se fixam com o plano financeiro.
- *Recomendação:* aprovar na reunião de sócios junto com o orçamento.

**Q21. Numeração e nome dos capítulos — decidido a 18/11.**
- *Contexto:* os slides numeram os capítulos de formas diferentes (I–VI nos de produção e do plano organizacional; o P8 chama ao V "Operational Plan"; o Milestone 02 da UC lista I–VIII).
- *Decisão:* fazer só o suficiente para os documentos ficarem coerentes entre si; não é questão para o professor. Usa-se "Plano Operacional (Plano de Produção)" e a numeração do Milestone 02 quando se montar o plano de negócio.

**Q22. Referências à SWOT — decidido a 18/11.**
- *Decisão:* nunca usar códigos de letra e número para os itens da SWOT; citar sempre o texto do item. Os códigos antigos não correspondiam à SWOT atual (um deles nem existia) e foram substituídos pelo texto em todos os `.md` e `.html`.

**Q23. Pagamentos por conta dos produtores e obrigações da plataforma.**
- *Contexto:* quando o produto é pago na app, a GrowNear recebe dinheiro de terceiros. Isso costuma exigir uma solução de "marketplace" do prestador de pagamentos (conta do produtor ligada, com verificação de identidade), e as plataformas têm obrigações de comunicação à Autoridade Tributária sobre os vendedores (diretiva DAC7). O BMC prevê "garantir as regras fiscais".
- *Recomendação:* o CTO e Finanças e Administração confirmam a solução técnica e as obrigações antes do lançamento. A verificação de identidade pode ser uma barreira para produtores não profissionais: medir no registo (PR2).
