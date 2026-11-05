# GrowNear — Análise de Resultados do Inquérito

> Base: respostas exportadas do Google Forms (`GrowNear_Inquerito_Respostas.csv`; o mesmo em `.xlsx`). Análise feita a 14/10/2026; revista a 05/11/2026 com as orientações da análise de dados (variáveis, questões de investigação, inferência).
> Perguntas em `GrowNear_Inquerito_Estrutura_e_Perguntas.md`; objetivos e hipóteses em `GrowNear_Objetivos_Estudo_Mercado.md`.
> Escalas 1 a 5: "% 4–5" é a percentagem que respondeu 4 ou 5 (*top-2-box*); "% 1–2" a que respondeu 1 ou 2.

## 0. Resumo

| # | Conclusão | Evidência |
|---|---|---|
| 1 | Há interesse na app, acima do ponto neutro, mas moderado | Mediana 4, média 3,45 (IC 95 %: 3,24 a 3,66); H1 confirmada (Wilcoxon, p < 0,001); 53 % com 4 ou 5 (IC: 44 % a 62 %) |
| 2 | Cerca de 45 % formam um núcleo de potenciais utilizadores | Interesse ≥ 4, probabilidade de compra ≥ 4 e uso pelo menos mensal (IC: 36 % a 54 %). Estimativa conservadora (5 nas duas): 16 % (IC: 9 % a 23 %) |
| 3 | A frescura é o argumento principal; saber quem produziu é o critério menos valorizado | Frescura acima de todos os outros fatores (Friedman, p < 0,001; pares com Bonferroni) e com a maior lacuna face à satisfação atual (p < 0,001) |
| 4 | O raio de recolha tem de ser curto: 10 minutos | Só 33 % aceitam mais de 10 minutos (H5 rejeitada, p < 0,001); tempo médio aceite 9,4 min (IC: 8,3 a 10,5) |
| 5 | A taxa é aceite, o pagamento antecipado na app não | 64 % aceitam 1,00 € numa encomenda de 10 € (H6 confirmada, p = 0,002), em todas as formas de pagamento (p = 0,585); 52 % preferem pagar ao produtor na recolha e só 16 % na app |
| 6 | A confiança é a alavanca mais forte do interesse | Sentir-se seguro a pagar na app e as avaliações estão entre as 3 associações com o interesse que resistem à correção de Bonferroni (ρ = 0,39 e 0,30); 54 % não se sentem seguros; quem prefere pagar na recolha fá-lo por desconfiança (Kruskal-Wallis, p < 0,001) |
| 7 | A sazonalidade é aceite, mas não fideliza | 69 % aceitam só produtos da época; quando falta um produto, 60 % compram noutro lado e só 12 % pedem alerta. Aceitar comprar "o que houver" é o fator mais associado ao interesse (ρ = 0,43) |
| 8 | Não há um segmento sociodemográfico estatisticamente distinto; o que separa é o acesso e a atitude | Idade, género, região, zona e papel nas compras: todos p > 0,12. Sem horta: mais interesse (H4 confirmada no limite, p = 0,046). Aberto a pagar na app: mais interesse (p = 0,030) |

## 1. Dados e amostra

| Elemento | Valor |
|---|---|
| Respostas recebidas | 114 (todas completas, sem duplicados) |
| Amostra válida | **113**. Excluída 1 resposta "Resido fora de Portugal" (fora da população-alvo) |
| Período real de recolha | 08/10 a 11/10/2026 (104 respostas a 09/10) |
| Margem de erro | ±9,2 pontos percentuais para uma proporção (95 %, n = 113) |
| Análise de sensibilidade | Sem os 2 que nunca compram fruta (P2) e os 9 que não fazem compras (P29), n = 103: interesse médio 3,45, taxa aceite por 63 %, mais de 10 minutos 35 %. **As conclusões não mudam** |

Respostas verificadas e mantidas (decisão do grupo, 15/10):
- A primeira resposta (08/10, 20:29) é anterior à divulgação, mas não foi um pré-teste do grupo.
- Uma resposta repete "3" em todas as 12 linhas de P7 e P8 (09/10, 13:51). O resto é coerente.

## 2. Variáveis em estudo

Cada pergunta do inquérito é uma variável; as perguntas em grelha (P6, P7, P8, P15, P17) dão uma variável por linha, num total de 46. O tipo e a escala de medida determinam as estatísticas descritivas e os testes que se podem usar.

| Pergunta | Variável | OE | Tipo | Escala | Estatísticas descritivas |
|---|---|---|---|---|---|
| P1 | Local principal de compra | OE2 | Qualitativa | Nominal | Frequências, moda |
| P2 | Frequência de compra | OE2 | Qualitativa | Ordinal | Frequências, moda, mediana |
| P3 | Gasto semanal (classes de €) | OE2 | Quantitativa agrupada em classes | Ordinal | Frequências, classe modal, classe mediana |
| P4 | Comprou a um produtor nos últimos 12 meses | OE2 | Qualitativa dicotómica (Sim/Não) | Nominal | Proporção |
| P5 | Acesso a horta | OE2 | Qualitativa dicotómica | Nominal | Proporção |
| P6 (5 linhas) | Uso de cada canal alternativo | OE2 | Qualitativa dicotómica | Nominal | Proporção por canal |
| P7 (4 linhas) | Satisfação com frescura, sabor, preço, origem | OE2 | Qualitativa (escala de Likert 1–5) | Ordinal | Mediana, moda, % 4–5 e % 1–2; média e DP por convenção |
| P8 (8 linhas) | Importância de cada fator de compra | OE5 | Qualitativa (Likert 1–5) | Ordinal | Idem |
| P9 | Tempo máximo de deslocação (classes de minutos) | OE4 | Quantitativa agrupada em classes | Ordinal | Frequências, classe modal, classe mediana |
| P10 | Forma de recolha preferida | OE4 | Qualitativa | Nominal | Frequências, moda |
| P11 | Meio de transporte | OE4 | Qualitativa | Nominal | Frequências, moda |
| P12 | Gasto previsto por encomenda (classes de €) | OE6 | Quantitativa agrupada em classes | Ordinal | Frequências, classe modal; média estimada pelos pontos médios das classes |
| P13 | Forma de pagamento preferida | OE6 | Qualitativa | Nominal | Frequências, moda |
| P14 | Aceita a taxa de 1,00 € | OE6 | Qualitativa dicotómica | Nominal | Proporção |
| P15 (3 linhas) | Confiança: pagar na app, avaliações, combinar fora da app | OE6 | Qualitativa (Likert 1–5) | Ordinal | Mediana, % 4–5 e % 1–2; média e DP por convenção |
| P16 | Valor mínimo aceitável (0, 5, 10, 15 €) | OE6 | Quantitativa discreta | Ordinal (a 1.ª opção, "não aceitaria", não é um valor) | Frequências, frequências acumuladas |
| P17 (2 linhas) | Aceitação de produtos da época e de pouca variedade | OE8 | Qualitativa (Likert 1–5) | Ordinal | Mediana, % 4–5 e % 1–2; média e DP por convenção |
| P18 | Reação a um produto em falta | OE8 | Qualitativa | Nominal | Frequências, moda |
| P19 | Interesse na app | OE3 | Qualitativa (Likert 1–5) | Ordinal | Mediana, % 4–5, % 5; média e DP por convenção |
| P20 | Probabilidade de compra em 3 meses | OE3 | Qualitativa (Likert 1–5) | Ordinal | Idem |
| P21 | Frequência de uso prevista | OE3 | Qualitativa | Ordinal | Frequências, moda, mediana |
| P22 | Principal motivo para não usar | OE3 | Qualitativa | Nominal | Frequências, moda |
| P23 | Idade (classes) | OE1 | Quantitativa agrupada em classes | Ordinal | Frequências, classe modal |
| P24 | Género | OE1 | Qualitativa | Nominal | Frequências |
| P25 | Região | OE1 | Qualitativa | Nominal | Frequências |
| P26 | Zona de residência | OE1 | Qualitativa | Nominal | Frequências |
| P27 | Dimensão do agregado | OE1 | Quantitativa discreta | Razão, mas a última classe é aberta ("5 ou mais"), por isso tratada como ordinal | Frequências, moda, mediana |
| P28 | Situação profissional | OE1 | Qualitativa | Nominal | Frequências |
| P29 | Papel nas compras | OE1 | Qualitativa | Nominal | Frequências |

