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
      en: 'For 26–27 July 2005, the India Meteorological Department’s map records 944.2 mm at Santacruz, 493 mm at Dharavi and 73.4 mm at Colaba (MAUSAM, 57(3), 2006, p. 565, Figure 14 and section 12.1). The 24-hour Santacruz total was recorded on the morning of 27 July. These are station measurements, not uniform rainfall throughout Mumbai, and rainfall alone does not measure flood depth, household loss or recovery.',
      ru: 'На карте Метеорологического департамента Индии за 26–27 июля 2005 года указаны 944,2 мм в Santacruz, 493 мм в Дхарави и 73,4 мм в Colaba (MAUSAM, 57(3), 2006, с. 565, рис. 14 и раздел 12.1). Суточный итог Santacruz зафиксирован утром 27 июля. Это станционные измерения, а не одинаковые осадки во всём Мумбаи; сами осадки не измеряют глубину затопления, потери семей и восстановление.',
    },
    usedFor: ['g3-urban-stress'],
    src: [
      { kind: 'web', title: 'India Meteorological Department, Weather in India: Monsoon season 2005, MAUSAM 57(3), 2006', url: 'https://mausamjournal.imd.gov.in/index.php/MAUSAM/article/download/495/398/1596', locator: 'p. 565, Figure 14 and section 12.1; PDF p. 39' },
    ],
  },
  {
    id: 'g-jakarta-subsidence',
    subject: 'geo',
    title: { en: 'Land subsidence and flooding in Jakarta', ru: 'Просадка грунта и наводнения в Джакарте' },
    place: 'Jakarta, Indonesia',
    scale: 'local',
    years: '1925–2015, 2017–2022',
    lat: -6.2088,
    lng: 106.8456,
    facts: {
      en: 'An ITB study of land data from 1925 to 2015, reported by The Jakarta Post in December 2019, found that Pluit had sunk about 4 m by 2015 and that Jakarta is still sinking by about 1 to 15 cm a year. The same team found that the subsidence rate in Muara Baru, North Jakarta, had fallen from about 20–26 cm a year to 10–12 cm a year. A UGM study of satellite data for 2017–2022 (Geocarto International, 2024) ties the strong subsidence to fast urban growth and heavy pumping of groundwater; its abstract names Cikarang and the coastal zone of North Jakarta as the areas with the most significant subsidence.',
      ru: 'По исследованию ITB (данные 1925–2015 годов), о котором в декабре 2019 года писала The Jakarta Post, к 2015 году район Плуит (Pluit) опустился примерно на 4 м, а Джакарта продолжает опускаться примерно на 1–15 см в год. Та же команда отметила, что темп просадки в Муара-Бару (Северная Джакарта) снизился примерно с 20–26 см до 10–12 см в год. Исследование UGM (2024) на спутниковых данных за 2017–2022 годы связывает сильную просадку с быстрым ростом городов и интенсивной откачкой грунтовых вод; в его абстракте названы Cikarang и прибрежная зона Северной Джакарты как районы с самой значительной просадкой.',
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
    years: '2007',
    lat: 33.4484,
    lng: -112.074,
    facts: {
      en: 'Anthony Brazel of Arizona State University wrote in 2007 that the urban heat island makes Phoenix’s night-time low temperatures 10 to 15 degrees Fahrenheit (about 5.6 to 8.3 °C) higher than in rural areas. The effect builds after sundown: high evening temperatures account for most of the urban–rural difference. By day, the highest temperatures often occur in the natural desert, while the urban centre can be slightly cooler.',
      ru: 'Энтони Брейзел (Arizona State University) в 2007 году писал, что тепловой остров делает ночные минимумы Феникса на 10–15 °F (около 5,6–8,3 °C) выше, чем в сельской местности. Эффект усиливается после заката: высокие вечерние температуры дают большую часть разницы между городом и сельской местностью. Днём самые высокие температуры чаще всего бывают в природной пустыне, а городской центр может быть немного прохладнее.',
    },
    usedFor: ['g3-urban-stress'],
    src: [
      { kind: 'web', title: 'Urban heat island affects Phoenix all year round (A. J. Brazel, for the Arizona Republic, 22 September 2007; KE News, Arizona State University)', url: 'https://ke.news.prod.rtd.asu.edu/2007/09/22/urban-heat-island-affects-phoenix-all-year-round/' },
    ],
  },
];
