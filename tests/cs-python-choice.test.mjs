import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {pastPapers} from '../content/cs/pastpapers.ts';

test('P2 guides use the confirmed Python choice and Java specimen is comparison only',()=>{
  const text=readFileSync(new URL('../content/cs/papers.ts',import.meta.url),'utf8');
  assert.doesNotMatch(text,/school has not confirmed|Школа пока не подтвердила/);
  const a=pastPapers.find(p=>p.id==='cs-p2-spec27-hl-opta');
  const b=pastPapers.find(p=>p.id==='cs-p2-spec27-hl-optb');
  assert.match(a.guide.en,/comparison only/i);
  assert.match(a.guide.ru,/только для сравнения/i);
  assert.match(b.guide.en,/[redacted].*Python/);
  assert.match(b.guide.ru,/[redacted].*Python/);
  assert.doesNotMatch(JSON.stringify([a.guide,b.guide]),/if the school confirms Java|Check which language|Уточните у учителя/);
});