Não há nenhuma variável intervalar ou de razão medida diretamente: o inquérito só tem perguntas fechadas (§1 do documento do inquérito). As quantidades (tempo, dinheiro, idade) foram recolhidas em classes, o que as torna ordinais.

**Escalas de Likert (P7, P8, P15, P17, P19, P20).** São ordinais: a distância entre "2" e "3" não é necessariamente igual à distância entre "4" e "5". Por isso:
- as estatísticas principais são a **mediana**, a **moda** e as percentagens **% 4–5** e **% 1–2**;
- a **média e o desvio-padrão** apresentam-se por serem prática corrente em estudos de mercado e permitirem ordenar os itens, mas não sustentam sozinhos nenhuma conclusão;
- os testes principais são **não paramétricos** (Wilcoxon, Mann-Whitney, Kruskal-Wallis, correlação de Spearman). Os testes paramétricos aparecem só como confirmação (§11).

Variáveis derivadas, criadas na análise a partir das respostas:

| Variável derivada | Definição | Tipo e escala | Usada em |
|---|---|---|---|
| Aceita mais de 10 minutos | P9 = "11 a 20", "21 a 30" ou "mais de 30 minutos" | Qualitativa dicotómica, nominal | H5 |
| Interessado | P19 ≥ 4 | Qualitativa dicotómica, nominal | OE3, OE7 |
| Núcleo de potenciais utilizadores | P19 ≥ 4, P20 ≥ 4 e P21 pelo menos mensal | Qualitativa dicotómica, nominal | OE3, metas |
| Entusiasta | P19 = 5 e P20 = 5 | Qualitativa dicotómica, nominal | OE3, metas |
| Lacuna importância–satisfação | Média de P8 menos média de P7 no mesmo atributo | Quantitativa (diferença de médias) | OE5 |
| Faixa etária agrupada | 18–34 · 35–54 · 55+ (a partir de P23) | Qualitativa ordinal | OE7 |
| Usou um canal alternativo | P4 = Sim ou pelo menos um "Sim" em P6 | Qualitativa dicotómica, nominal | OE2 |

## 3. Questões de investigação

Além da descrição de cada variável, a análise procura relações entre variáveis que ajudem a responder aos objetivos específicos. Cada questão de investigação (QI) indica as variáveis envolvidas, a respetiva escala e o método que lhe responde. As hipóteses H1 a H6, definidas antes da recolha (`GrowNear_Objetivos_Estudo_Mercado.md`, §4), são casos particulares destas questões.

| QI | Questão de investigação | OE | Variáveis (escala) | Método | Hipótese |
|---|---|---|---|---|---|
| QI1 | Quem tem acesso a horta também é quem já compra diretamente a produtores? | OE2 | P5 (nominal) × P4 (nominal) | Qui-quadrado de independência (2 × 2) | — |
| QI2 | Os oito fatores de compra têm a mesma importância, ou há uma hierarquia clara? | OE5 | P8, 8 itens (ordinal, medidas repetidas) | Teste de Friedman; comparações múltiplas com o teste de Wilcoxon emparelhado e correção de Bonferroni | — |
| QI3 | A importância de frescura, preço e origem é superior à satisfação atual com esses atributos? | OE5 | P8 × P7 no mesmo atributo (ordinal, emparelhadas) | Teste de Wilcoxon para amostras emparelhadas (unilateral) | — |
| QI4 | Pelo menos metade dos inquiridos aceita deslocar-se mais de 10 minutos? | OE4 | Aceita mais de 10 minutos (nominal dicotómica) | Teste a uma proporção (z) | H5 |
| QI5 | O tempo máximo de deslocação depende do meio de transporte? | OE4 | P9 (ordinal) × P11 (nominal: a pé / carro ou mota) | Teste de Mann-Whitney | — |
| QI6 | A forma de recolha preferida depende da zona de residência? | OE4 | P10 (nominal) × P26 (nominal) | Qui-quadrado de independência | — |
| QI7 | Pelo menos metade dos inquiridos aceita a taxa de 1,00 € numa encomenda de 10 €? | OE6 | P14 (nominal dicotómica) | Teste a uma proporção (z) | H6 |
| QI8 | A aceitação da taxa depende da forma de pagamento preferida? | OE6 | P14 (nominal) × P13 (nominal) | Qui-quadrado de independência | — |
| QI9 | A confiança em pagar antecipadamente na app difere consoante a forma de pagamento preferida? | OE6 | P15, 1.º item (ordinal) × P13 (nominal, 3 grupos) | Teste de Kruskal-Wallis; comparações múltiplas de Dunn com correção de Bonferroni | — |
| QI10 | Quem aceita uma oferta limitada à época tem mais interesse na app? | OE8 | P17, 2 itens (ordinal) × P19 (ordinal) | Correlação de Spearman | — |
| QI11 | O interesse na app é superior ao ponto neutro da escala (3)? | OE3 | P19 (ordinal) | Teste de Wilcoxon a uma amostra (mediana = 3); confirmação com o teste z a uma média (n ≥ 30) | H1 |
| QI12 | Que fatores estão associados ao interesse na app? | OE3 | P19 (ordinal) × P7, P8, P15, P17 (ordinal) | Correlação de Spearman | — |
| QI13 | O principal motivo para não usar a app é diferente entre interessados e não interessados? | OE3 | P22 (nominal) × Interessado (nominal) | Qui-quadrado de independência, com categorias agrupadas se as frequências esperadas forem pequenas | — |
| QI14 | O interesse difere entre zonas de residência? | OE7 | P19 (ordinal) × P26 (nominal, 3 grupos) | Kruskal-Wallis; Mann-Whitney entre urbana e rural | H2 |
| QI15 | Quem já comprou diretamente a um produtor tem mais interesse? | OE7 | P19 (ordinal) × P4 (nominal) | Mann-Whitney (unilateral) | H3 |
| QI16 | Quem tem acesso a horta tem menos interesse? | OE7 | P19 (ordinal) × P5 (nominal) | Mann-Whitney (unilateral) | H4 |
| QI17 | O interesse difere segundo o perfil (idade, género, região, papel nas compras, local de compra)? | OE7 | P19 (ordinal) × P23 agrupada (3 grupos), P24, P25 agrupada, P29, P1 agrupada | Kruskal-Wallis (3 ou mais grupos); Mann-Whitney (2 grupos) | — |
| QI18 | O interesse difere segundo a forma de pagamento preferida? | OE7 | P19 (ordinal) × P13 (nominal, 3 grupos) | Kruskal-Wallis; comparações múltiplas de Dunn | — |

O OE1 é só descritivo: as variáveis de perfil não têm questões próprias e entram como variáveis de segmentação no OE7 (QI14 a QI18).

**Como foi escolhido o método** (quadro de testes da aula de análise de dados):

| Situação | Variável em estudo ordinal (escala 1–5 ou classes) | Variável em estudo nominal (categorias, Sim/Não) |
|---|---|---|
| Um grupo comparado com um valor | Wilcoxon a uma amostra | Teste a uma proporção |
| Dois grupos independentes | Mann-Whitney | Qui-quadrado (ou teste exato de Fisher) |
| Três ou mais grupos independentes | Kruskal-Wallis | Qui-quadrado |
| Duas medições na mesma pessoa | Wilcoxon emparelhado | McNemar |
| Três ou mais medições na mesma pessoa | Friedman | Cochran |
| Associação entre duas variáveis ordinais | Correlação de Spearman | — |

Critérios comuns a todos os testes:
- **Nível de significância de 5 %.** Os testes são bilaterais, exceto quando a hipótese indica um sentido (H1, H3 a H6, QI3).
- **Qui-quadrado:** exige frequências esperadas de pelo menos 5 em 80 % das células e nenhuma abaixo de 1. Se não se cumprir, agrupam-se categorias ou usa-se o teste exato de Fisher (tabelas 2 × 2).
- **Comparações múltiplas** (depois do Friedman ou do Kruskal-Wallis): valor-p ajustado pela correção de Bonferroni, para não aumentar o risco de erro do tipo I.
- **Grupos com menos de 30 respostas** (rural, 35–44 anos, 65+, regiões fora do Norte, Centro e Lisboa) são agrupados ou interpretados com reserva. O teste pode não detetar diferenças reais (pouca potência, erro do tipo II).

