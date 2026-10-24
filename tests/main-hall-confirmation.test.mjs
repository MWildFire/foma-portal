import test from 'node:test';
import assert from 'node:assert/strict';
import { exams, plan, emptyState, withSettings } from './planner-fixtures.mjs';
import { accessChoiceOf } from '../src/planner/access.ts';
import { nextExam } from '../src/planner/countdown.ts';
import { dubaiEpoch } from '../src/planner/dates.ts';

test('old ACC2 browser settings use the 10:15 Main Hall Maths P3 start everywhere',()=>{
 const saved=withSettings(emptyState(),{accessArrangements:{room:'ACC2',separateRoom:true}});
 const before=JSON.stringify(saved);
 const choice=accessChoiceOf(saved.settings.accessArrangements);
 const next=nextExam(exams,dubaiEpoch('2026-10-27','09:40'),choice.separateRoom);
 assert.deepEqual([next.exam.id,next.phase,next.start],['math-p3','upcoming','10:15']);
 const main=plan('2026-10-27',{state:emptyState(),now:dubaiEpoch('2026-10-27','09:40')});
 const legacy=plan('2026-10-27',{state:saved,now:dubaiEpoch('2026-10-27','09:40')});
 assert.deepEqual(legacy.days.map(d=>d.budget),main.days.map(d=>d.budget));
 assert.equal(JSON.stringify(saved),before);
});

test('all fifteen starts and printed durations match the audited source references',()=>{
 assert.deepEqual(exams.papers.map(p=>[p.id,p.date,p.start,p.minutes]),[
 ['math-p1','2026-10-26','08:00',120],['geo-p1','2026-10-26','13:30',90],
 ['geo-p2','2026-10-27','08:15',75],['math-p3','2026-10-27','10:15',75],['math-p2','2026-10-27','13:30',120],
 ['fr-p1','2026-10-28','08:15',75],['fr-p2r','2026-10-28','10:45',45],['fr-p2l','2026-10-28','14:45',60],
 ['eng-p1','2026-10-29','08:15',75],['eng-p2','2026-10-29','11:00',105],
 ['econ-p3','2026-11-02','11:15',60],['econ-p2','2026-11-02','14:00',105],['econ-p1','2026-11-03','08:15',75],
 ['cs-p1','2026-11-04','14:00',120],['cs-p2','2026-11-05','08:15',120]]);
});
