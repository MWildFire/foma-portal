import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'grammar-present',
  subject: 'fr',
  code: 'G1.present',
  title: { en: 'Grammar: the présent and reflexive verbs', ru: 'Грамматика: présent (настоящее время) и местоименные глаголы' },
  papers: ['P1', 'P2'],
  order: 24,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can conjugate regular -er, -ir and -re verbs in the présent', ru: 'Могу спрягать правильные глаголы на -er, -ir и -re в présent' },
    { en: 'I can use the irregular verbs être, avoir, aller, faire, prendre, pouvoir and vouloir', ru: 'Могу употреблять неправильные глаголы être, avoir, aller, faire, prendre, pouvoir и vouloir' },
    { en: 'I can put the reflexive pronoun before the verb, as in je me lève', ru: 'Могу поставить местоимение перед глаголом в местоименном глаголе, например je me lève' },
    { en: 'I can use the présent for habits, general truths and actions that started in the past (depuis)', ru: 'Могу использовать présent для привычек, общих истин и действий, начатых в прошлом (depuis)' },
  ],
  termIds: ['gr-present-regular', 'gr-present-irregular', 'gr-present-reflexive'],
  questionIds: ['grammar-present-q1', 'grammar-present-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
