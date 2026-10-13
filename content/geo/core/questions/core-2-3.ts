import type { Question } from '../../../../src/contract/types';

// Core 2.3 (responding to global climate change). Original questions in IB style. Figures come from the sources named in
// the questions: Ember, Yearly Electricity Data (Global, 2026 update); Our World in Data annual CO2 emissions (Global Carbon
// Project data, 2023); World Bank press release, 28 October 2022. Numerical answers are checked by script.
const TOPIC = ['core-2-3-responding-climate-change'];

export const questions: Question[] = [
  {
    id: 'core-2-3-a1',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'Outline the difference between mitigation and adaptation. Give one example of each.',
      ru: 'Кратко опишите различие между смягчением последствий (mitigation) и адаптацией (adaptation). Приведите по одному примеру каждого.',
    },
    markscheme: {
      en: '1 mark: mitigation reduces greenhouse gas emissions or removes CO2 from the atmosphere, so it acts on the cause; adaptation adjusts to the actual or expected climate and its effects, so it acts on the impacts; 1 mark: a correct example of each, such as renewable electricity or afforestation for mitigation, and flood defences or drought-resistant crops for adaptation, placed in the right category (both examples must be correct for this mark).',
      ru: '1 балл: смягчение снижает выбросы парниковых газов или удаляет CO2 из атмосферы, то есть действует на причину; адаптация приспосабливает систему к фактическому или ожидаемому климату и его последствиям, то есть действует на последствия; 1 балл: верный пример для каждого случая, например возобновляемая электроэнергия или облесение для смягчения и защита от наводнений или засухоустойчивые культуры для адаптации, отнесённые к нужной категории (для этого балла оба примера должны быть верными).',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'core-2-3-a2',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'In 2023 Pakistan emitted 186.9 million tonnes of CO2 and the world emitted 38,094 million tonnes (Our World in Data, annual CO2 emissions, based on Global Carbon Project data). Calculate Pakistan’s share of world CO2 emissions in 2023. Give your answer as a percentage to two decimal places.',
      ru: 'В 2023 году Пакистан выбросил 186,9 млн тонн CO2, а весь мир — 38 094 млн тонн (Our World in Data, годовые выбросы CO2, данные Global Carbon Project). Рассчитайте долю Пакистана в мировых выбросах CO2 в 2023 году. Ответ дайте в процентах с двумя знаками после запятой.',
    },
    markscheme: {
      en: '1 mark: correct method: 186.9 ÷ 38,094 × 100; 1 mark: 0.49% (correct to two decimal places); 1 mark: a statement with units that Pakistan’s share was about half of one per cent of world CO2 emissions in 2023; accept 0.5% if the answer is rounded to one decimal place.',
      ru: '1 балл: верный метод: 186,9 ÷ 38 094 × 100; 1 балл: 0,49% (с двумя знаками после запятой); 1 балл: вывод с единицами измерения: доля Пакистана составила около половины процента мировых выбросов CO2 в 2023 году; при округлении до одного знака засчитывается 0,5%.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'core-2-3-a3',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how the principle of common but differentiated responsibilities affects negotiations on finance between developed and developing countries.',
      ru: 'Объясните, как принцип общей, но дифференцированной ответственности влияет на переговоры о финансировании между развитыми и развивающимися странами.',
    },
    markscheme: {
      en: '1 mark: all countries share responsibility for climate action (the common part); 1 mark: the duty differs because historic emissions and capability differ (the differentiated part); 1 mark: developed countries are expected to provide financial resources to developing countries (Paris Agreement, Article 9.1), so finance becomes a central issue; 1 mark: a developing country with low emissions, such as Pakistan (about 0.5% of world CO2 in 2023), argues that it needs support for adaptation and for loss and damage, so the talks focus on who pays. Accept any other valid developed point that links the principle to finance.',
      ru: '1 балл: все страны несут общую ответственность за действия по климату (общая часть); 1 балл: обязанности различаются, потому что различаются исторические выбросы и возможности (дифференцированная часть); 1 балл: развитые страны должны предоставлять финансовые ресурсы развивающимся странам (Парижское соглашение, статья 9.1), поэтому финансирование становится ключевым вопросом; 1 балл: страна с малыми выбросами, например Пакистан (около 0,5% мировых выбросов CO2 в 2023 году), просит поддержки для адаптации и для покрытия потерь и ущерба, поэтому переговоры сосредоточены на том, кто платит. Засчитываются и другие верные развитые пункты, которые связывают принцип с финансированием.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-2-3-a4',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how an early warning system can reduce the human impact of a flood, even though the flood itself cannot be prevented.',
      ru: 'Объясните, как система раннего предупреждения может уменьшить последствия наводнения для людей, даже если само наводнение предотвратить нельзя.',
    },
    markscheme: {
      en: '1 mark: the system forecasts the hazard and sends timely warnings to people at risk; 1 mark: warned people can move to safety, evacuate, or protect livestock, property and important documents; 1 mark: this leads to fewer deaths and injuries and smaller losses; 1 mark: a qualifier, for example the warning must be understood and trusted, must reach remote villages, and must be linked to a response plan.',
      ru: '1 балл: система прогнозирует опасность и своевременно предупреждает людей в зоне риска; 1 балл: предупреждённые люди могут переместиться в безопасное место, эвакуироваться или защитить скот, имущество и важные документы; 1 балл: из этого следуют меньше погибших и пострадавших и меньше потерь; 1 балл: уточнение, например предупреждение должно быть понятным и вызывать доверие, доходить до отдалённых деревень и быть связанным с планом действий.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-2-3-a5',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 6,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate managed retreat as an adaptation strategy for a coastal community that is flooded again and again.',
      ru: 'Оцените планируемое переселение как стратегию адаптации для прибрежной общины, которую снова и снова затапливает.',
    },
    markscheme: {
      en: '1 mark: a benefit with a link, for example managed retreat removes people from severe risk and ends repeated losses; 1 mark: a second benefit with a link, for example land can be returned to floodplain or wetland, which stores water and supports nature; 1 mark: a cost with a link, for example loss of livelihoods, schools and family ties; 1 mark: an equity point with a link, for example compensation or new housing may not match what is lost, and poorer households may have no real choice; 1 mark: a named place or a clear example of managed retreat or of a defence alternative; 1 mark: a supported judgement with conditions, for example it works best when planned early, with consultation, fair compensation and a safe new site.',
      ru: '1 балл: выгода с обоснованием, например переселение выводит людей из зоны серьёзного риска и прекращает повторяющиеся потери; 1 балл: вторая выгода с обоснованием, например освобождённая земля может стать поймой или болотом, которые удерживают воду и поддерживают природу; 1 балл: издержка с обоснованием, например потеря средств к существованию, школ и семейных связей; 1 балл: вопрос справедливости с обоснованием, например компенсация или новое жильё могут не соответствовать утраченному, а беднейшие домохозяйства могут не иметь реального выбора; 1 балл: названный пример или ясное описание переселения либо альтернативы в виде защитного сооружения; 1 балл: обоснованное суждение с условиями, например переселение лучше работает, если его планируют заранее, с консультациями, справедливой компенсацией и безопасным новым местом.',
    },
    origin: 'original',
    minutes: 8,
  },
  {
    id: 'core-2-3-b1',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'B',
    marks: 10,
    command: 'Using the infographic',
    stimulus: {
      en: 'Figure 1 (the infographic) shows the share of electricity generated from renewable sources (hydro, wind, solar, bioenergy and other renewables) for the world, China, Germany and the UAE in 2015 and 2025, as a percentage of total electricity generation. Source: Ember, Yearly Electricity Data (Global), last updated 15 September 2026.',
      ru: 'На рисунке 1 (инфографика) показана доля электроэнергии, выработанной из возобновляемых источников (гидроэнергия, ветер, солнце, биомасса и прочие возобновляемые), в мире, Китае, Германии и ОАЭ в 2015 и 2025 годах, в процентах от всей выработки электроэнергии. Источник: Ember, Yearly Electricity Data (Global), последнее обновление 15 сентября 2026 года.',
    },
    prompt: {
      en: '(a) Using Figure 1, describe the change in the share of renewables in electricity generation in Germany from 2015 to 2025. [2]\n(b) Calculate the percentage-point change in the share of renewables in electricity generation for the world from 2015 to 2025. Show your working. [2]\n(c) Evaluate the use of renewable electricity as a response to climate change, using the UAE or Germany as an example. [6]',
      ru: '(a) По рисунку 1 опишите изменение доли возобновляемых источников в выработке электроэнергии в Германии с 2015 по 2025 год. [2]\n(b) Рассчитайте изменение доли возобновляемых источников в выработке электроэнергии в мире с 2015 по 2025 год в процентных пунктах. Покажите ход расчёта. [2]\n(c) Оцените использование возобновляемой электроэнергии как ответ на изменение климата, приведя в пример ОАЭ или Германию. [6]',
    },
    markscheme: {
      en: '(a) 1 mark: the share rose from 29.4% in 2015 to 58.5% in 2025, roughly doubling (Ember); 1 mark: a supporting detail from the figure or a comparison, for example Germany’s 2025 share is higher than the world share of 33.5%. (b) 1 mark: method: 33.5 − 22.9 = 10.6 percentage points, using the values as printed in the figure; 1 mark: the answer with units, 10.6 percentage points. A percentage change (46.3%) is not the answer asked for. (c) Up to 6 marks, one per developed point with a link to the figure or to a named place: 1 mark: an environmental benefit, for example less fossil fuel burned and less CO2 from power generation, with a figure from a country where the share rose (Germany from 29.4% to 58.5%, or the UAE from 0.2% to 10.4%); 1 mark: an economic point, for example low running costs once a plant is built, set against high upfront investment and grid costs; 1 mark: a limitation of variable renewables, for example solar and wind output depends on the weather, so storage, grid upgrades or back-up plants are needed; 1 mark: land, materials or other environmental side effects, for example the land needed for large solar parks or the materials used in batteries; 1 mark: an equity point, for example who pays for grid upgrades and who gains from lower bills; 1 mark: a supported judgement, for example renewables cut emissions in electricity, but a world share of 33.5% in 2025 means most electricity is still not renewable, so renewables are necessary but not sufficient on their own.',
      ru: '(a) 1 балл: доля выросла с 29,4% в 2015 году до 58,5% в 2025 году, то есть почти удвоилась (Ember); 1 балл: подтверждающая деталь с рисунка или сравнение, например доля Германии в 2025 году выше мировой доли 33,5%. (b) 1 балл: метод: 33,5 − 22,9 = 10,6 процентного пункта, по значениям, напечатанным на рисунке; 1 балл: ответ с единицами измерения: 10,6 процентного пункта. Процентное изменение (46,3%) здесь не является нужным ответом. (c) До 6 баллов, по одному за развитый пункт со ссылкой на рисунок или на названное место: 1 балл: экологическая польза, например меньше сжигания ископаемого топлива и меньше CO2 от выработки электроэнергии, с цифрой по стране, где доля выросла (Германия с 29,4% до 58,5% или ОАЭ с 0,2% до 10,4%); 1 балл: экономический пункт, например низкие эксплуатационные расходы после строительства станции, которые сравниваются с высокими первоначальными инвестициями и затратами на сети; 1 балл: ограничение переменных возобновляемых источников, например выработка солнечных и ветровых станций зависит от погоды, поэтому нужны накопители, модернизация сетей или резервные мощности; 1 балл: землепользование, материалы или другие побочные последствия для природы, например земля под крупные солнечные парки или материалы для батарей; 1 балл: вопрос справедливости, например кто платит за модернизацию сетей и кто выигрывает от снижения счетов; 1 балл: обоснованное суждение, например возобновляемые источники сокращают выбросы в электроэнергетике, но мировая доля 33,5% в 2025 году означает, что большая часть электроэнергии по-прежнему не возобновляемая, поэтому возобновляемые источники необходимы, но сами по себе недостаточны.',
    },
    origin: 'original',
    minutes: 15,
  },
];
