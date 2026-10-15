import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'exchange-rates',
  subject: 'econ',
  code: '4.5',
  title: { en: 'Exchange rates', ru: 'Обменные курсы' },
  papers: ['P2', 'P3'],
  order: 44,
  minutes: 50,
  priority: 1,
  inMockScope: 'no',
  outcomes: [
    { en: 'I can define the exchange rate and explain how nominal and real exchange rates differ', ru: 'Могу определить обменный курс и объяснить, чем номинальный курс отличается от реального' },
    { en: 'I can explain how the demand and supply of a currency set its price under a floating rate', ru: 'Могу объяснить, как спрос и предложение валюты задают её цену при плавающем курсе' },
    { en: 'I can convert amounts between currencies and calculate a percentage appreciation or depreciation', ru: 'Могу пересчитывать суммы между валютами и рассчитывать процентное удорожание или удешевление' },
    { en: 'I can compare fixed, floating and managed exchange rates and their effects on trade and inflation', ru: 'Могу сравнить фиксированный, плавающий и управляемый курсы и их влияние на торговлю и инфляцию' },
  ],
  termIds: [
    'exchange-rate',
    'real-exchange-rate',
    'foreign-exchange-market',
    'appreciation',
    'depreciation',
    'floating-exchange-rate',
    'fixed-exchange-rate',
    'managed-exchange-rate',
    'currency-speculation',
  ],
  formulaIds: ['convert', 'pct-change'],
  sims: ['econ.fx-market'],
  questionIds: [
    'econ-exchange-rates-01',
    'econ-exchange-rates-02',
    'econ-exchange-rates-03',
    'econ-exchange-rates-04',
    'econ-exchange-rates-05',
    'econ-exchange-rates-06',
    'econ-exchange-rates-07',
  ],
  caseIds: ['case-japan-yen-2022'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.5' }],
};

export default topic;
