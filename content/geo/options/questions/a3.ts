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
      en: '(a) 2 marks: 1 mark for the method, 9,000 million ÷ 6.0 million; 1 mark for 1,500 m³ per person per year.\n\n(b) 3 marks: 1 mark for each country placed correctly (A in water stress, 1,000 to 1,700 m³; B in water scarcity, 500 to 1,000 m³); 1 mark for naming the thresholds used (1,700 and 1,000 m³).\n\n(c) 5 marks: up to 3 marks for the distinction (1 mark for physical scarcity as too little natural water for demand; 1 mark for economic scarcity as water that exists but cannot be reached or paid for, because of investment, infrastructure or income; 1 mark for a clear contrast of the causes); up to 2 marks for the example (1 mark for a relevant example; 1 mark for linking it to the distinction with a figure, a year and a source, for example Cape Town dam storage 27.2% and use 586 million litres/day, SAnews, 24 January 2018; explain physical supply pressure. A global drinking-water service gap alone does not diagnose economic scarcity).',
      ru: '(a) 2 балла: 1 балл за метод, 9 000 млн ÷ 6,0 млн; 1 балл за ответ 1 500 м³ на человека в год.\n\n(b) 3 балла: по 1 баллу за правильную категорию каждой страны (A — водный стресс, 1 000–1 700 м³; B — дефицит воды, 500–1 000 м³) и 1 балл за названные пороги (1 700 и 1 000 м³).\n\n(c) 5 баллов: до 3 баллов за различие (1 балл — физический дефицит как недостаток природной воды относительно спроса; 1 балл — экономический дефицит как вода, которая есть, но недоступна или не оплачивается из-за инвестиций, инфраструктуры или доходов; 1 балл за ясный контраст причин); до 2 баллов за пример (1 балл за подходящий пример; 1 балл за связь с различием и цифрой с годом и источником, например запасы водохранилищ Кейптауна 27,2% и потребление 586 млн литров/сутки, SAnews, 24 января 2018; объясните физическое давление на предложение. Один мировой разрыв в услугах водоснабжения не устанавливает экономическую причину).',
    },
    model: {
      en: '(a) 9,000 million m³ ÷ 6.0 million people = 1,500 m³ per person per year.\n\n(b) Country A: 1,500 m³ lies between 1,000 and 1,700, so it is in water stress. Country B: 1,800 million m³ ÷ 3.0 million = 600 m³ per person per year, which lies between 500 and 1,000, so it is in water scarcity.\n\n(c) Physical water scarcity means the natural supply of renewable freshwater is too small or too variable for demand. Economic water scarcity means water exists, but people cannot get it because there is no investment in pipes, treatment or institutions, or because they cannot pay. For a concrete physical-pressure example, SAnews reported Cape Town dam storage 27.2% and daily use 586 million litres on 24 January 2018, with new supply projects unable to add enough water that year. The linked case gives the original source. Economic scarcity would instead require evidence that adequate water exists but access or investment prevents its use; a global service-gap total alone cannot establish that diagnosis.',
      ru: '(a) 9 000 млн м³ ÷ 6,0 млн человек = 1 500 м³ на человека в год.\n\n(b) Страна A: 1 500 м³ лежит между 1 000 и 1 700, значит, страна испытывает водный стресс. Страна B: 1 800 млн м³ ÷ 3,0 млн = 600 м³ на человека в год, что лежит между 500 и 1 000, значит, там дефицит воды.\n\n(c) Физический дефицит воды означает, что природные запасы возобновляемой пресной воды слишком малы или слишком изменчивы для спроса. Экономический дефицит воды означает, что вода есть, но люди не могут её получить из-за отсутствия инвестиций в трубы, очистку или институты либо потому, что не могут заплатить. Конкретный пример физического давления: 24 января 2018 SAnews сообщило о запасах водохранилищ Кейптауна 27,2% и потреблении 586 млн литров в сутки; новые источники не успевали дать достаточно воды в том году. Первоисточник дан в связанном кейсе. Для экономического дефицита нужны данные, что воды достаточно, но доступ или инвестиции препятствуют её использованию; один мировой показатель разрыва в услугах этого не доказывает.',
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
      en: '(a) 2 marks: 1 mark for the method, (4 + 22 + 58 + 18) ÷ 4; 1 mark for 25.5 mg/L.\n\n(b) 3 marks: 1 mark for site 3 (58 mg/L is above the WHO guideline of 50 mg/L as nitrate ion); up to 2 marks for the explanation: fertiliser applied above crop needs is not all taken up, so the surplus leaches through the soil or runs off into the river.\n\n(c) 5 marks: up to 2 marks for each response (1 mark to identify it, 1 mark to explain how it reduces nitrate); 1 mark for a justified choice, for example precision fertiliser application works at source, or vegetated buffers can remove nitrate through plant uptake and microbial denitrification before it reaches water. Accept other valid responses, such as cover crops or timing applications away from heavy rain.',
      ru: '(a) 2 балла: 1 балл за метод, (4 + 22 + 58 + 18) ÷ 4; 1 балл за ответ 25,5 мг/л.\n\n(b) 3 балла: 1 балл за точку 3 (58 мг/л выше норматива ВОЗ 50 мг/л в пересчёте на ион нитрата); до 2 баллов за объяснение: удобрение, внесённое сверх потребностей культур, усваивается не полностью, поэтому избыток просачивается через почву или смывается в реку.\n\n(c) 5 баллов: до 2 баллов за каждую меру (1 балл за её название, 1 балл за объяснение, как она снижает нитраты); 1 балл за обоснованный выбор, например точное внесение удобрений действует у источника, а растительные буферы могут удалять нитраты поглощением растениями и микробной денитрификацией. Засчитываются и другие верные меры, например покровные культуры или внесение не перед сильными дождями.',
    },
    model: {
      en: '(a) (4 + 22 + 58 + 18) ÷ 4 = 102 ÷ 4 = 25.5 mg/L.\n\n(b) Site 3 (58 mg/L) is above the WHO guideline of 50 mg/L as nitrate ion. Fertiliser applied above what crops need is not all taken up by the plants. The surplus nitrate leaches through the soil into groundwater or is washed into the river, so the concentration is highest just below the fields.\n\n(c) Response 1: vegetated buffers along a river bank can reduce dissolved nitrate through plant uptake and microbial denitrification. Response 2: precision fertiliser application, based on soil tests and timing that matches crop needs and avoids spreading before heavy rain. Justification: precision application works at the source, so less nitrate has to be removed later by treatment.',
      ru: '(a) (4 + 22 + 58 + 18) ÷ 4 = 102 ÷ 4 = 25,5 мг/л.\n\n(b) Точка 3 (58 мг/л) превышает норматив ВОЗ 50 мг/л в пересчёте на ион нитрата. Удобрения, внесённые сверх потребностей культур, растения усваивают не полностью. Избыточный нитрат просачивается через почву в подземные воды или смывается дождём в реку, поэтому концентрация выше всего ниже полей.\n\n(c) Мера 1: буферные полосы растительности вдоль берега могут снижать растворённые нитраты за счёт поглощения растениями и микробной денитрификации. Мера 2: точное внесение удобрений на основе анализа почвы, со сроками, которые совпадают с потребностями культур и не допускают внесения перед сильными дождями. Обоснование: точное внесение действует у источника, поэтому меньше нитрата приходится убирать очисткой воды позже.',
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
      en: '(a) 2 marks: 1 mark for many dispersed sources over a wide area, with no single outlet; 1 mark for a named example, such as fertiliser or pesticide runoff from fields, or urban runoff.\n\n(b) 3 marks: 1 mark for arsenic occurring naturally in the sediments of the delta; 1 mark for its release into groundwater under the chemical conditions of the aquifer; 1 mark for a link to the deltaic setting, for example river sediments deposited over time.\n\n(c) 5 marks: 2 marks for the calculation, 92 ÷ 400 × 100 (1 mark for the method, 1 mark for 23%); up to 2 marks for a response with an explanation, for example a switch to deeper wells only after testing confirms low arsenic and microbiological safety; 1 mark for a justification with data, for example arsenic above 50 µg/L was found in 27% of shallow wells against 1% of deep wells (BGS, 2001).',
      ru: '(a) 2 балла: 1 балл за множество рассеянных источников на большой территории без одного выпуска; 1 балл за названный пример, например сток удобрений и пестицидов с полей или городской сток.\n\n(b) 3 балла: 1 балл за природное происхождение мышьяка в отложениях дельты; 1 балл за его выход в подземные воды при химических условиях водоносного горизонта; 1 балл за связь с дельтовой обстановкой, например с речными отложениями, накопленными за долгое время.\n\n(c) 5 баллов: 2 балла за расчёт 92 ÷ 400 × 100 (1 балл за метод, 1 балл за ответ 23%); до 2 баллов за меру с объяснением, например переход на более глубокие скважины после анализов, подтвердивших низкое содержание мышьяка и микробиологическую безопасность; 1 балл за обоснование данными, например: мышьяк выше 50 мкг/л найден в 27% неглубоких скважин против 1% глубоких (BGS, 2001).',
    },
    model: {
      en: '(a) Diffuse pollution comes from many dispersed sources over a wide area, such as fertiliser and pesticide runoff from fields or urban runoff. It has no single outlet to inspect.\n\n(b) Arsenic is a natural part of some river sediments. Under the chemical conditions of the aquifer, it dissolves from the sediments into the groundwater. The source is geological, so closing a factory would not remove it.\n\n(c) 92 ÷ 400 × 100 = 23%. Response: provide access to tested low-arsenic, microbiologically safe wells, including deeper wells where testing confirms safety. Justification: the BGS survey found arsenic above 50 µg/L in 27% of shallow wells against 1% of deep wells, so deeper sources are a plausible option, but the 1% exceedance shows depth alone is not a safety guarantee.',
      ru: '(a) Рассеянное загрязнение — это загрязнение от множества разбросанных источников на большой территории, например стоки удобрений и пестицидов с полей или городской сток. У него нет одного выпуска, который можно проверить.\n\n(b) Мышьяк — естественная часть некоторых речных отложений. В химических условиях водоносного горизонта он переходит из отложений в подземные воды. Источник геологический, поэтому закрытие завода не устранит проблему.\n\n(c) 92 ÷ 400 × 100 = 23%. Мера: доступ к проверенным скважинам с низким содержанием мышьяка и микробиологически безопасной водой; глубокие скважины подходят, если анализ подтвердит безопасность. Обоснование: обследование BGS показало мышьяк выше 50 мкг/л в 27% неглубоких скважин против 1% глубоких, поэтому глубокие источники заслуживают проверки, но превышение в 1% показывает, что одна глубина безопасности не гарантирует.',
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
    "en": "Distinguish physical resource shortage from inadequate access caused by infrastructure, finance or allocation.",
    "ru": "Отличи физическую нехватку ресурсов от недостаточного доступа из-за инфраструктуры, финансирования или распределения."
  },
  {
    "en": "A rainfall deficit can propagate into river or groundwater drought with a lag; the sequence and severity depend on stores, abstraction and management.",
    "ru": "Дефицит осадков может с задержкой перейти в нехватку речных или подземных вод; последовательность и сила зависят от запасов, водозабора и управления."
  },
  {
    "en": "Use the dated Cape Town supply and use figures. The WHO service-gap total alone does not classify every affected person as facing economic scarcity.",
    "ru": "Используй датированные показатели запасов и расхода Кейптауна. Один мировой итог ВОЗ по услугам не доказывает экономический дефицит у каждого человека."
  },
  {
    "en": "Explain interactions and reach a local, evidence-based judgement without ranking one explanation universally.",
    "ru": "Объясни взаимодействия и сделай вывод для конкретного места, не объявляя одно объяснение главным повсюду."
  }
],
    model: {
      "en": "Water scarcity combines resource limits and access. The Falkenmark indicator classifies renewable water per person; values below 1,000 m³ per person per year indicate scarcity, but do not measure local distribution or investment. Cape Town provides a dated example: SAnews reported dam levels of 27.2% on 24 January 2018, with daily use of 586 million litres, 86 million above the then target. That demonstrates pressure on stored supply relative to use. Pressure management and devices at high-use properties were responses; the report also said supply-augmentation projects would not provide enough water that year. It does not isolate the effect of each measure. Economic scarcity is different: adequate natural water can remain inaccessible without affordable pipes and treatment. The WHO estimate of 2.2 billion without safely managed services in 2022 shows a service gap, but cannot by itself prove that all those people face economic rather than physical scarcity. A judgement therefore needs local supply, access and investment evidence. Physical limits matter, while infrastructure and allocation influence who receives the remaining water; neither explanation alone is universal.",
      "ru": "Дефицит воды сочетает ограничения ресурсов и доступа. Индикатор Фалькенмарк классифицирует объём возобновляемой воды на человека: ниже 1 000 м³ в год — дефицит, но он не измеряет местное распределение и инвестиции. Датированный пример — Кейптаун: 24 января 2018 SAnews сообщало об уровне водохранилищ 27,2% и суточном потреблении 586 млн литров, на 86 млн выше действовавшей цели. Это показывает давление спроса на запасы. Город регулировал давление в сети и устанавливал устройства у крупных потребителей; проекты увеличения предложения, по его заявлению, не успевали дать достаточно воды в том году. Сообщение не выделяет эффект каждой меры. Экономический дефицит иной: природных ресурсов может хватать, но без доступных труб и очистки люди воду не получают. Оценка ВОЗ — 2,2 млрд человек без безопасно управляемого водоснабжения в 2022 году — показывает разрыв в услугах, но не доказывает, что у всех этих людей дефицит экономический, а не физический. Для вывода нужны местные данные о ресурсах, доступе и инвестициях. Природные ограничения важны, а инфраструктура и распределение влияют на то, кому достанется оставшаяся вода; единого объяснения для всех мест нет."
},
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Distinguish physical availability from access, infrastructure, affordability and governance. Evaluate what scarcity indicators and particular cases can establish.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Различай физическое наличие воды, доступ, инфраструктуру, цену и управление. Оцени, что устанавливают показатели дефицита и конкретные примеры.",
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
    "en": "Trace source → transport pathway → nutrient load → lake response. A change in application is not automatically the same change in delivered load.",
    "ru": "Проследи цепочку: источник → путь переноса → нагрузка → реакция озера. Изменение внесения не равно автоматически такому же изменению поступления."
  },
  {
    "en": "Use the Maumee spring-phosphorus target and distinguish a target from a measured outcome.",
    "ru": "Используй цель по весеннему поступлению фосфора из Моми и отличай цель от измеренного результата."
  },
  {
    "en": "Consider other inputs, runoff variability and lake conditions. Do not treat every bloom as toxic or promise that nutrient control eliminates all blooms.",
    "ru": "Учти другие поступления, изменчивость стока и условия озера. Не объявляй любое цветение токсичным и не обещай исчезновения всех случаев."
  },
  {
    "en": "Judge adequacy against measured loads and responses; separate prevention in the lake from protection through drinking-water treatment.",
    "ru": "Оцени достаточность по измеренной нагрузке и реакции озера; отличай профилактику в озере от защиты через очистку питьевой воды."
  }
],
    model: {
  "en": "Changing farming practice can reduce the nutrient inputs that sustain eutrophication where agriculture is a significant source. The mechanism is to limit losses from fertiliser, manure and soil into connected watercourses, rather than simply to reduce all fertiliser irrespective of crop needs. Timing, storage, application and buffer design must match local runoff and drainage pathways.\n\nLake Erie shows why the scale and target matter. EPA identifies spring soluble phosphorus loads from the Maumee River as a key predictor of summer harmful blooms in the western basin. In 2016 the US and Canada adopted a target to reduce spring total and soluble reactive phosphorus from that river by 40%. This is a load-reduction target, not an observed 40% reduction in blooms. EPA’s data account says the wider phosphorus targets were mostly unmet as of 2024 and annual loads vary with tributary discharge. These records do not isolate the effect of one farm measure.\n\nOther conditions affect the outcome. WHO’s drinking-water guidance identifies nutrients, depth, retention time, mixing and stratification as factors in bloom likelihood. Reducing nutrient loading can lower the probability of blooms; it does not guarantee their disappearance in every year. Other nutrient sources and stored nutrients may require assessment, while lake zones can respond differently.\n\nFarm measures can therefore be a major part of prevention when they reach the dominant source and transport pathways at sufficient scale. Their adequacy must be tested with measured loads and lake responses, not assumed from adoption alone. Monitoring and drinking-water treatment protect people if contamination occurs, but treatment at an intake is a different objective from reducing eutrophication throughout the lake.",
  "ru": "Изменение сельскохозяйственной практики может сократить поступление биогенов, поддерживающих эвтрофикацию, если сельское хозяйство — значимый источник. Механизм состоит в уменьшении потерь удобрений, навоза и почвы в связанные водотоки, а не в произвольном сокращении любых удобрений независимо от потребностей культур. Сроки, хранение, внесение и буферные полосы нужно согласовать с местным стоком и дренажем.\n\nОзеро Эри показывает важность масштаба и цели. EPA называет весеннее поступление растворимого фосфора из реки Моми важным предиктором летнего вредоносного цветения западного бассейна. В 2016 году США и Канада приняли цель сократить весеннюю нагрузку общего и растворимого реакционноспособного фосфора из этой реки на 40%. Это цель по поступлению, а не наблюдаемое сокращение цветения на 40%. По данным EPA, к 2024 году более широкие цели по фосфору преимущественно не достигались, а годовые нагрузки менялись вместе с речным расходом. Эти наблюдения не выделяют эффект отдельной меры на полях.\n\nРезультат зависит и от других условий. Руководство ВОЗ по питьевой воде связывает вероятность цветения с биогенами, глубиной, временем удержания воды, перемешиванием и стратификацией. Снижение нагрузки может уменьшить вероятность цветения, но не гарантирует его исчезновения каждый год. Нужно оценивать другие источники и накопленные биогены; разные части озера реагируют неодинаково.\n\nИтак, меры на полях могут стать важной частью профилактики, если охватывают основной источник и пути переноса в достаточном масштабе. Их достаточность проверяют измерениями поступления и состояния озера, а не фактом внедрения. Мониторинг и очистка питьевой воды защищают людей при загрязнении, но очистка у водозабора решает другую задачу, чем снижение эвтрофикации всего озера."
},
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Explain nutrient sources and transport, lake stores and response times. Evaluate farm changes alongside non-farm inputs, legacy nutrients, enforcement and uncertainty.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Объясни источники и перенос биогенов, запасы в озере и сроки отклика. Оцени сельскохозяйственные меры вместе с прочими источниками, накопленными биогенами, исполнением и неопределённостью.",
    },
    origin: 'original',
    minutes: 30,
  },
];
