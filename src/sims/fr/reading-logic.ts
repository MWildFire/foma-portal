import type { L } from '../../contract/types';

// Pure logic for the reading practice (Paper 2). The component reads the passages and items at build time and passes
// them in, so scripts/fr-reading-logic.test.mjs can check this file with node:test.
// French answers are compared without accents, capitals, apostrophe variants or final punctuation. English short answers
// pass when every key word of the answer is in the student's words (any order, small variations; see sameWord).

// What the logic reads from a passage (content/fr/reading/*.ts) and from an item (content/fr/questions/reading-*.ts).
export interface PassageLike {
  id: string;
  title: L;
  theme: string;
  level: string;
  paragraphs: string[];
  questionIds: string[];
}

export interface ItemLike {
  id: string;
  prompt: L;
  markscheme: L;
  answer?: string;
}

// truefalse: vrai, faux, non mentionné. letter: a paragraph (A to E) or an option. english: a short answer in English
// (the prompt says so). french: a French word or phrase from the text. none: the item has no answer key.
export type AnswerKind = 'truefalse' | 'letter' | 'english' | 'french' | 'none';

export interface PromptOption { letter: string; label: string }
export interface SplitPrompt { stem: string; options: PromptOption[] }

export const TIMED_MINUTES = 45;
export const TIMED_LIMIT_MS = TIMED_MINUTES * 60 * 1000;
export const TRUE_FALSE = ['vrai', 'faux', 'non mentionné'];

// Function words that do not carry the meaning of an English key phrase.
const STOP_WORDS = new Set(['a', 'an', 'the', 'of', 'to', 'in', 'on', 'at', 'by', 'for', 'with', 'and', 'or', 'is', 'are', 'was', 'were', 'be', 'it', 'its', 'this', 'that', 'as', 'from']);

// Number words count as digits, so "twelve" and "12" are the same answer.
const NUMBER_WORDS = new Map<string, string>(Object.entries({
  zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9', ten: '10',
  eleven: '11', twelve: '12', thirteen: '13', fourteen: '14', fifteen: '15', sixteen: '16', seventeen: '17', eighteen: '18',
  nineteen: '19', twenty: '20', thirty: '30', forty: '40', fifty: '50', sixty: '60', seventy: '70', eighty: '80', ninety: '90',
  hundred: '100',
}));

// Words that count as one word: "almost" and "nearly" in "almost two hours".
const SAME_WORD: string[][] = [['almost', 'nearly']];

// Endings that give the same word: eye / eyes, attract / attracting, reach / reached.
const ENDINGS = ['', 's', 'es', 'd', 'ed', 'ing'];

const TRUE_FALSE_KEYS = TRUE_FALSE.map(value => normaliseFrench(value));

