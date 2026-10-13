import type { L } from '../../../src/contract/types';

// Conjugation drills for Grammar A (présent, passé composé, imparfait, futur simple, conditionnel présent).
// The answer is the verb form without the subject pronoun. For the passé composé it is the auxiliary plus the past
// participle (ai parlé, est allée). The trainer adds the pronoun and writes j' before a vowel or a mute h (j'ai).
// Not collected by content/fr/index.ts: the conjugation trainer imports `drills` directly.

export type DrillTense = 'présent' | 'passé composé' | 'imparfait' | 'futur simple' | 'conditionnel présent';
export type DrillPronoun = 'je' | 'tu' | 'il' | 'elle' | 'nous' | 'vous' | 'ils' | 'elles';

export interface ConjugationDrill {
  id: string;            // cj-001 onwards, unique in this file
  verb: string;          // the infinitive
  tense: DrillTense;
  pronoun: DrillPronoun;
  answer: string;        // the verb form only, without the subject pronoun
  hint?: L;              // for the tricky items; English and Russian
}

export const drills: ConjugationDrill[] = [
  // ---- présent: regular verbs ----
  { id: 'cj-001', verb: 'parler', tense: 'présent', pronoun: 'nous', answer: 'parlons' },
  { id: 'cj-002', verb: 'parler', tense: 'présent', pronoun: 'ils', answer: 'parlent' },
  { id: 'cj-003', verb: 'habiter', tense: 'présent', pronoun: 'je', answer: 'habite' },
  { id: 'cj-004', verb: 'travailler', tense: 'présent', pronoun: 'nous', answer: 'travaillons' },
  { id: 'cj-005', verb: 'manger', tense: 'présent', pronoun: 'nous', answer: 'mangeons', hint: { en: 'The e stays before -ons so that the g stays soft: mangeons.', ru: 'Буква e сохраняется перед -ons, чтобы g читалось мягко: mangeons.' } },
  { id: 'cj-006', verb: 'commencer', tense: 'présent', pronoun: 'nous', answer: 'commençons', hint: { en: 'The c becomes ç before o, so the sound stays [s]: commençons.', ru: 'Перед o буква c становится ç, чтобы звук оставался [s]: commençons.' } },
  { id: 'cj-007', verb: 'finir', tense: 'présent', pronoun: 'je', answer: 'finis' },
  { id: 'cj-008', verb: 'finir', tense: 'présent', pronoun: 'vous', answer: 'finissez', hint: { en: 'Plural forms of -ir verbs add -iss-: vous finissez, nous finissons, ils finissent.', ru: 'Во множественном числе глаголы на -ir получают -iss-: vous finissez, nous finissons, ils finissent.' } },
  { id: 'cj-009', verb: 'choisir', tense: 'présent', pronoun: 'tu', answer: 'choisis' },
  { id: 'cj-010', verb: 'réussir', tense: 'présent', pronoun: 'ils', answer: 'réussissent', hint: { en: 'The plural adds -iss-: ils réussissent.', ru: 'Во множественном числе добавляется -iss-: ils réussissent.' } },
  { id: 'cj-011', verb: 'vendre', tense: 'présent', pronoun: 'il', answer: 'vend', hint: { en: 'The il form of -re verbs has no ending: il vend.', ru: 'Форма il у глаголов на -re без окончания: il vend.' } },
  { id: 'cj-012', verb: 'vendre', tense: 'présent', pronoun: 'nous', answer: 'vendons' },
  { id: 'cj-013', verb: 'attendre', tense: 'présent', pronoun: 'tu', answer: 'attends' },
  { id: 'cj-014', verb: 'répondre', tense: 'présent', pronoun: 'elles', answer: 'répondent' },

  // ---- présent: irregular verbs ----
  { id: 'cj-015', verb: 'être', tense: 'présent', pronoun: 'je', answer: 'suis' },
  { id: 'cj-016', verb: 'être', tense: 'présent', pronoun: 'vous', answer: 'êtes' },
  { id: 'cj-017', verb: 'être', tense: 'présent', pronoun: 'elles', answer: 'sont' },
  { id: 'cj-018', verb: 'avoir', tense: 'présent', pronoun: 'je', answer: 'ai', hint: { en: "Before a vowel je becomes j': j'ai.", ru: "Перед гласной je становится j': j'ai." } },
  { id: 'cj-019', verb: 'avoir', tense: 'présent', pronoun: 'il', answer: 'a' },
  { id: 'cj-020', verb: 'avoir', tense: 'présent', pronoun: 'nous', answer: 'avons' },
  { id: 'cj-021', verb: 'avoir', tense: 'présent', pronoun: 'vous', answer: 'avez' },
  { id: 'cj-022', verb: 'aller', tense: 'présent', pronoun: 'je', answer: 'vais', hint: { en: 'Aller is irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont.', ru: 'Aller — неправильный глагол: je vais, tu vas, il va, nous allons, vous allez, ils vont.' } },
  { id: 'cj-023', verb: 'aller', tense: 'présent', pronoun: 'nous', answer: 'allons' },
  { id: 'cj-024', verb: 'aller', tense: 'présent', pronoun: 'ils', answer: 'vont' },
  { id: 'cj-025', verb: 'faire', tense: 'présent', pronoun: 'vous', answer: 'faites' },
  { id: 'cj-026', verb: 'faire', tense: 'présent', pronoun: 'tu', answer: 'fais' },
  { id: 'cj-027', verb: 'faire', tense: 'présent', pronoun: 'elle', answer: 'fait' },
  { id: 'cj-028', verb: 'faire', tense: 'présent', pronoun: 'ils', answer: 'font' },
  { id: 'cj-029', verb: 'prendre', tense: 'présent', pronoun: 'je', answer: 'prends' },
  { id: 'cj-030', verb: 'prendre', tense: 'présent', pronoun: 'ils', answer: 'prennent', hint: { en: 'The plural stem changes to prenn-: ils prennent.', ru: 'Во множественном числе основа меняется на prenn-: ils prennent.' } },
  { id: 'cj-031', verb: 'prendre', tense: 'présent', pronoun: 'nous', answer: 'prenons' },
  { id: 'cj-032', verb: 'pouvoir', tense: 'présent', pronoun: 'je', answer: 'peux' },
  { id: 'cj-033', verb: 'pouvoir', tense: 'présent', pronoun: 'nous', answer: 'pouvons' },
  { id: 'cj-034', verb: 'pouvoir', tense: 'présent', pronoun: 'ils', answer: 'peuvent', hint: { en: 'The plural stem is peuv-: ils peuvent.', ru: 'Основа во множественном числе — peuv-: ils peuvent.' } },
  { id: 'cj-035', verb: 'vouloir', tense: 'présent', pronoun: 'tu', answer: 'veux' },
  { id: 'cj-036', verb: 'vouloir', tense: 'présent', pronoun: 'vous', answer: 'voulez' },
  { id: 'cj-037', verb: 'vouloir', tense: 'présent', pronoun: 'elles', answer: 'veulent', hint: { en: 'The plural stem is veul-: elles veulent.', ru: 'Основа во множественном числе — veul-: elles veulent.' } },

  // ---- passé composé with avoir ----
  { id: 'cj-038', verb: 'parler', tense: 'passé composé', pronoun: 'je', answer: 'ai parlé' },
  { id: 'cj-039', verb: 'finir', tense: 'passé composé', pronoun: 'tu', answer: 'as fini' },
  { id: 'cj-040', verb: 'vendre', tense: 'passé composé', pronoun: 'nous', answer: 'avons vendu' },
  { id: 'cj-041', verb: 'faire', tense: 'passé composé', pronoun: 'vous', answer: 'avez fait', hint: { en: 'The participle of faire is fait.', ru: 'Причастие от faire — fait.' } },
  { id: 'cj-042', verb: 'prendre', tense: 'passé composé', pronoun: 'ils', answer: 'ont pris', hint: { en: 'The participle of prendre is pris.', ru: 'Причастие от prendre — pris.' } },
  { id: 'cj-043', verb: 'lire', tense: 'passé composé', pronoun: 'elle', answer: 'a lu', hint: { en: 'The participle of lire is lu.', ru: 'Причастие от lire — lu.' } },
  { id: 'cj-044', verb: 'écrire', tense: 'passé composé', pronoun: 'je', answer: 'ai écrit', hint: { en: 'The participle of écrire is écrit.', ru: 'Причастие от écrire — écrit.' } },
  { id: 'cj-045', verb: 'voir', tense: 'passé composé', pronoun: 'nous', answer: 'avons vu', hint: { en: 'The participle of voir is vu.', ru: 'Причастие от voir — vu.' } },
  { id: 'cj-046', verb: 'pouvoir', tense: 'passé composé', pronoun: 'il', answer: 'a pu', hint: { en: 'The participle of pouvoir is pu, without an accent.', ru: 'Причастие от pouvoir — pu, без акцента.' } },
  { id: 'cj-047', verb: 'vouloir', tense: 'passé composé', pronoun: 'vous', answer: 'avez voulu' },
  { id: 'cj-048', verb: 'avoir', tense: 'passé composé', pronoun: 'je', answer: 'ai eu', hint: { en: 'The participle of avoir is eu.', ru: 'Причастие от avoir — eu.' } },
  { id: 'cj-049', verb: 'être', tense: 'passé composé', pronoun: 'elles', answer: 'ont été', hint: { en: 'Être takes avoir as its auxiliary, so the participle does not agree: ont été.', ru: 'Être образует прошедшее с avoir, поэтому причастие не согласуется: ont été.' } },
  { id: 'cj-050', verb: 'être', tense: 'passé composé', pronoun: 'nous', answer: 'avons été' },

  // ---- passé composé with être ----
  { id: 'cj-051', verb: 'aller', tense: 'passé composé', pronoun: 'il', answer: 'est allé' },
  { id: 'cj-052', verb: 'aller', tense: 'passé composé', pronoun: 'elle', answer: 'est allée', hint: { en: 'The subject is feminine, so the participle takes -e: allée.', ru: 'Подлежащее женского рода, поэтому причастие с -e: allée.' } },
  { id: 'cj-053', verb: 'venir', tense: 'passé composé', pronoun: 'ils', answer: 'sont venus', hint: { en: 'Masculine plural: venus.', ru: 'Мужской род, множественное число: venus.' } },
  { id: 'cj-054', verb: 'partir', tense: 'passé composé', pronoun: 'elles', answer: 'sont parties', hint: { en: 'Feminine plural: parties.', ru: 'Женский род, множественное число: parties.' } },
  { id: 'cj-055', verb: 'arriver', tense: 'passé composé', pronoun: 'elle', answer: 'est arrivée' },
  { id: 'cj-056', verb: 'rester', tense: 'passé composé', pronoun: 'elles', answer: 'sont restées' },
  { id: 'cj-057', verb: 'sortir', tense: 'passé composé', pronoun: 'il', answer: 'est sorti' },
  { id: 'cj-058', verb: 'monter', tense: 'passé composé', pronoun: 'ils', answer: 'sont montés' },
  { id: 'cj-059', verb: 'descendre', tense: 'passé composé', pronoun: 'elle', answer: 'est descendue' },
  { id: 'cj-060', verb: 'naître', tense: 'passé composé', pronoun: 'elle', answer: 'est née', hint: { en: 'Naître takes être, and the participle agrees with a feminine subject: née.', ru: 'Naître образует прошедшее с être, причастие согласуется с подлежащим женского рода: née.' } },
  { id: 'cj-061', verb: 'devenir', tense: 'passé composé', pronoun: 'elle', answer: 'est devenue' },
  { id: 'cj-062', verb: 'entrer', tense: 'passé composé', pronoun: 'elles', answer: 'sont entrées' },
  { id: 'cj-063', verb: 'rentrer', tense: 'passé composé', pronoun: 'il', answer: 'est rentré' },
  { id: 'cj-064', verb: 'tomber', tense: 'passé composé', pronoun: 'elles', answer: 'sont tombées' },
  { id: 'cj-065', verb: 'retourner', tense: 'passé composé', pronoun: 'ils', answer: 'sont retournés' },

  // ---- imparfait (stem from the nous form of the present) ----
  { id: 'cj-066', verb: 'parler', tense: 'imparfait', pronoun: 'je', answer: 'parlais' },
  { id: 'cj-067', verb: 'finir', tense: 'imparfait', pronoun: 'nous', answer: 'finissions', hint: { en: 'Stem from nous finissons: finiss-.', ru: 'Основа от nous finissons: finiss-.' } },
  { id: 'cj-068', verb: 'faire', tense: 'imparfait', pronoun: 'vous', answer: 'faisiez', hint: { en: 'Stem from nous faisons: fais-.', ru: 'Основа от nous faisons: fais-.' } },
  { id: 'cj-069', verb: 'avoir', tense: 'imparfait', pronoun: 'tu', answer: 'avais', hint: { en: 'Stem from nous avons: av-.', ru: 'Основа от nous avons: av-.' } },
  { id: 'cj-070', verb: 'être', tense: 'imparfait', pronoun: 'ils', answer: 'étaient', hint: { en: 'Être is the only verb with an irregular imperfect stem: ét-.', ru: 'Être — единственный глагол с неправильной основой imparfait: ét-.' } },
  { id: 'cj-071', verb: 'aller', tense: 'imparfait', pronoun: 'nous', answer: 'allions', hint: { en: 'Stem from nous allons: all-.', ru: 'Основа от nous allons: all-.' } },
  { id: 'cj-072', verb: 'prendre', tense: 'imparfait', pronoun: 'elle', answer: 'prenait', hint: { en: 'Stem from nous prenons: pren-.', ru: 'Основа от nous prenons: pren-.' } },
  { id: 'cj-073', verb: 'pouvoir', tense: 'imparfait', pronoun: 'je', answer: 'pouvais', hint: { en: 'Stem from nous pouvons: pouv-.', ru: 'Основа от nous pouvons: pouv-.' } },
  { id: 'cj-074', verb: 'vouloir', tense: 'imparfait', pronoun: 'ils', answer: 'voulaient', hint: { en: 'Stem from nous voulons: voul-.', ru: 'Основа от nous voulons: voul-.' } },
  { id: 'cj-075', verb: 'manger', tense: 'imparfait', pronoun: 'nous', answer: 'mangions', hint: { en: 'Before -ions the e is dropped, because i already keeps the g soft: nous mangions.', ru: 'Перед -ions буква e опускается, так как i и так делает g мягким: nous mangions.' } },
  { id: 'cj-076', verb: 'commencer', tense: 'imparfait', pronoun: 'je', answer: 'commençais', hint: { en: 'The ç stays before -ais: je commençais.', ru: 'Перед -ais сохраняется ç: je commençais.' } },
  { id: 'cj-077', verb: 'être', tense: 'imparfait', pronoun: 'nous', answer: 'étions', hint: { en: 'Stem ét-: nous étions.', ru: 'Основа ét-: nous étions.' } },
  { id: 'cj-078', verb: 'vendre', tense: 'imparfait', pronoun: 'elles', answer: 'vendaient' },
  { id: 'cj-079', verb: 'réussir', tense: 'imparfait', pronoun: 'je', answer: 'réussissais' },
  { id: 'cj-080', verb: 'aller', tense: 'imparfait', pronoun: 'tu', answer: 'allais' },

  // ---- futur simple (future stem plus -ai, -as, -a, -ons, -ez, -ont) ----
  { id: 'cj-081', verb: 'parler', tense: 'futur simple', pronoun: 'nous', answer: 'parlerons' },
  { id: 'cj-082', verb: 'finir', tense: 'futur simple', pronoun: 'elle', answer: 'finira' },
  { id: 'cj-083', verb: 'vendre', tense: 'futur simple', pronoun: 'tu', answer: 'vendras', hint: { en: 'Drop the final e of -re verbs: vendr-.', ru: 'У глаголов на -re конечное e отбрасывается: vendr-.' } },
  { id: 'cj-084', verb: 'être', tense: 'futur simple', pronoun: 'je', answer: 'serai', hint: { en: 'Future stem ser-: je serai.', ru: 'Основа будущего времени ser-: je serai.' } },
  { id: 'cj-085', verb: 'avoir', tense: 'futur simple', pronoun: 'ils', answer: 'auront', hint: { en: 'Future stem aur-: ils auront.', ru: 'Основа будущего времени aur-: ils auront.' } },
  { id: 'cj-086', verb: 'aller', tense: 'futur simple', pronoun: 'vous', answer: 'irez', hint: { en: 'Future stem ir-: vous irez.', ru: 'Основа будущего времени ir-: vous irez.' } },
  { id: 'cj-087', verb: 'faire', tense: 'futur simple', pronoun: 'je', answer: 'ferai', hint: { en: 'Future stem fer-: je ferai.', ru: 'Основа будущего времени fer-: je ferai.' } },
  { id: 'cj-088', verb: 'pouvoir', tense: 'futur simple', pronoun: 'nous', answer: 'pourrons', hint: { en: 'Future stem pourr-: nous pourrons.', ru: 'Основа будущего времени pourr-: nous pourrons.' } },
  { id: 'cj-089', verb: 'vouloir', tense: 'futur simple', pronoun: 'je', answer: 'voudrai', hint: { en: 'Future stem voudr-: je voudrai.', ru: 'Основа будущего времени voudr-: je voudrai.' } },
  { id: 'cj-090', verb: 'prendre', tense: 'futur simple', pronoun: 'elles', answer: 'prendront', hint: { en: 'Future stem prendr-: elles prendront.', ru: 'Основа будущего времени prendr-: elles prendront.' } },
  { id: 'cj-091', verb: 'venir', tense: 'futur simple', pronoun: 'tu', answer: 'viendras', hint: { en: 'Future stem viendr-: tu viendras.', ru: 'Основа будущего времени viendr-: tu viendras.' } },
  { id: 'cj-092', verb: 'voir', tense: 'futur simple', pronoun: 'nous', answer: 'verrons', hint: { en: 'Future stem verr-: nous verrons.', ru: 'Основа будущего времени verr-: nous verrons.' } },
  { id: 'cj-093', verb: 'avoir', tense: 'futur simple', pronoun: 'je', answer: 'aurai', hint: { en: 'Future stem aur-: j\'aurai.', ru: 'Основа будущего времени aur-: j\'aurai.' } },
  { id: 'cj-094', verb: 'être', tense: 'futur simple', pronoun: 'ils', answer: 'seront', hint: { en: 'Future stem ser-: ils seront.', ru: 'Основа будущего времени ser-: ils seront.' } },
  { id: 'cj-095', verb: 'faire', tense: 'futur simple', pronoun: 'elles', answer: 'feront', hint: { en: 'Future stem fer-: elles feront.', ru: 'Основа будущего времени fer-: elles feront.' } },

  // ---- conditionnel présent (future stem plus -ais, -ais, -ait, -ions, -iez, -aient) ----
  { id: 'cj-096', verb: 'parler', tense: 'conditionnel présent', pronoun: 'je', answer: 'parlerais' },
  { id: 'cj-097', verb: 'être', tense: 'conditionnel présent', pronoun: 'tu', answer: 'serais', hint: { en: 'Future stem ser- plus the imperfect endings: tu serais.', ru: 'Основа будущего ser- плюс окончания imparfait: tu serais.' } },
  { id: 'cj-098', verb: 'avoir', tense: 'conditionnel présent', pronoun: 'elle', answer: 'aurait', hint: { en: 'Future stem aur-: elle aurait.', ru: 'Основа будущего aur-: elle aurait.' } },
  { id: 'cj-099', verb: 'aller', tense: 'conditionnel présent', pronoun: 'nous', answer: 'irions', hint: { en: 'Future stem ir-: nous irions.', ru: 'Основа будущего ir-: nous irions.' } },
  { id: 'cj-100', verb: 'faire', tense: 'conditionnel présent', pronoun: 'vous', answer: 'feriez', hint: { en: 'Future stem fer-: vous feriez.', ru: 'Основа будущего fer-: vous feriez.' } },
  { id: 'cj-101', verb: 'pouvoir', tense: 'conditionnel présent', pronoun: 'je', answer: 'pourrais', hint: { en: 'Future stem pourr-: je pourrais.', ru: 'Основа будущего pourr-: je pourrais.' } },
  { id: 'cj-102', verb: 'vouloir', tense: 'conditionnel présent', pronoun: 'ils', answer: 'voudraient', hint: { en: 'Future stem voudr-: ils voudraient.', ru: 'Основа будущего voudr-: ils voudraient.' } },
  { id: 'cj-103', verb: 'finir', tense: 'conditionnel présent', pronoun: 'tu', answer: 'finirais' },
  { id: 'cj-104', verb: 'vendre', tense: 'conditionnel présent', pronoun: 'elles', answer: 'vendraient' },
  { id: 'cj-105', verb: 'prendre', tense: 'conditionnel présent', pronoun: 'nous', answer: 'prendrions', hint: { en: 'Future stem prendr-: nous prendrions.', ru: 'Основа будущего prendr-: nous prendrions.' } },
  { id: 'cj-106', verb: 'venir', tense: 'conditionnel présent', pronoun: 'je', answer: 'viendrais', hint: { en: 'Future stem viendr-: je viendrais.', ru: 'Основа будущего viendr-: je viendrais.' } },
  { id: 'cj-107', verb: 'être', tense: 'conditionnel présent', pronoun: 'elles', answer: 'seraient' },
];
