// One accent rule for the French answers of the reading and listening trainers (FR-11).
// A French answer with its accents is right. Without accents it is right too, when the accents do not tell two words apart:
// "Quebec" for "Québec", "depasse" for "dépasse", "ecole" for "école". Where the plain spelling is another French word,
// the accent decides the meaning, so "ou" is not "où", "a" is not "à" and "du" is not "dû". The keys passed in are already
// normalised by the caller (lower case, typographic apostrophes and final punctuation removed).

// Plain spellings that are another French word too (or a second accented word): an accented word with one of these
// spellings needs its accents. A short list of the usual pairs; add a word here when an answer key has such a twin.
const ACCENT_DECIDES: ReadonlySet<string> = new Set([
  'a', 'ou', 'la', 'du', 'des', 'sur', 'ne', 'mur', 'mure', 'cote', 'cru', 'fut', 'mat', 'macher', 'tache', 'peche',
  'pecher', 'sale', 'pres', 'gene', 'jeune', 'pate', 'foret', 'votre', 'notre',
]);

// The text without its accents (combining marks removed): "dépasse" gives "depasse", "où" gives "ou".
export function plainFrench(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').normalize('NFC');
}

// The typed key is right without accents when it is the expected key with every accent left out, and no accented word of
// the expected key is one that its plain spelling would confuse with another word. Words are split on spaces, apostrophes
// and hyphens, so "où est-il" blocks "ou est-il" and "l'école" accepts "l'ecole".
export function acceptsWithoutAccents(expected: string, typed: string): boolean {
  const plain = plainFrench(expected);
  if (plain === expected || typed !== plain) return false;
  return expected
    .split(/[\s'-]+/)
    .every(word => plainFrench(word) === word || !ACCENT_DECIDES.has(plainFrench(word)));
}

// Two keys match when they are the same, or when the typed key is right without accents (see above).
export function frenchKeysMatch(expected: string, typed: string): boolean {
  return expected === typed || acceptsWithoutAccents(expected, typed);
}
