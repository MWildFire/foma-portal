import type { L, Lang } from '../contract/types';
// Runtime imports carry the .ts extension: the Node test runner loads this file directly (tests/fr-text.test.mjs).
import { langsOf, type ContentLang } from './topic-lang.ts';
import { termLabel, termLabelRu } from './topic-text.ts';

// Text for the current UI language. Every L field has English, so English is the fallback.
export function pickText(text: L, lang: string): string {
  return lang.startsWith('ru') ? text.ru : text.en;
}

// The languages a content mode shows, English first: EN gives [en], RU gives [ru], EN+RU gives [en, ru]. Without a
// mode (a caller that has no stored choice and no UI language to follow) both are shown, as before the mode existed.
export function shownLangs(mode?: ContentLang): Lang[] {
  return langsOf(mode ?? 'en+ru');
}

// The non-blank texts of an L field in the languages the mode shows, English first. A blank text is left out.
export function textsIn(text: L | null | undefined, mode?: ContentLang): { lang: Lang; text: string }[] {
  return shownLangs(mode).flatMap(lang => {
    const raw: unknown = text?.[lang];
    const value = typeof raw === 'string' ? raw.trim() : '';
    return value ? [{ lang, text: value }] : [];
  });
}

// The label of a term in the mode: "demand" for EN, "спрос (demand)" for RU. For EN+RU the language of the UI comes
// first: "спрос (demand)" in a Russian UI, "demand (спрос)" in an English one (the default, as the exam is in English).
export function termLabelIn(term: L, mode?: ContentLang, uiLang: Lang = 'en'): string {
  const langs = shownLangs(mode);
  if (langs.length > 1) return uiLang === 'ru' ? termLabelRu(term) : termLabel(term);
  return langs[0] === 'ru' ? termLabelRu(term) : term.en.trim();
}

// The term as it is first shown in the mode, with its language: the English term for EN and EN+RU, the Russian
// label for RU. Used for headings and for the front of a flashcard.
export function primaryTermIn(term: L, mode?: ContentLang): { lang: Lang; text: string } {
  const lang = shownLangs(mode)[0];
  return { lang, text: lang === 'ru' ? termLabelRu(term) : term.en.trim() };
}

// The French text of an L object, or undefined when it has none. Only the French subject sets `fr`, and it is shown
// next to the English or Russian text, never instead of it (the UI has no French). A blank `fr` counts as none, so
// an empty French line is never drawn.
export function frenchOf(text: L | null | undefined): string | undefined {
  const french = typeof text?.fr === 'string' ? text.fr.trim() : '';
  return french === '' ? undefined : french;
}
