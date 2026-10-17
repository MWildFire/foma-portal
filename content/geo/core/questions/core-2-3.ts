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
      en: '1 mark: correct method: 186.9 ÷ 38,094 × 100; 1 mark: 0.49% (correct to two decimal places); 1 mark: a statement with units that Pakistan’s share was about half of one per cent of world CO2 emissions in 2023. The precision point requires0.49%, not0.5%.',
      ru: '1 балл: верный метод: 186,9 ÷ 38 094 × 100; 1 балл: 0,49% (с двумя знаками после запятой); 1 балл: вывод с единицами измерения: доля Пакистана составила около половины процента мировых выбросов CO2 в 2023 году. Для балла за точность нужен итог0,49%, а не0,5%.',
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
  "id": "core-2-3-a6",
  "subject": "geo",
  "topicIds": [
    "core-2-3-responding-climate-change"
  ],
  "paper": "P2",
  "section": "A",
  "marks": 4,
  "command": "Explain",
  "prompt": {
    "en": "BRAC’s19December2024 announcement describes rainwater collection in Mongla,Bangladesh,and a new Rain for Life programme for2025–2027. Its target is improved resilience for30% of climate-affected residents in Assasuni,Mongla andPatharghata by end2027. Explain one adaptation mechanism,one role of this non-governmental stakeholder,and one reason the target does not yet prove success.",
    "ru": "В сообщении BRAC от19декабря2024года названы сбор дождевой воды в Монгле(Бангладеш) и программа Rain for Life на2025–2027годы. Цель — повысить устойчивость30% затронутого климатическими рисками населения Ассасуни,Монглы иПатаргхаты к концу2027года. Объясни механизм адаптации,роль негосударственного участника и почему цель ещё не доказывает успех."
  },
  "markscheme": {
    "en": "Original4-mark exercise:1 for linking rainwater capture/storage to reduced dependence on saline sources;1 for a developed NGO role,such as organising community delivery and donor partnership;1 for distinguishing the dated future target from measured achieved resilience;1 for explaining a constraint or evidence needed,for example rainfall/maintenance/equitable access and follow-up service reliability. Do not award a claim that30% was already achieved or that the NGO acts without public partners. Source:BRAC announcement,project/expected-outcome paragraphs,19December2024.",
    "ru": "Авторское задание на4балла:1 — связь сбора/хранения дождевой воды с меньшей зависимостью от засолённых источников;1 — раскрытая роль НПО,например организация местной работы и партнёрства с донором;1 — различение будущей цели и измеренного результата;1 — объяснение ограничения или нужной проверки:осадки,обслуживание,равный доступ,последующая надёжность услуги. Утверждения о уже достигнутых30% или отсутствии государственных партнёров не засчитываются. Источник:сообщение BRAC от19декабря2024,абзацы о программе и ожидаемом результате."
  },
  "origin": "original",
  "minutes": 6
},
];
