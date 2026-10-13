import type { CaseStudy } from '../../../../src/contract/types';

// Option G.3 case studies. Every figure below has a place, a year and a web source that was opened and checked.
// Where sources disagree, the facts say so and name the figure this case uses.
export const cases: CaseStudy[] = [
  {
    id: 'g-mumbai-floods-2005',
    subject: 'geo',
    title: { en: 'Mumbai floods, 26 July 2005', ru: 'Наводнение в Мумбаи, 26 июля 2005 года' },
    place: 'Mumbai, Maharashtra, India',
    scale: 'local',
    years: '2005',
    lat: 19.076,
    lng: 72.8777,
    facts: {
      en: 'On 26 July 2005 the Indian Meteorological Department station at Santacruz recorded 944 mm of rain in 24 hours, the wettest day on record for Mumbai, and 644 mm fell between 8 am and 8 pm. Local trains stopped and roads flooded across the city. Death tolls differ between sources: one source gives about 1,094 deaths across Maharashtra, so check each figure against its source before quoting it.',
      ru: '26 июля 2005 года метеостанция Santacruz Индийского метеорологического департамента (IMD) зафиксировала 944 мм осадков за 24 часа — самый дождливый день в истории Мумбаи; 644 мм выпали между 8 и 20 часами. Остановились пригородные поезда, затопило улицы города. Число погибших называют разное: источник приводит около 1 094 человек по всему штату Махараштра, поэтому цифры стоит проверять по источнику.',
    },
    usedFor: ['g3-urban-stress'],
    src: [
      { kind: 'web', title: 'Maharashtra floods of 2005 (Wikipedia, citing IMD data)', url: 'https://en.wikipedia.org/wiki/2005_Mumbai_flood' },
    ],
  },
  {
    id: 'g-jakarta-subsidence',
    subject: 'geo',
    title: { en: 'Land subsidence and flooding in Jakarta', ru: 'Просадка грунта и наводнения в Джакарте' },
    place: 'Jakarta, Indonesia',
    scale: 'local',
    years: '2015–2019',
    lat: -6.2088,
    lng: 106.8456,
    facts: {
      en: 'Jakarta is still sinking by about 1 to 15 cm a year, and the ground at Pluit had sunk about 4 m by 2015. According to ITB research reported by The Jakarta Post in December 2019, the subsidence rate in Muara Baru, North Jakarta, fell from about 20 to 26 cm a year to 10 to 12 cm a year. A UGM study (2024) links the significant subsidence to rapid urbanisation and intensive groundwater extraction, and its abstract points to the coastal regions of North Jakarta.',
      ru: 'Джакарта продолжает опускаться примерно на 1–15 см в год, а к 2015 году поверхность в районе Плуит (Pluit) опустилась примерно на 4 м. По исследованию ITB, о котором в декабре 2019 года писала The Jakarta Post, в Муара-Бару (Северная Джакарта) темп просадки снизился примерно с 20–26 см до 10–12 см в год. Исследование UGM (2024) связывает значительную просадку с быстрой урбанизацией и интенсивной откачкой грунтовых вод; на побережье просадка усиливает затопление в прилив.',
    },
    usedFor: ['g3-urban-stress'],
    src: [
      { kind: 'web', title: 'Jakarta sinks at slower pace, but more areas affected (The Jakarta Post, 4 December 2019)', url: 'https://www.thejakartapost.com/news/2019/12/04/jakarta-sinks-at-slower-pace-but-more-areas-affected.html' },
      { kind: 'web', title: 'Current land subsidence in Jakarta: multi-track SBAS InSAR analysis 2017–2022 (Universitas Gadjah Mada, 2024)', url: 'https://ir.lib.ugm.ac.id/id/eprint/9717/' },
    ],
  },
  {
    id: 'g-kibera',
    subject: 'geo',
    title: { en: 'Kibera, Nairobi: how many people live there?', ru: 'Кибера, Найроби: сколько здесь живёт людей?' },
    place: 'Kibera, Nairobi, Kenya',
    scale: 'local',
    years: '2009',
    lat: -1.3133,
    lng: 36.7875,
    facts: {
      en: 'The 2009 Kenya Population and Housing Census counted 170,070 people in the eight locations that make up Kibera, one of Nairobi’s largest informal settlements. Claims of one or two million residents, often repeated as the claim that Kibera is Africa’s biggest slum, are not supported by the census count. This case uses the census figure because it is an official count with a stated date; higher figures are informal estimates that this case treats as unverified.',
      ru: 'Перепись населения Кении 2009 года насчитала 170 070 человек в восьми участках, из которых состоит Кибера, — одного из крупнейших неформальных районов Найроби. Утверждения о миллионе и даже двух миллионах жителей, которые часто повторяют как «самый большой трущобный район Африки», переписью не подтверждаются. В кейсе использована цифра переписи: это официальный подсчёт с известной датой, а более высокие цифры считаются неподтверждёнными оценками.',
    },
    usedFor: ['g3-urban-stress'],
    src: [
      { kind: 'web', title: 'Myth shattered: Kibera numbers fail to add up (Daily Nation, Kenya)', url: 'https://nation.africa/kenya/news/myth-shattered-kibera-numbers-fail-to-add-up-735760' },
    ],
  },
  {
    id: 'g-phoenix-heat',
    subject: 'geo',
    title: { en: 'Phoenix, Arizona: the night-time urban heat island', ru: 'Феникс, Аризона: ночной тепловой остров' },
    place: 'Phoenix, Arizona, USA',
    scale: 'local',
    years: '2007–2019',
    lat: 33.4484,
    lng: -112.074,
    facts: {
      en: 'Anthony Brazel of Arizona State University wrote in 2007 that the urban heat island makes Phoenix night-time low temperatures 10 to 15 degrees Fahrenheit (about 5.6 to 8.3 °C) higher than in rural areas. Most of the difference appears in the evening, and by day the urban core can be slightly cooler than the natural desert around it, where the highest daytime temperatures often occur. An NPR report in 2019 said that the average night-time temperature in Phoenix had risen by 9 degrees Fahrenheit (about 5 °C) over the last half-century.',
      ru: 'Энтони Брейзел (Arizona State University) в 2007 году писал, что тепловой остров делает ночные минимумы Феникса на 10–15 °F (около 5,6–8,3 °C) выше, чем в сельской местности. Больше всего разница проявляется вечером; днём центр города может быть немного прохладнее природной пустыни вокруг, где чаще всего бывает самая высокая дневная температура. По данным NPR (2019), средняя ночная температура в Фениксе за последние полвека выросла примерно на 9 °F (около 5 °C).',
    },
    usedFor: ['g3-urban-stress'],
    src: [
      { kind: 'web', title: 'Urban heat island affects Phoenix all year round (A. Brazel, Arizona Republic, 2007; ASU news)', url: 'https://ke.news.prod.rtd.asu.edu/2007/09/22/urban-heat-island-affects-phoenix-all-year-round/' },
      { kind: 'web', title: 'Phoenix residents will need to adapt to an even hotter climate (NPR, 2019)', url: 'https://www.publicradioeast.org/us/2019-09-18/phoenix-residents-will-need-to-adapt-to-an-even-hotter-climate' },
    ],
  },
];