## 4. Perfil dos inquiridos (OE1)

| Variável | Distribuição |
|---|---|
| Idade | 18–24: 7 % · 25–34: 14 % · 35–44: 6 % · **45–54: 34 %** · **55–64: 35 %** · 65+: 4 % |
| Género | Feminino 65 % · Masculino 34 % · Prefiro não responder 1 % |
| Região | AM Porto 39 % · AM Lisboa 24 % · Centro 19 % · Norte (sem AMP) 16 % · Outras 3 % |
| Zona | Urbana 65 % · Suburbana 21 % · Rural 13 % |
| Agregado | 1: 8 % · 2: 27 % · 3: 32 % · 4: 26 % · 5+: 7 % |
| Situação profissional | Conta de outrem 75 % · Outra 7 % · Trabalhador-estudante 5 % · Conta própria 4 % · Estudante 4 % · Reformado 4 % · Desempregado 1 % |
| Papel nas compras | Principal responsável 48 % · Partilha 44 % · Não costuma fazer 8 % |

A amostra é **mais velha** do que se previa nas limitações (69 % entre 45 e 64 anos; só 6 % entre 35 e 44), **feminina** e **empregada**. É, no entanto, a população que decide as compras: 92 % é responsável ou corresponsável pelas compras de alimentos. Norte e AM Porto somam 55 %.

## 5. Hábitos de compra (OE2)

| Indicador | Resultado |
|---|---|
| Local principal (P1) | Super/hipermercado **62 %** · Mercearia/frutaria de bairro 24 % · Mercado/feira 6 % · Diretamente ao produtor 4 % · Online 3 % · Horta própria 2 % |
| Frequência (P2) | 1–2 vezes por semana **72 %** · 3+ vezes por semana 12 % · 2–3 vezes por mês 13 % · Menos 4 % |
| Gasto semanal (P3) | < 10 €: 13 % · 10–19 €: 18 % · **20–29 €: 27 %** · 30–49 €: 24 % · 50 €+: 12 % · Não sei 7 % |
| Comprou diretamente a um produtor nos últimos 12 meses (P4) | **48 %** |
| Acesso regular a horta própria, de familiares ou vizinhos (P5) | **47 %** |

Canais usados nos últimos 12 meses (P6):

| Canal | % Sim |
|---|---|
| Mercado municipal ou feira | 49 % |
| Loja de produtos biológicos | 32 % |
| Cabaz de produtores | 11 % |
| App contra o desperdício (Too Good To Go) | 5 % |
| Anúncios ou grupos online (OLX, Facebook, WhatsApp) | 2 % |

69 % usaram pelo menos um canal alternativo ao supermercado (P4 ou P6). Os concorrentes diretos de lógica digital (cabazes, grupos online, apps anti-desperdício) quase não são usados: o espaço digital está livre, mas também não há hábito de comprar produtos frescos por app.

Satisfação com o que compra atualmente (P7):

| Atributo | Média | % 4–5 | % 1–2 |
|---|---|---|---|
| Frescura | 3,39 | 50 % | 20 % |
| Sabor | 3,19 | 41 % | 25 % |
| Informação sobre a origem | 2,88 | 29 % | 35 % |
| Preço | 2,71 | 28 % | **43 %** |

## 6. Critérios de compra (OE5)

| # | Fator (P8) | Média | Desvio-padrão | % 4–5 |
|---|---|---|---|---|
| 1 | **Frescura** | **4,25** | 0,82 | **84 %** |
| 2 | Variedade de produtos disponíveis | 3,76 | 0,97 | 65 % |
| 3 | Reduzir o desperdício alimentar | 3,58 | 1,22 | 58 % |
| 4 | Proximidade do local de compra | 3,58 | 1,10 | 55 % |
| 5 | Produção sem pesticidas | 3,56 | 1,09 | 57 % |
| 6 | Apoiar pequenos produtores locais | 3,44 | 1,12 | 51 % |
| 7 | Preço | 3,25 | 1,07 | 36 % |
| 8 | Saber quem produziu e onde | 3,11 | 1,14 | 38 % |

Diferença entre importância (P8) e satisfação (P7) nos atributos comuns:

| Atributo | Importância | Satisfação | Lacuna | Significativa? (QI3, Wilcoxon emparelhado) |
|---|---|---|---|---|
| Frescura | 4,25 | 3,39 | **0,86** | **Sim** (p < 0,001) |
| Preço | 3,25 | 2,71 | 0,54 | **Sim** (p < 0,001) |
| Origem | 3,11 | 2,88 | 0,23 | Não (p = 0,065) |

Leitura:
- A **frescura** é o fator mais importante, acima de todos os outros com significância (QI2, Friedman), e o que tem maior lacuna. É o argumento central da comunicação ("colhido hoje, perto de si").
- A **variedade** é o segundo na média, mas não se distingue estatisticamente de desperdício, pesticidas, proximidade e apoio ao produtor local (QI2). Choca com a oferta limitada à época (T4): é um risco a gerir, não a esconder.
- **Saber quem produziu** é o fator menos importante (abaixo de todos, exceto do preço; QI2). A rastreabilidade não deve ser o argumento principal, mas sim o meio para garantir frescura e confiança.
- O preço gera insatisfação (43 % com 1–2), mas pesa pouco na decisão (7.º lugar). Não convém posicionar a app como alternativa mais barata.

## 7. Recolha e deslocação (OE4)

| Tempo máximo, só ida (P9) | % |
|---|---|
| Não me deslocaria | 5 % |
| Até 5 minutos | 19 % |
| **6 a 10 minutos** | **43 %** |
| 11 a 20 minutos | 29 % |
| 21 a 30 minutos | 4 % |
| Mais de 30 minutos | 0 % |

| Forma de recolha (P10) | % | Transporte (P11) | % |
|---|---|---|---|
| Ponto de recolha (café, mercearia) | **44 %** | Carro ou mota | **75 %** |
| É-me indiferente | 37 % | A pé | 22 % |
| Só com entrega em casa | 12 % | Transportes públicos | 2 % |
| Em casa do produtor | 7 % | Bicicleta ou trotinete | 1 % |

- 76 % aceitam deslocar-se 6 minutos ou mais; só 33 % mais de 10 minutos.
- Quem vai a pé aceita menos: 40 % de quem vai a pé só se desloca até 5 minutos (ou não se desloca), contra 20 % de quem vai de carro.
- Convertendo com P11: 10 minutos correspondem a cerca de **3 a 5 km de carro** em meio urbano, ou **700 a 800 m a pé**. É este o raio de pesquisa por omissão.
- O **ponto de recolha** é claramente preferido à casa do produtor (44 % contra 7 %). Confirma a aposta em parcerias com cafés e mercearias (BMC, parceiros-chave).
- 12 % só comprariam com entrega em casa: um público que o modelo atual exclui de propósito.

## 8. Pagamento e taxa (OE6)

| Gasto previsto por encomenda (P12) | % | Valor mínimo aceitável (P16) | % |
|---|---|---|---|
| Menos de 5 € | 5 % | Não aceitaria um valor mínimo | 14 % |
| 5 a 9 € | 15 % | 5 € | 23 % |
| **10 a 19 €** | **34 %** | **10 €** | **37 %** |
| 20 a 29 € | 30 % | 15 € | 26 % |
| 30 € ou mais | 16 % | | |

- Classe modal por encomenda: **10–19 €**. Média estimada pelos pontos médios das classes: **19,40 €** (IC 95 %: 17,63 € a 21,17 €; §11.1). Com a taxa decidida (0,50 € + 5 %), gera **1,47 €** de receita por encomenda.
- Lendo P16 como o mínimo mais alto que cada um aceita: um mínimo de **5 € é aceite por 86 %**, um de 10 € por 63 % e um de 15 € por 26 %.

| Indicador | Resultado |
|---|---|
| Aceita taxa de 1,00 € numa encomenda de 10 € (P14) | **64 % Sim** (IC 95 %: 55 % a 73 %) |
| Prefere pagar (P13) | **Ao produtor, na recolha 52 %** · Indiferente 32 % · Na app 16 % |

Confiança (P15):

