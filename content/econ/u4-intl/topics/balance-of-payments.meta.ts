import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'balance-of-payments',
  subject: 'econ',
  code: '4.6',
  title: { en: 'Balance of payments', ru: 'Платёжный баланс' },
  papers: ['P2', 'P3'],
  order: 45,
  minutes: 55,
  priority: 1,
  inMockScope: 'no',
  outcomes: [
    { en: 'I can name the current, capital and financial accounts and their main items', ru: 'Могу назвать счёт текущих операций, счёт капитала и финансовый счёт и их основные статьи' },
    { en: 'I can calculate the current account balance, the terms of trade index and its percentage change', ru: 'Могу рассчитать сальдо счёта текущих операций, индекс условий торговли и его процентное изменение' },
    { en: 'I can explain why the balance of payments always balances in the accounting sense', ru: 'Могу объяснить, почему платёжный баланс всегда сбалансирован в бухгалтерском смысле' },
    { en: 'I can explain the J-curve and evaluate policies to correct a current account deficit', ru: 'Могу объяснить J-кривую и оценить политику по исправлению дефицита счёта текущих операций' },
  ],
  termIds: [
    'balance-of-payments',
    'current-account',
    'capital-account',
    'financial-account',
    'trade-balance',
    'terms-of-trade',
    'j-curve',
    'expenditure-switching-policy',
    'expenditure-reducing-policy',
  ],
  formulaIds: ['current-account', 'terms-of-trade', 'pct-change'],
  sims: ['econ.bop-accounts', 'econ.j-curve', 'econ.terms-of-trade'],
  questionIds: [
    'econ-balance-of-payments-01',
    'econ-balance-of-payments-02',
    'econ-balance-of-payments-03',
    'econ-balance-of-payments-04',
    'econ-balance-of-payments-05',
    'econ-balance-of-payments-06',
    'econ-balance-of-payments-07',
    'econ-balance-of-payments-08',
  ],
  caseIds: ['case-japan-yen-2022'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.6' }],
};

export default topic;
