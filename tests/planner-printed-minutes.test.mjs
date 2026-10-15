import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeState, emptyState, STORAGE_KEY } from '../src/lib/storage.ts';
import { timedEntryMinutes, sittingMinutes } from '../src/planner/calendar.ts';
import { timedRunMinutes } from '../src/sims/fr/reading-logic.ts';
import { exams, plan } from './planner-fixtures.mjs';
for (const version of [undefined,2,3]) test(`printed minutes survive legacy version ${version}`,()=>{
 const raw = version === undefined ? emptyState() : {version,settings:{accessArrangements:{extraTime:true}}};
 const state=normalizeState(raw);
 assert.equal(state.settings.accessArrangements.extraTime,undefined);
 assert.equal(STORAGE_KEY,'foma-portal-v1');
 for(const exam of exams.papers){
  assert.equal(sittingMinutes(exams,exam,true),exam.minutes);
  assert.equal(timedEntryMinutes(exams,exam,true),exam.minutes);
 }
 assert.equal(timedRunMinutes(exams,true),45);
 assert.deepEqual(plan('2026-10-15',{state}),plan('2026-10-15',{state:emptyState()}));
});