| Afirmação | Média | % 4–5 | % 1–2 |
|---|---|---|---|
| As avaliações de outros compradores aumentariam a minha confiança | 3,45 | 48 % | 21 % |
| Depois de conhecer o produtor, preferia combinar fora da app | 3,04 | 30 % | 30 % |
| Sentir-me-ia seguro a pagar antecipadamente na app a um produtor que não conheço | **2,47** | 22 % | **54 %** |

Leitura:
- A **taxa não é o problema**: 64 % aceitam-na e só 5 % a apontam como principal motivo para não usar a app (P22). A aceitação não depende da forma de pagamento preferida (59 % a 69 %, χ² p = 0,59).
- O **problema é pagar antecipadamente a um desconhecido**: 54 % discordam de que se sentiriam seguros. Quem prefere pagar na recolha tem confiança média de 2,03; quem prefere pagar na app, 3,56.
- **Risco de fuga à plataforma (W3, T6):** 30 % admitem que passariam a combinar fora da app. Como as pessoas tendem a não o admitir, é um valor mínimo.
- Implicação: o modelo de receita assenta no pagamento na app, mas só 16 % o preferem. Opções a discutir: (a) aceitar pagamento na recolha com a taxa cobrada na reserva; (b) garantir reembolso e destacar as avaliações para converter os 32 % indiferentes; (c) só libertar o pagamento ao produtor depois da recolha.

## 9. Produtos da época (OE8)

| Afirmação (P17) | Média | % 4–5 | % 1–2 |
|---|---|---|---|
| Aceito que só estejam disponíveis os produtos da época | **3,90** | **69 %** | 11 % |
| Mesmo com pouca variedade, usaria a app para comprar o que houver | 3,42 | 49 % | 27 % |

| Se o produto não estiver disponível (P18) | % |
|---|---|
| Comprava noutro local e voltava à app mais tarde | **60 %** |
| Escolhia outro produto disponível na app | 27 % |
| Pedia para ser avisado quando houvesse | 12 % |
| Deixava de usar a app | 2 % |

- A sazonalidade é aceite em princípio (69 %) e quase ninguém abandonaria a app (2 %).
- Mas a falta de produto leva a compra para outro lado (60 %): a app será um **complemento** ao supermercado, não um substituto.
- O alerta "avisem-me" interessa a poucos (12 %). Não deve ser uma prioridade do produto mínimo viável; mais útil é sugerir alternativas disponíveis (27 %).
- Aceitar a pouca variedade está fortemente ligado ao interesse (ρ = 0,43): quem aceita comprar "o que houver" é o cliente natural.

## 10. Interesse na app (OE3)

| Indicador | Média | 1 | 2 | 3 | 4 | 5 | % 4–5 |
|---|---|---|---|---|---|---|---|
| Interesse (P19) | **3,45** | 7 % | 12 % | 27 % | 35 % | 19 % | **53 %** |
| Probabilidade de comprar em 3 meses (P20) | **3,56** | 7 % | 14 % | 27 % | 20 % | 32 % | **52 %** |

| Frequência de uso prevista (P21) | % |
|---|---|
| Todas as semanas | 23 % |
| **2 a 3 vezes por mês** | **43 %** |
| 1 vez por mês | 19 % |
| Menos de 1 vez por mês | 6 % |
| Não usaria | 9 % |

| Principal motivo para não usar (P22) | Todos | Interessados (P19 ≥ 4, n = 60) | Não interessados (P19 ≤ 2, n = 22) |
|---|---|---|---|
| Não vejo nenhum obstáculo | 24 % | 35 % | 9 % |
| Prefiro os locais onde já compro | 19 % | 7 % | **32 %** |
| A deslocação para recolher | 18 % | **23 %** | 9 % |
| Não quero instalar mais uma app | 11 % | 2 % | **27 %** |
| O preço dos produtos | 9 % | 12 % | 0 % |
| Falta de confiança em produtores que não conheço | 8 % | 5 % | 18 % |
| Pouca variedade ou só produtos da época | 7 % | 12 % | 0 % |
| A taxa de serviço | 5 % | 5 % | 5 % |

Estimativas de procura (seguindo a recomendação de dar mais peso às respostas 5):

| Grupo | Critério | % da amostra |
|---|---|---|
| Interessados declarados | P19 ≥ 4 | 53 % |
| Núcleo de potenciais utilizadores | P19 ≥ 4, P20 ≥ 4 e uso pelo menos mensal | **45 %** |
| Entusiastas (estimativa conservadora) | P19 = 5 e P20 = 5 | **16 %** |

- Os **não interessados** rejeitam a mudança de hábito (já têm onde comprar, não querem outra app): são difíceis de converter e não devem ser o alvo.
- Os **interessados** apontam barreiras operacionais (deslocação, preço, variedade) que a GrowNear pode resolver com pontos de recolha próximos e oferta suficiente.

Fatores associados ao interesse (correlação de Spearman com P19, só os significativos a 5 %; QI10 e QI12):

| Fator | ρ | p | Resiste à correção de Bonferroni (17 testes)? |
|---|---|---|---|
| Mesmo com pouca variedade, usaria a app (P17) | 0,43 | < 0,001 | **Sim** |
| Sentir-me-ia seguro a pagar antecipadamente na app (P15) | 0,39 | < 0,001 | **Sim** |
| As avaliações aumentariam a minha confiança (P15) | 0,30 | 0,001 | **Sim** |
| Aceito só produtos da época (P17) | 0,27 | 0,004 | Não |
| Importância de apoiar pequenos produtores locais (P8) | 0,25 | 0,007 | Não |
| Importância de reduzir o desperdício alimentar (P8) | 0,25 | 0,008 | Não |

A satisfação com as compras atuais (P7) **não** está relacionada com o interesse (|ρ| ≤ 0,11). O interesse nasce da **confiança** e da disponibilidade para comprar "o que houver" (associações robustas) e, em menor grau, dos **valores** (apoiar o local, evitar desperdício). Não nasce da insatisfação com o supermercado.

## 11. Inferência estatística

Os valores das secções anteriores descrevem a amostra. Esta secção estima o que se passa na população: primeiro com intervalos de confiança (11.1), depois com testes de hipóteses (11.2). Todos os números são calculados por `GrowNear_Analise_Estatistica.js` a partir do CSV (`node GrowNear_Analise_Estatistica.js`).

### 11.1 Intervalos de confiança

**Método.** Nível de confiança de 95 % (z = 1,96).
- **Médias:** σ é desconhecido mas n = 113 ≥ 30, por isso, pelo teorema do limite central, usa-se X̄ ± z · s/√n.
- **Proporções:** p̂ ± z · √(p̂(1 − p̂)/n). A aproximação à normal exige n·p̂ ≥ 5 e n·(1 − p̂) ≥ 5. Cumpre-se em todos os casos: a menor contagem é 18.
- **Diferenças entre dois grupos independentes:** (X̄₁ − X̄₂) ± z · √(s₁²/n₁ + s₂²/n₂). O mesmo princípio aplica-se às proporções.
- **Escalas 1–5 (ordinais):** o IC da média serve para comparar itens. O IC da proporção com 4–5 é a leitura mais segura, porque não pressupõe distâncias iguais entre os pontos da escala.

**Escalas 1–5**

