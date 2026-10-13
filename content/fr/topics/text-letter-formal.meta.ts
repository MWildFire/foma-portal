import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-letter-formal',
  subject: 'fr',
  code: 'P1.letter-formal',
  title: { en: 'Writing: formal letter', ru: 'Письмо: официальное письмо (formal letter)' },
  papers: ['P1'],
  order: 11,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can lay out a formal letter in the right order, from the sender to the signature', ru: 'Могу оформить официальное письмо в правильном порядке: от отправителя до подписи' },
    { en: 'I can choose the right greeting and closing formula for a headteacher or an official', ru: 'Могу выбрать обращение и формулу вежливости для директора или официального лица' },
    { en: 'I can make a polite request with the conditional (je souhaiterais, pourriez-vous)', ru: 'Могу вежливо попросить, используя условное наклонение (je souhaiterais, pourriez-vous)' },
    { en: 'I can plan the three content points of a P1 letter within 250 to 400 words', ru: 'Могу спланировать три смысловых пункта письма P1 в пределах 250–400 слов' },
  ],
  termIds: [],
  questionIds: ['p1-letter-formal', 'p1-letter-formal-q1', 'p1-letter-formal-q2'],
  sims: ['fr.letter-builder'],
  sources: [{ kind: 'thinkib', title: 'ThinkIB, French B SL: Les types de textes (page 71138)', locator: 'Courriel officiel / lettre officielle (page 36812)' }],
};

export default topic;
