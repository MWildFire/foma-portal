import { useCallback, useSyncExternalStore } from 'react';
import { useTranslation } from 'react-i18next';
import { CONTENT_LANG_KEY, resolveContentLang, type ContentLang } from '../../lib/topic-lang';

// The content language (EN / RU / EN+RU) lives in localStorage under `foma-content-lang`, so every page and
// every browser tab sees the same choice. If storage is blocked, the choice is kept in memory until reload.
const CHANGE_EVENT = 'foma-content-lang-change';
let memory: string | null = null;

function readStored(): string | null {
  try {
    return window.localStorage.getItem(CONTENT_LANG_KEY) ?? memory;
  } catch {
    return memory;
  }
}

function subscribe(onChange: () => void): () => void {
  const onStorage = (event: StorageEvent): void => {
    if (event.key === CONTENT_LANG_KEY || event.key === null) onChange();
  };
  window.addEventListener('storage', onStorage);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export function useContentLang(): [ContentLang, (next: ContentLang) => void] {
  const { i18n } = useTranslation();
  const stored = useSyncExternalStore(subscribe, readStored, readStored);
  const set = useCallback((next: ContentLang): void => {
    memory = next;
    try {
      window.localStorage.setItem(CONTENT_LANG_KEY, next);
    } catch {
      // Storage is blocked; the memory copy above keeps the choice for this visit.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);
  return [resolveContentLang(stored, i18n.language), set];
}
