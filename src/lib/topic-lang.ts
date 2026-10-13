import type { Lang } from '../contract/types';

// Content language of a topic page: English, Russian, or both side by side.
// It is separate from the UI language (the switch in the header).
export type ContentLang = 'en' | 'ru' | 'en+ru';

export const CONTENT_LANG_KEY = 'foma-content-lang';
export const CONTENT_LANGS: readonly ContentLang[] = ['en', 'ru', 'en+ru'];

export function isContentLang(value: unknown): value is ContentLang {
  return value === 'en' || value === 'ru' || value === 'en+ru';
}

// i18n.language can be 'ru', 'ru-RU' or 'en-GB'. Anything that is not Russian is English.
export function toLang(language: string | null | undefined): Lang {
  return typeof language === 'string' && language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

// A stored choice wins. Without one, the text follows the UI language.
export function resolveContentLang(stored: string | null | undefined, uiLanguage: string | null | undefined): ContentLang {
  return isContentLang(stored) ? stored : toLang(uiLanguage);
}

// The bodies to render, in display order (English first).
export function langsOf(content: ContentLang): Lang[] {
  return content === 'en+ru' ? ['en', 'ru'] : [content];
}

// ready: every wanted language has a body. partial: some do. missing: none does.
export type BodyState = 'ready' | 'partial' | 'missing';

export function bodyState(available: { en?: unknown; ru?: unknown } | null | undefined, content: ContentLang): BodyState {
  const wanted = langsOf(content);
  const have = wanted.filter(lang => Boolean(available?.[lang]));
  if (have.length === wanted.length) return 'ready';
  return have.length > 0 ? 'partial' : 'missing';
}

export function missingLangs(available: { en?: unknown; ru?: unknown } | null | undefined, content: ContentLang): Lang[] {
  return langsOf(content).filter(lang => !available?.[lang]);
}