| Variável | Média | IC 95 % da média | % 4–5 | IC 95 % de % 4–5 |
|---|---|---|---|---|
| P19 Interesse na app | 3,45 | [3,24 ; 3,66] | 53 % | [44 % ; 62 %] |
| P20 Probabilidade de compra em 3 meses | 3,56 | [3,32 ; 3,79] | 52 % | [43 % ; 61 %] |
| P8 Importância: Frescura | **4,25** | **[4,10 ; 4,40]** | 84 % | [77 % ; 91 %] |
| P8 Importância: Variedade | 3,76 | [3,58 ; 3,94] | 65 % | [56 % ; 73 %] |
| P8 Importância: Reduzir o desperdício | 3,58 | [3,36 ; 3,81] | 58 % | [48 % ; 67 %] |
| P8 Importância: Proximidade | 3,58 | [3,37 ; 3,78] | 55 % | [46 % ; 64 %] |
| P8 Importância: Sem pesticidas | 3,56 | [3,36 ; 3,76] | 57 % | [47 % ; 66 %] |
| P8 Importância: Apoiar pequenos produtores | 3,44 | [3,24 ; 3,65] | 51 % | [42 % ; 61 %] |
| P8 Importância: Preço | 3,25 | [3,05 ; 3,45] | 36 % | [27 % ; 45 %] |
| P8 Importância: Saber quem produziu | 3,11 | [2,90 ; 3,32] | 38 % | [29 % ; 47 %] |
| P7 Satisfação: Frescura | 3,39 | [3,20 ; 3,58] | 50 % | [41 % ; 60 %] |
| P7 Satisfação: Sabor | 3,19 | [3,00 ; 3,39] | 41 % | [32 % ; 50 %] |
| P7 Satisfação: Informação sobre a origem | 2,88 | [2,70 ; 3,07] | 29 % | [21 % ; 38 %] |
| P7 Satisfação: Preço | 2,71 | [2,50 ; 2,92] | 28 % | [20 % ; 37 %] |
| P15 Seguro a pagar antecipadamente na app | **2,47** | **[2,23 ; 2,71]** | 22 % | [14 % ; 30 %] |
| P15 Avaliações aumentariam a confiança | 3,45 | [3,25 ; 3,65] | 48 % | [39 % ; 57 %] |
| P15 Preferia combinar fora da app | 3,04 | [2,83 ; 3,26] | 30 % | [22 % ; 39 %] |
| P17 Aceito só produtos da época | 3,90 | [3,70 ; 4,10] | 69 % | [61 % ; 78 %] |
| P17 Mesmo com pouca variedade, usaria a app | 3,42 | [3,18 ; 3,65] | 49 % | [39 % ; 58 %] |

**Proporções**

| Indicador | Proporção | IC 95 % |
|---|---|---|
| Interessados (P19 ≥ 4) | 53,1 % | [43,9 % ; 62,3 %] |
| Núcleo de potenciais utilizadores | 45,1 % | [36,0 % ; 54,3 %] |
| Entusiastas (P19 = 5 e P20 = 5) | 15,9 % | [9,2 % ; 22,7 %] |
| Aceita a taxa de 1,00 € (P14) | 63,7 % | [54,9 % ; 72,6 %] |
| Aceita deslocar-se mais de 10 minutos (P9) | 32,7 % | [24,1 % ; 41,4 %] |
| Aceita um valor mínimo de 5 € (P16) | 85,8 % | [79,4 % ; 92,3 %] |
| Aceita um valor mínimo de 10 € (P16) | 62,8 % | [53,9 % ; 71,7 %] |
| Prefere pagar ao produtor na recolha (P13) | 52,2 % | [43,0 % ; 61,4 %] |
| Prefere pagar na app (P13) | 15,9 % | [9,2 % ; 22,7 %] |
| Prefere ponto de recolha (P10) | 44,2 % | [35,1 % ; 53,4 %] |
| Não se sente seguro a pagar antecipadamente (P15 ≤ 2) | 54,0 % | [44,8 % ; 63,2 %] |
| Admite combinar fora da app (P15 ≥ 4) | 30,1 % | [21,6 % ; 38,5 %] |
| Compra noutro local se faltar o produto (P18) | 60,2 % | [51,2 % ; 69,2 %] |

**Variáveis em classes (média estimada pelos pontos médios)**

| Variável | Média | IC 95 % |
|---|---|---|
| P12 Gasto por encomenda | 19,40 € | [17,63 € ; 21,17 €] |
| P3 Gasto semanal do agregado (n = 105, sem "Não sei") | 28,43 € | [25,25 € ; 31,61 €] |
| P9 Tempo máximo de deslocação | 9,4 min | [8,3 min ; 10,5 min] |

Pontos médios usados nas classes abertas, um pressuposto que afeta a média: "30 € ou mais" = 35 €, "50 € ou mais" = 60 €, "Não me deslocaria" = 0 min, "Mais de 30 minutos" = 35 min (ninguém escolheu esta opção).

**Diferenças entre grupos no interesse (P19)**

| Comparação | n | Diferença de médias | IC 95 % | Diferença em % interessados | IC 95 % |
|---|---|---|---|---|---|
| Paga na app ou indiferente − paga na recolha (P13) | 54 / 59 | 0,52 | **[0,11 ; 0,92]** | 22,4 p.p. | **[4,5 ; 40,4]** |
| Sem horta − com horta (P5) | 60 / 53 | 0,35 | [−0,07 ; 0,77] | 18,3 p.p. | [0,1 ; 36,4] |
| Nunca comprou − já comprou a produtor (P4) | 59 / 54 | 0,23 | [−0,20 ; 0,65] | 16,6 p.p. | [−1,6 ; 34,8] |
| Feminino − masculino (P24) | 74 / 38 | 0,25 | [−0,20 ; 0,70] | 13,4 p.p. | [−6,0 ; 32,8] |

**Precisão do estudo e dimensão da amostra**

| Precisão pretendida (95 %) | n necessário |
|---|---|
| Proporção com margem de ±10 p.p. | 97 |
| Proporção com margem de ±5 p.p. | 385 |
| Média de P19 com margem de ±0,20 | 126 |
| Média de P19 com margem de ±0,10 | 501 |

Com n = 113, a margem é de ±9,2 p.p. para uma proporção e de ±0,21 para a média do interesse. Dentro de um segmento de cerca de 50 pessoas, a margem sobe para cerca de ±14 p.p. Fórmulas: n = z² · p(1 − p)/E², com p = 0,5 (pior caso), e n = (z · s/E)².

**Leitura**
- **Interesse:** o IC da média, [3,24 ; 3,66], está todo acima de 3, o ponto neutro. Na população, entre 44 % e 62 % estarão interessados. A estimativa prudente para metas, a dos entusiastas, fica entre 9 % e 23 %.
- **Frescura:** é o único fator cujo IC, [4,10 ; 4,40], não se sobrepõe a nenhum outro. É o primeiro com segurança. Os restantes fatores têm IC sobrepostos, por isso a ordem entre eles não é conclusiva (é testada na QI2, §11.2). "Saber quem produziu" não se distingue do preço.
- **Preço e origem:** a satisfação atual tem IC abaixo de 3, ou no limite. É uma insatisfação real, não um acaso da amostra.
- **Confiança:** a segurança em pagar antecipadamente tem IC entre 2,23 e 2,71, todo abaixo de 3. A desconfiança é generalizada, não só de alguns.
- **Taxa:** mesmo no limite inferior do IC (54,9 %), mais de metade aceita a taxa.
- **Deslocação:** no máximo 41 % aceitam mais de 10 minutos, e o tempo médio aceite é de 8 a 10,5 minutos. Confirma o raio de 10 minutos.
- **Receita por encomenda:** com o gasto médio de 19,40 € [17,63 ; 21,17], a taxa (0,50 € + 5 %) gera **1,47 € por encomenda** (IC: 1,38 € a 1,56 €). É o valor a usar na análise económica do plano de marketing e no plano financeiro.
- **Diferenças entre grupos:** só a preferência de pagamento tem um IC que exclui o zero nas duas medidas. A horta está no limite: a diferença de médias inclui o zero, a de % interessados exclui-o por pouco. Os testes da §11.2 decidem.

### 11.2 Testes de hipóteses

**Procedimento** (os passos das aulas): (1) definir H0 e H1; (2) fixar o nível de significância, α = 5 %; (3) escolher a estatística de teste; (4) identificar a região de rejeição; (5) calcular a estatística e o valor-p; (6) decidir. Rejeita-se H0 quando a estatística cai na região de rejeição, ou seja, quando o valor-p é menor do que α. Os testes não paramétricos usam a aproximação à normal (todos os n ≥ 15), com correção para empates.

#### 11.2.1 Verificação dos pressupostos

Os testes paramétricos (t, ANOVA) exigem dados intervalares, distribuição normal e variâncias homogéneas.

| Pressuposto | Teste | Resultado | Consequência |
|---|---|---|---|
| Escala intervalar | — | As escalas 1–5 são ordinais (§2) | Falha o 1.º pressuposto |
| Normalidade | Lilliefors (Kolmogorov-Smirnov com média e DP estimados) | Rejeitada em **todas** as 19 escalas 1–5 (D entre 0,164 e 0,263; valor crítico a 5 %: 0,083) e em P19 dentro de cada grupo de H2 a H4 (por exemplo, rural: D = 0,273 > 0,229) | Falha o 2.º pressuposto. É o esperado numa escala de 5 pontos, que é discreta e, aqui, assimétrica (assimetria de P19: −0,48) |
| Homogeneidade das variâncias de P19 | Levene (Brown-Forsythe) | Cumprida entre urbana e rural (p = 0,81), comprou e não comprou (p = 0,10), com e sem horta (p = 0,13). **Não** cumprida entre as 3 formas de pagamento (p = 0,031) | Na QI18, o Kruskal-Wallis lê-se como "um grupo tende a valores mais altos", não como diferença de medianas |

