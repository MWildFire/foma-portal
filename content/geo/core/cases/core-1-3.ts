import type { CaseStudy } from '../../../../src/contract/types';

// Core 1.3 cases. Sources are attached to each case; private author evidence records
// the exact bounded source reads and calculations. Bibliography presence alone is not verification.
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
      en: 'China promoted a one-child norm from 1980, but implementation was not universal: the health authority describes rural and other exceptions, including a second child for some rural families with one daughter from 1984. A nationwide two-child policy took effect on 1 January 2016. The June 2021 central decision, published on 20 July, introduced a three-child policy and removal of related penalties (sections 8–9). Births were 17.86 million in 2016 and 7.92 million in 2025 (NBS annual communiqués). The total fertility rate was 2.74 in 1980 and 1.01 in 2024 (World Bank, SP.DYN.TFRT.IN). These before-and-after values do not isolate the effect of any one policy; fertility had already fallen before 1980.',
      ru: 'С 1980 года Китай продвигал норму «один ребёнок», но её применение не было всеобщим: ведомство здравоохранения описывает исключения, в том числе разрешение второго ребёнка некоторым сельским семьям с единственной дочерью с 1984 года. Общенациональная политика двух детей вступила в силу 1 января 2016 года. Решение центральных властей от июня 2021 года, опубликованное 20 июля, предусматривало политику трёх детей и отмену связанных ограничительных санкций (пункты 8–9). В 2016 году родилось 17,86 млн человек, в 2025 году — 7,92 млн (ежегодные коммюнике NBS). Суммарный коэффициент рождаемости составлял 2,74 в 1980 году и 1,01 в 2024 году (Всемирный банк, SP.DYN.TFRT.IN). Сравнение до и после не выделяет эффект отдельной меры: рождаемость снижалась ещё до 1980 года.',
    },
    usedFor: TOPIC,
    src: [
      { kind: 'web', title: 'National Bureau of Statistics of China, Statistical Communiqué on the 2016 National Economic and Social Development', url: 'https://www.stats.gov.cn/english/PressRelease/201702/t20170228_1467503.html' },
      { kind: 'web', title: 'National Bureau of Statistics of China, Statistical Communiqué on the 2025 National Economic and Social Development', url: 'https://www.stats.gov.cn/english/PressRelease/202602/t20260228_1962661.html' },
      { kind: 'web', title: 'World Bank, Fertility rate, total (births per woman), China (SP.DYN.TFRT.IN)', url: 'https://data.worldbank.org/indicator/SP.DYN.TFRT.IN?locations=CN' },
      { kind: 'web', title: 'China health authority, response to NPC recommendation 4776: policy history and exceptions', url: 'https://www.nhc.gov.cn/zwgk/jianyi/201801/a0f5e8be51154fd3974555da883809f3.shtml', locator: 'Historical policy paragraphs: 1980 norm; 1984 rural exceptions' },
      { kind: 'web', title: 'China health authority, nationwide two-child policy outline (2016)', url: 'https://www.nhc.gov.cn/jczds/s3577/201601/91d7607107e64c98bd0617a747e63aab.shtml', locator: 'Implementation from 1 January 2016' },
      { kind: 'web', title: 'CPC Central Committee and State Council, decision on optimising birth policy (26 June 2021; published 20 July)', url: 'https://app.www.gov.cn/govdata/gov/202107/20/473722/article.html', locator: 'Sections 8–9: three-child policy and removal of penalties' },
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
      en: 'The “Stop at Two” campaign began in 1972; in 1987 its slogan was replaced by “Have three or more, if you can afford it” (NLB BiblioAsia, 2022). The Baby Bonus took effect on 1 April 2001 (Singapore Ministry of Community Development and Sports, second periodic CEDAW report, paragraph 10), when the total fertility rate was 1.41 (World Bank, SP.DYN.TFRT.IN). The rate was 0.97 in 2024 (SingStat, Total Fertility Rate 2025 release) and 0.87 in 2025 (SingStat, Population Trends 2026).',
      ru: 'Кампания «Stop at Two» началась в 1972 году; в 1987 году её лозунг сменили на «Have three or more, if you can afford it» («Трое и больше, если можете себе позволить») (NLB BiblioAsia, 2022). «Бэби-бонус» начал действовать 1 апреля 2001 года (второй периодический доклад Сингапура по CEDAW, пункт 10), когда суммарный коэффициент рождаемости составлял 1,41 (Всемирный банк, SP.DYN.TFRT.IN). В 2024 году он составил 0,97 (SingStat, релиз «Total Fertility Rate 2025»), а в 2025 году — 0,87 (SingStat, «Population Trends 2026»).',
    },
    usedFor: TOPIC,
    src: [
      { kind: 'web', title: 'NLB BiblioAsia, The Early Days of Family Planning in Singapore (October 2022)', url: 'https://biblioasia.nlb.gov.sg/vol-18/issue-3/oct-dec-2022/family-planning-singapore/' },
      { kind: 'web', title: 'Singapore Department of Statistics (SingStat), Total Fertility Rate 2025 (news, 6 May 2026)', url: 'https://www.singstat.gov.sg/find-data/explore-data-themes/population/births-and-fertility/latest-news-data' },
      { kind: 'web', title: 'Singapore Department of Statistics (SingStat), Population Trends 2026', url: 'https://www.singstat.gov.sg/publication-resources/population-trends-2026' },
      { kind: 'web', title: 'Singapore Ministry of Community Development and Sports, second periodic CEDAW report (April 2001)', url: 'https://www.msf.gov.sg/docs/default-source/programmes-document/cedaw/singapore%27s-2nd-periodic-cedaw-report-%28apr-2001%29_mcys-website.pdf', locator: 'Paragraph 10, printed p. 4: commencement 1 April 2001' },
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
      en: 'Personal remittances received by the Philippines were 12.8% of GDP in 2005 and fell to 8.7% in 2024 and 8.5% in 2025 (World Bank, BX.TRF.PWKR.DT.GD.ZS). In US dollars they rose from 40.28 billion in 2024 to 41.56 billion in 2025 (World Bank, BX.TRF.PWKR.CD.DT). The share fell while the dollar amount rose, so nominal GDP measured in the same current US dollars grew faster than remittances over 2024–2025; this does not establish faster real output growth.',
      ru: 'Личные денежные переводы, полученные Филиппинами, составляли 12,8% ВВП в 2005 году и снизились до 8,7% в 2024 году и 8,5% в 2025 году (Всемирный банк, BX.TRF.PWKR.DT.GD.ZS). В долларах США они выросли с 40,28 млрд в 2024 году до 41,56 млрд в 2025 году (Всемирный банк, BX.TRF.PWKR.CD.DT). Доля снизилась, хотя сумма в долларах выросла, поэтому в 2024–2025 годах номинальный ВВП в тех же текущих долларах США рос быстрее переводов; это не позволяет судить о темпе реального роста выпуска.',
    },
    usedFor: TOPIC,
    src: [
      { kind: 'web', title: 'World Bank, Personal remittances, received (% of GDP), Philippines (BX.TRF.PWKR.DT.GD.ZS)', url: 'https://data.worldbank.org/indicator/BX.TRF.PWKR.DT.GD.ZS?locations=PH' },
      { kind: 'web', title: 'World Bank, Personal remittances, received (current US$), Philippines (BX.TRF.PWKR.CD.DT)', url: 'https://data.worldbank.org/indicator/BX.TRF.PWKR.CD.DT?locations=PH' },
    ],
  },
  {
    id: 'core-1-3-case-vietnam',
    subject: 'geo',
    title: {
      en: 'Viet Nam: a demographic dividend window',
      ru: 'Вьетнам: окно демографического дивиденда',
    },
    place: 'Viet Nam',
    scale: 'national',
    years: '1995–2024',
    lat: 14.06,
    lng: 108.28,
    facts: {
      en: 'The share of people aged 15 to 64 rose from 58.36% of the population in 1995 to 67.73% in 2024, and the age dependency ratio (people outside ages 15–64 per 100 people aged 15–64) fell from 71.35 to 47.65 over the same years (World Bank, World Development Indicators, SP.POP.1564.TO.ZS and SP.POP.DPND, population data from UN WPP). A high working-age share creates an opportunity, not a measured economic dividend. Realising it depends on health, education, productive employment and supporting institutions.',
      ru: 'Доля населения в возрасте 15–64 лет выросла с 58,36% в 1995 году до 67,73% в 2024 году, а коэффициент демографической нагрузки (людей вне возраста 15–64 лет на 100 человек в этой возрастной группе) снизился с 71,35 до 47,65 за те же годы (Всемирный банк, WDI, SP.POP.1564.TO.ZS и SP.POP.DPND; данные о населении из UN WPP). Высокая доля этой возрастной группы создаёт возможность, а не измеренный экономический дивиденд. Реализация зависит от здоровья, образования, продуктивной занятости и поддерживающих институтов.',
    },
    usedFor: ['core-1-3-challenges-opportunities'],
    src: [
      { kind: 'web', title: 'World Bank, World Development Indicators: SP.POP.1564.TO.ZS and SP.POP.DPND, Viet Nam (1995, 2024)', url: 'https://data.worldbank.org/indicator/SP.POP.1564.TO.ZS?locations=VN' },
    ],
  },
];
