import type { TopicMeta } from '../../../../src/contract/types';
const topic: TopicMeta = {
  "id": "what-is-economics-extension",
  "subject": "econ",
  "code": "1.1",
  "title": {
    "en": "What is economics? — outside this mock",
    "ru": "Что такое экономика? — вне мока"
  },
  "papers": [
    "P1",
    "P2"
  ],
  "order": 101,
  "minutes": 45,
  "priority": 3,
  "inMockScope": "no",
  "outcomes": [
    {
      "en": "I can explain scarcity, choice and opportunity cost with a numerical example",
      "ru": "Могу объяснить ограниченность ресурсов, выбор и альтернативные издержки на числовом примере"
    },
    {
      "en": "I can name the four factors of production and give an example of each",
      "ru": "Могу назвать четыре фактора производства и привести пример каждого"
    },
    {
      "en": "I can distinguish needs, wants, economic goods and free goods",
      "ru": "Могу различать потребности, желания, экономические блага и свободные блага"
    },
    {
      "en": "I can draw a production possibility curve and explain efficiency, unemployment and an outward shift",
      "ru": "Могу нарисовать кривую производственных возможностей и объяснить эффективность, безработицу и сдвиг наружу"
    }
  ],
  "termIds": [
    "scarcity",
    "choice",
    "opportunity-cost",
    "factors-of-production",
    "needs",
    "wants",
    "economic-goods",
    "free-goods",
    "production-possibility-curve",
    "productive-efficiency"
  ],
  "sims": [
    "econ.ppc"
  ],
  "questionIds": [
    "econ-what-is-economics-01",
    "econ-what-is-economics-02",
    "econ-what-is-economics-03"
  ],
  "sources": [
    {
      "kind": "ib-guide",
      "title": "IB DP Economics subject guide (2020)",
      "locator": "section 1.1"
    }
  ]
};
export default topic;
