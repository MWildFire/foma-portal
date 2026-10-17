import test from 'node:test';
import assert from 'node:assert/strict';
import { plan,emptyState } from './planner-fixtures.mjs';
import {dateRange} from '../src/planner/dates.ts';
for(const seed of [1,2,3,4])test(`mixed progress and load seed ${seed}: four rows, stable IDs, no capacity overclaim`,()=>{
 let n=seed;const rand=()=>((n=(n*1664525+1013904223)>>>0)/2**32);
 const state=emptyState();for(const d of ['mon','tue','wed','thu','fri','sat','sun'])state.settings.dailyLoadMinutes[d]=Math.floor(rand()*300);
 for(const d of plan('2026-10-17').days)for(const b of d.blocks)if(rand()<.5)state.blocks[b.id]=d.date;
 const saved=structuredClone(state);
 for(const date of dateRange('2026-10-15','2026-11-07')){
  const p=plan(date,{state});assert.equal(new Set(p.days.flatMap(d=>d.blocks.map(b=>b.id))).size,p.days.length*4);
  for(const d of p.days){assert.equal(d.blocks.length,4);assert.ok(d.scheduledMinutes<=d.capacity);assert.ok(d.doneMinutes<=d.minutes);}
  assert.deepEqual(p.debt,[]);assert.deepEqual(p.unplaced,[]);
 }
 assert.deepEqual(state,saved);
});
