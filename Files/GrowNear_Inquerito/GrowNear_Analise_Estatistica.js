// GrowNear — Análise estatística do inquérito (inferência: semanas 7 e 8 da UC).
// Lê GrowNear_Inquerito_Respostas.csv e imprime em Markdown os números usados em
// GrowNear_Analise_Resultados.md, §11. Uso: node GrowNear_Analise_Estatistica.js
// Sem dependências (não há Python neste PC). Nível de confiança 95 %, α = 5 %.

const fs = require('fs');
const path = require('path');

// ---------- Leitura do CSV (campos entre aspas, vírgulas e quebras de linha dentro) ----------
function parseCsv(t) {
  const rows = []; let r = [], f = '', q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ',') { r.push(f); f = ''; }
    else if (c === '\n') { r.push(f); rows.push(r); r = []; f = ''; }
    else if (c !== '\r') f += c;
  }
  if (f || r.length) { r.push(f); rows.push(r); }
  return rows;
}

const all = parseCsv(fs.readFileSync(path.join(__dirname, 'GrowNear_Inquerito_Respostas.csv'), 'utf8')).slice(1);
// Índices das colunas no CSV (coluna 0 = carimbo de data/hora)
const C = {
  P1: 1, P2: 2, P3: 3, P4: 4, P5: 5, P6: [6, 7, 8, 9, 10], P7: [11, 12, 13, 14], P8: [15, 16, 17, 18, 19, 20, 21, 22],
  P9: 23, P10: 24, P11: 25, P12: 26, P13: 27, P14: 28, P15: [29, 30, 31], P16: 32, P17: [33, 34], P18: 35,
  P19: 36, P20: 37, P21: 38, P22: 39, P23: 40, P24: 41, P25: 42, P26: 43, P27: 44, P28: 45, P29: 46,
};
const D = all.filter(r => r[C.P25] !== 'Resido fora de Portugal'); // amostra válida (fora da população-alvo)
const N = D.length;

const P7_ITENS = ['Frescura', 'Sabor', 'Preço', 'Informação sobre a origem'];
const P8_ITENS = ['Preço', 'Frescura', 'Saber quem produziu e onde', 'Proximidade do local de compra',
  'Variedade de produtos disponíveis', 'Produção sem pesticidas', 'Apoiar pequenos produtores locais', 'Reduzir o desperdício alimentar'];
const P15_ITENS = ['Seguro a pagar antecipadamente na app', 'Avaliações aumentariam a confiança', 'Preferia combinar fora da app'];
const P17_ITENS = ['Aceito só produtos da época', 'Mesmo com pouca variedade, usaria a app'];

const num = (r, j) => Number(r[j]);

// ---------- Funções estatísticas ----------
const mean = a => a.reduce((s, x) => s + x, 0) / a.length;
const sd = a => { const m = mean(a); return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1)); };
const median = a => { const s = [...a].sort((x, y) => x - y), k = s.length >> 1; return s.length % 2 ? s[k] : (s[k - 1] + s[k]) / 2; };

// Função de distribuição da normal padrão (Abramowitz e Stegun 7.1.26; erro < 1,5e-7)
function normCdf(z) {
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z / 2);
  return z >= 0 ? (1 + y) / 2 : (1 - y) / 2;
}
const Z95 = 1.959964; // quantil 0,975 da normal padrão

// IC para a média: σ desconhecido e n ≥ 30, logo X̄ ± z·s/√n (como nas aulas)
function icMedia(a) {
  const m = mean(a), s = sd(a), e = Z95 * s / Math.sqrt(a.length);
  return { n: a.length, m, s, lo: m - e, hi: m + e, e };
}
// IC para uma proporção: p̂ ± z·√(p̂(1−p̂)/n)
function icProp(x, n) {
  const p = x / n, e = Z95 * Math.sqrt(p * (1 - p) / n);
  return { x, n, p, lo: p - e, hi: p + e, e };
}
// IC para a diferença de médias de duas amostras independentes (n1, n2 ≥ 30)
function icDifMedias(a, b) {
  const d = mean(a) - mean(b), e = Z95 * Math.sqrt(sd(a) ** 2 / a.length + sd(b) ** 2 / b.length);
  return { d, lo: d - e, hi: d + e };
}
// IC para a diferença de proporções
function icDifProp(x1, n1, x2, n2) {
  const p1 = x1 / n1, p2 = x2 / n2, d = p1 - p2, e = Z95 * Math.sqrt(p1 * (1 - p1) / n1 + p2 * (1 - p2) / n2);
  return { d, lo: d - e, hi: d + e };
}

// ---------- Formatação (português: vírgula decimal) ----------
const f = (x, k = 2) => x.toFixed(k).replace('.', ',').replace(/^-/, '−');
const pc = (x, k = 0) => f(100 * x, k) + ' %';
const icM = r => `${f(r.m)} | ${f(r.s)} | [${f(r.lo)} ; ${f(r.hi)}] | ±${f(r.e)}`;
const icP = r => `${r.x}/${r.n} | ${pc(r.p, 1)} | [${pc(r.lo, 1)} ; ${pc(r.hi, 1)}] | ±${f(100 * r.e, 1)} p.p.`;
const out = [];
const h = t => out.push('', t, '');