**Decisão:** os testes principais são **não paramétricos** (quadro da §3). O teste t de Welch e o teste z a uma média ficam como confirmação. No H1 a confirmação é aceitável, porque com n = 113 o teorema do limite central garante que a média amostral é aproximadamente normal. Nas comparações com grupos pequenos (rural, n = 15) já não é.

#### 11.2.2 Hipóteses H1 a H6

| # | H0 | H1 | Teste | Estatística | Região de rejeição (α = 5 %) | Valor-p | Decisão |
|---|---|---|---|---|---|---|---|
| H1 | Mediana do interesse = 3 | Mediana > 3 | Wilcoxon a uma amostra (unilateral) | z = 3,75 (W+ = 2481; n = 82 sem as 31 respostas iguais a 3) | z > 1,645 | < 0,001 | **Rejeita-se H0: hipótese confirmada.** Confirmação: z a uma média = 4,20; p < 0,001 |
| H2 | Interesse igual entre urbana e rural | Diferente | Mann-Whitney (bilateral) | z = 0,45 (U = 595) | \|z\| > 1,96 | 0,655 | **Não se rejeita H0.** Welch: p = 0,81 |
| H3 | Interesse igual entre quem comprou e quem não comprou a um produtor | Quem comprou tem mais | Mann-Whitney (unilateral) | z = −1,03 (U = 1419,5) | z > 1,645 | 0,849 | **Não se rejeita H0.** A diferença vai no sentido contrário ao previsto |
| H4 | Interesse igual com e sem acesso a horta | Quem tem horta tem menos | Mann-Whitney (unilateral) | z = −1,69 (U = 1306,5) | z < −1,645 | **0,046** | **Rejeita-se H0: hipótese confirmada, no limite.** Welch: p = 0,052 |
| H5 | Proporção que aceita mais de 10 minutos = 0,5 (ou mais) | Menos de 0,5 | Teste z a uma proporção (unilateral) | z = −3,67 (p̂ = 32,7 %) | z < −1,645 | < 0,001 | **Rejeita-se H0: a hipótese do grupo ("pelo menos metade") é rejeitada** |
| H6 | Proporção que aceita a taxa = 0,5 | Mais de 0,5 | Teste z a uma proporção (unilateral) | z = 2,92 (p̂ = 63,7 %) | z > 1,645 | 0,002 | **Rejeita-se H0: hipótese confirmada** |

Resumo dos grupos comparados:

| # | Grupo 1 | Grupo 2 | Efeito (r = \|z\|/√n) |
|---|---|---|---|
| H1 | Mediana 4; média 3,45 (n = 113) | Valor de referência 3 | 0,41 (médio) |
| H2 | Urbana: mediana 4, média 3,42 (n = 74) | Rural: mediana 3, média 3,33 (n = 15) | 0,05 (nulo) |
| H3 | Comprou: mediana 3, média 3,33 (n = 54) | Não comprou: mediana 4, média 3,56 (n = 59) | 0,10 (pequeno) |
| H4 | Com horta: mediana 3, média 3,26 (n = 53) | Sem horta: mediana 4, média 3,62 (n = 60) | 0,16 (pequeno) |

Confirmação com os testes paramétricos dados nas aulas (σ² ≈ s², porque n ≥ 30 nos grupos de H3 e H4; em H2 o grupo rural tem só 15):

| # | Teste z à diferença de médias | Teste z à diferença de proporções de interessados (P19 ≥ 4; p agrupado) | Conclusão igual à do Mann-Whitney? |
|---|---|---|---|
| H2 | z = 0,25; p = 0,806 | 55 % vs 33 %: z = 1,56; p = 0,119 | Sim |
| H3 | z = −1,04; p = 0,852 | 44 % vs 61 %: z = −1,76; p = 0,961 (sentido inverso) | Sim |
| H4 | z = −1,64; p = 0,051 | 43 % vs 62 %: z = −1,94; **p = 0,026** | Sim pela proporção; a média fica no limite |

**Erros do tipo I e do tipo II.** Não rejeitar H0 (H2, H3) não prova que os grupos são iguais.

| Hipótese | Diferença observada nas médias | Diferença mínima que o teste deteta com 80 % de potência | Potência para a diferença observada |
|---|---|---|---|
| H2 | 0,09 | 0,97 | 4 % |
| H3 | 0,23 | 0,61 | 18 % |
| H4 | 0,35 | 0,60 | 37 % |

Com cerca de 55 pessoas por grupo, só diferenças de 0,6 pontos ou mais seriam detetadas com segurança. O risco de erro do tipo II (não detetar uma diferença que existe) é, por isso, elevado. Em sentido inverso, esta análise faz cerca de 25 testes: a α = 5 %, é de esperar um ou dois falsos positivos (erro do tipo I) só por acaso. Por isso, os resultados com p perto de 0,05 (H4, QI5, QI18) leem-se como indícios, a confirmar com mais dados.

**Leitura conjunta de H3, H4 e QI1.** Quem tem horta compra mais diretamente a produtores (60 % contra 37 %; QI1). Quem nunca comprou a um produtor e não tem horta (n = 38) tem 66 % de interessados, contra 38 % de quem tem as duas coisas (n = 32). **Quem já tem acesso a produtos locais precisa menos da app.**

#### 11.2.3 Outras questões de investigação

