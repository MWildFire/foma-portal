import type { FrQuestion } from '../types';

// Quick checks for the two grammar topics of unit G2: the subjunctive and the imperative (section G4), and the
// object pronouns (section G5). Each has one correct option, A, B or C.
export const questions: FrQuestion[] = [
  {
    id: 'grammar-subjunctive-imperative-q1',
    subject: 'fr',
    topicIds: ['grammar-subjunctive-imperative'],
    paper: 'P1',
    section: 'G4',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: "Which form of venir completes the sentence? « Il faut que tu … à l'heure. » A) viens B) viennes C) venir",
      ru: "Какая форма venir подходит по смыслу? « Il faut que tu … à l'heure. » A) viens B) viennes C) venir",
      fr: "Quelle forme de venir complète la phrase ? « Il faut que tu … à l'heure. » A) viens B) viennes C) venir",
    },
    markscheme: {
      en: "Answer: B. After « il faut que » the verb is in the subjunctive. The tu form of venir is viennes: ils viennent gives vienn-, then -es. « viens » is the indicative and « venir » is the infinitive.",
      ru: 'Ответ: B. После « il faut que » глагол стоит в subjonctif. Форма tu у venir — viennes: ils viennent даёт vienn-, затем -es. « viens » — индикатив, а « venir » — инфинитив.',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'grammar-subjunctive-imperative-q2',
    subject: 'fr',
    topicIds: ['grammar-subjunctive-imperative'],
    paper: 'P1',
    section: 'G4',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Which is the tu imperative of aller in « … à la gare ! » (Go to the station!)? A) Vas B) Vais C) Va',
      ru: 'Какая форма — повелительное наклонение (tu) глагола aller в предложении « … à la gare ! » (Иди на вокзал!)? A) Vas B) Vais C) Va',
      fr: "Quelle est la forme de l'impératif (tu) du verbe aller dans « … à la gare ! » ? A) Vas B) Vais C) Va",
    },
    markscheme: {
      en: 'Answer: C. For aller, the tu imperative drops the -s: tu vas becomes va. « Vas » keeps the -s, which is right only before y and en (vas-y), and « vais » is the je form of the present.',
      ru: 'Ответ: C. У aller форма tu в повелительном наклонении теряет -s: tu vas становится va. « Vas » здесь неверно (-s сохраняется только перед y и en, как в vas-y), а « vais » — форма je настоящего времени.',
    },
    answer: 'C',
    origin: 'original',
  },
  {
    id: 'grammar-pronouns-q1',
    subject: 'fr',
    topicIds: ['grammar-pronouns'],
    paper: 'P1',
    section: 'G5',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'In « Je lui ai donné le livre », what does « lui » replace? A) a place B) a direct object C) an indirect object (à + person)',
      ru: 'В предложении « Je lui ai donné le livre » что заменяет « lui »? A) место B) прямое дополнение C) косвенное дополнение (à + человек)',
      fr: "Dans la phrase « Je lui ai donné le livre », que remplace « lui » ? A) un lieu B) un complément d'objet direct C) un complément d'objet indirect (à + personne)",
    },
    markscheme: {
      en: "Answer: C. « lui » replaces a person after à, such as « à mon frère » (to my brother), so it is an indirect object. « le livre » is the direct object, and it would be replaced by « le ».",
      ru: 'Ответ: C. « lui » заменяет человека после à, например « à mon frère » (моему брату), поэтому это косвенное дополнение. « le livre » — прямое дополнение, его заменило бы « le ».',
    },
    answer: 'C',
    origin: 'original',
  },
  {
    id: 'grammar-pronouns-q2',
    subject: 'fr',
    topicIds: ['grammar-pronouns'],
    paper: 'P1',
    section: 'G5',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Which sentence replaces « à Paris » correctly in « Il habite à Paris » ? A) « Il y habite. » B) « Il habite le. » C) « Il en habite. »',
      ru: 'Какое предложение правильно заменяет « à Paris » в предложении « Il habite à Paris » ? A) « Il y habite. » B) « Il habite le. » C) « Il en habite. »',
      fr: "Quelle réponse remplace correctement « à Paris » dans « Il habite à Paris » ? A) « Il y habite. » B) « Il habite le. » C) « Il en habite. »",
    },
    markscheme: {
      en: "Answer: A. « y » replaces a place introduced by à (à Paris). « le » can only stand for a direct object, and « en » replaces a noun after de or a quantity.",
      ru: 'Ответ: A. « y » заменяет место с предлогом à (à Paris). « le » заменяет только прямое дополнение, а « en » — существительное после de или количество.',
    },
    answer: 'A',
    origin: 'original',
  },
];
