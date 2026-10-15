import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
const root = join(import.meta.dirname, '..', 'content', 'econ');
function files(dir) { return readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)]); }
const all = files(root);
const topics = await Promise.all(all.filter(f => f.endsWith('.meta.ts')).map(async f => (await import(pathToFileURL(f))).default));
const questions = (await Promise.all(all.filter(f => f.includes('/questions/') && f.endsWith('.ts')).map(async f => (await import(pathToFileURL(f))).questions))).flat();
const { papers } = await import('../content/econ/papers.ts');
const byTopic = new Map(topics.map(t => [t.id, t]));
const byQuestion = new Map(questions.map(q => [q.id, q]));
const yes = ['1.1','1.2', ...Array.from({length:10},(_,i)=>`2.${i+1}`),'2.12', ...Array.from({length:7},(_,i)=>`3.${i+1}`)];
const no = ['2.11', ...Array.from({length:10},(_,i)=>`4.${i+1}`)];
for (const [scope, codes] of [['yes', yes], ['no', no]]) for (const code of codes) test(`school scope ${code}: ${scope}`, () => {
  const found = topics.filter(t => t.code === code && !t.id.endsWith('-extension'));
  assert.ok(found.length, `missing ${code}`);
  found.forEach(t => assert.equal(t.inMockScope, scope, t.id));
});
test('mock Paper 1 contains only Unit 3 questions', () => {
  const active = questions.filter(q => q.paper === 'P1' && q.inMockScope !== 'no');
  assert.ok(active.length >= 4);
  for (const q of active) assert.ok(q.topicIds.every(id => byTopic.get(id)?.code.startsWith('3.')), q.id);
});
test('every mock timed set excludes Unit 4, market power and marked extensions', () => {
  for (const p of papers) for (const set of p.timedSets) for (const id of set.questionIds) {
    const q = byQuestion.get(id); assert.ok(q, id); assert.notEqual(q.inMockScope, 'no', id);
    for (const topic of q.topicIds) assert.equal(byTopic.get(topic)?.inMockScope, 'yes', `${id}: ${topic}`);
    if (p.paper === 'P1') assert.ok(q.topicIds.every(t => byTopic.get(t).code.startsWith('3.')), id);
  }
});
test('school paper marks and printed durations are exact', () => {
  assert.deepEqual(papers.map(p => [p.paper,p.marks,p.minutes]), [['P1',25,75],['P2',40,105],['P3',32,60]]);
  assert.equal(byQuestion.get('p3-mock-01').marks,32);
});
test('mock checklist is available in both languages', () => {
  for (const lang of ['en','ru']) {
    const body = readFileSync(join(root,`exam/topics/mock-checklist.${lang}.mdx`),'utf8');
    for (const code of yes) assert.ok(body.includes(code),code);
    assert.ok(body.includes('HL'));
    assert.ok(body.includes('Tragakes'));
  }
});
test('checklist and retained extension links use portal hash routes', () => {
  for (const f of all.filter(f => f.endsWith('.mdx'))) {
    const body=readFileSync(f,'utf8');
    assert.doesNotMatch(body,/\]\(\/s\/econ\//,f);
  }
});
