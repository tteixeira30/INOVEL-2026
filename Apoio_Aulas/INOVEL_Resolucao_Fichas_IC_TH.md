# INOVEL — Resolução das fichas de inferência (semanas 7 e 8)

> Material de estudo do grupo, não é entregável. Enunciados em `Inovel.Context/INOVLE-IC-25-26.pdf` (intervalos de confiança) e `Inovel.Context/THPARAMETRICOS-INOVEL-TH-25.pi (1).py` (resolução da professora dos testes de hipóteses; os enunciados não estão na pasta).
> Quantis usados: z(0,95) = 1,645 · z(0,97) = 1,881 · z(0,975) = 1,960 · z(0,04) = −1,751.

## Fórmulas (semana 7)

| Situação | Intervalo de confiança | Dimensão da amostra |
|---|---|---|
| Média, σ conhecido (ou σ desconhecido com n ≥ 30, usando s) | X̄ ± z(1−α/2) · σ/√n | n = (z · σ / E)², com E = metade da amplitude |
| Proporção | p̂ ± z(1−α/2) · √(p̂(1−p̂)/n) | n = z² · p(1−p) / E² (pior caso: p = 0,5) |
| Diferença de médias | (X̄₁ − X̄₂) ± z · √(σ₁²/n₁ + σ₂²/n₂) | |
| Diferença de proporções | (p̂₁ − p̂₂) ± z · √(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂) | |

Amplitude do intervalo = 2 × margem de erro = 2 · z · σ/√n.

## Ficha de intervalos de confiança

### Exercício 1 — vida média de baterias (σ = 4,5 meses, população normal)

**1.1** Amplitude máxima de 3 meses com 90 % de confiança. O enunciado diz "no mínimo", mas o sentido é "no máximo".
- 2 · 1,645 · 4,5/√n ≤ 3 ⇔ √n ≥ 4,935 ⇔ n ≥ 24,35
- **n = 25 baterias**

**1.2** Com n = 20, que confiança dá uma amplitude menor do que 3 meses?
- 2 · z · 4,5/√20 < 3 ⇔ z < 3 · √20 / 9 = 1,491
- Confiança = 2 · Φ(1,491) − 1 = 0,864
- **Confiança inferior a cerca de 86,4 %.** Com menos baterias, para manter a precisão é preciso aceitar menos confiança.

### Exercício 2 — extensão dos serviços de um taxista (dados agrupados)

Classes 0–10 (5 serviços), 10–20 (11), 20–30 (17) e um serviço de 72 km. n = 34. Pontos médios: 5, 15, 25 e 72.

**2.1** IC a 94 %:
- X̄ = (5·5 + 15·11 + 25·17 + 72·1)/34 = 687/34 = **20,21 km**
- s = 11,71 km (σ desconhecido, n = 34 ≥ 30, por isso usa-se s)
- Margem = 1,881 · 11,71/√34 = 3,78
- **IC 94 % = [16,43 ; 23,98] km** (amplitude 7,56 km)
- Nota: o serviço de 72 km é um *outlier*. Sem ele, X̄ = 18,64 km, s = 7,42 km e o IC é [16,21 ; 21,07] km. Vale a pena comentar o efeito.

**2.2** Número de registos para reduzir a amplitude "para 10 %". Há duas leituras possíveis:
- **Amplitude = 10 % da atual** (0,756 km): a amplitude é proporcional a 1/√n, por isso dividir a amplitude por 10 obriga a multiplicar n por 100: **n = 3400 serviços**.
- **Amplitude = 10 % da média** (2,02 km): n = (2 · 1,881 · 11,71 / 2,02)² ≈ **476 serviços**.
- Comentário: a precisão custa caro. Para tornar o intervalo 10 vezes mais estreito são precisas 100 vezes mais observações, o que é inviável para um taxista.

### Exercício 3 — concordância com um decreto-lei (homens: 75 em 200)

- p̂ = 75/200 = 0,375
- Margem = 1,881 · √(0,375 · 0,625/200) = 0,064
- **IC 94 % = [0,311 ; 0,439]**: entre 31 % e 44 % dos homens concordam. Os dados das mulheres (120 em 300) não entram nesta pergunta.

