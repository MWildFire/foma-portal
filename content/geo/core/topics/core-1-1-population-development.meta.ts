import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'core-1-1-population-development',
  subject: 'geo',
  code: 'core-1.1',
  title: { en: 'Population and economic development patterns', ru: 'Закономерности населения и экономического развития' },
  papers: ['P2'],
  order: 1,
  minutes: 50,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe how birth rate, death rate and natural increase change through the demographic transition', ru: 'Могу описать, как меняются рождаемость, смертность и естественный прирост в ходе демографического перехода' },
    { en: 'I can name the stages of the demographic transition model and give an example country for two of them', ru: 'Могу назвать стадии модели демографического перехода и привести пример страны для двух из них' },
    { en: 'I can read an age–sex pyramid and link its shape to a stage of development', ru: 'Могу читать возрастно-половую пирамиду и связывать её форму со стадией развития' },
    { en: 'I can calculate the crude birth rate, the crude death rate and natural increase per 1000 people', ru: 'Могу рассчитать общий коэффициент рождаемости, смертности и естественного прироста на 1000 человек' },
    { en: 'I can explain how economic development and population change affect each other, using one named example', ru: 'Могу объяснить, как экономическое развитие и изменение населения влияют друг на друга, на одном названном примере' },
  ],
  termIds: [
    'core-natural-increase',
    'core-crude-birth-rate',
    'core-crude-death-rate',
    'core-total-fertility-rate',
    'core-demographic-transition-model',
    'core-population-pyramid',
    'core-dependency-ratio',
    'core-infant-mortality-rate',
    'core-life-expectancy',
    'core-human-development-index',
    'core-gni-per-capita',
    'core-malthus-theory',
    'core-boserup-theory',
    'core-positive-preventive-checks',
    'core-carrying-capacity',
  ],
  sims: ['geo.core-demographic-transition', 'geo.core-population-pyramid', 'geo.core-malthus-boserup'],
  questionIds: ['core-1-1-a1', 'core-1-1-a2', 'core-1-1-a3', 'core-1-1-a4', 'core-1-1-a5', 'core-1-1-b1'],
  caseIds: ['core-1-1-case-niger', 'core-1-1-case-bangladesh', 'core-1-1-case-japan'],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), core 1.1' },
    { kind: 'web', title: 'UN DESA Population Division, World Population Prospects 2024 (Medium variant)', url: 'https://population.un.org/wpp/' },
    { kind: 'web', title: 'UNDP, Human Development Report 2025 (HDI 2023 values)', url: 'https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Composite_indices_complete_time_series.csv' },
    { kind: 'web', title: 'World Bank, GNI per capita, Atlas method (NY.GNP.PCAP.CD)', url: 'https://data.worldbank.org/indicator/NY.GNP.PCAP.CD' },
  ],
};

export default topic;
