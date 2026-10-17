import test from 'node:test';
import assert from 'node:assert/strict';
import {plan,emptyState,withSettings} from './planner-fixtures.mjs';
for(const date of ['2026-10-16','2026-10-17','2026-10-18','2026-10-20','2026-10-30'])test(`${date}: focus describes each concrete task in EN/RU at default and zero load`,()=>{
 for(const state of [emptyState(),withSettings(emptyState(),{dailyLoadMinutes:{mon:0,tue:0,wed:0,thu:0,fri:0,sat:0,sun:0}})]){
  const d=plan(date,{state}).days[0];for(const lang of ['en','ru']){
   for(const b of d.blocks)assert.ok(d.focus[lang].includes(b.title[lang]));
   assert.doesNotMatch(d.focus[lang],/calculus|french|француз|математический анализ/i);
  }
 }
});
test('17 October focus names the assigned functions practice and exact daily route',()=>{
 const d=plan('2026-10-17').days[0], b=d.blocks.find(b=>b.subject==='math');
 assert.match(d.focus.en,/Functions/);assert.ok(b.minutes>100);assert.equal(b.route,'/s/math/practice?daily=r06-2026-10-17-math');
});