// =====================================================================
// §11.1 Intervalos de confiança (semana 7)
// =====================================================================
h('### IC 95 % para médias (escalas 1–5) e para a proporção com 4–5');
out.push('| Variável | n | Média | DP | IC 95 % da média | Margem | % 4–5 | IC 95 % de % 4–5 |', '|---|---|---|---|---|---|---|---|');
const escalas = [
  ['P19 Interesse na app', C.P19], ['P20 Probabilidade de compra em 3 meses', C.P20],
  ...P8_ITENS.map((t, i) => [`P8 Importância: ${t}`, C.P8[i]]),
  ...P7_ITENS.map((t, i) => [`P7 Satisfação: ${t}`, C.P7[i]]),
  ...P15_ITENS.map((t, i) => [`P15 ${t}`, C.P15[i]]),
  ...P17_ITENS.map((t, i) => [`P17 ${t}`, C.P17[i]]),
];
for (const [nome, j] of escalas) {
  const a = D.map(r => num(r, j)), m = icMedia(a), p = icProp(a.filter(x => x >= 4).length, N);
  out.push(`| ${nome} | ${N} | ${icM(m)} | ${pc(p.p)} | [${pc(p.lo)} ; ${pc(p.hi)}] |`);
}

h('### IC 95 % para proporções');
out.push('| Indicador | Casos | Proporção | IC 95 % | Margem |', '|---|---|---|---|---|');
const P9mais10 = ['11 a 20 minutos', '21 a 30 minutos', 'Mais de 30 minutos'];
const mensal = ['Todas as semanas', '2 a 3 vezes por mês', '1 vez por mês'];
const props = [
  ['Interessados (P19 ≥ 4)', r => num(r, C.P19) >= 4],
  ['Núcleo de potenciais utilizadores (P19 ≥ 4, P20 ≥ 4, uso pelo menos mensal)', r => num(r, C.P19) >= 4 && num(r, C.P20) >= 4 && mensal.includes(r[C.P21])],
  ['Entusiastas (P19 = 5 e P20 = 5)', r => num(r, C.P19) === 5 && num(r, C.P20) === 5],
  ['Aceita a taxa de 1,00 € (P14)', r => r[C.P14] === 'Sim'],
  ['Aceita deslocar-se mais de 10 minutos (P9)', r => P9mais10.includes(r[C.P9])],
  ['Aceita um valor mínimo de 5 € (P16 ≠ "não aceitaria")', r => r[C.P16] !== 'Não aceitaria um valor mínimo'],
  ['Aceita um valor mínimo de 10 € (P16 = 10 € ou 15 €)', r => ['10 €', '15 €'].includes(r[C.P16])],
  ['Prefere pagar ao produtor na recolha (P13)', r => r[C.P13].startsWith('Ao produtor')],
  ['Prefere pagar na app (P13)', r => r[C.P13].startsWith('Na app')],
  ['Prefere ponto de recolha (P10)', r => r[C.P10].startsWith('Num ponto')],
  ['Não se sente seguro a pagar antecipadamente (P15 ≤ 2)', r => num(r, C.P15[0]) <= 2],
  ['Admite combinar fora da app (P15 ≥ 4)', r => num(r, C.P15[2]) >= 4],
  ['Compra noutro local se faltar o produto (P18)', r => r[C.P18].startsWith('Comprava noutro')],
];
for (const [nome, cond] of props) out.push(`| ${nome} | ${icP(icProp(D.filter(cond).length, N))} |`);

// Dados agrupados em classes: média pelos pontos médios (como no exercício 2 da ficha de IC)
h('### IC 95 % para médias de variáveis agrupadas em classes (pontos médios)');
out.push('| Variável | n | Média estimada | DP | IC 95 % | Margem |', '|---|---|---|---|---|---|');
const P12_PM = { 'Menos de 5 €': 2.5, '5 a 9 €': 7.5, '10 a 19 €': 15, '20 a 29 €': 25, '30 € ou mais': 35 };
const P3_PM = { 'Menos de 10 €': 5, '10 a 19 €': 15, '20 a 29 €': 25, '30 a 49 €': 40, '50 € ou mais': 60 };
const P9_PM = { 'Não me deslocaria': 0, 'Até 5 minutos': 2.5, '6 a 10 minutos': 8, '11 a 20 minutos': 15.5, '21 a 30 minutos': 25.5, 'Mais de 30 minutos': 35 };
for (const [nome, j, pm] of [['P12 Gasto por encomenda (€)', C.P12, P12_PM], ['P3 Gasto semanal do agregado (€; sem "Não sei")', C.P3, P3_PM], ['P9 Tempo máximo de deslocação (min)', C.P9, P9_PM]]) {
  const a = D.map(r => pm[r[j]]).filter(x => x !== undefined), r = icMedia(a);
  out.push(`| ${nome} | ${r.n} | ${f(r.m)} | ${f(r.s)} | [${f(r.lo)} ; ${f(r.hi)}] | ±${f(r.e)} |`);
}

// IC para diferenças entre dois grupos (exercícios 4 e 5 da ficha de IC)
h('### IC 95 % para diferenças entre grupos (interesse, P19)');
out.push('| Comparação | n1 / n2 | Diferença de médias | IC 95 % | Diferença em % interessados | IC 95 % |', '|---|---|---|---|---|---|');
const grupos = [
  ['Sem horta − com horta (P5)', r => r[C.P5] === 'Não', r => r[C.P5] === 'Sim'],
  ['Nunca comprou − já comprou a produtor (P4)', r => r[C.P4] === 'Não', r => r[C.P4] === 'Sim'],
  ['Paga na app ou indiferente − paga na recolha (P13)', r => !r[C.P13].startsWith('Ao produtor'), r => r[C.P13].startsWith('Ao produtor')],
  ['Feminino − masculino (P24)', r => r[C.P24] === 'Feminino', r => r[C.P24] === 'Masculino'],
];
for (const [nome, g1, g2] of grupos) {
  const a = D.filter(g1).map(r => num(r, C.P19)), b = D.filter(g2).map(r => num(r, C.P19));
  const dm = icDifMedias(a, b), dp = icDifProp(a.filter(x => x >= 4).length, a.length, b.filter(x => x >= 4).length, b.length);
  out.push(`| ${nome} | ${a.length} / ${b.length} | ${f(dm.d)} | [${f(dm.lo)} ; ${f(dm.hi)}] | ${f(100 * dp.d, 1)} p.p. | [${f(100 * dp.lo, 1)} ; ${f(100 * dp.hi, 1)}] p.p. |`);
}

