// GrowNear — Programa de vendas (previsão mínima), custo por reserva e números de base do plano financeiro.
// Alimenta GrowNear_Plano_Producao.md (§3, §7) e GrowNear_Plano_Financeiro.md.
// Uso: node GrowNear_Plano_Financeiro.js   (sem dependências; lê o CSV do inquérito)
// Valores marcados PRESSUPOSTO não vêm do repositório: estão no compêndio para o grupo validar.

const fs = require('fs');
const path = require('path');

// ---------- Leitura do CSV (igual a GrowNear_Inquerito/GrowNear_Analise_Estatistica.js) ----------
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
const csv = path.join(__dirname, 'GrowNear_Inquerito', 'GrowNear_Inquerito_Respostas.csv');
const C = { P12: 26, P13: 27, P19: 36, P20: 37, P21: 38, P25: 42 };
const D = parseCsv(fs.readFileSync(csv, 'utf8')).slice(1).filter(r => r[C.P25] !== 'Resido fora de Portugal');
const n = (r, j) => Number(r[j]);

// ---------- 1. Dados do inquérito ----------
// P21 em reservas por mês. "Todas as semanas" = 52/12; "Menos de 1 vez" = 0,5 (PRESSUPOSTO: ponto médio prudente).
const P21_MES = { 'Todas as semanas': 52 / 12, '2 a 3 vezes por mês': 2.5, '1 vez por mês': 1, 'Menos de 1 vez por mês': 0.5, 'Não usaria': 0 };
const P12_PM = { 'Menos de 5 €': 2.5, '5 a 9 €': 7.5, '10 a 19 €': 15, '20 a 29 €': 25, '30 € ou mais': 35 }; // como na análise, §11.1
const mensal = ['Todas as semanas', '2 a 3 vezes por mês', '1 vez por mês'];
const grupos = {
  entusiastas: r => n(r, C.P19) === 5 && n(r, C.P20) === 5,                           // cenário de referência (análise §15)
  nucleo: r => n(r, C.P19) >= 4 && n(r, C.P20) >= 4 && mensal.includes(r[C.P21]),   // cenário otimista
};
const mean = a => a.reduce((s, x) => s + x, 0) / a.length;
for (const k of Object.keys(P21_MES).concat(Object.keys(P12_PM)))
  if (!D.some(r => r[C.P21] === k || r[C.P12] === k)) throw new Error(`Categoria sem respostas, verificar texto: ${k}`);
const grupo = {};
for (const [g, cond] of Object.entries(grupos)) {
  const G = D.filter(cond);
  grupo[g] = { n: G.length, quota: G.length / D.length, freq: mean(G.map(r => P21_MES[r[C.P21]])), ticket: mean(G.map(r => P12_PM[r[C.P12]])) };
}
const TICKET = mean(D.map(r => P12_PM[r[C.P12]]));              // 19,40 € (análise §11.1)
const PAGA_APP = D.filter(r => r[C.P13].startsWith('Na app')).length / D.length; // 16 % (análise §8)

// ---------- 2. Receita e custo variável por reserva ----------
const taxa = v => 0.50 + 0.05 * v;                              // D16
const STRIPE = { pct: 0.015, fixo: 0.25 };                      // PRESSUPOSTO: tarifa pública Stripe, cartões do EEE (confirmar)
const IVA = 0.23;                                               // taxa normal no continente; a taxa de 0,50 € + 5 % inclui IVA? (compêndio)
const receita = taxa(TICKET);
// Uma cobrança por reserva: só a taxa, ou taxa + produto quando o comprador paga o produto na app.
const custoPag = (1 - PAGA_APP) * (STRIPE.fixo + STRIPE.pct * receita) + PAGA_APP * (STRIPE.fixo + STRIPE.pct * (receita + TICKET));
const margem = { semIVA: receita - custoPag, comIVA: receita / (1 + IVA) - custoPag };

// ---------- 3. Gastos com pessoal (Plano Organizacional §5.4) ----------
const TSU = 0.2375, MESES = 14;
const bruto = { ano1: 1700 + 1600 + 1300 + 1200 + 1250, ano2: 0, ano3: 0 };
bruto.ano2 = bruto.ano1 + 1200 + 1200;   // + programador júnior + marketing júnior
bruto.ano3 = bruto.ano2 + 1150;          // + técnico administrativo e financeiro
const pessoal = Object.fromEntries(Object.entries(bruto).map(([a, b]) => [a, b * MESES * (1 + TSU)]));
const EMPRESTIMO = 125000;

