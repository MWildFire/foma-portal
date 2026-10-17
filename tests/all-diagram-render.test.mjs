import test, {before,after} from 'node:test';
import assert from 'node:assert/strict';
import {readdirSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {createServer} from 'vite';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
const root=join(import.meta.dirname,'..');
let server;
before(async()=>{server=await createServer({root,appType:'custom',server:{middlewareMode:true,hmr:false,ws:false,watch:null},optimizeDeps:{noDiscovery:true,include:[]},logLevel:'silent'});});
after(async()=>{await server?.close();});
for(const subject of ['math','cs','geo','fr','eng','econ']) {
 for(const file of readdirSync(join(root,'src/sims',subject)).filter(f=>f.endsWith('.tsx'))) {
  if(!/export default/.test(readFileSync(join(root,'src/sims',subject,file),'utf8'))) continue;
  for(const lang of ['en','ru']) test(`${subject}/${file} renders in ${lang}`,async()=>{
   const {default:Component}=await server.ssrLoadModule(`/src/sims/${subject}/${file}`);
   const html=renderToStaticMarkup(createElement(Component,{lang}));
   assert.ok(html.length>100);
   assert.ok(!/\bNaN\b/.test(html));
  });
 }
}
