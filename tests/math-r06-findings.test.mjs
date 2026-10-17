// Finite PRE13–28 regressions: actual product cards/logic plus independent positive and counterexamples.
// Content guards check that the computed distinction is actually taught in both languages.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { stripTypeScriptTypes } from 'node:module';
import { classifyPhasePortrait as classifyPhaseMatrix } from '../src/sims/math/phase-portrait-logic.ts';
import { leastSquares, DATA, predict } from '../src/sims/math/regression-logic.ts';
import { formulas as separation } from '../content/math/u5-calculus/formulas/5-14-separation-variables.ts';
import { formulas as euler } from '../content/math/u5-calculus/formulas/5-18-euler-second-order.ts';
import { questions as optimisation } from '../content/math/u5-calculus/questions/5-7-optimisation.ts';
import spearman from '../content/math/u4-statistics/topics/4-10-spearman.meta.ts';
const read = p => fs.readFileSync(new URL('../' + p, import.meta.url), 'utf8');
const lesson = (slug,lang='en',unit='u5-calculus') => read(`content/math/${unit}/topics/${slug}.${lang}.mdx`);
const close=(a,b,tol=1e-10)=>assert.ok(Math.abs(a-b)<=tol, `${a} != ${b}`);
const eachLang=(slug,fn,unit)=>{for(const lang of ['en','ru'])fn(lesson(slug,lang,unit),lang);};
const step=(x,v,t,h,f)=>[x+h*v,v+h*f(x,v,t),t+h];
const energy=(x,v,w=2)=>w*w*x*x+v*v;
const tSource=read('src/sims/math/t-test-lab.tsx');
const tail=vm.runInNewContext(stripTypeScriptTypes(tSource.slice(tSource.indexOf('function lnGamma'),tSource.indexOf('\nconst clamp')))+'\nareaAbove');
// df=8 critical values from independent integration/bisection of the normalized t density.
const c1=1.8595480375309, c2=2.30600413520417;
test('PRE13: left/right/two-tailed critical regions agree with actual lab p-values, not a generic greater-than rule',()=>{
 for(const t of [-3,-2,0,2,3]){
  const right=t>=0?tail(t,8):1-tail(-t,8),left=1-right,two=2*tail(Math.abs(t),8);
  assert.equal(t>c1,right<.05);assert.equal(t< -c1,left<.05);assert.equal(Math.abs(t)>c2,two<.05);
 }
 close(tail(2,8),.0402581189786313,1e-7);
 assert.equal(-2>c1,false);assert.ok(tail(2,8)<.05);assert.ok(2*tail(2,8)>.05);
 eachLang('4-11-hypothesis-tests',s=>{assert.ok(s.includes('$t<-c$'));assert.ok(s.includes('$|t|>c$'));assert.ok(s.includes('$\\alpha/2$'));},'u4-statistics');
});
test('PRE14: actual separated card has reciprocal g; correct solution satisfies yprime=2xy, former factor does not',()=>{
 const f=separation.find(f=>f.id==='de-separated-form');assert.ok(f.tex.includes('\\dfrac{dy}{g(y)}'));assert.ok(!f.tex.includes('\\int g(y)'));
 for(const x of [-1,.5,2]) {const y=3*Math.exp(x*x),dy=6*x*Math.exp(x*x);close(dy,2*x*y);}
 const x=1,y=Math.sqrt(2*x*x+4),wrongDy=2*x/y;assert.ok(Math.abs(wrongDy-2*x*y)>1);
 close(0,2*1*0); // equilibrium is retained separately from division
 eachLang('5-14-separation-variables',s=>{assert.ok(!s.includes('$g(y)\\,dy = f(x)\\,dx$'));assert.ok(s.includes('$g(y)=0$'));});
});
test('PRE15: one consolidated constant describes the same antiderivative family',()=>{
 for(const [c1,c2] of [[2,7],[-3,1],[0,0]]) {const x=2,y=x*x+c2-c1;close(y+c1,x*x+c2);close(2*x,4);}
 eachLang('5-14-separation-variables',s=>{assert.ok(s.includes('$C = C_2 - C_1$'));assert.ok(!s.includes('or adding it to one side only'));assert.ok(!s.includes('или добавлять её только'));});
});
test('PRE16: negative signed integral can cross the axis and differs from total area',()=>{
 const F=x=>x*x/2-.75*x;close(F(1)-F(0),-.25);assert.ok(1-.75>0);
 close(-(F(.75)-F(0))+(F(1)-F(.75)),.3125);close(-2*(1-0),-2);
 eachLang('5-5-integration-areas',s=>assert.ok(s.includes('$|f(x)|$')));
});
test('PRE17: undamped Euler identity holds; damped steps can raise or lower energy and large steps destabilise',()=>{
 for(const [x,v] of [[1,0],[0,1],[.4,-2],[0,0]]) {const [xn,vn]=step(x,v,0,.1,(x)=>-4*x);close(energy(xn,vn),1.04*energy(x,v));}
 let [x,v]=step(0,1,0,.1,(x,v)=>-4*x-.5*v);close(energy(x,v),.9425);assert.ok(energy(x,v)<1);
 [x,v]=step(1,0,0,.1,(x,v)=>-4*x-.5*v);close(energy(x,v),4.16);assert.ok(energy(x,v)>4);
 // Update eigenvalue modulus squared: det(I+hA)=1-.5h+4h².
 assert.ok(1-.5*.1+4*.1**2<1);assert.ok(1-.5*.2+4*.2**2>1);
 eachLang('5-18-euler-second-order',s=>assert.ok(s.includes('$dE/dt=-v^2\\leq0$')));
 const f=euler.find(f=>f.id==='euler-energy-growth');assert.match(f.when.en,/undamped/);assert.match(f.when.ru,/незатухающ/);
});
test('PRE18: rank-zero plane is distinct from every nonzero rank-one line, even with the same trace/determinant',()=>{
 assert.equal(classifyPhaseMatrix(0,0,0,0),'zero-system');
 for(const a of [[0,10,0,0],[0,0,-10,0],[10,20,20,40],[-10,0,0,0]])assert.equal(classifyPhaseMatrix(...a),'degenerate');
 for(const [x,y] of [[0,0],[2,-3],[-5,9]]) {close(0*x+0*y,0);close(0*x+0*y,0);}
 assert.notEqual(10*1,0); // (0,1) is not an equilibrium of [[0,1],[0,0]]
 const s=read('src/sims/math/phase-portrait-lab.tsx');assert.ok(s.includes('classifyPhasePortrait(a10, b10, c10, d10)'));
 assert.ok(s.includes('every point in the plane'));assert.ok(s.includes('каждая точка плоскости'));
});
test('PRE19: centre and spiral classifications are disjoint, including real and repeated boundaries',()=>{
 for(const [a,want] of [[[0,-10,10,0],'centre'],[[-10,20,-20,-10],'stable-spiral'],[[10,20,-20,10],'unstable-spiral'],[[10,20,30,20],'saddle'],[[-10,0,0,-20],'stable-node'],[[10,0,0,10],'unstable-node']])assert.equal(classifyPhaseMatrix(...a),want);
 eachLang('5-17-phase-portraits',s=>{const rows=s.split('\n').filter(l=>l.startsWith('- $D > 0')&&l.includes('< 4D'));assert.equal(rows.length,2);for(const r of rows)assert.ok(r.includes('$T \\neq 0$'));});
});
test('PRE20: substitution preserves integral value, not graph coordinates or shape',()=>{
 const fx=x=>6*x*(3*x*x+1)**4,Fu=u=>u**5/5;close(Fu(4)-Fu(1),204.6);close(fx(0),0);close(1**4,1);assert.notEqual(1-0,4-1);
 eachLang('5-11-integration-techniques',s=>{assert.ok(s.includes('$du=6x\\,dx$'));assert.ok(!s.includes('region does not change'));assert.ok(!s.includes('область не меняется'));});
});
test('PRE21: positive, negative and reversing velocities distinguish displacement, magnitude and path length',()=>{
 close(1,Math.abs(1));assert.notEqual(-1,Math.abs(-1));close(Math.abs(-1),1);
 const displacement=-1+1,distance=1+1;assert.notEqual(distance,Math.abs(displacement));
 eachLang('5-13-kinematics-calculus',s=>assert.ok(s.includes('$v\\geq0$')));
});
test('PRE22: time origin is retained for a nonautonomous second-order equation',()=>{
 let [x,v,t]=[1,0,5];for(let i=0;i<2;i++)[x,v,t]=step(x,v,t,.1,(x,v,t)=>t);
 close(t,5.2);close(v,1.01);close(x,1.05);assert.notEqual(v,.01); // wrong t0=0 changes acceleration
 close((5.2-5)/.1,2);const termSource=read('content/math/u5-calculus/terms/5-18-euler-second-order.ts');assert.equal(termSource.split('$t_n = t_0 + nh$').length-1,2);
 eachLang('5-18-euler-second-order',s=>assert.ok(s.includes('$t_n = t_0 + nh$')));
});
test('PRE23: continuous optimum retained explicitly; integer optimum is a different feasible problem',()=>{
 const q=optimisation.find(q=>q.id==='q-5-7-02'),A=x=>.5*x-12+150/x;
 close(A(Math.sqrt(300)),Math.sqrt(300)-12);assert.ok(A(17)<A(18));assert.ok(A(Math.sqrt(300))<A(17));
 assert.equal(q.answer,'17.3; 5.32');assert.match(q.prompt.en,/divisible.*real variable.*continuous/);assert.match(q.prompt.ru,/делимой.*вещественная.*непрерывной/);
});
test('PRE24: actual regression minimises squared residuals; signed residual sum is an invalid objective',()=>{
 const {x,y}=DATA.plants,c=leastSquares('linear',x,y),r=y.map((v,i)=>v-predict('linear',c,x[i]));
 close(r.reduce((s,v)=>s+v,0),0);close(r.reduce((s,v)=>s+v*v,0),2.7);
 const shifted=y.map((v,i)=>v-predict('linear',[c[0],c[1]+10],x[i]));assert.ok(shifted.reduce((s,v)=>s+v,0)<0);assert.ok(shifted.reduce((s,v)=>s+v*v,0)>2.7);
 assert.match(read('src/sims/math/regression-lab.tsx'),/минимизирует сумму квадратов остатков/);
});
test('PRE25: advice allows valid alternative justifications without claiming universal marks',()=>{
 // A=60x-2x²: Asecond=-4 proves local max at15; concavity on domain proves global max.
 close(60-4*15,0);assert.ok(-4<0);close(60*15-2*15**2,450);
 // Positive second derivative proves minimum for continuous cost on x>=1.
 assert.ok(300/Math.sqrt(300)**3>0);
 eachLang('5-7-optimisation',s=>{assert.ok(!s.includes('mark depends on a sign argument'));assert.ok(!s.includes('Балл за обоснование зависит'));});
 eachLang('5-4-tangents-normals',s=>{assert.ok(!s.includes('cannot earn the final mark'));assert.ok(!s.includes('не получит последний балл'));});
});
const pearson=(x,y)=>{const mx=x.reduce((s,v)=>s+v)/x.length,my=y.reduce((s,v)=>s+v)/y.length;return x.reduce((s,v,i)=>s+(v-mx)*(y[i]-my),0)/Math.sqrt(x.reduce((s,v)=>s+(v-mx)**2,0)*y.reduce((s,v)=>s+(v-my)**2,0));};
test('PRE26: positive k relaxes; zero/negative k do not, except the equilibrium',()=>{
 const y=(t,k,y0=90,L=20)=>L+(y0-L)*Math.exp(-k*t);
 close(y(1000,.1),20);close(y(1000,0),90);assert.ok(y(1,-.1)>90);close(y(10,-.1,20),20);
 const f=separation.find(f=>f.id==='de-relaxation-solution');for(const l of ['en','ru'])assert.ok(f.meaning[l].includes('k > 0'));
});
test('PRE27: collinear distant point leaves both correlations at1; magnitude/rank changes need dataset context',()=>{
 close(pearson([1,2,3,100],[1,2,3,100]),1);
 close(pearson([1,2,3,4],[1,2,3,4]),1);assert.ok(pearson([1,2,3,4],[1,2,3,100])<.9); // unchanged ranks, changed magnitudes
 assert.match(spearman.outcomes[2].en,/given dataset/);assert.match(spearman.outcomes[2].ru,/данном наборе/);
});
test('PRE28: smooth solution families do not cross, but nonunique real-cube-root example does',()=>{
 for(const x of [-2,-1,0,1,2]){close(3*x*x,3*Math.cbrt(x**3)**2);close(0,3*Math.cbrt(0)**2);}
 assert.ok((-1)**3<0 && 1**3>0); // x³ crosses y=0 at origin, both solve yprime=3*cbrt(y)²
 // yprime=x-y has family x-1+C exp(-x); distinct constants cannot give same value.
 for(const x of [-2,0,2])assert.notEqual(x-1+Math.exp(-x),x-1+2*Math.exp(-x));
 eachLang('5-15-slope-fields',s=>assert.ok(s.includes('$\\partial f/\\partial y$')));
});
