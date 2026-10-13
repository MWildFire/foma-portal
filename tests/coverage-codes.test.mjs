import test from 'node:test';
import assert from 'node:assert/strict';
import { computeCoverage } from '../scripts/lib/syllabus-coverage.ts';
import { createLocator } from '../scripts/lib/locator.ts';
import { createReport } from '../scripts/lib/report.ts';
import { checkRefs } from '../scripts/lib/rules-data.ts';

// A topic may cover several syllabus codes through `codes` (grouping). `code` stays the main one.

const SYLLABUS = [{ code: '1.1' }, { code: '1.2' }, { code: '1.3' }];

function makePack(topics) {
  return { meta: { id: 'math' }, syllabus: SYLLABUS, topics, terms: [], formulas: [], questions: [], cases: [], papers: [] };
}

test('a topic with codes covers each of them', () => {
  const pack = makePack([
    { id: 'grouped', code: '1.1', codes: ['1.2'], inMockScope: 'yes' },
    { id: 'single', code: '1.3', inMockScope: 'yes' },
  ]);
  const coverage = computeCoverage(pack, () => true);
  assert.equal(coverage.coveredInScope, 3);
  assert.equal(coverage.percent, 100);
  assert.deepEqual(coverage.rows.find(row => row.code === '1.2').topicIds, ['grouped']);
});

test('without codes, a code needs a topic of its own', () => {
  const pack = makePack([
    { id: 'grouped', code: '1.1', inMockScope: 'yes' },
    { id: 'single', code: '1.3', inMockScope: 'yes' },
  ]);
  const coverage = computeCoverage(pack, () => true);
  assert.equal(coverage.rows.find(row => row.code === '1.2').scope, 'unknown');
  assert.equal(coverage.coveredInScope, 2);
});

test('the validator rejects a codes entry that is not in syllabus.ts', () => {
  const pack = makePack([{ id: 'grouped', subject: 'math', code: '1.1', codes: ['9.9'], inMockScope: 'yes', termIds: [], questionIds: [], sources: [], outcomes: [] }]);
  const report = createReport();
  checkRefs(report, { subject: 'math', pack, where: createLocator([], 'math'), sims: new Map(), exams: null });
  assert.ok(report.issues.some(issue => issue.severity === 'error' && issue.message.includes('codes lists "9.9"')));
});
