import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyState, loadState, normalizeState, saveState, STORAGE_KEY } from '../src/lib/storage.ts';

const values = new Map();
globalThis.window = {
  localStorage: { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) },
  dispatchEvent: () => true,
};

test('missing or broken storage falls back to an empty state', () => {
  values.clear();
  assert.deepEqual(loadState(), emptyState());
  values.set(STORAGE_KEY, '{not json');
  assert.deepEqual(loadState(), emptyState());
});

test('malformed nested values are dropped and valid ones kept', () => {
  const state = normalizeState({
    topics: { 'geo/a': { done: '2026-10-13', rag: 'green' }, 'geo/b': { rag: 'purple' }, 'geo/c': null },
    terms: { 'geo/t': { box: 9, due: '2026-10-14' }, 'geo/u': { box: 'x', due: 1 } },
    questions: { 'geo/q1': { rating: 'partial', at: '2026-10-13' }, 'geo/q2': { rating: 'great', at: '2026-10-13' } },
    blocks: { b1: '2026-10-13', b2: 5 },
    settings: {
      accessArrangements: { extraTime: true, separateRoom: 'yes' },
      dailyLoadMinutes: { sat: 270, funday: 60, sun: -5, mon: 'long' },
    },
  });
  assert.deepEqual(state.topics, { 'geo/a': { done: '2026-10-13', rag: 'green' }, 'geo/b': {} });
  assert.deepEqual(state.terms, { 'geo/t': { box: 4, due: '2026-10-14' } });
  assert.deepEqual(state.questions, { 'geo/q1': { rating: 'partial', at: '2026-10-13' } });
  assert.deepEqual(state.blocks, { b1: '2026-10-13' });
  // No version: a save from before version 3, so its extra time is not trusted.
  assert.deepEqual(state.settings.accessArrangements, { extraTime: false, separateRoom: false, room: 'unknown' });
  assert.deepEqual(state.settings.dailyLoadMinutes, { sat: 270, sun: 0 });
});

test('a saved state loads back unchanged', () => {
  values.clear();
  const state = emptyState();
  state.topics['geo/a'] = { rag: 'amber' };
  state.questions['geo/q1'] = { rating: 'right', at: '2026-10-13' };
  state.settings.dailyLoadMinutes = { fri: 120 };
  saveState(state);
  assert.deepEqual(loadState(), state);
});

test('extra time is off by default', () => {
  assert.deepEqual(emptyState().settings.accessArrangements, { extraTime: false, separateRoom: false, room: 'unknown' });
  assert.deepEqual(normalizeState({}).settings.accessArrangements, { extraTime: false, separateRoom: false, room: 'unknown' });
});

test('a save from before version 3 has its extra time switched off, and the rest of it is kept', () => {
  // Version 2 saves had +25% on by default. [redacted] has no extra time ([redacted], 14 Oct 2026), so the stored value is not trusted.
  assert.deepEqual(
    normalizeState({ version: 2, settings: { accessArrangements: { extraTime: true, room: 'SpHal2' } } }).settings.accessArrangements,
    { extraTime: false, separateRoom: false, room: 'SpHal2' },
  );
  assert.deepEqual(
    normalizeState({ version: 1, settings: { accessArrangements: { extraTime: true, room: 'ACC2' } } }).settings.accessArrangements,
    { extraTime: false, separateRoom: true, room: 'ACC2' },
  );
  const migrated = normalizeState({
    version: 2,
    topics: { 'geo/a': { rag: 'green' } },
    settings: { accessArrangements: { extraTime: true }, dailyLoadMinutes: { fri: 120 } },
  });
  assert.deepEqual(migrated.topics, { 'geo/a': { rag: 'green' } });
  assert.deepEqual(migrated.settings.dailyLoadMinutes, { fri: 120 });
});

test('a version 3 save keeps the extra time the student chose, and the room survives a reload', () => {
  assert.deepEqual(
    normalizeState({ version: 3, settings: { accessArrangements: { extraTime: true, room: 'SpHal2' } } }).settings.accessArrangements,
    { extraTime: true, separateRoom: false, room: 'SpHal2' },
  );
  assert.deepEqual(
    normalizeState({ version: 3, settings: { accessArrangements: { extraTime: false, room: 'ACC2' } } }).settings.accessArrangements,
    { extraTime: false, separateRoom: true, room: 'ACC2' },
  );
  assert.deepEqual(
    normalizeState({ version: 3, settings: { accessArrangements: { room: 'ACC2' } } }).settings.accessArrangements,
    { extraTime: false, separateRoom: true, room: 'ACC2' },
  );
  // Room rules as before: an old save with only the separateRoom flag means ACC2 when the flag is true.
  assert.deepEqual(
    normalizeState({ settings: { accessArrangements: { separateRoom: true } } }).settings.accessArrangements,
    { extraTime: false, separateRoom: true, room: 'ACC2' },
  );
  assert.deepEqual(
    normalizeState({ settings: { accessArrangements: { room: 'Hall 3' } } }).settings.accessArrangements,
    { extraTime: false, separateRoom: false, room: 'unknown' },
  );
});

test('loading a saved state never writes to localStorage', () => {
  values.clear();
  values.set(STORAGE_KEY, JSON.stringify({ version: 2, settings: { accessArrangements: { extraTime: true, room: 'SpHal2' } } }));
  const setItem = window.localStorage.setItem;
  let writes = 0;
  window.localStorage.setItem = (key, value) => {
    writes += 1;
    return setItem(key, value);
  };
  try {
    assert.equal(loadState().settings.accessArrangements.extraTime, false);
    assert.equal(writes, 0);
  } finally {
    window.localStorage.setItem = setItem;
  }
});