// Dimensão da amostra (exercício 1.1 da ficha de IC): n = (z·σ/E)² ou n = z²·p(1−p)/E²
h('### Dimensão da amostra necessária');
out.push('| Objetivo de precisão (95 %) | n necessário |', '|---|---|');
const s19 = sd(D.map(r => num(r, C.P19)));
for (const E of [0.10, 0.05, 0.03]) out.push(`| Proporção com margem de ±${f(100 * E, 0)} p.p. (pior caso, p = 0,5) | ${Math.ceil(Z95 ** 2 * 0.25 / E ** 2)} |`);
for (const E of [0.2, 0.15, 0.1]) out.push(`| Média de P19 com margem de ±${f(E)} (s = ${f(s19)}) | ${Math.ceil((Z95 * s19 / E) ** 2)} |`);
out.push(`| Margem atual para uma proporção (n = ${N}, p = 0,5) | ±${f(100 * Z95 * Math.sqrt(0.25 / N), 1)} p.p. |`);
out.push(`| Margem atual para a média de P19 (n = ${N}) | ±${f(Z95 * s19 / Math.sqrt(N))} |`);

// =====================================================================
// Funções para os testes de hipóteses (semana 8)
// =====================================================================
// log Γ (Lanczos)
function lgamma(x) {
  const g = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
  let y = x, t = x + 5.5; t -= (x + 0.5) * Math.log(t); let s = 1.000000000190015;
  for (const c of g) s += c / ++y;
  return -t + Math.log(2.5066282746310005 * s / x);
}
// Gama incompleta regularizada P(a, x) (Numerical Recipes)
function gammaP(a, x) {
  if (x <= 0) return 0;
  if (x < a + 1) { let ap = a, s = 1 / a, d = s; for (let i = 0; i < 500; i++) { d *= x / ++ap; s += d; if (Math.abs(d) < Math.abs(s) * 1e-14) break; } return s * Math.exp(-x + a * Math.log(x) - lgamma(a)); }
  let b = x + 1 - a, c = 1e300, d = 1 / b, hh = d;
  for (let i = 1; i < 500; i++) { const an = -i * (i - a); b += 2; d = an * d + b; if (Math.abs(d) < 1e-300) d = 1e-300; c = b + an / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; const del = d * c; hh *= del; if (Math.abs(del - 1) < 1e-14) break; }
  return 1 - Math.exp(-x + a * Math.log(x) - lgamma(a)) * hh;
}
const chi2Sf = (x, df) => 1 - gammaP(df / 2, x / 2);
// Beta incompleta regularizada I_x(a, b) (Numerical Recipes)
function betaI(x, a, b) {
  if (x <= 0) return 0; if (x >= 1) return 1;
  const bt = Math.exp(lgamma(a + b) - lgamma(a) - lgamma(b) + a * Math.log(x) + b * Math.log(1 - x));
  const cf = (x, a, b) => {
    let c = 1, d = 1 - (a + b) * x / (a + 1); if (Math.abs(d) < 1e-300) d = 1e-300; d = 1 / d; let hh = d;
    for (let m = 1; m < 500; m++) {
      const m2 = 2 * m; let aa = m * (b - m) * x / ((a + m2 - 1) * (a + m2));
      d = 1 + aa * d; if (Math.abs(d) < 1e-300) d = 1e-300; c = 1 + aa / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; hh *= d * c;
      aa = -(a + m) * (a + b + m) * x / ((a + m2) * (a + m2 + 1));
      d = 1 + aa * d; if (Math.abs(d) < 1e-300) d = 1e-300; c = 1 + aa / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d;
      const del = d * c; hh *= del; if (Math.abs(del - 1) < 1e-14) break;
    }
    return hh;
  };
  return x < (a + 1) / (a + b + 2) ? bt * cf(x, a, b) / a : 1 - bt * cf(1 - x, b, a) / b;
}
const tSf2 = (t, df) => betaI(df / (df + t * t), df / 2, 0.5);           // P(|T| > |t|)
const fSf = (F, d1, d2) => betaI(d2 / (d2 + d1 * F), d2 / 2, d1 / 2);    // P(F > F_obs)

// Postos médios (empates recebem a média dos postos); devolve também Σ(t³ − t)
function ranks(a) {
  const idx = a.map((v, i) => [v, i]).sort((x, y) => x[0] - y[0]), r = new Array(a.length); let ties = 0;
  for (let i = 0; i < idx.length;) {
    let j = i; while (j + 1 < idx.length && idx[j + 1][0] === idx[i][0]) j++;
    const t = j - i + 1; ties += t ** 3 - t;
    for (let k = i; k <= j; k++) r[idx[k][1]] = (i + j) / 2 + 1;
    i = j + 1;
  }
  return { r, ties };
}
const pUni = z => 1 - normCdf(z);          // P(Z > z)
const pBi = z => 2 * (1 - normCdf(Math.abs(z)));

