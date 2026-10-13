import type { L } from '../contract/types';

// Text for the current UI language. Every L field has English, so English is the fallback.
export function pickText(text: L, lang: string): string {
  return lang.startsWith('ru') ? text.ru : text.en;
}
