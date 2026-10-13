import type { CaseStudy } from '../../../../src/contract/types';

// Option A, A.2 cases. Every figure below was checked against the page named in src (WebFetch / ctx_fetch_and_index, 13.10.2026).
// The Boscastle report PDF could not be read here, so its figures come from the HR Wallingford abstract on the same record.
// The Dubai flood of April 2024 is not included: the public figures found were conflicting or not from a wire or official source.
export const cases: CaseStudy[] = [
  {
    id: 'a-netherlands-room-river',
    subject: 'geo',
    title: { en: 'Room for the River: the Netherlands’ river flood strategy', ru: 'Room for the River: стратегия Нидерландов по речным наводнениям' },
    place: 'Netherlands (IJssel, Waal, Lower Rhine and Lek)',
    scale: 'national',
    years: '2006–2019',
    lat: 52.1326,
    lng: 5.2913,
    facts: {
      en: 'Since 2006 the ‘Room for the River’ programme has carried out measures at 34 locations along the IJssel, Waal, Lower Rhine and Lek. The programme cost a total of €2.3 billion and was completed in early 2019 with the opening of the Reevediep flood channel. It has improved safety for around 4 million people. Without flood defences such as dikes, dunes and storm surge barriers, about 60% of the Netherlands would be regularly flooded (Delta Programme).',
      ru: 'С 2006 года программа «Room for the River» проводит меры в 34 местах вдоль рек IJssel, Waal, Lower Rhine и Lek. Её общая стоимость составила 2,3 млрд евро, а завершилась она в начале 2019 года открытием разгрузочного канала Reevediep. Она повысила безопасность примерно для 4 млн человек. Без защитных сооружений — дамб, дюн и штормовых барьеров — около 60% территории Нидерландов регулярно затапливалось бы (Delta Programme).',
    },
    usedFor: ['a2-flooding'],
    src: [
      {
        kind: 'web',
        title: 'Rijkswaterstaat: ‘Room for the River’ Programme (2006–2019)',
        url: 'https://www.rijkswaterstaat.nl/en/projects/iconic-structures/room-for-the-river',
      },
      {
        kind: 'web',
        title: 'Delta Programme: Flood risk management (English)',
        url: 'https://english.deltaprogramma.nl/three-topics/flood-risk-management',
      },
    ],
  },
  {
    id: 'a-boscastle-flash-2004',
    subject: 'geo',
    title: { en: 'Boscastle, Cornwall: a flash flood in 2004', ru: 'Боскасл, Корнуолл: внезапное наводнение 2004 года' },
    place: 'Boscastle, North Cornwall, England, UK',
    scale: 'local',
    years: '2004',
    lat: 50.6937,
    lng: -4.6983,
    facts: {
      en: 'On 16 August 2004 up to 200 mm of rain fell in approximately five hours on the north Cornwall coast. The storm flooded the Valency and Crackington Stream catchments and caused serious flooding on the Rivers Ottery and Neet. The report, produced for the Environment Agency in 2005, used analyses by the UK Met Office (meteorology), the Centre for Ecology and Hydrology (hydrology) and HR Wallingford (hydraulics).',
      ru: '16 августа 2004 года на побережье Северного Корнуолла выпало до 200 мм осадков примерно за пять часов. Шторм затопил водосборы ручьёв Valency и Crackington Stream и вызвал сильное наводнение на реках Ottery и Neet. Отчёт, подготовленный для Environment Agency в 2005 году, опирался на анализы Met Office (метеорология), Центра экологии и гидрологии (гидрология) и HR Wallingford (гидравлика).',
    },
    usedFor: ['a2-flooding'],
    src: [
      {
        kind: 'web',
        title: 'HR Wallingford: Bettess (2005), Flooding in Boscastle and North Cornwall, August 2004 (abstract)',
        url: 'https://eprints.hrwallingford.com/541',
      },
    ],
  },
  {
    id: 'a-pakistan-floods-2022',
    subject: 'geo',
    title: { en: 'Pakistan floods 2022: a national disaster', ru: 'Наводнения в Пакистане в 2022 году: национальная катастрофа' },
    place: 'Pakistan (nationwide)',
    scale: 'national',
    years: '2022',
    lat: 30.3753,
    lng: 69.3451,
    facts: {
      en: 'The 2022 floods affected 33 million people, and more than 1,730 people died. Damage was estimated at more than USD 14.9 billion and economic losses at about USD 15.2 billion, so the total was over USD 30 billion. Rebuilding in a more resilient way needs at least USD 16.3 billion, and the direct loss to GDP was projected at about 2.2% of FY22 GDP. The Post-Disaster Needs Assessment found that the poorest and most vulnerable districts were hit hardest.',
      ru: 'Наводнения 2022 года затронули 33 млн человек, погибли более 1730 человек. Ущерб оценён более чем в 14,9 млрд долларов США, экономические потери — примерно в 15,2 млрд долларов, то есть в сумме больше 30 млрд долларов. Восстановление на более устойчивой основе требует не менее 16,3 млрд долларов, а прямые потери ВВП оценены примерно в 2,2% ВВП за 2022 финансовый год. Оценка потребностей после бедствия (PDNA) показала, что сильнее всего пострадали беднейшие и наиболее уязвимые районы.',
    },
    usedFor: ['a2-flooding'],
    src: [
      {
        kind: 'web',
        title: 'World Bank press release, 28 October 2022: Pakistan flood damages and economic losses over USD 30 billion (PDNA)',
        url: 'https://www.worldbank.org/en/news/press-release/2022/10/28/pakistan-flood-damages-and-economic-losses-over-usd-30-billion-and-reconstruction-needs-over-usd-16-billion-new-assessme',
      },
    ],
  },
];
