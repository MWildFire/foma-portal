import test from 'node:test';
import assert from 'node:assert/strict';
import { setAccessArrangement, setDailyLoad } from '../src/planner/actions.ts';
import { DEFAULT_DAILY_LOAD, effectiveLoad, MAX_DAILY_LOAD, parseLoadInput } from '../src/planner/loads.ts';
import { checkImport, progressKeys } from '../src/planner/progress-code.ts';
import { collectProgress, encodeProgress } from '../src/lib/transfer.ts';
import { dayOf, emptyState, plan } from './planner-fixtures.mjs';

test('the default loads are the ones of PLAN.md', () => {
  assert.deepEqual(DEFAULT_DAILY_LOAD, { mon: 150, tue: 150, wed: 150, thu: 150, fri: 120, sat: 270, sun: 270 });
  assert.equal(effectiveLoad({}, 'sat'), 270);
  assert.equal(effectiveLoad({ sat: 180 }, 'sat'), 180);
  assert.equal(effectiveLoad({ sat: 0 }, 'sat'), 0, 'zero is a real choice: a rest day');
});

test('a load override is saved per weekday and can be reset', () => {
  let state = setDailyLoad(emptyState(), 'sat', 180);
  assert.deepEqual(state.settings.dailyLoadMinutes, { sat: 180 });
  state = setDailyLoad(state, 'mon', 90);
  assert.deepEqual(state.settings.dailyLoadMinutes, { sat: 180, mon: 90 });
  state = setDailyLoad(state, 'sat', null);
  assert.deepEqual(state.settings.dailyLoadMinutes, { mon: 90 });
  state = setDailyLoad(state, 'sun', 0);
  assert.equal(state.settings.dailyLoadMinutes.sun, 0);
  assert.deepEqual(emptyState().settings.dailyLoadMinutes, {}, 'the original state is untouched');
});

test('typing the usual load is a real setting; only reset removes it', () => {
  // Fri 30 Oct has 240 minutes in the schedule, so "120 on Fridays" must be kept to apply there too.
  let state = setDailyLoad(setDailyLoad(emptyState(), 'fri', 90), 'fri', 120);
  assert.deepEqual(state.settings.dailyLoadMinutes, { fri: 120 });
  const oct30 = dayOf(plan('2026-10-14', { state }), '2026-10-30');
  assert.equal(oct30.capacity, 120);
  assert.equal(dayOf(plan('2026-10-14'), '2026-10-30').capacity, 240, 'without a setting the schedule decides');
  state = setDailyLoad(state, 'fri', null);
  assert.deepEqual(state.settings.dailyLoadMinutes, {});
  assert.deepEqual(setDailyLoad(emptyState(), 'fri', Number.NaN).settings.dailyLoadMinutes, {});
});

test('loads are kept within 0 and 600 minutes', () => {
  assert.equal(setDailyLoad(emptyState(), 'tue', 5000).settings.dailyLoadMinutes.tue, MAX_DAILY_LOAD);
  assert.equal(setDailyLoad(emptyState(), 'tue', -5).settings.dailyLoadMinutes.tue, 0);
  assert.equal(parseLoadInput('180'), 180);
  assert.equal(parseLoadInput(' 90 '), 90);
  assert.equal(parseLoadInput('0'), 0);
  assert.equal(parseLoadInput('600'), 600);
  for (const bad of ['', '601', '-5', '1.5', 'abc', '9999', '1e2']) assert.equal(parseLoadInput(bad), null, bad);
});

test('room flag is written to settings.accessArrangements', () => {
 const state=setAccessArrangement(emptyState(), 'separateRoom', true);
 assert.equal(state.settings.accessArrangements.separateRoom,true);
});

test('a progress code is checked before anything is replaced', () => {
  const storage = new Map([['foma-portal-v1', JSON.stringify({ topics: { 'geo/a': { rag: 'red' } } })], ['foma-lang', 'ru'], ['other', 'x']]);
  const like = { get length() { return storage.size; }, key: i => [...storage.keys()][i] ?? null, getItem: k => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, v) };
  const code = encodeProgress(collectProgress(like), '2026-10-14T08:00:00.000Z');

  const ok = checkImport(`  ${code}\n`);
  assert.equal(ok.ok, true);
  assert.equal(ok.items, 1, 'the progress itself; the language key does not count');
  assert.equal(ok.madeAt, '2026-10-14T08:00:00.000Z');
  assert.deepEqual(Object.keys(ok.pack.data).sort(), ['foma-lang', 'foma-portal-v1'], 'the language still travels with the code');
  assert.deepEqual(checkImport(encodeProgress({ 'foma-lang': 'ru' })), { ok: false, problem: 'no-progress' });
  assert.deepEqual(progressKeys({ 'foma-lang': 'en', 'foma-portal-v1': '{}', 'foma-portal-extra': 'x' }), ['foma-portal-v1', 'foma-portal-extra']);

  assert.deepEqual(checkImport(''), { ok: false, problem: 'empty' });
  assert.deepEqual(checkImport('   '), { ok: false, problem: 'empty' });
  assert.deepEqual(checkImport('not a code!'), { ok: false, problem: 'invalid' });
  assert.deepEqual(checkImport(code.slice(0, 20)), { ok: false, problem: 'invalid' });
  assert.deepEqual(checkImport(encodeProgress({})), { ok: false, problem: 'no-progress' });
  assert.deepEqual(checkImport(encodeProgress({ 'foma-portal-v1': '{broken' })), { ok: false, problem: 'damaged' });
  assert.deepEqual(checkImport(encodeProgress({ 'foma-portal-v1': '[1,2]' })), { ok: false, problem: 'damaged' });
  assert.deepEqual(checkImport(encodeProgress({ other: 'x' })), { ok: false, problem: 'no-progress' });
});