// Wilcoxon a uma amostra (H0: mediana = m0) ou emparelhado (a − b); aproximação normal com correção de empates e de continuidade
function wilcoxon(d) {
  d = d.filter(x => x !== 0); const n = d.length, { r, ties } = ranks(d.map(Math.abs));
  const Wp = d.reduce((s, x, i) => s + (x > 0 ? r[i] : 0), 0), mu = n * (n + 1) / 4;
  const sg = Math.sqrt(n * (n + 1) * (2 * n + 1) / 24 - ties / 48);
  const z = (Wp - mu - Math.sign(Wp - mu) * 0.5) / sg;
  return { n, W: Wp, z, r: Math.abs(z) / Math.sqrt(n) };
}
// Mann-Whitney (z > 0 ⇒ grupo a tende a valores mais altos)
function mannWhitney(a, b) {
  const n1 = a.length, n2 = b.length, Nn = n1 + n2, { r, ties } = ranks([...a, ...b]);
  const R1 = r.slice(0, n1).reduce((s, x) => s + x, 0), U = R1 - n1 * (n1 + 1) / 2, mu = n1 * n2 / 2;
  const sg = Math.sqrt(n1 * n2 / 12 * ((Nn + 1) - ties / (Nn * (Nn - 1))));
  const z = (U - mu - Math.sign(U - mu) * 0.5) / sg;
  return { U, z, r: Math.abs(z) / Math.sqrt(Nn), n1, n2 };
}
// Kruskal-Wallis + comparações múltiplas de Dunn (Bonferroni)
function kruskal(groups) {
  const flat = groups.flat(), Nn = flat.length, { r, ties } = ranks(flat); let k0 = 0;
  const R = groups.map(g => { const s = r.slice(k0, k0 + g.length).reduce((a, b) => a + b, 0); k0 += g.length; return s; });
  let H = 12 / (Nn * (Nn + 1)) * R.reduce((s, Ri, i) => s + Ri * Ri / groups[i].length, 0) - 3 * (Nn + 1);
  H /= 1 - ties / (Nn ** 3 - Nn);
  const df = groups.length - 1, p = chi2Sf(H, df), m = groups.length * (groups.length - 1) / 2, dunn = [];
  for (let i = 0; i < groups.length; i++) for (let j = i + 1; j < groups.length; j++) {
    const se = Math.sqrt((Nn * (Nn + 1) / 12 - ties / (12 * (Nn - 1))) * (1 / groups[i].length + 1 / groups[j].length));
    const z = (R[i] / groups[i].length - R[j] / groups[j].length) / se;
    dunn.push({ i, j, z, p: Math.min(1, pBi(z) * m) });
  }
  return { H, df, p, eps2: H / (Nn - 1), dunn, meanRank: R.map((s, i) => s / groups[i].length) };
}
// Friedman (k medições na mesma pessoa), com correção de empates; W de Kendall
function friedman(rows) {
  const n = rows.length, k = rows[0].length, R = new Array(k).fill(0); let ties = 0;
  for (const row of rows) { const q = ranks(row); q.r.forEach((x, j) => R[j] += x); ties += q.ties; }
  let Q = 12 / (n * k * (k + 1)) * R.reduce((s, x) => s + x * x, 0) - 3 * n * (k + 1);
  Q /= 1 - ties / (n * (k ** 3 - k));
  return { Q, df: k - 1, p: chi2Sf(Q, k - 1), W: Q / (n * (k - 1)), meanRank: R.map(x => x / n) };
}
// Tabela de contingência + qui-quadrado de independência + V de Cramér
function crosstab(x, y, rowsL, colsL) {
  const O = rowsL.map(a => colsL.map(b => x.filter((v, i) => v === a && y[i] === b).length));
  const rs = O.map(r => r.reduce((s, v) => s + v, 0)), cs = colsL.map((_, j) => O.reduce((s, r) => s + r[j], 0)), Nn = rs.reduce((s, v) => s + v, 0);
  const E = O.map((r, i) => r.map((_, j) => rs[i] * cs[j] / Nn));
  let X2 = 0; O.forEach((r, i) => r.forEach((o, j) => X2 += (o - E[i][j]) ** 2 / E[i][j]));
  const df = (rowsL.length - 1) * (colsL.length - 1), Ef = E.flat();
  return { O, E, X2, df, p: chi2Sf(X2, df), V: Math.sqrt(X2 / (Nn * (Math.min(rowsL.length, colsL.length) - 1))),
    minE: Math.min(...Ef), pctE5: Ef.filter(e => e < 5).length / Ef.length, N: Nn };
}
// Teste exato de Fisher (2 × 2, bilateral)
function fisher2x2([[a, b], [c, d]]) {
  const r1 = a + b, r2 = c + d, c1 = a + c, Nn = r1 + r2, lf = n => lgamma(n + 1);
  const pr = x => Math.exp(lf(r1) + lf(r2) + lf(c1) + lf(Nn - c1) - lf(Nn) - lf(x) - lf(r1 - x) - lf(c1 - x) - lf(r2 - c1 + x));
  const p0 = pr(a); let p = 0;
  for (let x = Math.max(0, c1 - r2); x <= Math.min(r1, c1); x++) { const q = pr(x); if (q <= p0 * (1 + 1e-9)) p += q; }
  return Math.min(1, p);
}
// Correlação de Spearman (Pearson sobre os postos; p pela distribuição t com n − 2 g.l.)
function spearman(x, y) {
  const a = ranks(x).r, b = ranks(y).r, ma = mean(a), mb = mean(b);
  let sxy = 0, sxx = 0, syy = 0; a.forEach((v, i) => { sxy += (v - ma) * (b[i] - mb); sxx += (v - ma) ** 2; syy += (b[i] - mb) ** 2; });
  const rho = sxy / Math.sqrt(sxx * syy), n = x.length, t = rho * Math.sqrt((n - 2) / (1 - rho * rho));
  return { rho, p: tSf2(t, n - 2) };
}
// Lilliefors (Kolmogorov-Smirnov com média e desvio-padrão estimados); valor crítico a 5 % ≈ 0,886/√n
function lilliefors(a) {
  const n = a.length, m = mean(a), s = sd(a), v = [...new Set(a)].sort((x, y) => x - y); let D = 0, cum = 0;
  for (const x of v) { const F = normCdf((x - m) / s), before = cum / n; cum += a.filter(y => y === x).length; D = Math.max(D, Math.abs(cum / n - F), Math.abs(before - F)); }
  return { D, crit: 0.886 / Math.sqrt(n) };
}
const skew = a => { const m = mean(a), s = sd(a), n = a.length; return n / ((n - 1) * (n - 2)) * a.reduce((t, x) => t + ((x - m) / s) ** 3, 0); };
// Levene (versão de Brown-Forsythe, desvios à mediana): homogeneidade das variâncias
function levene(groups) {
  const z = groups.map(g => { const md = median(g); return g.map(x => Math.abs(x - md)); });
  const all_ = z.flat(), Nn = all_.length, k = groups.length, gm = mean(all_);
  const ssb = z.reduce((s, g) => s + g.length * (mean(g) - gm) ** 2, 0), ssw = z.reduce((s, g) => { const m = mean(g); return s + g.reduce((t, x) => t + (x - m) ** 2, 0); }, 0);
  const F = (ssb / (k - 1)) / (ssw / (Nn - k));
  return { F, d1: k - 1, d2: Nn - k, p: fSf(F, k - 1, Nn - k) };
}
// t de Welch (confirmação paramétrica)
function welch(a, b) {
  const va = sd(a) ** 2 / a.length, vb = sd(b) ** 2 / b.length, t = (mean(a) - mean(b)) / Math.sqrt(va + vb);
  const df = (va + vb) ** 2 / (va ** 2 / (a.length - 1) + vb ** 2 / (b.length - 1));
  return { t, df, p2: tSf2(t, df) };
}
const fp = p => p < 0.001 ? '< 0,001' : f(p, 3);
const sig = p => p < 0.05 ? '**sim**' : 'não';

