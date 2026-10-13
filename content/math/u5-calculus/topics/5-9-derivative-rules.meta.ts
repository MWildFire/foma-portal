import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-9-derivative-rules',
  subject: 'math',
  code: '5.9',
  title: { en: 'Derivative rules and related rates', ru: 'Правила дифференцирования и связанные скорости (Derivative rules and related rates)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 69,
  minutes: 45,
  priority: 2,
  inMockScope: 'no',
  outcomes: [
    {
      en: 'I can differentiate sin x, cos x, tan x, e^x, ln x and powers x^n with a rational n',
      ru: 'Могу дифференцировать sin x, cos x, tan x, e^x, ln x и степени x^n с рациональным n',
    },
    {
      en: 'I can apply the chain, product and quotient rules to combined functions',
      ru: 'Могу применять правила цепочки, произведения и частного к составным функциям',
    },
    {
      en: 'I can set up a related rates model, differentiate it with respect to time and substitute the known values',
      ru: 'Могу составить связь между величинами, продифференцировать её по времени и подставить известные значения',
    },
  ],
  termIds: ['chain-rule-derivative', 'product-rule-derivative', 'quotient-rule-derivative', 'related-rates-change'],
  formulaIds: ['derivative-power-rule', 'derivative-standard-functions', 'chain-rule-formula', 'product-quotient-formulas'],
  questionIds: ['q-5-9-01', 'q-5-9-02', 'q-5-9-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 5.9',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
