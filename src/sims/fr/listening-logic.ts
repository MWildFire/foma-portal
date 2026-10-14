import type { FrQuestion, ListeningTrack } from '../../../content/fr/types';
import { frenchKeysMatch } from './accents.ts';

// Pure logic for the listening player (listening-player.tsx). The real tracks and questions are checked by
// tests/fr-listening-logic.test.mjs.

// The pause between the two plays of a recording, in seconds. Source: IB French B SL, Paper 2 (listening comprehension),
// instructions to candidates, the 2022 to 2025 papers: each audio text is played twice, with a two-minute pause before
// the repeat. The practice player keeps its own constant (LISTENING_PAUSE_SECONDS in src/components/practice/listening.ts);
// it must hold the same value.
export const PAUSE_SECONDS = 120;

// The speeds the student can choose (1 is normal speed).
export const SPEEDS = [0.9, 1] as const;
export type Speed = (typeof SPEEDS)[number];

// One practice run: the first listening, the pause, the second listening, then done. 'idle' is before the start.
export type Phase = 'idle' | 'first' | 'pause' | 'second' | 'done';

export function playOrder(): Phase[] {
  return ['first', 'pause', 'second', 'done'];
}

// The phase after the audio ends or after the pause ends. A run ends at 'done'; 'idle' does not move by itself.
export function nextPhase(phase: Phase): Phase {
  const order = playOrder();
  const at = order.indexOf(phase);
  if (at === -1) return phase;
  return order[Math.min(at + 1, order.length - 1)];
}

// 'l1-racines' gives 'l1'. Questions of a track have the same section (content/fr/questions/listening-*.ts).
export function sectionOf(trackId: string): string | undefined {
  return /^(l\d+)-/.exec(trackId)?.[1];
}

// The Paper 2 items of one track, sorted by id (l1-q01 before l1-q02).
export function questionsForTrack(track: Pick<ListeningTrack, 'id'>, questions: readonly FrQuestion[]): FrQuestion[] {
  const section = sectionOf(track.id);
  if (section === undefined) return [];
  return questions
    .filter(question => question.paper === 'P2' && question.section === section)
    .sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}

export const TRUE_FALSE = ['vrai', 'faux', 'non mentionné'] as const;

// vrai / faux / non mentionné (true, false, not mentioned), a letter (multiple choice, matching), or words (short answer).
export type AnswerKind = 'truefalse' | 'letter' | 'text';

export function answerKind(answer: string): AnswerKind {
  if ((TRUE_FALSE as readonly string[]).includes(answer)) return 'truefalse';
  if (/^[A-E]$/.test(answer)) return 'letter';
  return 'text';
}

// The option letters written in a prompt as "A) … B) … C)". A letter counts only when it is not part of a word.
// Matching items list five options (A to E); when no options are found, the three of a multiple choice item are used.
export function optionLetters(prompt: string): string[] {
  const found = new Set<string>();
  for (const match of prompt.matchAll(/(?<!\p{L})([A-E])\)/gu)) found.add(match[1]);
  const letters = [...found].sort();
  return letters.length >= 2 ? letters : ['A', 'B', 'C'];
}

// French words for the whole numbers 0 to 100 (2 is "deux", 80 is "quatre-vingts").
const UNITS = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
const TENS = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];

function frenchNumber(n: number): string {
  if (n === 100) return 'cent';
  if (n < 20) return UNITS[n];
  if (n < 70) {
    const unit = n % 10;
    const tens = TENS[Math.floor(n / 10)];
    if (unit === 0) return tens;
    return unit === 1 ? `${tens} et un` : `${tens}-${UNITS[unit]}`;
  }
  if (n < 80) return n === 71 ? 'soixante et onze' : `soixante-${UNITS[n - 60]}`;
  if (n === 80) return 'quatre-vingts';
  return `quatre-vingt-${UNITS[n - 80]}`;
}

// Digits from 0 to 100 are read as French words ("3 mois" is "trois mois"). Other numbers are kept as they are.
function numeralsToWords(text: string): string {
  return text.replace(/(?<![\p{L}\p{N}])\d+(?![\p{L}\p{N}])/gu, digits => {
    const n = Number(digits);
    return n <= 100 && String(n) === digits ? frenchNumber(n) : digits;
  });
}

// Leading articles and prepositions are ignored, one after another: "la salle des fêtes" and "salle des fêtes" are the same
// answer, and so are "à Rennes" and "Rennes", or "à l'école" and "école". A word left on its own is kept.
const LEADING_WORD = /^(?:(?:à|le|la|les|un|une|des|du|de|au|aux|en)\s+|(?:l|d)'\s*)/;

function withoutLeadingWords(text: string): string {
  let rest = text;
  let next = rest.replace(LEADING_WORD, '');
  while (next !== rest && next !== '') {
    rest = next;
    next = rest.replace(LEADING_WORD, '');
  }
  return rest;
}

// Case, spacing, typographic apostrophes and final punctuation do not matter; accents and letters do. Numerals from 0
// to 100 match their French words, and leading articles and prepositions are ignored.
export function normalizeAnswer(text: string): string {
  const plain = text
    .normalize('NFC')
    .replace(/[’`´]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.,;:!?]+$/, '')
    .trim()
    .toLowerCase();
  return withoutLeadingWords(numeralsToWords(plain));
}

// Accents count unless they do not change the word (accents.ts): "Quebec" is right for "Québec", "ou" is not "où".
export function isCorrect(answer: string, response: string): boolean {
  const given = normalizeAnswer(response);
  return given !== '' && frenchKeysMatch(normalizeAnswer(answer), given);
}

// The text of a turn as the transcript shows it: the "[pause 1.5s]" markers of the audio script are removed.
export function transcriptText(fr: string): string {
  return fr.replace(/\[pause\s+\d+(?:\.\d+)?s\]\s*/g, '').trim();
}

export function score(
  questions: readonly { id: string; answer?: string }[],
  responses: Readonly<Record<string, string>>,
): { right: number; total: number } {
  let right = 0;
  for (const question of questions) {
    if (question.answer !== undefined && isCorrect(question.answer, responses[question.id] ?? '')) right += 1;
  }
  return { right, total: questions.length };
}
