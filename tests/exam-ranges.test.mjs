import test from 'node:test';
import assert from 'node:assert/strict';
import { exams } from './planner-fixtures.mjs';
import { examStartClock } from '../src/planner/calendar.ts';
import { examRanges } from '../src/lib/exam-ranges.ts';
const mins=c=>Number(c.slice(0,2))*60+Number(c.slice(3,5));
for(const separate of [false,true])test(`every displayed range uses printed duration, ACC2=${separate}`,()=>{
 for(const exam of exams.papers){
  const ranges=examRanges(exams,exam,separate);
  for(const [key,start] of [['printed',exam.start],['sitting',examStartClock(exam,separate)]]){
   const [from,to]=ranges[key].range.split('–');
   assert.equal(from,start);assert.equal(mins(to)-mins(from),exam.minutes);assert.equal(ranges[key].minutes,exam.minutes);
  }
 }
});
