import { stripLiterals } from './math.ts';

// Cyrillic and Cyrillic Supplement blocks: every letter Russian text uses.
const CYRILLIC = /[Ѐ-ԯ]/;
const LATIN_LETTER = /[A-Za-zÀ-ɏ]/;

export function hasCyrillic(text: string): boolean {
  return CYRILLIC.test(text);
}

export interface CyrillicHit { count: number; index: number }

// Number of Cyrillic characters and the index of the first one (-1 when there are none).
export function scanCyrillic(text: string): CyrillicHit {
  const pattern = new RegExp(CYRILLIC.source, 'g');
  let count = 0;
  let index = -1;
  let match = pattern.exec(text);
  while (match !== null) {
    if (index === -1) index = match.index;
    count++;
    match = pattern.exec(text);
  }
  return { count, index };
}

// Rule for a Russian field (the one rule chosen for "ru contains Cyrillic"):
//   - an empty string is fine;
//   - a string with Cyrillic anywhere is fine;
//   - a string whose text outside formulas and `code spans` has no letters at all (only formulas, code, numbers,
//     symbols) is fine;
//   - a single token identical to the English value (SQL, Python, P1) is language-neutral and fine;
//   - anything else is Latin text that looks untranslated.
export function looksUntranslated(ru: string, en?: string): boolean {
  if (ru.trim() === '' || hasCyrillic(ru)) return false;
  if (!LATIN_LETTER.test(stripLiterals(ru))) return false;
  if (en !== undefined && ru.trim() === en.trim() && !/\s/.test(ru.trim())) return false;
  return true;
}

// 1-based line and column of a character index.
export function positionOf(text: string, index: number): { line: number; column: number } {
  const before = text.slice(0, index);
  return { line: before.split('\n').length, column: index - before.lastIndexOf('\n') };
}

// A short single-line quote of the text around an index, for error messages.
export function excerpt(text: string, index: number, radius = 24): string {
  const from = Math.max(0, index - radius);
  const to = Math.min(text.length, index + radius);
  const body = text.slice(from, to).replace(/\s+/g, ' ').trim();
  return `${from > 0 ? '...' : ''}${body}${to < text.length ? '...' : ''}`;
}

export interface PlaceholderHit { marker: string; line: number }

// Rule 5: TODO, TBD and lorem as whole words in any case, and the literal ???.
export function findPlaceholders(text: string): PlaceholderHit[] {
  const pattern = /\b(?:todo|tbd|lorem)\b|\?\?\?/gi;
  const hits: PlaceholderHit[] = [];
  let match = pattern.exec(text);
  while (match !== null) {
    hits.push({ marker: match[0], line: positionOf(text, match.index).line });
    match = pattern.exec(text);
  }
  return hits;
}

// Quoted spellings of a value, to find it in TypeScript source.
export function quoted(value: string): string[] {
  return [`'${value}'`, `"${value}"`, `\`${value}\``];
}
