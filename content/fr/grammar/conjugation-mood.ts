// Drills for the present subjunctive and the imperative (unit G2). The conjugation trainer reads every
// content/fr/grammar/conjugation*.ts file. Each drill asks for one form; the answer is the form only, without the
// pronoun. The hint is English and is shown after a mistake.

export interface ConjugationDrill {
  id: string;        // cm-NNN, unique within this file
  verb: string;      // infinitive, for example 'parler' or 'se lever'
  tense: string;     // 'subjonctif présent' or 'impératif'
  pronoun: string;   // 'je', 'tu', 'il/elle', 'ils/elles', 'nous' or 'vous'
  answer: string;    // the form only: 'parle', 'lève-toi'
  hint?: string;
}

export const drills: ConjugationDrill[] = [
  // ---- subjonctif présent: regular verbs ----
  { id: 'cm-001', verb: 'parler', tense: 'subjonctif présent', pronoun: 'je', answer: 'parle' },
  { id: 'cm-002', verb: 'parler', tense: 'subjonctif présent', pronoun: 'nous', answer: 'parlions' },
  { id: 'cm-003', verb: 'finir', tense: 'subjonctif présent', pronoun: 'tu', answer: 'finisses', hint: 'ils finissent minus -ent gives finiss-; the tu ending is -es' },
  { id: 'cm-004', verb: 'finir', tense: 'subjonctif présent', pronoun: 'ils/elles', answer: 'finissent' },
  { id: 'cm-005', verb: 'vendre', tense: 'subjonctif présent', pronoun: 'vous', answer: 'vendiez', hint: 'ils vendent minus -ent gives vend-; the vous ending is -iez' },
  { id: 'cm-006', verb: 'vendre', tense: 'subjonctif présent', pronoun: 'il/elle', answer: 'vende' },

  // ---- subjonctif présent: être, avoir ----
  { id: 'cm-007', verb: 'être', tense: 'subjonctif présent', pronoun: 'je', answer: 'sois', hint: 'irregular: sois, sois, soit, soyons, soyez, soient' },
  { id: 'cm-008', verb: 'être', tense: 'subjonctif présent', pronoun: 'nous', answer: 'soyons' },
  { id: 'cm-009', verb: 'être', tense: 'subjonctif présent', pronoun: 'ils/elles', answer: 'soient' },
  { id: 'cm-010', verb: 'avoir', tense: 'subjonctif présent', pronoun: 'je', answer: 'aie', hint: 'irregular: aie, aies, ait, ayons, ayez, aient' },
  { id: 'cm-011', verb: 'avoir', tense: 'subjonctif présent', pronoun: 'vous', answer: 'ayez' },
  { id: 'cm-012', verb: 'avoir', tense: 'subjonctif présent', pronoun: 'ils/elles', answer: 'aient' },

  // ---- subjonctif présent: aller, faire ----
  { id: 'cm-013', verb: 'aller', tense: 'subjonctif présent', pronoun: 'tu', answer: 'ailles', hint: 'two stems: aill- for je, tu, il and ils; all- for nous and vous' },
  { id: 'cm-014', verb: 'aller', tense: 'subjonctif présent', pronoun: 'nous', answer: 'allions' },
  { id: 'cm-015', verb: 'aller', tense: 'subjonctif présent', pronoun: 'ils/elles', answer: 'aillent' },
  { id: 'cm-016', verb: 'faire', tense: 'subjonctif présent', pronoun: 'je', answer: 'fasse', hint: 'the stem is fass-, not fais- and not font-' },
  { id: 'cm-017', verb: 'faire', tense: 'subjonctif présent', pronoun: 'vous', answer: 'fassiez' },
  { id: 'cm-018', verb: 'faire', tense: 'subjonctif présent', pronoun: 'il/elle', answer: 'fasse' },

  // ---- subjonctif présent: pouvoir, vouloir, savoir ----
  { id: 'cm-019', verb: 'pouvoir', tense: 'subjonctif présent', pronoun: 'nous', answer: 'puissions', hint: 'the stem is puiss-: puisse, puisses, puisse, puissions, puissiez, puissent' },
  { id: 'cm-020', verb: 'pouvoir', tense: 'subjonctif présent', pronoun: 'ils/elles', answer: 'puissent' },
  { id: 'cm-021', verb: 'vouloir', tense: 'subjonctif présent', pronoun: 'je', answer: 'veuille', hint: 'veuill- for je, tu, il and ils; voul- for nous and vous' },
  { id: 'cm-022', verb: 'vouloir', tense: 'subjonctif présent', pronoun: 'vous', answer: 'vouliez' },
  { id: 'cm-023', verb: 'vouloir', tense: 'subjonctif présent', pronoun: 'ils/elles', answer: 'veuillent' },
  { id: 'cm-024', verb: 'savoir', tense: 'subjonctif présent', pronoun: 'tu', answer: 'saches', hint: 'the stem is sach-: sache, saches, sache, sachions, sachiez, sachent' },
  { id: 'cm-025', verb: 'savoir', tense: 'subjonctif présent', pronoun: 'nous', answer: 'sachions' },
  { id: 'cm-026', verb: 'savoir', tense: 'subjonctif présent', pronoun: 'ils/elles', answer: 'sachent' },

  // ---- impératif: regular verbs and irregular être, avoir, aller, faire ----
  { id: 'cm-027', verb: 'parler', tense: 'impératif', pronoun: 'tu', answer: 'parle', hint: 'drop the -s of tu parles' },
  { id: 'cm-028', verb: 'parler', tense: 'impératif', pronoun: 'nous', answer: 'parlons' },
  { id: 'cm-029', verb: 'finir', tense: 'impératif', pronoun: 'vous', answer: 'finissez' },
  { id: 'cm-030', verb: 'vendre', tense: 'impératif', pronoun: 'nous', answer: 'vendons' },
  { id: 'cm-031', verb: 'être', tense: 'impératif', pronoun: 'tu', answer: 'sois', hint: 'irregular: sois, soyez, soyons' },
  { id: 'cm-032', verb: 'être', tense: 'impératif', pronoun: 'vous', answer: 'soyez' },
  { id: 'cm-033', verb: 'avoir', tense: 'impératif', pronoun: 'nous', answer: 'ayons', hint: 'irregular: aie, ayez, ayons' },
  { id: 'cm-034', verb: 'aller', tense: 'impératif', pronoun: 'tu', answer: 'va', hint: 'tu vas drops the -s: va, not vas (the -s returns only before y and en: vas-y)' },
  { id: 'cm-035', verb: 'aller', tense: 'impératif', pronoun: 'vous', answer: 'allez' },
  { id: 'cm-036', verb: 'faire', tense: 'impératif', pronoun: 'nous', answer: 'faisons' },
  { id: 'cm-037', verb: 'vouloir', tense: 'impératif', pronoun: 'vous', answer: 'veuillez', hint: 'veuillez is the polite imperative, as in "Veuillez patienter"' },

  // ---- impératif: reflexive verbs (the pronoun follows the verb with a hyphen) ----
  { id: 'cm-038', verb: 'se lever', tense: 'impératif', pronoun: 'tu', answer: 'lève-toi', hint: 'in the affirmative, te becomes toi and follows the verb' },
  { id: 'cm-039', verb: 'se lever', tense: 'impératif', pronoun: 'nous', answer: 'levons-nous' },
  { id: 'cm-040', verb: 'se laver', tense: 'impératif', pronoun: 'vous', answer: 'lavez-vous' },
  { id: 'cm-041', verb: "s'asseoir", tense: 'impératif', pronoun: 'tu', answer: 'assieds-toi', hint: 'irregular stem: assieds-toi (tu), asseyez-vous (vous)' },
  { id: 'cm-042', verb: 'se dépêcher', tense: 'impératif', pronoun: 'nous', answer: 'dépêchons-nous' },
  { id: 'cm-043', verb: 'se taire', tense: 'impératif', pronoun: 'vous', answer: 'taisez-vous' },
];
