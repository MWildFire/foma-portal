import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p1-language',
  subject: 'eng',
  code: 'P1.D',
  title: { en: 'Language: literary vocabulary and quotations', ru: 'Язык: литературная лексика и цитаты' },
  papers: ['P1'],
  order: 5,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write about the text in the present tense, for example "the poet presents"', ru: 'Могу писать о тексте в настоящем времени, например «the poet presents»' },
    { en: 'I can replace vague words such as good, very, shows and nice with an exact word or term', ru: 'Могу заменить размытые слова, например good, very, shows и nice, точным словом или термином' },
    { en: 'I can use suggests, implies, reinforces and undercuts with their exact meanings', ru: 'Могу точно использовать глаголы suggests, implies, reinforces и undercuts' },
    { en: 'I can build a short quotation into my own sentence so that the grammar works', ru: 'Могу вплести короткую цитату в своё предложение так, чтобы работала грамматика' },
    { en: 'I can use terms exactly: a simile is not a metaphor, and irony is not sarcasm', ru: 'Могу употреблять термины точно: сравнение — не метафора, а ирония — не сарказм' },
  ],
  termIds: ['denotation', 'connotation', 'diction', 'register', 'syntax', 'hyperbole', 'understatement', 'euphemism', 'assonance', 'caesura', 'rhythm'],
  questionIds: ['chk-p1-language-1', 'chk-p1-language-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
