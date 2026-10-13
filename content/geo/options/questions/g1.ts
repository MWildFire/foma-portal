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
      en: '(a) 2 marks: 1 mark for housing built without legal permission or planning approval; 1 mark for the lack of official services (water, sanitation, electricity) or insecure rights to the land.\n\n(b) 3 marks: 1 mark for each of two named problems (for example overcrowding, poor sanitation, flood or fire risk, insecure tenure, low income), and 1 mark for developing one of them with a link to health, safety or income.\n\n(c) 5 marks: up to 2 marks for the first strategy (1 mark to identify it, 1 mark to explain how it helps); up to 2 marks for the second strategy (1 mark to identify, 1 mark to explain); 1 mark for a justification that refers to cost, the local context or a trade-off (for example, in-situ upgrading with residents involved, as opposed to clearance).',
      ru: '(a) 2 балла: 1 балл за жильё, построенное без законного разрешения или градостроительного согласования; 1 балл за отсутствие официальных услуг (вода, канализация, электричество) или незащищённые права на землю.\n\n(b) 3 балла: 1 балл за каждую из двух названных проблем (например, перенаселённость, плохая канализация, риск наводнения или пожара, незащищённость права на жильё, низкий доход) и 1 балл за развитие одной из них со связью со здоровьем, безопасностью или доходом.\n\n(c) 5 баллов: до 2 баллов за первую стратегию (1 балл за её название, 1 балл за объяснение, как она помогает); до 2 баллов за вторую стратегию (1 балл за название, 1 балл за объяснение); 1 балл за обоснование, которое учитывает стоимость, местный контекст или компромисс (например, модернизация на месте с участием жителей вместо сноса).',
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
        en: 'Plan: define each model in one sentence (rings, sectors along transport routes, several nuclei) and say what each shows about land values.',
        ru: 'План: в одном предложении определите каждую модель (кольца, секторы вдоль транспортных путей, несколько ядер) и скажите, что каждая показывает о ценах на землю.',
      },
      {
        en: 'Strengths for LEDCs: a CBD with a zone of old, crowded housing still appears in many cities, and the multiple nuclei model fits cities with several centres.',
        ru: 'Сильные стороны для развивающихся стран: в многих городах по-прежнему есть ЦДР и зона старого перенаселённого жилья, а модель многоядерного города подходит городам с несколькими центрами.',
      },
      {
        en: 'Weaknesses: the models were built mainly from cities in the USA in the 1920s to 1940s, and they do not explain informal settlements, gated communities or mixed land use at the edge.',
        ru: 'Слабые стороны: модели построены в основном на примере городов США 1920–1940-х годов и не объясняют неформальные поселения, закрытые комплексы и смешанное землепользование на окраинах.',
      },
      {
        en: 'Judgement (top band): say which model is most useful for a named LEDC city and under which conditions, using evidence such as Dharavi or Lagos.',
        ru: 'Вывод (высший уровень): укажите, какая модель полезнее для названного города развивающейся страны и при каких условиях, опираясь на данные о Дхарави или Лагосе.',
      },
    ],
    model: {
      en: 'The three models describe LEDC cities, but none explains them fully. Burgess’s rings show a CBD with a zone in transition of old, crowded housing, a pattern many LEDC cities still show. Hoyt’s sectors add transport routes, which shape growth along new roads and rail lines. The multiple nuclei model suits large cities with several centres, because many LEDC cities have business, industrial and airport areas that grew separately. However, all three were built mainly on cities in the USA in the 1920s to 1940s, so they miss informal settlements on the edge and gated communities for the rich. On balance, the multiple nuclei model is the most useful for a fast-growing LEDC city, but it still needs the Latin American model to explain the edge.',
      ru: 'Три модели помогают описать города развивающихся стран, но ни одна не объясняет их полностью. Кольца Берджесса показывают ЦДР, окружённый зоной перехода со старым перенаселённым жильём, — такая картина характерна для многих городов развивающихся стран. Секторы Хойта добавляют транспортные пути, которые определяют рост там, где новые дороги и железнодорожные линии открывают землю под застройку. Модель многоядерного города подходит крупным городам с несколькими центрами, ведь многие города развивающихся стран разрастались вокруг отдельных деловых, промышленных и аэропортовых районов. Однако все три модели построены в основном на примере городов США 1920–1940-х годов, поэтому они не учитывают неформальные поселения на окраинах и закрытые комплексы для богатых. В итоге модель многоядерного города полезнее всего для быстро растущего города развивающейся страны, но для объяснения окраин всё равно нужна модель латиноамериканского города.',
    },
    markscheme: {
      en: 'Level 1 (1–3 marks): describes one model or lists features, with little or no link to LEDCs.\n\nLevel 2 (4–6 marks): describes at least two models and gives one strength or weakness for LEDCs, with little case evidence.\n\nLevel 3 (7–8 marks): compares the models with relevant LEDC examples (for example Lagos or Dharavi) and gives the strengths and weaknesses of each.\n\nLevel 4 (9–10 marks): sustained evaluation with precise, dated evidence, reaching a supported judgement about which model is most useful and under which conditions.',
      ru: 'Уровень 1 (1–3 балла): описывает одну модель или перечисляет признаки, почти без связи с развивающимися странами.\n\nУровень 2 (4–6 баллов): описывает минимум две модели и называет одну сильную или слабую сторону для развивающихся стран, с небольшим количеством примеров.\n\nУровень 3 (7–8 баллов): сравнивает модели на подходящих примерах для развивающихся стран (например, Лагос или Дхарави) и называет сильные и слабые стороны каждой.\n\nУровень 4 (9–10 баллов): последовательная оценка с точными примерами и данными с годами, приводящая к обоснованному выводу о том, какая модель полезнее и при каких условиях.',
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
        en: 'Plan: define a planned city and name two problems of rapid urbanisation in an LEDC, such as informal settlements, congestion or gaps in services.',
        ru: 'План: определите спланированный город и назовите две проблемы быстрой урбанизации в развивающейся стране, например неформальные поселения, пробки или пробелы в услугах.',
      },
      {
        en: 'For: planning can allocate land, build public housing and transport networks. Singapore’s HDB flats are home to about 77% of resident households (SingStat, 2025).',
        ru: 'За: планирование распределяет землю, строит государственное жильё и транспортные сети. Квартиры HDB в Сингапуре живут около 77% резидентных домохозяйств (SingStat, 2025).',
      },
      {
        en: 'Against: planning needs money and strong government, can exclude the poorest households, and new areas may stay underused if jobs and services do not follow.',
        ru: 'Против: планирование требует денег и сильного государства, может вытеснить беднейшие домохозяйства, а новые районы могут пустовать, если за ними не придут работа и услуги.',
      },
      {
        en: 'Judgement (top band): weigh the scale of the problem against what a plan can deliver, for example a city-state with strong institutions against a megacity such as Lagos.',
        ru: 'Вывод (высший уровень): сопоставьте масштаб проблемы с тем, что может дать план, например город-государство с сильными институтами и мегаполис вроде Лагоса.',
      },
    ],
    model: {
      en: 'Planned cities can offer partial solutions. Singapore shows that planning can work: about 77% of resident households live in HDB public flats (SingStat, 2025), and the state controls land use and transport. The approach needs money, skilled planners and strong institutions, which many LEDCs find hard to sustain. A plan also cannot stop rapid rural-urban migration, so informal settlements can still grow outside the planned areas. A city designed as a whole still faces pressures, because new arrivals settle wherever they can afford. Overall, planned cities help most where the state has strong capacity and funding, so their solutions are real but only partial.',
      ru: 'Спланированные города могут дать лишь частичные решения. Сингапур показывает, что планирование работает: около 77% резидентных домохозяйств живут в государственных квартирах HDB (SingStat, 2025), а государство контролирует землепользование и транспорт. Такой подход требует денег, грамотных планировщиков и сильных институтов, и многим развивающимся странам их трудно поддерживать. План также не может остановить быструю миграцию из деревни в город, поэтому неформальные поселения продолжают расти за пределами спланированных районов. Город, спроектированный целиком, всё равно сталкивается с давлением, потому что новые жители селятся там, где могут себе это позволить. В целом спланированные города помогают больше всего там, где у государства есть ресурсы и возможности, поэтому их решения реальны, но лишь частичны.',
    },
    markscheme: {
      en: 'Level 1 (1–3 marks): describes a planned city or lists problems of urbanisation, with no judgement.\n\nLevel 2 (4–6 marks): explains at least one way planning addresses a problem and one limit, with limited evidence.\n\nLevel 3 (7–8 marks): compares arguments for and against, using at least one LEDC case with a figure and a date.\n\nLevel 4 (9–10 marks): sustained judgement on how far planned cities solve the problems, weighing scale, funding and governance, with dated evidence.',
      ru: 'Уровень 1 (1–3 балла): описывает спланированный город или перечисляет проблемы урбанизации, без вывода.\n\nУровень 2 (4–6 баллов): объясняет минимум один способ, которым планирование решает проблему, и одно ограничение, с небольшим количеством примеров.\n\nУровень 3 (7–8 баллов): сравнивает аргументы за и против, опираясь минимум на один кейс развивающейся страны с цифрой и годом.\n\nУровень 4 (9–10 баллов): последовательный вывод о том, в какой мере спланированные города решают проблемы, с учётом масштаба, финансирования и управления, с данными с годами.',
    },
    origin: 'original',
    minutes: 30,
  },
];
