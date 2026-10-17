import test,{before,after} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
let server;
before(async()=>{server=await createServer({root:process.cwd(),appType:'custom',server:{middlewareMode:true,hmr:false,ws:false,watch:null},optimizeDeps:{noDiscovery:true,include:[]},logLevel:'silent'});});
after(async()=>{await server?.close();});
async function draw(name,lang='en') {const m=await server.ssrLoadModule(`/src/sims/math/${name}.tsx`);return renderToStaticMarkup(createElement(m.default,{lang}));}
test('graph vertices mask edges and powers use superscripts', async()=>{
 const h=await draw('adjacency-lab');
 assert.ok(!/fill="none"[^>]+stroke="currentColor"[^>]+><\/circle>/.test(h));
 assert.match(h,/<sup>3<\/sup>/);
});
test('hypotheses and t-axis are visible',async()=>{
 assert.match(await draw('chi-squared-lab'),/H0:.*independent/);
 assert.match(await draw('t-test-lab'),/>−4<\/text>/);
});
test('phase portrait indicates forward time with arrows',async()=>{
 const h=await draw('phase-portrait-lab');
 assert.equal((h.match(/marker-end=/g)||[]).length,8);
});
test('Voronoi construction does not mislabel entire bisectors as cell edges',async()=>{
 assert.match(await draw('voronoi-lab'),/not all of each bisector/);
});
test('tangent legend text uses the theme foreground rather than low-contrast curve colours',async()=>{
 const h=await draw('tangent-optimisation-lab');
 const caption=h.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/)[1];
 assert.ok(!/<span style="color:#[^"]+">■ [^<]+<\/span>/.test(caption));
});
test('horizontal reflection label states its shifted axis',async()=>{
 assert.match(await draw('transformations-lab'),/reflection.*x = a/);
 assert.match(await draw('transformations-lab','ru'),/отражение.*x = a/);
});
