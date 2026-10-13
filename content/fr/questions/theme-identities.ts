import type { FrQuestion } from '../types';

// Theme 1 (Identities): two quick checks. The French item is in prompt.fr; prompt.en and prompt.ru give the task.
export const questions: FrQuestion[] = [
  {
    id: 't1-q1',
    subject: 'fr',
    topicIds: ['theme-identities'],
    paper: 'P1',
    section: 'T1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the correct verb form to complete the sentence (A, B or C).',
      ru: 'Выберите правильную форму глагола, чтобы дополнить предложение (A, B или C).',
      fr: "Complétez la phrase : « Elle ___ beaucoup à la photographie depuis deux ans. »\nA) intéresse\nB) s'intéresse\nC) s'intéressera",
    },
    markscheme: {
      en: "1 mark: B, s'intéresse. The reflexive verb s'intéresser à is needed, and depuis with the present shows that the interest continues now. A has no reflexive pronoun, and C is in the future, which does not fit depuis.",
      ru: "1 балл: B, s'intéresse. Нужен возвратный глагол s'intéresser à, а depuis с présent показывает, что интерес продолжается сейчас. В варианте A нет возвратного местоимения se, а C стоит в futur, который не сочетается с depuis.",
    },
    answer: 'B',
    origin: 'original',
    minutes: 1,
  },
  {
    id: 't1-q2',
    subject: 'fr',
    topicIds: ['theme-identities'],
    paper: 'P2',
    section: 'T1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the best meaning of the expression in the sentence (A, B or C).',
      ru: 'Выберите лучшее значение выражения в предложении (A, B или C).',
      fr: "Lisez la phrase : « Quand il parle de ses racines, il se reconnaît dans la culture de ses grands-parents. » Que veut dire « se reconnaître dans » ?\nA) se perdre dans\nB) refuser de comprendre\nC) se sentir proche de",
    },
    markscheme: {
      en: "1 mark: C, se sentir proche de. Se reconnaître dans means to identify with something, so to feel close to it. A means to get lost in something and B means to refuse to understand; neither fits a speaker who feels part of his grandparents' culture.",
      ru: "1 балл: C, se sentir proche de. Se reconnaître dans означает «узнавать себя в чём-то», то есть чувствовать близость к этому. A означает «потеряться в чём-то», B — «отказываться понимать»; ни один из вариантов не подходит говорящему, который чувствует себя частью культуры своих бабушки и дедушки.",
    },
    answer: 'C',
    origin: 'original',
    minutes: 1,
  },
];