// ---------- Variáveis auxiliares ----------
const P19 = D.map(r => num(r, C.P19));
const P9_ORD = { 'Não me deslocaria': 0, 'Até 5 minutos': 1, '6 a 10 minutos': 2, '11 a 20 minutos': 3, '21 a 30 minutos': 4, 'Mais de 30 minutos': 5 };
const by = (cond, j = C.P19) => D.filter(cond).map(r => num(r, j));
const idade3 = r => ['18 a 24', '25 a 34'].includes(r[C.P23]) ? '18–34' : ['35 a 44', '45 a 54'].includes(r[C.P23]) ? '35–54' : '55+';
const pagar3 = r => r[C.P13].startsWith('Na app') ? 'Na app' : r[C.P13].startsWith('Ao produtor') ? 'Na recolha' : 'Indiferente';
const papel3 = r => r[C.P29].startsWith('Sou') ? 'Principal' : r[C.P29].startsWith('Partilho') ? 'Partilha' : 'Não faz';
const zona3 = r => r[C.P26].split(' ')[0];

// =====================================================================
// §11.2 Testes de hipóteses
// =====================================================================
h('## TESTES DE HIPÓTESES');

h('### Pressupostos: normalidade (Lilliefors) das escalas 1–5');
out.push('| Variável | Assimetria | D | Valor crítico (5 %) | Normal? |', '|---|---|---|---|---|');
for (const [nome, j] of escalas) { const a = D.map(r => num(r, j)), L = lilliefors(a); out.push(`| ${nome} | ${f(skew(a))} | ${f(L.D, 3)} | ${f(L.crit, 3)} | ${L.D > L.crit ? 'não' : 'sim'} |`); }
out.push('', '| P19 por grupo | n | D | Valor crítico | Normal? |', '|---|---|---|---|---|');
for (const [nome, cond] of [['Urbana', r => zona3(r) === 'Urbana'], ['Rural', r => zona3(r) === 'Rural'], ['Comprou a produtor', r => r[C.P4] === 'Sim'], ['Não comprou', r => r[C.P4] === 'Não'], ['Com horta', r => r[C.P5] === 'Sim'], ['Sem horta', r => r[C.P5] === 'Não']]) {
  const a = by(cond), L = lilliefors(a); out.push(`| ${nome} | ${a.length} | ${f(L.D, 3)} | ${f(L.crit, 3)} | ${L.D > L.crit ? 'não' : 'sim'} |`);
}
h('### Pressupostos: homogeneidade das variâncias de P19 (Levene, Brown-Forsythe)');
out.push('| Grupos | DP de cada grupo | F | p | Variâncias iguais? |', '|---|---|---|---|---|');
for (const [nome, gs] of [['Urbana / Rural', [by(r => zona3(r) === 'Urbana'), by(r => zona3(r) === 'Rural')]], ['Comprou / Não comprou', [by(r => r[C.P4] === 'Sim'), by(r => r[C.P4] === 'Não')]], ['Com / Sem horta', [by(r => r[C.P5] === 'Sim'), by(r => r[C.P5] === 'Não')]], ['Pagamento (3 grupos)', ['Na app', 'Indiferente', 'Na recolha'].map(g => by(r => pagar3(r) === g))]]) {
  const L = levene(gs); out.push(`| ${nome} | ${gs.map(g => f(sd(g))).join(' / ')} | F(${L.d1}, ${L.d2}) = ${f(L.F)} | ${fp(L.p)} | ${L.p >= 0.05 ? 'sim' : 'não'} |`);
}

