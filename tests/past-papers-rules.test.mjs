import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyFile } from '../scripts/lib/files.ts';
import { createLocator } from '../scripts/lib/locator.ts';
import { normalizePack } from '../scripts/lib/model.ts';
import { createReport } from '../scripts/lib/report.ts';
import { checkPastPapers } from '../scripts/lib/rules-past-papers.ts';
import { hasNamedExport } from '../scripts/lib/rules-files.ts';

// Rules for content/<s>/**/pastpapers.ts. Minutes are the time printed on the paper cover for that session, or the time
// of a section (part), so they are not compared with data/exams.json: only a sanity range is checked.

const VALID = {
  id: 'geo-p1-m24-tz1',
  subject: 'geo',
  paper: 'P1',
  session: 'M24',
  level: 'SL',
  files: [{ kind: 'questions', url: 'https://ibdocs.re/geo/m24/p1-questions.pdf' }],
  minutes: 90,
  marks: 30,
  items: [{ q: '1a', marks: 4, topicIds: ['core-1-1'] }],
  guide: { en: 'Define the term first.', ru: 'Сначала дайте определение термина.' },
};

function run(refs, subject = 'geo') {
  const pack = { meta: { id: subject }, syllabus: [], topics: [{ id: 'core-1-1' }], terms: [], formulas: [], questions: [], cases: [], papers: [], pastPapers: refs };
  const report = createReport();
  checkPastPapers(report, { subject, pack, where: createLocator([], subject), sims: new Map(), exams: null });
  return report.issues;
}

const errorsOf = issues => issues.filter(issue => issue.severity === 'error').map(issue => issue.message);

test('a complete past paper passes every rule', () => {
  assert.deepEqual(errorsOf(run([VALID])), []);
});

test('ids must be unique and kebab-case', () => {
  assert.ok(errorsOf(run([VALID, { ...VALID }])).some(message => message.includes('ids must be unique')));
  assert.ok(errorsOf(run([{ ...VALID, id: 'Geo P1 M24' }])).some(message => message.includes('kebab-case')));
});

test('every item points at a topic of the same subject', () => {
  const issues = errorsOf(run([{ ...VALID, items: [{ q: '1a', marks: 4, topicIds: ['core-9-9'] }] }]));
  assert.ok(issues.some(message => message.includes('"core-9-9"') && message.includes('not a topic of geo')));
});

test('files may only link to ibdocs.re and use a known kind', () => {
  assert.ok(errorsOf(run([{ ...VALID, files: [{ kind: 'questions', url: 'https://example.com/p1.pdf' }] }])).some(message => message.includes('must start with https://ibdocs.re/')));
  assert.ok(errorsOf(run([{ ...VALID, files: [{ kind: 'notes', url: 'https://ibdocs.re/p1.pdf' }] }])).some(message => message.includes('file kind')));
});

test('minutes are a whole number from 5 to 240', () => {
  assert.ok(errorsOf(run([{ ...VALID, minutes: 0 }])).some(message => message.includes('minutes must be a whole number')));
  assert.ok(errorsOf(run([{ ...VALID, minutes: 1000 }])).some(message => message.includes('minutes must be a whole number')));
  assert.ok(errorsOf(run([{ ...VALID, minutes: 1.5 }])).some(message => message.includes('minutes must be a whole number')));
});

test('a past session keeps its own cover time, and a section keeps its own minutes', () => {
  assert.deepEqual(errorsOf(run([{ ...VALID, id: 'geo-p2-m21', paper: 'P2', minutes: 60 }], 'geo')), []);
  assert.deepEqual(errorsOf(run([{ ...VALID, id: 'geo-p2-m21-a', paper: 'P2', part: 'section-a', minutes: 30 }], 'geo')), []);
  assert.deepEqual(errorsOf(run([{ ...VALID, id: 'econ-p3-m22-q1', subject: 'econ', paper: 'P3', part: 'question-1', minutes: 60 }], 'econ')), []);
});

test('a section needs no entry in data/exams.json, and a paper with no entry raises no warning', () => {
  const issues = run([{ ...VALID, id: 'geo-p3-m24', paper: 'P3', minutes: 60 }]);
  assert.deepEqual(errorsOf(issues), []);
  assert.equal(issues.filter(issue => issue.severity === 'warning').length, 0);
});

test('a session must look like M24 or N23, and a level must be SL, HL or SLHL', () => {
  assert.ok(errorsOf(run([{ ...VALID, session: 'May24' }])).some(message => message.includes('session must look like')));
  assert.ok(errorsOf(run([{ ...VALID, level: 'AI' }])).some(message => message.includes('level must be')));
});

test('a specimen paper uses the session code SPEC and two digits, and nothing else passes as a specimen', () => {
  assert.deepEqual(errorsOf(run([{ ...VALID, session: 'SPEC27' }])), []);
  assert.ok(errorsOf(run([{ ...VALID, session: 'SPEC' }])).some(message => message.includes('session must look like')));
  assert.ok(errorsOf(run([{ ...VALID, session: 'SPEC2027' }])).some(message => message.includes('session must look like')));
});

test('a past paper belongs to the folder it is in', () => {
  assert.ok(errorsOf(run([{ ...VALID, subject: 'math' }])).some(message => message.includes('folder is "geo"')));
});

test('items need a label and positive marks', () => {
  assert.ok(errorsOf(run([{ ...VALID, items: [{ q: '', marks: 0, topicIds: ['core-1-1'] }] }])).length >= 2);
});

test('a pastpapers.ts file is classified and must export pastPapers', () => {
  assert.equal(classifyFile('options/pastpapers.ts'), 'past-papers');
  assert.equal(classifyFile('terms/a1.ts'), 'terms');
  assert.equal(hasNamedExport('export const pastPapers: PastPaperRef[] = [];', 'pastPapers'), true);
  assert.equal(hasNamedExport('export const papers = [];', 'pastPapers'), false);
});

test('a subject without past papers loads an empty list', () => {
  const { pack } = normalizePack({ meta: { id: 'geo' }, syllabus: [], topics: [], terms: [], formulas: [], questions: [], cases: [], papers: [] });
  assert.deepEqual(pack.pastPapers, []);
});
