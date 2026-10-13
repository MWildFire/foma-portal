import type { L, Lang } from '../../contract/types';

// Pure logic for the conjugation trainer (grammar-present). The component reads the drill files and passes the drills
// in, so scripts/fr-conjugation-logic.test.mjs can check this file with node:test.

// One drill as both drill files export it. The files store the hint as { en, ru }; a plain string is shown as it is.
export interface DrillLike {
  id: string;
  verb: string;
  tense: string;
  pronoun: string;
  answer: string;
  hint?: string | L;
}

export type Mood = 'indicatif' | 'conditionnel' | 'subjonctif' | 'impératif';
export const MOODS: readonly Mood[] = ['indicatif', 'conditionnel', 'subjonctif', 'impératif'];

// tense is 'all' or one value of the tense field of the drills.
export interface DrillFilter {
  mood: Mood | 'all';
  tense: string;
}

// There is no mood field. The mood is read from `tense`, which holds the tenses (conjugation.ts) and the subjunctive and
// the imperative (conjugation-mood.ts). The conditional is a mood of its own, as in French school grammar.
const MOOD_OF_TENSE = new Map<string, Mood>([
  ['présent', 'indicatif'],
  ['passé composé', 'indicatif'],
  ['imparfait', 'indicatif'],
  ['futur simple', 'indicatif'],
  ['conditionnel présent', 'conditionnel'],
  ['subjonctif présent', 'subjonctif'],
  ['impératif', 'impératif'],
]);

const MOOD_LABEL: Record<Mood, L> = {
  indicatif: { en: 'Indicative (indicatif)', ru: 'Изъявительное (indicatif)' },
  conditionnel: { en: 'Conditional (conditionnel)', ru: 'Условное (conditionnel)' },
  subjonctif: { en: 'Subjunctive (subjonctif)', ru: 'Сослагательное (subjonctif)' },
  impératif: { en: 'Imperative (impératif)', ru: 'Повелительное (impératif)' },
};

const TENSE_LABEL = new Map<string, L>([
  ['présent', { en: 'Present (présent)', ru: 'Настоящее (présent)' }],
  ['passé composé', { en: 'Perfect (passé composé)', ru: 'Прошедшее составное (passé composé)' }],
  ['imparfait', { en: 'Imperfect (imparfait)', ru: 'Прошедшее несовершенное (imparfait)' }],
  ['futur simple', { en: 'Future (futur simple)', ru: 'Будущее простое (futur simple)' }],
  ['conditionnel présent', { en: 'Conditional (conditionnel présent)', ru: 'Условное настоящее (conditionnel présent)' }],
  ['subjonctif présent', { en: 'Present subjunctive (subjonctif présent)', ru: 'Настоящее сослагательное (subjonctif présent)' }],
  ['impératif', { en: 'Imperative (impératif)', ru: 'Повелительное (impératif)' }],
]);

export const moodLabel = (mood: Mood, lang: Lang): string => MOOD_LABEL[mood][lang];

// A tense that is not in the table is shown as it is in the file.
export const tenseLabel = (tense: string, lang: Lang): string => TENSE_LABEL.get(tense)?.[lang] ?? tense;

export const moodOf = (tense: string): Mood | undefined => MOOD_OF_TENSE.get(tense);

export function filterDrills(drills: readonly DrillLike[], filter: DrillFilter): DrillLike[] {
  return drills.filter(
    d => (filter.mood === 'all' || moodOf(d.tense) === filter.mood) && (filter.tense === 'all' || d.tense === filter.tense),
  );
}

// The tenses (values of the tense field) of one mood, in the order they first appear in the drills.
export function tensesFor(drills: readonly DrillLike[], mood: Mood | 'all'): string[] {
  const tenses = new Set<string>();
  for (const d of filterDrills(drills, { mood, tense: 'all' })) tenses.add(d.tense);
  return [...tenses];
}

const stripAccents = (text: string): string => text.normalize('NFD').replace(/[̀-ͯ]/g, '');

// A word that starts with a vowel or an h takes j' after je. Every verb with an h in the drills has a mute h.
export const elides = (word: string): boolean => /^[aeiouyh]/.test(stripAccents(word).toLowerCase());

// Case, accents (the cedilla too) and typographic apostrophes do not count; spaces at the ends and doubles do not count.
export function normaliseAnswer(text: string): string {
  return stripAccents(text.replace(/[‘’ʼ`´]/g, "'")).toLowerCase().replace(/\s+/g, ' ').trim();
}

// The subject pronoun the student may type in front of the form. The imperative has none, so it takes no prefix.
function acceptedPrefixes(d: DrillLike): string[] {
  if (d.tense === 'impératif') return [];
  return d.pronoun.split('/').map(p => (p === 'je' ? (elides(d.answer) ? "j'" : 'je ') : `${p} `));
}

export function isCorrect(d: DrillLike, typed: string): boolean {
  const expected = normaliseAnswer(d.answer);
  const given = normaliseAnswer(typed);
  if (expected === '' || given === '') return false;
  return given === expected || acceptedPrefixes(d).some(prefix => given === prefix + expected);
}

// The form as it is written in a sentence, with the pronoun and the elision (the imperative has no pronoun).
export function fullForm(d: DrillLike): string {
  if (d.tense === 'impératif') return d.answer;
  if (d.pronoun === 'je') return elides(d.answer) ? `j'${d.answer}` : `je ${d.answer}`;
  return `${d.pronoun} ${d.answer}`;
}

export function hintText(d: DrillLike, lang: Lang): string | undefined {
  const text = typeof d.hint === 'string' ? d.hint : d.hint?.[lang];
  return text ? text : undefined;
}

const isText = (value: unknown): value is string => typeof value === 'string' && value.trim() !== '';

export function isDrill(value: unknown): value is DrillLike {
  if (typeof value !== 'object' || value === null) return false;
  const d = value as Record<string, unknown>;
  const hint = d.hint;
  // A hint that lacks one language is kept: hintText then shows nothing in that language.
  const hintOk = hint === undefined || typeof hint === 'string' || (typeof hint === 'object' && hint !== null);
  return isText(d.id) && isText(d.verb) && isText(d.tense) && isText(d.pronoun) && isText(d.answer) && hintOk;
}

// The drills of every module the component glob found, in file order. Anything that is not a drill is skipped.
export function collectDrills(modules: Record<string, { drills?: unknown }>): DrillLike[] {
  return Object.keys(modules)
    .sort()
    .flatMap(path => {
      const drills = modules[path]?.drills;
      return Array.isArray(drills) ? drills.filter(isDrill) : [];
    });
}
