import test from 'node:test';
import assert from 'node:assert/strict';
import {papers as math} from '../content/math/papers.ts';
import {papers as econ} from '../content/econ/papers.ts';
import {plan,emptyState,withSettings} from './planner-fixtures.mjs';
import {parseBlockId,timedBlockId} from '../src/planner/blocks.ts';
test('daily practice includes printed paper clocks and preserves the existing library',()=>{
 const activities=plan('2026-10-17').days.flatMap(d=>d.blocks.map(b=>b.activity));
 assert.deepEqual(activities.filter(a=>a.timedMinutes).map(a=>a.timedMinutes),[75,75,105,60]);
 assert.ok(activities.every(a=>a.minutes>=20));
 assert.equal(math.find(p=>p.paper==='P2').minutes,120);
 assert.equal(econ.find(p=>p.paper==='P3').minutes,60);
 assert.ok([...math,...econ].every(p=>p.timedSets.length>0));
});
test('legacy timed IDs still parse for historical progress',()=>{
 const id=timedBlockId('2026-10-14','math','P1','diagnostic');
 assert.deepEqual(parseBlockId(id),{kind:'timed',date:'2026-10-14',subject:'math',paper:'P1',set:'diagnostic'});
});
