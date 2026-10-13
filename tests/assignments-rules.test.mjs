import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyFile } from '../scripts/lib/files.ts';
import { createLocator } from '../scripts/lib/locator.ts';
import { createReport } from '../scripts/lib/report.ts';
import { checkAssignments } from '../scripts/lib/rules-assignments.ts';
import { hasNamedExport } from '../scripts/lib/rules-files.ts';

// Rules for content/<s>/**/assignments.ts: the teacher's tasks with due dates.

const VALID = {
  id: 'core-unit-2-revision',
  title: { en: 'Revise unit 2', ru: 'Повторить раздел 2' },
  due: '2026-10-20',
  url: 'https://thinkib.net/geography/core-2',
  topicIds: ['core-2-1'],
};

function run(items) {
  const pack = { meta: { id: 'geo' }, syllabus: [], topics: [{ id: 'core-2-1' }], terms: [], formulas: [], questions: [], cases: [], papers: [], pastPapers: [], assignments: items };
  const report = createReport();
  checkAssignments(report, { subject: 'geo', pack, where: createLocator([], 'geo'), sims: new Map(), exams: null });
  return report.issues;
}

const errorsOf = issues => issues.filter(issue => issue.severity === 'error').map(issue => issue.message);

test('a complete assignment passes', () => {
  assert.deepEqual(errorsOf(run([VALID])), []);
});

test('the due date must be a real calendar day', () => {
  assert.ok(errorsOf(run([{ ...VALID, due: '2026-02-30' }])).some(message => message.includes('due must be a date')));
  assert.ok(errorsOf(run([{ ...VALID, due: '20.10.2026' }])).some(message => message.includes('due must be a date')));
});

test('school and account pages are never linked', () => {
  for (const url of ['https://www.classlink.com/app', 'https://classroom.google.com/c/abc', 'https://drive.google.com/file/d/1', 'https://toddle.com/x']) {
    assert.ok(errorsOf(run([{ ...VALID, url }])).some(message => message.includes('school or account page')), url);
  }
});

test('a link must use https', () => {
  assert.ok(errorsOf(run([{ ...VALID, url: 'http://example.com/a' }])).some(message => message.includes('must start with https://')));
});

test('ids are unique and kebab-case; topics must exist', () => {
  assert.ok(errorsOf(run([VALID, { ...VALID }])).some(message => message.includes('ids must be unique')));
  assert.ok(errorsOf(run([{ ...VALID, id: 'Core 2' }])).some(message => message.includes('kebab-case')));
  assert.ok(errorsOf(run([{ ...VALID, topicIds: ['core-9-9'] }])).some(message => message.includes('"core-9-9"')));
});

test('an assignment without a topic is a warning', () => {
  const issues = run([{ ...VALID, topicIds: [] }]);
  assert.deepEqual(errorsOf(issues), []);
  assert.ok(issues.some(issue => issue.severity === 'warning' && issue.message.includes('no topic')));
});

test('assignments.ts is classified and must export assignments', () => {
  assert.equal(classifyFile('unit-2/assignments.ts'), 'assignments');
  assert.equal(hasNamedExport('export const assignments: Assignment[] = [];', 'assignments'), true);
});
