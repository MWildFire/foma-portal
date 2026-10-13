import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'grammar-comparison-negation-agreement',
  subject: 'fr',
  code: 'G7.comparison-negation-agreement',
  title: {
    en: 'Grammar: comparatif, superlatif, négation and agreement of the past participle',
    ru: 'Грамматика: comparatif, superlatif, négation и согласование participe passé',
  },
  papers: ['P1', 'P2'],
  order: 30,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can compare with « plus », « moins » and « aussi … que », and use « plus de » before a number', ru: 'Могу сравнивать с « plus », « moins » и « aussi … que » и использовать « plus de » перед числом' },
    { en: 'I can use « meilleur » and « mieux » correctly, and avoid « plus bon » and « plus bien »', ru: 'Могу правильно использовать « meilleur » и « mieux » и не говорить « plus bon » и « plus bien »' },
    { en: 'I can build a superlative with « le plus » and « le moins » and make the article agree', ru: 'Могу образовать превосходную степень с « le plus » и « le moins » и согласовать артикль' },
    { en: 'I can place « ne … pas », « jamais », « plus », « rien » and « personne » around the verb, including in the passé composé', ru: 'Могу правильно ставить « ne … pas », « jamais », « plus », « rien » и « personne » вокруг глагола, в том числе в passé composé' },
    { en: 'I can use « ni … ni » and make the past participle agree with « être » and with « avoir »', ru: 'Могу использовать « ni … ni » и согласовывать причастие с « être » и с « avoir »' },
  ],
  termIds: [
    'gr-comparatif', 'gr-comparatif-quantite', 'gr-meilleur-mieux', 'gr-superlatif', 'gr-ne-pas', 'gr-ne-jamais-plus',
    'gr-rien-personne', 'gr-ni-ni', 'gr-accord-participe-passe',
  ],
  questionIds: ['grammar-comparison-negation-agreement-q1', 'grammar-comparison-negation-agreement-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
