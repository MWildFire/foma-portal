import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { questions as bank } from '../content/eng/questions/p2-bank.ts';
import { questions as essays } from '../content/eng/questions/p2-essays.ts';
import { papers as engPapers } from '../content/eng/papers.ts';
import { syllabus as engSyllabus } from '../content/eng/syllabus.ts';
import { pastPapers as engPast } from '../content/eng/pastpapers.ts';

// The school mock follows the school's Paper 2 handout: five criteria of 5 marks, 25 in total.
// The IB question papers from 2023 to 2025 print 30 marks, so the official past papers keep 30.
const CRITERIA = ['A (0–5)', 'B1 (0–5)', 'B2 (0–5)', 'C (0–5)', 'D (0–5)'];
const SCHOOL_EN = 'as in the school materials';
const SCHOOL_RU = 'как в материалах школы';

function assertSchoolScheme(item) {
  assert.equal(item.marks, 25, `${item.id}: marks`);
  for (const c of CRITERIA) {
    assert.ok(item.markscheme.en.includes(`Criterion ${c}`), `${item.id}: en ${c}`);
    assert.ok(item.markscheme.ru.includes(`Критерий ${c}`), `${item.id}: ru ${c}`);
  }
  assert.ok(item.markscheme.en.includes(SCHOOL_EN), `${item.id}: school note en`);
  assert.ok(item.markscheme.ru.includes(SCHOOL_RU), `${item.id}: school note ru`);
  assert.doesNotMatch(item.markscheme.en + item.markscheme.ru, /0–10/, `${item.id}: no 10-point criterion`);
}

test('P2 bank: twenty prompts, each marked 25 with five criteria of 5 and the school note', () => {
  assert.equal(bank.length, 20);
  for (const q of bank) {
    assert.equal(q.paper, 'P2', q.id);
    assertSchoolScheme(q);
  }
});

test('P2 model essays use the same five criteria and the same school note', () => {
  assert.equal(essays.length, 2);
  for (const q of essays) assertSchoolScheme(q);
});

test('P2 guide: 25 marks, five criteria of 5, and the IB total of 30 is named', () => {
  const p2 = engPapers.find((p) => p.paper === 'P2');
  assert.equal(p2.marks, 25);
  assert.ok(p2.structure.en.includes('Five criteria, each marked 0–5'));
  assert.ok(p2.criteria.en.includes('Total 25'));
  assert.ok(p2.criteria.ru.includes('Всего 25'));
  assert.ok(p2.criteria.en.includes('print 30 marks'));
  assert.ok(p2.criteria.ru.includes('печатаются на 30 баллов'));
});

test('syllabus: Paper 2 criteria A, B1, B2, C and D are separate codes', () => {
  const codes = engSyllabus.map((s) => s.code);
  for (const code of ['P2.A', 'P2.B1', 'P2.B2', 'P2.C', 'P2.D']) {
    assert.ok(codes.includes(code), code);
  }
  assert.ok(!codes.includes('P2.B'), 'P2.B must not merge B1 and B2 again');
});

test('past papers: Paper 2 items keep the 30 marks printed on the IB papers', () => {
  const p2 = engPast.filter((p) => p.paper === 'P2');
  assert.ok(p2.length > 0);
  for (const p of p2) assert.equal(p.marks, 30, p.id);
});

test('P2 topics: no 10-point criteria, and the Paper 2 total in the planning page is 25', () => {
  const dir = new URL('../content/eng/topics/', import.meta.url);
  const ids = ['p2-planning', 'p2-question', 'p2-organisation', 'p2-language', 'p2-choices', 'p2-comparison', 'p2-concepts', 'p2-form-pairs'];
  for (const id of ids) {
    for (const lang of ['en', 'ru']) {
      const body = readFileSync(new URL(`${id}.${lang}.mdx`, dir), 'utf8');
      assert.doesNotMatch(body, /\(0–10\)/, `${id}.${lang}`);
    }
  }
  const planEn = readFileSync(new URL('p2-planning.en.mdx', dir), 'utf8');
  const planRu = readFileSync(new URL('p2-planning.ru.mdx', dir), 'utf8');
  assert.match(planEn, /Paper 2 is worth 25 marks, as in the school materials/);
  assert.match(planRu, /Paper 2 стоит 25 баллов, как в материалах школы/);
});
