import type { Question } from '../../../../src/contract/types';

// EX-1b: P1 essays 11 to 20 (Economics HL school mock, extended response, 25 marks).
// Part (a) is worth 10 marks (Explain) and part (b) 15 marks (Discuss). The markscheme has one line per mark.
// The five evaluation marks in part (b) follow the three bands: limited, appropriate, effective and balanced reasoning.
// No model answers in this file (they are in p1-essays-a.ts). The essays use no numbers, so there are no calculation checks.

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'p1-essay-11',
    subject: 'econ',
    topicIds: ['monetary-policy', 'macroeconomic-objectives'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how an increase in the policy interest rate set by the central bank could reduce inflation when aggregate demand is growing faster than potential output. [10 marks]\n' +
        '(b) Discuss whether a central bank should always give priority to low inflation over low unemployment when economic growth is slowing. [15 marks]',
      ru: '(a) Объясните, как повышение ключевой ставки (policy interest rate), которую устанавливает центральный банк (central bank), может снизить инфляцию (inflation), если совокупный спрос (aggregate demand, AD) растёт быстрее потенциального выпуска (potential output). [10 баллов]\n' +
        '(b) Обсудите, должен ли центральный банк всегда отдавать приоритет низкой инфляции перед низкой безработицей (unemployment), когда экономический рост замедляется. [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines inflation as a sustained rise in the general price level.\n' +
        '(a) 1 mark: defines the policy interest rate as the rate set by the central bank that influences the other interest rates in the economy.\n' +
        '(a) 1 mark: a higher policy rate raises the rates that banks charge on loans and pay on deposits.\n' +
        '(a) 1 mark: higher borrowing costs reduce household spending on durable goods and investment by firms.\n' +
        '(a) 1 mark: higher returns on saving encourage households to save more and spend less.\n' +
        '(a) 1 mark: the currency tends to appreciate, so exports become dearer and net exports fall, which reduces aggregate demand further.\n' +
        '(a) 1 mark: lower aggregate demand shifts AD to the left, so the price level rises more slowly and inflation falls.\n' +
        '(a) 1 mark: a labelled AD/AS diagram with the price level on the vertical axis and real GDP (output) on the horizontal axis.\n' +
        '(a) 1 mark: the diagram shows AD shifting left from AD1 to AD2, with a new equilibrium at a lower price level or a lower rate of inflation.\n' +
        '(a) 1 mark: a real-world example, such as a central bank that raised its policy rate after inflation rose well above its target, with the explanation applied to that example.\n' +
        '(b) 1 mark: knowledge: defines low inflation as a stable, low rate of price rises, and unemployment as people who are willing and able to work, are looking for work and have no job.\n' +
        '(b) 1 mark: knowledge: explains the short-run trade-off: a rise in AD lowers unemployment and raises inflation, as a downward-sloping Phillips curve shows.\n' +
        '(b) 1 mark: analysis: high inflation reduces the value of money and savings, distorts decisions and makes exports less competitive, so low inflation protects long-run growth.\n' +
        '(b) 1 mark: analysis: if inflation expectations rise, wages and prices adjust, so reducing inflation later becomes more costly; the credibility of the target matters.\n' +
        '(b) 1 mark: analysis: in the long run the Phillips curve is vertical at the natural rate of unemployment, so the fall in unemployment from higher demand is temporary, while the higher inflation stays.\n' +
        '(b) 1 mark: analysis: if inflation comes from cost pressures (for example, energy prices), a rate rise cuts demand but does not fix the supply shock, so unemployment rises for a small gain on inflation.\n' +
        '(b) 1 mark: analysis: raising rates to reduce inflation cuts output and raises unemployment in the short run, and job losses fall most heavily on low-skilled and young workers.\n' +
        '(b) 1 mark: analysis: monetary policy works with long and variable time lags, so a rate rise may overshoot and cause a deeper slowdown than intended.\n' +
        '(b) 1 mark: application: traces the effect of a rate rise in a real case where inflation rose above target and growth slowed, showing the chain that lowers demand.\n' +
        '(b) 1 mark: application: uses the context (the cause of inflation and the size of the output gap) to decide which argument is stronger in that case.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement on whether a central bank should always prioritise low inflation, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): compares the short-run rise in unemployment with the long-run gain in price stability and credibility.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): considers stakeholders (savers gain from low inflation; borrowers and workers who lose jobs bear the cost) and the time lags of monetary policy as an assumption.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): the judgement depends on the cause of inflation, the size of the output gap, the credibility of the target and the risk of a wage-price spiral, with each point reasoned.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement that answers the question, is consistent with the reasoning, and states which priority the central bank should take when the two objectives conflict.',
      ru: '(a) 1 балл: определяет инфляцию (inflation) как устойчивый рост общего уровня цен.\n' +
        '(a) 1 балл: определяет ключевую ставку (policy interest rate) как ставку, которую устанавливает центральный банк и которая влияет на другие процентные ставки в экономике.\n' +
        '(a) 1 балл: более высокая ключевая ставка повышает ставки, по которым банки выдают кредиты и выплачивают проценты по вкладам.\n' +
        '(a) 1 балл: более дорогие заимствования сокращают расходы домохозяйств на товары длительного пользования и инвестиции фирм.\n' +
        '(a) 1 балл: более высокая доходность сбережений побуждает домохозяйства больше сберегать и меньше тратить.\n' +
        '(a) 1 балл: валюта, скорее всего, укрепится, экспорт подорожает, чистый экспорт (net exports) сократится, и совокупный спрос (aggregate demand, AD) упадёт ещё сильнее.\n' +
        '(a) 1 балл: снижение AD сдвигает кривую совокупного спроса влево, поэтому рост цен замедляется и инфляция снижается.\n' +
        '(a) 1 балл: размеченная диаграмма AD/AS: по вертикальной оси уровень цен, по горизонтальной реальный ВВП (real GDP), то есть выпуск.\n' +
        '(a) 1 балл: диаграмма показывает сдвиг AD с AD1 на AD2 и новое равновесие при более низком уровне цен или более низком темпе инфляции.\n' +
        '(a) 1 балл: пример из реальной экономики, например центральный банк, который повысил ключевую ставку после того, как инфляция заметно превысила цель, и применение объяснения к этому примеру.\n' +
        '(b) 1 балл: знание: определяет низкую инфляцию как стабильно низкий темп роста цен, а безработицу (unemployment) как ситуацию, когда люди, готовые работать и ищущие работу, её не имеют.\n' +
        '(b) 1 балл: знание: объясняет краткосрочный компромисс: рост AD снижает безработицу и повышает инфляцию, что показывает кривая Филлипса (Phillips curve) с отрицательным наклоном.\n' +
        '(b) 1 балл: анализ: высокая инфляция снижает покупательную силу денег и сбережений, искажает решения и делает экспорт менее конкурентоспособным, поэтому низкая инфляция защищает долгосрочный рост.\n' +
        '(b) 1 балл: анализ: если ожидания инфляции растут, зарплаты и цены подстраиваются, поэтому снизить инфляцию позже становится дороже; доверие к целевому уровню инфляции важно.\n' +
        '(b) 1 балл: анализ: в долгосрочном периоде кривая Филлипса вертикальна на уровне естественной безработицы (natural rate of unemployment), поэтому снижение безработицы за счёт спроса временно, а более высокая инфляция сохраняется.\n' +
        '(b) 1 балл: анализ: если инфляция вызвана издержками (cost-push inflation), например ростом цен на энергию, повышение ставки снижает спрос, но не устраняет шок предложения, поэтому безработица растёт, а выигрыш по инфляции невелик.\n' +
        '(b) 1 балл: анализ: повышение ставок ради снижения инфляции сокращает выпуск и увеличивает безработицу в краткосрочном периоде, причём потери рабочих мест сильнее всего бьют по низкоквалифицированным и молодым работникам.\n' +
        '(b) 1 балл: анализ: монетарная политика действует с долгими и изменчивыми временными лагами (monetary policy), поэтому повышение ставки может привести к более глубокому замедлению, чем задумано.\n' +
        '(b) 1 балл: применение: прослеживает эффект повышения ставки в реальном случае, когда инфляция превысила цель, а рост замедлился, и показывает цепочку снижения совокупного спроса.\n' +
        '(b) 1 балл: применение: использует контекст (причину инфляции и размер разрыва выпуска (output gap)), чтобы определить, какой аргумент сильнее в этом случае.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение о том, должен ли центральный банк всегда отдавать приоритет низкой инфляции, и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сравнивает краткосрочный рост безработицы с долгосрочным выигрышем в ценовой стабильности и доверии.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны (вкладчики выигрывают от низкой инфляции, заёмщики и работники, потерявшие работу, несут издержки) и временные лаги как допущение.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): суждение зависит от причины инфляции, размера разрыва выпуска, доверия к целевому уровню инфляции и риска спирали цен и зарплат; каждый довод обоснован.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение, которое отвечает на вопрос, согласуется с обоснованием и указывает, какой приоритет выбрать центральному банку при конфликте целей.',
    },
    hints: [
      {
        en: 'Definitions: inflation, the policy interest rate and aggregate demand (AD), each in one sentence.',
        ru: 'Определения: инфляция (inflation), ключевая ставка (policy interest rate) и совокупный спрос (aggregate demand, AD), по одному предложению на каждое.',
      },
      {
        en: 'Explanation: the chain from a higher policy rate to bank rates, borrowing, spending and investment, then lower AD and slower price rises; draw a labelled AD/AS diagram with AD shifting left.',
        ru: 'Объяснение: цепочка от более высокой ключевой ставки к ставкам банков, заимствованиям, расходам и инвестициям, затем к более низкому AD и более медленному росту цен; нарисуйте размеченную диаграмму AD/AS со сдвигом AD влево.',
      },
      {
        en: 'Real-world example: a central bank that raised its policy rate after inflation rose well above its target.',
        ru: 'Пример из реальной экономики: центральный банк, который повысил ключевую ставку после того, как инфляция заметно превысила его целевой уровень.',
      },
      {
        en: 'Evaluation: short run (output and jobs fall first) versus long run (price stability and credibility); stakeholders (savers gain, borrowers and workers lose); assumptions (time lags, the cause of inflation); priorities (price stability versus employment).',
        ru: 'Оценка: краткосрочный период (сначала падают выпуск и занятость) и долгосрочный период (ценовая стабильность и доверие); заинтересованные стороны (вкладчики выигрывают, заёмщики и работники проигрывают); допущения (временные лаги, причина инфляции); приоритеты (ценовая стабильность или занятость).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-12',
    subject: 'econ',
    topicIds: ['inequality-and-poverty', 'supply-side-policies'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how improving access to education and vocational training could reduce income inequality in an economy where workers with few skills earn much less than skilled workers. [10 marks]\n' +
        '(b) Discuss whether supply-side policies are an effective way for a government to reduce absolute poverty in a low-income country. [15 marks]',
      ru: '(a) Объясните, как расширение доступа к образованию и профессиональному обучению может снизить неравенство доходов (income inequality) в экономике, где малоквалифицированные работники получают заметно меньше квалифицированных. [10 баллов]\n' +
        '(b) Обсудите, является ли политика предложения (supply-side policies) эффективным способом снижения абсолютной бедности (absolute poverty) правительством страны с низким уровнем дохода. [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines income inequality as the unequal distribution of income among households.\n' +
        '(a) 1 mark: defines human capital as the skills, knowledge and health that raise the productivity of workers.\n' +
        '(a) 1 mark: education and training raise the human capital of low-skilled workers, so their productivity rises.\n' +
        '(a) 1 mark: higher productivity lets more workers move into skilled, better-paid jobs, so the gap in pay narrows.\n' +
        '(a) 1 mark: a larger supply of skilled workers lowers the skill premium, so the gap between high and low incomes narrows.\n' +
        '(a) 1 mark: the effect comes with a time lag, because graduates reach the labour market only after several years.\n' +
        '(a) 1 mark: a labelled Lorenz curve diagram with the line of equality and the Lorenz curve, and the cumulative shares of population and income on the axes.\n' +
        '(a) 1 mark: the diagram shows the Lorenz curve moving closer to the line of equality, so area A falls and the Gini coefficient falls.\n' +
        '(a) 1 mark: a real-world example: a vocational college programme that trains workers for the jobs that local industries need.\n' +
        '(a) 1 mark: application: links the example to the explanation, showing how the pay gap narrows in that case, and notes that the effect takes years.\n' +
        '(b) 1 mark: knowledge: defines absolute poverty as income too low to buy basic needs such as food, shelter and clothing.\n' +
        '(b) 1 mark: knowledge: defines supply-side policies as measures that raise the productive capacity of the economy and shift long-run aggregate supply (LRAS) to the right.\n' +
        '(b) 1 mark: analysis: market-based policies, such as lower income tax and deregulation, can raise investment and job creation, which can lift the incomes of poor households.\n' +
        '(b) 1 mark: analysis: interventionist policies, such as spending on education, health and rural infrastructure, raise human capital and lower production costs, so the poor can take better-paid work and use services.\n' +
        '(b) 1 mark: analysis: higher potential output raises real incomes, but absolute poverty falls only if the gains reach the poorest households.\n' +
        '(b) 1 mark: analysis: tax cuts that favour high earners and flexible labour markets can widen income gaps, so the gains may not reach the poorest.\n' +
        '(b) 1 mark: analysis: the poor may lack collateral, credit, land or information, so they gain less from the same policy than better-off groups.\n' +
        '(b) 1 mark: analysis: these policies take years to work, while poor households need income now, so short-term support is also needed.\n' +
        '(b) 1 mark: application: uses the context of a country where most poor households work in farming and have little schooling, to show which supply-side measure would matter most.\n' +
        '(b) 1 mark: application: uses a real-world example, such as a government that built rural roads and vocational schools, and checks whether the incomes of poor families rose.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement on the effectiveness of these policies, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): compares short-run effects (cash transfers cut poverty quickly) with long-run effects (supply-side policies raise incomes for years).\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): considers stakeholders (the poor, employers, taxpayers and the government budget) and the effect of the policy on each.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): the judgement depends on the assumptions: whether the poor can reach the training or jobs, whether institutions can deliver, and whether the government can finance the spending.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement, supported by reasoning, on whether supply-side policies work alone or should be combined with direct redistribution, such as transfers, with the priorities explained.',
      ru: '(a) 1 балл: определяет неравенство доходов (income inequality) как неравномерное распределение доходов между домохозяйствами.\n' +
        '(a) 1 балл: определяет человеческий капитал (human capital) как навыки, знания и здоровье, которые повышают производительность работников.\n' +
        '(a) 1 балл: образование и обучение повышают человеческий капитал малоквалифицированных работников, и их производительность растёт.\n' +
        '(a) 1 балл: более высокая производительность позволяет большему числу работников перейти на квалифицированные и лучше оплачиваемые должности, поэтому разрыв в оплате труда сокращается.\n' +
        '(a) 1 балл: большее предложение квалифицированного труда снижает премию за квалификацию (skill premium), поэтому разрыв между высокими и низкими доходами уменьшается.\n' +
        '(a) 1 балл: эффект проявляется с временным лагом, потому что выпускники выходят на рынок труда только через несколько лет.\n' +
        '(a) 1 балл: размеченная кривая Лоренца (Lorenz curve): линия равенства и сама кривая; по осям кумулятивная доля населения и кумулятивная доля дохода.\n' +
        '(a) 1 балл: диаграмма показывает, что кривая Лоренца приближается к линии равенства, площадь A уменьшается и коэффициент Джини (Gini coefficient) снижается.\n' +
        '(a) 1 балл: пример из реальной экономики: программа профессиональных колледжей, которая готовит работников для профессий, нужных местным отраслям.\n' +
        '(a) 1 балл: применение: связывает пример с объяснением, показывая, как сокращается разрыв в оплате труда в этом случае, и отмечает, что эффект занимает годы.\n' +
        '(b) 1 балл: знание: определяет абсолютную бедность (absolute poverty) как доход, недостаточный для покупки базовых потребностей, таких как продукты, жильё и одежда.\n' +
        '(b) 1 балл: знание: определяет политику предложения (supply-side policies) как меры, которые повышают производственный потенциал экономики и сдвигают долгосрочную кривую совокупного предложения (long-run aggregate supply, LRAS) вправо.\n' +
        '(b) 1 балл: анализ: рыночные меры, например снижение подоходного налога и дерегулирование, могут повысить инвестиции и занятость, а это может поднять доходы бедных домохозяйств.\n' +
        '(b) 1 балл: анализ: меры государственного вмешательства, например расходы на образование, здравоохранение и сельскую инфраструктуру, повышают человеческий капитал и снижают издержки производства, поэтому бедные могут получить лучше оплачиваемую работу и пользоваться услугами.\n' +
        '(b) 1 балл: анализ: более высокий потенциальный выпуск повышает реальные доходы, но абсолютная бедность снижается только тогда, когда выигрыш доходит до беднейших домохозяйств.\n' +
        '(b) 1 балл: анализ: снижение налогов, выгодное людям с высокими доходами, и гибкий рынок труда могут увеличить разрыв в доходах, и выигрыш может не дойти до беднейших.\n' +
        '(b) 1 балл: анализ: бедным могут не хватать залога, кредита, земли или информации, поэтому от одной и той же меры они выигрывают меньше, чем более состоятельные группы.\n' +
        '(b) 1 балл: анализ: эти меры действуют годами, а бедным домохозяйствам нужен доход уже сейчас, поэтому нужна и краткосрочная поддержка.\n' +
        '(b) 1 балл: применение: использует контекст страны, где большинство бедных домохозяйств занято в сельском хозяйстве и имеет мало образования, и показывает, какая мера важнее всего.\n' +
        '(b) 1 балл: применение: использует пример из реальной экономики, например правительство, которое построило сельские дороги и профессиональные школы, и проверяет, выросли ли доходы бедных семей.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение об эффективности этих мер и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сравнивает краткосрочные эффекты (денежные выплаты быстро снижают бедность) с долгосрочными (политика предложения повышает доходы на годы).\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны (бедных, работодателей, налогоплательщиков и бюджет правительства) и влияние меры на каждую из них.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): суждение зависит от допущений: могут ли бедные получить доступ к обучению или работе, способны ли институты обеспечить реализацию и может ли правительство профинансировать расходы.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение с обоснованием о том, работает ли политика предложения сама по себе или её нужно сочетать с прямым перераспределением, например трансфертами (transfers), с объяснением приоритетов.',
    },
    hints: [
      {
        en: 'Definitions: income inequality, human capital (skills and health that raise productivity), absolute poverty (income too low for basic needs), supply-side policies.',
        ru: 'Определения: неравенство доходов (income inequality), человеческий капитал (human capital) как навыки и здоровье, повышающие производительность, абсолютная бедность (absolute poverty) как доход, недостаточный для базовых потребностей, политика предложения (supply-side policies).',
      },
      {
        en: 'Explanation: more training raises human capital and productivity, so the skill premium falls; draw a labelled Lorenz curve moving towards the line of equality; for (b), show the LRAS shift and its time lags.',
        ru: 'Объяснение: обучение повышает человеческий капитал и производительность, поэтому премия за квалификацию (skill premium) падает; нарисуйте размеченную кривую Лоренца (Lorenz curve), которая приближается к линии равенства; для части (b) покажите сдвиг долгосрочной кривой совокупного предложения (LRAS) и временные лаги.',
      },
      {
        en: 'Real-world example: a vocational college programme that trains workers for the skills local firms need.',
        ru: 'Пример из реальной экономики: программа профессиональных колледжей, которая готовит работников под навыки, нужные местным фирмам.',
      },
      {
        en: 'Evaluation: short run (cash transfers cut poverty quickly) versus long run (training and infrastructure raise incomes for years); stakeholders (low-skilled workers, employers, taxpayers); assumptions (the poor can reach training, graduates can find jobs); priorities (immediate relief versus long-run capacity).',
        ru: 'Оценка: краткосрочный период (денежные выплаты быстро снижают бедность) и долгосрочный период (обучение и инфраструктура повышают доходы на годы); заинтересованные стороны (малоквалифицированные работники, работодатели, налогоплательщики); допущения (бедные могут получить обучение, выпускники находят работу); приоритеты (немедленная помощь или долгосрочный потенциал).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-13',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['trade-protection'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how a specific tariff on imported cars changes the domestic price, the quantity produced by domestic car firms and the quantity of imports. [10 marks]\n' +
        '(b) Discuss whether a quota is a better way than a tariff for a government to protect a domestic industry from foreign competition. [15 marks]',
      ru: '(a) Объясните, как специфический тариф (specific tariff) на импортные автомобили меняет внутреннюю цену, объём производства отечественных автопроизводителей и объём импорта. [10 баллов]\n' +
        '(b) Обсудите, является ли квота (quota) лучшим способом защиты отечественной отрасли от иностранной конкуренции, чем тариф (tariff). [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines a specific tariff as a fixed tax per unit of an imported good.\n' +
        '(a) 1 mark: defines the world price as the price at which imported cars are available before any tariff is applied.\n' +
        '(a) 1 mark: the tariff raises the cost of imported cars, so the domestic price rises from the world price to the world price plus the tariff.\n' +
        '(a) 1 mark: the higher price raises the quantity supplied by domestic car firms, so their output increases.\n' +
        '(a) 1 mark: the higher price lowers the quantity demanded by domestic consumers, so the gap that imports fill shrinks and imports fall.\n' +
        '(a) 1 mark: consumers pay more and buy fewer cars, so consumer surplus falls.\n' +
        '(a) 1 mark: a labelled diagram of the domestic market with price on the vertical axis and quantity on the horizontal axis, showing domestic demand, domestic supply and the world price line.\n' +
        '(a) 1 mark: the diagram shows the price rising to the world price plus the tariff, domestic supply rising and imports (the horizontal gap at that price) falling.\n' +
        '(a) 1 mark: a real-world example: a government that puts a duty on imported cars to protect its domestic car makers.\n' +
        '(a) 1 mark: application: links the example to the explanation, stating how the domestic price, domestic output and imports change in that case.\n' +
        '(b) 1 mark: knowledge: defines a quota as a physical limit on the quantity of imports allowed into a country.\n' +
        '(b) 1 mark: knowledge: defines the quota rent as the gap between the domestic price and the world price on each imported unit, received by licence holders or foreign suppliers unless licences are sold.\n' +
        '(b) 1 mark: analysis: a quota and a tariff that cut imports by the same amount raise the domestic price similarly and create the same deadweight loss, so both protect domestic producers in a similar way.\n' +
        '(b) 1 mark: analysis: a tariff gives government tax revenue, but a quota gives the rent to licence holders or foreign suppliers unless the government sells the licences.\n' +
        '(b) 1 mark: analysis: a quota fixes the quantity of imports, so domestic firms know the limit; with a tariff, imports still respond to both price and demand.\n' +
        '(b) 1 mark: analysis: if foreign suppliers cut their prices to keep their sales, part of a tariff is absorbed, so the rise in the domestic price and the protection are smaller; a quota does not suffer from this.\n' +
        '(b) 1 mark: analysis: a quota can cause shortages if demand grows, and licences encourage lobbying to obtain them (rent-seeking).\n' +
        '(b) 1 mark: analysis: a tariff is transparent and easy to monitor, whereas a quota needs licence administration, which creates scope for favouritism.\n' +
        '(b) 1 mark: application: uses an example of a steel or car industry protected by import limits, and asks who receives the revenue or the rent.\n' +
        '(b) 1 mark: application: uses the same example to test whether a tariff would collect revenue that the quota gives away.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement on whether a quota is better than a tariff, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): compares the short-run protection that a fixed quota gives with the long-run efficiency loss and the cost to consumers.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): considers stakeholders (licence holders gain; consumers and foreign exporters lose; government revenue depends on how licences are allocated).\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): the judgement depends on who receives the rent (auction or free allocation), on the elasticities of supply and demand, and on the risk of retaliation.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement, supported by reasoning: a quota is justified when a fixed limit on imports is needed; otherwise a tariff is usually the more transparent choice, and the priorities and conditions are stated.',
      ru: '(a) 1 балл: определяет специфический тариф (specific tariff) как фиксированный налог на единицу импортного товара.\n' +
        '(a) 1 балл: определяет мировую цену (world price) как цену, по которой импортные автомобили доступны до введения тарифа.\n' +
        '(a) 1 балл: тариф повышает издержки импортных автомобилей, поэтому внутренняя цена растёт от мировой цены до мировой цены плюс тариф.\n' +
        '(a) 1 балл: более высокая цена увеличивает объём предложения отечественных автопроизводителей, поэтому их выпуск растёт.\n' +
        '(a) 1 балл: более высокая цена снижает величину спроса внутренних потребителей, поэтому разрыв, который заполняет импорт, сокращается, и импорт падает.\n' +
        '(a) 1 балл: потребители платят больше и покупают меньше автомобилей, поэтому излишек потребителя (consumer surplus) падает.\n' +
        '(a) 1 балл: размеченная диаграмма внутреннего рынка: по вертикальной оси цена, по горизонтальной количество; внутренний спрос, внутреннее предложение и линия мировой цены.\n' +
        '(a) 1 балл: диаграмма показывает, что цена растёт до мировой цены плюс тариф, внутреннее предложение увеличивается, а импорт (горизонтальный разрыв между спросом и предложением при этой цене) сокращается.\n' +
        '(a) 1 балл: пример из реальной экономики: правительство вводит пошлину на импортные автомобили, чтобы защитить отечественных производителей.\n' +
        '(a) 1 балл: применение: связывает пример с объяснением и указывает, как в этом случае меняются внутренняя цена, внутренний выпуск и импорт.\n' +
        '(b) 1 балл: знание: определяет квоту (quota) как физическое ограничение на объём импорта, который допускается в страну.\n' +
        '(b) 1 балл: знание: определяет квотную ренту (quota rent) как разницу между внутренней и мировой ценой на каждую импортную единицу, которую получают владельцы лицензий или иностранные поставщики, если лицензии не продаются.\n' +
        '(b) 1 балл: анализ: квота и тариф, которые сокращают импорт на одну и ту же величину, повышают внутреннюю цену примерно одинаково и создают одинаковые чистые потери общества (deadweight loss), поэтому оба защищают производителей похожим образом.\n' +
        '(b) 1 балл: анализ: тариф приносит государству налоговые поступления, а квотная рента достаётся владельцам лицензий или иностранным поставщикам, если государство не продаёт лицензии.\n' +
        '(b) 1 балл: анализ: квота фиксирует объём импорта, поэтому отечественные фирмы знают предел; при тарифе импорт реагирует и на цену, и на спрос.\n' +
        '(b) 1 балл: анализ: если иностранные поставщики снижают цены, чтобы сохранить продажи, часть тарифа поглощается, и рост внутренней цены и защита становятся меньше; квота от этого не зависит.\n' +
        '(b) 1 балл: анализ: квота может вызвать дефицит при росте спроса, а лицензии стимулируют лоббирование ради их получения, то есть поиск ренты (rent-seeking).\n' +
        '(b) 1 балл: анализ: тариф прозрачен и его легко контролировать, тогда как квота требует администрирования лицензий, а это создаёт возможности для фаворитизма.\n' +
        '(b) 1 балл: применение: использует пример отрасли (например, сталелитейной или автомобильной), защищённой ограничениями импорта, и спрашивает, кто получает доход или ренту.\n' +
        '(b) 1 балл: применение: на том же примере проверяет, смог бы тариф собрать доход, который квота отдаёт другим.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение о том, лучше ли квота тарифа, и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сравнивает краткосрочную защиту, которую даёт фиксированная квота, с долгосрочными потерями эффективности и издержками для потребителей.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны (владельцы лицензий выигрывают, потребители и иностранные экспортёры проигрывают, доход государства зависит от распределения лицензий).\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): суждение зависит от того, кто получает ренту (аукцион или бесплатное распределение), от эластичности спроса и предложения и от риска ответных мер.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение с обоснованием: квота оправдана, если нужен фиксированный предел импорта; в остальных случаях тариф обычно прозрачнее, а приоритеты и условия указаны.',
    },
    hints: [
      {
        en: 'Definitions: tariff (a tax on imports), quota (a physical limit on imports), quota rent, protectionism.',
        ru: 'Определения: тариф (tariff) как налог на импорт, квота (quota) как физическое ограничение импорта, квотная рента (quota rent), протекционизм (protectionism).',
      },
      {
        en: 'Explanation: a labelled domestic market diagram with the world price and the price after the tariff; show the fall in imports, the rise in domestic supply, lost consumer surplus, government revenue and the deadweight loss; for (b), compare who receives the revenue or the rent.',
        ru: 'Объяснение: нарисуйте размеченную диаграмму внутреннего рынка с мировой ценой и ценой после тарифа; покажите сокращение импорта, рост внутреннего предложения, потерю излишка потребителя (consumer surplus), доход государства и чистые потери общества (deadweight loss); для части (b) сравните, кто получает доход или ренту.',
      },
      {
        en: 'Real-world example: a government that protects a domestic car or steel industry with import duties or import limits.',
        ru: 'Пример из реальной экономики: правительство защищает отечественное автомобилестроение или сталелитейную отрасль пошлинами или ограничениями импорта.',
      },
      {
        en: 'Evaluation: short run (protected firms keep sales quickly) versus long run (less competition, higher prices, slower innovation); stakeholders (consumers, domestic firms, licence holders, foreign suppliers, government); assumptions (the shape of supply and demand, retaliation); priorities (the cheapest way to meet the aim).',
        ru: 'Оценка: краткосрочный период (защищённые фирмы быстро сохраняют продажи) и долгосрочный период (меньше конкуренции, выше цены, медленнее инновации); заинтересованные стороны (потребители, отечественные фирмы, владельцы лицензий, иностранные поставщики, правительство); допущения (форма спроса и предложения, ответные меры); приоритеты (наиболее дешёвый способ достичь цели).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-14',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['arguments-for-and-against-trade-control', 'trade-protection'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain the infant industry argument for temporary trade protection, using the example of a new domestic industry. [10 marks]\n' +
        '(b) Discuss whether trade protection is an effective way to protect jobs in a domestic industry that is losing out to foreign competition. [15 marks]',
      ru: '(a) Объясните аргумент в пользу временной защиты молодой отрасли (infant industry) от иностранной конкуренции на примере новой отечественной отрасли. [10 баллов]\n' +
        '(b) Обсудите, является ли торговая защита (trade protection) эффективным способом сохранить рабочие места в отечественной отрасли, которая проигрывает иностранной конкуренции. [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines an infant industry as a new domestic industry whose costs are higher than those of established foreign firms because it has little experience.\n' +
        '(a) 1 mark: defines economies of scale as the fall in average cost as output increases.\n' +
        '(a) 1 mark: a tariff on imports raises the price of competing foreign products, so the new domestic firm can sell more at a viable price.\n' +
        '(a) 1 mark: higher sales let the firm produce more, so its average cost falls through economies of scale and learning by doing.\n' +
        '(a) 1 mark: lower costs make the firm more competitive, so it can later compete with foreign firms without the tariff.\n' +
        '(a) 1 mark: the argument needs protection that is temporary and a realistic prospect that the industry will become competitive.\n' +
        '(a) 1 mark: a labelled average cost diagram with output on the horizontal axis and cost per unit on the vertical axis, showing a falling average cost curve and the world price line.\n' +
        '(a) 1 mark: the diagram shows unit cost falling as output rises until it reaches the world price, the point at which the firm can compete without protection.\n' +
        '(a) 1 mark: a real-world example: a new domestic manufacturing industry, such as battery or electronics production, protected for a limited period.\n' +
        '(a) 1 mark: application: links the example to the argument, explaining how protection gives time for scale and skills to build, so unit cost falls.\n' +
        '(b) 1 mark: knowledge: defines trade protection as government measures, such as tariffs, quotas and subsidies, that restrict imports or help domestic firms compete.\n' +
        '(b) 1 mark: knowledge: defines a declining industry as an industry whose competitiveness or demand is falling, so its output and jobs decline over time.\n' +
        '(b) 1 mark: analysis: protection raises the domestic price and keeps sales in the protected industry, so jobs may be saved in the short run.\n' +
        '(b) 1 mark: analysis: protection delays the movement of workers and capital to growing industries, so structural unemployment may persist in the long run.\n' +
        '(b) 1 mark: analysis: higher input prices raise the costs of downstream industries that use the protected good, so jobs in those industries may be lost.\n' +
        '(b) 1 mark: analysis: higher prices lower the real incomes of consumers, so jobs saved in one industry are paid for by many households.\n' +
        '(b) 1 mark: analysis: retaliation by trading partners can cut exports and jobs in other industries.\n' +
        '(b) 1 mark: analysis: protected firms face less competition, so they have less reason to cut costs (X-inefficiency), and protection can last longer than planned through lobbying (rent-seeking).\n' +
        '(b) 1 mark: application: uses the example of a steel industry losing sales to cheap imports, and identifies which jobs in steel and in steel-using industries gain or lose.\n' +
        '(b) 1 mark: application: compares protection with a direct alternative, such as subsidies, retraining or support for research, to show the cost of protection.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement on whether trade protection is an effective way to protect jobs, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): compares the short-run jobs saved with the long-run loss of competitiveness and the cost to consumers.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): weighs stakeholders: protected workers and firms gain; consumers, downstream workers and foreign exporters lose; government may gain tariff revenue.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): the judgement depends on whether the industry can become competitive, whether the protection is temporary and whether cheaper alternatives, such as retraining, reach the same aim.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement, supported by reasoning, on when protection can protect jobs (temporary, combined with adjustment support), with the priorities and conditions stated.',
      ru: '(a) 1 балл: определяет молодую отрасль (infant industry) как новую отечественную отрасль, издержки которой выше, чем у устоявшихся иностранных фирм, потому что у неё мало опыта.\n' +
        '(a) 1 балл: определяет эффект масштаба (economies of scale) как снижение средних издержек при росте выпуска.\n' +
        '(a) 1 балл: тариф на импорт повышает цену конкурирующих иностранных товаров, поэтому новая отечественная фирма может продавать больше по жизнеспособной цене.\n' +
        '(a) 1 балл: более высокие продажи позволяют фирме производить больше, поэтому её средние издержки снижаются за счёт эффекта масштаба и обучения на опыте (learning by doing).\n' +
        '(a) 1 балл: более низкие издержки повышают конкурентоспособность фирмы, поэтому позже она сможет конкурировать с иностранными фирмами без тарифа.\n' +
        '(a) 1 балл: аргумент требует временной защиты и реалистичной перспективы, что отрасль станет конкурентоспособной.\n' +
        '(a) 1 балл: размеченная диаграмма средних издержек: по горизонтальной оси выпуск, по вертикальной издержки на единицу; кривая средних издержек падает, и есть линия мировой цены.\n' +
        '(a) 1 балл: диаграмма показывает, что издержки на единицу падают при росте выпуска до мировой цены: в этой точке фирма может конкурировать без защиты.\n' +
        '(a) 1 балл: пример из реальной экономики: новое отечественное производство, например батарей или электроники, которое защищено на ограниченный срок.\n' +
        '(a) 1 балл: применение: связывает пример с аргументом, объясняя, как защита даёт время на наращивание масштаба и навыков и так снижает издержки на единицу.\n' +
        '(b) 1 балл: знание: определяет торговую защиту (trade protection) как меры государства, например тарифы, квоты и субсидии, которые ограничивают импорт или помогают отечественным фирмам конкурировать.\n' +
        '(b) 1 балл: знание: определяет отрасль в упадке (declining industry) как отрасль, конкурентоспособность или спрос которой падает, поэтому её выпуск и рабочие места со временем сокращаются.\n' +
        '(b) 1 балл: анализ: защита повышает внутреннюю цену и сохраняет продажи защищённой отрасли, поэтому рабочие места могут сохраниться в краткосрочном периоде.\n' +
        '(b) 1 балл: анализ: защита задерживает переход работников и капитала в растущие отрасли, поэтому структурная безработица может сохраниться в долгосрочном периоде.\n' +
        '(b) 1 балл: анализ: более высокие цены на ресурсы повышают издержки отраслей, которые используют защищённый товар, поэтому рабочие места в них могут пропасть.\n' +
        '(b) 1 балл: анализ: более высокие цены снижают реальные доходы потребителей, поэтому рабочие места, сохранённые в одной отрасли, оплачивают многие домохозяйства.\n' +
        '(b) 1 балл: анализ: ответные меры торговых партнёров могут сократить экспорт и рабочие места в других отраслях.\n' +
        '(b) 1 балл: анализ: защищённые фирмы сталкиваются с меньшей конкуренцией, поэтому у них меньше стимулов снижать издержки (X-inefficiency), а защита может сохраняться дольше запланированного благодаря лоббированию (rent-seeking).\n' +
        '(b) 1 балл: применение: использует пример сталелитейной отрасли, которая теряет продажи из-за дешёвого импорта, и определяет, какие рабочие места в самой отрасли и в отраслях, использующих сталь, выигрывают или проигрывают.\n' +
        '(b) 1 балл: применение: сравнивает защиту с прямой альтернативой, например субсидиями, переобучением или поддержкой исследований, чтобы показать цену защиты.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение о том, является ли торговая защита эффективным способом сохранить рабочие места, и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сравнивает краткосрочно сохранённые рабочие места с долгосрочной потерей конкурентоспособности и издержками для потребителей.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны: защищённые работники и фирмы выигрывают; потребители, работники смежных отраслей и иностранные экспортёры проигрывают; государство может получить тарифные доходы.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): суждение зависит от того, может ли отрасль стать конкурентоспособной, является ли защита временной и достигают ли той же цели более дешёвые альтернативы, например переобучение.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение с обоснованием о том, когда защита может сохранить рабочие места (временная защита вместе с поддержкой адаптации), с указанием приоритетов и условий.',
    },
    hints: [
      {
        en: 'Definitions: infant industry (a new industry that cannot yet compete with established foreign firms), economies of scale, trade protection, declining industry.',
        ru: 'Определения: молодая отрасль (infant industry) как новая отрасль, которая пока не может конкурировать с устоявшимися иностранными фирмами, эффект масштаба (economies of scale), торговая защита (trade protection), отрасль в упадке (declining industry).',
      },
      {
        en: 'Explanation: the chain from a tariff, to higher domestic sales, to lower average cost through scale and learning, to competitiveness; draw a labelled average cost diagram with unit cost falling as output rises, and the world price line.',
        ru: 'Объяснение: цепочка от тарифа к росту внутренних продаж, снижению средних издержек за счёт масштаба и обучения и затем к конкурентоспособности; нарисуйте размеченную диаграмму средних издержек, где издержки на единицу падают с ростом выпуска, и линию мировой цены.',
      },
      {
        en: 'Real-world example: a new domestic battery or electronics factory for (a); a steel mill losing sales to cheap imports for (b).',
        ru: 'Пример из реальной экономики: новый отечественный завод батарей или электроники для части (a); сталелитейный завод, который теряет продажи из-за дешёвого импорта, для части (b).',
      },
      {
        en: 'Evaluation: short run (jobs saved now) versus long run (higher prices, weaker competitiveness, protection that becomes permanent); stakeholders (domestic workers gain, consumers and downstream firms pay, trading partners may retaliate); assumptions (the industry can become competitive, protection has an end date); priorities (training or research spending as alternatives).',
        ru: 'Оценка: краткосрочный период (рабочие места сохраняются сейчас) и долгосрочный период (более высокие цены, слабая конкурентоспособность, защита становится постоянной); заинтересованные стороны (работники отрасли выигрывают, потребители и фирмы-покупатели платят, торговые партнёры могут ответить); допущения (отрасль может стать конкурентоспособной, у защиты есть срок окончания); приоритеты (обучение или расходы на исследования как альтернативы).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-15',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['economic-integration'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how the formation of a customs union between two neighbouring countries could lead to trade creation and trade diversion. [10 marks]\n' +
        '(b) Discuss whether a customs union will always increase the economic welfare of its members. [15 marks]',
      ru: '(a) Объясните, как образование таможенного союза (customs union) между двумя соседними странами может привести к торговому созданию (trade creation) и торговому отклонению (trade diversion). [10 баллов]\n' +
        '(b) Обсудите, всегда ли таможенный союз повышает экономическое благосостояние (economic welfare) его членов. [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines a customs union as a free trade area with a common external tariff on imports from non-members.\n' +
        '(a) 1 mark: defines trade creation as the replacement of higher-cost domestic output or imports with cheaper imports from a member.\n' +
        '(a) 1 mark: defines trade diversion as the switch of imports from a lower-cost non-member to a higher-cost member, because of the tariff structure.\n' +
        '(a) 1 mark: trade creation: tariffs between members are removed, so cheaper goods from a partner replace domestic production, which lowers prices and raises consumption.\n' +
        '(a) 1 mark: the welfare gain from creation: resources move to the lower-cost producer, and consumers buy more at lower prices.\n' +
        '(a) 1 mark: trade diversion: the common external tariff applies to non-members, so a member can become the cheapest supplier even though a non-member is more efficient.\n' +
        '(a) 1 mark: the welfare loss from diversion: imports now cost more than before, and the government loses tariff revenue from the non-member.\n' +
        '(a) 1 mark: a labelled diagram of the domestic market with the non-member world price and the partner price, showing the tariffs before and after the union.\n' +
        '(a) 1 mark: the diagram shows imports switching to the partner after the union, with the trade created and the trade diverted areas labelled.\n' +
        '(a) 1 mark: a real-world example: the Gulf Cooperation Council (GCC) customs union and its common external tariff, applying both effects to that example.\n' +
        '(b) 1 mark: knowledge: defines economic welfare as the well-being of consumers, producers and the government, measured by total surplus and the efficiency of resource use.\n' +
        '(b) 1 mark: knowledge: defines the common external tariff as the single tariff that all members apply to imports from non-members.\n' +
        '(b) 1 mark: analysis: trade creation raises welfare because cheaper imports from partners lower prices and increase consumption.\n' +
        '(b) 1 mark: analysis: trade creation moves production to the more efficient partner, so resources are used more efficiently.\n' +
        '(b) 1 mark: analysis: trade diversion reduces welfare because imports come from a higher-cost partner instead of a lower-cost non-member, so the extra cost is a loss.\n' +
        '(b) 1 mark: analysis: members lose tariff revenue on trade with the partner, so government spending may fall or other taxes may need to rise.\n' +
        '(b) 1 mark: analysis: a larger market can bring economies of scale, more competition and investment, which raise productivity over the long run.\n' +
        '(b) 1 mark: analysis: the net effect compares the gain from creation (the cost gap between domestic producers and the partner) with the loss from diversion (the extra cost of buying from the partner rather than the non-member).\n' +
        '(b) 1 mark: application: uses the GCC customs union to ask whether member suppliers are low-cost, so that creation is likely to outweigh diversion.\n' +
        '(b) 1 mark: application: uses a union whose partners are high-cost producers, or whose external tariff is high, to test whether diversion is likely to be the larger effect.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement that a customs union will not always increase welfare, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): weighs the size of creation against diversion; the answer depends on the costs of member and non-member suppliers and on the level of the common external tariff.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): considers stakeholders: consumers gain from lower prices; less efficient domestic producers may lose; government loses tariff revenue; non-member exporters lose.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): considers the time frame (short-run effects on prices and trade flows against long-run dynamic gains) and the assumption that members agree on the external tariff and other policies.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement, supported by reasoning: a customs union raises welfare only when creation outweighs diversion and the external tariff is low; the priorities (consumers against protected producers) are stated.',
      ru: '(a) 1 балл: определяет таможенный союз (customs union) как зону свободной торговли (free trade area) с общим внешним тарифом на импорт из стран, не входящих в союз.\n' +
        '(a) 1 балл: определяет торговое создание (trade creation) как замену более дорогого отечественного производства или импорта более дешёвым импортом из страны-участницы.\n' +
        '(a) 1 балл: определяет торговое отклонение (trade diversion) как переключение импорта с более дешёвого поставщика, не входящего в союз, на более дорогого участника из-за структуры тарифов.\n' +
        '(a) 1 балл: торговое создание: тарифы между участниками отменяются, поэтому более дешёвые товары партнёра вытесняют отечественное производство, что снижает цены и повышает потребление.\n' +
        '(a) 1 балл: выигрыш благосостояния от создания: ресурсы переходят к более эффективному производителю, а потребители покупают больше по более низким ценам.\n' +
        '(a) 1 балл: торговое отклонение: общий внешний тариф действует на страны, не входящие в союз, поэтому участник может стать самым дешёвым поставщиком, хотя страна вне союза эффективнее.\n' +
        '(a) 1 балл: потери благосостояния от отклонения: импорт теперь стоит дороже, а государство теряет тарифные поступления от страны, не входящей в союз.\n' +
        '(a) 1 балл: размеченная диаграмма внутреннего рынка с мировой ценой страны вне союза и ценой партнёра, с тарифами до и после образования союза.\n' +
        '(a) 1 балл: диаграмма показывает, что после создания союза импорт переключается на партнёра, с отмеченными зонами торгового создания и торгового отклонения.\n' +
        '(a) 1 балл: пример из реальной экономики: таможенный союз GCC (Gulf Cooperation Council) и его общий внешний тариф; применение обоих эффектов к этому примеру.\n' +
        '(b) 1 балл: знание: определяет экономическое благосостояние (economic welfare) как благополучие потребителей, производителей и государства, измеряемое суммарным излишком и эффективностью использования ресурсов.\n' +
        '(b) 1 балл: знание: определяет общий внешний тариф (common external tariff) как единый тариф, который все участники применяют к импорту из стран, не входящих в союз.\n' +
        '(b) 1 балл: анализ: торговое создание повышает благосостояние, потому что более дешёвый импорт от партнёров снижает цены и увеличивает потребление.\n' +
        '(b) 1 балл: анализ: торговое создание переносит производство к более эффективному партнёру, поэтому ресурсы используются эффективнее.\n' +
        '(b) 1 балл: анализ: торговое отклонение снижает благосостояние, потому что импорт идёт от более дорогого партнёра вместо более дешёвого поставщика вне союза, и эти дополнительные издержки являются потерей.\n' +
        '(b) 1 балл: анализ: участники теряют тарифные поступления от торговли с партнёром, поэтому государственные расходы могут сократиться или придётся повысить другие налоги.\n' +
        '(b) 1 балл: анализ: более крупный рынок может дать эффект масштаба, большую конкуренцию и инвестиции, которые повышают производительность в долгосрочном периоде.\n' +
        '(b) 1 балл: анализ: итоговый эффект сравнивает выигрыш от создания (разница издержек между отечественными производителями и партнёром) с потерей от отклонения (дополнительные издержки покупки у партнёра вместо страны вне союза).\n' +
        '(b) 1 балл: применение: использует таможенный союз GCC, чтобы проверить, являются ли поставщики стран-участниц низкозатратными и вероятно ли, что создание перевесит отклонение.\n' +
        '(b) 1 балл: применение: использует союз, партнёры которого производят с высокими издержками или у которого высок общий внешний тариф, чтобы проверить, вероятно ли, что отклонение окажется большим эффектом.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение, что таможенный союз не всегда повышает благосостояние, и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сопоставляет масштаб создания и отклонения; ответ зависит от издержек поставщиков внутри и вне союза и от уровня общего внешнего тарифа.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны: потребители выигрывают от более низких цен; менее эффективные отечественные производители могут проиграть; государство теряет тарифные доходы; экспортёры вне союза проигрывают.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): учитывает временной горизонт (краткосрочные эффекты на цены и торговые потоки против долгосрочных динамических выгод) и допущение, что участники согласуют общий внешний тариф и другую политику.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение с обоснованием: таможенный союз повышает благосостояние, только если создание перевешивает отклонение и внешний тариф низкий; приоритеты (потребители против защищённых производителей) указаны.',
    },
    hints: [
      {
        en: 'Definitions: customs union (a free trade area with a common external tariff), trade creation, trade diversion, economic welfare.',
        ru: 'Определения: таможенный союз (customs union) как зона свободной торговли с общим внешним тарифом, торговое создание (trade creation), торговое отклонение (trade diversion), экономическое благосостояние (economic welfare).',
      },
      {
        en: 'Explanation: a labelled diagram of the domestic market before and after the union; show partner imports replacing domestic output (creation) or replacing cheaper imports from a non-member (diversion), with the tariff removed for the partner only.',
        ru: 'Объяснение: размеченная диаграмма внутреннего рынка до и после создания союза; покажите, как импорт партнёра вытесняет отечественное производство (создание) или более дешёвый импорт из страны вне союза (отклонение); тариф отменён только для партнёра.',
      },
      {
        en: 'Real-world example: the Gulf Cooperation Council (GCC) customs union and its common external tariff.',
        ru: 'Пример из реальной экономики: таможенный союз GCC (Gulf Cooperation Council) и его общий внешний тариф.',
      },
      {
        en: 'Evaluation: short run (lower prices, shifts in trade) versus long run (scale, competition, investment); stakeholders (consumers, domestic producers, the government losing tariff revenue, non-member exporters); assumptions (the size of creation compared with diversion, the level of the common external tariff); priorities (consumer welfare against protection of producers).',
        ru: 'Оценка: краткосрочный период (более низкие цены, перемены в торговых потоках) и долгосрочный период (масштаб, конкуренция, инвестиции); заинтересованные стороны (потребители, отечественные производители, государство, которое теряет тарифные доходы, экспортёры вне союза); допущения (соотношение создания и отклонения, уровень общего внешнего тарифа); приоритеты (благосостояние потребителей против защиты производителей).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-16',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['exchange-rates', 'balance-of-payments'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how an appreciation of the domestic currency could affect the current account balance. [10 marks]\n' +
        '(b) Discuss whether a country with a persistent current account deficit should allow its currency to depreciate. [15 marks]',
      ru: '(a) Объясните, как удорожание валюты (appreciation) может повлиять на сальдо счёта текущих операций (current account). [10 баллов]\n' +
        '(b) Обсудите, должна ли страна с устойчивым дефицитом счёта текущих операций допускать удешевление валюты (depreciation). [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines appreciation as a rise in the value of the domestic currency, so one unit buys more of another currency.\n' +
        '(a) 1 mark: defines the current account as the balance of trade in goods and services plus net income and net transfers.\n' +
        '(a) 1 mark: an appreciation makes exports dearer for foreign buyers, measured in foreign currency.\n' +
        '(a) 1 mark: an appreciation makes imports cheaper for domestic buyers, measured in the domestic currency.\n' +
        '(a) 1 mark: foreign buyers switch to cheaper alternatives, so export volumes fall, while cheaper imports raise import volumes.\n' +
        '(a) 1 mark: if demand for exports and imports is elastic, the volume effects outweigh the price effects, so the trade balance and the current account worsen over time.\n' +
        '(a) 1 mark: a labelled foreign exchange market diagram with the exchange rate (AED per USD) on the vertical axis and the quantity of US dollars on the horizontal axis, with demand and supply curves labelled.\n' +
        '(a) 1 mark: the diagram shows the AED price of the dollar falling from the initial equilibrium to a new equilibrium, which is an appreciation of the dirham.\n' +
        '(a) 1 mark: a real-world example: a country whose currency gained value and whose manufactured exports lost market share.\n' +
        '(a) 1 mark: application: links the example to the current account, showing that the trade balance worsened because export volumes fell and import volumes rose.\n' +
        '(b) 1 mark: knowledge: defines depreciation as a fall in the value of a currency under a floating exchange rate, so one unit buys less of another currency.\n' +
        '(b) 1 mark: knowledge: defines the J-curve as the short-run worsening, followed by a long-run improvement, in the trade balance after a depreciation.\n' +
        '(b) 1 mark: analysis: a depreciation makes exports cheaper and imports dearer, which may switch demand towards domestic goods and improve the current account (expenditure switching).\n' +
        '(b) 1 mark: analysis: the improvement depends on elasticities: only if export and import volumes respond enough does the trade balance improve.\n' +
        '(b) 1 mark: analysis: in the short run import prices rise at once while volumes adjust slowly, so the balance may worsen first, which gives the J-curve.\n' +
        '(b) 1 mark: analysis: higher import prices add to inflation and reduce the real incomes of households that buy many imported goods.\n' +
        '(b) 1 mark: analysis: a depreciation raises the domestic-currency cost of foreign-currency debt, which can harm firms and the government.\n' +
        '(b) 1 mark: analysis: if domestic prices and wages rise after the depreciation, the real exchange rate moves back towards its old level, so the gain in competitiveness fades.\n' +
        '(b) 1 mark: application: uses a country whose deficit comes from imports of energy and food, where demand is inelastic, so a depreciation mainly raises prices.\n' +
        '(b) 1 mark: application: uses an example of a country that let its currency fall after its deficit grew, and checks whether exports rose quickly enough.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement on whether depreciation is the right response, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): compares the short-run worsening (the J-curve) with the long-run gain in competitiveness.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): considers stakeholders: exporters gain; importers, households and borrowers in foreign currency lose; the inflation target may be harder to meet.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): the judgement depends on the cause of the deficit (low competitiveness or excess domestic spending), on price elasticities, and on whether the country has a floating rate or a currency peg.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement, supported by reasoning, on whether depreciation should be allowed, with the conditions and priorities stated (for example, inflation control and the risk of foreign debt).',
      ru: '(a) 1 балл: определяет удорожание валюты (appreciation) как рост стоимости национальной валюты, при котором на одну единицу покупается больше другой валюты.\n' +
        '(a) 1 балл: определяет счёт текущих операций (current account) как баланс торговли товарами и услугами плюс чистый доход и чистые трансферты.\n' +
        '(a) 1 балл: удорожание делает экспорт дороже для зарубежных покупателей в пересчёте на их валюту.\n' +
        '(a) 1 балл: удорожание делает импорт дешевле для отечественных покупателей в национальной валюте.\n' +
        '(a) 1 балл: зарубежные покупатели переходят на более дешёвые альтернативы, поэтому объём экспорта падает, а более дешёвый импорт увеличивает объём импорта.\n' +
        '(a) 1 балл: если спрос на экспорт и импорт эластичен, эффект объёмов перевешивает эффект цен, поэтому торговый баланс и счёт текущих операций со временем ухудшаются.\n' +
        '(a) 1 балл: размеченная диаграмма рынка иностранной валюты: по вертикальной оси обменный курс (exchange rate) в дирхамах за доллар США (AED per USD), по горизонтальной количество долларов США; кривые спроса и предложения подписаны.\n' +
        '(a) 1 балл: диаграмма показывает, что цена доллара в дирхамах падает от исходного равновесия к новому равновесию, то есть дирхам удорожается.\n' +
        '(a) 1 балл: пример из реальной экономики: страна, валюта которой выросла в цене, а обрабатывающий экспорт потерял долю рынка.\n' +
        '(a) 1 балл: применение: связывает пример со счётом текущих операций, показывая, что торговый баланс ухудшился, потому что объём экспорта упал, а объём импорта вырос.\n' +
        '(b) 1 балл: знание: определяет удешевление валюты (depreciation) как падение стоимости валюты при плавающем курсе, при котором на одну единицу покупается меньше другой валюты.\n' +
        '(b) 1 балл: знание: определяет J-кривую (J-curve) как краткосрочное ухудшение, за которым следует долгосрочное улучшение торгового баланса после удешевления.\n' +
        '(b) 1 балл: анализ: удешевление делает экспорт дешевле, а импорт дороже, что может переключить спрос на отечественные товары и улучшить счёт текущих операций (переключение расходов, expenditure switching).\n' +
        '(b) 1 балл: анализ: улучшение зависит от эластичности: только если объёмы экспорта и импорта достаточно реагируют, торговый баланс улучшается.\n' +
        '(b) 1 балл: анализ: в краткосрочном периоде цены импорта растут сразу, а объёмы подстраиваются медленно, поэтому баланс может сначала ухудшиться, что и даёт J-кривую.\n' +
        '(b) 1 балл: анализ: более высокие цены импорта усиливают инфляцию и снижают реальные доходы домохозяйств, которые покупают много импортных товаров.\n' +
        '(b) 1 балл: анализ: удешевление повышает стоимость долга в иностранной валюте в пересчёте на национальную валюту, что может навредить фирмам и государству.\n' +
        '(b) 1 балл: анализ: если цены и зарплаты внутри страны растут после удешевления, реальный обменный курс возвращается к прежнему уровню, и выигрыш в конкурентоспособности исчезает.\n' +
        '(b) 1 балл: применение: использует страну, дефицит которой связан с импортом энергии и продовольствия, где спрос неэластичен, поэтому удешевление в основном повышает цены.\n' +
        '(b) 1 балл: применение: использует пример страны, которая допустила падение валюты после роста дефицита, и проверяет, быстро ли вырос экспорт.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение о том, является ли удешевление правильным ответом, и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сравнивает краткосрочное ухудшение (J-кривую) с долгосрочным выигрышем в конкурентоспособности.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны: экспортёры выигрывают; импортёры, домохозяйства и заёмщики в иностранной валюте проигрывают; цель по инфляции может стать труднее достижимой.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): суждение зависит от причины дефицита (низкая конкурентоспособность или избыточные расходы внутри страны), от ценовых эластичностей и от того, плавающий курс у страны или фиксированная привязка (peg).\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение с обоснованием о том, стоит ли допускать удешевление, с указанием условий и приоритетов (например, контроль инфляции и риск внешнего долга).',
    },
    hints: [
      {
        en: 'Definitions: appreciation (a rise in the value of a currency), depreciation, current account, J-curve.',
        ru: 'Определения: удорожание валюты (appreciation), удешевление валюты (depreciation), счёт текущих операций (current account), J-кривая (J-curve).',
      },
      {
        en: 'Explanation: the chain from appreciation to dearer exports and cheaper imports, then lower export volumes and higher import volumes, then a weaker current account in the long run; draw a labelled foreign exchange market diagram (AED per USD) for (a) and a J-curve for (b).',
        ru: 'Объяснение: цепочка от удорожания к более дорогому экспорту и более дешёвому импорту, затем к падению объёмов экспорта и росту объёмов импорта и к ухудшению счёта текущих операций в долгосрочном периоде; нарисуйте размеченную диаграмму рынка валюты (AED за USD) для части (a) и J-кривую для части (b).',
      },
      {
        en: 'Real-world example: a country whose currency gained value and whose manufactured exports lost market share, or one that let its currency fall after its deficit grew.',
        ru: 'Пример из реальной экономики: страна, валюта которой выросла в цене, а обрабатывающий экспорт потерял долю рынка; или страна, которая допустила падение валюты после роста дефицита.',
      },
      {
        en: 'Evaluation: short run versus long run (the J-curve: the balance may worsen first); stakeholders (exporters, importers, households, firms with foreign-currency debt, the government); assumptions (price elasticities of demand for exports and imports, the cause of the deficit, the exchange rate system); priorities (external balance against inflation and living standards).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (J-кривая: баланс может сначала ухудшиться); заинтересованные стороны (экспортёры, импортёры, домохозяйства, фирмы с долгом в иностранной валюте, государство); допущения (ценовые эластичности спроса на экспорт и импорт, причина дефицита, режим валютного курса); приоритеты (внешний баланс против инфляции и уровня жизни).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-17',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['balance-of-payments', 'fiscal-policy'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how an expansionary fiscal policy could lead to a worse current account balance. [10 marks]\n' +
        '(b) Discuss whether a government with a budget deficit and a current account deficit should cut its spending to reduce the current account deficit. [15 marks]',
      ru: '(a) Объясните, как экспансионистская фискальная политика (expansionary fiscal policy) может привести к ухудшению сальдо счёта текущих операций (current account). [10 баллов]\n' +
        '(b) Обсудите, должно ли правительство, у которого есть бюджетный дефицит (budget deficit) и дефицит счёта текущих операций, сокращать расходы, чтобы уменьшить дефицит счёта текущих операций. [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines expansionary fiscal policy as a rise in government spending or a cut in taxes that raises aggregate demand.\n' +
        '(a) 1 mark: defines the current account as the balance of trade in goods and services plus net income and net transfers, so a worse balance means a larger deficit or a smaller surplus.\n' +
        '(a) 1 mark: higher government spending or lower taxes raises household incomes and aggregate demand.\n' +
        '(a) 1 mark: the multiplier means that national income rises by more than the first injection of spending.\n' +
        '(a) 1 mark: as income rises, households and firms buy more imported goods, because part of the extra income is spent on imports.\n' +
        '(a) 1 mark: exports do not rise by the same amount, so the trade balance worsens.\n' +
        '(a) 1 mark: a labelled AD/AS diagram with the price level on the vertical axis and real GDP on the horizontal axis, with AD shifting right.\n' +
        '(a) 1 mark: the diagram shows real national income rising to a new equilibrium, which is the source of the extra imports.\n' +
        '(a) 1 mark: a real-world example: a government that increases public investment in a boom, which raises imports of machinery and consumer goods.\n' +
        '(a) 1 mark: application: links the example to the chain, showing that the rise in import spending was larger than the rise in export earnings, so the current account worsened.\n' +
        '(b) 1 mark: knowledge: defines a budget deficit as the situation in which government spending is greater than tax revenue.\n' +
        '(b) 1 mark: knowledge: defines an expenditure-reducing policy as a policy that lowers total spending in the economy, and with it the demand for imports.\n' +
        '(b) 1 mark: analysis: cutting government spending lowers aggregate demand and income, so imports fall and the current account improves.\n' +
        '(b) 1 mark: analysis: the size of the improvement depends on the marginal propensity to import: a country with high import leakage gains more from the cut.\n' +
        '(b) 1 mark: analysis: lower government borrowing may ease upward pressure on interest rates and on the currency, which supports exports.\n' +
        '(b) 1 mark: analysis: spending cuts reduce output and raise unemployment in the short run, especially when the economy is already below potential output (a negative output gap).\n' +
        '(b) 1 mark: analysis: cuts to education, infrastructure or health reduce productive capacity and competitiveness in the long run, which may worsen the current account later.\n' +
        '(b) 1 mark: analysis: as output falls, tax revenue falls and welfare spending rises, so the budget deficit falls by less than planned.\n' +
        '(b) 1 mark: application: uses the context of the country: if the deficit comes from strong demand for imported consumer goods, cutting spending targets the cause; if it comes from weak export competitiveness, cutting spending does less good.\n' +
        '(b) 1 mark: application: uses an example of a government that cut spending during a recession, and checks whether output and imports both fell.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement on whether spending should be cut, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): compares the short-run fall in imports with the long-run effects on competitiveness and growth.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): considers stakeholders: households that depend on public services, firms in government supply chains, foreign lenders and the government budget.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): the judgement depends on the cause of the two deficits (a fiscal deficit may add to the current account deficit), the position of the economy in the business cycle, and whether spending or taxes are changed.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement, supported by reasoning, that answers the question, with the conditions and priorities stated (for example, cutting unproductive spending while protecting investment that raises export capacity).',
      ru: '(a) 1 балл: определяет экспансионистскую фискальную политику (expansionary fiscal policy) как рост государственных расходов или снижение налогов, которое повышает совокупный спрос (aggregate demand, AD).\n' +
        '(a) 1 балл: определяет счёт текущих операций (current account) как баланс торговли товарами и услугами плюс чистый доход и чистые трансферты; ухудшение баланса означает больший дефицит или меньший профицит.\n' +
        '(a) 1 балл: более высокие государственные расходы или более низкие налоги повышают доходы домохозяйств и совокупный спрос.\n' +
        '(a) 1 балл: мультипликатор (multiplier) означает, что национальный доход растёт больше, чем первоначальное увеличение расходов (injection).\n' +
        '(a) 1 балл: по мере роста доходов домохозяйства и фирмы покупают больше импортных товаров, потому что часть дополнительного дохода уходит на импорт.\n' +
        '(a) 1 балл: экспорт не растёт на такую же величину, поэтому торговый баланс ухудшается.\n' +
        '(a) 1 балл: размеченная диаграмма AD/AS: по вертикальной оси уровень цен, по горизонтальной реальный ВВП (real GDP); кривая AD сдвигается вправо.\n' +
        '(a) 1 балл: диаграмма показывает рост реального национального дохода до нового равновесия, и именно это вызывает дополнительный импорт.\n' +
        '(a) 1 балл: пример из реальной экономики: правительство увеличивает государственные инвестиции в период подъёма, что повышает импорт оборудования и потребительских товаров.\n' +
        '(a) 1 балл: применение: связывает пример с цепочкой, показывая, что рост расходов на импорт превысил рост экспортных доходов, и счёт текущих операций ухудшился.\n' +
        '(b) 1 балл: знание: определяет бюджетный дефицит (budget deficit) как ситуацию, когда государственные расходы превышают налоговые поступления.\n' +
        '(b) 1 балл: знание: определяет политику сокращения расходов (expenditure-reducing policy) как политику, которая снижает совокупные расходы в экономике и вместе с ними спрос на импорт.\n' +
        '(b) 1 балл: анализ: сокращение государственных расходов снижает совокупный спрос и доходы, поэтому импорт падает, а счёт текущих операций улучшается.\n' +
        '(b) 1 балл: анализ: размер улучшения зависит от предельной склонности к импорту (marginal propensity to import, MPM): страна с высокой утечкой в импорт выигрывает от сокращения больше.\n' +
        '(b) 1 балл: анализ: меньшие государственные заимствования могут ослабить давление на процентные ставки и курс валюты, что поддерживает экспорт.\n' +
        '(b) 1 балл: анализ: сокращение расходов снижает выпуск и повышает безработицу в краткосрочном периоде, особенно если экономика уже ниже потенциального выпуска (отрицательный разрыв выпуска).\n' +
        '(b) 1 балл: анализ: сокращение расходов на образование, инфраструктуру или здравоохранение снижает производственный потенциал и конкурентоспособность в долгосрочном периоде, что позже может ухудшить счёт текущих операций.\n' +
        '(b) 1 балл: анализ: при падении выпуска налоговые поступления снижаются, а расходы на пособия растут, поэтому бюджетный дефицит сокращается меньше, чем запланировано.\n' +
        '(b) 1 балл: применение: использует контекст страны: если дефицит вызван сильным спросом на импортные потребительские товары, сокращение расходов действует прямо на причину; если он вызван слабой конкурентоспособностью экспорта, эффект меньше.\n' +
        '(b) 1 балл: применение: использует пример правительства, которое сократило расходы в период рецессии, и проверяет, упали ли выпуск и импорт.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение о том, стоит ли сокращать расходы, и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сравнивает краткосрочное снижение импорта с долгосрочным влиянием на конкурентоспособность и рост.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны: домохозяйства, зависящие от государственных услуг, фирмы в цепочках поставок государства, иностранных кредиторов и бюджет правительства.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): суждение зависит от причины обоих дефицитов (бюджетный дефицит может усиливать дефицит счёта текущих операций), от положения экономики в деловом цикле (business cycle) и от того, меняются ли расходы или налоги.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение с обоснованием, которое отвечает на вопрос, с указанием условий и приоритетов (например, сокращение непродуктивных расходов при защите инвестиций, которые повышают экспортные возможности).',
    },
    hints: [
      {
        en: 'Definitions: expansionary fiscal policy (higher spending or lower taxes), budget deficit, current account, marginal propensity to import (MPM).',
        ru: 'Определения: экспансионистская фискальная политика (expansionary fiscal policy) как рост расходов или снижение налогов, бюджетный дефицит (budget deficit), счёт текущих операций (current account), предельная склонность к импорту (MPM).',
      },
      {
        en: 'Explanation: the chain from higher government spending or lower taxes, to higher national income through the multiplier, to more imports; draw an AD/AS diagram with AD shifting right and note the import leakage.',
        ru: 'Объяснение: цепочка от роста государственных расходов или снижения налогов к росту национального дохода через мультипликатор и к большему импорту; нарисуйте диаграмму AD/AS со сдвигом AD вправо и отметьте утечку в импорт.',
      },
      {
        en: 'Real-world example: a government that expanded spending or cut taxes during a boom and then saw its trade deficit widen.',
        ru: 'Пример из реальной экономики: правительство увеличило расходы или снизило налоги в период подъёма, а затем дефицит торгового баланса вырос.',
      },
      {
        en: 'Evaluation: short run (demand and jobs rise now) versus long run (a deficit that must be financed); stakeholders (importers, domestic firms, the government budget, foreign lenders); assumptions (the marginal propensity to import, spare capacity, the effect on the exchange rate of higher interest rates); priorities (growth and jobs against the external balance).',
        ru: 'Оценка: краткосрочный период (спрос и занятость растут сейчас) и долгосрочный период (дефицит, который придётся финансировать); заинтересованные стороны (импортёры, отечественные фирмы, бюджет правительства, иностранные кредиторы); допущения (предельная склонность к импорту, наличие свободных мощностей, влияние более высоких процентных ставок на курс валюты); приоритеты (рост и занятость против внешнего баланса).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-18',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['sustainable-development', 'externalities'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how a carbon tax could correct the negative externality caused by carbon emissions from electricity production. [10 marks]\n' +
        '(b) Discuss whether a developing country should give priority to economic growth over environmental protection. [15 marks]',
      ru: '(a) Объясните, как углеродный налог (carbon tax) может исправить отрицательный внешний эффект (negative externality) от выбросов углерода при производстве электроэнергии. [10 баллов]\n' +
        '(b) Обсудите, должна ли развивающаяся страна отдавать приоритет экономическому росту перед охраной окружающей среды. [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines an externality as a cost or benefit that falls on third parties and is not included in the market price.\n' +
        '(a) 1 mark: defines a carbon tax as a tax per unit of carbon emissions.\n' +
        '(a) 1 mark: carbon emissions impose external costs on society, such as damage to health and the climate, which producers do not pay, so marginal social cost is above marginal private cost.\n' +
        '(a) 1 mark: without correction the market produces too much electricity from carbon-intensive sources, so the market quantity is above the socially optimal quantity.\n' +
        '(a) 1 mark: a carbon tax equal to the external cost per unit raises the costs of producers, so the supply curve shifts up by the amount of the tax.\n' +
        '(a) 1 mark: the higher cost reduces the output of carbon-intensive electricity and encourages cleaner sources, so the quantity falls towards the socially optimal level.\n' +
        '(a) 1 mark: a labelled externality diagram with price on the vertical axis and quantity on the horizontal axis, showing marginal private cost (supply), marginal social cost above it and the demand curve.\n' +
        '(a) 1 mark: the diagram shows the tax moving the supply curve up to the marginal social cost, the market quantity equal to the optimum, and the welfare loss removed.\n' +
        '(a) 1 mark: a real-world example: an emissions trading scheme or a carbon price that applies to power generation, such as the EU Emissions Trading System.\n' +
        '(a) 1 mark: application: links the example to the explanation: the carbon price raised the cost of carbon-intensive power and encouraged cleaner generation.\n' +
        '(b) 1 mark: knowledge: defines sustainable development as development that meets present needs without limiting the options of future generations.\n' +
        '(b) 1 mark: knowledge: defines economic growth as an increase in real GDP over time.\n' +
        '(b) 1 mark: analysis: growth raises incomes, which can pay for health, education and cleaner technology, so growth can make environmental protection affordable later.\n' +
        '(b) 1 mark: analysis: the case for growth first: poor households need income now, and strict environmental rules may slow job creation and raise costs for firms in the short run.\n' +
        '(b) 1 mark: analysis: pollution imposes external costs on health and productivity; ignoring them lowers growth in the long run.\n' +
        '(b) 1 mark: analysis: natural capital (forests, water, fisheries) is the resource base for future growth, so its depletion reduces future output and options.\n' +
        '(b) 1 mark: analysis: the trade-off depends on the type of damage: local pollution harms the poor most, which is a social dimension of sustainability.\n' +
        '(b) 1 mark: analysis: some environmental damage, such as the loss of species or a changed climate, cannot be reversed by later growth, which makes early action more important.\n' +
        '(b) 1 mark: application: uses the context of a developing economy that relies on fossil fuels or natural resources, to test the trade-off.\n' +
        '(b) 1 mark: application: uses an example such as an emissions trading scheme or a renewable energy subsidy in a developing country, to test whether growth and environmental goals can be combined.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement on the priority, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): compares short-run growth gains with long-run costs (health, resources and climate risk).\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): considers stakeholders: the poor, employers, future generations and the government budget.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): the judgement depends on whether green technology is available and affordable, whether carbon leakage and international finance can help, and on the design of the policy (for example, returning carbon revenue to households).\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement, supported by reasoning, that weighs the economic, social and environmental dimensions together and states the conditions under which it holds.',
      ru: '(a) 1 балл: определяет внешний эффект (externality) как издержку или выгоду, которые ложатся на третьих лиц и не входят в рыночную цену.\n' +
        '(a) 1 балл: определяет углеродный налог (carbon tax) как налог на единицу выбросов углерода.\n' +
        '(a) 1 балл: выбросы углерода создают внешние издержки для общества, например ущерб здоровью и климату, которые производители не оплачивают; поэтому предельные общественные издержки (marginal social cost) выше предельных частных (marginal private cost).\n' +
        '(a) 1 балл: без корректировки рынок производит слишком много электроэнергии из источников с высокими выбросами, поэтому рыночный объём выше социально оптимального.\n' +
        '(a) 1 балл: углеродный налог, равный внешним издержкам на единицу, повышает издержки производителей, поэтому кривая предложения сдвигается вверх на величину налога.\n' +
        '(a) 1 балл: более высокие издержки сокращают выпуск электроэнергии из углеродоёмких источников и стимулируют более чистые источники, поэтому объём падает до социально оптимального уровня.\n' +
        '(a) 1 балл: размеченная диаграмма внешнего эффекта: по вертикальной оси цена, по горизонтальной количество; предельные частные издержки (кривая предложения), предельные общественные издержки выше них и кривая спроса.\n' +
        '(a) 1 балл: диаграмма показывает, что налог сдвигает кривую предложения вверх до предельных общественных издержек, рыночный объём становится равным оптимальному, а чистые потери общества (deadweight loss) устраняются.\n' +
        '(a) 1 балл: пример из реальной экономики: система торговли квотами на выбросы или цена на углерод в электроэнергетике, например система торговли квотами на выбросы ЕС (EU Emissions Trading System).\n' +
        '(a) 1 балл: применение: связывает пример с объяснением: цена на углерод повысила стоимость электроэнергии из углеродоёмких источников и стимулировала более чистую генерацию.\n' +
        '(b) 1 балл: знание: определяет устойчивое развитие (sustainable development) как развитие, которое удовлетворяет нынешние потребности, не ограничивая возможности будущих поколений.\n' +
        '(b) 1 балл: знание: определяет экономический рост (economic growth) как рост реального ВВП (real GDP) во времени.\n' +
        '(b) 1 балл: анализ: рост повышает доходы, которые могут оплатить здравоохранение, образование и более чистые технологии, поэтому рост позже делает защиту окружающей среды доступной.\n' +
        '(b) 1 балл: анализ: аргумент в пользу роста в первую очередь: бедным домохозяйствам нужен доход сейчас, а строгие экологические правила в краткосрочном периоде могут замедлить создание рабочих мест и повысить издержки фирм.\n' +
        '(b) 1 балл: анализ: загрязнение создаёт внешние издержки для здоровья и производительности; игнорирование их снижает рост в долгосрочном периоде.\n' +
        '(b) 1 балл: анализ: природный капитал (леса, вода, рыбные запасы) является базой ресурсов для будущего роста, поэтому его истощение сокращает будущий выпуск и возможности.\n' +
        '(b) 1 балл: анализ: компромисс зависит от типа ущерба: местное загрязнение сильнее всего бьёт по бедным, и это социальное измерение устойчивого развития.\n' +
        '(b) 1 балл: анализ: часть экологического ущерба, например утрата видов или изменение климата, не может быть исправлена последующим ростом, поэтому раннее действие важнее.\n' +
        '(b) 1 балл: применение: использует контекст развивающейся экономики, которая зависит от ископаемого топлива или природных ресурсов, чтобы проверить компромисс.\n' +
        '(b) 1 балл: применение: использует пример, например систему торговли квотами на выбросы или субсидии на возобновляемую энергетику в развивающейся стране, чтобы проверить, можно ли сочетать цели роста и экологии.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение о приоритете и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сравнивает краткосрочные выгоды роста с долгосрочными издержками (здоровье, ресурсы и климатический риск).\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны: бедных, работодателей, будущие поколения и бюджет правительства.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): суждение зависит от того, доступны ли зелёные технологии и по какой цене, могут ли помочь утечка углерода (carbon leakage) и международное финансирование и от устройства политики (например, возврата доходов от углеродного налога домохозяйствам).\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение с обоснованием, которое учитывает экономическое, социальное и экологическое измерения вместе и указывает условия, при которых оно верно.',
    },
    hints: [
      {
        en: 'Definitions: externality (a cost or benefit falling on third parties), carbon tax (a tax per unit of emissions), sustainable development (meeting present needs without limiting future options).',
        ru: 'Определения: внешний эффект (externality) как издержка или выгода третьих лиц, углеродный налог (carbon tax) как налог на единицу выбросов, устойчивое развитие (sustainable development) как удовлетворение нынешних потребностей без ограничения будущих возможностей.',
      },
      {
        en: 'Explanation: a labelled externality diagram with marginal private cost as supply, marginal social cost above it and the market quantity above the optimum; the carbon tax shifts supply up by the external cost, so the quantity falls to the optimum and the welfare loss is removed.',
        ru: 'Объяснение: размеченная диаграмма внешнего эффекта: предельные частные издержки как предложение, предельные общественные издержки выше них, рыночный объём выше оптимального; налог сдвигает предложение вверх на величину внешних издержек, поэтому объём падает до оптимального, а чистые потери общества (deadweight loss) исчезают.',
      },
      {
        en: 'Real-world example: an emissions trading scheme, such as the EU Emissions Trading System, which puts a price on carbon.',
        ru: 'Пример из реальной экономики: система торговли квотами на выбросы, например система ЕС (EU Emissions Trading System), которая задаёт цену на углерод.',
      },
      {
        en: 'Evaluation: short run (higher power prices now) versus long run (cleaner capacity later); stakeholders (low-income households, energy-intensive firms, taxpayers, future generations); assumptions (carbon leakage, the design and use of revenue, the price elasticity of demand for electricity); priorities (economic, social and environmental goals together).',
        ru: 'Оценка: краткосрочный период (более высокие цены на электроэнергию сейчас) и долгосрочный период (более чистые мощности позже); заинтересованные стороны (домохозяйства с низким доходом, энергоёмкие фирмы, налогоплательщики, будущие поколения); допущения (утечка углерода, устройство и использование доходов, ценовая эластичность спроса на электроэнергию); приоритеты (экономические, социальные и экологические цели вместе).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-19',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['measuring-development', 'barriers-to-growth-and-development'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain why GNI per capita may not give an accurate measure of living standards when two countries are compared. [10 marks]\n' +
        '(b) Discuss whether a lack of human capital is a greater barrier to development than a lack of physical capital. [15 marks]',
      ru: '(a) Объясните, почему валовой национальный доход на душу населения (GNI per capita) может не давать точной оценки уровня жизни при сравнении двух стран. [10 баллов]\n' +
        '(b) Обсудите, является ли нехватка человеческого капитала (human capital) большим барьером для развития, чем нехватка физического капитала (physical capital). [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines GNI per capita as gross national income divided by population, which gives the average income per person.\n' +
        '(a) 1 mark: defines purchasing power parity (PPP) as the exchange rate at which the same basket of goods costs the same in two countries.\n' +
        '(a) 1 mark: an average hides the distribution of income: a high GNI per capita can exist alongside high inequality, so most people may be much poorer than the average.\n' +
        '(a) 1 mark: the Gini coefficient shows how unequal incomes are; two countries with the same average can offer very different living standards to most people.\n' +
        '(a) 1 mark: GNI at market exchange rates understates what money buys in lower-priced economies, so PPP figures are needed for a fair comparison.\n' +
        '(a) 1 mark: GNI does not include unpaid household work, subsistence farming and much of the informal economy, so living standards may be understated or distorted.\n' +
        '(a) 1 mark: GNI measures income only; it omits health, education, the environment and freedom, which shape how people live.\n' +
        '(a) 1 mark: the Human Development Index combines life expectancy, schooling and income, so it can show differences that income alone misses.\n' +
        '(a) 1 mark: a real-world example: two countries with similar GNI per capita but very different life expectancy or school enrolment.\n' +
        '(a) 1 mark: application: links the example to the explanation: a single income average misses differences in health, education and inequality, so the comparison is inaccurate.\n' +
        '(b) 1 mark: knowledge: defines human capital as the skills, knowledge and health that raise the productivity of workers.\n' +
        '(b) 1 mark: knowledge: defines physical capital as machinery, equipment, buildings and infrastructure used in production.\n' +
        '(b) 1 mark: analysis: low human capital (poor health and schooling) lowers productivity, so new machinery adds little output, which makes human capital a barrier.\n' +
        '(b) 1 mark: analysis: low physical capital limits output: workers have few tools and little infrastructure, so output per worker stays low.\n' +
        '(b) 1 mark: analysis: low incomes limit saving and investment in physical capital; the poverty trap links low income to low investment.\n' +
        '(b) 1 mark: analysis: physical capital can be brought in through foreign direct investment, but human capital takes years to build and is harder to import, which supports the claim.\n' +
        '(b) 1 mark: analysis: the two are complements: skilled workers need machines, and machines need trained workers, so a shortage of one reduces the value of the other.\n' +
        '(b) 1 mark: analysis: corruption and weak property rights deter investment in both kinds of capital, so the binding constraint may be institutional rather than either form of capital.\n' +
        '(b) 1 mark: application: uses the context of a country with low school enrolment and weak health services, or one with few machines, to decide which barrier binds.\n' +
        '(b) 1 mark: application: uses an example of a country that invested in education and health, or in roads and power, to test which barrier was more binding.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): compares short-run effects (foreign investment adds capital quickly) with long-run effects (skills take years and determine how well capital is used).\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): considers stakeholders (workers, employers, foreign investors and government) and the role of institutions.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): the answer depends on which barrier binds: if skills are scarce while capital is available, human capital binds; if skills are present but machines are missing, physical capital binds; the quality of institutions decides how well either is used.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement, supported by reasoning, that answers the question and states the priority (for example, investment in human capital for the long run, with physical capital where it is the binding constraint).',
      ru: '(a) 1 балл: определяет валовой национальный доход на душу населения (GNI per capita) как общий доход страны, делённый на численность населения, то есть средний доход на одного человека.\n' +
        '(a) 1 балл: определяет паритет покупательной способности (purchasing power parity, PPP) как обменный курс, при котором одна и та же корзина товаров стоит одинаково в двух странах.\n' +
        '(a) 1 балл: средняя величина скрывает распределение доходов: высокий GNI на душу населения может сочетаться с высоким неравенством, и большинство людей может быть заметно беднее среднего.\n' +
        '(a) 1 балл: коэффициент Джини (Gini coefficient) показывает, насколько неравны доходы; две страны с одинаковым средним доходом могут предлагать большинству людей очень разный уровень жизни.\n' +
        '(a) 1 балл: GNI по рыночным обменным курсам занижает покупательную силу денег в странах с более низкими ценами, поэтому для честного сравнения нужны показатели по PPP.\n' +
        '(a) 1 балл: GNI не учитывает неоплачиваемый домашний труд, натуральное сельское хозяйство и значительную часть неформальной экономики, поэтому уровень жизни может быть занижен или искажён.\n' +
        '(a) 1 балл: GNI измеряет только доход; он не учитывает здоровье, образование, окружающую среду и свободу, которые определяют, как живут люди.\n' +
        '(a) 1 балл: индекс развития человеческого потенциала (Human Development Index) объединяет продолжительность жизни, образование и доход, поэтому он может показать различия, которые доход не видит.\n' +
        '(a) 1 балл: пример из реальной экономики: две страны с похожим GNI на душу населения, но очень разной продолжительностью жизни или охватом школьным образованием.\n' +
        '(a) 1 балл: применение: связывает пример с объяснением: один средний показатель дохода не учитывает различия в здоровье, образовании и неравенстве, поэтому сравнение неточно.\n' +
        '(b) 1 балл: знание: определяет человеческий капитал (human capital) как навыки, знания и здоровье, которые повышают производительность работников.\n' +
        '(b) 1 балл: знание: определяет физический капитал (physical capital) как машины, оборудование, здания и инфраструктуру, которые используются в производстве.\n' +
        '(b) 1 балл: анализ: низкий человеческий капитал (плохое здоровье и мало школьного образования) снижает производительность, поэтому новые машины добавляют мало выпуска; это делает человеческий капитал барьером.\n' +
        '(b) 1 балл: анализ: нехватка физического капитала ограничивает выпуск: у работников мало инструментов и инфраструктуры, поэтому выпуск на одного работника остаётся низким.\n' +
        '(b) 1 балл: анализ: низкие доходы ограничивают сбережения и инвестиции в физический капитал; ловушка бедности (poverty trap) связывает низкий доход с низкими инвестициями.\n' +
        '(b) 1 балл: анализ: физический капитал можно привлечь через прямые иностранные инвестиции (foreign direct investment), а человеческий капитал создаётся годами и труднее импортируется, что поддерживает утверждение.\n' +
        '(b) 1 балл: анализ: эти факторы дополняют друг друга: квалифицированным работникам нужны машины, а машинам нужны обученные работники, поэтому нехватка одного снижает ценность другого.\n' +
        '(b) 1 балл: анализ: коррупция и слабые права собственности (property rights) отпугивают инвестиции в оба вида капитала, поэтому связывающим ограничением может быть институциональное, а не какой-либо из видов капитала.\n' +
        '(b) 1 балл: применение: использует контекст страны с низким охватом школьным образованием и слабым здравоохранением или с малым количеством машин, чтобы определить, какой барьер связывает сильнее всего.\n' +
        '(b) 1 балл: применение: использует пример страны, которая инвестировала в образование и здравоохранение или в дороги и энергетику, чтобы проверить, какой барьер был важнее.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сравнивает краткосрочные эффекты (иностранные инвестиции быстро добавляют капитал) с долгосрочными (навыки формируются годами и определяют, насколько эффективно используется капитал).\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны (работников, работодателей, иностранных инвесторов и государство), а также роль институтов.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): ответ зависит от того, какой барьер связывает: если навыков не хватает при наличии капитала, связывает человеческий капитал; если навыки есть, а машин нет, связывает физический капитал; качество институтов определяет, насколько хорошо используется то и другое.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение с обоснованием, которое отвечает на вопрос и называет приоритет (например, инвестиции в человеческий капитал в долгосрочном периоде, а физический капитал там, где он является главным ограничением).',
    },
    hints: [
      {
        en: 'Definitions: GNI per capita (gross national income divided by population), purchasing power parity (PPP), human capital (skills and health), physical capital (machinery and infrastructure).',
        ru: 'Определения: GNI на душу населения (GNI per capita), паритет покупательной способности (purchasing power parity, PPP), человеческий капитал (human capital) как навыки и здоровье, физический капитал (physical capital) как машины и инфраструктура.',
      },
      {
        en: 'Explanation: for (a), explain each limitation as a chain: an average hides inequality, market exchange rates understate what money buys in poorer countries, and unpaid and informal work is missed; for (b), show how low human capital and low physical capital each reduce output per worker. A labelled diagram is optional; a short table of indicators can make the point.',
        ru: 'Объяснение: для части (a) объясните каждое ограничение цепочкой: средний показатель скрывает неравенство, рыночные курсы занижают покупательную силу денег в бедных странах, неоплачиваемый и неформальный труд не учитывается; для части (b) покажите, как низкий человеческий и физический капитал снижают выпуск на одного работника. Размеченная диаграмма не обязательна; короткая таблица показателей тоже поможет.',
      },
      {
        en: 'Real-world example: two countries with similar GNI per capita but very different life expectancy or school enrolment.',
        ru: 'Пример из реальной экономики: две страны с похожим GNI на душу населения, но очень разной продолжительностью жизни или охватом школьным образованием.',
      },
      {
        en: 'Evaluation: short run versus long run (an income figure changes quickly, while health and education change slowly); stakeholders (poor households, governments, donors comparing countries); assumptions (data quality, the PPP conversion, the weight given to each dimension); priorities (choose the indicator that fits the question).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (показатель дохода меняется быстро, а здоровье и образование меняются медленно); заинтересованные стороны (бедные домохозяйства, правительства, доноры, сравнивающие страны); допущения (качество данных, пересчёт по PPP, вес каждого измерения); приоритеты (выбор показателя, который отвечает на вопрос).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-20',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['policies-for-growth-and-development', 'benefits-of-trade'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how specialisation according to comparative advantage can raise the living standards of a low-income country. [10 marks]\n' +
        '(b) Discuss whether export-led growth and trade liberalisation are the most effective policies for a low-income country to achieve sustained development. [15 marks]',
      ru: '(a) Объясните, как специализация в соответствии с принципом сравнительного преимущества (comparative advantage) может повысить уровень жизни в стране с низким уровнем дохода. [10 баллов]\n' +
        '(b) Обсудите, являются ли экспортно-ориентированный рост (export-led growth) и либерализация торговли (trade liberalisation) наиболее эффективными политиками для страны с низким уровнем дохода, стремящейся к устойчивому развитию. [15 баллов]',
    },
    markscheme: {
      en: '(a) 1 mark: defines comparative advantage as the ability to produce a good at a lower opportunity cost than another producer.\n' +
        '(a) 1 mark: defines specialisation as concentrating production on the goods where the country has a comparative advantage and trading for the rest.\n' +
        '(a) 1 mark: the country moves its resources to the good with the lower opportunity cost, so its output of that good rises.\n' +
        '(a) 1 mark: trade lets the country exchange the surplus of that good for goods it does not produce efficiently, so it can consume more than it could before trade.\n' +
        '(a) 1 mark: the larger range of goods available raises real income for the same resources.\n' +
        '(a) 1 mark: larger export markets allow economies of scale, which lower average cost, and competition from foreign firms raises efficiency over time.\n' +
        '(a) 1 mark: a labelled production possibility curve (PPC) showing the production point on the curve, with both axes and both goods labelled.\n' +
        '(a) 1 mark: the diagram shows that with trade the consumption point lies outside the production possibility curve, because the surplus is exchanged for imports.\n' +
        '(a) 1 mark: a real-world example: a low-income economy that built export industries in labour-intensive manufacturing or agricultural produce, where it had a comparative advantage.\n' +
        '(a) 1 mark: application: links the example to the explanation: the export industry raised incomes through specialisation, scale and competition.\n' +
        '(b) 1 mark: knowledge: defines export-led growth as growth driven by the expansion of exports, often of manufactured goods, which earns the foreign currency needed to import machinery and technology.\n' +
        '(b) 1 mark: knowledge: defines trade liberalisation as the reduction of tariffs, quotas and other barriers to trade.\n' +
        '(b) 1 mark: analysis: export-led growth raises demand for the output of the country, builds export industries and earns foreign currency for imports of capital goods.\n' +
        '(b) 1 mark: analysis: trade liberalisation lowers input costs for domestic firms and widens their markets, which supports economies of scale and competition.\n' +
        '(b) 1 mark: analysis: if domestic firms are uncompetitive, liberalisation can drive them out and raise unemployment in import-competing industries.\n' +
        '(b) 1 mark: analysis: a country that depends on primary commodities may face falling and volatile prices and little value added, so export growth may not be sustained.\n' +
        '(b) 1 mark: analysis: investment in education, health and infrastructure raises human capital and lowers the costs of trade, so it may be needed for export growth to work.\n' +
        '(b) 1 mark: analysis: export-led growth depends on demand in foreign markets: if the world economy slows, exports fall, so the strategy is exposed to external shocks.\n' +
        '(b) 1 mark: application: uses the example of a low-income economy that depends on one commodity export, to test whether export growth alone is sustainable.\n' +
        '(b) 1 mark: application: uses an example of a country that combined trade openness with investment in skills and industrial policy, to test the claim.\n' +
        '(b) 1 mark: evaluation (limited reasoning): states a judgement on the claim, with one reason.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): compares short-run export gains and foreign currency with long-run effects on institutions, skills and inequality.\n' +
        '(b) 1 mark: evaluation (appropriate reasoning): considers stakeholders: exporters, workers in import-competing industries, the poor, the government budget (lost tariff revenue) and foreign investors.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): the judgement depends on the binding constraint (skills, infrastructure or institutions), on the quality of institutions and on whether the gains are shared through policy.\n' +
        '(b) 1 mark: evaluation (effective and balanced reasoning): clear final judgement, supported by reasoning, that treats trade policy as one tool among several; the policies work best as a package, and the conditions and priorities are stated.',
      ru: '(a) 1 балл: определяет сравнительное преимущество (comparative advantage) как способность производить товар с более низкими альтернативными издержками, чем у другого производителя.\n' +
        '(a) 1 балл: определяет специализацию (specialisation) как концентрацию производства на товарах, в которых страна имеет сравнительное преимущество, и торговлю ради остальных товаров.\n' +
        '(a) 1 балл: страна переносит ресурсы на товар с более низкими альтернативными издержками, поэтому выпуск этого товара растёт.\n' +
        '(a) 1 балл: торговля позволяет обменять излишек этого товара на товары, которые страна производит неэффективно, поэтому потребление может превысить то, что было возможно без торговли.\n' +
        '(a) 1 балл: большой набор доступных товаров повышает реальный доход при тех же ресурсах.\n' +
        '(a) 1 балл: большие экспортные рынки дают эффект масштаба, который снижает средние издержки, а конкуренция с иностранными фирмами со временем повышает эффективность.\n' +
        '(a) 1 балл: размеченная кривая производственных возможностей (production possibility curve, PPC): точка производства на кривой, подписаны обе оси и оба товара.\n' +
        '(a) 1 балл: диаграмма показывает, что при торговле точка потребления лежит вне кривой производственных возможностей, потому что излишек обменивается на импорт.\n' +
        '(a) 1 балл: пример из реальной экономики: страна с низким уровнем дохода, которая создала экспортные отрасли в трудоёмком производстве или сельскохозяйственной продукции, где у неё было сравнительное преимущество.\n' +
        '(a) 1 балл: применение: связывает пример с объяснением: экспортная отрасль повысила доходы за счёт специализации, масштаба и конкуренции.\n' +
        '(b) 1 балл: знание: определяет экспортно-ориентированный рост (export-led growth) как рост, который опирается на расширение экспорта, часто промышленных товаров, и приносит иностранную валюту для импорта машин и технологий.\n' +
        '(b) 1 балл: знание: определяет либерализацию торговли (trade liberalisation) как снижение тарифов, квот и других барьеров в торговле.\n' +
        '(b) 1 балл: анализ: экспортно-ориентированный рост повышает спрос на продукцию страны, создаёт экспортные отрасли и приносит иностранную валюту для импорта капитальных товаров.\n' +
        '(b) 1 балл: анализ: либерализация торговли снижает издержки ресурсов для отечественных фирм и расширяет их рынки, что поддерживает эффект масштаба и конкуренцию.\n' +
        '(b) 1 балл: анализ: если отечественные фирмы неконкурентоспособны, либерализация может вытеснить их с рынка и повысить безработицу в отраслях, которые конкурируют с импортом.\n' +
        '(b) 1 балл: анализ: страна, которая зависит от сырьевых товаров, может столкнуться с падающими и нестабильными ценами и малой добавленной стоимостью, поэтому рост экспорта может быть неустойчивым.\n' +
        '(b) 1 балл: анализ: инвестиции в образование, здравоохранение и инфраструктуру повышают человеческий капитал и снижают издержки торговли, поэтому они могут понадобиться, чтобы экспортный рост заработал.\n' +
        '(b) 1 балл: анализ: экспортный рост зависит от спроса на зарубежных рынках: если мировая экономика замедляется, экспорт падает, поэтому стратегия уязвима для внешних шоков.\n' +
        '(b) 1 балл: применение: использует пример страны с низким уровнем дохода, которая зависит от экспорта одного сырьевого товара, чтобы проверить, устойчив ли рост только за счёт экспорта.\n' +
        '(b) 1 балл: применение: использует пример страны, которая сочетала открытость торговли с инвестициями в навыки и промышленную политику (industrial policy), чтобы проверить утверждение.\n' +
        '(b) 1 балл: оценка, ограниченное обоснование (limited reasoning): выносит суждение об утверждении и приводит одну причину.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование (appropriate reasoning): сравнивает краткосрочные выгоды экспорта и иностранной валюты с долгосрочными эффектами для институтов, навыков и неравенства.\n' +
        '(b) 1 балл: оценка, соответствующее обоснование: учитывает заинтересованные стороны: экспортёров, работников отраслей, конкурирующих с импортом, бедных, бюджет правительства (потеря тарифных доходов) и иностранных инвесторов.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование (effective and balanced reasoning): суждение зависит от того, какое ограничение связывает (навыки, инфраструктура или институты), от качества институтов и от того, распределяются ли выгоды через политику.\n' +
        '(b) 1 балл: оценка, эффективное и сбалансированное обоснование: ясное итоговое суждение с обоснованием, которое рассматривает торговую политику как один из инструментов; политики работают лучше всего в комплексе, а условия и приоритеты указаны.',
    },
    hints: [
      {
        en: 'Definitions: comparative advantage (a lower opportunity cost than another producer), specialisation, export-led growth, trade liberalisation.',
        ru: 'Определения: сравнительное преимущество (comparative advantage) как более низкие альтернативные издержки, чем у другого производителя, специализация (specialisation), экспортно-ориентированный рост (export-led growth), либерализация торговли (trade liberalisation).',
      },
      {
        en: 'Explanation: a labelled production possibility curve for the country without and with trade; specialisation moves production to the good with the lower opportunity cost, and trade lets the country consume beyond its own curve; add the dynamic gains (economies of scale, technology, competition).',
        ru: 'Объяснение: размеченная кривая производственных возможностей (production possibility curve) для страны без торговли и с торговлей; специализация переносит производство к товару с более низкими альтернативными издержками, а торговля позволяет потреблять за пределами собственной кривой; добавьте динамические выгоды (эффект масштаба, технологии, конкуренция).',
      },
      {
        en: 'Real-world example: a low-income economy that opened its markets and built export industries in goods where it had a comparative advantage.',
        ru: 'Пример из реальной экономики: страна с низким уровнем дохода, которая открыла рынки и создала экспортные отрасли в товарах, где у неё было сравнительное преимущество.',
      },
      {
        en: 'Evaluation: short run (export earnings rise quickly) versus long run (skills, institutions and diversification take years); stakeholders (exporters, workers in import-competing industries, consumers, the government budget); assumptions (the country can build competitive industries, institutions are sound, commodity prices are stable); priorities (export growth against education, health, infrastructure and equity).',
        ru: 'Оценка: краткосрочный период (доходы от экспорта растут быстро) и долгосрочный период (навыки, институты и диверсификация требуют лет); заинтересованные стороны (экспортёры, работники отраслей, конкурирующих с импортом, потребители, бюджет правительства); допущения (страна может создать конкурентоспособные отрасли, институты надёжны, цены на сырьё стабильны); приоритеты (экспортный рост против образования, здравоохранения, инфраструктуры и равенства).',
      },
    ],
    origin: 'original',
    minutes: 25,
  },
];
