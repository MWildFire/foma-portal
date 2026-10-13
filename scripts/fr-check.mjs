// Checks for the French B SL subject (content/fr). Run from the repository root:
//
//   node scripts/fr-check.mjs            checks what exists now (word counts, answers, French fields)
//   node scripts/fr-check.mjs --final    also enforces the G2 targets of ops/prompts/S5-french.md
//
// Exit code 1 when an error is found. Warnings do not fail the run. The schema validator (npm run validate) checks
// topics, ids, MDX headings and references; this script checks what the validator does not know about.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const final = process.argv.includes('--final');
const errors = [];
const warnings = [];
const notes = [];

const CYRILLIC = /[Ѐ-ԯ]/;
const ROOT_FR = path.join(root, 'content', 'fr');

// The one word count used everywhere (see .superpowers/sdd/fr-design.md §9).
export function wordCount(text) {
  return text
    .replace(/[*_`#>[\]()«»"“”—–…]/g, ' ')
    .split(/\s+/)
    .filter(token => /\p{L}/u.test(token)).length;
}

function tsFiles(dir) {
  const full = path.join(ROOT_FR, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter(name => name.endsWith('.ts')).sort().map(name => path.join(full, name));
}

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walkFiles(full) : [full];
  });
}

async function load(file) {
  return import(pathToFileURL(file).href);
}

function check(condition, message, list = errors) {
  if (!condition) list.push(message);
}

function pick(object, key) {
  return object && typeof object[key] === 'string' ? object[key] : '';
}

async function main() {
  const syllabus = (await load(path.join(ROOT_FR, 'syllabus.ts'))).syllabus;
  const codes = new Set(syllabus.map(item => item.code));

  // ---- terms ----
  const terms = [];
  for (const file of tsFiles('terms')) {
    const mod = await load(file);
    for (const term of mod.terms ?? []) terms.push({ ...term, file: path.basename(file) });
  }
  const termIds = new Set();
  for (const term of terms) {
    check(!termIds.has(term.id), `term "${term.id}" is defined twice`);
    termIds.add(term.id);
    const fr = pick(term.term, 'fr');
    check(fr.trim() !== '', `term "${term.id}" has no term.fr (the French headword)`);
    check(!CYRILLIC.test(fr), `term "${term.id}": term.fr contains Cyrillic`);
    check(term.term && term.term.ru && CYRILLIC.test(term.term.ru), `term "${term.id}": term.ru has no Cyrillic`, warnings);
    check(term.example === undefined || pick(term.example, 'fr').trim() !== '', `term "${term.id}": example has no example.fr`);
    check(codes.has(term.syllabus), `term "${term.id}": syllabus "${term.syllabus}" is not a code in syllabus.ts`);
  }
  // The same French headword in two entries is a duplicate (ids differ). Compare case-insensitively, apostrophes unified.
  const headwords = new Map();
  for (const term of terms) {
    const key = pick(term.term, 'fr').toLowerCase().replace(/[’]/g, "'").trim();
    if (!key) continue;
    if (headwords.has(key)) errors.push(`duplicate term.fr "${pick(term.term, 'fr')}": "${headwords.get(key)}" and "${term.id}"`);
    else headwords.set(key, term.id);
  }

  const vocab = terms.filter(term => term.id.startsWith('v-'));
  const connectors = terms.filter(term => term.id.startsWith('cn-'));
  const grammar = terms.filter(term => term.id.startsWith('gr-'));
  notes.push(`terms: vocabulary ${vocab.length}, connectors ${connectors.length}, grammar ${grammar.length}`);

  // ---- questions ----
  const questions = [];
  for (const file of tsFiles('questions')) {
    const mod = await load(file);
    for (const question of mod.questions ?? []) questions.push({ ...question, file: path.basename(file) });
  }
  const questionIds = new Set();
  let p1Tasks = 0;
  let quickChecks = 0;
  let p2Items = 0;
  for (const question of questions) {
    const id = question.id;
    check(!questionIds.has(id), `question "${id}" is defined twice`);
    questionIds.add(id);
    check(Number.isInteger(question.marks) && question.marks > 0, `question "${id}": marks must be a whole number above 0`);
    check(pick(question.markscheme, 'en').trim() !== '' && pick(question.markscheme, 'ru').trim() !== '', `question "${id}": markscheme needs en and ru`);
    // Classified by paper first: a P2 item; else a P1 task (command Write); else a quick check (an answer, not on P2).
    if (question.paper === 'P2') {
      p2Items++;
      check(question.answer !== undefined && question.answer !== '', `P2 item "${id}" has no answer key`);
    } else if (question.command === 'Write') {
      p1Tasks++;
      const prompt = pick(question.prompt, 'fr');
      check(prompt.trim() !== '', `P1 task "${id}": prompt.fr is empty`);
      const model = pick(question.model, 'fr');
      const words = wordCount(model);
      check(model !== '', `P1 task "${id}": model.fr is empty`);
      check(words >= 250 && words <= 400, `P1 task "${id}": model has ${words} French words (allowed 250 to 400)`);
      check(words >= 300 && words <= 350, `P1 task "${id}": model has ${words} French words (target 300 to 350)`, warnings);
      check(question.minutes === undefined || question.minutes > 0, `P1 task "${id}": minutes must be above 0`);
      check(question.marks === 30, `P1 task "${id}": marks should be 30 (A 12, B 12, C 6)`, warnings);
    } else if (question.answer !== undefined) {
      quickChecks++;
      const prompt = pick(question.prompt, 'fr');
      check(/A\)[\s\S]*B\)[\s\S]*C\)/.test(prompt) || question.paper === 'P2', `quick check "${id}": prompt.fr needs options "A) … B) … C) …"`);
      check(question.answer !== '' && (question.paper !== 'P1' || ['A', 'B', 'C'].includes(question.answer)), `quick check "${id}": answer must be A, B or C`);
    } else {
      check(false, `question "${id}" is neither a P2 item, a P1 task nor a quick check`);
    }
  }
  notes.push(`questions: P1 tasks ${p1Tasks}, quick checks ${quickChecks}, P2 items ${p2Items}`);

  // ---- reading passages ----
  const passages = [];
  for (const file of tsFiles('reading')) {
    const mod = await load(file);
    if (mod.passage) passages.push({ ...mod.passage, file: path.basename(file) });
  }
  for (const passage of passages) {
    const words = passage.paragraphs.reduce((sum, paragraph) => sum + wordCount(paragraph), 0);
    check(passage.paragraphs.length >= 3, `reading "${passage.id}": needs at least 3 paragraphs`);
    check(words >= 200 && words <= 450, `reading "${passage.id}": ${words} French words (target 200 to 450)`, warnings);
    check(passage.questionIds.length >= 8 && passage.questionIds.length <= 12, `reading "${passage.id}": ${passage.questionIds.length} questions (need 8 to 12)`);
    for (const id of passage.questionIds) check(questionIds.has(id), `reading "${passage.id}" lists missing question "${id}"`);
  }
  notes.push(`reading passages: ${passages.length} (${passages.map(p => `${p.id} ${passageWords(p)} w`).join(', ')})`);

  // ---- listening tracks ----
  const tracks = [];
  for (const file of tsFiles('listening')) {
    const mod = await load(file);
    if (mod.track) tracks.push({ ...mod.track, file: path.basename(file) });
  }
  for (const track of tracks) {
    const words = track.turns.reduce((sum, turn) => sum + wordCount(turn.fr), 0);
    check(track.turns.length >= 2, `listening "${track.id}": needs at least 2 turns`);
    check(words >= 230 && words <= 450, `listening "${track.id}": ${words} French words (about 1.5 to 3 minutes: 230 to 450)`, warnings);
    check(track.audio === `/audio/fr/${track.id}.mp3`, `listening "${track.id}": audio must be "/audio/fr/${track.id}.mp3"`);
    check(track.questionIds.length >= 6 && track.questionIds.length <= 12, `listening "${track.id}": ${track.questionIds.length} questions (need 6 to 12)`);
    for (const id of track.questionIds) check(questionIds.has(id), `listening "${track.id}" lists missing question "${id}"`);
    const mp3 = path.join(root, 'public', 'audio', 'fr', `${track.id}.mp3`);
    if (final) check(fs.existsSync(mp3), `listening "${track.id}": ${path.relative(root, mp3)} is missing (run scripts/fr-polly.sh)`);
    else if (!fs.existsSync(mp3)) notes.push(`listening "${track.id}": audio not generated yet`);
  }
  notes.push(`listening tracks: ${tracks.length} (${tracks.map(t => `${t.id} ${trackWords(t)} w`).join(', ')})`);

  // ---- sims and papers ----
  const sims = fs.existsSync(path.join(root, 'src', 'sims', 'fr'))
    ? fs.readdirSync(path.join(root, 'src', 'sims', 'fr')).filter(name => name.endsWith('.tsx'))
    : [];
  notes.push(`sims: ${sims.length} (${sims.join(', ') || 'none'})`);
  const papersFile = path.join(ROOT_FR, 'papers.ts');
  const papers = fs.existsSync(papersFile) ? (await load(papersFile)).papers ?? [] : [];
  notes.push(`paper guides: ${papers.length}`);

  if (final) {
    check(p1Tasks >= 14, `P1 tasks: ${p1Tasks} (need at least 14, one per text type)`);
    check(vocab.length >= 450, `vocabulary: ${vocab.length} (need at least 450)`);
    check(connectors.length >= 60, `connectors: ${connectors.length} (need at least 60)`);
    check(grammar.length >= 18, `grammar points: ${grammar.length} (need at least 18)`);
    check(passages.length >= 6, `reading passages: ${passages.length} (need at least 6)`);
    check(tracks.length >= 8, `listening tracks: ${tracks.length} (need at least 8)`);
    check(sims.length >= 5, `sims: ${sims.length} (need listening-player, reading-practice, conjugation-trainer, connector-sort, letter-builder)`);
    check(papers.length >= 3, `paper guides: ${papers.length} (need P1, P2 reading, P2 listening)`);
  }

  // ---- mixed scripts: a word with Latin and Cyrillic letters is a typo (look-alike characters) ----
  for (const file of walkFiles(ROOT_FR)) {
    if (!/\.(ts|mdx)$/.test(file)) continue;
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, index) => {
      for (const word of line.match(/[\p{L}\p{M}'’-]+/gu) ?? []) {
        if (/\p{Script=Latin}/u.test(word) && /\p{Script=Cyrillic}/u.test(word)) {
          errors.push(`mixed scripts in "${word}" at ${path.relative(root, file)}:${index + 1} (Latin and Cyrillic look-alike letters)`);
        }
      }
    });
  }

  // ---- report ----
  for (const line of notes) console.log(`note  ${line}`);
  for (const line of warnings) console.log(`warn  ${line}`);
  for (const line of errors) console.log(`error ${line}`);
  console.log(`fr-check${final ? ' --final' : ''}: ${errors.length} error(s), ${warnings.length} warning(s)`);
  process.exitCode = errors.length > 0 ? 1 : 0;
}

function passageWords(passage) {
  return passage.paragraphs.reduce((sum, paragraph) => sum + wordCount(paragraph), 0);
}

function trackWords(track) {
  return track.turns.reduce((sum, turn) => sum + wordCount(turn.fr), 0);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
