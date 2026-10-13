import test from 'node:test';
import assert from 'node:assert/strict';
import { matchExam, parseDuration, readExamPapers } from '../scripts/lib/duration.ts';
import { classifyFile, groupTopicBodies, hasBothBodies, hasDefaultExport, simProblem } from '../scripts/lib/files.ts';
import { createLocator } from '../scripts/lib/locator.ts';
import { describeLoadError } from '../scripts/lib/load.ts';
import { scanMath, stripLiterals, texError } from '../scripts/lib/math.ts';
import {
  analyzeMdx,
  componentSequence,
  EXPECTED_HEADINGS,
  firstSequenceDifference,
  headingProblems,
} from '../scripts/lib/mdx.ts';
import { normalizePack } from '../scripts/lib/model.ts';
import { countBySeverity, createReport, formatIssue, plural } from '../scripts/lib/report.ts';
import {
  checkFormulas,
  checkIds,
  checkPapers,
  checkQuestions,
  checkRefs,
  checkSources,
  checkTexts,
  collectLTexts,
  findDuplicates,
  idSets,
} from '../scripts/lib/rules-data.ts';
import { checkExports, checkPlaceholders, hasNamedExport } from '../scripts/lib/rules-files.ts';
import { checkMdxDoc, checkParity, checkSimUsage, checkTopicFiles } from '../scripts/lib/rules-mdx.ts';
import { computeStats, isEmptySubject, statsLine, statsWarnings } from '../scripts/lib/stats.ts';
import { computeCoverage, formatPercent, renderCoverage } from '../scripts/lib/syllabus-coverage.ts';
import { findPlaceholders, hasCyrillic, looksUntranslated, positionOf, scanCyrillic } from '../scripts/lib/text.ts';
import { checkSubjects, validateSubject } from '../scripts/lib/validate-subject.ts';

// ---------- helpers ----------

// A locator that knows no files: positions stay exactly as the rules pass them.
const NO_LOCATOR = createLocator([], 'geo');

const L = (en, ru) => ({ en, ru });

function makePack(overrides = {}) {
  return { meta: { id: 'geo' }, syllabus: [], topics: [], terms: [], formulas: [], questions: [], cases: [], papers: [], ...overrides };
}

function dataCtx(pack, extra = {}) {
  return { subject: 'geo', pack, where: NO_LOCATOR, sims: new Map(), exams: null, ...extra };
}

// Runs one rule and returns what it reported.
function run(rule, pack, extra) {
  const report = createReport();
  rule(report, dataCtx(pack, extra));
  return report.issues;
}

const messages = issues => issues.map(issue => issue.message);
const errors = issues => issues.filter(issue => issue.severity === 'error');
const hasMessage = (issues, part) => issues.some(issue => issue.message.includes(part));

function bodyFor(lang, overrides = {}) {
  const words = lang === 'en' ? 'Some words about the topic.' : 'Слова по теме.';
  return EXPECTED_HEADINGS[lang].map((title, index) => `## ${title}\n\n${overrides[index] ?? words}\n`).join('\n');
}

function mdxDoc(lang, text, topicId = 't1') {
  return { topicId, lang, file: { rel: `content/geo/topics/${topicId}.${lang}.mdx`, abs: `/repo/content/geo/topics/${topicId}.${lang}.mdx`, text }, result: analyzeMdx(text) };
}

function mdxCtx(pack, extra = {}) {
  return { subject: 'geo', pack, where: NO_LOCATOR, sims: new Map(), ids: idSets(pack), fileExists: () => true, ...extra };
}

function checkDoc(pack, doc, extra) {
  const report = createReport();
  checkMdxDoc(report, mdxCtx(pack, extra), doc);
  return report.issues;
}

// ---------- durations (rule 9) ----------

test('parseDuration reads numbers and 1h30 / 2h / 45m style strings', () => {
  assert.equal(parseDuration('1h30'), 90);
  assert.equal(parseDuration('1h 30m'), 90);
  assert.equal(parseDuration('1h15'), 75);
  assert.equal(parseDuration('2h'), 120);
  assert.equal(parseDuration('45m'), 45);
  assert.equal(parseDuration('45'), 45);
  assert.equal(parseDuration(105), 105);
});

test('parseDuration rejects anything that is not a positive duration', () => {
  for (const value of ['', 'abc', '1.5h', '0m', 0, -5, null, undefined, {}, Number.NaN]) assert.equal(parseDuration(value), null);
});

test('readExamPapers keeps good entries and reports broken ones', () => {
  const read = readExamPapers({ papers: [
    { id: 'a', subject: 'geo', paper: 'P1', minutes: 90 },
    { id: 'b', subject: 'fr', paper: 'P2', part: 'reading', minutes: '45m' },
    { id: 'c', subject: 'geo', paper: 'P2' },
  ] });
  assert.deepEqual(read.papers.map(paper => [paper.id, paper.minutes, paper.part]), [['a', 90, undefined], ['b', 45, 'reading']]);
  assert.equal(read.problems.length, 1);
  assert.match(read.problems[0], /^c:/);
  assert.equal(readExamPapers({}).problems.length, 1);
});

test('matchExam finds a single exam, a named part, or reports the parts of the paper', () => {
  const papers = [
    { id: 'geo-p1', subject: 'geo', paper: 'P1', minutes: 90 },
    { id: 'fr-p2r', subject: 'fr', paper: 'P2', part: 'reading', minutes: 45 },
    { id: 'fr-p2l', subject: 'fr', paper: 'P2', part: 'listening', minutes: 60 },
  ];
  assert.equal(matchExam(papers, { subject: 'geo', paper: 'P1' }).exam.id, 'geo-p1');
  assert.equal(matchExam(papers, { subject: 'fr', paper: 'P2', part: 'Listening' }).exam.id, 'fr-p2l');
  const parts = matchExam(papers, { subject: 'fr', paper: 'P2' });
  assert.equal(parts.kind, 'parts');
  assert.equal(parts.total, 105);
  assert.equal(matchExam(papers, { subject: 'geo', paper: 'P3' }).kind, 'none');
  assert.deepEqual(matchExam(papers, { subject: 'fr', paper: 'P2', part: 'oral' }).known, ['reading', 'listening']);
});

test('checkPapers compares guide minutes with data/exams.json (rule 9)', () => {
  const exams = [
    { id: 'geo-p1', subject: 'geo', paper: 'P1', minutes: 90 },
    { id: 'fr-p2r', subject: 'fr', paper: 'P2', part: 'reading', minutes: 45 },
    { id: 'fr-p2l', subject: 'fr', paper: 'P2', part: 'listening', minutes: 60 },
  ];
  const guide = (fields) => ({ subject: 'geo', paper: 'P1', minutes: 90, timedSets: [], ...fields });
  assert.deepEqual(run(checkPapers, makePack({ papers: [guide({})] }), { exams }), []);
  const wrong = run(checkPapers, makePack({ papers: [guide({ minutes: 75 })] }), { exams });
  assert.equal(errors(wrong).length, 1);
  assert.match(wrong[0].message, /has 75 minutes but data\/exams\.json \(geo-p1\) says 90/);
  const partless = run(checkPapers, makePack({ papers: [guide({ subject: 'geo', paper: 'P1', minutes: 90 })] }), { exams: exams.slice(1), subject: 'fr' });
  assert.equal(partless[0].severity, 'warning');   // geo P1 is not listed for fr, so it is only a warning
  const frWhole = run(checkPapers, makePack({ papers: [{ subject: 'fr', paper: 'P2', minutes: 105, timedSets: [] }] }), { exams, subject: 'fr' });
  assert.deepEqual(frWhole, []);
  const frWrong = run(checkPapers, makePack({ papers: [{ subject: 'fr', paper: 'P2', minutes: 45, timedSets: [] }] }), { exams, subject: 'fr' });
  assert.match(frWrong[0].message, /sits P2 in parts \(reading 45 \+ listening 60 = 105\)/);
  const frPart = run(checkPapers, makePack({ papers: [{ subject: 'fr', paper: 'P2', part: 'listening', minutes: 45, timedSets: [] }] }), { exams, subject: 'fr' });
  assert.match(frPart[0].message, /\(fr-p2l\) says 60/);
});

