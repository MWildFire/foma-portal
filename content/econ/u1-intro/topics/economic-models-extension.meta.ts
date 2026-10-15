import type { TopicMeta } from '../../../../src/contract/types';
const topic: TopicMeta = {
  "id": "economic-models-extension",
  "subject": "econ",
  "code": "1.2",
  "title": {
    "en": "How do economists approach the world? — outside this mock",
    "ru": "Как экономисты подходят к миру? — вне мока"
  },
  "papers": [
    "P1",
    "P2"
  ],
  "order": 102,
  "minutes": 35,
  "priority": 3,
  "inMockScope": "no",
  "outcomes": [
    {
      "en": "I can explain why economists use simplified models, assumptions and ceteris paribus",
      "ru": "Могу объяснить, почему экономисты используют упрощённые модели, допущения и условие «при прочих равных»"
    },
    {
      "en": "I can distinguish positive from normative statements and classify examples",
      "ru": "Могу отличать позитивные утверждения от нормативных и классифицировать примеры"
    },
    {
      "en": "I can distinguish microeconomics from macroeconomics, with one example each",
      "ru": "Могу отличать микроэкономику от макроэкономики, приводя по одному примеру"
    },
    {
      "en": "I can name the four economic agents and explain how evidence tests a prediction",
      "ru": "Могу назвать четырёх экономических агентов и объяснить, как данные проверяют прогноз"
    }
  ],
  "termIds": [
    "economic-model",
    "assumption",
    "ceteris-paribus",
    "positive-statement",
    "normative-statement",
    "microeconomics",
    "macroeconomics",
    "economic-agent",
    "prediction"
  ],
  "questionIds": [
    "econ-economic-models-01",
    "econ-economic-models-02",
    "econ-economic-models-03"
  ],
  "sources": [
    {
      "kind": "ib-guide",
      "title": "IB DP Economics subject guide (2020)",
      "locator": "section 1.2"
    }
  ]
};
export default topic;