h('### H1–H6 (passos do teste)');
{ // H1 / QI11
  const w = wilcoxon(P19.map(x => x - 3)), m = icMedia(P19), z = (m.m - 3) / (m.s / Math.sqrt(N));
  out.push(`H1: mediana ${median(P19)}; Wilcoxon W+ = ${f(w.W, 1)}, n sem empates com 3 = ${w.n}, z = ${f(w.z)}, p unilateral = ${fp(pUni(w.z))}, r = ${f(w.r)}`);
  out.push(`H1 (confirmação): z = (X̄ − 3)/(s/√n) = ${f(z)}; p unilateral = ${fp(pUni(z))}; valor crítico z(0,95) = 1,645`);
}
const H234 = [
  ['H2 Urbana vs Rural (bilateral)', r => zona3(r) === 'Urbana', r => zona3(r) === 'Rural', 'bi'],
  ['H3 Comprou vs Não comprou (unilateral: comprou > não)', r => r[C.P4] === 'Sim', r => r[C.P4] === 'Não', 'gt'],
  ['H4 Com horta vs Sem horta (unilateral: com < sem)', r => r[C.P5] === 'Sim', r => r[C.P5] === 'Não', 'lt'],
];
for (const [nome, g1, g2, alt] of H234) {
  const a = by(g1), b = by(g2), mw = mannWhitney(a, b), we = welch(a, b);
  const p = alt === 'bi' ? pBi(mw.z) : alt === 'gt' ? pUni(mw.z) : 1 - pUni(mw.z);
  const pw = alt === 'bi' ? we.p2 : (alt === 'gt' ? we.t > 0 : we.t < 0) ? we.p2 / 2 : 1 - we.p2 / 2;
  out.push(`${nome}: n = ${a.length}/${b.length}; medianas ${median(a)}/${median(b)}; médias ${f(mean(a))}/${f(mean(b))}; Mann-Whitney U = ${f(mw.U, 1)}, z = ${f(mw.z)}, p = ${fp(p)}, r = ${f(mw.r)} | Welch t(${f(we.df, 1)}) = ${f(we.t)}, p = ${fp(pw)}`);
  // Testes das aulas (n ≥ 30 ou σ² ≈ s²): z à diferença de médias e z à diferença de proporções de interessados (p agrupado)
  { const zm = (mean(a) - mean(b)) / Math.sqrt(sd(a) ** 2 / a.length + sd(b) ** 2 / b.length);
    const x1 = a.filter(x => x >= 4).length, x2 = b.filter(x => x >= 4).length, pp = (x1 + x2) / (a.length + b.length);
    const zp = (x1 / a.length - x2 / b.length) / Math.sqrt(pp * (1 - pp) * (1 / a.length + 1 / b.length));
    const pz = z => alt === 'bi' ? pBi(z) : alt === 'gt' ? pUni(z) : normCdf(z);
    out.push(`   z diferença de médias = ${f(zm)}, p = ${fp(pz(zm))} | % interessados ${pc(x1 / a.length)} / ${pc(x2 / b.length)}: z diferença de proporções = ${f(zp)}, p = ${fp(pz(zp))}`); }
  // Potência (aproximação normal, α = 5 % bilateral): diferença mínima detetável com 80 % e potência para a diferença observada
  const se = Math.sqrt(sd(a) ** 2 / a.length + sd(b) ** 2 / b.length), dObs = Math.abs(mean(a) - mean(b));
  out.push(`   diferença mínima detetável (80 %) = ${f((1.959964 + 0.841621) * se)}; potência para a diferença observada (${f(dObs)}) = ${pc(normCdf(dObs / se - 1.959964))}`);
}
for (const [nome, cond, alt] of [['H5 Aceita > 10 min (H1: p < 0,5)', r => P9mais10.includes(r[C.P9]), 'lt'], ['H6 Aceita a taxa (H1: p > 0,5)', r => r[C.P14] === 'Sim', 'gt']]) {
  const x = D.filter(cond).length, p = x / N, z = (p - 0.5) / Math.sqrt(0.25 / N);
  out.push(`${nome}: p̂ = ${pc(p, 1)}; z = ${f(z)}; p unilateral = ${fp(alt === 'lt' ? normCdf(z) : pUni(z))}; valor crítico ${alt === 'lt' ? '−' : ''}1,645`);
}

h('### QI1 Acesso a horta (P5) × compra direta a produtor (P4)');
{ const t = crosstab(D.map(r => r[C.P5]), D.map(r => r[C.P4]), ['Sim', 'Não'], ['Sim', 'Não']);
  out.push(`Linhas P5 Sim/Não × colunas P4 Sim/Não: ${JSON.stringify(t.O)}; χ²(${t.df}) = ${f(t.X2)}, p = ${fp(t.p)}, V = ${f(t.V)}, E mín = ${f(t.minE, 1)}; Fisher p = ${fp(fisher2x2(t.O))}`);
  out.push(`   % que comprou a produtor: com horta ${pc(t.O[0][0] / (t.O[0][0] + t.O[0][1]))}, sem horta ${pc(t.O[1][0] / (t.O[1][0] + t.O[1][1]))}`); }

