import type { FrQuestion } from '../types';

// Theme 4 (Social organization): two quick checks. The French item is in prompt.fr; prompt.en and prompt.ru give the task.
export const questions: FrQuestion[] = [
  {
    id: 't4-q1',
    subject: 'fr',
    topicIds: ['theme-social-organization'],
    paper: 'P1',
    section: 'T4',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the correct verb form to complete the sentence (A, B or C).',
      ru: 'Выберите правильную форму глагола, чтобы дополнить предложение (A, B или C).',
      fr: "Complétez la phrase : « Bien qu'il ___ beaucoup de travail, Marc fait du bénévolat le samedi. »\nA) a\nB) ait\nC) aura",
    },
    markscheme: {
      en: "1 mark: B, ait. Bien que always takes the subjunctive, and the subjunctive of avoir is ait. A is the indicative present, which cannot follow bien que, and C is the future, which does not fit a concession.",
      ru: "1 балл: B, ait. После bien que всегда стоит subjonctif, а subjonctif от avoir — ait. Вариант A — présent de l'indicatif, который не может стоять после bien que, а C — futur, который не подходит для уступки.",
    },
    answer: 'B',
    origin: 'original',
    minutes: 1,
  },
  {
    id: 't4-q2',
    subject: 'fr',
    topicIds: ['theme-social-organization'],
    paper: 'P2',
    section: 'T4',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the best meaning of the expression in the sentence (A, B or C).',
      ru: 'Выберите лучшее значение выражения в предложении (A, B или C).',
      fr: "Lisez la phrase : « Après des mois de recherche, Sophie a enfin décroché un poste dans une association. » Que veut dire « décrocher un poste » ?\nA) perdre son poste\nB) obtenir un emploi\nC) refuser une offre",
    },
    markscheme: {
      en: "1 mark: B, obtenir un emploi (to get a job). Décrocher un poste means to succeed in getting a job, often after a long search. A means to lose a job and C means to turn down an offer; neither fits a sentence about success after months of searching.",
      ru: "1 балл: B, obtenir un emploi (получить работу). Décrocher un poste означает получить работу, часто после долгих поисков. Вариант A означает потерять работу, а C — отказаться от предложения; ни то ни другое не подходит к фразе об успехе после месяцев поисков.",
    },
    answer: 'B',
    origin: 'original',
    minutes: 1,
  },
];
