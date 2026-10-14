// node --test tests/fr-reading-logic.test.mjs
// Checks the pure logic of the reading practice against the real passages and items (content/fr/reading, content/fr/questions).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { parseExams } from '../src/planner/calendar.ts';
import {
  acceptedAnswers,
  answerKind,
  answerText,
  checkAnswer,
  collectItems,
  collectPassages,
  englishMatches,
  formatTime,
  frenchMatches,
  normaliseFrench,
  readingExam,
  scoreOf,
  splitPrompt,
  timedRunMinutes,
  timedSets,
} from '../src/sims/fr/reading-logic.ts';

// The modules of a content folder, loaded the way the component's import.meta.glob loads them.
async function load(folder, keep) {
  const base = new URL(`../content/fr/${folder}/`, import.meta.url);
  const modules = {};
  for (const file of readdirSync(base).filter(keep)) modules[file] = await import(new URL(file, base).href);
  return modules;
}

const passages = collectPassages(await load('reading', name => name.endsWith('.ts')));
const items = collectItems(await load('questions', name => /^reading-[0-9]/.test(name)));
const itemById = new Map(items.map(entry => [entry.id, entry]));

// The school's schedule, read from disk as the planner tests do.
const exams = parseExams(JSON.parse(readFileSync(new URL('../data/exams.json', import.meta.url), 'utf8')));

// A small item for the checks that do not need the real data.
const item = (answer, en = 'Write vrai, faux or non mentionné.') => ({
  id: `t-${answer}`,
  prompt: { en, ru: 'Напишите.' },
  markscheme: { en: 'Answer.', ru: 'Ответ.' },
  answer,
});

test('normaliseFrench ignores accents, capitals, apostrophe variants and final punctuation', () => {
  assert.equal(normaliseFrench('  Dépasse. '), 'depasse');
  assert.equal(normaliseFrench('L’école'), "l'ecole");
  assert.equal(normaliseFrench('« Œuvre » !'), 'oeuvre');
});

test('a French answer may leave out its accents when they do not change the word; capitals, spacing and apostrophe variants do not count', () => {
  assert.ok(frenchMatches('dépasse', ' Dépasse '));
  assert.ok(frenchMatches('réutilisable', 'Réutilisable'));
  assert.ok(frenchMatches('dans six mois', 'Dans  six mois.'));
  assert.ok(frenchMatches("l'école", 'L’École'));
  assert.ok(checkAnswer(item('réutilisable'), 'réutilisable'));
  assert.ok(frenchMatches('dépasse', 'DEPASSE'), 'a missing accent is right when the word has one spelling (accents.ts)');
  assert.ok(frenchMatches('réutilisable', 'reutilisable'));
  assert.ok(checkAnswer(item('réutilisable'), 'reutilisable'));
  assert.ok(frenchMatches('leurs propres boîtes', 'leurs propres boites'));
  assert.ok(!frenchMatches('où', 'ou'), 'ou and où are different words');
  assert.ok(!checkAnswer(item('à'), 'a'), 'a and à are different words');
  assert.ok(!frenchMatches('mère', 'mer'), 'mer and mère are different words');
  assert.ok(!frenchMatches('dépasse', 'dépasses'));
  assert.ok(!frenchMatches('dépasse', 'dépassé'), 'a wrong accent is a wrong answer');
  assert.ok(!frenchMatches('panne', ''));
});

test("a leading elision such as d' is ignored when the key word has none", () => {
  assert.ok(frenchMatches('atteindre', "d'atteindre"));
  assert.ok(frenchMatches('atteindre', 'D’Atteindre'));
  assert.ok(!frenchMatches('atteindre', 'atteindrai'));
});

test('vrai, faux and non mentionné are checked as words, without accents', () => {
  assert.equal(answerKind(item('non mentionné')), 'truefalse');
  assert.ok(checkAnswer(item('non mentionné'), 'non mentionne'));
  assert.ok(checkAnswer(item('vrai'), ' Vrai '));
  assert.ok(!checkAnswer(item('vrai'), 'faux'));
  assert.ok(!checkAnswer(item('non mentionné'), 'faux'));
});

test('paragraph letters are checked without regard to case', () => {
  const paragraph = item('B', 'Which paragraph (A to E, A being the first) gives the ingredients? Write the letter.');
  assert.equal(answerKind(paragraph), 'letter');
  assert.ok(checkAnswer(paragraph, ' b '));
  assert.ok(!checkAnswer(paragraph, 'C'));
  assert.ok(!checkAnswer(paragraph, ''));
});

test('an English answer needs its key words, in any order, with small variations', () => {
  assert.ok(englishMatches('like people', 'Recipes travel like people'));
  assert.ok(englishMatches('like people', 'people, like'));
  assert.ok(!englishMatches('like people', 'like'));
  assert.ok(!englishMatches('like people', 'people'));
  assert.ok(englishMatches('sore eyes', 'the eye was sore'));
  assert.ok(!englishMatches('sore eyes', 'eyes hurt'));
  assert.ok(englishMatches('attract', 'they attracting tourists'));
  assert.ok(englishMatches('Munich', 'munich'));
  assert.ok(englishMatches('Munich', 'Munich'));
  assert.ok(!englishMatches('Munich', 'Munch'));
  assert.ok(!englishMatches('Munich', 'Munick'));
  assert.ok(!englishMatches('Munich', 'Hamburg'));
});

