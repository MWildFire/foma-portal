import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-6-combined-events',
  subject: 'math',
  code: '4.6',
  title: { en: 'Combined events and conditional probability', ru: 'Составные события и условная вероятность (Combined events and conditional probability)' },
  papers: ['P1', 'P2', 'P3'],
  order: 47,
  minutes: 45,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can draw a Venn diagram or a tree diagram for two events and read combined probabilities from it',
      ru: 'Могу нарисовать диаграмму Венна или дерево вероятностей для двух событий и найти по ним составные вероятности',
    },
    {
      en: 'I can use $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ and $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$',
      ru: 'Могу применять $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ и $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$',
    },
    {
      en: 'I can decide whether two events are mutually exclusive or independent, and justify the answer with a calculation',
      ru: 'Могу определить, являются ли два события несовместными или независимыми, и обосновать ответ вычислением',
    },
  ],
  termIds: ['venn-diagram-events', 'mutually-exclusive-events', 'conditional-probability', 'independent-events'],
  formulaIds: ['addition-rule-two-events', 'conditional-probability-formula', 'independence-product-rule', 'multiplication-rule-tree'],
  sims: [],
  questionIds: ['q-4-6-01', 'q-4-6-02', 'q-4-6-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.6',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
