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
    blocks: { b1: '2026-10-13', b2: 5 },
    settings: { accessArrangements: { extraTime: true, separateRoom: 'yes' } },
  });
  assert.deepEqual(state.topics, { 'geo/a': { done: '2026-10-13', rag: 'green' }, 'geo/b': {} });
  assert.deepEqual(state.terms, { 'geo/t': { box: 4, due: '2026-10-14' } });
  assert.deepEqual(state.blocks, { b1: '2026-10-13' });
  assert.deepEqual(state.settings.accessArrangements, { extraTime: true, separateRoom: false });
});

test('a saved state loads back unchanged', () => {
  values.clear();
  const state = emptyState();
  state.topics['geo/a'] = { rag: 'amber' };
  saveState(state);
  assert.deepEqual(loadState(), state);
});
