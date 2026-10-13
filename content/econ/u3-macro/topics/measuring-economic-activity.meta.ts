import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'measuring-economic-activity',
  subject: 'econ',
  code: '3.1',
  title: { en: 'Measuring economic activity', ru: 'Измерение экономической активности' },
  papers: ['P1', 'P2', 'P3'],
  order: 30,
  minutes: 45,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    { en: 'I can explain the circular flow of income using injections and withdrawals', ru: 'Могу объяснить круговой поток доходов через инъекции и изъятия' },
    { en: 'I can state the income, expenditure and production approaches to GDP', ru: 'Могу назвать доходный, расходный и производственный методы расчёта ВВП' },
    { en: 'I can calculate real GDP, the GDP deflator, real growth and GDP per capita', ru: 'Могу рассчитать реальный ВВП, дефлятор ВВП, реальный рост и ВВП на душу населения' },
    { en: 'I can explain why real GDP is used to compare output over time', ru: 'Могу объяснить, почему для сравнения выпуска во времени используют реальный ВВП' },
    { en: 'I can evaluate the limitations of GDP as a measure of living standards', ru: 'Могу оценить ограничения ВВП как показателя уровня жизни' },
  ],
  termIds: [
    'circular-flow-of-income',
    'injections',
    'withdrawals',
    'gdp',
    'nominal-gdp',
    'real-gdp',
    'gdp-deflator',
    'income-approach',
    'expenditure-approach',
    'production-approach',
  ],
  formulaIds: ['real-gdp', 'gdp-deflator', 'gdp-expenditure'],
  sims: ['econ.circular-flow'],
  questionIds: [
    'econ-measuring-economic-activity-01',
    'econ-measuring-economic-activity-02',
    'econ-measuring-economic-activity-03',
    'econ-measuring-economic-activity-04',
    'econ-measuring-economic-activity-05',
    'econ-measuring-economic-activity-06',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.1' }],
};

export default topic;
