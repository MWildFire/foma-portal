import type { FrQuestion } from '../types';

// Theme 2 (Experiences): two quick checks for the topic theme-experiences, section T2. t2-q1 is a paper 1 choice about
// the passé composé and the imparfait. t2-q2 is a paper 2 choice about the meaning of a fixed expression in a text.

export const questions: FrQuestion[] = [
  {
    id: 't2-q1',
    subject: 'fr',
    topicIds: ['theme-experiences'],
    paper: 'P1',
    section: 'T2',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: "Which sentence best tells one specific, completed event from the past?\nA) « Chaque été, nous allions à la montagne. »\nB) « Samedi dernier, nous sommes allés à la montagne. »\nC) « Samedi dernier, nous allons à la montagne. »",
      ru: "Какая фраза лучше всего рассказывает об одном конкретном, законченном событии в прошлом?\nA) « Chaque été, nous allions à la montagne. »\nB) « Samedi dernier, nous sommes allés à la montagne. »\nC) « Samedi dernier, nous allons à la montagne. »",
      fr: "Quelle phrase raconte le mieux un événement précis et terminé du passé ?\nA) « Chaque été, nous allions à la montagne. »\nB) « Samedi dernier, nous sommes allés à la montagne. »\nC) « Samedi dernier, nous allons à la montagne. »",
    },
    markscheme: {
      en: "Answer B. « Samedi dernier, nous sommes allés » is one completed event, so it takes the passé composé: the auxiliary is être, and « allés » agrees with the subject « nous ». A describes a habit, which takes the imparfait, and C uses the présent for an event in the past.",
      ru: "Ответ B. «Samedi dernier, nous sommes allés» — одно законченное событие, поэтому здесь passé composé: вспомогательный глагол être, а «allés» согласуется с подлежащим «nous». A описывает привычку (imparfait), а C использует présent для события в прошлом.",
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 't2-q2',
    subject: 'fr',
    topicIds: ['theme-experiences'],
    paper: 'P2',
    section: 'T2',
    marks: 1,
    command: 'Choose',
    stimulus: {
      en: "Pendant son séjour en Irlande, Inès a eu le mal du pays. Pourtant, après deux semaines, elle s'était fait des amis et elle ne voulait plus rentrer.",
      ru: "Pendant son séjour en Irlande, Inès a eu le mal du pays. Pourtant, après deux semaines, elle s'était fait des amis et elle ne voulait plus rentrer.",
      fr: "Pendant son séjour en Irlande, Inès a eu le mal du pays. Pourtant, après deux semaines, elle s'était fait des amis et elle ne voulait plus rentrer.",
    },
    prompt: {
      en: "What does the expression « avoir le mal du pays » mean in the text?\nA) « être malade pendant un voyage »\nB) « être très heureux d'être à l'étranger »\nC) « regretter sa maison et sa famille »",
      ru: "Что означает выражение « avoir le mal du pays » в тексте?\nA) « être malade pendant un voyage »\nB) « être très heureux d'être à l'étranger »\nC) « regretter sa maison et sa famille »",
      fr: "Que signifie l'expression « avoir le mal du pays » dans le texte ?\nA) « être malade pendant un voyage »\nB) « être très heureux d'être à l'étranger »\nC) « regretter sa maison et sa famille »",
    },
    markscheme: {
      en: "Answer C. At first Inès misses her home, so « avoir le mal du pays » means to be homesick, that is, to miss one's home and family. A is about illness, and B describes how she felt later, not the meaning of the expression.",
      ru: "Ответ C. Сначала Инес скучает по дому, поэтому «avoir le mal du pays» значит тосковать по дому, то есть сожалеть о доме и семье. A говорит о болезни, а B описывает, что она почувствовала позже, а не значение выражения.",
    },
    answer: 'C',
    origin: 'original',
  },
];
