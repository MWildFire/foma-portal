import test,{before,after} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
let server,Graph;
before(async()=>{server=await createServer({root:process.cwd(),appType:'custom',server:{middlewareMode:true,hmr:false,ws:false,watch:null},optimizeDeps:{noDiscovery:true,include:[]},logLevel:'silent'});Graph=(await server.ssrLoadModule('/src/sims/econ/_lib/graph.tsx')).Graph;});
after(async()=>{await server?.close();});
const spec={xMax:100,yMax:100,xLabel:{en:'Q',ru:'Q'},yLabel:{en:'P',ru:'P'},xTicks:[{value:50,label:{en:'50',ru:'50'}}],curves:[{id:'d',points:[[0,100],[100,0]],label:{en:'D',ru:'D'}}]};
test('labels retain at least 11 CSS pixels when the phone container is 280px wide',()=>{
 const h=renderToStaticMarkup(createElement(Graph,{spec,lang:'en',label:'test'}));
 assert.match(h,/overflow-x:auto/);
 const min=Number(h.match(/min-width:([\d.]+)px/)[1]);
 const vb=Number(h.match(/viewBox="0 0 ([\d.]+)/)[1]);
 const font=Math.min(...[...h.matchAll(/font-size="([\d.]+)"/g)].map(m=>Number(m[1])));
 assert.ok(font*Math.max(280,min)/vb>=11);
});
test('Lorenz option has equal horizontal and vertical plot lengths',()=>{
 const h=renderToStaticMarkup(createElement(Graph,{spec:{...spec,square:true},lang:'en',label:'Lorenz'}));
 const [w,height]=h.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).slice(1).map(Number);
 assert.equal(w-56-16,height-14-44);
});
