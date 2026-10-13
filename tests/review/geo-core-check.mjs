// S9 review helper for Geography core (Paper 2): recomputes the arithmetic written in the content.
// Read-only: loads content/geo/core/** directly, prints a report to stdout, writes nothing.
// Run from the repository root: node --experimental-strip-types tests/review/geo-core-check.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const core = path.join(root, 'content', 'geo', 'core');
const listTs = (dir) => fs.readdirSync(dir).filter((f) => f.endsWith('.ts')).sort().map((f) => path.join(dir, f));

const questions = [];
for (const f of listTs(path.join(core, 'questions'))) {
  const m = await import(f);
  questions.push(...m.questions);
}
const cases = [];
for (const f of listTs(path.join(core, 'cases'))) {
  const m = await import(f);
  cases.push(...m.cases);
}
const paperMod = await import(path.join(core, 'papers.ts'));

// ---- 1. Arithmetic: "<expression> = <result>" inside markscheme, model answers, prompts and the answer field ----
// Normalise EN and RU number formats: EN "1,850,000" and "1 850 000", RU "23,6" and "1 850 000".
const NUM = '\\d{1,3}(?:[ , ]\\d{3})+(?:[.,]\\d+)?|\\d+(?:[.,]\\d+)?';
const SYM = '[+\\-−×÷/*()\\s]';
const eqRe = new RegExp('((?:\\(|' + NUM + '|' + '\\b)' + '(?:[ ]*(?:[+\\-−×÷/*]|\\()[ ]*(?:' + NUM + ')[ )]*)+)\\s*=\\s*(' + '−?' + NUM + ')', 'g');

function toNumber(raw, lang) {
  let s = String(raw).replace(/[  ]/g, '').replace('−', '-');
  if (lang === 'ru' || /\d,\d{1,2}$/.test(s) && !/\d,\d{3}/.test(s)) s = s.replace(/,/g, '.');
  else s = s.replace(/,(?=\d{3}(\D|$))/g, '');
  return Number(s);
}
function balance(expr) {
  // The regex can start or stop one bracket early; repair the bracket count before evaluating.
  let open = (expr.match(/\(/g) || []).length;
  let close = (expr.match(/\)/g) || []).length;
  let e = expr;
  while (close > open) { e = '(' + e; open++; }
  while (open > close) { e = e + ')'; close++; }
  return e;
}
function evalExpr(expr, lang) {
  // Replace numbers (with separators) by placeholders, operators by JS equivalents, then evaluate safely.
  let e = balance(expr).replace(new RegExp(NUM, 'g'), (m) => String(toNumber(m, lang)));
  e = e.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
  if (!/^[\d+\-*/().\s]+$/.test(e)) return NaN;
  try { return Function('"use strict"; return (' + e + ');')(); } catch { return NaN; }
}
function decimals(raw) {
  const m = String(raw).match(/[.,](\d+)$/);
  return m ? m[1].length : 0;
}

