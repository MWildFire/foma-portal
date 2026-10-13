import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'grammar-relatives-connectors',
  subject: 'fr',
  code: 'G6.relatives-connectors',
  title: {
    en: 'Grammar: relative pronouns qui, que, dont, où and logical connectors',
    ru: 'Грамматика: относительные местоимения qui, que, dont, où и логические связки',
  },
  papers: ['P1', 'P2'],
  order: 29,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can choose qui, que, dont or où by the job the pronoun does in its clause', ru: 'Могу выбрать qui, que, dont или où по роли, которую местоимение играет в придаточном' },
    { en: "I can make the past participle agree after « que » with « avoir » (les lettres que j'ai écrites)", ru: "Могу правильно согласовать причастие после « que » с « avoir » (les lettres que j'ai écrites)" },
    { en: 'I can use « donc », « pourtant » and « en effet » to show a result, a contrast and an explanation', ru: 'Могу использовать « donc », « pourtant » и « en effet », чтобы показать результат, противопоставление и объяснение' },
    { en: 'I can order a short text with « d\'abord », « ensuite » and « enfin »', ru: 'Могу расположить короткий текст с помощью « d\'abord », « ensuite » и « enfin »' },
    { en: 'I can use « bien que » with the subjunctive, as in « bien que la route soit longue »', ru: 'Могу использовать « bien que » с сослагательным наклонением, как в « bien que la route soit longue »' },
  ],
  termIds: [
    'gr-qui', 'gr-que', 'gr-dont', 'gr-ou', 'gr-connecteurs-logiques', 'gr-connecteurs-chronologiques', 'gr-bien-que',
  ],
  questionIds: ['grammar-relatives-connectors-q1', 'grammar-relatives-connectors-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
