import test from 'node:test';
import assert from 'node:assert/strict';
import { isChunkLoadError } from '../src/lib/chunk-error.ts';

test('the messages browsers give when a lazy file cannot be fetched are chunk-load errors', () => {
  assert.equal(isChunkLoadError(new TypeError('Failed to fetch dynamically imported module: https://example.org/assets/math-3f9a.js')), true);
  assert.equal(isChunkLoadError(new TypeError('error loading dynamically imported module')), true);
  assert.equal(isChunkLoadError(new TypeError('Importing a module script failed.')), true);
  assert.equal(isChunkLoadError(new TypeError('Load failed')), true);
  assert.equal(isChunkLoadError(new Error('Unable to preload CSS for /assets/subject-1a2b.css')), true);
  assert.equal(isChunkLoadError('Failed to fetch dynamically imported module'), true);
});

test('other errors are not chunk-load errors', () => {
  assert.equal(isChunkLoadError(new TypeError("Cannot read properties of undefined (reading 'topics')")), false);
  assert.equal(isChunkLoadError(new Error('Load failed because the file is corrupt')), false);
  assert.equal(isChunkLoadError(new Error('Subject not found')), false);
  assert.equal(isChunkLoadError(new Error('')), false);
});

test('values that are neither an error nor a message are not chunk-load errors', () => {
  assert.equal(isChunkLoadError(undefined), false);
  assert.equal(isChunkLoadError(null), false);
  assert.equal(isChunkLoadError(42), false);
});
