import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
const file = new URL('../content/econ/exam/questions/mock-hl.ts', import.meta.url);
test('school HL practice covers missing welfare, quintile and tax skills with checked answers', async () => {
  assert.ok(existsSync(file), 'HL checklist practice must exist');
  const { questions } = await import(file);
  const byId = new Map(questions.map(q => [q.id,q]));
  for (const [id, value] of [['mock-hl-negative-consumption',4*6/2],['mock-hl-positive-production',5*8/2],['mock-hl-positive-consumption',6*4/2]]) assert.equal(Number(byId.get(id).answer),value,id);
  const lorenz=byId.get('mock-hl-lorenz');
  for (const cumulative of [5,15,30,55,100]) assert.ok(lorenz.markscheme.en.includes(String(cumulative)));
  const taxes=byId.get('mock-hl-tax-rates');
  assert.ok(taxes.markscheme.en.includes(String(20000*.1+10000*.2)));
  assert.ok(taxes.markscheme.en.includes('8%'));
  const indirect=byId.get('mock-hl-indirect-tax');
  assert.equal(Number(indirect.answer),105-105/1.05);
});