test('checkPapers skips the comparison when data/exams.json is unavailable', () => {
  assert.deepEqual(run(checkPapers, makePack({ papers: [{ subject: 'geo', paper: 'P1', minutes: 5, timedSets: [] }] })), []);
});

test('checkPapers requires positive timed-set minutes that fit the paper (rule 10)', () => {
  const sets = [
    { id: 'full', minutes: 90 },
    { id: 'half', minutes: 45 },
    { id: 'zero', minutes: 0 },
    { id: 'long', minutes: 120 },
    { id: 'missing' },
  ];
  const issues = run(checkPapers, makePack({ papers: [{ subject: 'geo', paper: 'P1', minutes: 90, timedSets: sets }] }));
  assert.deepEqual(messages(issues).map(text => /timed set "(\w+)"/.exec(text)[1]), ['zero', 'long', 'missing']);
  assert.ok(issues.every(issue => issue.rule === 'timed-set'));
  // Alternative sets are not added up: 90 + 45 is more than the 90-minute paper and is fine.
  assert.equal(errors(run(checkPapers, makePack({ papers: [{ subject: 'geo', paper: 'P1', minutes: 90, timedSets: sets.slice(0, 2) }] }))).length, 0);
});

test('checkPapers rejects a guide without positive minutes', () => {
  const issues = run(checkPapers, makePack({ papers: [{ subject: 'geo', paper: 'P1', minutes: 0, timedSets: [] }] }), { exams: [] });
  assert.equal(errors(issues).length, 1);
  assert.equal(issues[0].rule, 'duration');
});

// ---------- text helpers (rules 4 and 5) ----------

test('Cyrillic detection counts characters and finds the first one', () => {
  assert.equal(hasCyrillic('plain English'), false);
  assert.equal(hasCyrillic('спрос (demand)'), true);
  assert.deepEqual(scanCyrillic('ab да'), { count: 2, index: 3 });
  assert.deepEqual(scanCyrillic('none'), { count: 0, index: -1 });
  assert.deepEqual(positionOf('a\nbc\nd', 4), { line: 2, column: 3 });
});

test('looksUntranslated flags Latin-only Russian text but not formulas, numbers or neutral tokens', () => {
  assert.equal(looksUntranslated('The quantity of a good', 'The quantity of a good'), true);
  assert.equal(looksUntranslated('Количество товара', 'The quantity'), false);
  assert.equal(looksUntranslated('', 'x'), false);
  assert.equal(looksUntranslated('$x^2 + 1$', 'x'), false);
  assert.equal(looksUntranslated('12,5 %', '12.5 %'), false);
  assert.equal(looksUntranslated('SQL', 'SQL'), false);
  assert.equal(looksUntranslated('SQL', 'Structured Query Language'), true);
  assert.equal(looksUntranslated('Python code', 'Python code'), true);
  assert.equal(looksUntranslated('Цена $\\text{price}$', 'Price'), false);
  assert.equal(looksUntranslated('`SELECT name FROM students;`', '`SELECT name FROM students;`'), false);   // code is not prose
  assert.equal(looksUntranslated('Run `SELECT 1` now', 'Run `SELECT 1` now'), true);
});

test('findPlaceholders matches TODO, TBD, lorem and ??? as words in any case', () => {
  const hits = findPlaceholders('ok\nTODO fix\nthis is Tbd\nLorem ipsum\nwhat ???\nmastodon and todos and to-do');
  assert.deepEqual(hits.map(hit => [hit.marker, hit.line]), [['TODO', 2], ['Tbd', 3], ['Lorem', 4], ['???', 5]]);
  assert.deepEqual(findPlaceholders('a clean line of text'), []);
});

// ---------- math (rule 7) ----------

test('scanMath finds inline and display formulas', () => {
  const scan = scanMath('Energy $E = mc^2$ and $$\\frac{a}{b}$$ done');
  assert.deepEqual(scan.segments.map(segment => [segment.tex, segment.display]), [['E = mc^2', false], ['\\frac{a}{b}', true]]);
  assert.deepEqual(scan.unbalanced, []);
});

test('scanMath treats \\$ as a literal dollar sign and skips code spans', () => {
  assert.deepEqual(scanMath('costs \\$5 and \\$6').segments, []);
  assert.deepEqual(scanMath('costs \\$5 and \\$6').unbalanced, []);
  assert.deepEqual(scanMath('run `echo $HOME` now').unbalanced, []);
  assert.deepEqual(scanMath('``a ` $ b`` text').unbalanced, []);
  const inside = scanMath('$a \\$ b$');
  assert.equal(inside.segments.length, 1);
  assert.equal(inside.segments[0].tex, 'a \\$ b');
});

test('scanMath reports a dollar sign that never closes', () => {
  assert.deepEqual(scanMath('it costs $5 today').unbalanced, [9]);
  assert.equal(scanMath('$$ open').unbalanced.length, 1);
  assert.equal(scanMath('$a$ and $').unbalanced.length, 1);
});

test('stripLiterals cuts formulas and code spans out of a string', () => {
  assert.equal(stripLiterals('a $x$ b $$y$$ c'), 'a  b  c');
  assert.equal(stripLiterals('run `SELECT 1` and $x$ now'), 'run  and  now');
  assert.equal(stripLiterals('no math'), 'no math');
});

test('texError accepts valid TeX and explains invalid TeX', () => {
  assert.equal(texError('\\frac{a}{b}', false), null);
  assert.equal(texError('', false), null);
  assert.match(texError('\\fraq{a}{b}', false).message, /Undefined control sequence: \\fraq/);
  assert.match(texError('\\frac{a}{b', false).message, /end of input/);
  assert.match(texError('\\begin{align} a &= b \\end{align}', false).message, /display mode/);
  assert.equal(texError('\\begin{align} a &= b \\end{align}', true), null);
});

// ---------- files, sims and the locator ----------

test('classifyFile follows the glob patterns of content/<s>/index.ts', () => {
  assert.equal(classifyFile('syllabus.ts'), 'syllabus');
  assert.equal(classifyFile('core/syllabus.ts'), 'syllabus');
  assert.equal(classifyFile('core/topics/climate.meta.ts'), 'topic-meta');
  assert.equal(classifyFile('core/topics/climate.en.mdx'), 'topic-mdx');
  assert.equal(classifyFile('topics/climate.ru.mdx'), 'topic-mdx');
  assert.equal(classifyFile('terms/a.ts'), 'terms');
  assert.equal(classifyFile('x/formulas/a.ts'), 'formulas');
  assert.equal(classifyFile('questions/a.ts'), 'questions');
  assert.equal(classifyFile('options/cases/a.ts'), 'cases');
  assert.equal(classifyFile('options/papers.ts'), 'papers');
  for (const other of ['meta.ts', 'index.ts', 'topics/assets/x.svg', 'terms/readme.md', 'misc/a.ts']) assert.equal(classifyFile(other), 'other');
});

test('hasDefaultExport accepts the usual forms and ignores comments', () => {
  assert.equal(hasDefaultExport('export default function Sim() {}'), true);
  assert.equal(hasDefaultExport('const A = 1;\nexport default A;'), true);
  assert.equal(hasDefaultExport('export { A as default };'), true);
  assert.equal(hasDefaultExport("export { default } from './x';"), true);
  assert.equal(hasDefaultExport('export function Sim() {}'), false);
  assert.equal(hasDefaultExport('// export default Sim\nexport const x = 1;'), false);
  assert.equal(hasDefaultExport('/* export default Sim */ const x = 1;'), false);
});

