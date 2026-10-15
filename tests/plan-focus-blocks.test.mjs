import test from 'node:test';
import assert from 'node:assert/strict';
import {plan} from './planner-fixtures.mjs';
const names={geo:/geograph|geo\b|географ/i,math:/math|математ/i,econ:/econom|econ\b|эконом/i,cs:/computer|\bcs\b|информат/i,eng:/english|англий/i,fr:/french|француз/i};
test('every subject promised by focus has a block, in EN and RU on every planning day',()=>{
 for(const day of plan('2026-10-14').days)for(const lang of ['en','ru']){
  const focus=day.focus?.[lang]??'';
  for(const [subject,pattern] of Object.entries(names))if(pattern.test(focus))assert.ok(day.blocks.some(b=>b.subject===subject),`${day.date}/${lang}/${subject}`);
 }
});
test('16 Oct promises and contains an economics diagnostic with the printed set duration',()=>{
 const day=plan('2026-10-16').days[0];
 for(const lang of ['en','ru'])assert.match(day.focus[lang],/diagnos|диагност/i);
 const diagnostic=day.blocks.find(b=>b.subject==='econ'&&b.kind==='timed'&&b.route.includes('set=p3-mock'));
 assert.ok(diagnostic);assert.equal(diagnostic.minutes,60);assert.equal(day.capacity,120);
});
test('a reduced load or rest day never promises a missing diagnostic',()=>{
 const p=plan('2026-10-16',{state:{version:3,topics:{},terms:{},questions:{},blocks:{},settings:{accessArrangements:{},dailyLoadMinutes:{fri:0}}}});
 assert.doesNotMatch(JSON.stringify(p.days[0].focus),/diagnos|диагност/i);
});