// ---------- 4. Programa de vendas (cenários) ----------
// PRESSUPOSTOS (compêndio Q1–Q3): agregados por zona, zonas abertas por ano, curva de adoção por idade da zona.
const AGREGADOS_ZONA = 10000;
const ZONAS = [1, 3, 5];                 // zonas ativas no ano 1, 2, 3 (ano 1: 1 zona; ano 2: novas zonas — Plano Org. §1)
const RAMPA = [0.25, 0.60, 0.90];        // fração média, no ano, da quota de maturidade numa zona com 1, 2, 3 anos
function programa(g) {
  const { quota, freq } = grupo[g];
  return ZONAS.map((z, t) => {
    let compradores = 0;
    for (let k = 0; k <= t; k++) {       // zonas abertas no ano k têm idade t − k
      const novas = ZONAS[k] - (k ? ZONAS[k - 1] : 0);
      compradores += novas * AGREGADOS_ZONA * quota * RAMPA[t - k];
    }
    const reservas = compradores * freq * 12;
    return { ano: t + 1, zonas: z, compradores, reservas, receita: reservas * receita };
  });
}

// ---------- Saída ----------
const fmt = (x, k = 0) => x.toLocaleString('pt-PT', { minimumFractionDigits: k, maximumFractionDigits: k });
const eur = (x, k = 0) => fmt(x, k) + ' €';
const pc = x => fmt(100 * x, 1) + ' %';
const out = [];
out.push(`Amostra válida: n = ${D.length}`, '');
out.push('## 1. Dados do inquérito', '| Grupo | n | % da amostra | Reservas/mês por comprador (P21) | Gasto por encomenda (P12) |', '|---|---|---|---|---|');
for (const [g, v] of Object.entries(grupo)) out.push(`| ${g} | ${v.n} | ${pc(v.quota)} | ${fmt(v.freq, 2)} | ${eur(v.ticket, 2)} |`);
out.push(`| amostra toda | ${D.length} | 100 % | ${fmt(mean(D.map(r => P21_MES[r[C.P21]])), 2)} | ${eur(TICKET, 2)} |`);
out.push('', `Prefere pagar o produto na app (P13): ${pc(PAGA_APP)}`);

out.push('', '## 2. Receita e custo variável por reserva (gasto médio de ' + eur(TICKET, 2) + ')');
out.push('| Rubrica | Valor |', '|---|---|');
out.push(`| Taxa de serviço (0,50 € + 5 %) | ${eur(receita, 2)} |`);
out.push(`| Taxa sem IVA, se os 0,50 € + 5 % incluírem IVA a 23 % | ${eur(receita / (1 + IVA), 2)} |`);
out.push(`| Custo de pagamento: só a taxa | ${eur(STRIPE.fixo + STRIPE.pct * receita, 2)} |`);
out.push(`| Custo de pagamento: taxa + produto na app | ${eur(STRIPE.fixo + STRIPE.pct * (receita + TICKET), 2)} |`);
out.push(`| Custo de pagamento médio (${pc(PAGA_APP)} pagam o produto na app) | ${eur(custoPag, 2)} (${pc(custoPag / receita)} da taxa) |`);
out.push(`| Margem por reserva, taxa sem IVA | ${eur(margem.semIVA, 2)} |`);
out.push(`| Margem por reserva, taxa com IVA incluído | ${eur(margem.comIVA, 2)} |`);

out.push('', '## 3. Gastos com pessoal orçamentados (× 14 + TSU 23,75 %)', '| Ano | Bruto/mês | Custo anual |', '|---|---|---|');
for (const a of ['ano1', 'ano2', 'ano3']) out.push(`| ${a.slice(-1)} | ${eur(bruto[a])} | ${eur(pessoal[a])} |`);
out.push('', `Empréstimo ${eur(EMPRESTIMO)} − pessoal do ano 1 ${eur(pessoal.ano1)} = ${eur(EMPRESTIMO - pessoal.ano1)} para os restantes gastos do ano 1.`);

