// Legacy saves cannot change the printed plan or add workload.
import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyState, plan, quotas, withSettings } from './planner-fixtures.mjs';
for(const enabled of [false,true]) test(`legacy setting ${enabled} leaves every timed block printed`,()=>{
 const result=plan('2026-10-15',{state:withSettings(emptyState(),{accessArrangements:{extraTime:enabled}})});
 assert.deepEqual(result,plan('2026-10-15'));
 for(const day of result.days){
  assert.ok(day.minutes<=Math.floor(day.capacity*1.15));
  for(const b of day.blocks.filter(b=>b.kind==='timed')){
   const entry=quotas.days.flatMap(d=>d.timed).find(t=>t.subject===b.subject&&t.paper===b.paper&&b.route.includes('?set=')===(t.set!==undefined));
   assert.equal(b.minutes,entry.minutes);
  }
 }
});
