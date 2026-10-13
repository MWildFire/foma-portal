import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseQuotas } from '../src/planner/calendar.ts';
import { parseBlockId, timedBlockId } from '../src/planner/blocks.ts';
import { papers } from '../content/math/papers.ts';
import { dayOf, emptyState, plan, quotas, withSettings } from './planner-fixtures.mjs';

// The math diagnostic is a timed set of the P1 guide, planned on the first day of the plan (decision of round 4, D1-01).
const DAY = '2026-10-14';
const SET = 'diagnostic';
const CYRILLIC = /[а-яё]/i;

const diagnosticBlock = state => dayOf(plan(DAY, { state }), DAY).blocks.find(block => block.kind === 'timed');
const withExtraTime = withSettings(emptyState(), { accessArrangements: { extraTime: true } });

test('the quotas file plans the math diagnostic as a timed set on the first day', () => {
  const entry = quotas.days[0].timed.find(item => item.set === SET);
  assert.ok(entry, 'the first day has a timed entry with the set');
  assert.equal(entry.subject, 'math');
  assert.equal(entry.paper, 'P1');
  assert.equal(entry.minutes, 45);
  assert.ok(entry.title.en && entry.title.ru, 'the title is in both languages');
});

test('the set exists in the guide of its subject and paper', () => {
  const guide = papers.find(item => item.subject === 'math' && item.paper === 'P1');
  assert.ok(guide?.timedSets?.some(item => item.id === SET), `the math P1 guide has the timed set "${SET}"`);
});

test('the diagnostic block links to the practice set, with the printed minutes, and has no exam or past paper', () => {
  const block = diagnosticBlock(emptyState());
  assert.equal(block.kind, 'timed');
  assert.equal(block.route, `/s/math/practice?set=${SET}`);
  assert.equal(block.minutes, 45);
  assert.equal(block.examId, undefined);
  assert.equal(block.pastPaper, undefined);
  assert.deepEqual(block.title, quotas.days[0].timed.find(item => item.set === SET).title);
});

test('with extra time the diagnostic runs 56 minutes, the school table value for 45', () => {
  assert.equal(diagnosticBlock(withExtraTime).minutes, 56);
});

test('a timed set never scales with the load of the day: the diagnostic keeps its 45 minutes at 75', () => {
  assert.equal(diagnosticBlock(withSettings(emptyState(), { dailyLoadMinutes: { wed: 75 } })).minutes, 45);
});

test('the diagnostic fills the math quota of the day, so no other math topic is planned there', () => {
  const day = dayOf(plan(DAY), DAY);
  assert.equal(day.blocks.filter(block => block.subject === 'math' && block.kind !== 'timed').length, 0);
});

test('a timed set has its own block id, and the id parses back to the set', () => {
  const id = timedBlockId(DAY, 'math', 'P1', SET);
  assert.equal(id, `m:${DAY}/math/P1:${SET}`);
  assert.deepEqual(parseBlockId(id), { kind: 'timed', date: DAY, subject: 'math', paper: 'P1', set: SET });
  assert.deepEqual(parseBlockId(timedBlockId(DAY, 'math', 'P1')), { kind: 'timed', date: DAY, subject: 'math', paper: 'P1' });
});

test('every day has a focus in both languages: English without Cyrillic, Russian with it', () => {
  for (const day of quotas.days) {
    assert.ok(day.focus, `${day.date} has a focus`);
    assert.ok(day.focus.en.trim() && day.focus.ru.trim(), `${day.date} has both texts`);
    assert.equal(CYRILLIC.test(day.focus.en), false, `${day.date}: the English focus has no Cyrillic`);
    assert.equal(CYRILLIC.test(day.focus.ru), true, `${day.date}: the Russian focus has Cyrillic`);
  }
});

test('the reader does not take a focus given as a plain string: it would show in one language only', () => {
  const raw = JSON.parse(readFileSync(new URL('../data/plan-quotas.json', import.meta.url), 'utf8'));
  raw.days[0].focus = 'Diagnostics';
  assert.equal(parseQuotas(raw).days[0].focus, null);
});
