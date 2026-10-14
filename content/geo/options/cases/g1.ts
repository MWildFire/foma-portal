import type { CaseStudy } from '../../../../src/contract/types';

// Option G, G.1 cases. Every figure below was checked against the page named in src (WebFetch, 13.10.2026).
export const cases: CaseStudy[] = [
  {
    id: 'g-dubai-growth',
    subject: 'geo',
    title: { en: 'Dubai: fast growth in the UAE', ru: 'Дубай: быстрый рост в ОАЭ' },
    place: 'Dubai, UAE',
    scale: 'local',
    years: '2000–2024',
    lat: 25.2048,
    lng: 55.2708,
    facts: {
      en: 'Dubai’s population was about 0.86 million in 2000 (census count) and about 1.91 million in 2010 (estimate for the end of the year), rising to 3.86 million at the end of 2024 (Dubai government portal, dubai.ae). The rise between 2000 and 2010 was about 121%, and in 2010 about 91% of residents were not UAE citizens, so the city depends heavily on migrants.',
      ru: 'Население Дубая составляло около 0,86 млн человек в 2000 году (перепись) и около 1,91 млн в 2010 году (оценка на конец года), а на конец 2024 года — 3,86 млн (портал правительства Дубая, dubai.ae). Рост за 2000–2010 годы составил около 121%. В 2010 году около 91% жителей не были гражданами ОАЭ, поэтому город сильно зависит от мигрантов.',
    },
    usedFor: ['g1-urban-variety'],
    src: [
      {
        kind: 'web',
        title: 'Dubai Statistics Center data via Gulf Research Center: total population of Dubai, 2000 and 2010',
        url: 'https://gulfmigration.grc.net/uae-dubai-estimates-of-total-population-by-sex-1953-1968-census-dates-2006-2016/',
      },
      {
        kind: 'web',
        title: 'Dubai government portal: population and vital statistics (3,863,600 until the end of 2024)',
        url: 'https://www.dubai.ae/population-and-vital-statistics',
      },
      {
        kind: 'web',
        title: 'Dubai Statistics Center data via Gulf Research Center: population by nationality, 2010',
        url: 'https://gulfmigration.grc.net/uae-dubai-estimates-of-population-by-nationality-emiratis-non-emiratis-at-selected-dates-1975-2016/',
      },
    ],
  },
  {
    id: 'g-lagos-megacity',
    subject: 'geo',
    title: { en: 'Lagos: a megacity in an LEDC', ru: 'Лагос: мегаполис в развивающейся стране' },
    place: 'Lagos, Nigeria',
    scale: 'local',
    years: '1990–2030',
    lat: 6.5244,
    lng: 3.3792,
    facts: {
      en: 'The Lagos urban agglomeration grew from about 4.8 million people in 1990 to 13.5 million in 2018, and the UN projects 20.6 million by 2030 (UN World Urbanization Prospects 2018). It is one of three African megacities in 2018, with Cairo and Kinshasa, and its population grew by about 3.2% a year in 2015–2020. Growth on this scale outpaces the supply of formal housing and services.',
      ru: 'Агломерация Лагоса выросла с примерно 4,8 млн человек в 1990 году до 13,5 млн в 2018 году; ООН прогнозирует 20,6 млн к 2030 году (UN WUP 2018). Это один из трёх африканских мегаполисов 2018 года вместе с Каиром и Киншасой; в 2015–2020 годах население росло примерно на 3,2% в год. Такой рост опережает создание формального жилья и услуг.',
    },
    usedFor: ['g1-urban-variety'],
    src: [
      {
        kind: 'web',
        title: 'UN DESA, World Urbanization Prospects: The 2018 Revision, Highlights (table of urban agglomerations)',
        url: 'https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/files/documents/2020/Feb/un_2018_wup_highlights.pdf',
      },
    ],
  },
  {
    id: 'g-dharavi',
    subject: 'geo',
    title: { en: 'Dharavi, Mumbai: an informal settlement in the city', ru: 'Дхарави, Мумбаи: неформальное поселение в городе' },
    place: 'Mumbai, India',
    scale: 'local',
    years: '2022',
    lat: 19.0378,
    lng: 72.8536,
    facts: {
      en: 'The 2022 tender notice for the Dharavi Redevelopment Project calls Dharavi the largest slum in Mumbai and places it close to the Bandra-Kurla Complex. The notice gives the Dharavi Notified Area as about 240 hectares, while the detailed tender (RFQ cum RFP) gives a gross plot area of 259.54 hectares including railway land. Most of the land belongs to the Brihanmumbai Municipal Corporation (BMC) and other government bodies, and slum dwellers squatted on it and built hutments. The tender states that about 700,000 people (7 lakh) live on mezzanine and upper floors of slum structures and are not eligible for rehabilitation under the project. Neither document gives a total population for the area.',
      ru: 'В тендерном извещении 2022 года Дхарави назван крупнейшими трущобами Мумбаи и находится рядом с деловым районом Бандра-Курла (BKC). В извещении официальная зона Дхарави (Dharavi Notified Area) указана как около 240 га, а в подробном тендере (RFQ cum RFP) валовая площадь этой зоны составляет 259,54 га вместе с землями железных дорог. Большая часть земли принадлежит Муниципальной корпорации Большого Мумбаи (BMC) и другим государственным структурам; жители самовольно заселили эти участки и построили на них хижины. В тендере сказано, что около 700 тыс. человек (7 лакх) живут на антресолях и верхних этажах построек трущоб и не подпадают под условия переселения в рамках проекта. В обоих документах общая численность населения района не указана.',
    },
    usedFor: ['g1-urban-variety'],
    src: [
      {
        kind: 'web',
        title: 'Dharavi Redevelopment Project / Slum Rehabilitation Authority: RFQ cum RFP, Tender Ref. DRP/2/2022, Volume I (2022)',
        url: 'https://hcikl.gov.in/pdf/RFQ_cum_RFP_Vol.pdf',
      },
      {
        kind: 'web',
        title: 'Dharavi Redevelopment Project / Slum Rehabilitation Authority: tender notice, Tender Ref. DRP/2/2022 (2022)',
        url: 'https://hcikl.gov.in/pdf/Tender_Notice.pdf',
      },
    ],
  },
  {
    id: 'g-singapore-hdb',
    subject: 'geo',
    title: { en: 'Singapore: planned public housing (HDB)', ru: 'Сингапур: планируемое государственное жильё (HDB)' },
    place: 'Singapore',
    scale: 'national',
    years: '2025',
    lat: 1.3521,
    lng: 103.8198,
    facts: {
      en: 'In 2025, 77.2% of resident households lived in HDB flats, the public housing built by the Housing and Development Board (SingStat). This is a share of households, not of people, and it comes from SingStat’s annual household surveys (Census of Population, General Household Survey and Comprehensive Labour Force Survey), so it is a survey-based figure. Planned public housing on this scale gives the state a strong role in shaping the structure of the city.',
      ru: 'В 2025 году 77,2% резидентных домохозяйств жили в квартирах HDB — государственного жилья, которое строит Housing and Development Board (SingStat). Это доля домохозяйств, а не людей, и получена из ежегодных обследований домохозяйств SingStat (перепись населения, General Household Survey и Comprehensive Labour Force Survey), то есть опирается на данные обследований. Такое масштабное планируемое государственное жильё даёт государству сильную роль в формировании структуры города.',
    },
    usedFor: ['g1-urban-variety'],
    src: [
      {
        kind: 'web',
        title: 'SingStat: resident households by type of dwelling, latest news data (2025)',
        url: 'https://www.singstat.gov.sg/find-data/explore-data-themes/households/resident-households/latest-news-data',
      },
    ],
  },
];