// Accents, capitals, apostrophe variants and punctuation do not count in a French answer.
export function normaliseFrench(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[’`´]/g, "'")
    .replace(/[.,;:!?«»“”"()…]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// truefalse, letter, english, french or none, from the answer key and the prompt (no field stores the kind).
export function answerKind(item: ItemLike): AnswerKind {
  const expected = (item.answer ?? '').trim();
  if (expected === '') return 'none';
  if (TRUE_FALSE_KEYS.includes(normaliseFrench(expected))) return 'truefalse';
  if (/^[A-E]$/i.test(expected)) return 'letter';
  return /answer in english/i.test(item.prompt.en) ? 'english' : 'french';
}

export function checkAnswer(item: ItemLike, typed: string): boolean {
  const expected = (item.answer ?? '').trim();
  if (expected === '' || typed.trim() === '') return false;
  switch (answerKind(item)) {
    case 'truefalse': return normaliseFrench(expected) === normaliseFrench(typed);
    case 'letter': return expected.toUpperCase() === typed.trim().toUpperCase();
    case 'english': return englishMatches(expected, typed);
    case 'french': return frenchMatches(expected, typed);
    default: return false;
  }
}

export function frenchMatches(expected: string, typed: string): boolean {
  const wanted = normaliseFrench(expected);
  return wanted !== '' && wanted === normaliseFrench(typed);
}

// Every key word of the expected phrase must be in the typed answer. The order does not matter and extra words are fine.
export function englishMatches(expected: string, typed: string): boolean {
  const keys = keyWords(expected).map(canonical);
  if (keys.length === 0) return frenchMatches(expected, typed);
  const given = words(typed).map(canonical);
  return keys.every(key => given.some(word => sameWord(key, word)));
}

// The question text and its A) B) C) options, when it has two or more (the multiple-choice and who-says items).
export function splitPrompt(text: string): SplitPrompt {
  const stem: string[] = [];
  const options: PromptOption[] = [];
  for (const line of text.split('\n').map(part => part.trim()).filter(part => part !== '')) {
    const match = /^([A-E])\)\s*(.+)$/.exec(line);
    if (match) options.push({ letter: match[1], label: match[2] });
    else if (options.length === 0) stem.push(line);
  }
  return { stem: stem.join(' '), options: options.length >= 2 ? options : [] };
}

// The passages in id order, cut into sets of three: R1 to R3 and R4 to R6, the two sets of a timed run.
export function timedSets<T extends { id: string }>(passages: readonly T[], size = 3): T[][] {
  const sorted = [...passages].sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
  const sets: T[][] = [];
  for (let start = 0; start < sorted.length; start += size) sets.push(sorted.slice(start, start + size));
  return sets;
}

// mm:ss for the countdown. The time shows 00:01 until the last second has gone and 00:00 at the end.
export function formatTime(ms: number): string {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

export function scoreOf(items: readonly ItemLike[], answers: Readonly<Record<string, string>>): { right: number; total: number } {
  return { right: items.filter(item => checkAnswer(item, answers[item.id] ?? '')).length, total: items.length };
}

// The passages exported by the modules of content/fr/reading/ (each module exports `passage`), in id order.
export function collectPassages(modules: Record<string, { passage?: unknown }>): PassageLike[] {
  return Object.values(modules)
    .map(module => module.passage)
    .filter(isPassage)
    .sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
}

// The items exported by the modules of content/fr/questions/ (each module exports `questions`).
export function collectItems(modules: Record<string, { questions?: unknown }>): ItemLike[] {
  return Object.values(modules)
    .flatMap(module => (Array.isArray(module.questions) ? module.questions : []))
    .filter(isItem);
}

export function isPassage(value: unknown): value is PassageLike {
  return isRecord(value) && typeof value.id === 'string' && isLang(value.title)
    && isStringList(value.paragraphs) && isStringList(value.questionIds);
}

export function isItem(value: unknown): value is ItemLike {
  return isRecord(value) && typeof value.id === 'string' && isLang(value.prompt) && isLang(value.markscheme)
    && (value.answer === undefined || typeof value.answer === 'string');
}

// Lower-case words without accents or punctuation; number words become digits.
function words(text: string): string[] {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(word => word !== '')
    .map(word => NUMBER_WORDS.get(word) ?? word);
}

function keyWords(text: string): string[] {
  return [...new Set(words(text).filter(word => !STOP_WORDS.has(word)))];
}

function canonical(word: string): string {
  return SAME_WORD.find(group => group.includes(word))?.[0] ?? word;
}

// Two words match when they are equal, when one is the other with a common ending (eye / eyes, attract / attracting),
// or when a word of five letters or more has one typing slip. Digits must match exactly.
function sameWord(key: string, given: string): boolean {
  if (key === given) return true;
  if (/\d/.test(key) || /\d/.test(given)) return false;
  const [short, long] = key.length <= given.length ? [key, given] : [given, key];
  if (short.length >= 3 && ENDINGS.some(ending => short + ending === long)) return true;
  return short.length >= 5 && editDistance(key, given) <= 1;
}

function editDistance(a: string, b: string): number {
  let row = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i += 1) {
    const next = [i];
    for (let j = 1; j <= b.length; j += 1) {
      next[j] = Math.min(row[j] + 1, next[j - 1] + 1, row[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    row = next;
  }
  return row[b.length];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isLang(value: unknown): value is L {
  return isRecord(value) && typeof value.en === 'string' && typeof value.ru === 'string';
}

function isStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(part => typeof part === 'string');
}
