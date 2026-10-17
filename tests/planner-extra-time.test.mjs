import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyState,plan,withSettings } from './planner-fixtures.mjs';
for(const enabled of [false,true])test(`legacy extraTime=${enabled} cannot alter any daily task or printed timer`,()=>{
 const result=plan('2026-10-15',{state:withSettings(emptyState(),{accessArrangements:{extraTime:enabled}})});
 assert.deepEqual(result,plan('2026-10-15'));
 assert.deepEqual(result.days.flatMap(d=>d.blocks.filter(b=>b.activity.timedMinutes).map(b=>b.activity.timedMinutes)),[75,75,105,60]);
});
