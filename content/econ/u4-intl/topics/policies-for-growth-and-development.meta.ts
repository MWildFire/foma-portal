import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'policies-for-growth-and-development',
  subject: 'econ',
  code: '4.10',
  title: { en: 'Policies for growth and development', ru: 'Политика роста и развития' },
  papers: ['P2', 'P3'],
  order: 49,
  minutes: 40,
  priority: 1,
  inMockScope: 'no',
  outcomes: [
    { en: 'I can explain how export-led growth and trade liberalisation support development, and their risks', ru: 'Могу объяснить, как рост, ведомый экспортом, и либерализация торговли поддерживают развитие, и их риски' },
    { en: 'I can evaluate foreign direct investment and foreign aid as sources of finance, with advantages and disadvantages', ru: 'Могу оценить прямые иностранные инвестиции и иностранную помощь как источники финансирования, с преимуществами и недостатками' },
    { en: 'I can evaluate microfinance and debt relief as policies for poor countries and poor households', ru: 'Могу оценить микрофинансирование и облегчение долга как политику для бедных стран и домохозяйств' },
    { en: 'I can explain why investment in education, health and infrastructure takes time to pay off', ru: 'Могу объяснить, почему инвестиции в образование, здравоохранение и инфраструктуру окупаются не сразу' },
    { en: 'I can recommend a policy for a given country and justify it against the alternatives', ru: 'Могу рекомендовать политику для конкретной страны и обосновать её по сравнению с альтернативами' },
  ],
  termIds: [
    'export-led-growth',
    'trade-liberalisation',
    'foreign-direct-investment',
    'special-economic-zone',
    'foreign-aid',
    'tied-aid',
    'debt-relief',
    'debt-overhang',
    'microfinance',
    'human-capital',
    'economic-infrastructure',
    'economic-institutions',
    'industrial-policy',
  ],
  questionIds: [
    'econ-policies-for-growth-and-development-01',
    'econ-policies-for-growth-and-development-02',
    'econ-policies-for-growth-and-development-03',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.10' }],
};

export default topic;
