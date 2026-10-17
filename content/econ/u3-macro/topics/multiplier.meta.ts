import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'multiplier',
  subject: 'econ',
  code: '3.6',
  title: { en: 'The multiplier', ru: 'Мультипликатор' },
  papers: ['P1', 'P2', 'P3'],
  order: 32,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can calculate the MPS from the MPC', ru: 'Могу рассчитать MPS по MPC' },
    { en: 'I can calculate the multiplier from the leakages and from the MPC', ru: 'Могу рассчитать мультипликатор по изъятиям и по MPC' },
    { en: 'I can find the change in national income from a change in injections', ru: 'Могу найти изменение национального дохода по изменению инъекций' },
    { en: 'I can explain how leakages reduce the multiplier effect, using rounds of spending', ru: 'Могу объяснить, как изъятия уменьшают эффект мультипликатора, используя раунды расходов' },
    { en: 'I can discuss the limits of the multiplier in a recession', ru: 'Могу обсудить пределы действия мультипликатора в рецессии' },
  ],
  termIds: [
    'marginal-propensity',
    'marginal-propensity-to-consume',
    'marginal-propensity-to-save',
    'marginal-propensity-to-tax',
    'marginal-propensity-to-import',
    'multiplier',
    'multiplier-effect',
    'injections',
    'withdrawals',
    'spare-capacity',
  ],
  formulaIds: ['mps', 'multiplier', 'multiplier-mpc'],
  sims: ['econ.multiplier'],
  questionIds: [
    'econ-multiplier-01',
    'econ-multiplier-02',
    'econ-multiplier-03',
    'econ-multiplier-04',
    'econ-multiplier-05',
    'econ-multiplier-06',
    'econ-multiplier-07',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.2' }],
};

export default topic;
