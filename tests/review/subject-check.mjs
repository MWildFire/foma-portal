#!/usr/bin/env node
// S9 review: read-only checks of one subject that do not need the textbook.
// Run from the repository root:
//   node --experimental-strip-types tests/review/subject-check.mjs [subject]
// Prints a report to stdout. Nothing is written into the repository.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { openContentServer, loadPack } from '../../scripts/lib/load.ts';
import { EXPECTED_HEADINGS, CALLOUT_KINDS } from '../../scripts/lib/mdx.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const subject = process.argv[2] ?? 'eng';
const out = [];
const say = (...parts) => out.push(parts.join(' '));
const section = (title) => say(`\n## ${title}`);

const words = (s = '') => s.trim().split(/\s+/).filter(Boolean).length;
const sentences = (s = '') => s.trim().split(/(?<=[.!?])\s+(?=[A-Z"“(])/).filter(Boolean).length;
const hasCyr = (s = '') => /[А-Яа-яЁё]/.test(s);
const norm = (s = '') => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim().toLowerCase();
const quotesIn = (s = '') => [...s.matchAll(/"([^"\n]{3,})"|“([^”\n]{3,})”/g)].map(m => (m[1] ?? m[2]).replace(/[,.;:!?]+$/, ''));
const countBy = (arr) => arr.reduce((acc, k) => { acc[k] = (acc[k] ?? 0) + 1; return acc; }, {});
const list = (arr, limit = 25) => (arr.length === 0 ? 'none' : `${arr.length}: ${arr.slice(0, limit).join(', ')}${arr.length > limit ? ' …' : ''}`);
const headingsOf = (text) => {
  const body = text.replace(/```[\s\S]*?```/g, '');
  return [...body.matchAll(/^## (.+?)\s*$/gm)].map(m => m[1]);
};

function reviewTerms(p) {
  section(`Terms (${p.terms.length})`);
  const ids = p.terms.map(t => t.id);
  say('duplicate ids:', list(ids.filter((id, i) => ids.indexOf(id) !== i)));
  say('src.kind:', JSON.stringify(countBy(p.terms.map(t => t.src?.kind ?? 'none'))));
  say('src.locator filled:', p.terms.filter(t => t.src?.locator).length);
  say('src.title values:', JSON.stringify([...new Set(p.terms.map(t => t.src?.title))].slice(0, 3)));
  const codes = new Map(p.syllabus.map(s => [s.code, s]));
  say('syllabus code unknown:', list(p.terms.filter(t => !codes.has(t.syllabus)).map(t => t.id)));
  say('papers outside the syllabus item:', list(p.terms.filter(t => {
    const s = codes.get(t.syllabus);
    return s && !(t.papers ?? []).every(x => (s.papers ?? []).includes(x));
  }).map(t => t.id)));
  say('EN def with more than 2 sentences:', list(p.terms.filter(t => sentences(t.def?.en) > 2).map(t => `${t.id}=${sentences(t.def?.en)}`)));
  const enW = p.terms.map(t => words(t.def?.en));
  const ruW = p.terms.map(t => words(t.def?.ru));
  say('EN def words min/max:', Math.min(...enW), Math.max(...enW), '| RU def words min/max:', Math.min(...ruW), Math.max(...ruW));
  say('language rules broken (EN term/def has Cyrillic):', list(p.terms.filter(t => hasCyr(t.term?.en) || hasCyr(t.def?.en)).map(t => t.id)));
  say('language rules broken (RU term/def has no Cyrillic):', list(p.terms.filter(t => !hasCyr(t.term?.ru) || !hasCyr(t.def?.ru)).map(t => t.id)));
  say('RU term does not show the EN term in brackets:', list(p.terms.filter(t => !norm(t.term?.ru).includes(norm(t.term?.en))).map(t => t.id)));
  const defCount = countBy(p.terms.map(t => norm(t.def?.en)));
  say('identical EN definitions:', list(p.terms.filter(t => defCount[norm(t.def?.en)] > 1).map(t => t.id)));
  say('no example:', list(p.terms.filter(t => !t.example).map(t => t.id)), '| no pitfall:', list(p.terms.filter(t => !t.pitfall).map(t => t.id)));
  const used = new Set(p.topics.flatMap(t => t.termIds ?? []));
  say('terms not used by any topic:', list(ids.filter(i => !used.has(i))));
  say('topic termIds missing from terms:', list([...used].filter(i => !ids.includes(i))));
  const pitfalls = p.terms.filter(t => t.pitfall).slice(0, 2).map(t => `${t.id}: ${short(t.pitfall.en, 140)}`);
  say('pitfall samples (EN):', JSON.stringify(pitfalls));
}

const short = (s = '', n = 120) => (s.length > n ? s.slice(0, n) + '…' : s);

function reviewQuestions(p) {
  const qs = p.questions;
  const passages = qs.filter(q => q.paper === 'P1' && !q.id.startsWith('chk-'));
  const bank = qs.filter(q => /^p2-q\d+/.test(q.id));
  const essays = qs.filter(q => q.id.startsWith('p2-essay-'));
  const checks = qs.filter(q => q.id.startsWith('chk-'));
  section(`Questions (${qs.length}): passages P1 ${passages.length}, P2 bank ${bank.length}, P2 essays ${essays.length}, check questions ${checks.length}`);
  say('duplicate question ids:', list(qs.map(q => q.id).filter((id, i, a) => a.indexOf(id) !== i)));
  say('origin values:', JSON.stringify(countBy(qs.map(q => q.origin ?? 'none'))));
  say('command values:', JSON.stringify(countBy(qs.map(q => q.command ?? 'none'))));
  say('marks by group: P1 passages', JSON.stringify(countBy(passages.map(q => q.marks))), '| P2 bank', JSON.stringify(countBy(bank.map(q => q.marks))), '| essays', JSON.stringify(countBy(essays.map(q => q.marks))), '| checks', JSON.stringify(countBy(checks.map(q => q.marks))));
  say('minutes by group: P1 passages', JSON.stringify(countBy(passages.map(q => q.minutes))), '| P2 bank', JSON.stringify(countBy(bank.map(q => q.minutes))), '| essays', JSON.stringify(countBy(essays.map(q => q.minutes))));
  say('no markscheme:', list(qs.filter(q => !(q.markscheme?.en && q.markscheme?.ru)).map(q => q.id)));
  say('no model answer:', list(qs.filter(q => !(q.model?.en)).map(q => q.id)));

  section('P1 passages: length, quotes and their check against the extract');
  for (const q of passages.filter(x => norm(x.stimulus?.en))) {
    const stim = q.stimulus?.en ?? '';
    const ruStim = q.stimulus?.ru ?? '';
    const cited = [...quotesIn(q.model?.en), ...quotesIn(q.markscheme?.en), ...quotesIn(q.model?.ru), ...quotesIn(q.markscheme?.ru)];
    const missing = cited.filter(c => !norm(stim).includes(norm(c)));
    say(`${q.id}`, `| stimulus EN ${words(stim)} w`, `| RU ${words(ruStim)} w`, `| same as EN: ${norm(ruStim) === norm(stim)}`, `| quotes ${cited.length}`, `| not in extract: ${missing.length ? JSON.stringify(missing.map(m => short(m, 70))) : 'none'}`);
  }
  const withStim = passages.filter(q => norm(q.stimulus?.en));
  const dupStim = withStim.filter((q, i, a) => a.findIndex(x => norm(x.stimulus?.en) === norm(q.stimulus?.en)) !== i).map(q => q.id);
  say('passages with an extract:', withStim.length, '| with duplicate text:', list(dupStim));

  section('Check questions: quotes against their stimulus');
  for (const q of checks) {
    const stim = q.stimulus?.en ?? '';
    const cited = [...quotesIn(q.model?.en), ...quotesIn(q.markscheme?.en)];
    const missing = cited.filter(c => stim && !norm(stim).includes(norm(c)));
    if (missing.length) say(`${q.id} not in stimulus:`, JSON.stringify(missing.map(m => short(m, 70))));
  }
  say('check questions without stimulus:', list(checks.filter(q => !q.stimulus?.en).map(q => q.id)));

  section('P2 bank: prompt length and criteria in the markscheme');
  const critRe = /\bA\b|\bB1\b|\bB2\b|\bC\b|\bD\b/g;
  const weak = [];
  for (const q of bank) {
    const crit = new Set((q.markscheme?.en ?? '').match(critRe) ?? []);
    if (words(q.prompt?.en) > 60) weak.push(`${q.id}:prompt ${words(q.prompt?.en)}w`);
    if (crit.size < 3) weak.push(`${q.id}:criteria mentioned ${[...crit].join('')}`);
  }
  say('P2 bank prompt words min/max:', Math.min(...bank.map(q => words(q.prompt?.en))), Math.max(...bank.map(q => words(q.prompt?.en))));
  say('P2 bank flags:', list(weak));
  say('P2 bank duplicate prompts:', list(bank.map(q => norm(q.prompt?.en)).filter((x, i, a) => a.indexOf(x) !== i)));
  say('P2 bank prompts mentioning "essay" or "compare":', bank.filter(q => /compare|comparison|to what extent/i.test(q.prompt?.en ?? '')).length, 'of', bank.length);

  section('P2 model essays: length and quotes');
  for (const q of essays) {
    const cited = quotesIn(q.model?.en);
    say(`${q.id}`, `| EN model ${words(q.model?.en)} w`, `| RU model ${words(q.model?.ru)} w`, `| quotes ${cited.length}`, cited.length ? `| first quotes: ${JSON.stringify(cited.slice(0, 4).map(c => short(c, 60)))}` : '');
  }
}

function reviewPapers(p, exams) {
  section('Paper guides');
  const qIds = new Set(p.questions.map(q => q.id));
  for (const g of p.papers) {
    const sets = g.timedSets ?? [];
    say(`${g.paper}: minutes ${g.minutes}, marks ${g.marks}, commandTerms ${JSON.stringify(g.commandTerms ?? [])}`);
    for (const s of sets) {
      const missing = (s.questionIds ?? []).filter(x => !qIds.has(x));
      say(`  set ${s.id}: ${s.minutes} min, ${(s.questionIds ?? []).length} questions${missing.length ? `, MISSING ${missing.join(',')}` : ''}`);
    }
    const over = sets.filter(s => (s.minutes ?? 0) > g.minutes).map(s => s.id);
    say(`  sets longer than the paper: ${over.length ? over.join(', ') : 'none'} (sets are alternatives, each one is checked on its own)`);
  }
  section('Exam calendar entries for this subject (data/exams.json)');
  const rows = exams.filter(e => JSON.stringify(e).toLowerCase().includes(subject === 'eng' ? 'english' : subject));
  for (const r of rows) say(JSON.stringify(r).slice(0, 220));
}

// Topic bodies may sit in nested folders (for example content/cs/theme-a/topics), so walk the subject folder.
function findMdx(subject) {
  const found = new Map();
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      const m = entry.name.match(/^(.+)\.(en|ru)\.mdx$/);
      if (m) found.set(`${m[1]}.${m[2]}`, full);
    }
  };
  walk(path.join(root, 'content', subject));
  return found;
}

function reviewTopics(p) {
  section(`Topics (${p.topics.length}): MDX structure, components and references`);
  const qIds = new Set(p.questions.map(q => q.id));
  const tIds = new Set(p.terms.map(t => t.id));
  const simDir = path.join(root, 'src', 'sims', subject);
  const simFiles = fs.existsSync(simDir) ? fs.readdirSync(simDir).map(f => f.replace(/\.tsx?$/, '')) : [];
  const problems = [];
  const mdxFiles = findMdx(subject);
  for (const t of p.topics) {
    const bodies = {};
    for (const lang of ['en', 'ru']) {
      const file = mdxFiles.get(`${t.id}.${lang}`);
      if (!file) { problems.push(`${t.id}: missing ${lang}.mdx`); continue; }
      bodies[lang] = fs.readFileSync(file, 'utf8');
    }
    for (const lang of ['en', 'ru']) {
      const text = bodies[lang];
      if (!text) continue;
      const heads = headingsOf(text);
      const expected = EXPECTED_HEADINGS[lang];
      const want = expected.filter(h => h !== 'Visual' || heads.includes('Visual'));
      if (JSON.stringify(heads) !== JSON.stringify(want)) problems.push(`${t.id}.${lang}: headings ${JSON.stringify(heads)}`);
      const questionRefs = [...text.matchAll(/<Question\s+id="([^"]+)"/g)].map(m => m[1]);
      const termRefs = [...text.matchAll(/<Term\s+id="([^"]+)"/g)].map(m => m[1]);
      const simRefs = [...text.matchAll(/<Sim\s+id="([^"]+)"/g)].map(m => m[1]);
      const kinds = [...text.matchAll(/<Callout\s+kind="([^"]+)"/g)].map(m => m[1]);
      const badQ = questionRefs.filter(x => !qIds.has(x));
      const badT = termRefs.filter(x => !tIds.has(x));
      if (badQ.length) problems.push(`${t.id}.${lang}: unknown Question ${badQ.join(',')}`);
      if (badT.length) problems.push(`${t.id}.${lang}: unknown Term ${badT.join(',')}`);
      if (questionRefs.length < 2 || questionRefs.length > 4) problems.push(`${t.id}.${lang}: ${questionRefs.length} Question blocks (want 2–4)`);
      const badKinds = kinds.filter(k => !CALLOUT_KINDS.includes(k));
      if (badKinds.length) problems.push(`${t.id}.${lang}: bad Callout kinds ${badKinds.join(',')}`);
      if (/TODO|TBD|lorem|\?\?\?/i.test(text)) problems.push(`${t.id}.${lang}: placeholder word`);
      const metaQ = [...(t.questionIds ?? [])].sort().join(',');
      const mdxQ = [...new Set(questionRefs)].sort().join(',');
      if (metaQ !== mdxQ) problems.push(`${t.id}.${lang}: questionIds in meta (${(t.questionIds ?? []).length}) differ from Question blocks (${new Set(questionRefs).size})`);
      for (const s of simRefs) if (!simFiles.includes(s.split('.').slice(1).join('.') || s)) problems.push(`${t.id}.${lang}: Sim ${s} has no file in src/sims/${subject}`);
      const longQuotes = [...text.replace(/<[^>]*>/g, ' ').matchAll(/"([^"\n]{20,})"|“([^”\n]{20,})”/g)].map(m => m[1] ?? m[2]).filter(q => words(q) > 25);
      if (longQuotes.length) problems.push(`${t.id}.${lang}: quotes longer than 25 words: ${longQuotes.length}`);
      const enCyr = lang === 'en' && hasCyr(text);
      const ruNoCyr = lang === 'ru' && !hasCyr(text);
      if (enCyr || ruNoCyr) problems.push(`${t.id}.${lang}: language check failed`);
    }
    const meta = t;
    if (!(meta.outcomes?.length >= 3 && meta.outcomes.length <= 8)) problems.push(`${t.id}: outcomes ${meta.outcomes?.length} (want 3–8)`);
    if (!(meta.minutes >= 25 && meta.minutes <= 60)) problems.push(`${t.id}: minutes ${meta.minutes} (want 25–60)`);
    const badTerms = (meta.termIds ?? []).filter(x => !tIds.has(x));
    if (badTerms.length) problems.push(`${t.id}: termIds unknown ${badTerms.join(',')}`);
    const kindsSrc = countBy((meta.sources ?? []).map(s => s.kind ?? 'none'));
    if (!meta.sources?.length) problems.push(`${t.id}: no sources`);
    if (meta.inMockScope !== 'yes') problems.push(`${t.id}: inMockScope ${meta.inMockScope}`);
    say(`${t.id}`, `| code ${t.code} | ${t.minutes} min | prio ${t.priority} | outcomes ${meta.outcomes?.length} | sources ${JSON.stringify(kindsSrc)} | Q ${(t.questionIds ?? []).length} | terms ${(t.termIds ?? []).length}`);
  }
  say('\nproblems:');
  say(list(problems, 80));
}

const server = await openContentServer(root);
try {
  const res = await loadPack(server, root, subject);
  if (!res.ok) {
    say('LOAD FAIL', JSON.stringify(res.failure));
  } else {
    const p = res.loaded.pack;
    say(`subject ${subject}: syllabus ${p.syllabus.length}, topics ${p.topics.length}, terms ${p.terms.length}, questions ${p.questions.length}, papers ${p.papers.length}; dropped ${JSON.stringify(res.loaded.dropped)}`);
    const examsPath = path.join(root, 'data', 'exams.json');
    const exams = fs.existsSync(examsPath) ? JSON.parse(fs.readFileSync(examsPath, 'utf8')) : [];
    const examList = Array.isArray(exams) ? exams : (Object.values(exams).find(Array.isArray) ?? []);
    reviewTerms(p);
    reviewQuestions(p);
    reviewPapers(p, examList);
    reviewTopics(p);
  }
} finally {
  await server.close();
  console.log(out.join('\n'));
}
