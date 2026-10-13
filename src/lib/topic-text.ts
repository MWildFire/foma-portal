const sameText = (a: string, b: string): boolean => a.trim().toLowerCase() === b.trim().toLowerCase();

const CYRILLIC = /[Ѐ-ӿ]/;

// The Russian term without its trailing English copy in brackets: "спрос (demand)" gives "спрос". The bracket is found by
// balance, so "функция (f(x))" gives "функция". A bracket is a copy when it follows a space and holds no Cyrillic: "площадь
// (излишек)" stays. In a bracket with Russian words, the English items of a list are copies and go: "ИРЧП, Human
// Development Index" keeps "ИРЧП". A bracket attached to a word is notation, as in "y = f(x)", and stays too.
function russianOnly(ru: string): string {
  const text = ru.trim();
  if (!text.endsWith(')')) return text;
  let depth = 0;
  for (let i = text.length - 1; i >= 0; i -= 1) {
    if (text[i] === ')') {
      depth += 1;
    } else if (text[i] === '(') {
      depth -= 1;
      if (depth === 0) {
        if (!(i === 0 || /\s/.test(text[i - 1]))) return text;   // attached to a word: notation
        const before = text.slice(0, i).trim();
        const inside = text.slice(i + 1, -1);
        if (!CYRILLIC.test(inside)) return before;                // the English copy alone
        // A list with Russian items, such as "ИРЧП, Human Development Index": the English items are copies, the rest stays.
        const items = inside.split(',').map(item => item.trim());
        const russian = items.filter(item => CYRILLIC.test(item));
        if (russian.length === items.length) return text;
        return russian.length > 0 ? `${before} (${russian.join(', ')})` : before;
      }
    }
  }
  return text;
}

// The English term with its brackets as a list: "crude birth rate (CBR)" gives "crude birth rate, CBR", so the label
// never has brackets inside brackets. Only a bracket after a space that holds no bracket is turned into a list. A bracket
// attached to a word ("f(x)", "E(X)") is notation and stays as written: "f, x" would say something else.
function englishPart(en: string): string {
  return en.trim().replace(/\s+\(([^()]*)\)/g, (_match, inner: string) => (inner.trim() ? `, ${inner.trim()}` : ''));
}

// "EN term (RU term)". The Russian term in the content is often written "спрос (demand)": the Russian
// word plus the English term in brackets. That trailing copy of the English term is dropped here, so the
// label reads "demand (спрос)" and not "demand (спрос (demand))". When the Russian term adds nothing
// (empty, or the same text), only the English term is shown.
export function termLabel(term: { en: string; ru: string }): string {
  const en = term.en.trim();
  const ru = term.ru.trim();
  if (!ru || !en) return en || ru;
  const russian = russianOnly(ru);
  if (!russian || sameText(russian, en)) return en;
  return `${en} (${russian})`;
}

// "RU term (EN term)", the one label of a term in Russian (decision 6): the Russian term first, the English term once in
// brackets ("спрос (demand)"). The Russian term loses its own English copy, because the label adds the English term.
// When the Russian term adds nothing (empty, no Cyrillic, or the same text as the English), only the English term is shown.
export function termLabelRu(term: { en: string; ru: string }): string {
  const en = term.en.trim();
  const ru = term.ru.trim();
  if (!en) return ru;
  const english = englishPart(en);
  if (!ru) return english;
  const russian = russianOnly(ru);
  if (!russian || !CYRILLIC.test(russian) || sameText(russian, en)) return english;
  return `${russian} (${english})`;
}

// An own-notes source ("kind: own") is a note for the reviewer, not a reference for the student, so it is not shown.
export function showsSource(source: { kind: string }): boolean {
  return source.kind !== 'own';
}

// '<CaseMap ids="a, b,,a"/>' -> ['a', 'b']. Order is kept, duplicates and blanks are dropped.
export function parseIdList(ids: string | null | undefined): string[] {
  if (!ids) return [];
  const out: string[] = [];
  for (const part of ids.split(',')) {
    const id = part.trim();
    if (id && !out.includes(id)) out.push(id);
  }
  return out;
}

// Hosts that carry private school or personal material. The content contract allows only public pages and
// ThinkIB, so a link to one of these is never shown, even if it slips into a SourceRef.
const PRIVATE_HOSTS = [
  'classlink.com',
  'toddleapp.com',
  'toddle.co',
  'drive.google.com',
  'docs.google.com',
  '1drv.ms',
  'onedrive.live.com',
  'sharepoint.com',
  'dropbox.com',
];

function hostIsPrivate(host: string): boolean {
  const name = host.toLowerCase();
  if (name === 'localhost' || name.endsWith('.local') || /^\d{1,3}(\.\d{1,3}){3}$/.test(name)) return true;
  return PRIVATE_HOSTS.some(blocked => name === blocked || name.endsWith(`.${blocked}`));
}

// Returns the URL when it is a public http(s) page, otherwise null (no link is rendered).
export function publicUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  let parsed: URL;
  try {
    parsed = new URL(url.trim());
  } catch {
    return null;
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return null;
  if (parsed.username || parsed.password) return null;
  if (hostIsPrivate(parsed.hostname)) return null;
  return parsed.toString();
}