test('hasNamedExport finds the export a glob file must provide', () => {
  assert.equal(hasNamedExport('export const terms: Term[] = [];', 'terms'), true);
  assert.equal(hasNamedExport('const terms = [];\nexport { terms };', 'terms'), true);
  assert.equal(hasNamedExport('export const term = [];', 'terms'), false);
  assert.equal(hasNamedExport('// export const terms = [];', 'terms'), false);
});

test('simProblem explains why a sim id cannot be used', () => {
  const sims = new Map([
    ['geo.ok', { id: 'geo.ok', rel: 'src/sims/geo/ok.tsx', hasDefaultExport: true }],
    ['geo.bare', { id: 'geo.bare', rel: 'src/sims/geo/bare.tsx', hasDefaultExport: false }],
  ]);
  assert.equal(simProblem('geo', 'geo.ok', sims), null);
  assert.match(simProblem('geo', 'math.ok', sims), /is not a geo sim/);
  assert.match(simProblem('geo', 'geo.', sims), /is not a geo sim/);
  assert.match(simProblem('geo', 'geo.gone', sims), /no file src\/sims\/geo\/gone\.tsx/);
  assert.match(simProblem('geo', 'geo.bare', sims), /no "export default"/);
});

test('groupTopicBodies pairs bodies by topic id', () => {
  const files = ['a.en.mdx', 'a.ru.mdx', 'b.en.mdx'].map(name => ({ rel: `content/geo/topics/${name}`, abs: `/r/${name}` }))
    .concat([{ rel: 'content/geo/topics/a.meta.ts', abs: '/r/a.meta.ts' }]);
  const bodies = groupTopicBodies(files, 'geo');
  assert.equal(hasBothBodies(bodies, 'a'), true);
  assert.equal(hasBothBodies(bodies, 'b'), false);
  assert.equal(hasBothBodies(bodies, 'c'), false);
});

test('describeLoadError turns Vite errors into a message with file and line', () => {
  const root = '/repo';
  const transform = describeLoadError({
    message: 'Transform failed with 1 error:\n/repo/content/geo/terms/a.ts:2:0: ERROR: Expected identifier but found end of file',
    id: '/repo/content/geo/terms/a.ts',
    loc: { file: '/repo/content/geo/terms/a.ts', line: 2 },
  }, root);
  assert.deepEqual(transform, { message: 'Transform failed with 1 error: content/geo/terms/a.ts:2:0: ERROR: Expected identifier but found end of file', file: 'content/geo/terms/a.ts', line: 2 });
  const thrown = describeLoadError({
    message: 'boom at load',
    stack: 'Error: boom at load\n    at eval (/repo/node_modules/vite/dist/x.js:10:1)\n    at eval (/repo/content/geo/terms/b.ts:5:9)\n    at run (/repo/node_modules/vite/y.js:1:1)',
  }, root);
  assert.deepEqual(thrown, { message: 'boom at load', file: 'content/geo/terms/b.ts', line: 5 });
  assert.deepEqual(describeLoadError('plain failure', root), { message: 'plain failure', file: undefined, line: undefined });
  // a fixture that itself lives below node_modules still counts as project code
  const nested = describeLoadError({ message: 'x', stack: 'at f (/repo/node_modules/.tmp/fx/content/geo/a.ts:3:1)' }, '/repo/node_modules/.tmp/fx');
  assert.equal(nested.file, 'content/geo/a.ts');
});

test('the locator finds the lines that define an item', () => {
  const files = [
    { rel: 'content/geo/terms/a.ts', abs: '/r/a.ts', text: "export const terms = [\n  {\n    id: 'demand',\n    syllabus: 'EX.9',\n  },\n  { id: \"supply\", x: 1 },\n];\n" },
    { rel: 'content/geo/terms/b.ts', abs: '/r/b.ts', text: "export const terms = [{ id: 'demand' }];\n" },
    { rel: 'content/geo/syllabus.ts', abs: '/r/s.ts', text: "export const syllabus = [{ code: 'EX.1' }];\n" },
  ];
  const where = createLocator(files, 'geo');
  assert.deepEqual(where.find('term', 'demand'), { file: 'content/geo/terms/a.ts', line: 3 });
  assert.deepEqual(where.all('term', 'demand').map(pos => `${pos.file}:${pos.line}`), ['content/geo/terms/a.ts:3', 'content/geo/terms/b.ts:1']);
  assert.deepEqual(where.find('term', 'supply'), { file: 'content/geo/terms/a.ts', line: 6 });
  assert.deepEqual(where.find('syllabus', 'EX.1'), { file: 'content/geo/syllabus.ts', line: 1 });
  assert.equal(where.find('term', 'nothing'), undefined);
  assert.deepEqual(where.within(where.find('term', 'demand'), ["'EX.9'"]), { file: 'content/geo/terms/a.ts', line: 4 });
  assert.deepEqual(where.within(where.find('term', 'demand'), ['not there']), { file: 'content/geo/terms/a.ts', line: 3 });
});

// ---------- MDX (rule 3) ----------

test('analyzeMdx lists headings, components and formulas of a valid body', () => {
  const text = `${bodyFor('en', { 1: 'See <Term id="a"/> and $x^2$.\n\n$$\ny = 1\n$$\n\n<Callout kind="tip">Careful.</Callout>', 3: '<Sim id="geo.s"/>\n\n<Figure src="./assets/x.svg" caption="A figure."/>' })}`;
  const result = analyzeMdx(text);
  assert.equal(result.ok, true);
  const { headings, components, math, problems } = result.analysis;
  assert.deepEqual(headings.map(heading => heading.text), EXPECTED_HEADINGS.en);
  assert.deepEqual(components.map(component => component.name), ['Term', 'Callout', 'Sim', 'Figure']);
  assert.deepEqual(math.map(item => [item.tex, item.display]), [['x^2', false], ['y = 1', true]]);
  assert.deepEqual(problems, []);
  assert.equal(result.analysis.propTexts[0].value, 'A figure.');
});

test('analyzeMdx reports MDX syntax errors with a line', () => {
  const result = analyzeMdx('## A\n\nIf a<b then c.\n');
  assert.equal(result.ok, false);
  assert.equal(result.error.line, 3);
  assert.equal(analyzeMdx('## A\n\n<Callout kind="tip">never closed\n').ok, false);
});

test('analyzeMdx flags "<" and "{" in plain text, expressions and string props', () => {
  const lt = analyzeMdx('## A\n\nIf x < 5 then y.\n').analysis.problems;
  assert.equal(lt.length, 1);
  assert.equal(lt[0].line, 3);
  assert.match(lt[0].message, /plain text contains "<"/);
  assert.match(analyzeMdx('## A\n\nUse {value} here.\n').analysis.problems[0].message, /JavaScript expression/);
  assert.match(analyzeMdx('import x from "y"\n\n## A\n').analysis.problems[0].message, /import\/export/);
  const prop = analyzeMdx('## A\n\n<Term id={x}/>\n').analysis;
  assert.match(prop.problems[0].message, /must be a plain string/);
  assert.deepEqual(prop.components[0].invalid, ['id']);
  // math and code may contain both characters
  assert.deepEqual(analyzeMdx('## A\n\n$x < 5$ and `a < b` and\n\n```js\nif (a < b) { c }\n```\n').analysis.problems, []);
});

