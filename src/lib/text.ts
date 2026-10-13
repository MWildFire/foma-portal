import type { L } from '../contract/types';

// Text for the current UI language. Every L field has English, so English is the fallback.
export function pickText(text: L, lang: string): string {
  return lang.startsWith('ru') ? text.ru : text.en;
}

// The French text of an L object, or undefined when it has none. Only the French subject sets `fr`, and it is shown
// next to the English or Russian text, never instead of it (the UI has no French). A blank `fr` counts as none, so
// an empty French line is never drawn.
export function frenchOf(text: L | null | undefined): string | undefined {
  const french = typeof text?.fr === 'string' ? text.fr.trim() : '';
  return french === '' ? undefined : french;
}