| QI | Teste | Resultado | Decisão (α = 5 %) | Leitura |
|---|---|---|---|---|
| QI1 Horta × compra direta | Qui-quadrado 2 × 2 (todas as frequências esperadas ≥ 25); Fisher | χ²(1) = 6,34; p = 0,012; V de Cramér = 0,24. Fisher: p = 0,015 | **Associação significativa** | Com horta, 60 % compraram a um produtor; sem horta, 37 %. São, em boa parte, as mesmas pessoas |
| QI2 Hierarquia dos 8 fatores | Friedman + Wilcoxon emparelhado com correção de Bonferroni (28 pares) | Q(7) = 124,04; p < 0,001; W de Kendall = 0,16 | **A importância não é igual** | Há 3 níveis: (1) **frescura**, acima de todos os outros (p < 0,001 nos 7 pares); (2) variedade, desperdício, pesticidas, proximidade e apoio ao produtor local, sem diferenças entre si; (3) preço e "saber quem produziu". "Saber quem produziu" fica abaixo de todos, exceto do preço |
| QI3 Importância > satisfação | Wilcoxon emparelhado, unilateral | Frescura: z = 6,59; p < 0,001. Preço: z = 3,60; p < 0,001. Origem: z = 1,52; p = 0,065 | **Lacuna significativa na frescura e no preço**; não na origem | A frescura é a maior necessidade por satisfazer (59 % dão-lhe mais importância do que a satisfação que têm) |
| QI4 = H5 · QI7 = H6 · QI11 = H1 | Ver 11.2.2 | | | |
| QI5 Deslocação × transporte | Mann-Whitney (a pé, n = 25, contra carro ou mota, n = 85) | z = −1,94; p = 0,052 | Não significativo (no limite) | Tendência: a pé, 40 % só aceitam até 5 minutos, contra 20 % de carro. O raio a pé deve ser menor |
| QI6 Recolha × zona | Qui-quadrado. Com 4 × 3 categorias, 33 % das frequências esperadas eram < 5, por isso agrupou-se: recolha em 3 categorias (ponto, indiferente, outra) × urbana / não urbana | χ²(2) = 3,44; p = 0,179; V = 0,17 | Sem associação | A preferência pelo ponto de recolha é igual em todas as zonas |
| QI8 Taxa × forma de pagamento | Qui-quadrado 2 × 3 (frequência esperada mínima 6,5) | χ²(2) = 1,07; p = 0,585 | Sem associação | A taxa é aceita por 59 % a 69 %, qualquer que seja a forma de pagamento preferida |
| QI9 Confiança × forma de pagamento | Kruskal-Wallis + Dunn (Bonferroni) | H(2) = 17,98; p < 0,001; ε² = 0,16. Na app vs na recolha: p < 0,001. Indiferente vs na recolha: p = 0,050 | **Diferença significativa** | Confiança mediana: 3,5 (na app), 3 (indiferente), 2 (na recolha). **Quem quer pagar na recolha fá-lo por desconfiança**, não por hábito |
| QI10, QI12 Fatores associados ao interesse | Spearman (17 fatores; correção de Bonferroni, α = 0,05/17 = 0,003) | 6 fatores significativos a 5 %. Mantêm-se depois da correção: pouca variedade (ρ = 0,43), seguro a pagar na app (ρ = 0,39), avaliações (ρ = 0,30) | **3 associações robustas** | Os outros três (aceita só produtos da época, apoiar produtores locais, reduzir o desperdício; ρ = 0,25 a 0,27) são indícios. A satisfação atual (P7) não se relaciona com o interesse. P19 e P20 estão muito correlacionadas (ρ = 0,77): as duas medidas de intenção são coerentes |
| QI13 Motivo para não usar × interesse | Qui-quadrado 3 × 2. Com as 4 categorias iniciais, 25 % das frequências esperadas eram < 5, por isso juntaram-se "operacional" e "confiança" | χ²(2) = 28,28; p < 0,001; V = 0,50 | **Associação forte** | Entre os não interessados, 53 % apontam o **hábito** (já têm onde comprar, não querem outra app). Entre os interessados, 57 % apontam **barreiras que a app pode resolver** (deslocação, preço, variedade, taxa, confiança) e 35 % nenhum obstáculo |
| QI14 = H2 (3 zonas) | Kruskal-Wallis | H(2) = 0,63; p = 0,730 | Sem diferença | |
| QI17 Interesse × perfil | Kruskal-Wallis (idade em 3 grupos, papel nas compras); Mann-Whitney (género, região, local de compra) | Idade: p = 0,128. Papel: p = 0,312. Género: p = 0,209. Região: p = 0,713. Local de compra: p = 0,440 | **Nenhuma diferença significativa** | Os 35–54 anos têm mais interesse do que os 55+ (p = 0,042 no par), mas como o teste global da idade não é significativo, a comparação de pares não é válida: é só um indício |
| QI18 Interesse × forma de pagamento | Kruskal-Wallis (3 grupos); Mann-Whitney (app ou indiferente vs recolha) | 3 grupos: H(2) = 5,80; p = 0,055. 2 grupos: z = 2,17; p = 0,030; r = 0,20 | Significativo com 2 grupos; no limite com 3 | Médias: 3,94 (na app), 3,61 (indiferente), 3,20 (na recolha). É coerente com a QI9 e a QI12: **a confiança separa mais do que o perfil sociodemográfico** |

**O que mudou face à análise de 14/10** (testes t como principais):
- **H4 passa a confirmada a 5 %**, embora no limite: o Mann-Whitney dá p = 0,046, o Welch dava 0,052.
- A diferença de interesse por forma de pagamento mantém-se, mas mais fraca: p = 0,030 em vez de 0,014.
- A lacuna da origem (P8 − P7 = 0,22) **não é significativa**.
- Das 6 correlações com o interesse, só 3 resistem à correção de Bonferroni.
- **Novo:** a hierarquia dos fatores (QI2), a ligação entre horta e compra direta (QI1), a confiança como causa da preferência por pagar na recolha (QI9) e a separação dos motivos de não uso entre interessados e não interessados (QI13).

## 12. Segmentos prioritários (OE7)

Categorias agrupadas para ter grupos de dimensão útil (recomendação 6 do documento do inquérito).

| Segmento | n | Interesse médio (P19) | % 4–5 | % P20 = 5 | % usaria ≥ 2–3 vezes/mês | p |
|---|---|---|---|---|---|---|
| **Idade 35–54** | 45 | **3,67** | **62 %** | 38 % | 71 % | 0,128 (KW, 3 idades) |
| Idade 18–34 | 24 | 3,46 | 54 % | 29 % | 63 % | |
| Idade 55+ | 44 | 3,23 | 43 % | 27 % | 64 % | |
| **Feminino** | 74 | 3,54 | 58 % | **38 %** | 68 % | 0,209 |
| Masculino | 38 | 3,29 | 45 % | 18 % | 63 % | |
| Norte (incl. AMP) | 62 | 3,47 | 55 % | 34 % | 63 % | 0,713 |
| Resto do país | 51 | 3,43 | 51 % | 29 % | 71 % | |
| Urbana | 74 | 3,42 | 55 % | 31 % | 66 % | 0,730 (KW, 3 zonas) |
| Suburbana | 24 | 3,63 | 58 % | 38 % | 75 % | |
| Rural | 15 | 3,33 | 33 % | 27 % | 53 % | |
| **Principal responsável pelas compras** | 54 | **3,61** | 59 % | 37 % | 72 % | 0,312 (KW, 3 papéis) |
| Partilha as compras | 50 | 3,26 | 46 % | 26 % | 62 % | |
| **Sem acesso a horta (P5)** | 60 | **3,62** | **62 %** | 33 % | **75 %** | **0,046** (unilateral, H4) |
| Com acesso a horta | 53 | 3,26 | 43 % | 30 % | 57 % | |
| Compra sobretudo no super/hipermercado | 70 | 3,50 | 56 % | 37 % | 67 % | 0,440 |
| Compra sobretudo noutros locais | 43 | 3,37 | 49 % | 23 % | 65 % | |
| **Paga na app ou é indiferente (P13)** | 54 | **3,72** | **65 %** | — | — | **0,030** |
| Prefere pagar ao produtor na recolha | 59 | 3,20 | 42 % | — | — | |

A coluna p compara P19 entre os grupos: Mann-Whitney com 2 grupos, Kruskal-Wallis (KW) com 3 (§11.2). Também sem diferenças: gasto semanal, dimensão do agregado, uso de mercados/feiras e de lojas biológicas.

Leitura:
- **Nenhuma variável sociodemográfica separa o interesse de forma significativa.** Com cerca de 50 respostas por grupo, só diferenças de 0,6 pontos ou mais seriam detetáveis (§11.2.2); as encontradas são de 0,3 a 0,4. Não se conclui que os grupos sejam iguais: conclui-se que a amostra não chega para os distinguir.
- As duas diferenças significativas são de **acesso** e de **atitude**, não de perfil: quem não tem horta tem mais interesse (H4, p = 0,046), e quem aceita pagar na app, ou é indiferente, também (p = 0,030). A confiança no pagamento segmenta mais do que a idade ou a região.
- O grupo "35–54" é quase todo de 45–54 anos (38 de 45): os 35–44 estão quase ausentes da amostra (n = 7).
- Perfil do núcleo de potenciais utilizadores (n = 51): 71 % mulheres, 43 % com 45–54 anos, 67 % em zona urbana, 59 % principais responsáveis pelas compras, 63 % sem horta, 73 % aceitam a taxa.

**Segmento prioritário proposto:** pessoas **sem acesso regular a produtos de horta** (própria, de familiares ou vizinhos) que **não rejeitam o pagamento digital** e valorizam frescura, produção local e redução do desperdício. Para a comunicação, o perfil típico é o de responsáveis pelas compras do agregado, de 35 a 54 anos, em zona urbana ou suburbana, sobretudo mulheres: é uma descrição do núcleo, não um critério estatisticamente validado. Segmento secundário: 18 a 34 anos (interesse semelhante, mas pouco representado na amostra).

## 13. Conclusões por objetivo específico

