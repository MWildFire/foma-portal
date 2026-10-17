import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'measuring-development',
  subject: 'econ',
  code: '4.8',
  title: { en: 'Measuring development', ru: 'Измерение развития' },
  papers: ['P2', 'P3'],
  order: 47,
  minutes: 40,
  priority: 1,
  inMockScope: 'no',
  outcomes: [
    { en: 'I can explain what economic development means and how it differs from economic growth', ru: 'Могу объяснить, что такое экономическое развитие и чем оно отличается от экономического роста' },
    { en: 'I can calculate GNI per capita and a ratio between two countries, with units', ru: 'Могу рассчитать ВНД на душу населения и отношение между двумя странами с единицами измерения' },
    { en: 'I can explain purchasing power parity and why PPP figures compare living standards better', ru: 'Могу объяснить паритет покупательной способности и то, почему показатели PPP лучше сравнивают уровень жизни' },
    { en: 'I can describe the three dimensions of the Human Development Index and what it does not capture', ru: 'Могу описать три измерения индекса развития человеческого потенциала и то, что он не учитывает' },
    { en: 'I can evaluate which development indicators fit a given question, using the Gini coefficient to check inequality', ru: 'Могу оценить, какие показатели развития подходят к конкретному вопросу, используя коэффициент Джини для проверки неравенства' },
  ],
  termIds: [
    'economic-development',
    'gross-national-income',
    'gni-per-capita',
    'purchasing-power-parity',
    'international-dollar',
    'human-development-index',
    'life-expectancy-at-birth',
    'mean-years-of-schooling',
    'gini-coefficient',
  ],
  formulaIds: ['gni-per-capita'],
  questionIds: [
    'econ-measuring-development-01',
    'econ-measuring-development-02',
    'econ-measuring-development-03',
    'econ-measuring-development-04',
  ],
  sources: [{ kind: 'web', title: 'United Nations et al., System of National Accounts 2008', url: 'https://unstats.un.org/unsd/nationalaccount/docs/SNA2008.pdf', locator: 'Printed pp.34–35 §§2.138–2.145; p.98 §6.27; p.100 §6.41: domestic/primary-income/production boundaries' }, { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.8' }],
};

export default topic;