test('headingProblems accepts the eight headings and explains every deviation', () => {
  const headings = titles => titles.map((text, index) => ({ text, line: index + 1 }));
  assert.deepEqual(headingProblems(headings(EXPECTED_HEADINGS.en), 'en'), []);
  assert.deepEqual(headingProblems(headings(EXPECTED_HEADINGS.ru), 'ru'), []);
  assert.equal(headingProblems(headings(EXPECTED_HEADINGS.ru), 'en').length > 0, true);

  const en = EXPECTED_HEADINGS.en;
  const caseSlip = headingProblems(headings(en.map(title => (title === 'Worked example' ? 'Worked Example' : title))), 'en');
  assert.equal(caseSlip.length, 1);
  assert.match(caseSlip[0].message, /unexpected heading "## Worked Example"; the required title is "## Worked example"/);

  const missing = headingProblems(headings(en.filter(title => title !== 'Visual')), 'en');
  assert.equal(missing.length, 1);
  assert.match(missing[0].message, /missing heading "## Visual" \(section 4 of 8\)/);

  const extra = headingProblems(headings(en.concat(['Bonus'])), 'en');
  assert.match(extra[0].message, /unexpected heading "## Bonus"/);

  const twice = headingProblems(headings(en.concat(['Summary'])), 'en');
  assert.match(twice[0].message, /appears more than once/);

  const swapped = en.slice();
  swapped[6] = 'Summary';
  swapped[7] = 'Check yourself';
  const order = headingProblems(headings(swapped), 'en');
  assert.equal(order.length, 1);
  assert.match(order[0].message, /heading #7 is "## Summary" but the order must be/);
});

test('componentSequence and firstSequenceDifference compare the id-like props', () => {
  const doc = text => componentSequence(analyzeMdx(text).analysis.components);
  const en = doc('## A\n\n<Term id="a"/>\n\n<Callout kind="tip">x</Callout>\n\n<CaseMap ids="c1,c2"/>\n\n<Reveal title="T">x</Reveal>\n');
  assert.deepEqual(en.map(tag => `${tag.name}:${tag.prop}=${tag.value}`), ['Term:id=a', 'Callout:kind=tip', 'CaseMap:ids=c1,c2']);
  assert.equal(firstSequenceDifference(en, en.slice()), null);
  const other = doc('## A\n\n<Term id="a"/>\n\n<Callout kind="exam">x</Callout>\n\n<CaseMap ids="c1,c2"/>\n');
  assert.equal(firstSequenceDifference(en, other).index, 1);
  const shorter = doc('## A\n\n<Term id="a"/>\n');
  const difference = firstSequenceDifference(en, shorter);
  assert.equal(difference.index, 1);
  assert.equal(difference.ru, undefined);
});

// ---------- rules on the loaded content ----------

test('findDuplicates returns each repeated value once', () => {
  assert.deepEqual(findDuplicates(['a', 'b', 'a', 'c', 'b', 'a']), ['a', 'b']);
  assert.deepEqual(findDuplicates(['a', 'b']), []);
  assert.deepEqual(findDuplicates(['constructor', '__proto__', 'constructor']), ['constructor']);
});

test('checkIds reports duplicate ids per kind (rule 1)', () => {
  const pack = makePack({
    syllabus: [{ code: '1.1' }, { code: '1.1' }],
    topics: [{ id: 't' }, { id: 't' }],
    terms: [{ id: 'x' }, { id: 'x' }],
    formulas: [{ id: 'f' }, { id: 'f' }],
    questions: [{ id: 'q' }, { id: 'q' }],
    cases: [{ id: 'c' }, { id: 'c' }],
    papers: [{ subject: 'geo', paper: 'P1', timedSets: [{ id: 's' }, { id: 's' }] }],
  });
  const text = messages(run(checkIds, pack)).join('\n');
  for (const noun of ['syllabus code', 'topic', 'term', 'formula', 'question', 'case', 'timed set']) assert.ok(text.includes(`duplicate ${noun} id`), noun);
  assert.deepEqual(run(checkIds, makePack({ terms: [{ id: 'a' }], questions: [{ id: 'a' }] })), []);
});

test('checkIds reports an item without an id, repeated topic sims and sims that differ only in case', () => {
  assert.ok(hasMessage(run(checkIds, makePack({ terms: [{ id: 'a' }, {}] })), 'term number 2 has no id'));
  assert.ok(hasMessage(run(checkIds, makePack({ topics: [{ id: 't', sims: ['geo.a', 'geo.a'] }] })), 'lists sim "geo.a" more than once'));
  const sims = new Map([['geo.Foo', { id: 'geo.Foo', rel: 'src/sims/geo/Foo.tsx' }], ['geo.foo', { id: 'geo.foo', rel: 'src/sims/geo/foo.tsx' }]]);
  assert.ok(hasMessage(run(checkIds, makePack(), { sims }), 'differ only in letter case'));
});

test('checkRefs resolves every reference of the meta files (rule 2)', () => {
  const sims = new Map([['geo.ok', { id: 'geo.ok', rel: 'src/sims/geo/ok.tsx', hasDefaultExport: true }]]);
  const valid = makePack({
    syllabus: [{ code: '1.1' }],
    topics: [{ id: 't', subject: 'geo', code: '1.1', termIds: ['a'], formulaIds: ['f'], sims: ['geo.ok'], questionIds: ['q'], caseIds: ['c'] }],
    terms: [{ id: 'a', syllabus: '1.1', sim: 'geo.ok' }],
    formulas: [{ id: 'f', syllabus: '1.1' }],
    questions: [{ id: 'q', subject: 'geo', topicIds: ['t'] }],
    cases: [{ id: 'c', usedFor: ['t'] }],
    papers: [{ subject: 'geo', paper: 'P1', timedSets: [{ id: 's', questionIds: ['q'] }] }],
  });
  assert.deepEqual(run(checkRefs, valid, { sims }), []);

  const broken = makePack({
    syllabus: [{ code: '1.1' }],
    topics: [{ id: 't', subject: 'math', code: '9.9', termIds: ['gone'], formulaIds: ['gone'], sims: ['geo.gone'], questionIds: ['gone'], caseIds: ['gone'] }],
    terms: [{ id: 'a', syllabus: '2.2', sim: 'math.x' }],
    formulas: [{ id: 'f', syllabus: '2.2' }],
    questions: [{ id: 'q', subject: 'math', topicIds: ['gone'] }],
    cases: [{ id: 'c', usedFor: ['gone'] }],
    papers: [{ subject: 'math', paper: 'P1', timedSets: [{ id: 's', questionIds: ['gone'] }] }],
  });
  const text = messages(run(checkRefs, broken, { sims })).join('\n');
  for (const part of [
    'topic "t": subject is "math" but the file is in content/geo',
    'code "9.9" is not a code in syllabus.ts',
    'termIds lists "gone"',
    'formulaIds lists "gone"',
    'sims: sim "geo.gone" has no file',
    'questionIds lists "gone"',
    'caseIds lists "gone"',
    'term "a": syllabus "2.2"',
    'term "a": sim: sim "math.x" is not a geo sim',
    'formula "f": syllabus "2.2"',
    'question "q": subject is "math"',
    'question "q": topicIds lists "gone"',
    'case "c": usedFor lists "gone"',
    'paper guide P1: subject is "math"',
    'timed set "s": questionIds lists "gone"',
  ]) assert.ok(text.includes(part), part);
});

test('checkRefs does not resolve codes against a subject without a syllabus', () => {
  const pack = makePack({ topics: [{ id: 't', subject: 'geo', code: '1.1' }], terms: [{ id: 'a', syllabus: '1.1' }] });
  assert.deepEqual(run(checkRefs, pack), []);
});

test('checkSources demands a locator for textbook sources only (rule 6)', () => {
  const pack = makePack({
    terms: [
      { id: 'a', src: { kind: 'textbook', title: 'Book' } },
      { id: 'b', src: { kind: 'textbook', title: 'Book', locator: '  ' } },
      { id: 'c', src: { kind: 'textbook', title: 'Book', locator: 'ch. 2, p. 3' } },
      { id: 'd', src: { kind: 'ib-guide', title: 'Guide' } },
    ],
    topics: [{ id: 't', sources: [{ kind: 'own', title: 'x' }, { kind: 'textbook', title: 'Atlas' }] }],
    cases: [{ id: 'k', src: [{ kind: 'textbook', title: 'Case book', locator: '' }] }],
  });
  assert.deepEqual(messages(run(checkSources, pack)).map(text => text.split(':')[0]), ['term "a"', 'term "b"', 'topic "t"', 'case "k"']);
});

test('checkQuestions checks marks, markscheme and minutes (rule 8)', () => {
  const question = fields => ({ id: 'q', subject: 'geo', marks: 3, markscheme: L('1 mark: x', '1 балл: x'), ...fields });
  assert.deepEqual(run(checkQuestions, makePack({ questions: [question({}), question({ id: 'r', minutes: 5 })] })), []);
  for (const marks of [0, -1, 2.5, '3', undefined, Number.NaN]) {
    assert.equal(run(checkQuestions, makePack({ questions: [question({ marks })] })).length, 1, `marks ${String(marks)}`);
  }
  assert.ok(hasMessage(run(checkQuestions, makePack({ questions: [question({ markscheme: L('1 mark', '') })] })), 'markscheme.ru is empty'));
  assert.ok(hasMessage(run(checkQuestions, makePack({ questions: [question({ markscheme: L('  ', 'x') })] })), 'markscheme.en is empty'));
  assert.ok(hasMessage(run(checkQuestions, makePack({ questions: [question({ markscheme: undefined })] })), 'markscheme.en is empty'));
  assert.equal(run(checkQuestions, makePack({ questions: [question({ minutes: 0 })] })).length, 1);
  assert.equal(run(checkQuestions, makePack({ questions: [question({ minutes: -2 })] })).length, 1);
});

test('collectLTexts finds { en, ru } objects anywhere with their paths', () => {
  const fields = [];
  collectLTexts({ id: 'x', title: L('a', 'б'), outcomes: [L('1', '1'), L('2', '2')], timedSets: [{ title: L('t', 'т') }], other: { deep: { text: L('d', 'д') } }, tex: '\\x' }, '', fields, 0);
  assert.deepEqual(fields.map(field => field.path), ['title', 'outcomes[0]', 'outcomes[1]', 'timedSets[0].title', 'other.deep.text']);
});

test('checkTexts: English fields must be free of Cyrillic and Russian fields must have it (rule 4)', () => {
  const term = fields => ({ id: 'a', term: L('demand', 'спрос'), def: L('A definition.', 'Определение.'), ...fields });
  assert.deepEqual(run(checkTexts, makePack({ terms: [term({})] })), []);
  const enBad = run(checkTexts, makePack({ terms: [term({ def: L('Спрос is demand.', 'Определение.') })] }));
  assert.equal(enBad.length, 1);
  assert.match(enBad[0].message, /term "a" def\.en contains Cyrillic text/);
  const ruBad = run(checkTexts, makePack({ terms: [term({ def: L('A definition.', 'A definition.') })] }));
  assert.equal(ruBad.length, 1);
  assert.match(ruBad[0].message, /term "a" def\.ru has no Cyrillic letters/);
  // empty strings, formulas, numbers and one-word identifiers are allowed in the Russian field
  const allowed = run(checkTexts, makePack({ terms: [term({ def: L('', ''), example: L('SQL', 'SQL'), pitfall: L('$x$', '$x$'), hint: L('42', '42') })] }));
  assert.deepEqual(allowed, []);
  // a stimulus may be a source text shown in its original language in both views, but only when it is identical
  const question = fields => ({ id: 'q', prompt: L('Q?', 'В?'), ...fields });
  assert.deepEqual(run(checkTexts, makePack({ questions: [question({ stimulus: L('Two roads diverged', 'Two roads diverged') })] })), []);
  assert.equal(run(checkTexts, makePack({ questions: [question({ stimulus: L('Two roads diverged', 'Two paths diverged') })] })).length, 1);
  assert.equal(run(checkTexts, makePack({ questions: [question({ hints: [L('Same text', 'Same text')] })] })).length, 1);
  assert.equal(run(checkTexts, makePack({ questions: [question({ stimulus: L('Cyrillic Ж in en', 'Cyrillic Ж in en') })] })).length, 1);   // the en side is still English only
  const malformed = run(checkTexts, makePack({ terms: [term({ pitfall: { en: 'only' } })] }));
  assert.match(malformed[0].message, /needs both "en" and "ru" as strings/);
});

test('checkTexts covers the L objects of every collection and the subject meta', () => {
  const bad = L('Привет', 'Hello');
  const pack = makePack({
    meta: { id: 'geo', title: bad },
    syllabus: [{ code: '1.1', title: bad }],
    topics: [{ id: 't', title: bad, outcomes: [bad] }],
    formulas: [{ id: 'f', name: bad }],
    questions: [{ id: 'q', prompt: bad, hints: [bad] }],
    cases: [{ id: 'c', facts: bad }],
    papers: [{ subject: 'geo', paper: 'P1', title: bad, timedSets: [{ id: 's', title: bad }] }],
  });
  const text = messages(run(checkTexts, pack)).join('\n');
  for (const part of ['subject meta "geo" title.en', 'syllabus code "1.1" title.en', 'topic "t" outcomes[0].ru', 'formula "f" name.ru', 'question "q" hints[0].en', 'case "c" facts.en', 'paper guide "P1" timedSets[0].title.ru']) {
    assert.ok(text.includes(part), part);
  }
});

test('checkTexts compiles the formulas inside L text (rule 7)', () => {
  const formulas = text => run(checkTexts, makePack({ formulas: [{ id: 'f', meaning: L(text, 'Формула') }] }));
  assert.deepEqual(formulas('Ratio $\\frac{a}{b}$ and $$x^2$$.'), []);
  assert.deepEqual(formulas('Costs \\$5 and `$HOME`.'), []);
  const bad = formulas('Ratio $\\fraq{a}{b}$.');
  assert.equal(bad.length, 1);
  assert.match(bad[0].message, /TeX "\\fraq\{a\}\{b\}" does not compile in KaTeX: Undefined control sequence/);
  const unbalanced = formulas('It costs $5 today.');
  assert.equal(unbalanced.length, 1);
  assert.match(unbalanced[0].message, /has no closing "\$"/);
});

test('checkFormulas compiles every Formula.tex in display mode (rule 7)', () => {
  assert.deepEqual(run(checkFormulas, makePack({ formulas: [{ id: 'f', tex: '\\text{PED} = \\dfrac{a}{b}' }, { id: 'g', tex: '\\begin{align} a &= b \\end{align}' }] })), []);
  const issues = run(checkFormulas, makePack({ formulas: [{ id: 'f', tex: '\\dfraq{a}{b}' }, { id: 'g', tex: '  ' }, { id: 'h' }] }));
  assert.equal(issues.length, 3);
  assert.match(issues[0].message, /formula "f": tex does not compile in KaTeX/);
  assert.match(issues[1].message, /formula "g": tex is empty/);
});

test('checkPlaceholders scans every text file of the subject (rule 5)', () => {
  const report = createReport();
  checkPlaceholders(report, 'geo', [
    { rel: 'content/geo/a.ts', abs: '/r/a.ts', text: "// TODO later\nexport const a = 'ok';\n" },
    { rel: 'content/geo/b.mdx', abs: '/r/b.mdx', text: 'fine\nlorem ipsum ???\n' },
    { rel: 'content/geo/c.png', abs: '/r/c.png' },
  ]);
  assert.deepEqual(report.issues.map(issue => `${issue.file}:${issue.line}`), ['content/geo/a.ts:1', 'content/geo/b.mdx:2', 'content/geo/b.mdx:2']);
});

test('checkExports finds files that index.ts would read as undefined', () => {
  const file = (rel, text) => ({ rel: `content/geo/${rel}`, abs: `/r/${rel}`, text });
  const report = createReport();
  checkExports(report, 'geo', [
    file('terms/ok.ts', 'export const terms = [];'),
    file('terms/wrong.ts', 'export const term = [];'),
    file('topics/ok.meta.ts', 'export default {};'),
    file('topics/bad.meta.ts', 'export const topic = {};'),
    file('syllabus.ts', 'export const syllabus = [];'),
    file('papers.ts', 'export const guides = [];'),
    file('meta.ts', 'export default {};'),
  ]);
  assert.deepEqual(report.issues.map(issue => issue.file), ['content/geo/terms/wrong.ts', 'content/geo/topics/bad.meta.ts', 'content/geo/papers.ts']);
});

// ---------- rules on topic bodies ----------

const textsOf = (extra = {}) => ({ en: bodyFor('en', extra.en), ru: bodyFor('ru', extra.ru) });

test('a clean pair of bodies produces no findings', () => {
  const pack = makePack({ terms: [{ id: 'a' }] });
  const { en, ru } = textsOf({ en: { 1: 'See <Term id="a"/>.' }, ru: { 1: 'Смотрите <Term id="a"/>.' } });
  assert.deepEqual(checkDoc(pack, mdxDoc('en', en)), []);
  assert.deepEqual(checkDoc(pack, mdxDoc('ru', ru)), []);
});

test('checkMdxDoc resolves component references (rule 2)', () => {
  const pack = makePack({ terms: [{ id: 'a' }], formulas: [{ id: 'f' }], questions: [{ id: 'q' }], cases: [{ id: 'c' }] });
  const sims = new Map([['geo.ok', { id: 'geo.ok', rel: 'src/sims/geo/ok.tsx', hasDefaultExport: true }]]);
  const good = '<Term id="a"/>\n\n<Formula id="f"/>\n\n<Question id="q"/>\n\n<Case id="c"/>\n\n<CaseMap ids="c, c"/>\n\n<Sim id="geo.ok"/>\n\n<Figure src="./assets/x.svg" caption="Fig."/>';
  assert.deepEqual(checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: good })), { sims }), []);
  const bad = '<Term id="x1"/>\n\n<Formula id="x2"/>\n\n<Question id="x3"/>\n\n<Case id="x4"/>\n\n<CaseMap ids="c,x5,"/>\n\n<Sim id="geo.x6"/>';
  const issues = checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: bad })), { sims });
  const text = messages(issues).join('\n');
  for (const part of ['<Term id="x1">', '<Formula id="x2">', '<Question id="x3">', '<Case id="x4">', '"x5" is not a case', 'has an empty id', 'sim "geo.x6" has no file']) {
    assert.ok(text.includes(part), part);
  }
  assert.ok(issues.every(issue => issue.file === 'content/geo/topics/t1.en.mdx' && issue.line > 0));
});