| OE | Conclusão | Evidência estatística | Decisão que apoia |
|---|---|---|---|
| **OE1** Perfil | Amostra de 113 pessoas, sobretudo de 45–64 anos (69 %), mulheres (65 %), do Norte e AM Porto (55 %) e urbanas (65 %). 92 % fazem ou partilham as compras de alimentos | Descritiva (§4) | Define o alcance das conclusões: valem para adultos de meia-idade que fazem compras, não para jovens nem para a população em geral |
| **OE2** Hábitos | O supermercado domina (62 %), mas 69 % já usam algum canal alternativo. Os concorrentes digitais (cabazes, grupos online, apps anti-desperdício) quase não são usados (2–11 %). Ter horta e comprar a produtores andam juntos | QI1: χ²(1) = 6,34; p = 0,012 | Concorrente real: supermercado e mercado/feira, não outras apps. O espaço digital está livre, mas não há hábito de comprar frescos por app |
| **OE3** Interesse | Há interesse acima do neutro, mas moderado. Entre 44 % e 62 % da população estarão interessados; de forma prudente, entre 9 % e 23 % são entusiastas. Os não interessados rejeitam por hábito; os interessados apontam barreiras que a app pode resolver | H1: z = 3,75; p < 0,001. IC da §11.1. QI13: χ²(2) = 28,28; p < 0,001 | Metas: cenário prudente de 16 % e otimista de 45 % da população-alvo da zona de lançamento. Não gastar esforço a converter quem rejeita por hábito |
| **OE4** Deslocação | O raio aceitável é curto: o tempo médio aceite é de 9,4 minutos (IC: 8,3 a 10,5) e só 33 % aceitam mais de 10 minutos. O ponto de recolha é preferido em todas as zonas | H5: z = −3,67; p < 0,001. QI6: p = 0,179. QI5: p = 0,052 (indício: a pé, menor raio) | Raio de 10 minutos por omissão. Pontos de recolha (cafés, mercearias) como canal principal |
| **OE5** Critérios | A frescura é, com segurança, o fator mais importante, e é também a maior necessidade por satisfazer. "Saber quem produziu" e o preço são os menos importantes. O preço gera insatisfação, mas pesa pouco na decisão | QI2: Friedman Q(7) = 124,04; p < 0,001. QI3: frescura z = 6,59; p < 0,001 | Proposta de valor e comunicação centradas na frescura ("colhido hoje, perto de si"). Não posicionar como alternativa mais barata nem centrar na rastreabilidade |
| **OE6** Pagamento e taxa | A taxa é aceite por uma maioria (64 %; IC: 55 % a 73 %), qualquer que seja a forma de pagamento preferida. O problema é pagar antecipadamente a um desconhecido: 54 % não se sentem seguros, e é essa desconfiança que explica a preferência por pagar na recolha. O gasto médio previsto é de 19,40 € por encomenda | H6: z = 2,92; p = 0,002. QI8: p = 0,585. QI9: H(2) = 17,98; p < 0,001. IC P15 de 2,23 a 2,71 | Manter a taxa (0,50 € + 5 %; 1,47 € por encomenda média). Investir na confiança (reembolso garantido, avaliações, pagamento libertado só após a recolha). Valor mínimo de 5 € |
| **OE7** Segmentos | Nenhum perfil sociodemográfico se distingue com significância. Distinguem-se o acesso (sem horta: mais interesse) e a atitude (confiança no pagamento digital) | H4: z = −1,69; p = 0,046. QI18: p = 0,030. QI17: todos p > 0,12 | Segmentar por necessidade e atitude (sem acesso a produtos locais, aberto ao pagamento digital), não só por idade ou região |
| **OE8** Sazonalidade | A oferta limitada à época é aceite (69 %), mas a falta de produto leva a compra para outro lado (60 %). Aceitar comprar "o que houver" é o fator mais associado ao interesse | IC P17 de 3,70 a 4,10. QI10: ρ = 0,43; p < 0,001 (resiste a Bonferroni) | A app é um complemento ao supermercado, não um substituto. Mostrar alternativas disponíveis quando falta um produto; o alerta "avisem-me" é secundário (12 %) |

## 14. Limitações

| Limitação | Efeito nesta amostra |
|---|---|
| Amostra por conveniência | Concentrada em 45–64 anos (69 %), mulheres (65 %) e trabalhadores por conta de outrem (75 %). Os 35–44 (n = 7) e os 65+ (n = 5) estão quase ausentes. Não é representativa da população portuguesa: os IC e os testes pressupõem amostragem aleatória, por isso devem ler-se como indicativos |
| Dimensão da amostra | n = 113 dá uma margem de ±9,2 p.p. no total e de cerca de ±14 p.p. num segmento de 50 pessoas. Para ±5 p.p. seriam precisas 385 respostas (§11.1) |
| Potência dos testes | Nas comparações entre segmentos, só diferenças de 0,6 pontos ou mais são detetáveis com 80 % de potência. A ausência de diferenças significativas não prova que os segmentos são iguais (§11.2.2) |
| Recolha concentrada num dia | 91 % das respostas a 09/10: provavelmente uma ou duas redes de contactos. Pode reforçar a homogeneidade |
| Intenção declarada | P19 a P21 sobrestimam o uso real. Por isso se apresenta também a estimativa conservadora (16 %) |
| Grupos pequenos | Rural (n = 15), 35–44 anos (n = 7) e regiões fora do Norte, Centro e Lisboa (n = 3) não permitem conclusões |
| Escalas ordinais | As médias são uma convenção. Os testes principais são não paramétricos e os pressupostos dos paramétricos foram verificados e não se cumprem (§11.2.1) |
| Variáveis em classes | Tempo, gasto e idade foram recolhidos em classes. As médias pelos pontos médios dependem do valor atribuído às classes abertas |
| Testes múltiplos | Cerca de 25 testes a α = 5 %: um ou dois resultados significativos podem dever-se ao acaso. Os resultados no limite (H4, QI5, QI18) são indícios |
| Só compradores | Não se sabe se há produtores suficientes para a oferta que os compradores esperam (a variedade está logo a seguir à frescura) |

## 15. Síntese e recomendações

**Síntese.** Há mercado para a GrowNear, mas é um mercado de complemento ao supermercado, não de substituição:
- metade da amostra tem interesse;
- o argumento que mais pesa é a **frescura**;
- a **confiança** é a barreira principal, à frente da taxa;
- o raio de recolha tem de ser **curto**;
- o cliente natural é quem **não tem acesso** a produtos de horta e aceita comprar "o que houver".

Os dados não chegam para escolher um segmento pela idade ou pela região. Chegam para o definir pela necessidade e pela atitude.

| Área | Recomendação | Base | SWOT / BMC |
|---|---|---|---|
| Proposta de valor | Liderar com **frescura** e "do vizinho", não com rastreabilidade nem com preço | §6, QI2, QI3 | Proposta de valor; O2 |
| Comunicação | Mensagens de apoio ao produtor local e de redução do desperdício (valores associados ao interesse) e garantias de confiança (reembolso, avaliações) | §10, QI12 | Relação com clientes |
| Segmento-alvo | Pessoas sem acesso a produtos de horta, abertas ao pagamento digital, em zona urbana ou suburbana. Perfil típico: responsáveis pelas compras de 35 a 54 anos | §12, H4, QI18 | Segmentos de clientes |
| Raio de pesquisa | 10 minutos por omissão (≈ 3–5 km de carro; ≈ 800 m a pé) | §7, H5, QI5 | T7 |
| Recolha | Prioridade a **pontos de recolha** (cafés, mercearias); a casa do produtor é secundária | §7, QI6 | Parceiros-chave |
| Taxa | Manter 0,50 € + 5 % (aceite por 64 %; só 5 % a veem como barreira). Receita média de 1,47 € por encomenda | §8, H6, QI8, §11.1 | Fontes de receita |
| Valor mínimo | **5 €** (aceite por 86 %); 10 € só é aceite por 63 % | §8 | Fontes de receita |
| Pagamento | Resolver o conflito entre a preferência por pagar na recolha (52 %) e o modelo de receita: a preferência vem da desconfiança (QI9), por isso a resposta é reembolso garantido, avaliações visíveis e pagamento libertado ao produtor só após a recolha | §8, QI9, QI18 | W3, T6 |
| Fuga à plataforma | 30 % admitem combinar fora da app: dar razões para ficar (reembolso, avaliações, histórico, alertas) | §8 | W3, T6 |
| Sazonalidade | Mostrar alternativas disponíveis quando falta um produto; o alerta "avisem-me" é secundário | §9, QI10 | T4 |
| Metas | Planear com 16 % (entusiastas; IC de 9 % a 23 %) como cenário prudente e 45 % (núcleo; IC de 36 % a 54 %) como cenário otimista, aplicados à população-alvo da zona de lançamento | §10, §11.1 | — |
| Próximo estudo | Inquirir produtores (oferta e variedade) e alargar a amostra aos 25–44 anos antes do lançamento | §14 | W2 |
