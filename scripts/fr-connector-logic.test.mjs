// node --test scripts/fr-connector-logic.test.mjs
// Checks the pure logic of the connector sort against the real connector file (content/fr/terms/connectors.ts).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GROUPS, buildRound, connectorsFrom, countRight, groupLabel, groupOf } from '../src/sims/fr/connector-logic.ts';
import { terms } from '../content/fr/terms/connectors.ts';

const id = n => `cn-${String(n).padStart(3, '0')}`;

test('groupOf puts the borders of each id range in the right function', () => {
  const expected = [
    [1, 'addition'], [6, 'addition'], [7, 'cause'], [14, 'cause'], [15, 'opposition'], [22, 'opposition'],
    [23, 'time'], [30, 'time'], [31, 'examples'], [36, 'examples'], [37, 'opinion'], [43, 'opinion'],
    [45, 'summary'], [50, 'summary'], [51, 'emphasis'], [54, 'emphasis'], [55, 'comparison'], [60, 'comparison'],
  ];
  for (const [n, key] of expected) assert.equal(groupOf(id(n)), key, id(n));
});

test('groupOf returns undefined for ids outside cn-001 to cn-060 and for other ids', () => {
  for (const bad of ['cn-000', 'cn-061', 'cn-1', 'cn-0001', 'CN-001', 'v-t1-001', '']) {
    assert.equal(groupOf(bad), undefined, `"${bad}"`);
  }
});

test('the nine groups cover cn-001 to cn-060 once each, with the group sizes (cn-044 moved to opposition)', () => {
  const sizes = {};
  for (let n = 1; n <= 60; n += 1) {
    const key = groupOf(id(n));
    assert.ok(key, id(n));
    sizes[key] = (sizes[key] ?? 0) + 1;
  }
  assert.equal(GROUPS.length, 9);
  assert.deepEqual(GROUPS.map(g => sizes[g.key]), [6, 8, 9, 8, 6, 7, 6, 4, 6]); // cn-044 'certes' sorts with opposition
});

test('the connector file gives 60 connectors, each with a French form, both glosses and its group', () => {
  const connectors = connectorsFrom(terms);
  assert.equal(connectors.length, 60);
  for (const c of connectors) {
    assert.ok(c.fr && c.en && c.ru, c.id);
    assert.equal(c.group, groupOf(c.id), c.id);
  }
});

test('connectorsFrom skips terms outside the ranges and terms without a French form', () => {
  const fake = [
    { id: 'cn-061', term: { en: 'x', ru: 'х', fr: 'x' } },
    { id: 'cn-002', term: { en: 'in addition', ru: 'вдобавок' } },
    { id: 'cn-003', term: { en: 'also', ru: 'также', fr: 'également' } },
  ];
  assert.deepEqual(connectorsFrom(fake), [{ id: 'cn-003', fr: 'également', en: 'also', ru: 'также', group: 'addition' }]);
});

test('buildRound takes the same number of connectors from every function, in a shuffled order', () => {
  let seed = 7;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const round = buildRound(connectorsFrom(terms), 2, random);
  assert.equal(round.length, 18);
  assert.equal(new Set(round.map(c => c.id)).size, 18);
  for (const g of GROUPS) assert.equal(round.filter(c => c.group === g.key).length, 2, g.key);
  const position = round.map(c => GROUPS.findIndex(g => g.key === c.group));
  assert.ok(position.some((value, i) => i > 0 && value < position[i - 1]), 'the round is not in group order');
});

test('buildRound takes what a group has when it has fewer connectors than asked', () => {
  const emphasis = connectorsFrom(terms).filter(c => c.group === 'emphasis').slice(0, 1);
  assert.equal(buildRound(emphasis, 2, () => 0).length, 1);
  assert.deepEqual(buildRound([], 2, () => 0), []);
});

test('countRight counts the connectors put in their own function; a missing answer is wrong', () => {
  const round = [
    { id: 'cn-001', fr: 'de plus', en: 'furthermore', ru: 'кроме того', group: 'addition' },
    { id: 'cn-007', fr: 'parce que', en: 'because', ru: 'потому что', group: 'cause' },
    { id: 'cn-015', fr: 'mais', en: 'but', ru: 'но', group: 'opposition' },
  ];
  assert.equal(countRight(round, { 'cn-001': 'addition', 'cn-007': 'time', 'cn-015': 'opposition' }), 2);
  assert.equal(countRight(round, {}), 0);
});

test('groupLabel gives a distinct English and Russian name for each function', () => {
  assert.equal(groupLabel('cause', 'en'), 'Cause and consequence');
  assert.equal(groupLabel('cause', 'ru'), 'Причина и следствие');
  assert.equal(new Set(GROUPS.map(g => groupLabel(g.key, 'en'))).size, 9);
  assert.equal(new Set(GROUPS.map(g => groupLabel(g.key, 'ru'))).size, 9);
});
