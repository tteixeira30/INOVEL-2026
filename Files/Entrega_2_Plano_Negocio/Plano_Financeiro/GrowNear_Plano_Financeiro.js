// GrowNear — Valores do plano financeiro que vêm do inquérito.
// Os mapas (previsão mensal, DR, balanço, tesouraria, VAL) estão em GrowNear_Plano_Financeiro.xlsx, com fórmulas vivas.
// Este script calcula a partir do CSV os valores que entram na folha Pressupostos do Excel e verifica-os.
// Uso: node GrowNear_Plano_Financeiro.js   (sem dependências)

const fs = require('fs');
const path = require('path');

// ---------- Leitura do CSV (igual a ../Analise_Inquerito/GrowNear_Analise_Estatistica.js) ----------
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
const csv = path.join(__dirname, '..', '..', 'Entrega_1_Ideia_Estudo_Mercado', 'Estudo_Mercado', 'GrowNear_Inquerito_Respostas.csv');
const C = { P12: 26, P13: 27, P19: 36, P20: 37, P21: 38, P25: 42 };
const D = parseCsv(fs.readFileSync(csv, 'utf8')).slice(1).filter(r => r[C.P25] !== 'Resido fora de Portugal');
const n = (r, j) => Number(r[j]);

// ---------- 1. Grupos de compradores (cenários) ----------
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
  const p = G.length / D.length, se = Math.sqrt(p * (1 - p) / D.length);
  grupo[g] = { n: G.length, quota: p, icInf: p - 1.96 * se, icSup: p + 1.96 * se,
               freq: mean(G.map(r => P21_MES[r[C.P21]])), ticket: mean(G.map(r => P12_PM[r[C.P12]])) };
}
const TICKET = mean(D.map(r => P12_PM[r[C.P12]]));                              // 19,40 € (análise §11.1)
const PAGA_APP = D.filter(r => r[C.P13].startsWith('Na app')).length / D.length; // 15,9 % (análise §8)

// ---------- 2. Taxa e custo de pagamento por reserva (taxa com IVA incluído: decisão de 18/11, Q4) ----------
const taxa = v => 0.50 + 0.05 * v;                              // D16
const STRIPE = { pct: 0.015, fixo: 0.25 };                      // Stripe, preços para Portugal (cartões padrão do EEE)
const IVA = 0.23;
const bruta = taxa(TICKET), liquida = bruta / (1 + IVA);
const custoPag = (1 - PAGA_APP) * (STRIPE.fixo + STRIPE.pct * bruta) + PAGA_APP * (STRIPE.fixo + STRIPE.pct * (bruta + TICKET));

// ---------- Saída ----------
const fmt = (x, k = 0) => x.toLocaleString('pt-PT', { minimumFractionDigits: k, maximumFractionDigits: k });
const eur = (x, k = 2) => fmt(x, k) + ' €';
const pc = x => fmt(100 * x, 1) + ' %';
const out = [];
out.push(`Amostra válida: n = ${D.length}`, '');
out.push('## 1. Cenários de procura (folha Pressupostos: Quota e Freq_declarada)');
out.push('| Grupo | n | Quota | IC 95 % da quota | Reservas/mês por comprador (P21) | Gasto por encomenda (P12) |', '|---|---|---|---|---|---|');
for (const [g, v] of Object.entries(grupo))
  out.push(`| ${g} | ${v.n} | ${pc(v.quota)} | [${pc(v.icInf)} ; ${pc(v.icSup)}] | ${fmt(v.freq, 2)} | ${eur(v.ticket)} |`);
out.push(`| amostra toda | ${D.length} | 100 % | | ${fmt(mean(D.map(r => P21_MES[r[C.P21]])), 2)} | ${eur(TICKET)} |`);
out.push('', 'Cenários: pessimista = limite inferior do IC dos entusiastas; referência = entusiastas; otimista = núcleo.');
out.push('', '## 2. Receita e custo de pagamento por reserva (Ticket, Pct_paga_app)');
out.push('| Rubrica | Valor |', '|---|---|');
out.push(`| Gasto médio por encomenda | ${eur(TICKET)} |`);
out.push(`| Prefere pagar o produto na app (P13) | ${pc(PAGA_APP)} |`);
out.push(`| Taxa paga pelo comprador (0,50 € + 5 %, IVA incluído) | ${eur(bruta)} |`);
out.push(`| Receita da GrowNear sem IVA | ${eur(liquida)} |`);
out.push(`| Comissão Stripe média por reserva | ${eur(custoPag)} (${pc(custoPag / liquida)} da receita sem IVA) |`);
out.push('', 'O Stripe Connect, os cancelamentos e os restantes custos estão no Excel (folha Mensal).');

// Verificações: os valores que já estão no repositório têm de bater certo.
const ok = (c, msg) => { if (!c) throw new Error('Verificação falhou: ' + msg); };
ok(Math.abs(TICKET - 19.40) < 0.005, 'gasto médio 19,40 € (análise §11.1)');
ok(Math.abs(bruta - 1.47) < 0.005, 'taxa 1,47 € por encomenda (análise §11.1)');
ok(Math.abs(grupo.entusiastas.quota - 0.159) < 0.001 && Math.abs(grupo.nucleo.quota - 0.451) < 0.001, 'quotas 15,9 % e 45,1 % (análise §11.1)');
ok(Math.abs(grupo.entusiastas.icInf - 0.092) < 0.001, 'limite inferior do IC dos entusiastas 9,2 % (análise §11.1)');
ok(Math.abs(grupo.entusiastas.freq - 3.44) < 0.005 && Math.abs(grupo.nucleo.freq - 3.10) < 0.005, 'frequências 3,44 e 3,10');
ok(Math.abs(PAGA_APP - 0.159) < 0.001, 'paga na app 15,9 % (análise §8)');
out.push('', 'Verificações contra o repositório e o Excel: OK');
console.log(out.join('\n'));
