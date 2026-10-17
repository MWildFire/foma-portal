import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { figureDisplayWidth } from '../src/lib/figure-size.ts';
import { filterFormulas } from '../src/lib/formula-filter.ts';
test('booklet filters are exclusive and unknown status is never called outside the booklet',()=>{
 const fs=[{id:'in',inBooklet:true},{id:'out',inBooklet:false},{id:'unknown'}];
 assert.deepEqual(filterFormulas(fs,'all'),fs);
 assert.deepEqual(filterFormulas(fs,'booklet').map(f=>f.id),['in']);
 assert.deepEqual(filterFormulas(fs,'outside').map(f=>f.id),['out']);
});
test('the shell has no external font requests',()=>{
 assert.doesNotMatch(readFileSync('index.html','utf8'),/fonts\.googleapis\.com|fonts\.gstatic\.com/);
});

test('figures keep at least 11px labels using their viewBox and smallest explicit font',()=>{
 assert.equal(figureDisplayWidth('<svg viewBox="0 0 760 400"><text font-size="11">A</text></svg>'),760);
 assert.equal(figureDisplayWidth('<svg viewBox="0 0 760 400"><text style="font-size: 8px">A</text></svg>'),1045);
 assert.equal(figureDisplayWidth('<svg width="900" height="400"></svg>'),900);
});
test('access instructions describe typing without pointing to a removed checking switch',()=>{
 for(const lang of ['en','ru']){
  const intro=JSON.parse(readFileSync(`src/i18n/${lang}/settings.json`,'utf8')).access.intro;
  assert.match(intro,/typing/);
  assert.doesNotMatch(intro,/switch below|переключатель ниже/i);
 }
});
