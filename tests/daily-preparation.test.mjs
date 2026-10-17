import test from 'node:test';
import assert from 'node:assert/strict';
import {readdirSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {DAILY_PREPARATION as days, DAILY_SUBJECTS} from '../data/daily-preparation.ts';
import {questionInMock} from '../src/lib/mock-scope.ts';
const walk=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${dir}/${e.name}`):[`${dir}/${e.name}`]);
const inventory={};
for(const s of DAILY_SUBJECTS){
 const files=walk(`content/${s}`);
 inventory[s]={topics:(await Promise.all(files.filter(f=>f.endsWith('.meta.ts')).map(async f=>(await import(pathToFileURL(resolve(f)))).default))).filter(t=>t?.subject===s),questions:(await Promise.all(files.filter(f=>f.includes('/questions/')&&f.endsWith('.ts')).map(async f=>(await import(pathToFileURL(resolve(f)))).questions??[]))).flat()};
}
test('20 calendar days from launch have four substantive hours, plus optional work',()=>{
 assert.equal(days.length,20);assert.equal(days[0].date,'2026-10-17');assert.equal(days.at(-1).date,'2026-11-05');
 const ids=new Set();
 for(const day of days){
  assert.deepEqual(day.activities.map(a=>a.subject),['econ','math','geo','eng']);
  assert.equal(day.activities.reduce((n,a)=>n+a.minutes,0),240);assert.equal(day.bufferMinutes,0);
  for(const a of day.activities){
   assert.ok(!ids.has(a.id));ids.add(a.id);assert.ok(a.minutes>=20);assert.equal(a.stages.reduce((n,s)=>n+s.minutes,0),a.minutes);
   assert.ok(a.stages.every(s=>s.minutes>0));
   for(const lang of ['en','ru'])for(const field of ['task','expectedOutcome','selfCheck','extension'])assert.ok(a[field][lang].length>40,`${a.id}/${lang}/${field}`);
   for(const id of a.relatedTopicIds)assert.ok(inventory[a.subject].topics.some(t=>t.id===id&&t.inMockScope!=='no'),id);
  }
 }
 assert.equal(ids.size,80);
});
test('named practice IDs exist, are in scope and match their allocated workload',()=>{
 for(const a of days.flatMap(d=>d.activities).filter(a=>a.subject!=='eng')){
  assert.ok(a.questionIds.length>=1,a.id);
  const {questions,topics}=inventory[a.subject];
  const assigned=a.questionIds.map(id=>{const q=questions.find(q=>q.id===id);assert.ok(q,id);assert.ok(questionInMock(q,topics),id);return q;});
  if(!['r06-2026-10-29-econ','r06-2026-10-30-econ'].includes(a.id))assert.equal(a.practiceEstimate,assigned.reduce((n,q)=>n+q.minutes,0));
  assert.ok(a.stages.some(s=>s.minutes===a.practiceEstimate));assert.ok(a.practiceEstimate<=a.minutes-5,a.id);
  assert.match(a.route,/practice\?daily=/);
 }
});
test('the specific previously absent objectives now have actual assigned questions',()=>{
 const assigned=days.flatMap(d=>d.activities);
 for(const [s,topic] of [['econ','income-and-cross-elasticity'],['econ','public-goods'],['econ','asymmetric-information'],['math','4-10-spearman'],['math','4-4-correlation-regression'],['math','4-13-nonlinear-regression']]){
  const qs=inventory[s].questions;assert.ok(assigned.filter(a=>a.subject===s).some(a=>a.questionIds.some(id=>qs.find(q=>q.id===id)?.topicIds.includes(topic))),topic);
 }
 assert.ok(assigned.filter(a=>a.subject==='eng').every(a=>/unconfirmed/.test(a.scopeNote.en)));
});

test('connected full paper outputs occur before their sittings with real review time',()=>{
 const acts=days.flatMap(d=>d.activities);
 for(const [id,qid,mins] of [['r06-2026-10-30-econ','p1-essay-10',75],['r06-2026-10-31-econ','p2-set-03',105],['r06-2026-11-01-econ','p3-mock-01',60]]){
  const a=acts.find(a=>a.id===id);assert.ok(a.questionIds.includes(qid));assert.equal(a.timedMinutes,mins);assert.ok(a.minutes>=mins+15);
 }
 for(const prefix of ['a','g'])assert.ok(acts.some(a=>a.subject==='geo'&&a.id.slice(4,14)<'2026-10-26'&&a.questionIds.some(id=>id.startsWith(prefix)&&id.includes('-eq'))));
 assert.equal(acts.find(a=>a.id==='r06-2026-10-28-eng').timedMinutes,75);
});

test('pre-exam English comparison uses two supplied training texts and keeps the real work choice open',()=>{
 const before=days.filter(d=>d.date<'2026-10-29').flatMap(d=>d.activities).filter(a=>a.subject==='eng');
 const comparisons=before.filter(a=>a.questionIds.length===2);
 assert.ok(comparisons.length>=2);
 const used=new Set();
 for(const a of comparisons){
  for(const id of a.questionIds){
   const q=inventory.eng.questions.find(q=>q.id===id);assert.ok(q?.stimulus?.en,id);used.add(id);
   for(const lang of ['en','ru'])assert.ok(a.task[lang].includes(id),`${a.id}/${lang}/${id}`);
  }
  assert.ok(a.stages.some(s=>s.minutes===a.practiceEstimate));
  assert.match(a.scopeNote.en,/unconfirmed/);
  assert.match(a.task.en,/not a complete Paper 2 response/);
 }
 assert.ok(used.size>=4,'different supplied poetry and prose passages support transferable comparison');
 assert.ok(before.every(a=>a.route.includes('/practice?daily=')||a.route.includes('/t/')));
});
test('four missing Core2/3 tasks are assigned before the core sitting without dropping earlier Math objectives',()=>{
 const beforeCore=days.filter(d=>d.date<'2026-10-27').flatMap(d=>d.activities);
 for(const qid of ['core-2-3-a6','core-3-1-a6','core-3-2-a6','core-3-3-a6'])assert.ok(beforeCore.some(a=>a.subject==='geo'&&a.questionIds.includes(qid)),qid);
 for(const a of beforeCore.filter(a=>a.subject==='math'))assert.ok(a.minutes-a.practiceEstimate>=15);
});
