const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const sameText = (a: string, b: string): boolean => a.trim().toLowerCase() === b.trim().toLowerCase();

// "EN term (RU term)". The Russian term in the content is often written "спрос (demand)": the Russian
// word plus the English term in brackets. That trailing copy of the English term is dropped here, so the
// label reads "demand (спрос)" and not "demand (спрос (demand))". When the Russian term adds nothing
// (empty, or the same text), only the English term is shown.
export function termLabel(term: { en: string; ru: string }): string {
  const en = term.en.trim();
  const ru = term.ru.trim();
  if (!ru || !en) return en || ru;
  const copy = new RegExp(`\\s*\\(\\s*${escapeRegExp(en)}\\s*\\)\\s*$`, 'i');
  const russian = ru.replace(copy, '').trim();
  if (!russian || sameText(russian, en)) return en;
  return `${en} (${russian})`;
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
