import test from 'node:test';
import assert from 'node:assert/strict';
import { minimumDiagramWidth } from '../src/sims/readable-diagram-logic.ts';
test('minimum width preserves at least 11 CSS pixels for the smallest SVG label',()=>{
 for(const width of [240,320,340,360,400,720]) for(const font of [8,9,10,11,12,14]) {
  const result=minimumDiagramWidth(width,font);
  assert.ok(font*result/width>=11);
  assert.ok(result<=width*11/font+1);
 }
});
