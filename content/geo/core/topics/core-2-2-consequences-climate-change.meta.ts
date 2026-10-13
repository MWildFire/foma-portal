import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'core-2-2-consequences-climate-change',
  subject: 'geo',
  code: 'core-2.2',
  title: { en: 'Consequences of global climate change', ru: 'Последствия глобального изменения климата' },
  papers: ['P2'],
  order: 6,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe physical consequences of climate change: sea level, ice, extreme weather and ecosystems', ru: 'Могу описать физические последствия изменения климата: уровень моря, лёд, экстремальную погоду и экосистемы' },
    { en: 'I can explain human consequences for food, water, health and the economy', ru: 'Могу объяснить последствия для человека: продовольствие, воду, здоровье и экономику' },
    { en: 'I can explain vulnerability, resilience and adaptive capacity using a named place', ru: 'Могу объяснить уязвимость, устойчивость и адаптационный потенциал на названном месте' },
    { en: 'I can evaluate why impacts are uneven between countries and between groups inside one country', ru: 'Могу оценить, почему последствия распределяются неравномерно между странами и между группами внутри одной страны' },
  ],
  termIds: [
    'core-sea-level-rise',
    'core-ice-loss',
    'core-heatwave',
    'core-drought',
    'core-flash-flood',
    'core-ocean-acidification',
    'core-biome-shift',
    'core-tipping-point',
    'core-food-security',
    'core-water-security',
    'core-salinity-intrusion',
    'core-displacement',
    'core-vulnerability',
    'core-resilience',
    'core-adaptive-capacity',
  ],
  questionIds: ['core-2-2-b1', 'core-2-2-a1', 'core-2-2-a2', 'core-2-2-a4', 'core-2-2-a5'],
  caseIds: ['core-2-2-case-bangladesh', 'core-2-2-case-tuvalu', 'core-2-2-case-australia'],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), core 2.2' },
    { kind: 'web', title: 'IPCC (2021), Climate Change 2021: The Physical Science Basis, Working Group I, Summary for Policymakers (sections A.1.2, A.1.5, A.1.7, A.2.4, A.3.1, A.3.2, A.4.3, C.3.2)', url: 'https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf' },
    { kind: 'web', title: 'IPCC (2018), Global Warming of 1.5°C, Summary for Policymakers (section B.4)', url: 'https://www.ipcc.ch/site/assets/uploads/sites/2/2019/05/SR15_SPM_version_stand_alone_LR.pdf' },
    { kind: 'web', title: 'WHO, Climate change fact sheet (updated 12 October 2023)', url: 'https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health' },
    { kind: 'web', title: 'WMO, Atlas of Mortality and Economic Losses from Weather, Climate and Water-related Hazards (1970–2021), press release of 22 May 2023', url: 'https://wmo.int/news/media-centre/economic-costs-of-weather-related-disasters-soars-early-warnings-save-lives' },
    { kind: 'web', title: 'World Bank, Groundswell press release (13 September 2021)', url: 'https://www.worldbank.org/en/news/press-release/2021/09/13/climate-change-could-force-216-million-people-to-migrate-within-their-own-countries-by-2050' },
    { kind: 'web', title: 'UNDP, Tuvalu Coastal Adaptation Project, GCF project document (2016)', url: 'https://www.undp.org/sites/g/files/zskgke326/files/migration/pacific/5c6f1a9f1b85558d2815083ad2d275c6322c84a574571dff3803a196e298c92f.pdf' },
  ],
};

export default topic;