h('### QI2 Friedman: os 8 fatores de P8 têm a mesma importância?');
{ const rows = D.map(r => C.P8.map(j => num(r, j))), fr = friedman(rows);
  out.push(`Q = ${f(fr.Q)}; g.l. = ${fr.df}; p = ${fp(fr.p)}; W de Kendall = ${f(fr.W, 3)}`);
  const ord = P8_ITENS.map((t, i) => [t, i, fr.meanRank[i]]).sort((a, b) => b[2] - a[2]);
  out.push('| Fator | Posto médio | Média |', '|---|---|---|'); ord.forEach(([t, i, mr]) => out.push(`| ${t} | ${f(mr)} | ${f(mean(rows.map(r => r[i])))} |`));
  out.push('', 'Pares significativos (Wilcoxon emparelhado, Bonferroni × 28):');
  const ns = [];
  for (let a = 0; a < 8; a++) for (let b = a + 1; b < 8; b++) {
    const w = wilcoxon(rows.map(r => r[ord[a][1]] - r[ord[b][1]])), padj = Math.min(1, pBi(w.z) * 28);
    (padj < 0.05 ? out : ns).push(`- ${ord[a][0]} > ${ord[b][0]}: z = ${f(w.z)}, p ajustado = ${fp(padj)}`);
  }
  out.push('', `Pares NÃO significativos (${ns.length} de 28):`, ...ns); }

h('### QI3 Importância (P8) > satisfação (P7) no mesmo atributo (Wilcoxon emparelhado, unilateral)');
for (const [nome, i8, i7] of [['Frescura', 1, 0], ['Preço', 0, 2], ['Origem', 2, 3]]) {
  const d = D.map(r => num(r, C.P8[i8]) - num(r, C.P7[i7])), w = wilcoxon(d);
  out.push(`${nome}: lacuna média ${f(mean(d))}; % com importância > satisfação ${pc(d.filter(x => x > 0).length / N)}; z = ${f(w.z)}, p = ${fp(pUni(w.z))}, r = ${f(w.r)}`);
}

h('### QI5 Tempo máximo de deslocação (P9) × transporte (P11): a pé vs carro ou mota');
{ const a = D.filter(r => r[C.P11] === 'A pé').map(r => P9_ORD[r[C.P9]]), b = D.filter(r => r[C.P11] === 'Carro ou mota').map(r => P9_ORD[r[C.P9]]), mw = mannWhitney(a, b);
  const aceit = g => pc(g.filter(x => x >= 3).length / g.length);
  out.push(`n = ${a.length}/${b.length}; classe mediana ${Object.keys(P9_ORD)[median(a)]} / ${Object.keys(P9_ORD)[median(b)]}; % > 10 min ${aceit(a)} / ${aceit(b)}; % ≤ 5 min ${pc(a.filter(x => x <= 1).length / a.length)} / ${pc(b.filter(x => x <= 1).length / b.length)}; U = ${f(mw.U, 1)}, z = ${f(mw.z)}, p = ${fp(pBi(mw.z))}, r = ${f(mw.r)}`); }

h('### QI6 Forma de recolha (P10) × zona (P26)');
{ const rec = r => r[C.P10].startsWith('Num ponto') ? 'Ponto' : r[C.P10].startsWith('É-me') ? 'Indiferente' : r[C.P10].startsWith('Em casa') ? 'Casa produtor' : 'Só entrega';
  for (const [nomeZ, zf, zl] of [['3 zonas', zona3, ['Urbana', 'Suburbana', 'Rural']], ['Urbana vs não urbana', r => zona3(r) === 'Urbana' ? 'Urbana' : 'Não urbana', ['Urbana', 'Não urbana']]])
    for (const [nomeR, rf, rl] of [['4 categorias', rec, ['Ponto', 'Indiferente', 'Casa produtor', 'Só entrega']], ['3 categorias (casa do produtor + só entrega juntas)', r => ['Casa produtor', 'Só entrega'].includes(rec(r)) ? 'Outra' : rec(r), ['Ponto', 'Indiferente', 'Outra']]]) {
      const t = crosstab(D.map(rf), D.map(zf), rl, zl);
      out.push(`${nomeR} × ${nomeZ}: ${JSON.stringify(t.O)}; χ²(${t.df}) = ${f(t.X2)}, p = ${fp(t.p)}, V = ${f(t.V)}; E mín = ${f(t.minE, 1)}; células com E < 5: ${pc(t.pctE5)}`);
    } }

h('### QI8 Aceitação da taxa (P14) × forma de pagamento (P13)');
{ const t = crosstab(D.map(r => r[C.P14]), D.map(pagar3), ['Sim', 'Não'], ['Na app', 'Indiferente', 'Na recolha']);
  out.push(`${JSON.stringify(t.O)}; χ²(${t.df}) = ${f(t.X2)}, p = ${fp(t.p)}, V = ${f(t.V)}; E mín = ${f(t.minE, 1)}; células com E < 5: ${pc(t.pctE5)}`);
  out.push(`   % que aceita a taxa: ${['Na app', 'Indiferente', 'Na recolha'].map((g, j) => `${g} ${pc(t.O[0][j] / (t.O[0][j] + t.O[1][j]))}`).join(', ')}`); }

