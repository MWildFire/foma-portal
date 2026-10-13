// node --test scripts/fr-conjugation-logic.test.mjs
// Checks the pure logic of the conjugation trainer against the real drill files (content/fr/grammar/conjugation*.ts).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  MOODS,
  collectDrills,
  elides,
  filterDrills,
  fullForm,
  hintText,
  isCorrect,
  moodOf,
  normaliseAnswer,
  shuffle,
  tenseLabel,
  tensesFor,
} from '../src/sims/fr/conjugation-logic.ts';
import { drills as conjugation } from '../content/fr/grammar/conjugation.ts';
import { drills as conjugationMood } from '../content/fr/grammar/conjugation-mood.ts';

const ALL = [...conjugation, ...conjugationMood];
const byId = id => {
  const found = ALL.find(d => d.id === id);
  assert.ok(found, `drill ${id} exists`);
  return found;
};

test('normaliseAnswer ignores case, accents and extra spaces', () => {
  assert.equal(normaliseAnswer('  Étaient  '), 'etaient');
  assert.equal(normaliseAnswer('a   lu'), 'a lu');
  assert.equal(normaliseAnswer('Été'), 'ete');
});

test('normaliseAnswer reads typographic apostrophes as the straight one', () => {
  assert.equal(normaliseAnswer('J’AI'), "j'ai");
  assert.equal(normaliseAnswer('jʼai'), "j'ai");
  assert.equal(normaliseAnswer('j`ai'), "j'ai");
  assert.equal(normaliseAnswer('s‘asseoir'), "s'asseoir");
});

test('the cedilla is an accent here, so commencons is accepted for commençons', () => {
  assert.equal(normaliseAnswer('commençons'), 'commencons');
  assert.equal(isCorrect(byId('cj-006'), 'commencons'), true);
});

test('elides je before a vowel or a mute h only', () => {
  assert.equal(elides('ai'), true);
  assert.equal(elides('habite'), true);
  assert.equal(elides('étaient'), true);
  assert.equal(elides('parle'), false);
  assert.equal(elides('finis'), false);
});

test('fullForm adds the pronoun, and elides je where French does', () => {
  assert.equal(fullForm(byId('cj-018')), "j'ai");
  assert.equal(fullForm(byId('cj-003')), "j'habite");
  assert.equal(fullForm(byId('cj-007')), 'je finis');
  assert.equal(fullForm(byId('cj-001')), 'nous parlons');
  assert.equal(fullForm(byId('cm-006')), 'il/elle vende');
  assert.equal(fullForm(byId('cm-027')), 'parle');
});

test('isCorrect accepts the bare form, j\'ai with a straight or typographic apostrophe, and any case', () => {
  const avoirJe = byId('cj-018');
  for (const typed of ['ai', "j'ai", 'j’ai', "J'AI", ' ai ']) {
    assert.equal(isCorrect(avoirJe, typed), true, `"${typed}" should be accepted`);
  }
  for (const typed of ['as', "je ai", 'j ai', "j'as", '']) {
    assert.equal(isCorrect(avoirJe, typed), false, `"${typed}" should be rejected`);
  }
});

test('isCorrect accepts the drill pronoun before a form that needs no elision', () => {
  assert.equal(isCorrect(byId('cj-001'), 'parlons'), true);
  assert.equal(isCorrect(byId('cj-001'), 'nous parlons'), true);
  assert.equal(isCorrect(byId('cj-001'), 'vous parlons'), false);
  assert.equal(isCorrect(byId('cj-001'), 'parlon'), false);
  assert.equal(isCorrect(byId('cj-003'), 'je habite'), false);
});

test('isCorrect ignores accents in compound tenses but keeps the feminine -e of the participle', () => {
  assert.equal(isCorrect(byId('cj-052'), 'est allée'), true);
  assert.equal(isCorrect(byId('cj-052'), 'est allee'), true);
  assert.equal(isCorrect(byId('cj-052'), 'Elle est allee'), true);
  assert.equal(isCorrect(byId('cj-052'), 'est allé'), false);
  assert.equal(isCorrect(byId('cj-052'), 'est alle'), false);
});

test('the imperative takes no pronoun, and a reflexive form keeps its hyphen', () => {
  assert.equal(isCorrect(byId('cm-027'), 'parle'), true);
  assert.equal(isCorrect(byId('cm-027'), 'tu parle'), false);
  assert.equal(isCorrect(byId('cm-038'), 'lève-toi'), true);
  assert.equal(isCorrect(byId('cm-038'), 'leve-toi'), true);
  assert.equal(isCorrect(byId('cm-038'), 'lève toi'), false);
});