const eqFindings = [];
let eqCount = 0;
function scanText(id, field, lang, text) {
  if (!text) return;
  let m;
  eqRe.lastIndex = 0;
  while ((m = eqRe.exec(text)) !== null) {
    const lhs = m[1].trim();
    const rhsRaw = m[2];
    if (!/[+\-−×÷/*]/.test(lhs)) continue; // plain "a = b" statements are not arithmetic
    eqCount++;
    let value = evalExpr(lhs, lang);
    const rhs = toNumber(rhsRaw, lang);
    const d = decimals(rhsRaw);
    const tol = 0.5 * Math.pow(10, -d) + 1e-9;
    // A ratio shown as a percentage ("= 66.7%" or a ratio with "× 100" missing in the text) is also accepted.
    const isPercent = text.slice(m.index + m[0].length, m.index + m[0].length + 2).trimStart().startsWith('%');
    const near = (v) => Number.isFinite(v) && Math.abs(v - rhs) <= tol * 1.0001;
    const ok = near(value) || (isPercent && near(value * 100));
    eqFindings.push({ id, field, lang, lhs, rhs: rhsRaw, value: Number.isFinite(value) ? Number(value.toFixed(4)) : 'n/a', ok });
  }
}
const cleanText = (s) => s.replace(/−/g, '−');

for (const q of questions) {
  for (const lang of ['en', 'ru']) {
    scanText(q.id, 'markscheme', lang, q.markscheme?.[lang] && cleanText(q.markscheme[lang]));
    scanText(q.id, 'model', lang, q.model?.[lang] && cleanText(q.model[lang]));
    scanText(q.id, 'prompt', lang, q.prompt?.[lang] && cleanText(q.prompt[lang]));
  }
}
for (const c of cases) {
  for (const lang of ['en', 'ru']) scanText(c.id, 'case-facts', lang, c.facts?.[lang] && cleanText(c.facts[lang]));
}

console.log('## 1. Arithmetic in question and case text');
console.log(`equations found: ${eqCount}; mismatches: ${eqFindings.filter((f) => !f.ok).length}; not evaluable: ${eqFindings.filter((f) => f.value === 'n/a').length}`);
for (const f of eqFindings.filter((x) => !x.ok)) {
  console.log(`MISMATCH ${f.id} [${f.field}/${f.lang}]: ${f.lhs} = ${f.rhs}  (computed ${f.value})`);
}
console.log("all equations (id | field/lang | lhs = rhs | computed | ok):");
for (const f of eqFindings) console.log(`  ${f.id} | ${f.field}/${f.lang} | ${f.lhs} = ${f.rhs} | ${f.value} | ${f.ok ? "ok" : "CHECK"}`);
console.log('');

// ---- 2. Answer field: each semicolon-separated number in question.answer must appear in the markscheme text ----
console.log('## 2. Answer field vs markscheme');
for (const q of questions.filter((x) => x.answer)) {
  const ms = (q.markscheme.en + ' ' + q.markscheme.ru).replace(/ /g, ' ');
  const parts = String(q.answer).split(';').map((s) => s.trim()).filter(Boolean);
  const missing = parts.filter((p) => {
    const n = toNumber(p, 'en');
    const forms = [p, p.replace('.', ','), String(n), n.toFixed(decimals(p)).replace('.', ','), n.toFixed(decimals(p))];
    return !forms.some((x) => ms.includes(x));
  });
  console.log(`${q.id} answer="${q.answer}" parts=${parts.length} not-found-in-markscheme=${missing.length ? missing.join(' | ') : 'none'}`);
}
console.log('');

// ---- 3. Marks: sum of point counts stated in the markscheme vs the marks field (structured questions only) ----
console.log('## 3. Marks stated in markscheme vs marks field (section A and B)');
for (const q of questions.filter((x) => x.section === 'A' || x.section === 'B')) {
  const en = q.markscheme.en;
  const points = [...en.matchAll(/(\d+) marks?:/g)].reduce((s, m) => s + Number(m[1]), 0);
  const maxim = en.match(/maximum (\d+)/i);
  const cap = maxim ? Number(maxim[1]) : null;
  const want = q.marks;
  const effective = cap !== null ? Math.min(points, cap) : points;
  if (effective !== want && !(points === 0)) {
    console.log(`CHECK ${q.id}: marks=${want}, points listed=${points}${cap !== null ? ', maximum=' + cap : ''}`);
  }
}
console.log('(only mismatches printed; nothing printed means every structured item states points that match its marks)');
console.log('');

// Section B: the part marks in square brackets of the prompt must add up to the marks field.
console.log('## 3b. Section B part marks in the prompt');
for (const q of questions.filter((x) => x.section === 'B')) {
  const parts = [...q.prompt.en.matchAll(/\[(\d+)(?: marks?)?\]/g)].map((m) => Number(m[1]));
  const sum = parts.reduce((s, n) => s + n, 0);
  if (sum !== q.marks) console.log(`CHECK ${q.id}: part marks ${JSON.stringify(parts)} sum ${sum}, marks field ${q.marks}`);
}
console.log('(nothing printed: every Section B prompt has part marks that add up to its marks)');
console.log('');

// ---- 4. Paper guide: marks and minutes of every set ----
console.log('## 4. Paper guide sets');
const byId = new Map(questions.map((q) => [q.id, q]));
for (const guide of paperMod.papers) {
  const sum = (ids) => ids.reduce((s, id) => s + (byId.get(id)?.marks ?? 0), 0);
  console.log(`${guide.paper}: marks ${guide.marks}, minutes ${guide.minutes}`);
  for (const set of guide.timedSets) {
    const bySection = {};
    for (const id of set.questionIds) {
      const q = byId.get(id);
      if (!q) { console.log(`  MISSING ${id} in ${set.id}`); continue; }
      bySection[q.section] = (bySection[q.section] || 0) + q.marks;
    }
    const total = sum(set.questionIds);
    console.log(`  ${set.id}: total ${total} (${JSON.stringify(bySection)}) minutes ${set.minutes} ${total === guide.marks ? 'OK' : 'NOT 50'}`);
  }
}
