// Finite, isolated headless QA. Never connects to an existing browser or school profile.
import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import {readFileSync,mkdirSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {emptyState} from '../../src/lib/storage.ts';
import {DAILY_PREPARATION as D} from '../../data/daily-preparation.ts';
const out=process.env.OUT;if(!out)throw Error('OUT required');mkdirSync(out,{recursive:true});
const port=4286,base=`http://127.0.0.1:${port}`,server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port',String(port),'--strictPort'],{stdio:'pipe'});
const results=[],errors=[];let browser;let serverOutput='';server.stderr.on('data',b=>serverOutput+=b);server.stdout.on('data',b=>serverOutput+=b);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
try{
 for(let n=0;n<100;n++){try{if((await fetch(base)).ok)break;}catch{}await sleep(100);if(n===99)throw Error(`preview did not start: ${serverOutput}`);}
 const local=readFileSync('dist/index.html','utf8'),served=await(await fetch(base)).text();if(local!==served)throw Error('preview does not match this dist');
 browser=await chromium.launch({headless:true});
 const variants=[{lang:'en',theme:'light',width:390},{lang:'ru',theme:'dark',width:390},{lang:'en',theme:'dark',width:1280},{lang:'ru',theme:'light',width:1280}];
 for(const v of variants){
  const context=await browser.newContext({viewport:{width:v.width,height:900},colorScheme:v.theme,locale:v.lang==='ru'?'ru-RU':'en-GB'});
  await context.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());
  const state=emptyState();state.blocks['legacy:cs:kept']='2026-10-15';state.topics['fr/fr-t1']={done:'2026-10-15',rag:'green'};
  await context.addInitScript(({v,state})=>{localStorage.setItem('foma-lang',v.lang);localStorage.setItem('foma-content-lang',v.lang);localStorage.setItem('foma-portal-v1',JSON.stringify(state));localStorage.setItem('fomacs-lang',v.lang);localStorage.setItem('fomacs-theme',v.theme);const NativeDate=Date;globalThis.Date=class extends NativeDate{constructor(...a){super(...(a.length?a:['2026-10-17T12:00:00+04:00']));}static now(){return new NativeDate('2026-10-17T12:00:00+04:00').getTime();}};},{v,state});
  const page=await context.newPage();page.on('pageerror',e=>errors.push({variant:v,url:page.url(),error:e.message,stack:e.stack}));
  async function shot(name,selector){
   const file=`${v.width}-${v.lang}-${v.theme}-${name}.png`;
   if(selector)await page.locator(selector).first().screenshot({path:`${out}/${file}`});else await page.screenshot({path:`${out}/${file}`,fullPage:true});
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
   results.push({variant:v,name,file,overflow});if(overflow)throw Error(`page overflow: ${file}`);
  }
  await page.goto(`${base}/#/`);await page.locator('[data-daily-task]').first().waitFor();
  if(await page.locator('[data-daily-task]').count()!==4)throw Error('Today is not four subjects');
  if(!await page.locator('[data-budget-status]').innerText().then(t=>t.includes('240')))throw Error('daily target absent');
  for(const a of D[0].activities){
   const labels=await page.locator(`a[href="#${a.route}"]`).allTextContents();
   const expected=a.subject==='eng'?(v.lang==='ru'?'Открыть тему':'Open the topic'):(v.lang==='ru'?'Открыть практику':'Open practice');
   if(!labels.includes(expected))throw Error(`wrong action label ${a.id}: ${JSON.stringify(labels)}`);
  }
  await shot('today');
  for(const s of ['math','econ']){
   const activity=D[0].activities.find(a=>a.subject===s);await page.goto(`${base}/#${activity.route}`);await page.locator('[data-daily-set]').waitFor();
   const ids=await page.locator('.study-list > li').count();if(ids!==activity.questionIds.length)throw Error(`daily question count ${s}: ${ids}/${activity.questionIds.length}`);
   await shot(`daily-${s}`);
  }
  // Every new worksheet, both prompts and expanded worked answers, in each render variant.
  const seen=new Set();
  for(const day of D)for(const activity of day.activities.filter(a=>['math','econ'].includes(a.subject))){
   const fresh=activity.questionIds.filter(id=>id.startsWith('r06-')&&!seen.has(id));if(!fresh.length)continue;
   await page.goto(`${base}/#${activity.route}`);await page.locator('[data-daily-set]').waitFor();
   for(const id of fresh){
    const card=page.locator(`[data-question-id="${id}"]`);await card.locator('button[aria-expanded]').first().click();
    await shot(`worked-${id}`,`[data-question-id="${id}"]`);seen.add(id);
   }
  }
  if(seen.size!==33)throw Error(`new worksheet coverage ${seen.size}/33`);
  for(const [subject,id] of [['math','q-4-11-03'],['math','q-4-8-03'],['math','q-4-3-03'],['math','q-4-18-03'],['math','q-3-6-03'],['math','q-3-13-03'],['econ','econ-supply-side-policies-03'],['geo','a1-sq3']]){
   const a=D.flatMap(d=>d.activities).find(a=>a.subject===subject&&a.questionIds.includes(id));if(!a)throw Error(`fixed question unassigned ${id}`);
   await page.goto(`${base}/#${a.route}`);const card=page.locator(`[data-question-id="${id}"]`);await card.waitFor();await card.locator('button[aria-expanded]').first().click();await shot(`corrected-${id}`,`[data-question-id="${id}"]`);
  }
  for(const [subject,topic] of [['math','2-9-extended-models'],['econ','supply-side-policies']]){
   await page.goto(`${base}/#/s/${subject}/t/${topic}`);const summary=page.locator('.foma-prose h2').filter({hasText:/^(Summary|Коротко)$/});await summary.waitFor();await page.evaluate(()=>document.fonts.ready);await summary.scrollIntoViewIfNeeded();await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));await shot(`corrected-lesson-${topic}`);
  }
  for(const date of ['2026-10-30','2026-10-31','2026-11-01']){
   const a=D.find(d=>d.date===date).activities.find(a=>a.subject==='econ');await page.goto(`${base}/#${a.route}`);await page.locator('[data-daily-set]').waitFor();
   await shot(`full-paper-${date}`,'[data-daily-set]');
  }
  for(const set of ['p3-policy-set','p3-policy-set-b']){
   await page.goto(`${base}/#/s/econ/practice?set=${set}`);await page.locator('.study-q').first().waitFor();
   const ids=await page.locator('.study-q').evaluateAll(es=>es.map(e=>e.dataset.questionId));
   const expected=set==='p3-policy-set'?['p3-set-01','p3-set-02']:['p3-set-03','p3-set-04'];
   if(JSON.stringify(ids)!==JSON.stringify(expected))throw Error(`legacy deep link did not resolve ${set}: ${ids.length} questions`);
   await shot(`legacy-${set}`);
  }
  for(const sim of ['geo.core-carbon-cycle','geo.core-malthus-boserup','math.logistic-loglog-lab','math.markov-lab','math.mst-lab','math.route-lab','math.unit-circle-lab','math.tangent-optimisation-lab']){
   await page.goto(`${base}/#/sims?sim=${sim}`);await page.locator('.sim-viewer__stage svg').first().waitFor();
   if(sim==='geo.core-malthus-boserup'){
    const range=page.locator('.sim-viewer__stage input[type=range]');await range.nth(0).focus();await range.nth(0).press('Home');await range.nth(1).focus();await range.nth(1).press('Home');
    const ys=await page.locator('.sim-viewer__stage polyline').evaluateAll(es=>es.flatMap(e=>e.getAttribute('points').split(' ').map(p=>Number(p.split(',')[1]))));
    if(ys.some(y=>y<46-0.01||y>232.01))throw Error('Malthus curve outside shared scale');
   }
   await shot(sim,'.sim-viewer__stage');
   const labels=await page.locator('.sim-viewer__stage svg text').evaluateAll(es=>es.map(e=>({text:e.textContent,fill:getComputedStyle(e).fill,font:getComputedStyle(e).fontSize})));
   results.at(-1).labels=labels;
   if(sim==='geo.core-carbon-cycle') {
    const contrast=await page.locator('.sim-viewer__stage svg').evaluate(svg=>{
     const rgb=s=>(s.match(/[\d.]+/g)||[]).slice(0,3).map(Number);
     const lum=c=>c.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
     const canvas=getComputedStyle(svg.closest('.sim-viewer')).backgroundColor;
     return [...svg.querySelectorAll('text')].map(t=>{const b=t.getBBox(),x=b.x+b.width/2,y=b.y+b.height/2;
      const r=[...svg.querySelectorAll('rect')].filter(r=>{const q=r.getBBox();return (r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)&&x>=q.x&&x<=q.x+q.width&&y>=q.y&&y<=q.y+q.height;}).at(-1);
      const bg=rgb(r?getComputedStyle(r).fill:canvas),fg=rgb(getComputedStyle(t).fill),a=lum(bg),c=lum(fg);
      return {text:t.textContent,ratio:(Math.max(a,c)+.05)/(Math.min(a,c)+.05)};
     });
    });results.at(-1).contrast=contrast;
    if(contrast.some(l=>l.ratio<4.5))throw Error('Carbon label contrast below 4.5');
   }

  }
  await page.goto(`${base}/cs-lab/fundamentals.html?lang=${v.lang}`);await page.locator('#cache-svg text').first().waitFor();
  await page.evaluate(theme=>{document.documentElement.dataset.theme=theme;window.Theme.refresh();document.dispatchEvent(new Event('themechange'));},v.theme);
  for(const button of ['#cache-step','#cache-step','#fde-step','#pipe-step','#pipe-step'])await page.locator(button).click();
  await shot('cs-cache','#cache-svg');await shot('cs-fde','#fde-svg');await shot('cs-pipeline','#pipe-svg');
  await context.close();
 }
 // Clock edge fixtures render actual product copy, including selected ACC2 final boundaries.
 for(const fixture of [{date:'2026-10-17T23:50:00+04:00',room:false,available:10},{date:'2026-11-05T08:00:00+04:00',room:true,available:0},{date:'2026-11-05T09:00:00+04:00',room:false,available:0}]){
  const c=await browser.newContext({viewport:{width:390,height:900}}),p=await c.newPage();
  await p.addInitScript(({fixture,state})=>{state.settings.accessArrangements.separateRoom=fixture.room;state.settings.accessArrangements.room=fixture.room?'ACC2':'SpHal2';localStorage.setItem('foma-portal-v1',JSON.stringify(state));localStorage.setItem('foma-lang','en');const N=Date;globalThis.Date=class extends N{constructor(...a){super(...(a.length?a:[fixture.date]));}static now(){return new N(fixture.date).getTime();}};},{fixture,state:emptyState()});
  await p.goto(`${base}/#/`);await p.locator('[data-budget-status=conflict]').waitFor();const text=await p.locator('[data-budget-status]').innerText();if(!text.includes(`At most ${fixture.available} min`))throw Error('wrong rendered clock ceiling');
  const file=`clock-${fixture.date.slice(0,16).replaceAll(':','-')}-${fixture.room?'acc2':'general'}.png`;await p.locator('[data-budget-status]').screenshot({path:`${out}/${file}`});results.push({fixture,file,text});await c.close();
 }
 if(errors.length)throw Error(`${errors.length} browser exceptions`);
}finally{
 writeFileSync(`${out}/render.json`,JSON.stringify({distIndexSha256:createHash('sha256').update(readFileSync('dist/index.html')).digest('hex'),results,errors},null,2));
 await browser?.close();server.kill('SIGTERM');
}
console.log(`${results.length} render captures; ${errors.length} browser exceptions`);
