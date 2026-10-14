// node --test tests/fr-accents.test.mjs
// The accent rule of the reading and listening trainers (FR-11): an answer without accents is right when the accents do not
// change the word, and wrong when they do. Both trainers use the same rule, so the same cases are checked through each of them.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { acceptsWithoutAccents, frenchKeysMatch, plainFrench } from '../src/sims/fr/accents.ts';
import { answerText, checkAnswer, frenchMatches } from '../src/sims/fr/reading-logic.ts';
import { isCorrect, normalizeAnswer } from '../src/sims/fr/listening-logic.ts';

const item = answer => ({
  id: `t-${answer}`,
  prompt: { en: 'Write the French word from the text.', ru: 'Напишите французское слово из текста.' },
  markscheme: { en: 'Answer.', ru: 'Ответ.' },
  answer,
});

test('plainFrench takes out the accents and the cedilla, and keeps the other letters', () => {
  assert.equal(plainFrench('Québec'), 'Quebec');
  assert.equal(plainFrench('où'), 'ou');
  assert.equal(plainFrench('français déjà'), 'francais deja');
  assert.equal(plainFrench("l'école"), "l'ecole");
});

test('an accent-free key is right when the accents do not change the word', () => {
  assert.ok(acceptsWithoutAccents('dépasse', 'depasse'));
  assert.ok(acceptsWithoutAccents('québec', 'quebec'));
  assert.ok(acceptsWithoutAccents('réutilisable', 'reutilisable'));
  assert.ok(acceptsWithoutAccents("l'école", "l'ecole"));
  assert.ok(acceptsWithoutAccents('salle des fêtes', 'salle des fetes'));
  assert.ok(acceptsWithoutAccents('mère', 'mere'));
  assert.ok(acceptsWithoutAccents('non mentionné', 'non mentionne'));
});

test('an accent-free key is wrong when its plain spelling is another French word', () => {
  assert.ok(!acceptsWithoutAccents('où', 'ou'), 'ou is a different word from où');
  assert.ok(!acceptsWithoutAccents('à', 'a'), 'a is a different word from à');
  assert.ok(!acceptsWithoutAccents('là', 'la'), 'la is a different word from là');
  assert.ok(!acceptsWithoutAccents('dû', 'du'), 'du is a different word from dû');
  assert.ok(!acceptsWithoutAccents('côte', 'cote'), 'cote is a different word from côte');
  assert.ok(!acceptsWithoutAccents('pêche', 'peche'), 'the accent decides between pêche and péché');
  assert.ok(!acceptsWithoutAccents('où est-il', 'ou est-il'), 'one ambiguous word blocks the whole answer');
});

test('an accent-free key is wrong when a letter differs, and accents are never added', () => {
  assert.ok(!acceptsWithoutAccents('mère', 'mer'), 'mer and mère are different words');
  assert.ok(!acceptsWithoutAccents('dépasse', 'depasses'));
  assert.ok(!acceptsWithoutAccents('dépasse', 'dépassé'), 'a wrong accent is wrong');
  assert.ok(!acceptsWithoutAccents('quebec', 'québec'), 'an accent that the key does not have is not added');
  assert.ok(!acceptsWithoutAccents('dépasse', 'dépasse'), 'a key with its own accents is matched exactly, not by this rule');
  assert.ok(!acceptsWithoutAccents('', ''));
  assert.ok(frenchKeysMatch('dépasse', 'dépasse'));
  assert.ok(frenchKeysMatch('où', 'où'));
  assert.ok(!frenchKeysMatch('où', 'ou'));
});

test('reading: the typed answer is right without accents, the key keeps its spelling, and an ambiguous word is wrong', () => {
  assert.ok(checkAnswer(item('Québec'), 'quebec'));
  assert.ok(checkAnswer(item('dépasse'), 'Depasse'));
  assert.ok(frenchMatches("l'école", 'L’ecole'), 'an apostrophe variant and a missing accent together are right');
  assert.ok(frenchMatches('école', "l'ecole"), 'an elided form without accents is right');
  assert.ok(!checkAnswer(item('où'), 'ou'));
  assert.ok(!checkAnswer(item('à'), 'a'));
  assert.ok(!checkAnswer(item('mère'), 'mer'));
  assert.ok(checkAnswer(item('non mentionné'), 'non mentionne'), 'the true/false labels were already accent-free');
  assert.equal(answerText('Québec'), 'Québec', 'the key keeps its accents, so the trainer shows the right spelling');
});

test('listening: the typed answer is right without accents, and an ambiguous word is wrong', () => {
  assert.equal(isCorrect('Québec', 'quebec'), true);
  assert.equal(isCorrect('au Québec', 'Quebec'), true, 'the leading preposition and the accents do not count');
  assert.equal(isCorrect('salle des fêtes', 'salle des fetes'), true);
  assert.equal(isCorrect('Québec', 'Québec'), true);
  assert.equal(isCorrect('Québec', 'Montréal'), false);
  assert.equal(isCorrect('où', 'ou'), false, 'ou is a different word from où');
  assert.equal(isCorrect('mère', 'mer'), false, 'mer and mère are different words');
  assert.equal(isCorrect('non mentionné', 'non mentionne'), true, 'the true/false labels follow the same rule');
  assert.notEqual(normalizeAnswer('Québec'), normalizeAnswer('Quebec'), 'normalizeAnswer itself still keeps the accents');
});