test('checkMdxDoc checks that a Figure file exists next to the body', () => {
  const body = src => bodyFor('en', { 3: `<Figure src="${src}" caption="Fig."/>` });
  const seen = [];
  const fileExists = file => { seen.push(file); return file.endsWith('/assets/x.svg'); };
  assert.deepEqual(checkDoc(makePack(), mdxDoc('en', body('./assets/x.svg')), { fileExists }), []);
  assert.deepEqual(seen, ['/repo/content/geo/topics/assets/x.svg']);
  assert.ok(hasMessage(checkDoc(makePack(), mdxDoc('en', body('./assets/y.svg')), { fileExists }), 'points to a file that does not exist'));
  assert.ok(hasMessage(checkDoc(makePack(), mdxDoc('en', body('https://example.com/x.svg')), { fileExists }), 'must be a relative path'));
  assert.ok(hasMessage(checkDoc(makePack(), mdxDoc('en', body('/etc/x.svg')), { fileExists }), 'must be a relative path'));
});

test('checkMdxDoc reports structure problems of the body (rule 3)', () => {
  const pack = makePack();
  const missingHeading = bodyFor('en').replace('## Visual\n\nSome words about the topic.\n', '');
  assert.ok(hasMessage(checkDoc(pack, mdxDoc('en', missingHeading)), 'missing heading "## Visual"'));
  assert.ok(hasMessage(checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: '<Banner id="x"/>' }))), 'unknown component <Banner>'));
  assert.ok(hasMessage(checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: '<Callout kind="warning">x</Callout>' }))), 'is not a callout kind'));
  assert.ok(hasMessage(checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: '<Term/>' }))), '<Term> needs id="..."'));
  assert.ok(hasMessage(checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: 'a < b' }))), 'plain text contains "<"'));
  const syntax = checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: 'a<b' })));
  assert.equal(syntax.length, 1);
  assert.equal(syntax[0].rule, 'mdx-syntax');
  assert.equal(syntax[0].line, 7);   // the second section holds the text
});

