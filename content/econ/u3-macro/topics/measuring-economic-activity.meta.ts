import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'measuring-economic-activity',
  subject: 'econ',
  code: '3.1',
  title: { en: 'Measuring economic activity', ru: 'Измерение экономической активности' },
  papers: ['P1', 'P2', 'P3'],
  order: 30,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [{"en": "I can explain the school checklist concepts for this topic", "ru": "Могу объяснить понятия этой темы из школьного чек-листа"}, {"en": "I can apply the model to an original example", "ru": "Могу применить модель к авторскому примеру"}, {"en": "I can answer a mock-style question and check my reasoning", "ru": "Могу ответить на вопрос в формате мока и проверить рассуждение"}],
  termIds: ['gdp-per-capita', 'circular-flow-of-income', 'injections', 'withdrawals', 'gdp', 'nominal-gdp', 'real-gdp', 'gdp-deflator', 'expenditure-approach', 'gross-national-income', 'purchasing-power-parity'],
  formulaIds: ['real-gdp', 'gdp-deflator', 'gdp-expenditure'],
  sims: ['econ.circular-flow'],
  questionIds: ['econ-measuring-economic-activity-03', 'econ-measuring-economic-activity-05', 'econ-measuring-economic-activity-06', 'r06-econ-10', 'r06-econ-11'],
  sources: [{ kind: 'web', title: 'United Nations et al., System of National Accounts 2008', url: 'https://unstats.un.org/unsd/nationalaccount/docs/SNA2008.pdf', locator: 'Printed pp.34–35 §§2.138–2.145; p.98 §6.27; p.100 §6.41: domestic/primary-income/production boundaries' }, { kind: 'textbook', title: 'Ellie Tragakes, Economics for the IB Diploma, 2020', locator: 'ch. 8.1–8.2, printed pp.248–252; p.252 income-approach adjustments and footnote' }, { kind: 'web', title: 'Росстат: ВВП, производственный метод и формирование по источникам доходов', url: 'https://rosstat.gov.ru/free_doc/new_site/vvp/met-vvp.htm' }, { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.1' }],
};

export default topic;
