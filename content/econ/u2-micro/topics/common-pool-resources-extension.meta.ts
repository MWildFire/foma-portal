import type { TopicMeta } from '../../../../src/contract/types';
const topic: TopicMeta = {
  "id": "common-pool-resources-extension",
  "subject": "econ",
  "code": "2.8",
  "title": {
    "en": "Common resources — optional effort model",
    "ru": "Общие ресурсы — дополнительная модель усилий"
  },
  "papers": [
    "P1",
    "P2",
    "P3"
  ],
  "order": 119,
  "minutes": 35,
  "priority": 3,
  "inMockScope": "no",
  "outcomes": [
    {
      "en": "I can define a common pool resource and explain why it is rivalrous and non-excludable",
      "ru": "Могу дать определение общему ресурсу и объяснить, почему он соперничающий и неисключаемый"
    },
    {
      "en": "I can explain the tragedy of the commons under open access",
      "ru": "Могу объяснить трагедию общин при открытом доступе"
    },
    {
      "en": "I can compare the open-access equilibrium with the socially optimal use of a resource",
      "ru": "Могу сравнить равновесие при открытом доступе с общественно оптимальным использованием ресурса"
    },
    {
      "en": "I can calculate a quota per unit from a sustainable catch and the number of users",
      "ru": "Могу рассчитать квоту на единицу по устойчивому улову и числу пользователей"
    },
    {
      "en": "I can evaluate quotas, property rights, tradable permits and taxes for a shared resource",
      "ru": "Могу оценить квоты, права собственности, торгуемые разрешения и налоги для общего ресурса"
    }
  ],
  "termIds": [
    "common-pool-resource",
    "rivalry",
    "non-excludability",
    "tragedy-of-the-commons",
    "open-access-equilibrium",
    "socially-optimal-use",
    "harvest-quota",
    "property-rights",
    "tradable-permits",
    "pigouvian-tax"
  ],
  "sims": [
    "econ.cpr"
  ],
  "questionIds": [
    "econ-common-pool-resources-01",
    "econ-common-pool-resources-02",
    "econ-common-pool-resources-03"
  ],
  "caseIds": [
    "case-cpr-atlantic-cod"
  ],
  "sources": [
    {
      "kind": "ib-guide",
      "title": "IB DP Economics subject guide (2020)",
      "locator": "section 2.8"
    }
  ]
};
export default topic;