test('checkMdxDoc: the English body has no Cyrillic, every Russian section has some (rule 4)', () => {
  const pack = makePack();
  const enBad = checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: 'Contains спрос here.' })));
  assert.equal(enBad.length, 1);
  assert.match(enBad[0].message, /EN body contains 5 Cyrillic characters/);
  assert.equal(enBad[0].line, 7);

  const ruBad = checkDoc(pack, mdxDoc('ru', bodyFor('ru', { 7: 'Only English words here.' })));
  assert.equal(ruBad.length, 1);
  assert.match(ruBad[0].message, /RU section "## Коротко" has no Cyrillic text/);
  // a section with only components, or with a quotation next to Russian words, is fine
  const fine = bodyFor('ru', { 6: '<Question id="q"/>', 1: 'Цитата: "To be, or not to be". Это Гамлет.' });
  assert.deepEqual(checkDoc(makePack({ questions: [{ id: 'q' }] }), mdxDoc('ru', fine)), []);
});

test('checkMdxDoc compiles the math of the body with KaTeX (rule 7)', () => {
  const pack = makePack();
  assert.deepEqual(checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: 'Inline $x^2$ and\n\n$$\n\\begin{align} a &= b \\\\ c &= d \\end{align}\n$$' }))), []);
  const bad = checkDoc(pack, mdxDoc('en', bodyFor('en', { 1: 'Inline $\\oops$ here.\n\n$$\nx\n\\nope\n$$' })));
  assert.equal(bad.length, 2);
  assert.ok(bad.every(issue => issue.rule === 'katex'));
  assert.equal(bad[0].line, 7);    // the inline formula
  assert.equal(bad[1].line, 11);   // the line inside the $$ block that holds the bad command
  assert.ok(hasMessage(checkDoc(pack, mdxDoc('en', bodyFor('en', { 3: '<Figure src="./a.svg" caption="Rate $\\nope$"/>' }))), 'TeX "\\nope" does not compile'));
});

test('checkParity reports the first difference between EN and RU component ids (rule 3)', () => {
  const pair = (enBody, ruBody) => {
    const report = createReport();
    checkParity(report, 'geo', mdxDoc('en', bodyFor('en', { 1: enBody })), mdxDoc('ru', bodyFor('ru', { 1: ruBody })));
    return report.issues;
  };
  assert.deepEqual(pair('<Term id="a"/>\n\n<Callout kind="tip">x</Callout>', '<Term id="a"/>\n\n<Callout kind="tip">х</Callout>'), []);
  const changed = pair('<Term id="a"/>\n\n<Formula id="f"/>', '<Term id="a"/>\n\n<Formula id="g"/>');
  assert.equal(changed.length, 1);
  assert.match(changed[0].message, /different components at tag 2 of 2 \(EN\) \/ 2 \(RU\)/);
  assert.match(changed[0].message, /<Formula id="f">.*<Formula id="g">/);
  assert.equal(changed[0].file, 'content/geo/topics/t1.ru.mdx');
  assert.ok(hasMessage(pair('<Term id="a"/>\n\n<Term id="b"/>', '<Term id="a"/>'), 'has no tag'));
  assert.ok(hasMessage(pair('<Callout kind="tip">x</Callout>', '<Callout kind="exam">х</Callout>'), '<Callout kind="exam">'));
  // a body that does not parse is reported by checkMdxDoc, not compared
  assert.deepEqual(pair('a<b', '<Term id="a"/>'), []);
});

