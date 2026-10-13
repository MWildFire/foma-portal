import test from 'node:test';
import assert from 'node:assert/strict';
import { isTermFile, termIdsOfSource } from '../scripts/lib/term-ids.ts';

// The planner reads the term ids from the term files (scripts/lib/term-ids.ts); the validator checks them against
// the terms the pack loads. These tests fix what the reader sees.

test('the reader finds the id of every literal term in export const terms', () => {
  const source = "export const terms: Term[] = [\n  { id: 'a', term: { en: 'x', ru: 'x' } },\n  { id: 'b', term: { en: 'y', ru: 'y' } },\n];";
  assert.deepEqual(termIdsOfSource('terms/x.ts', source), ['a', 'b']);
});

test('terms built with a spread or a helper are not seen (the validator reports them)', () => {
  assert.deepEqual(termIdsOfSource('terms/x.ts', "const base = [{ id: 'hidden' }];\nexport const terms = [...base];"), []);
  assert.deepEqual(termIdsOfSource('terms/x.ts', "export const terms = [term('x')];"), []);
});

test('other arrays and objects with an id do not count', () => {
  const source = "export const questions = [{ id: 'q' }];\nexport const terms = [{ id: 'a', src: { id: 'not-a-term' } }];";
  assert.deepEqual(termIdsOfSource('terms/x.ts', source), ['a']);
});

test('only .ts files directly inside a terms folder are term files', () => {
  assert.equal(isTermFile('content/geo/options/terms/g2.ts'), true);
  assert.equal(isTermFile('content/geo/terms/g1.ts'), true);
  assert.equal(isTermFile('content/geo/options/terms/g2.mdx'), false);
  assert.equal(isTermFile('content/geo/options/terms/nested/g2.ts'), false);
  assert.equal(isTermFile('content/geo/options/topics/g2.ts'), false);
});
