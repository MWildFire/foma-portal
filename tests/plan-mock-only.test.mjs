import test from 'node:test';
import assert from 'node:assert/strict';
import { plan, makeSubjects, emptyState, exams } from './planner-fixtures.mjs';
import { topicQueue } from '../src/planner/queue.ts';
import { filterMockTopics, questionInMock, filterMockSets, mockSubjects, filterMockResources } from '../src/lib/mock-scope.ts';
const topics=[{id:'yes',inMockScope:'yes',priority:3,order:3},{id:'no',inMockScope:'no',priority:1,order:1},{id:'maybe',inMockScope:'unknown',priority:1,order:0}];
test('yes precedes unknown even when unknown has higher priority',()=>assert.deepEqual(topicQueue(topics).map(t=>t.id),['yes','maybe','no']));
test('topics are mock only by default and opt-in restores all',()=>{
 assert.deepEqual(filterMockTopics(topics).map(t=>t.id),['yes','maybe']);
 assert.deepEqual(filterMockTopics(topics,true),topics);
});
test('practice excludes explicit no and any question mixing a no topic with a yes topic',()=>{
 assert.equal(questionInMock({topicIds:['yes','no']},topics),false);
 assert.equal(questionInMock({topicIds:['yes'],inMockScope:'no'},topics),false);
 assert.equal(questionInMock({topicIds:['maybe']},topics),true);
 const questions=[{id:'ok',topicIds:['yes']},{id:'outside',topicIds:['no']}];
 const sets=[{id:'safe',questionIds:['ok']},{id:'mixed',questionIds:['ok','outside']}];
 assert.deepEqual(filterMockSets(sets,questions,topics).map(s=>s.id),['safe']);
 assert.deepEqual(filterMockSets(sets,questions,topics,true),sets);
});
test('excluded topics cannot enter first pass, practice or recall from saved progress',()=>{
 const subjects=makeSubjects();
 for(const s of subjects){s.topics[0].inMockScope='no';s.topics[1].inMockScope='unknown';}
 const state=emptyState();
 for(const s of subjects){state.topics[`${s.id}/${s.topics[0].id}`]={done:'2026-10-14',rag:'red'};for(const id of s.topics[0].termIds)state.terms[`${s.id}/${id}`]={box:0,due:'2026-10-15'};}
 for(const today of ['2026-10-15','2026-10-26','2026-11-03']){
  const p=plan(today,{subjects,state});
  for(const b of p.days.flatMap(d=>d.blocks))assert.ok(!subjects.some(s=>s.id===b.subject&&s.topics[0].id===b.topicId),b.route);
  assert.equal(p.days[0]?.recall?.redTotal??0,0);
 }
});
test('scope restriction expires after the subject last exam, and does not invent a CS scope',()=>{
 const subjects=makeSubjects();subjects[0].topics[0].inMockScope='no';
 assert.equal(mockSubjects(subjects,exams,'2026-10-27')[0].topics.some(t=>t.inMockScope==='no'),false);
 assert.equal(mockSubjects(subjects,exams,'2026-10-28')[0].topics.some(t=>t.inMockScope==='no'),true);
});
test('last exam and following days produce valid plans without exceptions',()=>{
 for(const date of ['2026-11-06','2026-11-07']){
  const p=plan(date);assert.deepEqual(p.activeSubjects,[]);assert.ok(p.days.every(d=>d.blocks.length===0));
 }
});

test('shared resources stay available, and excluded-only flashcards and formulas are hidden',()=>{
 const ts=[{id:'in',inMockScope:'yes',termIds:['shared'],formulaIds:['shared']},{id:'out',inMockScope:'no',termIds:['out','shared'],formulaIds:['out','shared']}];
 const rs=[{id:'out'},{id:'shared'},{id:'unmapped'}];
 for(const field of ['termIds','formulaIds']){
  assert.deepEqual(filterMockResources(rs,ts,field).map(r=>r.id),['shared','unmapped']);
  assert.deepEqual(filterMockResources(rs,ts,field,true),rs);
 }
});
