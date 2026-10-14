// The language of the page (<html lang>) for a UI language: Russian for ru, English for every other language.
export function documentLang(language: string): 'ru' | 'en' {
  return language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}