### Exercício 4 — o produto A vende 8 % mais do que o B?

- p̂A = 34/200 = 0,17; p̂B = 18/150 = 0,12; p̂A − p̂B = 0,05
- Erro-padrão = √(0,17 · 0,83/200 + 0,12 · 0,88/150) = 0,0375
- **IC 95 % para pA − pB = [−0,024 ; 0,124]**
- 0,08 (8 pontos percentuais) está dentro do intervalo: **não há evidência para contrariar o fabricante**. Mas o zero também está dentro: os dados também não provam que A vende mais do que B.

### Exercício 5 — tensão de duas estruturas (σ conhecidos)

- X̄₁ − X̄₂ = 87,6 − 74,5 = 13,1
- Erro-padrão = √(1²/100 + 1,5²/120) = 0,170
- **IC 90 % para μ₁ − μ₂ = [12,82 ; 13,38]**. A estrutura 1 suporta claramente mais tensão (o intervalo não inclui o zero).

## Testes de hipóteses (semana 8): leitura do script da professora

Os passos são sempre os mesmos: H0 e H1, α, estatística de teste, região de rejeição (RR), cálculo e decisão. Alternativa equivalente: rejeitar H0 se o valor-p < α.

| Ex. | Dados (do script) | Teste | Região de rejeição | Resultado |
|---|---|---|---|---|
| 1 | n = 200, μ0 = 500, σ = 25, α = 5 % | Unilateral à esquerda, H1: μ < 500. σ/√n = 1,768 | X̄ ≤ 500 − 1,645 · 1,768 = **497,09** | Para X̄ = 498: valor-p = Φ((498 − 500)/1,768) = **0,129** > 0,05, por isso não se rejeita H0 |
| 2 | n = 30, μ0 = 90, σ = 20, α = 5 % | Unilateral à esquerda. σ/√n = 3,651 | X̄ ≤ **83,99** | Decide-se comparando a média observada com 83,99 |
| 3 | n = 100, p0 = 0,20, α = 4 % | Proporção, unilateral à esquerda. √(p0q0/n) = 0,04 | p̂ ≤ 0,20 − 1,751 · 0,04 = **0,130** | Rejeita-se H0 se a proporção amostral for ≤ 13 % |
| 4 | n = 40, μ0 = 20, σ² = 25, α = 5 % | Unilateral à direita. σ/√n = 0,791 | X̄ ≥ **21,30** | 4.1: para X̄ = 21,1, valor-p = **0,082** > 0,05, não se rejeita H0. 4.2: para rejeitar com 21,1 seria preciso α ≥ 8,2 % |
| 5 | Duas amostras, n = 30, s = 0,40 cada, α = 5 % | Diferença de médias, unilateral à direita. Erro-padrão = √(0,4²/30 + 0,4²/30) = 0,103 | X̄₁ − X̄₂ ≥ **0,170** | 5.2: para uma diferença de 0,20, valor-p = **0,026**: seria rejeitada H0 a 5 % (e com qualquer α ≥ 2,6 %) |

Ideias-chave para o exame:
- **Valor-p:** a probabilidade, se H0 for verdadeira, de obter um resultado tão ou mais extremo do que o observado. Quanto menor, mais evidência contra H0.
- **Erro do tipo I (α):** rejeitar H0 verdadeira (condenar um inocente). **Erro do tipo II (β):** não rejeitar H0 falsa (absolver um culpado). **Potência = 1 − β.**
- Diminuir α aumenta β, para o mesmo n. Só aumentar n reduz os dois ao mesmo tempo.
- Teste de proporções: os slides calculam o desvio-padrão com p̂, mas indicam como "mais correta" a alternativa com p0 (o valor de H0). Na GrowNear usou-se p0.
- **Paramétrico vs não paramétrico:** com dados ordinais, não normais ou n < 30, usam-se Wilcoxon, Mann-Whitney, Kruskal-Wallis, Friedman ou qui-quadrado (quadro do slide 15 da aula de análise de dados).
