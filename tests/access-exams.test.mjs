import test from 'node:test';
import assert from 'node:assert/strict';
import { exams } from './planner-fixtures.mjs';
import { accessChoiceOf } from '../src/planner/access.ts';
import { hallWindows, hallClashes, hallOf } from '../src/planner/rooms.ts';
import { normalizeState } from '../src/lib/storage.ts';
test('confirmed Main Hall overrides legacy room choices without changing stored progress',()=>{
 assert.deepEqual(exams.access,{typing:true,room:'SpHal2'});
 for(const version of [1,2,3])for(const room of ['ACC2','SpHal2','unknown']){
  const state=normalizeState({version,settings:{accessArrangements:{extraTime:true,room}}});
  assert.deepEqual(accessChoiceOf(state.settings.accessArrangements),{room:'SpHal2',separateRoom:false});
 }
 assert.equal(accessChoiceOf({separateRoom:true}).room,'SpHal2');
});
for(const room of ['ACC2','SpHal2','unknown'])test(`all hall windows preserve printed durations: ${room}`,()=>{
 for(const w of hallWindows(exams,room)){
  assert.equal(w.endMs-w.startMs,w.exam.minutes*60000);
  assert.equal(w.start,w.hall==='ACC2' ? w.exam.acc2Start??w.exam.start : w.exam.start);
 }
 assert.deepEqual(hallClashes(exams,room),[]);
 assert.equal(hallOf(exams.papers.find(p=>p.id==='math-p1'),room),room==='ACC2'?'ACC2':'SpHal2');
});
test('hall clash detection includes overlap but excludes a shared endpoint',()=>{
 const p=(id,start)=>({id,date:'2026-10-26',start,minutes:60,room:'SpHal2'});
 assert.equal(hallClashes({...exams,papers:[p('a','08:00'),p('b','09:00')]},'SpHal2').length,0);
 assert.equal(hallClashes({...exams,papers:[p('a','08:00'),p('b','08:59')]},'SpHal2').length,1);
});

test('confirmed personal room does not invent a Main Hall start for Maths AI HL P1',()=>{
 const first=exams.papers.find(p=>p.id==='math-p1');
 assert.equal(first.room,'SpHal2');
 assert.equal(first.start,'08:00');
 assert.equal(first.startConfirmed,false);
 assert.equal(first.minutes,120);
 assert.ok(exams.papers.every(p=>p.room==='SpHal2'));
 assert.equal(exams.papers.filter(p=>p.startConfirmed===false).length,1);
 const raw={room:'ACC2',separateRoom:true};
 accessChoiceOf(raw);
 assert.deepEqual(raw,{room:'ACC2',separateRoom:true});
});
