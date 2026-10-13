import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'fiscal-policy',
  subject: 'econ',
  code: '3.6',
  title: { en: 'Fiscal policy', ru: 'Фискальная политика (fiscal policy)' },
  papers: ['P1', 'P2', 'P3'],
  order: 36,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can calculate the budget balance and say whether it is a surplus or a deficit', ru: 'Могу рассчитать бюджетный баланс и определить, профицит это или дефицит' },
    { en: 'I can distinguish discretionary fiscal policy from automatic stabilizers, with examples', ru: 'Могу отличать дискреционную фискальную политику от автоматических стабилизаторов, приводя примеры' },
    { en: 'I can calculate the multiplier from the leakages and explain the multiplier effect of government spending', ru: 'Могу рассчитать мультипликатор по изъятиям и объяснить эффект мультипликатора от государственных расходов' },
    { en: 'I can evaluate expansionary fiscal policy, using national debt, crowding out and time lags', ru: 'Могу оценить экспансионистскую фискальную политику, используя государственный долг, вытеснение и временные лаги' },
    { en: 'I can explain the supply-side effects of taxes and government spending', ru: 'Могу объяснить эффекты налогов и государственных расходов для предложения' },
  ],
  termIds: [
    'fiscal-policy',
    'budget-surplus',
    'budget-deficit',
    'national-debt',
    'discretionary-fiscal-policy',
    'expansionary-fiscal-policy',
    'automatic-stabilizers',
    'crowding-out',
    'aggregate-demand',
    'multiplier',
    'long-run-aggregate-supply',
  ],
  formulaIds: ['budget-balance', 'multiplier'],
  sims: ['econ.fiscal-policy'],
  questionIds: ['econ-fiscal-policy-01', 'econ-fiscal-policy-02', 'econ-fiscal-policy-03', 'econ-fiscal-policy-04'],
  caseIds: ['case-uae-corporate-tax-2023', 'case-russia-vat-2019'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.6' }],
};

export default topic;
