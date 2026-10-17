import type { TopicMeta } from '../../../../src/contract/types';
const topic: TopicMeta = {
  "id": "mock-checklist",
  "subject": "econ",
  "code": "mock-method",
  "title": {
    "en": "October mock checklist",
    "ru": "Чек-лист октябрьского мока"
  },
  "papers": [
    "P1",
    "P2",
    "P3"
  ],
  "order": 0,
  "minutes": 25,
  "priority": 3,
  "inMockScope": "yes",
  "outcomes": [
    {
      "en": "I can identify the school mock scope",
      "ru": "Могу определить объём школьного мока"
    },
    {
      "en": "I can choose the correct paper format",
      "ru": "Могу выбрать верный формат работы"
    },
    {
      "en": "I can check required HL skills",
      "ru": "Могу проверить обязательные навыки HL"
    }
  ],
  "termIds": [],
  "questionIds": [],
  "sources": [
    {
      "kind": "school",
      "title": "Student Guide to October 2026 Mocks",
      "locator": "Economics guide, pp. 1–16"
    },
    {
      "kind": "school",
      "title": "Revision Checklist Mocks October 2026",
      "locator": "pp. 1–24"
    }
  ]
};
export default topic;
