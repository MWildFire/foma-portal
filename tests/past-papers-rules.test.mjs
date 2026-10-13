import test from 'node:test';
import assert from 'node:assert/strict';
import { readExamPapers } from '../scripts/lib/duration.ts';
import { classifyFile } from '../scripts/lib/files.ts';
import { createLocator } from '../scripts/lib/locator.ts';
import { normalizePack } from '../scripts/lib/model.ts';
import { createReport } from '../scripts/lib/report.ts';
import { checkPastPapers } from '../scripts/lib/rules-past-papers.ts';
import { hasNamedExport } from '../scripts/lib/rules-files.ts';

// Rules for content/<s>/**/pastpapers.ts. The exam rows are the same shape as data/exams.json.

const EXAMS = readExamPapers({
  papers: [
    { id: 'geo-p1', subject: 'geo', paper: 'P1', minutes: 90 },
    { id: 'fr-p2r', subject: 'fr', paper: 'P2', part: 'reading', minutes: 45 },
    { id: 'fr-p2l', subject: 'fr', paper: 'P2', part: 'listening', minutes: 60 },
    { id: 'econ-p3', subject: 'econ', paper: 'P3', minutes: 60 },
  ],
}).papers;

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
  checkPastPapers(report, { subject, pack, where: createLocator([], subject), sims: new Map(), exams: EXAMS });
  return report.issues;
}

const errorsOf = issues => issues.filter(issue => issue.severity === 'error').map(issue => issue.message);
const warningsOf = issues => issues.filter(issue => issue.severity === 'warning').map(issue => issue.message);

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

test('minutes must equal the paper time in data/exams.json', () => {
  assert.ok(errorsOf(run([{ ...VALID, minutes: 75 }])).some(message => message.includes('data/exams.json (geo-p1) says 90')));
});

test('a paper sat in parts needs a part, and each part has its own time', () => {
  const ambiguous = { ...VALID, id: 'fr-p2-m24', subject: 'fr', paper: 'P2', minutes: 45 };
  assert.ok(errorsOf(run([ambiguous], 'fr')).some(message => message.includes('sat in parts')));
  assert.deepEqual(errorsOf(run([{ ...ambiguous, id: 'fr-p2-m24-r', part: 'reading' }], 'fr')), []);
  assert.ok(errorsOf(run([{ ...ambiguous, id: 'fr-p2-m24-l', part: 'listening', minutes: 45 }], 'fr')).some(message => message.includes('says 60')));
});

test('questions split from a paper keep the mock time of the whole paper', () => {
  const split = { ...VALID, id: 'econ-p3-m22-q1', subject: 'econ', paper: 'P3', part: 'question-1', minutes: 60, marks: 30, items: [{ q: '1a', marks: 4, topicIds: ['core-1-1'] }] };
  assert.deepEqual(errorsOf(run([split], 'econ')), []);
  assert.ok(errorsOf(run([{ ...split, minutes: 105 }], 'econ')).some(message => message.includes('says 60')));
});

test('a part without a row of its own is timed like the whole paper', () => {
  assert.deepEqual(errorsOf(run([{ ...VALID, id: 'geo-p1-m24-option-g', part: 'option-G' }])), []);
});

test('a session must look like M24 or N23, and a level must be SL, HL or SLHL', () => {
  assert.ok(errorsOf(run([{ ...VALID, session: 'May24' }])).some(message => message.includes('session must look like')));
  assert.ok(errorsOf(run([{ ...VALID, level: 'AI' }])).some(message => message.includes('level must be')));
});

test('a past paper belongs to the folder it is in', () => {
  assert.ok(errorsOf(run([{ ...VALID, subject: 'math' }])).some(message => message.includes('folder is "geo"')));
});

test('a paper that is not in data/exams.json is a warning, not an error', () => {
  const issues = run([{ ...VALID, id: 'geo-p3-m24', paper: 'P3', minutes: 60 }]);
  assert.deepEqual(errorsOf(issues), []);
  assert.ok(warningsOf(issues).some(message => message.includes('not listed in data/exams.json')));
});

test('items need a label, positive marks and an optional mock-scope flag', () => {
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
