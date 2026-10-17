import test from 'node:test';
import assert from 'node:assert/strict';
import {readdirSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
const root=new URL('../content/econ/',import.meta.url).pathname;
function walk(d){return readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(d,e.name)):[join(d,e.name)]);}
for(const f of walk(root).filter(f=>f.endsWith('.meta.ts'))){
 const t=(await import(pathToFileURL(f))).default;
 if(t.inMockScope==='yes' && /^[12]\./.test(t.code))for(const lang of['en','ru'])test(`${t.id}: school paper guidance is consistent (${lang})`,()=>{
  const s=readFileSync(f.replace('.meta.ts',`.${lang}.mdx`),'utf8');
  assert.doesNotMatch(s,/all three papers|во всех тр[её]х работах|P2 and P2|P2 и P2|P2 essays|эссе \(?P2|mock P2 is Unit 3/i);
  const section=s.split(lang==='en'?'## How it is examined':'## Как это спрашивают')[1].split('\n## ')[0];
  assert.match(section,/P2/);assert.match(section,/P3/);assert.match(section,lang==='en'?/school|mock/i:/школьн|мок/i);
 });
 if(t.id.endsWith('-extension'))for(const lang of['en','ru'])test(`${t.id}: exam section keeps extension outside mock (${lang})`,()=>{
  const s=readFileSync(f.replace('.meta.ts',`.${lang}.mdx`),'utf8').split(lang==='en'?'## How it is examined':'## Как это спрашивают')[1].split('\n## ')[0];
  assert.match(s,lang==='en'?/outside.*mock/i:/не входит.*мок/i);
  assert.ok(s.includes(`#/s/econ/t/${t.id.replace(/-extension$/, '')}`));
  assert.doesNotMatch(s,/School mock: this topic is used|Школьный мок: эта тема нужна/);
 });
}
