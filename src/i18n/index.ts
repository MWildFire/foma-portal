import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { documentLang } from './document-lang';

// One JSON file per namespace: en/<ns>.json and ru/<ns>.json. Adding a namespace needs no edit here.
type Bundle = Record<string, Record<string, unknown>>;

function bundle(modules: Record<string, { default: Record<string, unknown> }>): Bundle {
  const out: Bundle = {};
  for (const [path, module] of Object.entries(modules)) {
    const ns = path.split('/').pop()!.replace(/\.json$/, '');
    out[ns] = module.default;
  }
  return out;
}

const en = bundle(import.meta.glob<{ default: Record<string, unknown> }>('./en/*.json', { eager: true }));
const ru = bundle(import.meta.glob<{ default: Record<string, unknown> }>('./ru/*.json', { eager: true }));

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, ru },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    defaultNS: 'common',
    ns: Object.keys(en),
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'foma-lang',
      caches: ['localStorage'],
    },
  })
  .then(() => syncDocumentLang(i18n.language));

// The document language follows the UI language, so screen readers and hyphenation use the right one. The unit tests
// load this module in Node, where there is no document.
function syncDocumentLang(language: string): void {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = documentLang(language);
}
i18n.on('languageChanged', syncDocumentLang);

export default i18n;
