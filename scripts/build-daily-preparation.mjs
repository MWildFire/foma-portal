// Finite original study sessions. Public content only; school source locators live in private evidence.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { questionInMock } from '../src/lib/mock-scope.ts';
const walk = dir => readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${dir}/${e.name}`):[`${dir}/${e.name}`]);
const groups = {
 math: [
  ['4-4-correlation-regression','4-10-spearman'],
  ['4-13-nonlinear-regression','4-18-hypothesis-errors'],
  ['4-11-hypothesis-tests','4-1-sampling'],
  ['4-7-discrete-random-variables','4-14-linear-transformations'],
  ['4-8-binomial','4-17-poisson'],
  ['4-9-normal','4-15-normal-sums-clt','4-16-confidence-intervals'],
  ['4-2-presenting-data','4-3-central-dispersion','4-12-survey-design'],
  ['2-2-functions-inverse','2-8-transformations','2-9-extended-models'],
  ['1-4-financial-sequences','1-7-amortisation-annuities','2-10-log-linearisation'],
  ['3-2-triangles-rules','3-4-arcs-sectors','1-13-complex-polar-exponential'],
  ['3-10-vectors','3-13-scalar-vector-product','3-6-voronoi'],
 ],
 econ: [
  ['income-and-cross-elasticity','elasticity-of-supply'],
  ['public-goods','asymmetric-information'],
  ['demand','supply','competitive-market-equilibrium'],
  ['price-elasticity-of-demand','government-taxes-subsidies-price-controls'],
  ['externalities','common-pool-resources'],
  ['measuring-economic-activity','ad-as-model-and-business-cycle'],
  ['macroeconomic-objectives','inequality-and-poverty'],
  ['monetary-policy','multiplier'],
  ['fiscal-policy','supply-side-policies'],
  ['ad-as-model-and-business-cycle','macroeconomic-objectives'],
  ['inequality-and-poverty','government-taxes-subsidies-price-controls'],
 ],
 geo: [
  ['core-1-1-population-development','core-1-2-changing-populations'],
  ['core-1-3-challenges-opportunities'],
  ['core-2-1-causes-climate-change'],
  ['core-2-2-consequences-climate-change','core-2-3-responding-climate-change'],
  ['core-3-1-consumption-trends','core-3-2-impacts-consumption','core-3-3-resource-stewardship'],
  ['a1-drainage-basins'],['a2-flooding','a4-water-management'],['a3-water-scarcity'],
  ['g1-urban-variety','g2-urban-change'],['g3-urban-stress','g4-sustainable-cities'],
  ['a-essay-option','g-essay-option','core-essay-2'],
 ],
 eng: [
  ['p1-understanding','p1-focus'],['p1-analysis','p1-language'],['p1-method'],
  ['w-much-ado','form-drama'],['w-into-the-wild','form-nonfiction'],
  ['p2-comparison','p2-question'],['p2-planning','p2-organisation'],
  ['form-poetry','techniques-general'],['concept-perspective','concept-identity'],
  ['p1-analysis','p1-focus'],['p2-language','p2-concepts'],
 ],
};
const subjects=['econ','math','geo','eng'];
const inventories={};
for(const s of subjects){
 const files=walk(`content/${s}`);
 const topics=(await Promise.all(files.filter(f=>f.endsWith('.meta.ts')).map(async f=>(await import(pathToFileURL(resolve(f)))).default))).filter(t=>t?.subject===s);
 const questions=(await Promise.all(files.filter(f=>f.includes('/questions/')&&f.endsWith('.ts')).map(async f=>(await import(pathToFileURL(resolve(f)))).questions??[]))).flat();
 inventories[s]={topics,questions};
}
// Resolve renamed IDs explicitly, never fabricate a route.
for(const s of subjects)for(const group of groups[s])for(const id of group)if(!inventories[s].topics.some(t=>t.id===id))throw Error(`Missing topic ${s}/${id}`);

const exams=JSON.parse(readFileSync('data/exams.json','utf8'));
const mathPlan=[
 ['q-2-2-02','q-1-2-03','q-2-1-03','q-2-2-03','q-2-3-03','q-2-7-03','r06-functions','q-3-5-03'],
 ['q-2-4-03','q-2-5-03','q-2-6-03','q-2-8-03','q-2-9-03','q-2-10-03','r06-piecewise','q-3-6-03'],
 ['q-1-3-03','q-1-4-03','q-1-5-03','q-1-6-03','q-1-7-03','q-1-7-01','r06-sigma','q-3-10-03','r06-foundations'],
 ['q-1-8-03','q-1-9-03','q-1-10-03','q-1-11-03','q-4-1-03','q-4-2-03','q-3-11-03'],
 ['q-4-3-03','q-4-4-03','q-4-13-03','q-4-13-01','q-4-13-02','q-4-3-02','r06-data-design','q-3-1-03','q-3-13-03','r06-pyramid'],
 ['q-4-5-03','q-4-6-03','q-4-7-03','q-4-8-03','q-4-17-03','r06-probability-diagrams'],
 ['q-4-9-03','q-4-10-03','q-4-14-03','q-4-14-02','q-4-14-01','q-4-15-03','q-4-16-03','r06-normal-poisson'],
 ['q-4-11-03','q-4-11-01','q-4-12-03','q-4-12-01','q-4-18-01','q-4-18-02','q-4-18-03','r06-binomial-two-means'],
 ['q-1-12-03','q-1-13-01','q-1-13-02','q-1-13-03','q-3-2-03','q-3-3-03','q-3-4-03','q-3-8-03','r06-unit-circle'],
 ['q-3-1-03','q-3-13-03'],['q-4-9-03','q-4-18-03'],['q-2-8-03','q-1-7-03'],['q-4-13-03','q-4-16-03'],
 ['r06-functions','r06-piecewise'],['r06-probability-diagrams','r06-normal-poisson'],['r06-binomial-two-means','q-4-18-02'],
 ['q-4-13-03','r06-data-design'],['q-3-6-03','r06-pyramid'],['q-1-12-03','r06-unit-circle'],['q-1-13-03','q-1-7-03'],
];
const econPlan=Array.from({length:11},(_,n)=>[n*2+1,n*2+2].map(x=>`r06-econ-${String(x).padStart(2,'0')}`));
econPlan.push(['r06-econ-23'],['p1-essay-10'],['p1-essay-10','p1-essay-11'],['p2-set-03'],['p3-mock-01'],['r06-econ-23'],['r06-econ-22','econ-supply-side-policies-03'],['r06-econ-16'],['r06-econ-19']);
const geoPlan=[['a1-eq1'], ['core-1-1-a5', 'core-1-2-a5', 'core-1-3-a1'], ['core-2-1-a3', 'core-2-1-a4', 'core-2-2-a5', 'core-2-3-a3'], ['core-3-1-a3', 'core-3-2-a5', 'core-3-3-a5'], ['g3-eq1'], ['a2-sq1', 'a1-sq3'], ['g1-sq1', 'g2-sq1'], ['a3-sq1', 'a4-sq1'], ['g4-sq1'], ['core-essay-1-1', 'core-essay-2-1', 'core-3-3-b1'], ['a2-eq1', 'g4-eq1'], ['core-essay-1-2', 'core-essay-2-2'], ['core-1-3-b1', 'core-2-2-b1', 'core-3-1-b1'], ['a3-eq1'], ['g2-eq1'], ['core-3-3-b1', 'core-3-1-b1', 'core-2-2-b1'], ['a4-eq2', 'a4-sq2'], ['g3-eq2', 'g3-sq2'], ['core-essay-3-1', 'core-essay-3-3'], ['g4-eq2', 'g4-sq2']];
// Four focused Core2/3 source-grounded tasks before the27October core sitting.
geoPlan[2].push('core-2-3-a6');
geoPlan[3].push('core-3-1-a6');
geoPlan[6].push('core-3-2-a6');
geoPlan[8].push('core-3-3-a6');
// Resolve actual IDs below rather than silently dropping unavailable work.
const econBudgets=[46,46,51,54,46,50,50,50,52,56,56,60,40,95,125,80,60,40,40,40];
const geoBudgets=[40,30,35,30,40,40,40,45,25,69,69,50,70,45,40,50,53,53,50,53];
const mathBudgets=mathPlan.map((ids,n)=>n<9?ids.reduce((v,id)=>v+inventories.math.questions.find(q=>q.id===id).minutes,0)+25:[45,45,40,45,40,35,40,40,40,40,40][n-9]);
for(const [n,delta] of [[2,6],[3,8],[6,10],[8,6]]){geoBudgets[n]+=delta;mathBudgets[n]-=delta;}
const L=(en,ru)=>({en,ru});
const correction=L('Compare every subpart with its worked solution only after finishing. Award marks for shown reasoning; correct diagrams, units and assumptions. Redo the weakest part with the solution covered and record the cause of the error.','Только после ответа сравни все подпункты с решением. Баллы ставь за показанный ход; исправь диаграммы, единицы, допущения. Закрой решение, заново выполни слабый подпункт и запиши причину ошибки.');
const days=[];
for(let n=0;n<20;n++){
 const date=new Date(Date.UTC(2026,9,17+n)).toISOString().slice(0,10), activities=[];
 const budgets={econ:econBudgets[n],math:mathBudgets[n],geo:geoBudgets[n]};budgets.eng=240-budgets.econ-budgets.math-budgets.geo;
 for(const subject of subjects){
  const writing=subject==='eng';
  const ids=writing?[]:subject==='math'?mathPlan[n]:subject==='econ'?econPlan[n]:geoPlan[n];
  const {questions,topics}=inventories[subject];
  const chosen=ids.map(id=>{const q=questions.find(q=>q.id===id);if(!q)throw Error(`Missing ${subject} question ${id}`);if(!questionInMock(q,topics))throw Error(`Out of scope ${id}`);return q;});
  const related=writing?[...groups.eng[n%groups.eng.length]]:[...new Set(chosen.flatMap(q=>q.topicIds))];
  const ts=related.map(id=>{const t=topics.find(t=>t.id===id);if(!t)throw Error(`Missing ${subject} topic ${id}`);return t;});
  const minutes=budgets[subject], id=`r06-${date}-${subject}`;
  let workload=chosen.reduce((v,q)=>v+q.minutes,0), timedMinutes;
  let title=L(ts.map(t=>t.title.en).join(' · '),ts.map(t=>t.title.ru).join(' · '));
  if(subject==='math'&&n<9)title=[L('Functions,arithmetic and perpendicular bisectors','Функции,арифметическая прогрессия,серединные перпендикуляры'),L('Models,transformations,piecewise rules and Voronoi','Модели,преобразования,кусочные правила,Вороной'),L('Geometric series,finance,bounds and vector foundations','Геометрические ряды,финансы,границы,основы векторов'),L('Equations,logs,sampling and cumulative data','Уравнения,логарифмы,выборка,накопленные частоты'),L('Data,regression,compound solids and vector products','Данные,регрессия,составные тела,векторное произведение'),L('Probability diagrams,random variables and distributions','Вероятностные диаграммы,случайные величины,распределения'),L('Normal models,Spearman,linear combinations and intervals','Нормальные модели,Спирмен,линейные комбинации,интервалы'),L('Hypothesis tests,critical regions and error probabilities','Гипотезы,критические области,вероятности ошибок'),L('Trigonometry,complex numbers and periodic models','Тригонометрия,комплексные числа,периодические модели')][n];
  let practice=L(`Complete ${ids.join(', ')}: every subpart, labelled diagram and written justification. Work in the listed order; these are original skill worksheets, not a full paper.`, `Выполни ${ids.join(', ')}: все подпункты, подписанные диаграммы и обоснования. Порядок указан; это авторские задания по навыкам, а не полный вариант.`);
  let reading=Math.min(10,Math.max(3,Math.floor((minutes-workload)/3))), review=minutes-workload-reading;
  let stages;
  if(subject==='econ'&&n===12){ // Planning only; do not pretend that 75-minute response fits into 40 minutes.
   workload=25;reading=5;review=10;
   practice=L('Open p1-essay-10. Plan BOTH its 10-mark explanation and 15-mark evaluation: two causal chains, labelled AD/AS diagrams, counterarguments, conditions and a final judgement. Write an introduction and one complete evaluation paragraph. This is a planning session; the full response is scheduled tomorrow.','Открой p1-essay-10. Спланируй ОБЕ части: объяснение на10 и оценку на15. Две причинные цепочки, AD/AS, контраргументы, условия, итог. Напиши введение и полный оценочный абзац. Это планирование; полный ответ назначен завтра.');
  }
  if(subject==='econ'&&n===13){workload=75;reading=5;review=15;timedMinutes=75;title=L('Macro Paper 1 · full 10 + 15 response','Макроэкономика Paper 1 · полный ответ10+15');practice=L('Read both p1-essay-10 and p1-essay-11, then choose ONE whole question. In 75 writing minutes answer its connected (a)10 and (b)15 parts in full English prose with diagrams and evaluation. Do not answer both alternatives. Use 5 minutes to read/choose before writing and 15 afterwards to mark against BOTH part criteria.','Прочитай p1-essay-10 и p1-essay-11, выбери ОДИН полный вопрос. За75 минут письма ответь на связанные (a)10 и(b)15 по-английски с диаграммами/оценкой. Оба альтернативных вопроса не выполняй. До письма5 минут чтения/выбора,после15 минут проверки обеих частей.');}
  if(subject==='econ'&&n===14){workload=105;reading=0;review=20;timedMinutes=105;title=L('Paper 2 · connected compulsory 40 marks','Paper 2 · связанный обязательный ответ40 баллов');practice=L('Complete ALL of p2-set-03, one connected compulsory data-response, including its 15-mark final (g). Read the complete stimulus and all seven parts inside the 105-minute paper clock; allocate about35–40 minutes to(g). Write full calculations, diagrams and a context-based judgement, then spend20 separate minutes marking/correcting.','Выполни ВСЕ p2-set-03: один связанный обязательный data-response, включая последний(g) на15 баллов. Прочитай весь стимул/семь частей внутри105 минут;около35–40 минут оставь на(g). Полные расчёты,диаграммы,вывод по контексту;затем отдельно20 минут проверки.');}
  if(subject==='econ'&&n===15){workload=60;reading=0;review=20;timedMinutes=60;title=L('Paper 3 · 32 marks with policy recommendation','Paper 3 · 32 балла с рекомендацией');practice=L('Complete p3-mock-01: compulsory(a)22 and(b)10 using the Maravel housing stimulus/table. Within the60-minute clock reserve20–25 minutes for(b): recommend A/B/C with at least two data points,stakeholders,budget,timing,trade-offs and conditional judgement. Read within the clock;mark/correct for20 minutes afterwards.','Выполни p3-mock-01: обязательные(a)22 и(b)10 по условию/таблице жилья Маравела. Внутри60 минут оставь20–25 на(b):выбор A/B/C,не менее двух чисел,участники,бюджет,сроки,компромиссы,условный вывод. Чтение внутри таймера;потом20 минут проверки.');}
  if(writing){
   reading=Math.max(5,Math.floor(minutes*.2));review=Math.max(5,Math.floor(minutes*.2));workload=minutes-reading-review;
   // English-only cycle: each lesson has an explicit focus and lawful supplied material.
   const cycle=n%groups.eng.length;
   const pairs={5:['p1-dickinson-fly','p1-hardy-thrush'],6:['p1-joyce-araby','p1-mansfield-garden'],10:['p1-dickinson-fly','p1-hardy-thrush']};
   const singles={0:'p1-dickinson-fly',1:'p1-hardy-thrush',2:'p1-wilde-earnest',4:'p1-douglass-fourth',7:'p1-hardy-thrush',9:'p1-joyce-araby'};
   const focus=[
    L('speaker, situation and limits of inference','говорящий, ситуация и границы вывода'),
    L('imagery, structure and tentative hope','образность, структура и предположительная надежда'),
    L('dialogue, audience and a sustained Paper 1 focus','диалог, зритель и последовательный фокус Paper 1'),
    L('public accusation and staged judgement','публичное обвинение и суд перед зрителями'),
    L('non-fiction voice, conditional argument and audience','голос нон-фикшн, условный довод и аудитория'),
    L('two-text comparison: sound and changing mood','сравнение двух текстов: звук и перемена настроения'),
    L('two-text plan: narrative distance and sympathy','план по двум текстам: повествовательная дистанция и сочувствие'),
    L('poetic form, sound and an uncertain ending','стихотворная форма, звук и неопределённый финал'),
    L('two perspectives on identity and retrospective knowledge','две перспективы: идентичность и позднейшее знание'),
    L('imagery, narrative distance and alternative readings','образность, повествовательная дистанция и альтернативные прочтения'),
    L('comparative editing: accurate evidence and qualified claims','редактирование сравнения: точные доказательства и осторожные выводы'),
   ][cycle];
   title=L(`English · ${focus.en}`,`English · ${focus.ru}`);
   if(pairs[cycle])ids.push(...pairs[cycle]);
   else if(singles[cycle])ids.push(singles[cycle]);
   const output=L(`Use the ${workload}-minute writing stage to type a thesis and ${workload>=50?'three connected analytical paragraphs, then a defensible alternative reading':'one developed analytical paragraph'}.`, `В пределах ${workload} минут письма напечатай тезис и ${workload>=50?'три связанных аналитических абзаца, затем обоснованное альтернативное прочтение':'один развёрнутый аналитический абзац'}.`);
   const materials=L(`Open the supplied stimulus in ${ids.join(' and ')}. Use the passage for this assigned skill exercise; do not answer every separate Paper 1 question as an additional full response.`, `Открой приведённый текст в ${ids.join(' и ')}. Используй отрывок для назначенного упражнения; не добавляй полный ответ на каждый отдельный вопрос Paper 1.`);
   if(cycle===3){
    practice=L(`Use the legal Folger Much Ado text, Act 4, scene 1 (https://www.folger.edu/explore/shakespeares-works/much-ado-about-nothing/read/4/1/). Select 25–40 consecutive lines; record the opening/closing words and speaker. Analyse ${focus.en}. ${output.en} Ground claims in dialogue, staging and structure, rather than a list of techniques.`, `Используй законный текст Folger Much Ado, акт 4, сцена 1 (https://www.folger.edu/explore/shakespeares-works/much-ado-about-nothing/read/4/1/). Выбери 25–40 последовательных строк, запиши первые/последние слова и говорящего. Фокус: ${focus.ru}. ${output.ru} Обосновывай мысли диалогом, сценическим действием и структурой, не списком приёмов.`);
   }else if(cycle===8){
    practice=L(`Read BOTH original kitchen paragraphs in concept-perspective, then the linked identity lesson. Compare the child's limited understanding with the same narrator's hindsight. Explain what the change in knowledge can reveal about the narrating self, without inventing a new event. ${output.en} These two invented versions train comparison; they are not two eligible Paper 2 works.`, `Прочитай ОБА авторских абзаца о кухне в concept-perspective и связанную тему идентичности. Сопоставь ограниченное понимание ребёнка с позднейшим знанием того же рассказчика. Объясни, что изменение знания раскрывает в повествующем «я», не выдумывая новых событий. ${output.ru} Эти два условных варианта тренируют сравнение, но не являются двумя допустимыми произведениями Paper 2.`);
   }else if(pairs[cycle]){
    const prompt=cycle===6?L('Compare and contrast how narrative distance shapes sympathy for the young protagonist. How far do the supplied openings allow a judgement?', 'Сопоставь сходства и различия в том, как повествовательная дистанция формирует сочувствие к юному герою. Насколько данные начала позволяют вынести суждение?'):L('Compare and contrast how a small creature changes the mood. How far does the setting prepare that change?', 'Сопоставь сходства и различия в том, как маленькое существо меняет настроение. В какой степени обстановка подготавливает перемену?');
    practice=L(`${materials.en} Use BOTH passages. Prompt: ${prompt.en} ${cycle===6?`Spend the first 10 writing minutes on a comparative thesis, two supported comparison points and a qualified judgement; use the remaining writing time to ${workload>=50?'develop the argument in three connected paragraphs and test an alternative reading':'develop one point as a paragraph'}.`:cycle===10?'Draft a comparative paragraph, check every quoted word and punctuation mark against both supplied texts, then revise one unsupported inference and one weak comparison.':`${output.en} Include an explicit connection between the two texts in the developed analysis.`} This is transferable comparison of training passages, not a complete Paper 2 response, a final school pair or a selection of Yun poems.`, `${materials.ru} Используй ОБА отрывка. Задание: ${prompt.ru} ${cycle===6?`Первые 10 минут письма отведи на сравнительный тезис, два пункта с доказательствами и вывод с оговоркой; в оставшееся время ${workload>=50?'разверни аргумент в три связанных абзаца и проверь альтернативное прочтение':'разверни один пункт в абзац'}.`:cycle===10?'Напиши сравнительный абзац, сверь слова и пунктуацию каждой цитаты с обоими текстами, затем исправь один недоказанный вывод и одно слабое сопоставление.':`${output.ru} В развёрнутом анализе явно свяжи оба текста.`} Это тренировка сравнения отрывков, не полный ответ Paper 2, не окончательная школьная пара и не выбор стихов Юна.`);
   }else{
    practice=L(`${materials.en} Read the linked lesson${cycle===4?'s: Into the Wild is reference context; the supplied Douglass passage is the primary text for this writing task':''}. Analyse ${focus.en}. ${output.en} Ground the argument in precise words and structural details; leave unsupported motives open. This is transferable analysis, not a final P2 pair or an IO script.`, `${materials.ru} Прочитай связанную тему${cycle===4?' нон-фикшн и справочный обзор Into the Wild; текст для письменного анализа здесь — приведённый отрывок Дугласса':''}. Фокус: ${focus.ru}. ${output.ru} Подкрепляй аргумент словами и структурой текста; не объявляй недоказанные мотивы фактом. Это навык анализа, не окончательная пара P2 и не сценарий IO.`);
   }
  }
  if(writing&&n===11){
   reading=0;workload=75;review=15;timedMinutes=75;
   ids.length=0;related.splice(0,related.length,'p1-method','form-drama','w-much-ado');
   title=L('Paper 1 literary analysis · full timed practice','Paper 1 · полный анализ по таймеру');
   practice=L('Use Folger Much Ado Act4 scene1: take40 consecutive lines beginning with Friar Francis “You come hither,my lord,to marry this lady?” Record the final line of your extract. In75 minutes including reading,write a complete focused literary commentary: how do dialogue and stage action shape the audience’s judgement of the accusation? Plan,write and reread within the clock. This familiar legal passage practises the school75-minute format;it is not an unseen official IB paper. Spend15 separate minutes applying the linked Paper1 criteria and rewriting the weakest paragraph.','Возьми40 последовательных строк Folger Much Ado,акт4,сцена1,начиная с Friar Francis “You come hither,my lord,to marry this lady?” Запиши последнюю строку. За75 минут вместе с чтением напиши полный литературный комментарий:как диалог/сценическое действие формируют оценку обвинения зрителем? План,письмо,перечитывание внутри таймера. Знакомый законный текст тренирует школьный75-минутный формат,это не официальный незнакомый вариант IB. Затем15 минут оцени по связанным критериям Paper1 и перепиши слабый абзац.');
  }
  if(reading<0||review<5||workload<1||minutes<20)throw Error(`Unrealistic budget ${id}: ${minutes}/${reading}/${workload}/${review}`);
  stages=[];
  if(reading)stages.push({minutes:reading,text:L(writing?'Read the assigned passage(s) and linked lesson. For comparison, annotate both texts and note exact evidence for each; check speaker, situation and the limits of inference before drafting.':`Before solving,use the linked lessons to retrieve the specific definitions,assumptions and worked methods you need. Start with a closed-note formula/diagram recall;check gaps,not every chapter end-to-end. For a full paper,read/choose the actual supplied question.`,`Прочитай ${writing?'назначенные отрывки и связанную тему;для сравнения разметь оба текста,проверь говорящего,ситуацию и границы вывода':'связанные темы назначенных заданий;восстанови определения,допущения,один разобранный метод. Для полного варианта прочитай/выбери данное условие'}.`)});
  if(subject==='econ'&&n===13)stages[0].text=L('School-guide reading period:read the two macro questions,choose ONE and mentally outline both parts. Do not write during these5 minutes. This is separate from the printed75-minute writing clock.','Школьные5 минут чтения:прочитай два макровопроса,выбери ОДИН,мысленно наметь обе части. Не пиши в эти5 минут. Они отделены от напечатанных75 минут письма.');
  stages.push({minutes:workload,text:practice},{minutes:review,text:writing?L('Re-read against knowledge/interpretation,analysis,focus/organisation and English expression. Verify every short quotation against the assigned text(s). Replace unsupported effects with an evidence chain;rewrite the weakest paragraph and record one specific improvement.','Проверь понимание/интерпретацию,анализ,фокус/организацию,английский. Сверь каждую короткую цитату с назначенными текстами;замени недоказанный эффект цепочкой по тексту,перепиши слабый абзац,запиши одно конкретное улучшение.'):correction});
  const extension=writing?L('Optional15 minutes:cover your answer,choose a different detail from the same assigned material and write 120–150 words offering another supported reading. In a comparison task, connect evidence from BOTH texts. Verify the words and locator afterwards.','Дополнительно15 минут:закрой ответ,возьми другую деталь из того же материала и напиши 120–150 английских слов с иным обоснованным прочтением. В сравнительном задании свяжи доказательства из ОБОИХ текстов. Потом проверь текст/локатор.'):L(`Optional15 minutes:use ${ids[0]}. Change ONE stated numerical parameter (or,for an essay,reverse ONE explicit assumption). Predict the effect,redo that subpart and compare the causal chain with the original worked solution. State what stays fixed;do not invent a real-world source.`,`Дополнительно15 минут:возьми ${ids[0]}. Измени ОДИН числовой параметр (в эссе — ОДНО явное допущение). Предскажи эффект,пересчитай подпункт,сравни цепочку с данным решением. Укажи неизменные условия;реальный источник не выдумывай.`);
  activities.push({id,subject,topicId:related[0],relatedTopicIds:related,title,task:practice,expectedOutcome:writing?L('Exactly located annotated passage(s), a focused English analysis or comparative plan as assigned, and a revised paragraph with an evidence-based error log.','Точно обозначенные размеченные отрывки, английский анализ или сравнительный план по заданию, исправленный абзац и журнал ошибок по тексту.'):L('Complete written answers to the named task and all required diagrams,followed by marked corrections and an independent redo of the weakest subpart.','Полные письменные ответы на назначенное задание со всеми диаграммами,проверенные исправления и повтор слабого подпункта без подсказки.'),selfCheck:writing?L('Check the actual supplied text(s) or the assigned Folger scene, not remembered quotations. For comparison, verify evidence from BOTH texts and the connection between them. A persuasive alternative reading is valid when grounded in words, structure or staging. Do not treat a sample interpretation as the only correct meaning.','Проверяй приведённые тексты или назначенную сцену Folger, не цитаты по памяти. В сравнении проверь доказательства из ОБОИХ текстов и связь между ними. Иное чтение допустимо при опоре на слова, структуру или сценическое действие. Пример интерпретации не единственный правильный смысл.'):L(`Use the attached worked solutions for ${ids.join(', ')}. Check method,diagram labels,units and conditional judgement. Reading the answer does not prove independent mastery.`,`Используй приложенные решения ${ids.join(', ')}. Проверь метод,подписи,единицы,условность вывода. Чтение ответа не доказывает самостоятельного владения.`),scopeNote:writing?L('The exact three Yun poems,translation and permitted IO/P2 choices remain unconfirmed for18 October. General analysis continues;one anthology counts as one work.','Три конкретных стихотворения Юна,перевод,допустимый выбор IO/P2 не подтверждены до18 октября. Общий анализ продолжается;антология считается одним произведением.'):undefined,minutes,timedMinutes,priority:'practice',route:writing?(ids.length?`/s/eng/practice?daily=${id}`:`/s/eng/t/${related[0]}`):`/s/${subject}/practice?daily=${id}`,stages,questionIds:ids,practiceEstimate:workload,extension});
 }
 days.push({date,bufferMinutes:0,activities});
}
const header=`// Generated by scripts/build-daily-preparation.mjs. Active self-study only; tutors/breaks excluded.\nimport type { L, SubjectId } from '../src/contract/types.ts';\nexport type DailySubject = Exclude<SubjectId, 'fr' | 'cs'>;\nexport interface DailyActivity {\n id:string; subject:DailySubject; topicId:string; relatedTopicIds:string[]; title:L; task:L; expectedOutcome:L; selfCheck:L; transferCheck?:L; scopeNote?:L;\n minutes:number; timedMinutes?:number; priority:'practice'|'recall'; route:string; stages:{minutes:number;text:L}[]; questionIds:string[]; practiceEstimate:number; extension:L;\n}\nexport interface PreparationDay {date:string;bufferMinutes:number;activities:DailyActivity[]}\nexport const DAILY_SUBJECTS:DailySubject[]=['econ','math','geo','eng'];\nexport const DAILY_PREPARATION:PreparationDay[] = `;
writeFileSync('data/daily-preparation.ts',header+JSON.stringify(days,null,2)+';\n');
writeFileSync('data/plan-quotas.json',JSON.stringify({version:3,start:days[0].date,end:days.at(-1).date,recallMinutesDefault:0,unitMinutes:25,notes:'240 active self-study minutes each calendar day plus up to60 optional. Four subjects;weights follow the actual assigned tasks. Tutors/breaks excluded. Not retrospective completed work or confirmed personal availability.',days:days.map(d=>({date:d.date,capacity:240,recall:0,examDay:exams.papers.some(e=>e.date===d.date),quota:Object.fromEntries(d.activities.map(a=>[a.subject,a.minutes]))}))},null,2)+'\n');
console.log(JSON.stringify(days.map(d=>({date:d.date,minutes:d.activities.map(a=>[a.subject,a.minutes,a.practiceEstimate])})),null,2));
