import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseExams } from '../src/planner/calendar.ts';
import { setAllowanceMinutes } from '../src/components/practice/timing.ts';
import { papers as csPapers } from '../content/cs/papers.ts';
import { papers as econPapers } from '../content/econ/papers.ts';
import { papers as engPapers } from '../content/eng/papers.ts';
import { papers as frPapers } from '../content/fr/papers.ts';
import { papers as mathPapers } from '../content/math/papers.ts';
import { papers as geoCorePapers } from '../content/geo/core/papers.ts';
import { papers as geoOptionPapers } from '../content/geo/options/papers.ts';
import { pastPapers as csPast } from '../content/cs/pastpapers.ts';
import { pastPapers as econPast } from '../content/econ/pastpapers.ts';
import { pastPapers as engPast } from '../content/eng/pastpapers.ts';
import { pastPapers as frPast } from '../content/fr/pastpapers.ts';
import { pastPapers as mathPast } from '../content/math/pastpapers.ts';
import { pastPapers as geoCorePast } from '../content/geo/core/pastpapers.ts';
import { pastPapers as geoOptionPast } from '../content/geo/options/pastpapers.ts';

import { normalizeState, emptyState } from '../src/lib/storage.ts';
const exams = parseExams(JSON.parse(readFileSync(new URL('../data/exams.json', import.meta.url),'utf8')));
const contentSittings = [
  ...[['cs', csPapers], ['econ', econPapers], ['eng', engPapers], ['fr', frPapers], ['math', mathPapers],
    ['geo', geoCorePapers], ['geo', geoOptionPapers]]
    .flatMap(([subject, guides]) => guides.flatMap(guide => (guide.timedSets ?? []).map(set => ({
      kind: 'timed set', subject, id: set.id, set: { paper: guide.paper, part: guide.part, minutes: set.minutes },
    })))),
  ...[['cs', csPast], ['econ', econPast], ['eng', engPast], ['fr', frPast], ['math', mathPast],
    ['geo', geoCorePast], ['geo', geoOptionPast]]
    .flatMap(([subject, refs]) => refs.map(ref => ({
      kind: 'past paper', subject, id: ref.id, set: { paper: ref.paper, part: ref.part, minutes: ref.minutes },
    }))),
];

for (const version of [undefined,2,3]) test(`all guides, sets and past papers use printed minutes with save ${version}`,()=>{
 const state=version === undefined ? emptyState() : normalizeState({version,settings:{accessArrangements:{extraTime:true}}});
 const guides=[['cs',csPapers],['econ',econPapers],['eng',engPapers],['fr',frPapers],['math',mathPapers],['geo',geoCorePapers],['geo',geoOptionPapers]].flatMap(([subject,ps])=>ps.map(p=>({subject,id:p.paper,set:p})));
 for(const {subject,id,set} of [...guides,...contentSittings]) {
  assert.equal(setAllowanceMinutes({subject,set,exams,...state.settings.accessArrangements}),set.minutes,`${subject}/${id}`);
 }
});
test('invalid duration does not create a timer',()=>{
 for(const minutes of [0,-1,NaN,Infinity]) assert.equal(setAllowanceMinutes({subject:'math',set:{paper:'P1',minutes},exams}),0);
});
test('math P3 task gets its share of the printed paper: ceil(75 * 28 / 55) = 39',()=>{
 const p3=mathPapers.find(p=>p.paper==='P3');
 assert.equal(p3.timedSets.find(s=>s.id==='p3-task').minutes, Math.ceil(p3.minutes*28/p3.marks));
});
