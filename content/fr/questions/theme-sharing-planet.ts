import type { FrQuestion } from '../types';

// Theme 5 (Sharing the planet): two quick checks. The French item is in prompt.fr; prompt.en and prompt.ru give the task.
export const questions: FrQuestion[] = [
  {
    id: 't5-q1',
    subject: 'fr',
    topicIds: ['theme-sharing-planet'],
    paper: 'P1',
    section: 'T5',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the correct verb form to complete the sentence (A, B or C).',
      ru: 'Выберите правильную форму глагола, чтобы дополнить предложение (A, B или C).',
      fr: "Complétez la phrase : « Il faut que nous ___ de l'eau pendant l'été. »\nA) économisons\nB) économisions\nC) économiserons",
    },
    markscheme: {
      en: "1 mark: B, économisions. Il faut que is followed by the subjunctive, so the verb is économiser in the present subjunctive (nous économisions). The same form looks like the imparfait, but here the trigger is il faut que. A is the indicative present and C is the future; neither follows il faut que.",
      ru: "1 балл: B, économisions. После il faut que ставится subjonctif, поэтому нужна форма subjonctif présent (nous économisions). Эта форма совпадает с imparfait, но здесь её требует il faut que. A — présent de l'indicatif, C — futur; ни одна из них не употребляется после il faut que.",
    },
    answer: 'B',
    origin: 'original',
    minutes: 1,
  },
  {
    id: 't5-q2',
    subject: 'fr',
    topicIds: ['theme-sharing-planet'],
    paper: 'P2',
    section: 'T5',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the best meaning of the expression in the sentence (A, B or C).',
      ru: 'Выберите лучшее значение выражения в предложении (A, B или C).',
      fr: "Lisez la phrase : « Les habitants se mobilisent pour lutter contre la pollution de la rivière. » Que veut dire « se mobiliser » ?\nA) se disperser\nB) s'engager activement pour une cause\nC) se plaindre sans agir",
    },
    markscheme: {
      en: "1 mark: B, s'engager activement pour une cause. Se mobiliser means to get involved actively in a cause, so the residents act together. A means to scatter and C means to complain without acting; neither fits people who are fighting pollution in the river.",
      ru: "1 балл: B, s'engager activement pour une cause. Se mobiliser значит «активно включиться в общее дело», то есть жители действуют вместе. A — «разойтись, рассеяться», C — «жаловаться, ничего не делая»; ни один из этих вариантов не подходит людям, которые борются с загрязнением реки.",
    },
    answer: 'B',
    origin: 'original',
    minutes: 1,
  },
];
