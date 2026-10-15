import type { CaseStudy } from '../../../../src/contract/types';

// Syllabus core 3.2. Every figure is taken from the public source named in the facts and in src, with its year.
// Figures marked "own calculation" were computed from the source figures; the rounding follows the source.
export const cases: CaseStudy[] = [
  {
    id: 'core-3-2-case-aral-sea',
    subject: 'geo',
    title: {
      en: 'Aral Sea: shrinking after river diversion for irrigation',
      ru: 'Аральское море: сокращение после переброски рек на орошение',
    },
    place: 'Aral Sea, Central Asia (Kazakhstan and Uzbekistan)',
    scale: 'regional',
    years: '1960–2010',
    lat: 45.0,
    lng: 59.0,
    facts: {
      en: 'Between 1960 and 2010 the sea’s surface area fell from 68,000 km² to 14,280 km² (own calculation: a fall of 79%), and its water volume from 1,093 km³ to 98.1 km³ (Springer, Applied Water Science, 2012, citing Alikhanov, 2010). River inflow fell from 42 km³ in 1960 to 4.5 km³ in 2010, and salinity rose from 10 g/L in 1960 to 120–130 g/L in 2009–2010 (same source). Wind carried about 45 million tonnes of salty dust a year (same source, citing Alikhanov, 2010, and Dukhovny, 2010). The cause was the diversion of the Amu Darya and Syr Darya rivers for Soviet irrigation projects.',
      ru: 'В 1960–2010 годах площадь Аральского моря сократилась с 68 000 км² до 14 280 км² (собственный расчёт: снижение на 79%), а объём воды — с 1093 км³ до 98,1 км³ (Springer, Applied Water Science, 2012, со ссылкой на Alikhanov, 2010). Приток рек сократился с 42 км³ в 1960 году до 4,5 км³ в 2010 году, а солёность выросла с 10 г/л в 1960 году до 120–130 г/л в 2009–2010 годах (там же). Ветер ежегодно поднимал около 45 млн тонн солёной и загрязнённой пыли (там же; со ссылкой на Alikhanov, 2010, и Dukhovny, 2010). Причиной стала переброска рек Амударья и Сырдарья на ирригационные проекты советского времени (там же).',
    },
    usedFor: ['core-3-2-impacts-consumption'],
    src: [
      {
        kind: 'web',
        title: 'Springer, Applied Water Science (2012), Changes in water volume of the Aral Sea after 1960 (citing Alikhanov, 2010)',
        url: 'https://link.springer.com/article/10.1007/s13201-012-0048-z',
      },
    ],
  },
  {
    id: 'core-3-2-case-colorado-river',
    subject: 'geo',
    title: {
      en: 'Colorado River: allocation, drought and depletion',
      ru: 'Река Колорадо: распределение, засуха и истощение',
    },
    place: 'Colorado River Basin, USA and Mexico',
    scale: 'regional',
    years: '1922–2026',
    lat: 36.0,
    lng: -114.7,
    facts: {
      en: 'The 1922 Colorado River Compact divided the basin into an Upper Basin and a Lower Basin (Wikipedia, summarising the Compact). The 1922 Compact gave the Lower Basin states an apportionment of 7.5 million acre-feet a year, and the 1964 decree in Arizona v. California set their shares (Bureau of Reclamation, 2007 Interim Guidelines page). Agricultural uses depend on 70% of the river’s water, while between 35 and 40 million people rely on it for some or all of their municipal needs (Bureau of Reclamation, Colorado River Basin page, checked 13 October 2026). In April 2026, long-term drought had cut system storage to about 36% of capacity, and Reclamation said the river supplies more than 40 million people (Reclamation news release of 17 April 2026, linked from the Colorado River Basin page). The 2007 Interim Guidelines were in place from 2008 to 31 December 2025 (Bureau of Reclamation).',
      ru: 'Компакт о реке Колорадо 1922 года разделил бассейн на Верхний и Нижний (Википедия, пересказ соглашения). Компакт 1922 года дал штатам Нижнего бассейна распределение 7,5 млн акр-футов (acre-feet) в год, а решение суда 1964 года по делу «Аризона против Калифорнии» закрепило доли штатов (Бюро мелиорации США, страница Interim Guidelines 2007 года). На сельское хозяйство приходится 70% воды реки, а от 35 до 40 млн человек зависят от неё для части или всех своих муниципальных нужд (Бюро мелиорации США, страница бассейна реки Колорадо, проверено 13 октября 2026 года). В апреле 2026 года длительная засуха сократила запасы системы до примерно 36% ёмкости, а Бюро мелиорации США заявило, что река снабжает более 40 млн человек (пресс-релиз Бюро от 17 апреля 2026 года, ссылка со страницы бассейна). Временные правила 2007 года действовали с 2008 года до 31 декабря 2025 года (Бюро мелиорации США).',
    },
    usedFor: ['core-3-2-impacts-consumption'],
    src: [
      { kind: 'web', title: 'Bureau of Reclamation, Colorado River Basin', url: 'https://www.usbr.gov/ColoradoRiverBasin/index.html' },
      { kind: 'web', title: 'Bureau of Reclamation, 2007 Interim Guidelines', url: 'https://www.usbr.gov/ColoradoRiverBasin/interimguidelines/index.html' },
      { kind: 'web', title: 'Wikipedia, Colorado River Compact (basin division and 7.5 million acre-feet allotments)', url: 'https://en.wikipedia.org/wiki/Colorado_River_Compact' },
      {
        kind: 'web',
        title: 'Bureau of Reclamation, Record of Decision: Decision Framework for Colorado River Guidelines (2027–2036), 2026',
        url: 'https://www.usbr.gov/ColoradoRiverBasin/post2026/decision-doc/P26_RecordofDecision_Final.pdf',
      },
      {
        kind: 'web',
        title: 'Bureau of Reclamation, 2027–2028 Operating Guidelines for Lake Powell and Lake Mead, released 21 August 2026 (Interior press release of the same date)',
        url: 'https://www.usbr.gov/ColoradoRiverBasin/post2026/decision-doc/2027-2028OperatingGuidelines_Final.pdf',
      },
    ],
  },
  {
    id: 'core-3-2-case-ogoniland',
    subject: 'geo',
    title: {
      en: 'Ogoniland: oil pollution and community health',
      ru: 'Огониленд: нефтяное загрязнение и здоровье жителей',
    },
    place: 'Ogoniland, Rivers State, Nigeria',
    scale: 'local',
    years: '2011–2012',
    lat: 4.8,
    lng: 7.2,
    facts: {
      en: 'UNEP’s 2011 Environmental Assessment of Ogoniland tested water from 142 groundwater monitoring wells and soil from 780 boreholes (UNEP press release, 1 August 2012). At Nisisioken Ogale, families were drinking well water contaminated with benzene, a known carcinogen, at levels over 900 times the World Health Organization guideline (UNEP press release, 1 August 2012). UNEP estimated that cleaning up the pollution and restoring Ogoniland could take 25 to 30 years, and it proposed an initial USD 1 billion to cover the first five years of clean-up (UNEP press release, 1 August 2012). UNEP described the legacy of some 50 years of oil exploration and production (UNEP press release, 1 August 2012).',
      ru: 'Оценка ЮНЕП 2011 года по окружающей среде Огонилэнда проверила воду из 142 мониторинговых колодцев и почву из 780 скважин (пресс-релиз ЮНЕП, 1 августа 2012 года). В Нисисиокен-Огале семьи пили колодезную воду, загрязнённую бензолом (известным канцерогеном), в концентрациях более чем в 900 раз выше рекомендаций Всемирной организации здравоохранения (пресс-релиз ЮНЕП, 1 августа 2012 года). ЮНЕП оценила, что очистка от загрязнения и восстановление Огонилэнда могут занять 25–30 лет, и предложила начальные 1 млрд USD на первые пять лет очистки (пресс-релиз ЮНЕП, 1 августа 2012 года). ЮНЕП описала последствия примерно 50 лет нефтеразведки и добычи (пресс-релиз ЮНЕП, 1 августа 2012 года).',
    },
    usedFor: ['core-3-2-impacts-consumption'],
    src: [
      {
        kind: 'web',
        title: 'UNEP, press release “UNEP Welcomes Nigerian Governments Green Light for Ogoniland Oil Clean-Up” (1 August 2012), on the Environmental Assessment of Ogoniland (2011)',
        url: 'https://www.unep.org/news-and-stories/press-release/unep-welcomes-nigerian-governments-green-light-ogoniland-oil-clean',
      },
    ],
  },
];
