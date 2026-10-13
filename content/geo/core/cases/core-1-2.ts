import type { CaseStudy } from '../../../../src/contract/types';

// Core 1.2 cases. Every figure below was read from the source named in the text (checked in this session):
// Lagos from UN DESA World Cities in 2025 (data booklet, annex table 3); Dubai and the UAE from dubai.ae, UN DESA International Migrant
// Stock 2024; Shenzhen from the Shenzhen Municipal Government census bulletins.
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
      en: 'UN DESA (2025), World Cities in 2025 (data booklet), annex table 3: Lagos had 7.9 million people in 2000 and 12.8 million in 2025, an average annual rate of change of 1.92% over 2000–2025. The UN projects 16.2 million by 2050. In 2025 Lagos ranked 26th among the world’s cities and was one of 33 megacities. These figures use the UN city definition, which covers a different area from Lagos State. Across Nigeria, cities and towns (Degree of Urbanization) are projected to grow from 165 million people in 2018 to 307 million in 2050, about 142 million more (UN DESA, World Urbanization Prospects 2025, file F01).',
      ru: 'UN DESA (2025), World Cities in 2025 (data booklet), таблица 3 приложения: в Лагосе жило 7,9 млн человек в 2000 году и 12,8 млн в 2025 году; среднегодовой темп изменения численности за 2000–2025 годы составил 1,92%. ООН прогнозирует 16,2 млн человек к 2050 году. В 2025 году Лагос занимал 26-е место среди городов мира и был одним из 33 мегаполисов. Цифры рассчитаны по определению ООН для города; его территория отличается от штата Лагос. По Нигерии города и малые города (по методике Degree of Urbanization) по прогнозу вырастут с 165 млн человек в 2018 году до 307 млн в 2050 году, примерно на 142 млн (UN DESA, World Urbanization Prospects 2025, файл F01).',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'UN DESA Population Division, World Cities in 2025: data booklet (2025), annex table 3 (p. 30)',
        url: 'https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/undesa_pd_2025_data-booklet_world_cities_in_2025.pdf',
      },
      {
        kind: 'web',
        title: 'UN DESA Population Division, World Urbanization Prospects: The 2025 Revision, file F01 (population by degree of urbanization category)',
        url: 'https://population.un.org/wup/assets/Download/Countries%20and%20Aggregates/WUP2025-F01-Degree-of-Urbanization_Pop_by_category.xlsx',
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
      en: 'Dubai Statistics Center (dubai.ae): Dubai had 3,863,600 residents at the end of 2024. UN DESA (International Migrant Stock 2024, Tables 1 and 3): the UAE had 8,157,000 international migrants in 2024, which is 74.0% of its population; 5,491,000 of these migrants were men, about two-thirds. The UN counts a person as a migrant by country of birth where that is known, and by citizenship otherwise (UN DESA, IMS 2024 methodology). In 2024 men were about 64% of the UAE’s population (7.05 of 11.03 million; UN DESA, IMS 2024, Table 2).',
      ru: 'Статистический центр Дубая (dubai.ae): на конец 2024 года в Дубае было 3 863 600 жителей. UN DESA (International Migrant Stock 2024, таблицы 1 и 3): в 2024 году в ОАЭ было 8 157 000 международных мигрантов, то есть 74,0% населения; из них 5 491 000 были мужчинами, около двух третей. ООН относит человека к мигрантам по стране рождения, если она известна, и по гражданству в остальных случаях (UN DESA, IMS 2024, методология). В 2024 году мужчины составляли около 64% населения ОАЭ (7,05 из 11,03 млн; UN DESA, IMS 2024, таблица 2).',
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
  {
    id: 'core-1-2-case-somalia',
    subject: 'geo',
    title: {
      en: 'Somalia: drought, conflict and forced movement',
      ru: 'Сомали: засуха, конфликт и вынужденное перемещение',
    },
    place: 'Somalia',
    scale: 'national',
    years: '2025',
    lat: 5.15,
    lng: 46.2,
    facts: {
      en: 'Forced movement here has environmental and political push factors. IDMC counted 3,347,000 internally displaced people from conflict and insecurity at the end of 2025; new displacements in 2025 were 214,000 from conflict and 335,000 from disasters (IDMC, Global Report on Internal Displacement 2026). UNHCR (Somalia Protection and Solutions Monitoring Network, Annual Report 2025) reports 344,688 displacements from drought, which is emerging as the leading cause, and 230,428 displacements (35%) from conflict and insecurity.',
      ru: 'Вынужденное перемещение здесь вызвано и экологическими, и политическими факторами выталкивания. IDMC насчитал 3 347 000 внутренне перемещённых людей из-за конфликта и небезопасности на конец 2025 года; новые перемещения в 2025 году составили 214 000 из-за конфликтов и 335 000 из-за стихийных бедствий (IDMC, Global Report on Internal Displacement 2026). UNHCR (Somalia Protection and Solutions Monitoring Network, годовой отчёт за 2025 год) сообщает о 344 688 перемещениях из-за засухи, которая становится главной причиной, и о 230 428 перемещениях (35%) из-за конфликта и небезопасности.',
    },
    usedFor: ['core-1-2-changing-populations'],
    src: [
      { kind: 'web', title: 'IDMC, Global Report on Internal Displacement 2026 (annex table, p. 49)', url: 'https://api.internal-displacement.org/sites/default/files/publications/documents/IDMC-GRID-2026-Global-Report-on-Internal-Displacement.pdf' },
      { kind: 'web', title: 'UNHCR, Somalia Protection and Solutions Monitoring Network, Annual Report 2025 (pp. 2–3)', url: 'https://data.unhcr.org/es/documents/download/122295' },
    ],
  },
];