test('number words and digits are the same answer, and years must match exactly', () => {
  assert.ok(englishMatches('twelve', '12'));
  assert.ok(englishMatches('twelve', 'Twelve children'));
  assert.ok(!englishMatches('twelve', 'eleven'));
  assert.ok(englishMatches('1932', 'in 1932'));
  assert.ok(!englishMatches('1932', '1933'));
  assert.ok(englishMatches('almost two hours', 'nearly 2 hours'));
  assert.ok(!englishMatches('almost two hours', 'two hours'));
  assert.ok(!englishMatches('almost two hours', 'almost two tours'));
});

test('every passage lists ten items, and every item has an answer key that accepts itself', () => {
  assert.equal(passages.length, 6);
  for (const passage of passages) {
    assert.equal(passage.questionIds.length, 10, passage.id);
    for (const id of passage.questionIds) {
      const question = itemById.get(id);
      assert.ok(question, id);
      assert.notEqual(answerKind(question), 'none', id);
      assert.ok(checkAnswer(question, question.answer), id);
    }
  }
});

test('the timed sets are R1 to R3 and R4 to R6', () => {
  assert.deepEqual(
    timedSets(passages).map(set => set.map(passage => passage.id.slice(0, 2))),
    [['r1', 'r2', 'r3'], ['r4', 'r5', 'r6']],
  );
});

test('a timed run lasts the reading paper of data/exams.json: 56 minutes with extra time, 45 without', () => {
  assert.equal(readingExam(exams)?.minutes, 45);
  assert.equal(timedRunMinutes(exams, true), 56);
  assert.equal(timedRunMinutes(exams, false), 45);
  assert.equal(timedRunMinutes({ ...exams, papers: [] }, true), 0);
});

test('splitPrompt separates the question from its A) B) C) options', () => {
  const who = itemById.get('r4-q05');
  const split = splitPrompt(who.prompt.en);
  assert.equal(split.stem, 'Who says that they feel much calmer since the change?');
  assert.deepEqual(split.options.map(option => option.letter), ['A', 'B', 'C']);
  assert.equal(split.options[1].label, 'Mathis');
  const paragraph = itemById.get('r1-q06');
  assert.deepEqual(splitPrompt(paragraph.prompt.en), { stem: paragraph.prompt.en, options: [] });
});

test('a key may accept several answers; the answer shown after marking lists them with a slash', () => {
  const eyes = itemById.get('r3-q05');
  assert.equal(eyes.answer, 'sore eyes | eye pain');
  assert.ok(checkAnswer(eyes, 'sore eyes'));
  assert.ok(checkAnswer(eyes, 'eye pain'));
  assert.ok(!checkAnswer(eyes, 'eyes hurt'));
  assert.ok(!checkAnswer(eyes, 'pain'));
  assert.deepEqual(acceptedAnswers('sore eyes | eye pain'), ['sore eyes', 'eye pain']);
  assert.equal(answerText('sore eyes | eye pain'), 'sore eyes / eye pain');
  assert.equal(answerText('Rennes'), 'Rennes');
});

test('formatTime counts down as mm:ss and stops at 00:00', () => {
  assert.equal(formatTime(56 * 60 * 1000), '56:00');
  assert.equal(formatTime(61_000), '01:01');
  assert.equal(formatTime(999), '00:01');
  assert.equal(formatTime(0), '00:00');
  assert.equal(formatTime(-5_000), '00:00');
});

test('scoreOf counts the items answered right, and a missing answer is wrong', () => {
  const sample = [
    item('vrai'),
    item('B', 'Which paragraph (A to E, A being the first)? Write the letter.'),
    item('1932', 'Answer in English. In which year did she leave?'),
  ];
  const answers = { [sample[0].id]: 'Vrai', [sample[1].id]: 'C', [sample[2].id]: '1932' };
  assert.deepEqual(scoreOf(sample, answers), { right: 2, total: 3 });
  assert.deepEqual(scoreOf(sample, {}), { right: 0, total: 3 });
});

test('the collectors skip modules without a passage or without items', () => {
  assert.equal(collectPassages({ './a.ts': { passage: { id: 'x' } }, './b.ts': {} }).length, 0);
  const collected = collectItems({
    './a.ts': {},
    './b.ts': {
      questions: [
        { id: 'q1', prompt: { en: 'Write.', ru: 'Пишите.' }, markscheme: { en: 'a', ru: 'б' }, answer: 'vrai' },
        { id: 'bad' },
      ],
    },
  });
  assert.deepEqual(collected.map(entry => entry.id), ['q1']);
});