test('hintText shows a string as it is, and an object in the chosen language', () => {
  const plain = { id: 'x', verb: 'v', tense: 'présent', pronoun: 'je', answer: 'a', hint: 'plain hint' };
  const pair = { ...plain, hint: { en: 'english', ru: 'русский' } };
  assert.equal(hintText(plain, 'ru'), 'plain hint');
  assert.equal(hintText(pair, 'en'), 'english');
  assert.equal(hintText(pair, 'ru'), 'русский');
  assert.equal(hintText({ ...plain, hint: undefined }, 'en'), undefined);
  assert.equal(hintText({ ...plain, hint: '' }, 'en'), undefined);
});

test('moodOf reads the mood from the tense field', () => {
  assert.equal(moodOf('présent'), 'indicatif');
  assert.equal(moodOf('passé composé'), 'indicatif');
  assert.equal(moodOf('conditionnel présent'), 'conditionnel');
  assert.equal(moodOf('subjonctif présent'), 'subjonctif');
  assert.equal(moodOf('impératif'), 'impératif');
  assert.equal(moodOf('constructor'), undefined);
  assert.equal(moodOf('plus-que-parfait'), undefined);
});

test('filterDrills keeps one mood, or one tense inside it', () => {
  const subjunctive = filterDrills(ALL, { mood: 'subjonctif', tense: 'all' });
  assert.ok(subjunctive.length > 0);
  assert.ok(subjunctive.every(d => d.tense === 'subjonctif présent'));
  const future = filterDrills(ALL, { mood: 'indicatif', tense: 'futur simple' });
  assert.ok(future.length > 0 && future.every(d => d.tense === 'futur simple'));
  assert.equal(filterDrills(ALL, { mood: 'impératif', tense: 'impératif' }).length, filterDrills(ALL, { mood: 'impératif', tense: 'all' }).length);
});

test('the four moods split the whole set without losing or repeating a form', () => {
  assert.equal(filterDrills(ALL, { mood: 'all', tense: 'all' }).length, ALL.length);
  const sum = MOODS.reduce((count, mood) => count + filterDrills(ALL, { mood, tense: 'all' }).length, 0);
  assert.equal(sum, ALL.length);
});

test('tensesFor lists the tenses of a mood in the order of the drills', () => {
  assert.deepEqual(tensesFor(ALL, 'subjonctif'), ['subjonctif présent']);
  assert.deepEqual(tensesFor(ALL, 'conditionnel'), ['conditionnel présent']);
  assert.deepEqual(tensesFor(ALL, 'indicatif'), ['présent', 'passé composé', 'imparfait', 'futur simple']);
  assert.ok(tensesFor(ALL, 'all').includes('impératif'));
});

test('every drill has a unique id, a known mood and a tense label, and its own answer is accepted', () => {
  assert.equal(new Set(ALL.map(d => d.id)).size, ALL.length);
  for (const d of ALL) {
    assert.notEqual(moodOf(d.tense), undefined, `${d.id} has an unknown tense "${d.tense}"`);
    assert.notEqual(tenseLabel(d.tense, 'en'), d.tense, `${d.id} has no English label`);
    assert.notEqual(tenseLabel(d.tense, 'ru'), d.tense, `${d.id} has no Russian label`);
    assert.equal(isCorrect(d, d.answer), true, `${d.id}: "${d.answer}" is not accepted`);
  }
});

test('collectDrills keeps the drills of the real files, and skips anything else', () => {
  assert.equal(collectDrills({ './a.ts': { drills: conjugation }, './b.ts': { drills: conjugationMood } }).length, ALL.length);
  assert.ok(ALL.filter(d => d.hint).every(d => hintText(d, 'ru')));
});

test('collectDrills keeps only drills, sorted by file path', () => {
  const modules = {
    './conjugation.ts': { drills: [{ id: 'b', verb: 'v', tense: 'présent', pronoun: 'je', answer: 'x' }] },
    './conjugation-mood.ts': {
      drills: [
        { id: 'a', verb: 'v', tense: 'impératif', pronoun: 'tu', answer: 'y', hint: 'h' },
        { id: 'bad' },
        { id: 'c', verb: 'v', tense: 'impératif', pronoun: 'tu', answer: 'z', hint: { en: 'only English' } },
      ],
    },
    './conjugation-empty.ts': {},
  };
  assert.deepEqual(collectDrills(modules).map(d => d.id), ['a', 'c', 'b']);
  assert.equal(hintText(collectDrills(modules)[1], 'ru'), undefined);
  assert.equal(hintText(collectDrills(modules)[1], 'en'), 'only English');
});

test('shuffle returns a permutation, leaves the input alone, and follows the random source', () => {
  const input = [1, 2, 3, 4, 5];
  assert.deepEqual(shuffle(input, () => 0), [2, 3, 4, 5, 1]);
  assert.deepEqual(input, [1, 2, 3, 4, 5]);
  assert.deepEqual([...shuffle(input)].sort(), [1, 2, 3, 4, 5]);
  assert.deepEqual(shuffle([7], () => 0.5), [7]);
});
