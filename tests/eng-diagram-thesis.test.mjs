import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'vite';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
test('an empty thesis does not pass any checklist item',async()=>{
 const server=await createServer({root:process.cwd(),appType:'custom',server:{middlewareMode:true,hmr:false,ws:false,watch:null},optimizeDeps:{noDiscovery:true,include:[]},logLevel:'silent'});
 try {
  const {default:C}=await server.ssrLoadModule('/src/sims/eng/thesis.tsx');
  for(const lang of ['en','ru'])assert.ok(!renderToStaticMarkup(createElement(C,{lang})).includes('✓'));
 } finally {await server.close();}
});
