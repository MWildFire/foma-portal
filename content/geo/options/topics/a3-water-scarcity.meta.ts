import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a3-water-scarcity',
  subject: 'geo',
  code: 'A.3',
  title: { en: 'Water scarcity and water quality', ru: 'Дефицит воды и качество воды' },
  papers: ['P1'],
  option: 'A',
  order: 23,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can distinguish physical from economic water scarcity and explain what the Falkenmark indicator shows',
      ru: 'Умею отличать физический дефицит воды от экономического и объяснять, что показывает индикатор Фалькенмарк',
    },
    {
      en: 'I can calculate water per person per year from supply and population and place a country in a Falkenmark category',
      ru: 'Умею рассчитывать объём воды на человека в год по ресурсам и населению и относить страну к категории Фалькенмарк',
    },
    {
      en: 'I can describe meteorological, hydrological, agricultural and socio-economic drought and say how one leads to the next',
      ru: 'Умею описывать метеорологическую, гидрологическую, сельскохозяйственную и социально-экономическую засуху и объяснять, как одна переходит в другую',
    },
    {
      en: 'I can distinguish point from diffuse pollution and name the main sources of sewage, nitrates, pesticides and industrial effluent',
      ru: 'Умею отличать точечное загрязнение от рассеянного и называть главные источники сточных вод, нитратов, пестицидов и промышленных стоков',
    },
    {
      en: 'I can explain how nutrients lead to eutrophication, algal blooms and oxygen loss, and how salinisation and arsenic affect water quality',
      ru: 'Умею объяснять, как биогены ведут к эвтрофикации, цветению водорослей и потере кислорода, и как засоление и мышьяк ухудшают качество воды',
    },
    {
      en: 'I can use BOD, nitrate and E. coli data with the guideline values, and judge management responses with a named case',
      ru: 'Умею использовать данные о BOD, нитратах и E. coli вместе с нормативами и оценивать меры управления на примере названного кейса',
    },
  ],
  termIds: [
    'a-water-scarcity',
    'a-physical-water-scarcity',
    'a-economic-water-scarcity',
    'a-falkenmark-indicator',
    'a-drought',
    'a-meteorological-drought',
    'a-hydrological-drought',
    'a-agricultural-drought',
    'a-socio-economic-drought',
    'a-point-source-pollution',
    'a-diffuse-pollution',
    'a-sewage',
    'a-nitrate-pollution',
    'a-eutrophication',
    'a-algal-bloom',
    'a-microcystin',
    'a-salinisation',
    'a-arsenic-contamination',
    'a-biochemical-oxygen-demand',
    'a-e-coli',
    'a-scarcity-demand-management',
  ],
  sims: ['geo.opt-a-scarcity'],
  questionIds: ['a3-sq1', 'a3-sq2', 'a3-sq3', 'a3-eq1', 'a3-eq2'],
  caseIds: ['a-cape-town-drought-2018', 'a-bangladesh-arsenic', 'a-toledo-2014', 'a-aral-sea'],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), Option A: Freshwater', locator: 'A.3' },
    { kind: 'thinkib', title: 'ThinkIB, Option A: Water Scarcity and Water Quality (page 44021)', locator: 'Water Scarcity; Conflicts and Resolutions in the Mekong River Basin; Environmental Consequences of Agriculture' },
  ],
  links: [
    { title: 'ThinkIB eBook, Option A: Water Scarcity and Water Quality (page 44021)', url: 'https://student.thinkib.net/geography/' },
  ],
};

export default topic;
