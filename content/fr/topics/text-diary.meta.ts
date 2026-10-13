import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-diary',
  subject: 'fr',
  code: 'P1.diary',
  title: { en: 'Writing: diary entry', ru: 'Письмо: запись в дневнике (diary)' },
  papers: ['P1'],
  order: 9,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe a setting and the background of a past event in the imparfait', ru: 'Могу описать обстановку и фон прошлого события в imparfait' },
    { en: 'I can narrate events in order with the passé composé and the plus-que-parfait', ru: 'Могу рассказать о событиях по порядку в passé composé и plus-que-parfait' },
    { en: 'I can write a diary entry with a date and time line and an address to the journal', ru: 'Могу написать запись в дневнике с датой, временем и обращением к дневнику' },
    { en: 'I can express feelings and a reflection in the présent', ru: 'Могу выразить чувства и размышления в présent' },
    { en: 'I can make the agreements after être and after a direct object placed before the verb', ru: 'Могу правильно согласовать причастие после être и с прямым дополнением, стоящим перед глаголом' },
  ],
  termIds: [],
  questionIds: ['p1-diary', 'p1-diary-q1', 'p1-diary-q2'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Les types de textes (page 71138)', locator: 'Journal intime (page 36817)' }],
};

export default topic;
