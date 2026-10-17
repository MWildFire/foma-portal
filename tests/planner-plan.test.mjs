import test from 'node:test';
import assert from 'node:assert/strict';
import {plan,exams,quotas,emptyState,makeSubjects} from './planner-fixtures.mjs';
import {buildPlan} from '../src/planner/plan.ts';
import {dateRange,dubaiEpoch} from '../src/planner/dates.ts';
test('four subjects every calendar day; previous dates never become preparation debt',()=>{
 for(const date of dateRange('2026-10-15','2026-11-07')){
  const p=plan(date);assert.ok(p.days.every(d=>d.date>=date));assert.deepEqual(p.debt,[]);assert.deepEqual(p.unplaced,[]);
  for(const d of p.days){assert.deepEqual(d.blocks.map(b=>b.subject),['econ','math','geo','eng']);assert.equal(d.minutes,240);}
  if(date>'2026-11-05')assert.equal(p.days.length,0);
 }
});
test('selected confirmed final-paper start bounds preparation; end bounds terminal state',()=>{
 for(const separate of [false,true]){
  const state=emptyState();state.settings.accessArrangements.separateRoom=separate;
  const input={today:'2026-11-05',exams,quotas,subjects:makeSubjects(),state};
  const start=separate?'08:00':'08:15', end=separate?'10:00':'10:15';
  const before=buildPlan({...input,now:dubaiEpoch(input.today,start)-60000}).days[0];assert.equal(before.budget.clockLimit,1);assert.equal(before.budget.deficit,239);
  const during=buildPlan({...input,now:dubaiEpoch(input.today,start)}).days[0];assert.equal(during.budget.available,0);assert.equal(during.budget.runningExam,true);assert.equal(during.budget.status,'conflict');
  assert.equal(buildPlan({...input,now:dubaiEpoch(input.today,end)-1}).days[0].blocks.length,4);
  assert.equal(buildPlan({...input,now:dubaiEpoch(input.today,end)}).days.length,0);
 }
});
test('full-day quota is never reported as remaining time at 23:50',()=>{
 const state=emptyState();state.settings.dailyLoadMinutes.sat=240;
 const input={today:'2026-10-17',now:dubaiEpoch('2026-10-17','23:50'),exams,quotas,subjects:[],state};
 let day=buildPlan(input).days[0];assert.equal(day.budget.dailyQuota,240);assert.equal(day.budget.available,10);assert.equal(day.budget.deficit,230);
 state.blocks[day.blocks[0].id]='2026-10-17';day=buildPlan(input).days[0];assert.equal(day.budget.completed,46);assert.equal(day.budget.remaining,194);assert.equal(day.budget.deficit,184);
 for(const b of day.blocks)state.blocks[b.id]='2026-10-17';day=buildPlan(input).days[0];assert.equal(day.budget.remaining,0);assert.equal(day.budget.deficit,0);
});
test('a nonfinal exam window is excluded once, including overlaps',()=>{
 const state=emptyState();state.settings.dailyLoadMinutes.mon=600;
 const input={today:'2026-10-26',now:dubaiEpoch('2026-10-26','13:30'),exams,quotas,subjects:[],state};
 const day=buildPlan(input).days[0];assert.equal(day.budget.clockLimit,540);assert.equal(day.budget.runningExam,true);
 const overlapping={...exams,papers:[...exams.papers,{...exams.papers.find(e=>e.id==='geo-p1'),id:'overlap',start:'14:00',minutes:90}]};
 assert.equal(buildPlan({...input,exams:overlapping}).days[0].budget.clockLimit,510);
});
