import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'core-1-2-changing-populations',
  subject: 'geo',
  code: 'core-1.2',
  title: { en: 'Changing populations and places', ru: 'Изменение населения и мест' },
  papers: ['P2'],
  order: 2,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe urbanisation and the growth of megacities across levels of development', ru: 'Могу описать урбанизацию и рост мегаполисов на разных уровнях развития' },
    { en: 'I can explain push factors, pull factors and intervening obstacles for one named migration flow', ru: 'Могу объяснить факторы выталкивания, факторы притяжения и промежуточные барьеры для одного названного потока миграции' },
    { en: 'I can explain the causes and effects of rural depopulation and counter-urbanisation', ru: 'Могу объяснить причины и последствия сельского обезлюдения и контрурбанизации' },
    { en: 'I can evaluate the impacts of migration on both the place people leave and the place they move to', ru: 'Могу оценить последствия миграции и для места выезда, и для места прибытия' },
  ],
  termIds: [
    'core-urbanisation',
    'core-urban-growth',
    'core-megacity',
    'core-informal-settlement',
    'core-rural-urban-migration',
    'core-push-factor',
    'core-pull-factor',
    'core-intervening-obstacle',
    'core-counter-urbanisation',
    'core-rural-depopulation',
    'core-international-migration',
    'core-voluntary-migration',
    'core-forced-migration',
    'core-remittances',
    'core-brain-drain',
  ],
  sims: ['geo.core-push-pull'],
  questionIds: ['core-1-2-b1', 'core-1-2-a1', 'core-1-2-a2', 'core-1-2-a5'],
  caseIds: ['core-1-2-case-lagos', 'core-1-2-case-shenzhen', 'core-1-2-case-dubai'],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), core 1.2' },
    { kind: 'web', title: 'UN DESA Population Division, World Urbanization Prospects 2025: Summary of Results (2025)', url: 'https://desapublications.un.org/publications/world-urbanization-prospects-2025-summary-results' },
    { kind: 'web', title: 'UN DESA Population Division, World Urbanization Prospects 2025, File F02 (Degree of Urbanization by region)', url: 'https://population.un.org/wup/downloads' },
    { kind: 'web', title: 'UN DESA Population Division, International Migrant Stock 2024', url: 'https://www.un.org/development/desa/pd/node/3315' },
  ],
};

export default topic;
