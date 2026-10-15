import test from 'node:test';
import assert from 'node:assert/strict';
import { exams } from './planner-fixtures.mjs';
import { accessChoiceOf } from '../src/planner/access.ts';
import { hallWindows, hallClashes, hallOf } from '../src/planner/rooms.ts';
import { normalizeState } from '../src/lib/storage.ts';
test('typing only; legacy saves retain room and discard retired duration flag',()=>{
 assert.deepEqual(exams.access,{typing:true,room:'tbd'});
 for(const version of [1,2,3])for(const room of ['ACC2','SpHal2','unknown']){
  const state=normalizeState({version,settings:{accessArrangements:{extraTime:true,room}}});
  assert.deepEqual(accessChoiceOf(state.settings.accessArrangements),{room,separateRoom:room==='ACC2'});
 }
 assert.equal(accessChoiceOf({separateRoom:true}).room,'ACC2');
});
for(const room of ['ACC2','SpHal2','unknown'])test(`all hall windows preserve printed durations: ${room}`,()=>{
 for(const w of hallWindows(exams,room)){
  assert.equal(w.endMs-w.startMs,w.exam.minutes*60000);
  assert.equal(w.start,w.hall==='ACC2' ? w.exam.acc2Start??w.exam.start : w.exam.start);
 }
 assert.deepEqual(hallClashes(exams,room),[]);
 assert.equal(hallOf(exams.papers.find(p=>p.id==='math-p1'),room),'ACC2');
});
test('hall clash detection includes overlap but excludes a shared endpoint',()=>{
 const p=(id,start)=>({id,date:'2026-10-26',start,minutes:60,room:'SpHal2'});
 assert.equal(hallClashes({...exams,papers:[p('a','08:00'),p('b','09:00')]},'SpHal2').length,0);
 assert.equal(hallClashes({...exams,papers:[p('a','08:00'),p('b','08:59')]},'SpHal2').length,1);
});
