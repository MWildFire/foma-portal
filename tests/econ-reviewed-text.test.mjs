import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const root=new URL('../content/econ/',import.meta.url);
const body=(unit,id,lang)=>readFileSync(new URL(`${unit}/topics/${id}.${lang}.mdx`,root),'utf8');
for(const lang of ['en','ru']) {
 test(`floor buyback distinguishes expenditure, transfer gain and welfare loss (${lang})`,()=>{
  const s=body('u2-micro','government-taxes-subsidies-price-controls',lang);
  assert.match(s,/108\s*[−-]\s*18\s*=\s*90/);
 });
 test(`output gap keeps both output units and percentage normalisation (${lang})`,()=>{
  const s=body('u3-macro','ad-as-model-and-business-cycle',lang);
  assert.match(s,/420\s*[−-]\s*400\s*=\s*20/);
  assert.match(s,/5[.,]0%/);
 });
 test(`Lorenz description keeps cumulative income vertical (${lang})`,()=>{
  const s=body('u3-macro','inequality-and-poverty',lang).split(lang==='en'?'## Summary':'## Коротко')[1];
  assert.match(s,lang==='en'?/income.*vertical/:/доход.*вертикал[ьи]/);
 });
 test(`property-rights application separates textbook definition from author explanation (${lang})`,()=>{
  const s=body('u2-micro','externalities',lang);
  assert.match(s,/585/);assert.match(s,lang==='en'?/our explanation/i:/наше объяснение/i);
 });
}
test('social optimum term uses social marginal conditions, not profit maximisation', async()=>{
 const {terms}=await import('../content/econ/u2-micro/terms/common-pool-resources.ts');
 const t=terms.find(t=>t.id==='socially-optimal-use');
 assert.match(t.def.en,/marginal social benefit|MSB/);assert.match(t.def.en,/marginal social cost|MSC/);
 assert.doesNotMatch(t.def.en,/profit is maximized/);
});