test('checkTopicFiles needs both bodies, one of each, and a file named after the topic (rule 3)', () => {
  const file = (name, dir = 'topics') => ({ rel: `content/geo/${dir}/${name}`, abs: `/r/${name}` });
  const run3 = (topics, files, where = NO_LOCATOR) => {
    const report = createReport();
    checkTopicFiles(report, mdxCtx(makePack({ topics }), { where }), groupTopicBodies(files, 'geo'));
    return report.issues;
  };
  assert.deepEqual(run3([{ id: 'a' }], [file('a.en.mdx'), file('a.ru.mdx')]), []);
  const missing = run3([{ id: 'a' }], [file('a.en.mdx')]);
  assert.equal(missing.length, 1);
  assert.match(missing[0].message, /topic "a" has no RU body; create .*a\.ru\.mdx/);
  assert.equal(run3([{ id: 'a' }], []).length, 2);
  assert.match(run3([{ id: 'a' }], [file('a.en.mdx'), file('a.ru.mdx'), file('a.en.mdx', 'other/topics')])[0].message, /has 2 EN bodies/);
  const orphan = run3([{ id: 'a' }], [file('a.en.mdx'), file('a.ru.mdx'), file('zzz.en.mdx')]);
  assert.equal(orphan[0].severity, 'warning');
  assert.match(orphan[0].message, /no topic has the id "zzz"/);
  const files = [{ rel: 'content/geo/topics/other.meta.ts', abs: '/r/other.meta.ts', text: "export default { id: 'a' };\n" }];
  const renamed = run3([{ id: 'a' }], [file('a.en.mdx'), file('a.ru.mdx')], createLocator(files, 'geo'));
  assert.match(renamed[0].message, /topic id "a" is defined in other\.meta\.ts; a topic file is named after its id \(a\.meta\.ts\)/);
});

test('checkSimUsage warns when meta.sims and <Sim> in the body disagree (rule 12)', () => {
  const run12 = (sims, enBody, ruBody = enBody) => {
    const report = createReport();
    const docs = [mdxDoc('en', bodyFor('en', { 3: enBody })), mdxDoc('ru', bodyFor('ru', { 3: ruBody }))];
    checkSimUsage(report, 'geo', { id: 't', sims }, docs);
    return report.issues;
  };
  assert.deepEqual(run12(['geo.a'], '<Sim id="geo.a"/>'), []);
  assert.deepEqual(run12([], 'No sim here.', 'Здесь нет симуляции.'), []);
  const unused = run12(['geo.a', 'geo.b'], '<Sim id="geo.a"/>');
  assert.equal(unused.length, 1);
  assert.equal(unused[0].severity, 'warning');
  assert.match(unused[0].message, /lists sim "geo\.b" in meta\.sims but its MDX never uses/);
  const unlisted = run12(['geo.a'], '<Sim id="geo.a"/>\n\n<Sim id="geo.c"/>');
  assert.equal(unlisted.length, 1);
  assert.match(unlisted[0].message, /<Sim id="geo\.c"\/> is used in the MDX of topic "t" but meta\.sims does not list it/);
  assert.equal(unlisted[0].file, 'content/geo/topics/t1.en.mdx');
});

// ---------- coverage, statistics, reports ----------

test('computeCoverage counts a code as covered when a topic with that code has both bodies', () => {
  const pack = makePack({
    syllabus: [
      { code: '1.1', title: L('One', 'Один'), papers: ['P1'] },
      { code: '1.2', title: L('Two', 'Два'), papers: ['P1', 'P2'] },
      { code: '1.3', title: L('Three | pipe', 'Три'), papers: ['P2'] },
      { code: '1.4', title: L('Four', 'Четыре'), papers: [] },
      { code: '1.5', title: L('Five', 'Пять'), papers: [] },
    ],
    topics: [
      { id: 'a', code: '1.1', inMockScope: 'yes' },
      { id: 'b', code: '1.2', inMockScope: 'yes' },
      { id: 'c', code: '1.3', inMockScope: 'no' },
      { id: 'd', code: '1.4', inMockScope: 'unknown' },
    ],
  });
  const coverage = computeCoverage(pack, id => id === 'a' || id === 'c');
  assert.deepEqual(coverage.rows.map(row => [row.code, row.scope, row.topicIds.join(), row.hasBodies]), [
    ['1.1', 'yes', 'a', true],
    ['1.2', 'yes', 'b', false],
    ['1.3', 'no', 'c', true],
    ['1.4', 'unknown', 'd', false],
    ['1.5', 'unknown', '', false],
  ]);
  assert.equal(coverage.covered, 2);
  assert.equal(coverage.inScope, 4);
  assert.equal(coverage.coveredInScope, 1);
  assert.equal(coverage.percent, 25);

  const markdown = renderCoverage('geo', coverage);
  assert.equal(markdown.split('\n')[0], '# Coverage geo: 25.0% (1 of 4 codes in scope)');
  assert.ok(markdown.includes('| 1.1 | One | P1 | yes | a | yes |'));
  assert.ok(markdown.includes('| 1.2 | Two | P1, P2 | yes | b | no |'));
  assert.ok(markdown.includes('| 1.3 | Three \\| pipe | P2 | no | c | yes |'));
  assert.ok(markdown.includes('| 1.5 | Five |  | unknown | — | no |'));
});

test('computeCoverage without a syllabus has no percentage', () => {
  const coverage = computeCoverage(makePack(), () => true);
  assert.equal(coverage.percent, null);
  assert.equal(renderCoverage('geo', coverage).split('\n')[0], '# Coverage geo: n/a (no syllabus codes yet)');
  assert.equal(formatPercent(100), '100.0%');
  assert.equal(formatPercent(33.333), '33.3%');
});

test('computeStats and statsWarnings implement the figures of rule 11', () => {
  const pack = makePack({
    syllabus: [{ code: '1' }],
    topics: [{ id: 'a', code: '1' }],
    terms: [
      { id: 't1', src: { kind: 'textbook' } },
      { id: 't2', src: { kind: 'ib-guide' } },
      { id: 't3', src: { kind: 'own' } },
      { id: 't4', src: { kind: 'web' } },
    ],
    cases: [{ id: 'c1', src: [{ kind: 'own' }] }, { id: 'c2', src: [] }],
  });
  const stats = computeStats(pack, computeCoverage(pack, () => true), 2);
  assert.equal(stats.termSharePercent, 50);
  assert.equal(stats.casesWithSource, 1);
  assert.equal(stats.sims, 2);
  const warnings = statsWarnings(pack, stats, true);
  assert.equal(warnings.length, 2);
  assert.match(warnings[0], /only 50\.0% of terms \(2 of 4\) cite a textbook or an IB guide; the target is 70% or more/);
  assert.match(warnings[1], /1 of 2 cases have no source \(c2\)/);
  assert.equal(statsWarnings(pack, stats, false).length, 1);
  assert.match(statsLine(stats), /terms 4, from textbook or IB guide 2 \(50\.0%\)/);

  const good = makePack({ syllabus: [{ code: '1' }], terms: [{ id: 'a', src: { kind: 'textbook' } }, { id: 'b', src: { kind: 'textbook' } }, { id: 'c', src: { kind: 'ib-guide' } }, { id: 'd', src: { kind: 'own' } }] });
  assert.deepEqual(statsWarnings(good, computeStats(good, computeCoverage(good, () => true), 0), true), []);   // 75 percent
});

