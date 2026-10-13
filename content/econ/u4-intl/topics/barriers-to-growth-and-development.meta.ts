import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'barriers-to-growth-and-development',
  subject: 'econ',
  code: '4.9',
  title: { en: 'Barriers to economic growth and development', ru: 'Барьеры экономического роста и развития' },
  papers: ['P1', 'P2', 'P3'],
  order: 48,
  minutes: 40,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    { en: 'I can explain how low saving, low investment and low human capital form a vicious circle of poverty', ru: 'Могу объяснить, как низкие сбережения, инвестиции и человеческий капитал образуют порочный круг бедности' },
    { en: 'I can explain how weak institutions and corruption reduce investment and growth', ru: 'Могу объяснить, как слабые институты и коррупция снижают инвестиции и рост' },
    { en: 'I can explain how dependence on primary commodities and high external debt limit development', ru: 'Могу объяснить, как зависимость от первичных товаров и высокий внешний долг ограничивают развитие' },
    { en: 'I can explain how trade barriers, lack of technology and conflict hold back growth', ru: 'Могу объяснить, как торговые барьеры, отсутствие технологий и конфликт сдерживают рост' },
    { en: 'I can judge which barrier binds most in a given country, with reasons', ru: 'Могу оценить, какой барьер сильнее всего сдерживает конкретную страну, с обоснованием' },
  ],
  termIds: [
    'vicious-circle-of-poverty',
    'economic-institutions',
    'corruption',
    'primary-commodities',
    'external-debt',
    'debt-overhang',
    'technology-transfer',
    'conflict-trap',
    'human-capital',
    'property-rights',
    'protectionism',
    'national-debt',
    'gini-coefficient',
  ],
  questionIds: [
    'econ-barriers-to-growth-and-development-01',
    'econ-barriers-to-growth-and-development-02',
    'econ-barriers-to-growth-and-development-03',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.9' }],
};

export default topic;
