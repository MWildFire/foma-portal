// node --test tests/fr-listening-logic.test.mjs
// Checks the pure logic of the listening player, and checks it against the real tracks and questions (content/fr/).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  PAUSE_SECONDS,
  SPEEDS,
  TRUE_FALSE,
  answerKind,
  isCorrect,
  nextPhase,
  normalizeAnswer,
  optionLetters,
  playOrder,
  questionsForTrack,
  score,
  sectionOf,
  transcriptText,
} from '../src/sims/fr/listening-logic.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Every module in a folder whose file name matches the pattern, in file name order.
async function modulesIn(dir, pattern) {
  const files = fs.readdirSync(dir).filter(name => name.endsWith('.ts') && pattern.test(name)).sort();
  return Promise.all(files.map(name => import(pathToFileURL(path.join(dir, name)).href)));
}

test('the play order is the first listening, the pause, the second listening, then done', () => {
  assert.deepEqual(playOrder(), ['first', 'pause', 'second', 'done']);
  const run = [];
  let phase = 'first';
  while (phase !== 'done') {
    run.push(phase);
    phase = nextPhase(phase);
  }
  assert.deepEqual(run, ['first', 'pause', 'second']);
});

test('nextPhase keeps done as done and does not start a run by itself', () => {
  assert.equal(nextPhase('done'), 'done');
  assert.equal(nextPhase('idle'), 'idle');
});

test('the pause is the two minutes of the IB instructions, and the speeds are 0.9 and 1', () => {
  assert.equal(PAUSE_SECONDS, 120);
  assert.deepEqual([...SPEEDS], [0.9, 1]);
});

test('sectionOf reads the section from the track id', () => {
  assert.equal(sectionOf('l1-racines'), 'l1');
  assert.equal(sectionOf('l8-waste-collection'), 'l8');
  assert.equal(sectionOf('listening'), undefined);
  assert.equal(sectionOf('racines-l1'), undefined);
});

test('questionsForTrack keeps the Paper 2 items of the same section, sorted by id', () => {
  const questions = [
    { id: 'l1-q02', paper: 'P2', section: 'l1' },
    { id: 'l2-q01', paper: 'P2', section: 'l2' },
    { id: 'l1-q01', paper: 'P2', section: 'l1' },
    { id: 'listening-strategy-q1', paper: 'P2', section: 'P2L' },
    { id: 'l1-x', paper: 'P1', section: 'l1' },
  ];
  assert.deepEqual(questionsForTrack({ id: 'l1-racines' }, questions).map(q => q.id), ['l1-q01', 'l1-q02']);
  assert.deepEqual(questionsForTrack({ id: 'nope' }, questions), []);
  assert.equal(questions[0].id, 'l1-q02', 'the input is not reordered');
});

test('normalizeAnswer ignores case, spacing, typographic apostrophes and final punctuation, but not accents', () => {
  assert.equal(normalizeAnswer('  Trois   ANS. '), 'trois ans');
  assert.equal(normalizeAnswer('Aujourd’hui'), "aujourd'hui");
  assert.equal(normalizeAnswer('Non  mentionné'), 'non mentionné');
  assert.notEqual(normalizeAnswer('Québec'), normalizeAnswer('Quebec'));
});

test('isCorrect compares letters, true/false words and short answers, and never accepts an empty response', () => {
  assert.equal(isCorrect('B', ' b '), true);
  assert.equal(isCorrect('vrai', 'Vrai'), true);
  assert.equal(isCorrect('vrai', 'faux'), false);
  assert.equal(isCorrect('non mentionné', 'non mentionne'), false);
  assert.equal(isCorrect('salle des fêtes', 'Salle des fêtes.'), true);
  assert.equal(isCorrect('deux', ''), false);
  assert.equal(isCorrect('', ''), false);
});

test('a numeral from 0 to 100 matches its French word, and other numbers are kept', () => {
  assert.equal(isCorrect('40', 'quarante'), true);
  assert.equal(isCorrect('quarante', '40'), true);
  assert.equal(isCorrect('3 mois', 'trois mois'), true);
  assert.equal(isCorrect('2', 'Deux.'), true);
  assert.equal(isCorrect('80', 'quatre-vingts'), true);
  assert.equal(isCorrect('40', 'cinquante'), false);
  assert.equal(normalizeAnswer('2024'), '2024');
});