test('statsWarnings: 70 percent is the line, and content without a syllabus is mentioned', () => {
  const terms = (books, others) => []
    .concat(Array.from({ length: books }, (_, index) => ({ id: `b${index}`, src: { kind: 'textbook' } })))
    .concat(Array.from({ length: others }, (_, index) => ({ id: `o${index}`, src: { kind: 'own' } })));
  const warningsFor = (pack) => statsWarnings(pack, computeStats(pack, computeCoverage(pack, () => true), 0), true);
  assert.equal(warningsFor(makePack({ syllabus: [{ code: '1' }], terms: terms(7, 3) })).length, 0);
  assert.equal(warningsFor(makePack({ syllabus: [{ code: '1' }], terms: terms(69, 31) })).length, 1);
  const noSyllabus = warningsFor(makePack({ terms: terms(10, 0) }));
  assert.equal(noSyllabus.length, 1);
  assert.match(noSyllabus[0], /no syllabus codes/);
});

test('isEmptySubject is true only without any content', () => {
  const stats = pack => computeStats(pack, computeCoverage(pack, () => false), 0);
  assert.equal(isEmptySubject(stats(makePack()), 0), true);
  assert.equal(isEmptySubject(stats(makePack({ terms: [{ id: 'a', src: {} }] })), 0), false);
  assert.equal(isEmptySubject(stats(makePack()), 1), false);
  assert.equal(isEmptySubject(computeStats(makePack(), computeCoverage(makePack(), () => false), 1), 0), false);
});

test('reports count severities and format file:line messages', () => {
  const report = createReport();
  report.error('geo', 'refs', 'bad ref', { file: 'content/geo/a.ts', line: 7 });
  report.warn('geo', 'stats', 'low share');
  report.info('geo', 'stats', 'numbers');
  assert.deepEqual(countBySeverity(report.issues), { errors: 1, warnings: 1 });
  assert.equal(formatIssue(report.issues[0]), 'content/geo/a.ts:7: ERROR [refs] bad ref');
  assert.equal(formatIssue(report.issues[1]), 'geo: WARN [stats] low share');
  assert.equal(plural(1, 'error'), '1 error');
  assert.equal(plural(2, 'entry', 'entries'), '2 entries');
});

test('normalizePack keeps objects, drops the rest and rejects non-packs', () => {
  assert.equal(normalizePack(undefined), null);
  assert.equal(normalizePack({ topics: [] }), null);
  const normalized = normalizePack({ meta: { id: 'geo' }, terms: [{ id: 'a' }, undefined, 5], topics: 'oops' });
  assert.deepEqual(normalized.pack.terms, [{ id: 'a' }]);
  assert.deepEqual(normalized.pack.topics, []);
  assert.deepEqual(normalized.pack.formulas, []);
  assert.deepEqual(normalized.dropped, [{ collection: 'terms', count: 2 }]);
});

// ---------- one whole subject, in memory ----------

function miniSubject(changes = {}) {
  const term = { id: 'demand', term: L('demand', 'спрос'), def: L('Buyers want it.', 'Покупатели хотят.'), syllabus: '1.1', papers: ['P1'], src: { kind: 'textbook', title: 'Book', locator: 'p. 1' } };
  const topic = { id: 't1', subject: 'geo', code: '1.1', title: L('Topic', 'Тема'), inMockScope: 'yes', termIds: ['demand'], questionIds: ['q1'], sources: [{ kind: 'textbook', title: 'Book', locator: 'p. 1' }] };
  const question = { id: 'q1', subject: 'geo', topicIds: ['t1'], paper: 'P1', marks: 2, command: 'State', prompt: L('Q?', 'В?'), markscheme: L('1 mark', '1 балл'), origin: 'original' };
  const pack = makePack({ syllabus: [{ code: '1.1', title: L('One', 'Один'), papers: ['P1'] }], topics: [topic], terms: [term], questions: [question] });
  const texts = { en: bodyFor('en', { 1: '<Term id="demand"/>', 6: '<Question id="q1"/>' }), ru: bodyFor('ru', { 1: '<Term id="demand"/>', 6: '<Question id="q1"/>' }) };
  const file = (rel, text) => ({ rel: `content/geo/${rel}`, abs: `/repo/content/geo/${rel}`, text });
  const files = [
    file('topics/t1.meta.ts', "export default { id: 't1' };\n"),
    file('topics/t1.en.mdx', texts.en),
    file('topics/t1.ru.mdx', texts.ru),
    file('terms/terms.ts', "export const terms = [{ id: 'demand' }];\n"),
    file('questions/q.ts', "export const questions = [{ id: 'q1' }];\n"),
    file('syllabus.ts', "export const syllabus = [{ code: '1.1' }];\n"),
  ];
  return { folder: 'geo', pack: changes.pack ?? pack, files: changes.files ?? files, sims: new Map(), exams: [], fileExists: () => true };
}

test('validateSubject accepts a small complete subject and prints its figures', () => {
  const report = createReport();
  validateSubject(report, miniSubject());
  assert.deepEqual(report.issues.filter(issue => issue.severity !== 'info'), []);
  assert.equal(report.issues.filter(issue => issue.severity === 'info').length, 1);
  assert.match(report.issues[0].message, /^topics 1 \| syllabus codes 1, covered by a topic 1 \(100\.0% of the codes in scope\)/);
});

test('validateSubject reports an empty subject as information (rule 13)', () => {
  const report = createReport();
  validateSubject(report, { folder: 'geo', pack: makePack(), files: [{ rel: 'content/geo/meta.ts', abs: '/r/meta.ts', text: "export default { id: 'geo' };" }], sims: new Map(), exams: [], fileExists: () => true });
  assert.deepEqual(report.issues.map(issue => [issue.severity, issue.rule]), [['info', 'stats']]);
});

test('validateSubject runs every group of rules and keeps going after a failing rule', () => {
  const input = miniSubject();
  input.pack.questions[0].marks = 0;
  input.pack.terms[0].src = { kind: 'textbook', title: 'Book' };
  input.pack.topics[0].termIds = ['gone'];
  input.files.push({ rel: 'content/geo/notes.md', abs: '/repo/content/geo/notes.md', text: 'TODO' });
  const report = createReport();
  validateSubject(report, input);
  assert.deepEqual(errors(report.issues).map(issue => issue.rule).sort(), ['placeholder', 'question', 'refs', 'source']);
});

test('validateSubject turns a crashing rule into an error instead of stopping', () => {
  const input = miniSubject();
  input.pack.papers = [{ subject: 'geo', paper: 'P1', minutes: 90, timedSets: [null] }];
  input.pack.questions[0].marks = 0;
  const report = createReport();
  assert.doesNotThrow(() => validateSubject(report, input));
  const internal = report.issues.filter(issue => issue.rule === 'internal');
  assert.ok(internal.length > 0 && internal.every(issue => issue.severity === 'error'));
  assert.ok(internal[0].message.startsWith('rule "ids" stopped on unexpected content'));
  assert.ok(report.issues.some(issue => issue.rule === 'question'));   // the other rules still ran
});

test('checkSubjects: the id in meta.ts is the folder name, ids are unique, unknown folders are noted', () => {
  const report = createReport();
  checkSubjects(report, [
    { folder: 'geo', metaId: 'geo' },
    { folder: 'math', metaId: 'geo' },
    { folder: 'physics', metaId: 'physics' },
    { folder: '_example', metaId: '_example' },
  ]);
  const text = messages(report.issues).join('\n');
  assert.ok(text.includes('meta.ts has id "geo" but the folder is named "math"'));
  assert.ok(text.includes('subject id "geo" is declared by more than one folder (geo, math)'));
  assert.ok(text.includes('"physics" is not one of the subject folders'));
  assert.equal(errors(report.issues).length, 2);
});