const kwOut = (nome, labels, gs) => {
  const k = kruskal(gs);
  out.push(`${nome}: ${labels.map((l, i) => `${l} n = ${gs[i].length}, mediana ${median(gs[i])}, média ${f(mean(gs[i]))}`).join('; ')}`);
  out.push(`   Kruskal-Wallis H(${k.df}) = ${f(k.H)}, p = ${fp(k.p)}, ε² = ${f(k.eps2, 3)}`);
  if (k.p < 0.05) k.dunn.forEach(d => out.push(`   Dunn ${labels[d.i]} vs ${labels[d.j]}: z = ${f(d.z)}, p ajustado = ${fp(d.p)}`));
};
h('### QI9 Confiança em pagar antecipadamente (P15, 1.º item) × forma de pagamento (P13)');
kwOut('P15a', ['Na app', 'Indiferente', 'Na recolha'], ['Na app', 'Indiferente', 'Na recolha'].map(g => by(r => pagar3(r) === g, C.P15[0])));

h('### QI10 e QI12 Fatores associados ao interesse (Spearman com P19)');
{ const fat = [...P7_ITENS.map((t, i) => [`P7 Satisfação: ${t}`, C.P7[i]]), ...P8_ITENS.map((t, i) => [`P8 Importância: ${t}`, C.P8[i]]), ...P15_ITENS.map((t, i) => [`P15 ${t}`, C.P15[i]]), ...P17_ITENS.map((t, i) => [`P17 ${t}`, C.P17[i]])];
  out.push(`| Fator | ρ | p | Significativo a 5 % | Significativo com Bonferroni (α = 0,05/${fat.length}) |`, '|---|---|---|---|---|');
  fat.map(([t, j]) => [t, spearman(P19, D.map(r => num(r, j)))]).sort((a, b) => b[1].rho - a[1].rho)
    .forEach(([t, s]) => out.push(`| ${t} | ${f(s.rho)} | ${fp(s.p)} | ${sig(s.p)} | ${sig(s.p * fat.length)} |`));
  const s20 = spearman(P19, D.map(r => num(r, C.P20))); out.push(`P19 × P20: ρ = ${f(s20.rho)}, p = ${fp(s20.p)}`); }

h('### QI13 Motivo para não usar (P22) × interessado (P19 ≥ 4)');
{ const mot = r => { const v = r[C.P22]; return v.startsWith('Não vejo') ? 'Sem obstáculo' : (v.startsWith('Prefiro') || v.startsWith('Não quero')) ? 'Hábito' : 'Barreira da app'; };
  const t = crosstab(D.map(mot), D.map(r => num(r, C.P19) >= 4 ? 'Interessado' : 'Não interessado'), ['Sem obstáculo', 'Hábito', 'Barreira da app'], ['Interessado', 'Não interessado']);
  out.push(`Linhas Sem obstáculo / Hábito (prefiro locais + não quero app) / Barreira da app (deslocação, preço, variedade, taxa, confiança; juntas porque com 4 categorias 25 % das células tinham E < 5) × colunas Interessado / Não interessado (P19 ≤ 3)`);
  out.push(`${JSON.stringify(t.O)}; χ²(${t.df}) = ${f(t.X2)}, p = ${fp(t.p)}, V = ${f(t.V)}; E mín = ${f(t.minE, 1)}; células com E < 5: ${pc(t.pctE5)}`); }

h('### QI14, QI17, QI18 Interesse (P19) por segmento');
kwOut('QI14 Zona', ['Urbana', 'Suburbana', 'Rural'], ['Urbana', 'Suburbana', 'Rural'].map(g => by(r => zona3(r) === g)));
kwOut('QI17 Idade', ['18–34', '35–54', '55+'], ['18–34', '35–54', '55+'].map(g => by(r => idade3(r) === g)));
kwOut('QI17 Papel nas compras', ['Principal', 'Partilha', 'Não faz'], ['Principal', 'Partilha', 'Não faz'].map(g => by(r => papel3(r) === g)));
kwOut('QI18 Forma de pagamento', ['Na app', 'Indiferente', 'Na recolha'], ['Na app', 'Indiferente', 'Na recolha'].map(g => by(r => pagar3(r) === g)));
for (const [nome, g1, g2] of [
  ['QI17 Género: Feminino vs Masculino', r => r[C.P24] === 'Feminino', r => r[C.P24] === 'Masculino'],
  ['QI17 Região: Norte (incl. AMP) vs resto', r => r[C.P25].includes('Porto') || r[C.P25].startsWith('Norte'), r => !(r[C.P25].includes('Porto') || r[C.P25].startsWith('Norte'))],
  ['QI17 Local de compra: super/hiper vs outros', r => r[C.P1].startsWith('Hiper'), r => !r[C.P1].startsWith('Hiper')],
  ['QI17 Papel: Principal vs Partilha', r => papel3(r) === 'Principal', r => papel3(r) === 'Partilha'],
  ['QI17 Idade: 35–54 vs 55+', r => idade3(r) === '35–54', r => idade3(r) === '55+'],
  ['QI18 Pagamento: app ou indiferente vs recolha', r => pagar3(r) !== 'Na recolha', r => pagar3(r) === 'Na recolha'],
]) { const a = by(g1), b = by(g2), mw = mannWhitney(a, b); out.push(`${nome}: n = ${a.length}/${b.length}; médias ${f(mean(a))}/${f(mean(b))}; U = ${f(mw.U, 1)}, z = ${f(mw.z)}, p = ${fp(pBi(mw.z))}, r = ${f(mw.r)}`); }

console.log(`Amostra válida: n = ${N} (de ${all.length} respostas)`);
console.log(out.join('\n'));
