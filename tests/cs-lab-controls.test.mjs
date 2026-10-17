import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=f=>readFileSync(new URL('../public/cs-lab/js/'+f,import.meta.url),'utf8');
const extract=(s,name,next)=>s.slice(s.indexOf('  function '+name+'('),s.indexOf('  function '+next+'('));
for(const [value,expected] of [['LRU',1],['FIFO',0],['Random',3]])test(`cache actual HTML policy ${value} chooses the correct victim`,()=>{
 const cache=[{loadedAt:1,lastUsed:5},{loadedAt:2,lastUsed:2},{loadedAt:3,lastUsed:3},{loadedAt:4,lastUsed:4}];
 const math=Object.create(Math);math.random=()=>.99;
 const actual=vm.runInNewContext(extract(source('cache-sim.js'),'pickVictim','step')+'\npickVictim()',{cache,policyEl:{value},Math:math});
 assert.equal(actual,expected);
});
for(const [value,blocked] of [['none',false],['rate-limit',true],['waf',true]])test(`DDoS actual HTML option ${value} controls packet outcome`,()=>{
 let i=0;const draws=[.1,.5];const math=Object.create(Math);math.random=()=>draws[i++];const packets=[];
 vm.runInNewContext(extract(source('ddos.js'),'decideEmissions','stepPackets')+'\ndecideEmissions()',{defenseSel:{value},legits:[],attackers:[{x:0,y:0,mx:1,my:1}],packets,Math:math});
 assert.equal(packets.length,1);assert.equal(packets[0].outcome,blocked?'blocked':'served');
});
