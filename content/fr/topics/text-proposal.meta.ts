import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-proposal',
  subject: 'fr',
  code: 'P1.proposal',
  title: { en: 'Writing: proposal', ru: 'Письмо: предложение (proposal)' },
  papers: ['P1'],
  order: 18,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can state the aims of a project and describe how it works', ru: 'Могу назвать цели проекта и описать, как он работает' },
    { en: 'I can write the steps of a project in the futur simple', ru: 'Могу описать этапы проекта во futur simple' },
    { en: 'I can give the benefits of a project and a rough budget', ru: 'Могу назвать выгоды проекта и примерный бюджет' },
    { en: 'I can ask for approval politely, with the subjunctive and the conditional', ru: 'Могу вежливо просить об одобрении, используя subjonctif и conditionnel' },
  ],
  termIds: [],
  questionIds: ['p1-proposal', 'p1-proposal-q1', 'p1-proposal-q2'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Les types de textes (page 71138)', locator: 'Proposition (page 36820)' }],
};

export default topic;
