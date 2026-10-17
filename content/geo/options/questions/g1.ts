import type { Question } from '../../../../src/contract/types';

// Option G, G.1: original questions in the style of Paper 1. Structured questions carry 10 marks in total,
// extended questions 10 marks each with a plan, a markband and a model answer.
export const questions: Question[] = [
  {
    id: 'g1-sq1',
    subject: 'geo',
    topicIds: ['g1-urban-variety'],
    paper: 'P1',
    marks: 10,
    command: 'Describe',
    prompt: {
      en: '(a) Describe the land-use pattern of the concentric zone model of urban structure. (3 marks)\n\n(b) Explain why land values generally fall with distance from the CBD in this model. (4 marks)\n\n(c) Suggest one reason why the concentric zone model may not describe the structure of a city in an LEDC. (3 marks)',
      ru: '(a) Опишите схему землепользования в модели концентрических зон городской структуры. (3 балла)\n\n(b) Объясните, почему цены на землю обычно падают по мере удаления от ЦДР в этой модели. (4 балла)\n\n(c) Предложите одну причину, по которой модель концентрических зон может не описывать структуру города в развивающейся стране (LEDC). (3 балла)',
    },
    markscheme: {
      en: '(a) 3 marks: 1 mark for a CBD at the centre; 1 mark for rings of land use arranged around the CBD; 1 mark for a named zone with its land use or housing (for example, the zone in transition has old housing and factories).\n\n(b) 4 marks: 1 mark for the CBD as the most accessible point; 1 mark for the highest demand and rents being there; 1 mark for transport costs and travel time rising with distance; 1 mark for a linked conclusion that land values fall outwards.\n\n(c) 3 marks: 1 mark for a limitation identified (for example, many LEDC cities have several centres or mixed land use); 1 mark for explaining it with reference to informal settlements or uneven growth; 1 mark for a relevant link to a case or to rapid growth.',
      ru: '(a) 3 балла: 1 балл за ЦДР в центре; 1 балл за кольца видов застройки вокруг ЦДР; 1 балл за названную зону с её застройкой или жильём (например, в зоне перехода старое жильё и фабрики).\n\n(b) 4 балла: 1 балл за ЦДР как самую доступную точку; 1 балл за самый высокий спрос и арендную плату именно там; 1 балл за рост транспортных расходов и времени в пути с удалением; 1 балл за вывод, что цены на землю падают к окраинам.\n\n(c) 3 балла: 1 балл за названное ограничение модели (например, во многих городах LEDC несколько центров или смешанная застройка); 1 балл за объяснение через неформальные поселения или неравномерный рост; 1 балл за связь с кейсом или быстрым ростом города.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g1-sq2',
    subject: 'geo',
    topicIds: ['g1-urban-variety'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    stimulus: {
      en: 'Dubai’s population: 862,387 in 2000 (census count); 1,905,476 in 2010 (estimate for the end of the year); 3,863,600 at the end of 2024 (estimate). In 2010, 91.2% of residents were non-Emiratis.',
      ru: 'Население Дубая: 862 387 человек в 2000 году (перепись); 1 905 476 в 2010 году (оценка на конец года); 3 863 600 на конец 2024 года (оценка). В 2010 году 91,2% жителей не были гражданами ОАЭ.',
    },
    prompt: {
      en: '(a) Calculate the percentage increase in Dubai’s population from 2000 to 2010. Show your working. (2 marks)\n\n(b) Explain two reasons for the rapid growth of Dubai’s population between 2000 and 2024. (4 marks)\n\n(c) Explain one benefit and one challenge that this rapid growth brings to the city. (4 marks)',
      ru: '(a) Рассчитайте процентный рост населения Дубая с 2000 по 2010 год. Покажите ход расчёта. (2 балла)\n\n(b) Объясните две причины быстрого роста населения Дубая в 2000–2024 годах. (4 балла)\n\n(c) Объясните одну выгоду и одну проблему, которые такой быстрый рост приносит городу. (4 балла)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for the method, (1,905,476 - 862,387) / 862,387 x 100; 1 mark for an answer of about 121% (120.9% to 121.0% accepted).\n\n(b) 4 marks: up to 2 marks for each reason, 1 mark to identify it and 1 mark to explain how it drove growth. Accept, for example: job opportunities in trade, tourism, construction and services; the high share of non-citizens (91% in 2010), which shows migration as a main driver; investment in infrastructure and housing that attracted residents.\n\n(c) 4 marks: up to 2 marks for a benefit (identified and explained, for example more tax income to fund new transport) and up to 2 marks for a challenge (identified and explained, for example housing costs, traffic congestion or water demand in a dry climate).',
      ru: '(a) 2 балла: 1 балл за метод, (1 905 476 - 862 387) / 862 387 x 100; 1 балл за ответ около 121% (принимается 120,9%–121,0%).\n\n(b) 4 балла: до 2 баллов за каждую причину, 1 балл за её название и 1 балл за объяснение, как она вызвала рост. Засчитываются, например: рабочие места в торговле, туризме, строительстве и сфере услуг; высокая доля негражданов (91% в 2010 году), которая показывает миграцию как главный двигатель; инвестиции в инфраструктуру и жильё, которые привлекли жителей.\n\n(c) 4 балла: до 2 баллов за выгоду (названа и объяснена, например, больше налоговых поступлений на новый транспорт) и до 2 баллов за проблему (названа и объяснена, например, стоимость жилья, пробки или спрос на воду в засушливом климате).',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g1-sq3',
    subject: 'geo',
    topicIds: ['g1-urban-variety'],
    paper: 'P1',
    marks: 10,
    command: 'Suggest',
    prompt: {
      en: '(a) Define the term ‘informal settlement’. (2 marks)\n\n(b) Describe two problems that residents of an informal settlement may face. (3 marks)\n\n(c) Suggest two strategies to improve living conditions in an informal settlement in an LEDC, and justify your choice. (5 marks)',
      ru: '(a) Дайте определение термину «неформальное поселение». (2 балла)\n\n(b) Опишите две проблемы, с которыми могут сталкиваться жители неформального поселения. (3 балла)\n\n(c) Предложите две стратегии улучшения условий жизни в неформальном поселении в развивающейся стране и обоснуйте свой выбор. (5 баллов)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for a residential area with insecure tenure over land or housing (including informal rental arrangements); 1 mark for a further characteristic, such as gaps in formal services or non-compliance with planning/building rules. Accept an equivalent valid definition; do not require every resident to be a squatter or every dwelling to lack all services.\n\n(b) 3 marks: 1 mark for each of two named problems (for example overcrowding, poor sanitation, flood or fire risk, insecure tenure, low income), and 1 mark for developing one of them with a link to health, safety or income.\n\n(c) 5 marks: up to 2 marks for the first strategy (1 mark to identify it, 1 mark to explain how it helps); up to 2 marks for the second strategy (1 mark to identify, 1 mark to explain); 1 mark for a justification that refers to cost, the local context or a trade-off (for example, in-situ upgrading with residents involved, as opposed to clearance).',
      ru: '(a) 2 балла: 1 балл за жилой район с незащищёнными правами на землю или жильё, в том числе при неформальной аренде; 1 балл за дополнительный признак — например, недостаток официальных услуг или несоответствие градостроительным нормам. Засчитывайте равнозначное верное определение; не требуйте, чтобы все жители самовольно захватили землю или все дома были лишены всех услуг.\n\n(b) 3 балла: 1 балл за каждую из двух названных проблем (например, перенаселённость, плохая канализация, риск наводнения или пожара, незащищённость права на жильё, низкий доход) и 1 балл за развитие одной из них со связью со здоровьем, безопасностью или доходом.\n\n(c) 5 баллов: до 2 баллов за первую стратегию (1 балл за её название, 1 балл за объяснение, как она помогает); до 2 баллов за вторую стратегию (1 балл за название, 1 балл за объяснение); 1 балл за обоснование, которое учитывает стоимость, местный контекст или компромисс (например, модернизация на месте с участием жителей вместо сноса).',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g1-eq1',
    subject: 'geo',
    topicIds: ['g1-urban-variety'],
    paper: 'P1',
    marks: 10,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the usefulness of the Burgess, Hoyt and Harris and Ullman models in explaining the structure of cities in LEDCs.',
      ru: 'Оцените полезность моделей Берджесса, Хойта и Харриса и Ульмана для объяснения структуры городов развивающихся стран (LEDC).',
    },
    hints: [
  {
    "en": "Distinguish rings, directional sectors and specialised nuclei; they are not inevitable stages.",
    "ru": "Отличи кольца, направленные секторы и специализированные ядра; это не неизбежные стадии."
  },
  {
    "en": "Use the 2022 Dharavi notice: proximity to BKC and rail stations does not put all informality on the outer edge. State the document’s limited spatial coverage.",
    "ru": "Используй извещение о Дхарави 2022 года: близость BKC и станций не позволяет отнести всю неформальную застройку к внешней окраине. Укажи ограниченный охват документа."
  },
  {
    "en": "Contrast Brasilia’s planned axes and sectors with a market-based explanation. A similar shape need not have the same cause.",
    "ru": "Сопоставь плановые оси и секторы Бразилиа с рыночным объяснением. Похожая форма не обязательно имеет ту же причину."
  },
  {
    "en": "Evaluate each model’s explanatory reach; do not require a Latin American model for every developing-country city.",
    "ru": "Оцени границы объяснения каждой модели; не требуй латиноамериканскую модель для любого города развивающейся страны."
  }
],
    model: {
  "en": "Burgess, Hoyt and Harris and Ullman offer different simplifications of urban structure, rather than a required sequence through which cities develop. Burgess emphasises concentric differentiation around a central business district; Hoyt adds directional sectors associated with transport and residential development; the multiple-nuclei model allows specialised centres. Their usefulness depends on which features of an actual city they explain.\n\nIn Mumbai, the Dharavi redevelopment authority’s 2022 notice places the informal settlement near the Bandra-Kurla financial hub and several railway stations. That spatial relationship challenges a simple assumption that informality belongs only at a city’s outer edge. Several employment and transport nodes can make a multiple-centre interpretation useful. However, the notice does not map the entire metropolis or prove that every land use follows the multiple-nuclei model. Distance from one centre alone cannot explain tenure, redevelopment eligibility or the history of settlement.\n\nBrasilia provides a contrasting limit. UNESCO describes a planned capital built in 1956–1960 with intersecting axes, functional sectors and residential superblocks. Its directional pattern might resemble aspects of a sector diagram, but deliberate state planning is a different explanation from assuming that market competition spontaneously produced Hoyt’s pattern. The protected Pilot Plan is also a particular area, not a complete description of the whole metropolitan population.\n\nThe models are therefore useful for organising a map comparison and posing questions about accessibility, land use and centres. They become misleading when a visual resemblance is treated as proof of causation or when one model is declared best for all developing-country cities. A combined explanation should specify the observed pattern and then account for planning, physical constraints, tenure and historical development where the simplified geometry is inadequate.",
  "ru": "Модели Берджесса, Хойта и Харриса — Ульмана по-разному упрощают городскую структуру; это не обязательные стадии развития. Берджесс выделяет концентрические различия вокруг центрального делового района, Хойт — направленные секторы, связанные с транспортом и жилой застройкой, а многоядерная модель допускает специализированные центры. Полезность зависит от того, какие черты конкретного города они объясняют.\n\nВ извещении органа реконструкции Дхарави 2022 года неформальный район Мумбаи расположен рядом с финансовым центром Бандра-Курла и несколькими железнодорожными станциями. Это противоречит простому предположению, будто неформальная застройка бывает только на внешней окраине. Несколько узлов занятости и транспорта делают многоцентровую трактовку полезной. Но извещение не описывает всю агломерацию и не доказывает, что любое землепользование подчинено многоядерной модели. Одним расстоянием от центра нельзя объяснить права на землю, условия переселения и историю заселения.\n\nБразилиа показывает другое ограничение. ЮНЕСКО описывает столицу, построенную по плану в 1956–1960 годах: пересечение осей, функциональные секторы и жилые суперблоки. Направленный рисунок напоминает элементы секторной схемы, но сознательное государственное планирование отличается от объяснения рыночной конкуренцией. Охраняемый Пилотный план относится к определённой территории, а не полностью описывает население всей агломерации.\n\nИтак, модели полезны для сравнения карт и вопросов о доступности, землепользовании и центрах. Они вводят в заблуждение, если внешнее сходство принимают за доказательство причин или объявляют одну модель лучшей для всех городов развивающихся стран. Составное объяснение должно назвать наблюдаемый рисунок и учесть планирование, природные ограничения, владение землёй и историю там, где простой геометрии недостаточно."
},
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Assess what each named model explains and misses in the selected cities, with assumptions about transport, history, informality and multiple centres. Do not treat models as a required sequence.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Оцени, что объясняет и упускает каждая названная модель в выбранных городах: транспорт, история, неформальность и несколько центров. Модели не являются обязательной последовательностью развития.",
    },
    origin: 'original',
    minutes: 30,
  },
  {
    id: 'g1-eq2',
    subject: 'geo',
    topicIds: ['g1-urban-variety'],
    paper: 'P1',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: 'To what extent do planned cities offer a solution to the problems caused by rapid urbanisation in LEDCs?',
      ru: 'В какой степени спланированные города решают проблемы, которые вызывает быстрая урбанизация в развивающихся странах?',
    },
    hints: [
  {
    "en": "Use Brasilia as a planned capital; distinguish its designed core from the entire metropolitan area.",
    "ru": "Используй Бразилиа как новую спланированную столицу; отличай проектируемое ядро от всей агломерации."
  },
  {
    "en": "Explain how coordinated land use can enable infrastructure and services, then test access and maintenance.",
    "ru": "Объясни, как согласованное землепользование помогает инфраструктуре и услугам, затем оцени доступ и поддержание системы."
  },
  {
    "en": "UNESCO records ongoing traffic and public-transport pressures. A completed plan does not mean urban pressures disappeared.",
    "ru": "ЮНЕСКО отмечает сохраняющиеся транспортные трудности. Завершение плана не означает исчезновения городских проблем."
  },
  {
    "en": "Treat Singapore’s HDB as a housing-policy comparison, not a wholly new-city or universal developing-country case.",
    "ru": "Рассматривай HDB Сингапура как сравнение жилищной политики, а не как целиком новый город или универсальный пример развивающейся страны."
  }
],
    model: {
  "en": "A planned city coordinates the location of functions and infrastructure through an overall design. It can anticipate some pressures of urban growth, but a plan’s physical form is not the same as affordable access to housing, jobs and services for everyone. The question is therefore both what was built and who could benefit as the city expanded.\n\nBrasilia is a genuine planned-capital example in Brazil. UNESCO describes its construction in 1956–1960, intersecting administrative and transport axes, functional sectors and residential superblocks. Coordinating these uses can reserve space for services and infrastructure instead of relying on separate unconnected developments. This is a mechanism through which planning may improve urban organisation; the heritage description does not quantify the welfare gain of each resident.\n\nThe same UNESCO account notes continuing pressure from urban development, traffic and public-transport requirements. Completing an initial plan consequently does not end the need to adapt infrastructure. Nor does the protected Pilot Plan establish conditions for all residents of the wider metropolitan area. If housing is inaccessible to low-income newcomers or poorly connected to their work, an orderly core can coexist with unmet needs elsewhere. Such distributional outcomes require evidence rather than being inferred from the plan’s appearance.\n\nSingapore’s public-housing programme is a useful comparison in state-led housing, but is not proof that a wholly new city was built or that modern Singapore represents every developing country. The broader lesson is to compare institutions, finance, housing access and scale before transferring a policy.\n\nPlanned cities can thus address particular problems of coordination and service provision. Whether they solve the problems of rapid urbanisation depends on maintaining provision as the population changes and including those outside the original designed area. Neither inevitable failure nor universal success follows from being planned.",
  "ru": "Спланированный город согласует размещение функций и инфраструктуры в общем проекте. Он может заранее учитывать часть трудностей роста, но упорядоченная форма не равна доступному жилью, работе и услугам для каждого. Поэтому важно и что построено, и кто смог этим воспользоваться при расширении города.\n\nБразилиа — действительный пример новой столицы, созданной по плану в Бразилии. ЮНЕСКО описывает строительство в 1956–1960 годах, пересечение административной и транспортной осей, функциональные секторы и жилые суперблоки. Согласование функций позволяет заранее оставить место для услуг и сетей вместо разрозненной застройки. Так планирование способно улучшить организацию города; описание объекта наследия не измеряет прибавку благосостояния каждого жителя.\n\nВ том же материале ЮНЕСКО отмечено сохраняющееся давление городской застройки, автомобильного движения и потребностей общественного транспорта. Значит, завершение исходного плана не устраняет необходимость развивать инфраструктуру. Охраняемый Пилотный план также не устанавливает условия жизни всех жителей широкой агломерации. Если жильё недоступно малообеспеченным приезжим или плохо связано с их работой, упорядоченное ядро может соседствовать с неудовлетворёнными потребностями. Но такие различия нужно подтверждать данными, а не выводить из внешнего вида проекта.\n\nПрограмма государственного жилья Сингапура полезна для сравнения роли государства, однако не доказывает строительство всего города с нуля и не делает современный Сингапур представителем любой развивающейся страны. При переносе политики нужно сравнивать институты, финансы, доступ к жилью и масштаб.\n\nИтак, спланированные города могут решать определённые задачи согласования и обеспечения услугами. Решат ли они проблемы быстрой урбанизации, зависит от развития снабжения при изменении населения и включения жителей за пределами исходного проекта. Сам факт планирования не гарантирует ни провала, ни всеобщего успеха."
},
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Compare a planned city’s actual outcomes with problems of rapid urbanisation and the conditions for transfer, including funding, access, governance and existing settlements.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Сопоставь реальные результаты спланированного города с проблемами быстрой урбанизации и условиями переноса: финансированием, доступом, управлением и существующими поселениями.",
    },
    origin: 'original',
    minutes: 30,
  },
];
