// Finite author regressions for M123-01–09; source/numeric checks, not browser acceptance.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {stripTypeScriptTypes} from 'node:module';
import {formulas as walkFormulas} from '../content/math/u3-geometry/formulas/3-15-adjacency-walks.ts';
import {formulas as motionFormulas} from '../content/math/u3-geometry/formulas/3-12-vector-kinematics.ts';
import {questions as cafeQuestions} from '../content/math/u1-number-algebra/questions/1-14-matrices.ts';
import {questions as walkQuestions} from '../content/math/u3-geometry/questions/3-15-adjacency-walks.ts';
import voronoi from '../content/math/u3-geometry/topics/3-6-voronoi.meta.ts';
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const topic=(id,l='en')=>read(`content/math/u3-geometry/topics/${id}.${l}.mdx`);
const close=(a,b,tol=1e-12)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);
const mul=(A,B)=>A.map(row=>B[0].map((_,j)=>row.reduce((s,a,k)=>s+a*B[k][j],0)));
const trans=A=>A[0].map((_,j)=>A.map(row=>row[j]));
const rowTransition=A=>A.map(row=>{const d=row.reduce((s,v)=>s+v,0);assert.ok(d>0);return row.map(v=>v/d);});
const power=(A,n)=>{let p=A.map((row,i)=>row.map((_,j)=>+(i===j)));for(let k=0;k<n;k++)p=mul(p,A);return p;};
const recurse=(A,start,end,n)=>n===0?+(start===end):A[start].reduce((s,count,j)=>s+count/A[start].reduce((a,b)=>a+b,0)*recurse(A,j,end,n-1),0);
test('M123-01: row state and transposed column state conserve probability; wrong orientation fails on unequal outdegrees',()=>{
 const A=[[0,1,1],[1,0,0],[1,0,0]],R=rowTransition(A),s0=[[1],[0],[0]];
 assert.deepEqual(R,[[0,.5,.5],[1,0,0],[1,0,0]]);
 assert.deepEqual(mul([[1,0,0]],R),[[0,.5,.5]]);assert.deepEqual(mul(trans(R),s0),[[0],[.5],[.5]]);
 assert.equal(mul(R,s0).flat().reduce((s,v)=>s+v),2);
 for(let n=0;n<=4;n++)for(let i=0;i<3;i++)for(let j=0;j<3;j++)close(power(R,n)[i][j],recurse(A,i,j,n));
 assert.match(walkFormulas.find(f=>f.id==='walk-transition-matrix').tex,/r_\{ij\}.*a_\{ij\}.*a_\{il\}/);
 const f=walkFormulas.find(f=>f.id==='walk-n-step-probability');assert.ok(f.tex.includes('\\left(R^{n}\\right)_{ij}'));
 for(const lang of ['en','ru']){assert.ok(f.when[lang].includes('$T=R^{\\mathsf T}$'));assert.ok(topic('3-15-adjacency-walks',lang).includes('$q_n=q_0R^n$'));}
 const term=read('content/math/u3-geometry/terms/3-15-adjacency-walks.ts');assert.ok(term.includes('row transition matrix $R$'));assert.ok(!term.includes('Divide by the column sum'));
});
test('M123-01: equal outgoing arcs need not give equally likely distinct destinations; existing drone numerics retained',()=>{
 const A=[[0,2,1],[1,0,0],[1,0,0]],R=rowTransition(A);close(R[0][1],2/3);close(R[0][2],1/3);assert.notEqual(R[0][1],.5);
 const drone=[[0,1,1,0,0],[0,0,0,1,0],[0,1,0,0,1],[1,0,0,0,1],[1,0,0,0,0]],D=rowTransition(drone);
 close(power(D,2)[0][4],.25);close(power(D,3)[0][0],.5);close(recurse(drone,0,4,2),.25);
 assert.equal(walkQuestions.find(q=>q.id==='q-3-15-03').answer,'11; 1; 4; 0.250; 0.500');
});
test('M123-02: sign of first term reverses increase/decrease; negative ratio still alternates',()=>{
 const sequence=(u,r)=>[u,u*r,u*r*r];assert.deepEqual(sequence(-2,2),[-2,-4,-8]);assert.deepEqual(sequence(-2,.5),[-2,-1,-.5]);assert.deepEqual(sequence(2,2),[2,4,8]);assert.deepEqual(sequence(2,-2),[2,-4,8]);
 const s=read('content/math/u1-number-algebra/topics/1-3-geometric-sequences.ru.mdx').split('## Коротко')[1];assert.ok(s.includes('$u_1>0$'));assert.ok(s.includes('$u_1<0$'));assert.ok(s.includes('$r<0$'));
});
test('M123-03: actual lab image maps zero matrix to a point and rank-one matrix to a segment',()=>{
 const source=read('src/sims/math/matrix-transform-lab.tsx');const match=source.match(/const image: \[number, number\]\[\] = ([^;]+);/);assert.ok(match);
 const image=(a,b,c,d)=>Array.from(vm.runInNewContext(match[1],{a,b,c,d}),p=>Array.from(p));
 assert.deepEqual(image(0,0,0,0),[[0,0],[0,0],[0,0],[0,0]]);
 assert.deepEqual(image(1,2,0,0),[[0,0],[1,0],[3,0],[2,0]]);
 assert.notDeepEqual(image(1,0,0,1),image(0,0,0,0));
 for(const l of ['en','ru']){const s=topic('3-9-matrix-transformations',l);assert.match(s,l==='en'?/point \$O\$/u:/точк[ау] \$O\$/u);}
});
const spanningCount=(n,edges)=>{let count=0;for(let mask=0;mask<2**edges.length;mask++){if(mask.toString(2).replaceAll('0','').length!==n-1)continue;const seen=new Set([0]);let changed=true;while(changed){changed=false;for(let k=0;k<edges.length;k++)if(mask&(1<<k)){const [a,b]=edges[k];if(seen.has(a)!==seen.has(b)){seen.add(a);seen.add(b);changed=true;}}}if(seen.size===n)count++;}return count;};
test('M123-04: connected triangle has spanning trees, isolated vertices do not',()=>{
 assert.equal(spanningCount(3,[[0,1],[1,2],[0,2]]),3);assert.equal(spanningCount(2,[]),0);assert.equal(spanningCount(1,[]),1);
 assert.ok(topic('3-16-graph-algorithms','ru').includes('Каждый связный неориентированный граф'));
});
test('M123-05: cafe contraction matches drink index for RO but day/ingredient mismatch invalidates intended OR interpretation',()=>{
 const R=[[1,2],[3,1]],O=[[4,1],[2,3]];assert.deepEqual(mul(R,O),[[8,7],[14,6]]);assert.deepEqual(mul(O,R),[[7,9],[11,7]]);
 const compatible=(leftCols,rightRows)=>JSON.stringify(leftCols)===JSON.stringify(rightRows);
 assert.ok(compatible(['L','F'],['L','F']));assert.ok(!compatible(['Monday','Tuesday'],['espresso','milk']));
 // A drink-to-drink substitution has a legitimate meaning despite identical outer quantity labels.
 assert.deepEqual(mul([[1,0],[0,1]],O),O);
 const q=cafeQuestions.find(q=>q.id==='q-1-14-03');assert.ok(q);assert.match(q.markscheme.en,/day columns.*ingredient rows/);assert.match(q.markscheme.ru,/столбцы дней.*строками ингредиентов/);assert.equal(q.answer,'-5; -0.2; 0.4; 0.6; -0.2; 2; 3; 8; 7; 14; 6');
});
test('M123-06: loops contribute two incident ends; directed loop contributes one in and one out',()=>{
 const degree=(n,edges)=>{const d=Array(n).fill(0);for(const [a,b]of edges){d[a]++;d[b]++;}return d;};
 assert.deepEqual(degree(1,[[0,0]]),[2]);assert.deepEqual(degree(2,[[0,0],[0,1],[1,1]]),[3,3]);assert.equal(degree(2,[[0,0],[0,1],[1,1]]).reduce((s,x)=>s+x),2*3);
 const loop=[[0,0]];assert.equal(loop.filter(e=>e[0]===0).length,1);assert.equal(loop.filter(e=>e[1]===0).length,1);
 for(const lang of ['en','ru']){const s=topic('3-14-graph-basics',lang);assert.match(s,lang==='en'?/loop.*contributes 2/:/петля даёт 2/);}
 const term=read('content/math/u3-geometry/terms/3-14-graph-basics.ts');assert.match(term,/loop.*contributes 2/);assert.match(term,/петля даёт ей 2/);
});
test('M123-07: actual lab stationary path and general nonzero-velocity time domains agree with corrected prose',()=>{
 const source=read('src/sims/math/vector-lab.tsx');const part=source.slice(source.indexOf('const at ='),source.indexOf('\n  const path ='));assert.ok(part);
 const at=(ax,ay,bx,by,variable)=>vm.runInNewContext(stripTypeScriptTypes(part)+'\nat',{ax,ay,bx,by,variable});
 const stationary=at(0,0,2,-1,false);for(const t of [0,1,2,4])assert.deepEqual(JSON.parse(JSON.stringify(stationary(t))),{x:0,y:0});
 const moving=at(2,-1,0,0,false);assert.deepEqual(JSON.parse(JSON.stringify(moving(4))),{x:8,y:-4});
 const r0=[4,6],v=[0,0];for(const t of [-2,0,4])assert.deepEqual(r0.map((x,i)=>x+t*v[i]),r0);
 const f=motionFormulas.find(f=>f.id==='kinematics-constant-velocity');assert.match(f.meaning.en,/point r0.*segment.*ray.*line/);assert.match(f.meaning.ru,/точка r0.*отрезок.*луч.*прямая/);
 for(const l of ['en','ru'])assert.ok(topic('3-12-vector-kinematics',l).includes('$\\mathbf{a}=\\mathbf{0}$'));
});
test('M123-08: an allowed boundary corner can beat an internal Voronoi vertex',()=>{
 const sites=[[2,2],[8,2],[5,8]],nearest=p=>Math.min(...sites.map(q=>Math.hypot(p[0]-q[0],p[1]-q[1])));
 close(nearest([5,4.25]),3.75);close(nearest([0,10]),Math.sqrt(29));assert.ok(nearest([0,10])>nearest([5,4.25]));
 const only=[[5,4.25]];assert.deepEqual(only.reduce((best,p)=>nearest(p)>nearest(best)?p:best),[5,4.25]);
 assert.match(voronoi.outcomes[2].en,/permitted.*nearest site.*boundary/);assert.match(voronoi.outcomes[2].ru,/допустимые.*ближайшего.*границе/);
});
test('M123-09: affected advice distinguishes Find working from direct Write down and task-specific bounds/marks',()=>{
 for(const id of ['3-9-matrix-transformations','3-14-graph-basics','3-15-adjacency-walks'])for(const l of ['en','ru']){
  const s=topic(id,l);assert.match(s,l==='en'?/working need not be shown/:/выкладки показывать не требуется/);assert.ok(!s.includes('Find and Write down questions give marks'));assert.ok(!s.includes('Задания Find и Write down дают баллы'));
 }
 assert.match(topic('3-16-graph-algorithms'),/bound or bounds actually requested/);assert.match(topic('3-16-graph-algorithms','ru'),/оценку или те оценки, которые спрашивают/);
 assert.ok(!topic('3-9-matrix-transformations').includes('A typical split is M1'));
});
