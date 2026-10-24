import test from 'node:test';import assert from 'node:assert/strict';
import {plan,emptyState,withSettings} from './planner-fixtures.mjs';
for(const minutes of [0,1,10,25,60,120,240,300,600])test(`custom ${minutes}: all four tasks retained, no budget overflow`,()=>{
 const state=withSettings(emptyState(),{dailyLoadMinutes:Object.fromEntries(['mon','tue','wed','thu','fri','sat','sun'].map(d=>[d,minutes]))});
 for(const d of plan('2026-10-17',{state}).days){assert.equal(d.blocks.length,4);assert.equal(d.capacity,minutes);assert.equal(d.budget.required,240);assert.equal(d.budget.deficit,Math.max(0,d.budget.remaining-d.budget.available));assert.ok(d.scheduledMinutes<=d.budget.available);}
});
test('daily target includes final exam day, and defaults are never confirmed availability',()=>{
 for(const d of plan('2026-10-17').days){assert.equal(d.budget.dailyQuota,240);assert.equal(d.budget.source,'default');assert.equal(d.budget.status,'unknown');assert.equal(d.scheduledMinutes,0);}
});
test('legacy ACC2 setting no longer overrides confirmed Main Hall',()=>{
 const state=withSettings(emptyState(),{dailyLoadMinutes:{thu:600},accessArrangements:{separateRoom:true}});
 const d=plan('2026-10-29',{state}).days[0];assert.equal(d.budget.roomUnconfirmed,false);assert.equal(d.budget.status,'fits');
});
