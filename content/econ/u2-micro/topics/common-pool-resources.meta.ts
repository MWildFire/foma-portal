import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'common-pool-resources',
  subject: 'econ',
  code: '2.8',
  title: { en: 'Common pool resources', ru: 'Общие ресурсы (common pool resources)' },
  papers: ['P2', 'P3'],
  order: 19,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [{"en": "I can explain the school checklist concepts for this topic", "ru": "Могу объяснить понятия этой темы из школьного чек-листа"}, {"en": "I can apply the model to an original example", "ru": "Могу применить модель к авторскому примеру"}, {"en": "I can answer a mock-style question and check my reasoning", "ru": "Могу ответить на вопрос в формате мока и проверить рассуждение"}],
  termIds: ['common-pool-resource', 'rivalry', 'non-excludability', 'tragedy-of-the-commons', 'harvest-quota', 'tradable-permits', 'pigouvian-tax', 'carbon-tax'],
  sims: ['econ.cpr'],
  questionIds: ['econ-common-pool-resources-01', 'econ-common-pool-resources-02'],
  caseIds: ['case-cpr-atlantic-cod'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.8' }],
};

export default topic;
