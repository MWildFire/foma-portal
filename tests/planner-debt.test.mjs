import test from 'node:test';
import assert from 'node:assert/strict';
import { plan,emptyState } from './planner-fixtures.mjs';
import {markBlockDone,unmarkBlockDone} from '../src/planner/actions.ts';
test('past work is preserved as history without invented catch-up debt or French fallback',()=>{
 const state=emptyState();state.blocks={'t:fr/fr-t1@0+25':'2026-10-14','m:2026-10-14/math/P1:diagnostic':'2026-10-14'};
 const copy=structuredClone(state); const p=plan('2026-10-30',{state});
 assert.deepEqual(state,copy);assert.equal(p.completedHistory.length,2);assert.deepEqual(p.debt,[]);assert.deepEqual(p.unplaced,[]);
 assert.ok(p.days.flatMap(d=>d.blocks).every(b=>b.subject!=='fr'));
});
test('completion and undo keep the other three rows, future tasks and all legacy progress intact',()=>{
 let state=emptyState();state.blocks['old:block']='2026-10-14';
 const before=plan('2026-10-17',{state});const block=before.days[0].blocks[1];
 state=markBlockDone(state,block,'2026-10-17');
 const after=plan('2026-10-17',{state});assert.equal(after.days[0].blocks[1].status,'done');
 assert.deepEqual(after.days[0].blocks.map(b=>b.id),before.days[0].blocks.map(b=>b.id));
 assert.deepEqual(after.days.slice(1),before.days.slice(1));assert.equal(state.blocks['old:block'],'2026-10-14');
 state=unmarkBlockDone(state,after.days[0].blocks[1],'2026-10-17');assert.deepEqual(plan('2026-10-17',{state}),before);
});
test('finishing a day records its real minutes and tomorrow still contains all four tasks',()=>{
 let state=emptyState();const day=plan('2026-10-17').days[0];
 for(const block of day.blocks)state=markBlockDone(state,block,day.date);
 const done=plan(day.date,{state}).days[0];assert.equal(done.doneMinutes,done.minutes);assert.equal(done.blocks.length,4);
 const tomorrow=plan('2026-10-18',{state});assert.equal(tomorrow.completedHistory.length,4);assert.equal(tomorrow.days[0].blocks.length,4);
});
