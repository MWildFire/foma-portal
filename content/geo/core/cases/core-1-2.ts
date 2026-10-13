import type { CaseStudy } from '../../../../src/contract/types';

// Core 1.2 cases. Every figure below was read from the source named in the text (checked in this session):
// Lagos from UN DESA WUP 2025 Annex Table A4; Dubai and the UAE from dubai.ae, UN DESA International Migrant
// Stock 2024 and a Gulf News report of FCSC data; Shenzhen from the Shenzhen Municipal Government census bulletins.
const TOPIC = ['core-1-2-changing-populations'];

export const cases: CaseStudy[] = [
  {
    id: 'core-1-2-case-lagos',
    subject: 'geo',
    title: { en: 'Lagos, Nigeria: a growing megacity', ru: 'Лагос, Нигерия: растущий мегаполис' },
    place: 'Lagos, Nigeria',
    scale: 'local',
    years: '2000–2050',
    lat: 6.5244,
    lng: 3.3792,
    facts: {
      en: 'UN DESA (2025), World Urbanization Prospects 2025, Annex Table A4: Lagos had 7.9 million people in 2000 and 12.8 million in 2025, an average annual rate of change of 1.92% over 2000–2025. The UN projects 16.2 million by 2050. In 2025 Lagos ranked 26th among the world’s cities and was one of 33 megacities. These figures use the UN city definition, which covers a different area from Lagos State.',
      ru: 'UN DESA (2025), World Urbanization Prospects 2025, таблица A4 приложения: в Лагосе жило 7,9 млн человек в 2000 году и 12,8 млн в 2025 году; среднегодовой темп изменения численности за 2000–2025 годы составил 1,92%. ООН прогнозирует 16,2 млн человек к 2050 году. В 2025 году Лагос занимал 26-е место среди городов мира и был одним из 33 мегаполисов. Цифры рассчитаны по определению ООН для города; его территория отличается от штата Лагос.',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'UN DESA Population Division, World Urbanization Prospects: The 2025 Revision, Summary of Results (2025), Annex Table A4 (p. 121)',
        url: 'https://desapublications.un.org/publications/world-urbanization-prospects-2025-summary-results',
      },
    ],
  },
  {
    id: 'core-1-2-case-dubai',
    subject: 'geo',
    title: { en: 'Dubai and the UAE: an international migrant workforce', ru: 'Дубай и ОАЭ: рабочая сила из числа международных мигрантов' },
    place: 'Dubai, UAE',
    scale: 'national',
    years: '2024',
    lat: 25.2048,
    lng: 55.2708,
    facts: {
      en: 'Dubai Statistics Center (dubai.ae): Dubai had 3,863,600 residents at the end of 2024. UN DESA (International Migrant Stock 2024, Tables 1 and 3): the UAE had 8,157,000 international migrants in 2024, which is 74.0% of its population; 5,491,000 of these migrants were men, about two-thirds. The migrant share counts residents born abroad, not citizenship. In 2024 men were 64% of the UAE’s residents (FCSC, as reported by Gulf News in September 2025).',
      ru: 'Статистический центр Дубая (dubai.ae): на конец 2024 года в Дубае было 3 863 600 жителей. UN DESA (International Migrant Stock 2024, таблицы 1 и 3): в 2024 году в ОАЭ было 8 157 000 международных мигрантов, то есть 74,0% населения; из них 5 491 000 были мужчинами, около двух третей. Доля мигрантов считает жителей, родившихся за границей, а не граждан. В 2024 году мужчины составляли 64% жителей ОАЭ (FCSC по данным Gulf News, сентябрь 2025 года).',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'Dubai Statistics Center, population at the end of 2024 (dubai.ae)',
        url: 'https://www.dubai.ae/population-and-vital-statistics',
      },
      {
        kind: 'web',
        title: 'UN DESA Population Division, International Migrant Stock 2024 (file undesa_pd_2024_ims_stock_by_sex_and_destination.xlsx, Tables 1 and 3)',
        url: 'https://www.un.org/development/desa/pd/node/3315',
      },
      {
        kind: 'web',
        title: 'Gulf News, "UAE population hits 11.3 million in 2024" (FCSC data), 8 September 2025',
        url: 'https://gulfnews.com/uae/government/uae-population-hits-113-million-in-2024-1.500261527',
      },
    ],
  },
  {
    id: 'core-1-2-case-shenzhen',
    subject: 'geo',
    title: { en: 'Shenzhen, China: migrants and the hukou system', ru: 'Шэньчжэнь, Китай: мигранты и система хукоу' },
    place: 'Shenzhen, China',
    scale: 'local',
    years: '1980–2020',
    lat: 22.5431,
    lng: 114.0579,
    facts: {
      en: 'Shenzhen became one of China’s first Special Economic Zones, set up in 1980 (China Daily, 26 August 2019). Its resident population rose from 10,423,973 in 2010 to 17,560,061 in 2020, an increase of 68.5% (Shenzhen Municipal Government, Seventh National Population Census bulletin No. 1, 2021). In 2020, 12,438,738 residents (71%) were floating population: they lived away from their registered place for six months or more and were registered outside the city. This group grew by 51.3% between 2010 and 2020 (bulletin No. 6).',
      ru: 'Шэньчжэнь стал одной из первых особых экономических зон Китая, созданных в 1980 году (China Daily, 26 августа 2019 года). Численность постоянных жителей выросла с 10 423 973 человек в 2010 году до 17 560 061 в 2020 году, то есть на 68,5% (Муниципальное правительство Шэньчжэня, бюллетень № 1 Седьмой национальной переписи населения, 2021). В 2020 году 12 438 738 жителей (71%) относились к «плавающему населению (floating population)»: они жили вдали от места регистрации не менее шести месяцев и были зарегистрированы за пределами города. Эта группа выросла на 51,3% в 2010–2020 годах (бюллетень № 6).',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'Shenzhen Municipal Government, Seventh National Population Census bulletins No. 1 to 4 (gazette 2021, issue 19)',
        url: 'https://www.sz.gov.cn/zfgb/2021/gb1199/content/post_8806392.html',
      },
      {
        kind: 'web',
        title: 'Shenzhen Municipal Government, Seventh National Population Census bulletin No. 6 (floating population), 2021',
        url: 'https://www.sz.gov.cn/cn/xxgk/zfxxgj/tjsj/tjgb/content/post_8772100.html',
      },
      {
        kind: 'web',
        title: 'China Daily, "This day, that year": Special Economic Zones approved on 26 August 1980 (26 August 2019)',
        url: 'https://xiamen.chinadaily.com.cn/2019-08/26/c_399194.htm',
      },
    ],
  },
];
