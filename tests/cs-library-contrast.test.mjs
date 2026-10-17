import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import vm from 'node:vm';
const code=readFileSync(new URL('../public/cs-lab/js/app.js',import.meta.url),'utf8');
const theme=vm.runInNewContext('('+code.match(/const Theme = (\{[\s\S]*?\n  \});/)[1]+')');
const rgb=hex=>hex.slice(1).match(/../g).map(v=>parseInt(v,16));
const luminance=c=>c.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
const ratio=(a,b)=>(Math.max(luminance(a),luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
test('actual active palette labels meet 4.5:1 after opacity compositing in both themes',()=>{
 for(const surface of ['#ffffff','#121a2e'])for(const fill of ['#f59e0b','#10b981','#ef4444','#38bdf8','#60a5fa','#8b5cf6'])for(const opacity of [1,.95,.55]){
  theme.surface=surface;const ink=theme.ink(fill,opacity);const bg=rgb(fill).map((v,i)=>v*opacity+rgb(surface)[i]*(1-opacity));
  assert.ok(ratio(rgb(ink),bg)>=4.5,`${surface}/${fill}/${opacity}: ${ink}`);
 }
});
