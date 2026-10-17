// School list, 9 October 2026: Oxford chapters 1–8, 13, 14.
// Guard the complete topic decision and every actual timed-set question dependency.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { globSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { papers } from '../content/math/papers.ts';
const root = path.resolve(import.meta.dirname, '..');
const load = async pattern => Promise.all(globSync(pattern, { cwd: root }).map(file => import(pathToFileURL(path.join(root, file)).href)));
const topics = (await load('content/math/*/topics/*.meta.ts')).map(m => m.default);
const questions = (await load('content/math/*/questions/*.ts')).flatMap(m => m.questions);
const byTopic = new Map(topics.map(t => [t.id, t]));
const byQuestion = new Map(questions.map(q => [q.id, q]));
const excluded = new Set(['1.14', '1.15', '3.9', '3.12', '3.14', '3.15', '3.16', '4.19', ...Array.from({ length: 18 }, (_, i) => `5.${i + 1}`)]);
test('all 78 syllabus topics match the school chapter scope; no unresolved codes', () => {
  assert.equal(topics.length, 78);
  for (const topic of topics) assert.equal(topic.inMockScope, excluded.has(topic.code) ? 'no' : 'yes', topic.id);
  assert.equal(topics.filter(t => t.inMockScope === 'yes').length, 52);
});
for (const paper of papers) for (const set of paper.timedSets) {
  test(`${set.id}: all questions exist and every prerequisite is in the mock`, () => {
    assert.equal(new Set(set.questionIds).size, set.questionIds.length, 'no repeated question within a set');
    for (const id of set.questionIds) {
      const question = byQuestion.get(id);
      assert.ok(question, `${id} missing`);
      assert.ok(question.topicIds.length, `${id} has no prerequisites`);
      for (const topic of question.topicIds) assert.equal(byTopic.get(topic)?.inMockScope, 'yes', `${set.id}: ${id} -> ${topic}`);
    }
  });
}

test('the actual diagnostic is 15 distinct eligible questions / 45 marks / 45 minutes',async()=>{
 const {filterMockSets,questionInMock}=await import('../src/lib/mock-scope.ts');
 const set=filterMockSets(papers.flatMap(p=>p.timedSets),questions,topics).find(s=>s.id==='diagnostic');
 assert.ok(set);assert.equal(set.questionIds.length,15);assert.equal(set.minutes,45);
 const assigned=set.questionIds.map(id=>byQuestion.get(id));
 assert.ok(assigned.every(q=>questionInMock(q,topics)));
 assert.equal(assigned.reduce((sum,q)=>sum+q.marks,0),45);
 const unsafe=[{id:'mixed',topicIds:[topics.find(t=>t.inMockScope==='yes').id,topics.find(t=>t.inMockScope==='no').id],marks:1}];
 assert.deepEqual(filterMockSets([{questionIds:[set.questionIds[0],'mixed']}],[...questions,...unsafe],topics),[]);
});
