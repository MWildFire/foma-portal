import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'grammar-past',
  subject: 'fr',
  code: 'G2.past',
  title: { en: 'Grammar: passé composé, imparfait and plus-que-parfait', ru: 'Грамматика: passé composé, imparfait и plus-que-parfait' },
  papers: ['P1', 'P2'],
  order: 25,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can form the passé composé with avoir and with être, and make the participle agree', ru: 'Могу образовать passé composé с avoir и с être и согласовать причастие' },
    { en: 'I can choose between the passé composé and the imparfait in a story', ru: 'Могу выбрать между passé composé и imparfait в рассказе' },
    { en: 'I can form the imparfait from the nous form of the present', ru: 'Могу образовать imparfait от формы nous настоящего времени' },
    { en: 'I can use the plus-que-parfait for an action completed before another past action', ru: 'Могу использовать plus-que-parfait для действия, законченного до другого прошедшего' },
  ],
  termIds: ['gr-passe-compose', 'gr-passe-compose-etre', 'gr-participle-agreement', 'gr-imparfait', 'gr-plus-que-parfait'],
  questionIds: ['grammar-past-q1', 'grammar-past-q2'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Grammaire (page 47789)', locator: "Le passé composé; L'imparfait; Le plus-que-parfait; Les temps du passé" }],
};

export default topic;
