import type { CaseStudy } from '../../../../src/contract/types';

// Core 1.3 cases. Every figure below was read from the source named in the text, checked in this session:
// China from the NBS communiqués for 2016 and 2025, World Bank SP.DYN.TFRT.IN, Wikipedia (policy dates and the
// official 400 million claim) and NPR (2016 and 2021 changes); Singapore from SingStat (2025 and 2026 releases),
// NLB BiblioAsia (2022), Fortune (2026) and World Bank SP.DYN.TFRT.IN; the Philippines from World Bank
// BX.TRF.PWKR.DT.GD.ZS and BX.TRF.PWKR.CD.DT (data updated 8 October 2026).
const TOPIC = ['core-1-3-challenges-opportunities'];

export const cases: CaseStudy[] = [
  {
    id: 'core-1-3-case-china',
    subject: 'geo',
    title: {
      en: 'China: the one-child policy and a shrinking population',
      ru: 'Китай: политика «одного ребёнка» и сокращение населения',
    },
    place: 'China',
    scale: 'national',
    years: '1980–2025',
    lat: 39.9042,
    lng: 116.4074,
    facts: {
      en: 'A near-universal one-child limit was imposed in 1980 and replaced by a two-child limit on 1 January 2016 (Wikipedia, “One-child policy”); a three-child limit was announced on 31 May 2021 (NPR). Births were 17.86 million in 2016 (National Bureau of Statistics, 2016 communiqué) and fell to 7.92 million in 2025 (NBS, 2025 communiqué). The total fertility rate fell from 2.74 in 1980 to 1.01 in 2024 (World Bank, SP.DYN.TFRT.IN). The government has credited the policy with averting a very large number of births; some demographers question that estimate (Wikipedia).',
      ru: 'Почти всеобщее ограничение «один ребёнок» введено в 1980 году, с 1 января 2016 года его заменило ограничение «два ребёнка» (Wikipedia, «One-child policy»); ограничение «три ребёнка» объявлено 31 мая 2021 года (NPR). Число родившихся составило 17,86 млн в 2016 году (Национальное бюро статистики Китая, коммюнике за 2016 год) и снизилось до 7,92 млн в 2025 году (NBS, коммюнике за 2025 год). Суммарный коэффициент рождаемости снизился с 2,74 в 1980 году до 1,01 в 2024 году (Всемирный банк, SP.DYN.TFRT.IN). Правительство приписывает политике предотвращение очень большого числа рождений; часть демографов оспаривает эту оценку (Wikipedia).',
    },
    usedFor: TOPIC,
    src: [
      { kind: 'web', title: 'National Bureau of Statistics of China, Statistical Communiqué on the 2016 National Economic and Social Development', url: 'https://www.stats.gov.cn/english/PressRelease/201702/t20170228_1467503.html' },
      { kind: 'web', title: 'National Bureau of Statistics of China, Statistical Communiqué on the 2025 National Economic and Social Development', url: 'https://www.stats.gov.cn/english/PressRelease/202602/t20260228_1962661.html' },
      { kind: 'web', title: 'World Bank, Fertility rate, total (births per woman), China (SP.DYN.TFRT.IN)', url: 'https://data.worldbank.org/indicator/SP.DYN.TFRT.IN?locations=CN' },
      { kind: 'web', title: 'Wikipedia, One-child policy (1980 start, 1 January 2016 change)', url: 'https://en.wikipedia.org/wiki/One-child_policy' },
      { kind: 'web', title: 'NPR (via WHYY), Confronted by aging population, China allows couples to have three children (31 May 2021)', url: 'https://whyy.org/npr-story/confronted-by-aging-population-china-allows-couples-to-have-three-children' },
    ],
  },
  {
    id: 'core-1-3-case-singapore',
    subject: 'geo',
    title: {
      en: 'Singapore: from “Stop at Two” to the Baby Bonus',
      ru: 'Сингапур: от кампании «Stop at Two» к «бэби-бонусу»',
    },
    place: 'Singapore',
    scale: 'national',
    years: '1972–2025',
    lat: 1.3521,
    lng: 103.8198,
    facts: {
      en: 'The “Stop at Two” campaign began in 1972; in 1987 its slogan was replaced by “Have three or more, if you can afford it” (NLB BiblioAsia, 2022). The Baby Bonus was first introduced in 2001 (Fortune, 29 August 2026), when the total fertility rate was 1.41 (World Bank, SP.DYN.TFRT.IN). The rate was 0.97 in 2024 (SingStat, Total Fertility Rate 2025 release) and 0.87 in 2025 (preliminary; SingStat, Population Trends 2026).',
      ru: 'Кампания «Stop at Two» началась в 1972 году; в 1987 году её лозунг сменили на «Have three or more, if you can afford it» («Трое и больше, если можете себе позволить») (NLB BiblioAsia, 2022). «Бэби-бонус» впервые введён в 2001 году (Fortune, 29 августа 2026), когда суммарный коэффициент рождаемости составлял 1,41 (Всемирный банк, SP.DYN.TFRT.IN). В 2024 году он составил 0,97 (SingStat, релиз «Total Fertility Rate 2025»), а в 2025 году — 0,87 (предварительно; SingStat, «Population Trends 2026»).',
    },
    usedFor: TOPIC,
    src: [
      { kind: 'web', title: 'NLB BiblioAsia, The Early Days of Family Planning in Singapore (October 2022)', url: 'https://biblioasia.nlb.gov.sg/vol-18/issue-3/oct-dec-2022/family-planning-singapore/' },
      { kind: 'web', title: 'Singapore Department of Statistics (SingStat), Total Fertility Rate 2025 (news, 6 May 2026)', url: 'https://www.singstat.gov.sg/find-data/explore-data-themes/population/births-and-fertility/latest-news-data' },
      { kind: 'web', title: 'Singapore Department of Statistics (SingStat), Population Trends 2026', url: 'https://www.singstat.gov.sg/publication-resources/population-trends-2026' },
      { kind: 'web', title: 'Fortune, Singapore overhauls baby bonus, will it work to boost fertility (29 August 2026)', url: 'https://fortune.com/2026/08/29/singapore-overhauls-baby-bonus-will-it-work-boost-fertility/' },
      { kind: 'web', title: 'World Bank, Fertility rate, total (births per woman) (SP.DYN.TFRT.IN)', url: 'https://data.worldbank.org/indicator/SP.DYN.TFRT.IN' },
    ],
  },
  {
    id: 'core-1-3-case-philippines',
    subject: 'geo',
    title: {
      en: 'Philippines: remittances from overseas workers',
      ru: 'Филиппины: денежные переводы от работающих за границей',
    },
    place: 'Philippines',
    scale: 'national',
    years: '2005–2025',
    lat: 14.5995,
    lng: 120.9842,
    facts: {
      en: 'Personal remittances received by the Philippines were 12.8% of GDP in 2005 and fell to 8.7% in 2024 and 8.5% in 2025 (World Bank, BX.TRF.PWKR.DT.GD.ZS). In US dollars they rose from 40.28 billion in 2024 to 41.56 billion in 2025 (World Bank, BX.TRF.PWKR.CD.DT). The share fell while the dollar amount rose, so GDP grew faster than remittances in those years.',
      ru: 'Личные денежные переводы, полученные Филиппинами, составляли 12,8% ВВП в 2005 году и снизились до 8,7% в 2024 году и 8,5% в 2025 году (Всемирный банк, BX.TRF.PWKR.DT.GD.ZS). В долларах США они выросли с 40,28 млрд в 2024 году до 41,56 млрд в 2025 году (Всемирный банк, BX.TRF.PWKR.CD.DT). Доля снизилась, хотя сумма в долларах выросла, поэтому в эти годы ВВП рос быстрее переводов.',
    },
    usedFor: TOPIC,
    src: [
      { kind: 'web', title: 'World Bank, Personal remittances, received (% of GDP), Philippines (BX.TRF.PWKR.DT.GD.ZS)', url: 'https://data.worldbank.org/indicator/BX.TRF.PWKR.DT.GD.ZS?locations=PH' },
      { kind: 'web', title: 'World Bank, Personal remittances, received (current US$), Philippines (BX.TRF.PWKR.CD.DT)', url: 'https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT?locations=PH' },
    ],
  },
];