out.push('', '## 4. Ponto crítico: reservas necessárias para cobrir só os gastos com pessoal');
out.push('| Ano | Margem/reserva | Reservas/ano | Reservas/mês | Compradores ativos (freq. dos entusiastas) |', '|---|---|---|---|---|');
for (const [lbl, m] of [['sem IVA', margem.semIVA], ['com IVA incluído', margem.comIVA]])
  for (const a of ['ano1', 'ano2', 'ano3']) {
    const r = pessoal[a] / m;
    out.push(`| ${a.slice(-1)} (${lbl}) | ${eur(m, 2)} | ${fmt(r)} | ${fmt(r / 12)} | ${fmt(r / 12 / grupo.entusiastas.freq)} |`);
  }

out.push('', `## 5. Programa de vendas (PRESSUPOSTOS: ${fmt(AGREGADOS_ZONA)} agregados por zona; zonas ${ZONAS.join('/')}; rampa ${RAMPA.join('/')})`);
for (const g of ['entusiastas', 'nucleo']) {
  out.push('', `### Cenário ${g === 'entusiastas' ? 'de referência (entusiastas, 16 %)' : 'otimista (núcleo, 45 %)'}`);
  out.push('| Ano | Zonas | Compradores ativos (média do ano) | Reservas/ano | Reservas/mês | Taxas cobradas aos compradores | Receita se a taxa incluir IVA | Cobertura do pessoal (margem sem IVA) |', '|---|---|---|---|---|---|---|---|');
  for (const p of programa(g)) {
    const cob = p.reservas * margem.semIVA / pessoal['ano' + p.ano];
    out.push(`| ${p.ano} | ${p.zonas} | ${fmt(p.compradores)} | ${fmt(p.reservas)} | ${fmt(p.reservas / 12)} | ${eur(p.receita)} | ${eur(p.receita / (1 + IVA))} | ${pc(cob)} |`);
  }
}

// DR parcial do cenário de referência: só as linhas com base. Faltam FSE fixos, depreciações, juros e impostos.
out.push('', '## 6. DR parcial e necessidade de financiamento (cenário de referência; antes dos FSE por estimar, depreciações, juros e IRC)');
out.push('| Ano | Prestações de serviços (taxa sem IVA) | Prestações (taxa com IVA incluído) | Custo de pagamentos (FSE) | Gastos com pessoal | Resultado parcial (sem IVA) | Resultado parcial (com IVA incluído) |', '|---|---|---|---|---|---|---|');
let acum = [0, 0];
for (const p of programa('entusiastas')) {
  const pag = p.reservas * custoPag, ps = pessoal['ano' + p.ano];
  const r = [p.receita - pag - ps, p.receita / (1 + IVA) - pag - ps];
  acum = acum.map((a, i) => a + r[i]);
  out.push(`| ${p.ano} | ${eur(p.receita)} | ${eur(p.receita / (1 + IVA))} | ${eur(pag)} | ${eur(ps)} | ${eur(r[0])} | ${eur(r[1])} |`);
}
out.push(`| Acumulado 1–3 | | | | | ${eur(acum[0])} | ${eur(acum[1])} |`);
out.push('', `Salário mensal dos fundadores com TSU (ano 1): ${eur(bruto.ano1 * (1 + TSU))}; nos meses dos subsídios de férias e de Natal, o dobro.`);

// Verificações: os valores que já estão no repositório têm de bater certo.
const ok = (c, msg) => { if (!c) throw new Error('Verificação falhou: ' + msg); };
ok(Math.abs(TICKET - 19.40) < 0.005, 'gasto médio 19,40 € (análise §11.1)');
ok(Math.abs(receita - 1.47) < 0.005, 'taxa 1,47 € por encomenda (análise §11.1)');
ok(Math.round(pessoal.ano1 / 100) === 1221 && Math.round(pessoal.ano2 / 100) === 1637 && Math.round(pessoal.ano3 / 100) === 1836, 'pessoal 122 100 / 163 700 / 183 600 € (Plano Org. §5.4)');
ok(Math.abs(grupo.entusiastas.quota - 0.159) < 0.001 && Math.abs(grupo.nucleo.quota - 0.451) < 0.001, 'quotas 15,9 % e 45,1 % (análise §11.1)');
out.push('', 'Verificações contra o repositório: OK');
console.log(out.join('\n'));