test('a leading article or preposition is ignored, the other words are not', () => {
  assert.equal(isCorrect('la salle des fêtes', 'salle des fêtes'), true);
  assert.equal(isCorrect('au Québec', 'Québec'), true);
  assert.equal(isCorrect('les collégiens', 'Collégiens'), true);
  assert.equal(isCorrect('au Québec', 'Montréal'), false);
  assert.equal(isCorrect('la salle des fêtes', 'gymnase'), false);
  assert.equal(isCorrect('Rennes', 'à Rennes'), true);
  assert.equal(isCorrect('salle des fêtes', 'à la salle des fêtes'), true);
  assert.equal(isCorrect('école', "à l'école"), true);
  assert.equal(isCorrect('Rennes', 'à Nantes'), false);
  assert.equal(isCorrect('salle des fêtes', 'à la gare'), false);
});

test('optionLetters reads the options of a prompt, and falls back to A to C', () => {
  assert.deepEqual(optionLetters('Pourquoi ? A) pour un examen B) pour parler C) pour un travail'), ['A', 'B', 'C']);
  assert.deepEqual(optionLetters("Notez la lettre (de A à E). A) l'accueil B) un train C) un retard D) le festival E) les consignes"), ['A', 'B', 'C', 'D', 'E']);
  assert.deepEqual(optionLetters('Répondez en un mot.'), ['A', 'B', 'C']);
});

test('answerKind tells true/false items, letter items and short answers apart', () => {
  assert.deepEqual(TRUE_FALSE, ['vrai', 'faux', 'non mentionné']);
  assert.equal(answerKind('vrai'), 'truefalse');
  assert.equal(answerKind('non mentionné'), 'truefalse');
  assert.equal(answerKind('D'), 'letter');
  assert.equal(answerKind('F'), 'text');
  assert.equal(answerKind('trois mois'), 'text');
});

test('transcriptText removes the pause markers of the audio script', () => {
  assert.equal(transcriptText('[pause 1.5s] Attendez, s’il vous plaît.'), 'Attendez, s’il vous plaît.');
  assert.equal(transcriptText('Oui. [pause 2s] Non.'), 'Oui. Non.');
  assert.equal(transcriptText('Bonjour.'), 'Bonjour.');
});

test('score counts the right answers out of all the questions of the track', () => {
  const questions = [{ id: 'a', answer: 'vrai' }, { id: 'b', answer: 'C' }, { id: 'c', answer: 'deux' }];
  assert.deepEqual(score(questions, { a: 'Vrai', b: 'A', c: 'Deux.' }), { right: 2, total: 3 });
  assert.deepEqual(score(questions, {}), { right: 0, total: 3 });
});

test('each track finds exactly its own questions, and every answer fits the kind of its item', async () => {
  const tracks = (await modulesIn(path.join(root, 'content', 'fr', 'listening'), /^l\d-.*\.ts$/)).map(mod => mod.track);
  const questions = (await modulesIn(path.join(root, 'content', 'fr', 'questions'), /^listening-/))
    .flatMap(mod => mod.questions ?? []);
  assert.equal(tracks.length, 8);
  for (const track of tracks) {
    const own = questionsForTrack(track, questions);
    assert.deepEqual(own.map(question => question.id), track.questionIds, track.id);
    assert.ok(own.length >= 6, track.id);
    for (const question of own) {
      assert.ok(question.answer && question.answer.trim() !== '', `${question.id} has no answer`);
      if (answerKind(question.answer) === 'letter') {
        assert.ok(
          optionLetters(question.prompt.fr).includes(question.answer),
          `${question.id}: "${question.answer}" is not one of the options in the prompt`,
        );
      }
    }
  }
});

test('the real items accept the answer with its leading preposition: l2-q08 "à Rennes", l8-q05 "à la salle des fêtes"', async () => {
  const questions = (await modulesIn(path.join(root, 'content', 'fr', 'questions'), /^listening-/))
    .flatMap(mod => mod.questions ?? []);
  const byId = new Map(questions.map(question => [question.id, question]));
  assert.equal(isCorrect(byId.get('l2-q08').answer, 'à Rennes'), true);
  assert.equal(isCorrect(byId.get('l8-q05').answer, 'à la salle des fêtes'), true);
});
