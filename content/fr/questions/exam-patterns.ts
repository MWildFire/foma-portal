import type { FrQuestion } from '../types';

// Check-yourself questions for the page on what the past papers ask. They are our own wording, in the style of the
// papers; the papers themselves are linked from content/fr/pastpapers.ts and are not copied here.
export const questions: FrQuestion[] = [
  {
    id: 'exam-pattern-q1',
    subject: 'fr',
    topicIds: ['exam-what-is-asked'],
    paper: 'P1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'A Paper 1 task asks you to speak directly to listeners and persuade them to vote for a new school library. Which text type fits best? A) an article B) a speech C) a review. Answer with the letter.',
      ru: 'Задание Части 1 просит обратиться напрямую к слушателям и убедить их проголосовать за новую школьную библиотеку. Какой тип текста подходит лучше всего? A) статья (article) B) речь (speech) C) рецензия (review). Ответьте буквой.',
      fr: 'Une tâche de la partie 1 demande de s\'adresser directement aux auditeurs et de les convaincre de voter pour une nouvelle bibliothèque scolaire. Quel type de texte convient le mieux ? A) un article B) un discours C) une critique. Répondez par la lettre.',
    },
    markscheme: {
      en: 'Answer: B. A speech speaks to listeners directly and can persuade them. An article informs, and a review judges a book, a film or an event.',
      ru: 'Ответ: B. Речь обращается к слушателям напрямую и может их убедить. Статья информирует, а рецензия (review) оценивает книгу, фильм или событие.',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'exam-pattern-q2',
    subject: 'fr',
    topicIds: ['exam-what-is-asked'],
    paper: 'P2',
    marks: 1,
    command: 'Identify',
    prompt: {
      en: 'Read the sentence, then the statement, and answer vrai, faux or non mentionné. Sentence: « Le projet a été reporté à l\'année prochaine. » Statement: "The project will take place this year."',
      ru: 'Прочитайте фразу и утверждение и ответьте vrai, faux или non mentionné. Фраза: « Le projet a été reporté à l\'année prochaine. » Утверждение: «Проект состоится в этом году».',
    },
    markscheme: {
      en: '1 mark: faux. The sentence says the project was postponed to next year, so the statement is false. It is not "non mentionné", because the text answers the question directly.',
      ru: '1 балл: faux. Во фразе сказано, что проект перенесён на следующий год, значит утверждение неверно. Это не «non mentionné»: текст прямо отвечает на вопрос.',
    },
    answer: 'faux',
    origin: 'original',
  },
];
