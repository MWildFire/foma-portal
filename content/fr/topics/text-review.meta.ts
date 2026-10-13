import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-review',
  subject: 'fr',
  code: 'P1.review',
  title: { en: 'Writing: review', ru: 'Письмо: рецензия (review)' },
  papers: ['P1'],
  order: 15,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can present an object and give its rating without spoiling it', ru: 'Могу представить объект и дать ему оценку, не раскрывая главного' },
    { en: 'I can give strengths and weaknesses, each with an example', ru: 'Могу назвать сильные и слабые стороны, подкрепив каждую примером' },
    { en: 'I can use evaluative adjectives and comparisons such as plus… que and moins… que', ru: 'Могу использовать оценочные прилагательные и сравнения: plus… que, moins… que' },
    { en: 'I can end a review with a recommendation for a named audience, with reasons', ru: 'Могу закончить рецензию рекомендацией конкретной аудитории и привести причины' },
  ],
  termIds: [],
  questionIds: ['p1-review', 'p1-review-q1', 'p1-review-q2'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Les types de textes (page 71138)', locator: 'Critique (page 36809)' }],
};

export default topic;
