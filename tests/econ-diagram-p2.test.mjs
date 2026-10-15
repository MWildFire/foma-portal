import test,{before,after} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'vite';
let server;
before(async()=>{server=await createServer({root:process.cwd(),appType:'custom',server:{middlewareMode:true,hmr:false,ws:false,watch:null},optimizeDeps:{noDiscovery:true,include:[]},logLevel:'silent'});});
after(async()=>await server?.close());
const steps=async id=>(await server.ssrLoadModule(`/src/sims/econ/${id}.tsx`)).default({lang:'en'}).props.steps;
test('public-good sum remains the nonnegative vertical sum beyond the first demand intercept',async()=>{
 const rows=await steps('public-goods');const sum=rows[1].graph.curves.find(c=>c.id==='sum');
 assert.equal(sum.points.at(-1)[0],16);
 for(const [q,p] of sum.points)assert.ok(Math.abs(p-(Math.max(12-q,0)+Math.max(8-.5*q,0)))<1e-9);
});
test('surplus area boundaries keep a price guide and total is displayed',async()=>{
 const rows=await steps('surplus');
 for(const row of rows)assert.ok(row.graph.guides?.some(g=>g.from[0]===0&&g.from[1]===6&&g.to[0]===12&&g.to[1]===6));
 assert.ok(rows.at(-1).graph.marks.some(m=>m.dot===false&&m.label?.en==='TS 72'));
});
test('Phillips natural unemployment is readable on the axis',async()=>{
 for(const row of await steps('phillips-sr'))assert.ok(row.graph.xTicks.some(t=>t.value===5&&t.label.en.includes('NRU')));
});
test('XED shifts preserve slope and correct signs at a common own price',async()=>{
 const rows=await steps('xed');assert.equal(rows.length,4);
 const curves=new Map(rows.flatMap(s=>s.graph.curves).map(c=>[c.id,c]));
 const qAt=(curve,p)=>{const [a,b]=[curve.points[0],curve.points.at(-1)];return a[0]+(p-a[1])*(b[0]-a[0])/(b[1]-a[1]);};
 assert.equal(qAt(curves.get('d1'),6),12);
 assert.equal(qAt(curves.get('d2'),6),18);
 assert.equal(qAt(curves.get('d3'),6),6);
 for(const c of curves.values()){const [a,b]=[c.points[0],c.points.at(-1)];assert.equal((b[1]-a[1])/(b[0]-a[0]),-.5);}
 assert.ok(rows[1].graph.curves.some(c=>c.id==='d2'));
 assert.ok(rows[2].graph.curves.some(c=>c.id==='d3'));
});
test('CPR mock route stops at welfare loss; optional extension is closed by default',async()=>{
 const view=(await server.ssrLoadModule('/src/sims/econ/cpr.tsx')).default({lang:'en'});
 const children=view.props.children;
 assert.ok(Array.isArray(children),'main and optional section are separate');
 assert.equal(children[0].props.steps.length,4);
 assert.equal(children[1].type,'details');assert.notEqual(children[1].props.open,true);
 const extra=children[1].props.children.find(c=>c?.props?.steps);
 assert.equal(extra.props.steps.length,2);
});
test('PPC shows an unattainable point beyond the current frontier',async()=>{
 const rows=await steps('ppc');const marks=rows.flatMap(s=>s.graph.marks??[]);
 const x=marks.find(m=>m.id==='X');assert.ok(x);assert.ok(x.at[0]**2+x.at[1]**2>100**2);
 assert.ok(rows.some(s=>/unattainable/.test(s.text.en)));
});
test('Lorenz quintiles distinguish individual shares from cumulative plotting values',async()=>{
 const rows=await steps('lorenz');const row=rows.find(s=>/quintile/i.test(s.title.en));assert.ok(row);
 const points=row.graph.marks.filter(m=>/^q[1-5]$/.test(m.id)).map(m=>m.at);
 assert.deepEqual(points,[[20,4],[40,16],[60,36],[80,64],[100,100]]);
 const shares=points.map((p,i)=>p[1]-(points[i-1]?.[1]??0));assert.deepEqual(shares,[4,12,20,28,36]);
 assert.ok(row.text.en.includes('4, 12, 20, 28, 36'));
});
test('externality policy wedges and output-gap price levels are explicit',async()=>{
 for(const [id,label] of [['externality-negative-consumption','t = 3'],['externality-positive-production','s = 3']]){
  const last=(await steps(id)).at(-1);assert.ok(last.graph.guides.some(g=>g.label?.en===label));
 }
 const pc=(await steps('externality-positive-consumption')).at(-1);assert.ok(pc.graph.yTicks.some(t=>t.value===3));
 for(const row of await steps('output-gap'))assert.ok(row.graph.yTicks?.some(t=>t.value===6));
});
test('asymmetric-information equilibria have guides to both axes and Phillips NRU has space',async()=>{
 const rows=await steps('asymmetric-info');
 for(const [index,q,p] of [[0,8,10],[3,5,9]]){
  const guides=rows[index].graph.guides;
  assert.ok(guides.some(g=>g.from[0]===q&&g.from[1]===0&&g.to[0]===q&&g.to[1]===p));
  assert.ok(guides.some(g=>g.from[0]===0&&g.from[1]===p&&g.to[0]===q&&g.to[1]===p));
 }
 for(const row of await steps('phillips-lr'))assert.ok(row.graph.xTicks.every(t=>Math.abs(t.value-5)>1||t.value===5));
});
