import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'grammar-subjunctive-imperative',
  subject: 'fr',
  code: 'G4.subjunctive-imperative',
  title: { en: 'Grammar: subjunctive and imperative', ru: 'Грамматика: subjonctif (сослагательное наклонение) и impératif (повелительное)' },
  papers: ['P1', 'P2'],
  order: 27,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can form the present subjunctive from the ils form and know the seven irregular verbs', ru: 'Могу образовать présent du subjonctif от формы ils и знаю семь неправильных глаголов' },
    { en: 'I can use the subjunctive after il faut que, bien que, pour que, avant que and je veux que', ru: 'Могу использовать subjonctif после il faut que, bien que, pour que, avant que и je veux que' },
    { en: 'I can use an infinitive instead of que and the subjunctive when the same person is meant', ru: 'Могу использовать инфинитив вместо que и subjonctif, если речь об одном и том же человеке' },
    { en: 'I can use the indicative after « je pense que » in the affirmative', ru: 'Могу использовать индикатив после «je pense que» в утвердительной форме' },
    { en: 'I can give affirmative and negative instructions with the tu, vous and nous imperative', ru: 'Могу давать указания в утвердительной и отрицательной форме: tu, vous и nous повелительного наклонения' },
  ],
  termIds: ['gr-subjunctive-present', 'gr-subjunctive-stem', 'gr-subjunctive-irregular', 'gr-subjunctive-triggers', 'gr-indicative-after-je-pense-que', 'gr-imperative', 'gr-imperative-negative'],
  questionIds: ['grammar-subjunctive-imperative-q1', 'grammar-subjunctive-imperative-q2'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Grammaire (page 47789)', locator: "L'impératif; Le subjonctif présent" }],
};

export default topic;
