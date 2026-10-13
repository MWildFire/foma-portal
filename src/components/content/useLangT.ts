import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { Lang } from '../../contract/types';
import { toLang } from '../../lib/topic-lang';

// Strings of the `topic` namespace in a chosen language. Inside a topic body this is the language of that
// body, so the English column has English buttons and the Russian column has Russian ones. Without a
// language it follows the UI language.
export function useLangT(lang?: Lang): { t: (key: string, options?: Record<string, unknown>) => string; lang: Lang } {
  const { t, i18n } = useTranslation('topic');
  const lng: Lang = lang ?? toLang(i18n.language);
  const bound = useCallback((key: string, options?: Record<string, unknown>): string => String(t(key, { ...options, lng })), [t, lng]);
  return { t: bound, lang: lng };
}
