import type { Question } from '../../../../src/contract/types';

// Option A, A.3: original questions in the style of Paper 1. Structured questions carry 10 marks in total,
// extended questions 10 marks each with a plan, a markband and a model answer. Numeric answers were computed
// with a script (see the scratchpad) and checked twice. Stimulus data are illustrative, not real surveys.
export const questions: Question[] = [
  {
    id: 'a3-sq1',
    subject: 'geo',
    topicIds: ['a3-water-scarcity'],
    paper: 'P1',
    marks: 10,
    command: 'Calculate',
    stimulus: {
      en: 'Illustrative data (not real countries): Country A has 9,000 million m³ of renewable freshwater a year and 6.0 million people. Country B has 1,800 million m³ a year and 3.0 million people.',
      ru: 'Условные данные (не реальные страны): страна A получает 9 000 млн м³ возобновляемой пресной воды в год при населении 6,0 млн человек. Страна B — 1 800 млн м³ в год при населении 3,0 млн человек.',
    },
    prompt: {
      en: '(a) Calculate the renewable freshwater per person per year for Country A. Show your working. (2 marks)\n\n(b) Using the Falkenmark indicator, classify Country A and Country B. (3 marks)\n\n(c) Distinguish between physical water scarcity and economic water scarcity. Use one example to support your answer. (5 marks)',
      ru: '(a) Рассчитайте объём возобновляемой пресной воды на человека в год для страны A. Покажите ход расчёта. (2 балла)\n\n(b) Используя индикатор Фалькенмарк, отнесите страну A и страну B к категориям. (3 балла)\n\n(c) Различите физический и экономический дефицит воды. Приведите один пример в подтверждение. (5 баллов)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for the method, 9,000 million ÷ 6.0 million; 1 mark for 1,500 m³ per person per year.\n\n(b) 3 marks: 1 mark for each country placed correctly (A in water stress, 1,000 to 1,700 m³; B in water scarcity, 500 to 1,000 m³); 1 mark for naming the thresholds used (1,700 and 1,000 m³).\n\n(c) 5 marks: up to 3 marks for the distinction (1 mark for physical scarcity as too little natural water for demand; 1 mark for economic scarcity as water that exists but cannot be reached or paid for, because of investment, infrastructure or income; 1 mark for a clear contrast of the causes); up to 2 marks for the example (1 mark for a relevant example; 1 mark for linking it to the distinction with a figure, a year and a source, for example 2.2 billion people without safely managed drinking-water services in 2022, WHO 2023).',
      ru: '(a) 2 балла: 1 балл за метод, 9 000 млн ÷ 6,0 млн; 1 балл за ответ 1 500 м³ на человека в год.\n\n(b) 3 балла: по 1 баллу за правильную категорию каждой страны (A — водный стресс, 1 000–1 700 м³; B — дефицит воды, 500–1 000 м³) и 1 балл за названные пороги (1 700 и 1 000 м³).\n\n(c) 5 баллов: до 3 баллов за различие (1 балл — физический дефицит как недостаток природной воды относительно спроса; 1 балл — экономический дефицит как вода, которая есть, но недоступна или не оплачивается из-за инвестиций, инфраструктуры или доходов; 1 балл за ясный контраст причин); до 2 баллов за пример (1 балл за подходящий пример; 1 балл за связь с различием и цифрой с годом и источником, например 2,2 млрд человек без безопасно управляемых услуг водоснабжения в 2022 году, ВОЗ, 2023).',
    },
    model: {
      en: '(a) 9,000 million m³ ÷ 6.0 million people = 1,500 m³ per person per year.\n\n(b) Country A: 1,500 m³ lies between 1,000 and 1,700, so it is in water stress. Country B: 1,800 million m³ ÷ 3.0 million = 600 m³ per person per year, which lies between 500 and 1,000, so it is in water scarcity.\n\n(c) Physical water scarcity means the natural supply of renewable freshwater is too small or too variable for demand. Economic water scarcity means water exists, but people cannot get it because there is no investment in pipes, treatment or institutions, or because they cannot pay. For example, in 2022 about 2.2 billion people did not have safely managed drinking-water services (WHO, 2023). This gap reflects infrastructure and income as much as rainfall, so it is economic rather than physical scarcity.',
      ru: '(a) 9 000 млн м³ ÷ 6,0 млн человек = 1 500 м³ на человека в год.\n\n(b) Страна A: 1 500 м³ лежит между 1 000 и 1 700, значит, страна испытывает водный стресс. Страна B: 1 800 млн м³ ÷ 3,0 млн = 600 м³ на человека в год, что лежит между 500 и 1 000, значит, там дефицит воды.\n\n(c) Физический дефицит воды означает, что природные запасы возобновляемой пресной воды слишком малы или слишком изменчивы для спроса. Экономический дефицит воды означает, что вода есть, но люди не могут её получить из-за отсутствия инвестиций в трубы, очистку или институты либо потому, что не могут заплатить. Например, в 2022 году около 2,2 млрд человек не имели безопасно управляемых услуг питьевого водоснабжения (ВОЗ, 2023). Этот разрыв отражает инфраструктуру и доходы не меньше, чем осадки, поэтому это скорее экономический, а не физический дефицит.',
    },
    answer: '1500',
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a3-sq2',
    subject: 'geo',
    topicIds: ['a3-water-scarcity'],
    paper: 'P1',
    marks: 10,
    command: 'Calculate',
    stimulus: {
      en: 'Illustrative data (not a real river): nitrate concentration at four sites along one river, in mg/L as nitrate ion. Site 1 (upstream, forest): 4. Site 2 (below a village): 22. Site 3 (below intensive arable farmland): 58. Site 4 (after a reservoir): 18.',
      ru: 'Условные данные (не реальная река): концентрация нитратов в четырёх точках одной реки, мг/л в пересчёте на ион нитрата. Точка 1 (выше по течению, лес): 4. Точка 2 (ниже деревни): 22. Точка 3 (ниже интенсивных пахотных полей): 58. Точка 4 (после водохранилища): 18.',
    },
    prompt: {
      en: '(a) Calculate the mean nitrate concentration of the four sites. Show your working. (2 marks)\n\n(b) Identify the site above the WHO guideline value for nitrate, and explain how fertiliser use at that site could raise its nitrate level. (3 marks)\n\n(c) Suggest two management responses that reduce nitrate pollution from farmland, and justify one of them. (5 marks)',
      ru: '(a) Рассчитайте среднюю концентрацию нитратов по четырём точкам. Покажите ход расчёта. (2 балла)\n\n(b) Назовите точку, которая превышает норматив ВОЗ для нитратов, и объясните, как внесение удобрений на этой точке может повысить уровень нитратов. (3 балла)\n\n(c) Предложите две меры управления, которые снижают загрязнение нитратами с сельхозугодий, и обоснуйте одну из них. (5 баллов)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for the method, (4 + 22 + 58 + 18) ÷ 4; 1 mark for 25.5 mg/L.\n\n(b) 3 marks: 1 mark for site 3 (58 mg/L is above the WHO guideline of 50 mg/L as nitrate ion); up to 2 marks for the explanation: fertiliser applied above crop needs is not all taken up, so the surplus leaches through the soil or runs off into the river.\n\n(c) 5 marks: up to 2 marks for each response (1 mark to identify it, 1 mark to explain how it reduces nitrate); 1 mark for a justified choice, for example precision fertiliser application works at source, or buffer strips trap nitrate before it reaches the water. Accept other valid responses, such as cover crops or timing applications away from heavy rain.',
      ru: '(a) 2 балла: 1 балл за метод, (4 + 22 + 58 + 18) ÷ 4; 1 балл за ответ 25,5 мг/л.\n\n(b) 3 балла: 1 балл за точку 3 (58 мг/л выше норматива ВОЗ 50 мг/л в пересчёте на ион нитрата); до 2 баллов за объяснение: удобрение, внесённое сверх потребностей культур, усваивается не полностью, поэтому избыток просачивается через почву или смывается в реку.\n\n(c) 5 баллов: до 2 баллов за каждую меру (1 балл за её название, 1 балл за объяснение, как она снижает нитраты); 1 балл за обоснованный выбор, например точное внесение удобрений действует у источника, а буферные полосы задерживают нитрат до попадания в воду. Засчитываются и другие верные меры, например покровные культуры или внесение не перед сильными дождями.',
    },
    model: {
      en: '(a) (4 + 22 + 58 + 18) ÷ 4 = 102 ÷ 4 = 25.5 mg/L.\n\n(b) Site 3 (58 mg/L) is above the WHO guideline of 50 mg/L as nitrate ion. Fertiliser applied above what crops need is not all taken up by the plants. The surplus nitrate leaches through the soil into groundwater or is washed into the river, so the concentration is highest just below the fields.\n\n(c) Response 1: buffer strips of vegetation along the river bank trap nitrate before it enters the water. Response 2: precision fertiliser application, based on soil tests and timing that matches crop needs and avoids spreading before heavy rain. Justification: precision application works at the source, so less nitrate has to be removed later by treatment.',
      ru: '(a) (4 + 22 + 58 + 18) ÷ 4 = 102 ÷ 4 = 25,5 мг/л.\n\n(b) Точка 3 (58 мг/л) превышает норматив ВОЗ 50 мг/л в пересчёте на ион нитрата. Удобрения, внесённые сверх потребностей культур, растения усваивают не полностью. Избыточный нитрат просачивается через почву в подземные воды или смывается дождём в реку, поэтому концентрация выше всего ниже полей.\n\n(c) Мера 1: буферные полосы растительности вдоль берега задерживают нитрат до того, как он попадёт в воду. Мера 2: точное внесение удобрений на основе анализа почвы, со сроками, которые совпадают с потребностями культур и не допускают внесения перед сильными дождями. Обоснование: точное внесение действует у источника, поэтому меньше нитрата приходится убирать очисткой воды позже.',
    },
    answer: '25.5',
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a3-sq3',
    subject: 'geo',
    topicIds: ['a3-water-scarcity'],
    paper: 'P1',
    marks: 10,
    command: 'Suggest',
    stimulus: {
      en: 'Illustrative data (not a real survey): 400 shallow wells were tested in one village. In 92 wells, arsenic was above 50 µg/L, the Bangladesh national standard. In 170 wells, arsenic was above 10 µg/L, the WHO guideline value.',
      ru: 'Условные данные (не реальное обследование): в одной деревне проверили 400 неглубоких скважин. В 92 скважинах мышьяк превышал 50 мкг/л — национальный стандарт Бангладеш. В 170 скважинах мышьяк превышал 10 мкг/л — норматив ВОЗ.',
    },
    prompt: {
      en: '(a) Define the term diffuse pollution. (2 marks)\n\n(b) Explain why arsenic in the groundwater of some river deltas is a natural hazard rather than an industrial one. (3 marks)\n\n(c) Using the stimulus, calculate the percentage of wells above 50 µg/L. Then suggest one response that would reduce the villagers’ exposure to arsenic, and justify it. (5 marks)',
      ru: '(a) Дайте определение термину «рассеянное загрязнение» (diffuse pollution). (2 балла)\n\n(b) Объясните, почему мышьяк в подземных водах некоторых речных дельт — природная опасность, а не промышленная. (3 балла)\n\n(c) По данным из условия рассчитайте процент скважин, где мышьяк выше 50 мкг/л. Затем предложите одну меру, которая снизит воздействие мышьяка на жителей, и обоснуйте её. (5 баллов)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for many dispersed sources over a wide area, with no single outlet; 1 mark for a named example, such as fertiliser or pesticide runoff from fields, or urban runoff.\n\n(b) 3 marks: 1 mark for arsenic occurring naturally in the sediments of the delta; 1 mark for its release into groundwater under the chemical conditions of the aquifer; 1 mark for a link to the deltaic setting, for example river sediments deposited over time.\n\n(c) 5 marks: 2 marks for the calculation, 92 ÷ 400 × 100 (1 mark for the method, 1 mark for 23%); up to 2 marks for a response with an explanation, for example a switch to deeper wells, which tap water with much less arsenic; 1 mark for a justification with data, for example arsenic above 50 µg/L was found in 27% of shallow wells against 1% of deep wells (BGS, 2001).',
      ru: '(a) 2 балла: 1 балл за множество рассеянных источников на большой территории без одного выпуска; 1 балл за названный пример, например сток удобрений и пестицидов с полей или городской сток.\n\n(b) 3 балла: 1 балл за природное происхождение мышьяка в отложениях дельты; 1 балл за его выход в подземные воды при химических условиях водоносного горизонта; 1 балл за связь с дельтовой обстановкой, например с речными отложениями, накопленными за долгое время.\n\n(c) 5 баллов: 2 балла за расчёт 92 ÷ 400 × 100 (1 балл за метод, 1 балл за ответ 23%); до 2 баллов за меру с объяснением, например переход на более глубокие скважины, в которых намного меньше мышьяка; 1 балл за обоснование данными, например: мышьяк выше 50 мкг/л найден в 27% неглубоких скважин против 1% глубоких (BGS, 2001).',
    },
    model: {
      en: '(a) Diffuse pollution comes from many dispersed sources over a wide area, such as fertiliser and pesticide runoff from fields or urban runoff. It has no single outlet to inspect.\n\n(b) Arsenic is a natural part of some river sediments. Under the chemical conditions of the aquifer, it dissolves from the sediments into the groundwater. The source is geological, so closing a factory would not remove it.\n\n(c) 92 ÷ 400 × 100 = 23%. Response: move the village to deeper wells, which tap aquifers with much less arsenic. Justification: the BGS survey found arsenic above 50 µg/L in 27% of shallow wells against 1% of deep wells, so moving to deeper sources targets the cause rather than the symptoms.',
      ru: '(a) Рассеянное загрязнение — это загрязнение от множества разбросанных источников на большой территории, например стоки удобрений и пестицидов с полей или городской сток. У него нет одного выпуска, который можно проверить.\n\n(b) Мышьяк — естественная часть некоторых речных отложений. В химических условиях водоносного горизонта он переходит из отложений в подземные воды. Источник геологический, поэтому закрытие завода не устранит проблему.\n\n(c) 92 ÷ 400 × 100 = 23%. Мера: перевод деревни на более глубокие скважины, которые захватывают водоносные горизонты с намного меньшим содержанием мышьяка. Обоснование: обследование BGS показало мышьяк выше 50 мкг/л в 27% неглубоких скважин против 1% глубоких, поэтому переход на более глубокие источники устраняет причину, а не последствия.',
    },
    answer: '23',
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a3-eq1',
    subject: 'geo',
    topicIds: ['a3-water-scarcity'],
    paper: 'P1',
    marks: 10,
    command: 'Examine',
    prompt: {
      en: 'Examine the view that water scarcity is mainly a physical problem.',
      ru: 'Рассмотрите мнение, что дефицит воды — в первую очередь физическая проблема.',
    },
    hints: [
      {
        en: 'Plan: define physical and economic water scarcity, then state the Falkenmark thresholds (below 1,700, 1,000 and 500 m³ per person per year).',
        ru: 'План: определите физический и экономический дефицит воды, затем назовите пороги Фалькенмарк (ниже 1 700, 1 000 и 500 м³ на человека в год).',
      },
      {
        en: 'For the physical view: the Falkenmark indicator compares renewable water with population, and droughts cut the supply (meteorological, then hydrological drought).',
        ru: 'За физическую трактовку: индикатор Фалькенмарк сравнивает возобновляемую воду с населением, а засухи сокращают поставки (сначала метеорологическая, затем гидрологическая засуха).',
      },
      {
        en: 'Against it: economic scarcity can exist with enough water in the environment. In 2022, 2.2 billion people did not have safely managed drinking-water services (WHO, 2023).',
        ru: 'Против: экономический дефицит может существовать и при достаточном количестве воды в природе. В 2022 году 2,2 млрд человек не имели безопасно управляемых услуг питьевого водоснабжения (ВОЗ, 2023).',
      },
      {
        en: 'Judgement (top band): weigh the natural limits against management, using a named case, for example Cape Town in 2017–2018, where falling dam levels met demand management and pressure control.',
        ru: 'Вывод (высший уровень): сопоставьте природные ограничения с управлением на примере названного кейса, например Кейптауна в 2017–2018 годах, где падение уровня водохранилищ сочеталось с управлением спросом и регулированием давления.',
      },
    ],
    model: {
      en: 'Water scarcity is partly physical. A country with little renewable water per person, below the 1,000 m³ threshold of the Falkenmark indicator, will struggle even with good management, and droughts cut supply further. However, the view that scarcity is mainly physical overlooks economic scarcity. In 2022, 2.2 billion people still lacked safely managed drinking-water services, a gap that reflects infrastructure and income as much as rainfall. Cape Town in 2017–2018 shows both sides: dam levels were falling, but demand management and pressure control, and the 16% water losses the City reported against a national average of 36%, show how far management can change the outcome. On balance, physical limits set the starting point, but economic access decides who goes without water, so the view is only partly right.',
      ru: 'Дефицит воды отчасти физический. Страна с малым количеством возобновляемой воды на человека, ниже порога 1 000 м³ по индикатору Фалькенмарк, будет испытывать трудности даже при хорошем управлении, а засухи ещё сильнее сокращают поставки. Однако мнение, что дефицит в первую очередь физический, не учитывает экономический дефицит. В 2022 году 2,2 млрд человек по-прежнему не имели безопасно управляемых услуг питьевого водоснабжения, и этот разрыв отражает инфраструктуру и доходы не меньше, чем осадки. Кейптаун в 2017–2018 годах показывает обе стороны: уровень водохранилищ падал, но управление спросом и регулирование давления, а также сообщаемые городом потери воды в 16% при среднем по стране показателе 36%, показывают, насколько управление может изменить исход. В итоге физические ограничения задают исходную точку, но именно экономический доступ определяет, кто остаётся без воды, поэтому мнение справедливо лишь отчасти.',
    },
    markscheme: {
      en: 'Level 1 (1–3 marks): describes physical or economic scarcity, with little or no use of thresholds or cases.\n\nLevel 2 (4–6 marks): explains the physical view or the economic view, using at least one threshold or one figure, but does not weigh the two.\n\nLevel 3 (7–8 marks): compares the physical and economic views with at least one dated, sourced figure, and identifies the limits of each.\n\nLevel 4 (9–10 marks): sustained examination that weighs natural limits against management and economic access, reaches a supported judgement, and uses dated, sourced evidence from a named case.',
      ru: 'Уровень 1 (1–3 балла): описывает физический или экономический дефицит, почти без пороговых значений и кейсов.\n\nУровень 2 (4–6 баллов): объясняет физический или экономический подход, используя минимум один порог или одну цифру, но не сопоставляет их.\n\nУровень 3 (7–8 баллов): сравнивает физический и экономический подходы минимум одной датированной цифрой с источником и называет ограничения каждого.\n\nУровень 4 (9–10 баллов): последовательная оценка, которая взвешивает природные ограничения, управление и экономический доступ, приходит к обоснованному выводу и опирается на датированные данные с источниками из названного кейса.',
    },
    origin: 'original',
    minutes: 30,
  },
  {
    id: 'a3-eq2',
    subject: 'geo',
    topicIds: ['a3-water-scarcity'],
    paper: 'P1',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: 'To what extent can changes in farming practice reduce eutrophication and algal blooms in a large lake?',
      ru: 'В какой степени изменения в сельскохозяйственной практике могут снизить эвтрофикацию и цветение водорослей в большом озере?',
    },
    hints: [
      {
        en: 'Plan: define eutrophication and algal bloom, then name the nutrients (nitrogen and phosphorus) and their diffuse sources on farmland.',
        ru: 'План: определите эвтрофикацию и цветение водорослей, затем назовите биогены (азот и фосфор) и их рассеянные источники на сельхозугодьях.',
      },
      {
        en: 'For: farm changes cut nutrients where they start, for example better fertiliser timing, buffer strips and manure storage.',
        ru: 'За: изменения на уровне полей сокращают поступление биогенов в самом начале, например более точные сроки внесения удобрений, буферные полосы и хранение навоза.',
      },
      {
        en: 'Against: diffuse sources are hard to measure and control, phosphorus already in soils and sediments keeps feeding blooms for years, and warm, calm weather can trigger a bloom even when inputs fall.',
        ru: 'Против: рассеянные источники трудно измерить и контролировать, фосфор, накопившийся в почве и донных отложениях, годами подпитывает цветение, а тёплая безветренная погода может вызвать цветение даже при снижении поступлений.',
      },
      {
        en: 'Judgement (top band): weigh source control against the time lag and natural factors, say under which conditions farm changes are enough, and support it with a named case and a dated figure.',
        ru: 'Вывод (высший уровень): сопоставьте контроль источников с временным лагом и природными факторами, укажите, при каких условиях изменений в сельском хозяйстве достаточно, и подкрепите вывод названным кейсом и датированной цифрой.',
      },
    ],
    model: {
      en: 'Farm changes can reduce eutrophication, but only partly. Nitrogen and phosphorus from fertiliser and manure are diffuse sources, so the most direct tool is to change field practice: apply fertiliser to match crop needs, avoid spreading before heavy rain, and keep buffer strips along watercourses. These cut the nutrient load at its start. However, phosphorus that has built up in soils and sediments keeps feeding blooms for years, and warm, calm weather can still trigger a bloom when inputs fall. Toledo’s 2014 case shows the stakes: microcystin contaminated the water supply, and a do-not-drink advisory covered about 440,000 residents of four counties (2010 figure) from 2 to 4 August (CDC MMWR, 2016). On balance, farm changes are essential but not sufficient, and they work best with treatment, monitoring and action on the nutrients already in the lake.',
      ru: 'Изменения в сельском хозяйстве могут снизить эвтрофикацию, но лишь отчасти. Азот и фосфор из удобрений и навоза — рассеянные источники, поэтому самый прямой инструмент — изменить практику на полях: вносить удобрения в соответствии с потребностями культур, не разбрасывать их перед сильными дождями и сохранять буферные полосы вдоль водотоков. Так снижается нагрузка биогенов в самом начале. Однако фосфор, накопившийся в почве и донных отложениях, годами подпитывает цветение, а тёплая безветренная погода может вызвать цветение и при снижении поступлений. Кризис в Толедо в 2014 году показывает, что на кону: микроцистин загрязнил водоснабжение, и предупреждение “не пить воду” действовало для около 440 тыс. жителей четырёх округов (данные 2010 года) со 2 по 4 августа (CDC MMWR, 2016). В итоге изменения в сельском хозяйстве необходимы, но недостаточны: они работают лучше всего вместе с очисткой воды, мониторингом и мерами против биогенов, уже накопившихся в озере.',
    },
    markscheme: {
      en: 'Level 1 (1–3 marks): describes eutrophication or farming practice with little or no link between them, and no judgement.\n\nLevel 2 (4–6 marks): explains at least one way a farm change reduces nutrients, and one limit, with limited evidence.\n\nLevel 3 (7–8 marks): weighs the effect of farm changes against the time lag or natural factors, using at least one dated, sourced figure from a named lake.\n\nLevel 4 (9–10 marks): sustained judgement on how far farm changes reduce eutrophication and algal blooms, weighing source control, legacy nutrients and weather, with dated, sourced evidence.',
      ru: 'Уровень 1 (1–3 балла): описывает эвтрофикацию или практику ведения сельского хозяйства почти без связи между ними и без вывода.\n\nУровень 2 (4–6 баллов): объясняет минимум один способ, которым изменение в сельском хозяйстве снижает биогены, и одно ограничение, с небольшим количеством примеров.\n\nУровень 3 (7–8 баллов): сопоставляет эффект изменений в сельском хозяйстве с временным лагом или природными факторами, опираясь минимум на одну датированную цифру с источником из названного озера.\n\nУровень 4 (9–10 баллов): последовательный вывод о том, в какой мере изменения в сельском хозяйстве снижают эвтрофикацию и цветение, с учётом контроля источников, накопленных биогенов и погоды, с датированными данными и источниками.',
    },
    origin: 'original',
    minutes: 30,
  },
];
