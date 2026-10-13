import type { CaseStudy } from '../../../../src/contract/types';

// Core 2.3 cases. Every figure below was read from the public source named in the text, checked in this session (13 October 2026):
// Delta Works from the Flood Museum (Stichting Watersnoodmuseum); the solar park from pv magazine (DEWA update, June 2025) and the
// UAE Government Media Office (September 2023); Pakistan from the World Bank press release (October 2022), the UNFCCC news release
// (November 2022) and Our World in Data (annual CO2 emissions, Global Carbon Project data). The Ember shares are the same as in Figure 1.
const TOPIC = ['core-2-3-responding-climate-change'];

export const cases: CaseStudy[] = [
  {
    id: 'core-2-3-case-netherlands-delta-works',
    subject: 'geo',
    title: { en: 'Delta Works, Netherlands: flood defence after 1953', ru: 'Дельта-работы, Нидерланды: защита от наводнений после 1953 года' },
    place: 'Zeeland and South Holland, Netherlands',
    scale: 'national',
    years: '1953–1997',
    lat: 51.6336,
    lng: 3.7044,
    facts: {
      en: 'Stichting Watersnoodmuseum (Flood Museum), ‘The history of the Delta Works’: the flood of 1 February 1953 drowned 1,836 people and inundated 200,000 hectares. The Delta Committee estimated that the full programme would take 25 years and cost 1.5 to 2 billion guilders (5.6 to 7.4 billion euros, adjusted for inflation); the government approved the plan under the Delta Act in 1958. The Oosterscheldekering was officially opened on 4 October 1986, and the Maeslantkering was completed with the Hartelkering in 1997. The Delta Works now consist of five storm surge barriers, two sluice complexes and six dams.',
      ru: 'Музей наводнения (Stichting Watersnoodmuseum), статья «История Дельта-работ»: наводнение 1 февраля 1953 года унесло жизни 1 836 человек и затопило 200 000 гектаров. Комиссия по Дельте (Delta Committee) оценила, что вся программа займёт 25 лет и обойдётся в 1,5–2 млрд гульденов (5,6–7,4 млрд евро с учётом инфляции); в 1958 году правительство утвердило план в рамках Закона о Дельте (Delta Act). Oosterscheldekering официально открыли 4 октября 1986 года, а Maeslantkering вместе с Hartelkering достроили в 1997 году. Сегодня Дельта-работы включают пять штормовых барьеров, два шлюзовых комплекса и шесть дамб.',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'Stichting Watersnoodmuseum (Flood Museum), “The history of the Delta Works”, checked 13 October 2026',
        url: 'https://www.watersnoodmuseum.nl/en/water-knowledge/climate-and-sea-level/articles/the-history-the-delta-works',
      },
    ],
  },
  {
    id: 'core-2-3-case-dubai-solar-park',
    subject: 'geo',
    title: { en: 'Mohammed bin Rashid Al Maktoum Solar Park, Dubai: renewable power at scale', ru: 'Солнечный парк имени Мохаммеда бин Рашида Аль Мактума, Дубай: возобновляемая энергия в большом масштабе' },
    place: 'Dubai, UAE',
    scale: 'local',
    years: '2023–2030',
    lat: 24.7547,
    lng: 55.365,
    facts: {
      en: 'DEWA update, reported by pv magazine on 13 June 2025: the park reached 3.86 GW (3,860 MW) of installed capacity, with 800 MW added in 2025 so far, and accounted for 21.5% of DEWA’s total energy production capacity; the sixth phase (1.8 GW) was still under construction. UAE Government Media Office, 11 September 2023: the planned capacity is 5,000 MW by 2030, with total investment of AED 50 billion. Ember (2026): renewables supplied 0.2% of the UAE’s electricity in 2015 and 10.4% in 2025.',
      ru: 'Обновление DEWA (Управление электро- и водоснабжения Дубая) по данным pv magazine от 13 июня 2025 года: установленная мощность парка достигла 3,86 ГВт (3 860 МВт), с начала 2025 года добавлено 800 МВт, а парк составлял 21,5% совокупной производственной мощности DEWA; шестая очередь мощностью 1,8 ГВт тогда ещё строилась. Медиацентр правительства ОАЭ, 11 сентября 2023 года: плановая мощность — 5 000 МВт к 2030 году, общие инвестиции — 50 млрд дирхамов (AED). Ember (2026): возобновляемые источники дали 0,2% электроэнергии ОАЭ в 2015 году и 10,4% в 2025 году.',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'pv magazine, “DEWA’s Mohammed bin Rashid solar park capacity hits 3.8 GW” (13 June 2025), citing a DEWA update',
        url: 'https://www.pv-magazine.com/2025/06/13/dubais-giant-solar-park-surpasses-3-8-gw/',
      },
      {
        kind: 'web',
        title: 'UAE Government Media Office, Mohammed bin Rashid Al Maktoum Solar Park (11 September 2023)',
        url: 'https://www.mediaoffice.ae/en/news/2023/September/11-09/Mohammed-bin-Rashid-Al-Maktoum-Solar-Park',
      },
      {
        kind: 'web',
        title: 'Ember, Yearly Electricity Data (Global), file updated 6 October 2026',
        url: 'https://ember-energy.org/data/yearly-electricity-data/',
      },
    ],
  },
  {
    id: 'core-2-3-case-pakistan-floods',
    subject: 'geo',
    title: { en: 'Pakistan floods 2022: loss and damage and the finance debate', ru: 'Наводнения в Пакистане в 2022 году: потери и ущерб и спор о финансировании' },
    place: 'Pakistan, especially Sindh province',
    scale: 'national',
    years: '2022–2023',
    lat: 30,
    lng: 70,
    facts: {
      en: 'World Bank press release, 28 October 2022, on Pakistan’s Post-Disaster Needs Assessment, led by the Ministry of Planning, Development and Special Initiatives: the 2022 floods affected 33 million people and killed more than 1,730. Damage and economic losses were over USD 30 billion, close to 70% of them in Sindh province, and reconstruction needs were at least USD 16.3 billion. Our World in Data (annual CO2 emissions, Global Carbon Project data): in 2023 Pakistan emitted 186.9 million tonnes of CO2, about 0.49% of the world total of 38,094 million tonnes. UNFCCC news release, 20 November 2022: COP27 closed with an agreement to provide “loss and damage” funding for vulnerable countries.',
      ru: 'Пресс-релиз Всемирного банка от 28 октября 2022 года об оценке потребностей после бедствия (Post-Disaster Needs Assessment), которую вело министерство планирования, развития и специальных инициатив Пакистана: наводнения 2022 года затронули 33 млн человек и унесли более 1 730 жизней. Ущерб и экономические потери превысили 30 млрд USD, около 70% из них пришлось на провинцию Синд; потребности в восстановлении составили не менее 16,3 млрд USD. Our World in Data (годовые выбросы CO2, данные Global Carbon Project): в 2023 году Пакистан выбросил 186,9 млн тонн CO2, примерно 0,49% мирового итога в 38 094 млн тонн. Пресс-релиз UNFCCC от 20 ноября 2022 года: COP27 завершился соглашением о финансировании «потерь и ущерба» для уязвимых стран.',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'World Bank, “Pakistan: Flood Damages and Economic Losses Over USD 30 billion and Reconstruction Needs Over USD 16 billion” (28 October 2022)',
        url: 'https://www.worldbank.org/en/news/press-release/2022/10/28/pakistan-flood-damages-and-economic-losses-over-usd-30-billion-and-reconstruction-needs-over-usd-16-billion-new-assessme',
      },
      {
        kind: 'web',
        title: 'UNFCCC, “COP27 Reaches Breakthrough Agreement on New ‘Loss and Damage’ Fund for Vulnerable Countries” (20 November 2022)',
        url: 'https://unfccc.int/news/cop27-reaches-breakthrough-agreement-on-new-loss-and-damage-fund-for-vulnerable-countries',
      },
      {
        kind: 'web',
        title: 'Our World in Data, annual CO2 emissions by country (Global Carbon Project data), 2023',
        url: 'https://ourworldindata.org/grapher/annual-co2-emissions-per-country',
      },
    ],
  },
];
