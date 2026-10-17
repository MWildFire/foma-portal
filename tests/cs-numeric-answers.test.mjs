import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { numericAnswer } from '../scripts/cs-numeric-answers.mjs';

const questions = [];
for (const file of readdirSync(new URL('../content/cs/', import.meta.url), { recursive: true }).filter(f => /questions\/[^/]+\.ts$/.test(f))) {
  questions.push(...(await import(new URL(`../content/cs/${file}`, import.meta.url))).questions);
}
const withoutCode = questions.filter(q => q.answer !== undefined && !/```python\n/.test(q.stimulus?.en || q.prompt.en));
test('all twelve answer-bearing questions without code are independently recalculated', () => {
  assert.equal(withoutCode.length, 12);
  for (const q of withoutCode) assert.equal(numericAnswer(q), q.answer, q.id);
});
test('changed inputs change the calculated answer, including multi-part questions', () => {
  const image = questions.find(q => q.id === 'a1-2-q02');
  assert.equal(numericAnswer({...image, prompt: {...image.prompt, en: image.prompt.en.replace('800 × 600', '400 × 600')}}), '720000');
  const pipeline = questions.find(q => q.id === 'a1-1-q06');
  assert.equal(numericAnswer({...pipeline, prompt: {...pipeline.prompt, en: pipeline.prompt.en.replace('2 ns', '3 ns')}}), '72 ns without pipelining; 27 ns with pipelining; speed-up about 2.67');
  const load = questions.find(q => q.id === 'b4-1-q10');
  assert.equal(numericAnswer({...load, prompt: {...load.prompt, en: load.prompt.en.replace('8 key', '6 key')}}), '0.6');
});
test('changed answer keys cannot silently pass', () => {
  for (const q of withoutCode) assert.notEqual(numericAnswer({...q, answer: 'incorrect'}), 'incorrect');
});
test('new answer-bearing questions and unrecognised input wording fail closed', () => {
  assert.throws(() => numericAnswer({id:'new-question',prompt:{en:'Calculate 2 + 2.'}}), /No numeric checker/);
  const q=questions.find(q=>q.id==='a1-2-q02');
  assert.throws(()=>numericAnswer({...q,prompt:{en:'A compressed image has 800 × 600 pixels.'}}), /Input wording changed/);
});
