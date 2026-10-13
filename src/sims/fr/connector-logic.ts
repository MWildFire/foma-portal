import type { L, Lang } from '../../contract/types';
// Node runs this file unbundled in the tests, so the import names the .ts file. tsconfig.json has
// allowImportingTsExtensions off; the directive below silences its TS5097 error.
// @ts-expect-error TS5097
import { shuffle } from './shuffle.ts';

export { shuffle };

// Pure logic for the connector sort (p1-connectors). The group of a connector is read from its id (cn-001 to cn-060),
// as the id ranges below say, not from any field of the content file.

export type GroupKey = 'addition' | 'cause' | 'opposition' | 'time' | 'examples' | 'opinion' | 'summary' | 'emphasis' | 'comparison';

export interface GroupDef {
  key: GroupKey;
  from: number;   // first connector number in the group (cn-NNN)
  to: number;     // last connector number in the group
  label: L;
}

// The nine functions in the order of the topic table (p1-connectors, Visual). The English names are the table's names.
export const GROUPS: readonly GroupDef[] = [
  { key: 'addition', from: 1, to: 6, label: { en: 'Addition', ru: 'Добавление' } },
  { key: 'cause', from: 7, to: 14, label: { en: 'Cause and consequence', ru: 'Причина и следствие' } },
  { key: 'opposition', from: 15, to: 22, label: { en: 'Opposition and concession', ru: 'Противопоставление и уступка' } },
  { key: 'time', from: 23, to: 30, label: { en: 'Time sequence', ru: 'Порядок событий' } },
  { key: 'examples', from: 31, to: 36, label: { en: 'Examples and clarification', ru: 'Примеры и уточнение' } },
  { key: 'opinion', from: 37, to: 43, label: { en: 'Opinion and evaluation', ru: 'Мнение и оценка' } },
  { key: 'summary', from: 45, to: 50, label: { en: 'Summary and conclusion', ru: 'Итог и заключение' } },
  { key: 'emphasis', from: 51, to: 54, label: { en: 'Emphasis and restriction', ru: 'Выделение и ограничение' } },
  { key: 'comparison', from: 55, to: 60, label: { en: 'Comparison', ru: 'Сравнение' } },
];

// "certes" (cn-044) admits a point before a contrasting one, as in the topic's « certes… mais », so it sorts with
// opposition. Its number is in no range of GROUPS, so this map is what gives it a group.
const OVERRIDES = new Map<string, GroupKey>([['cn-044', 'opposition']]);

export function groupOf(id: string): GroupKey | undefined {
  const override = OVERRIDES.get(id);
  if (override) return override;
  const match = /^cn-(\d{3})$/.exec(id);
  if (!match) return undefined;
  const n = Number(match[1]);
  return GROUPS.find(g => n >= g.from && n <= g.to)?.key;
}

export function groupLabel(key: GroupKey, lang: Lang): string {
  return GROUPS.find(g => g.key === key)?.label[lang] ?? key;
}

export interface Connector {
  id: string;
  fr: string;     // the connector, as written in French
  en: string;     // English gloss
  ru: string;     // Russian gloss
  group: GroupKey;
}

// The part of a term the sort needs (a FrTerm has these fields).
export interface TermLike {
  id: string;
  term: { en: string; ru: string; fr?: string };
}

// Every term with a French form and an id in a group range. Other terms are skipped.
export function connectorsFrom(terms: readonly TermLike[]): Connector[] {
  const out: Connector[] = [];
  for (const t of terms) {
    const group = groupOf(t.id);
    if (group && t.term.fr) out.push({ id: t.id, fr: t.term.fr, en: t.term.en, ru: t.term.ru, group });
  }
  return out;
}

// One set for the student: up to perGroup connectors from each function, in a random order. A group with fewer
// connectors contributes what it has.
export function buildRound(connectors: readonly Connector[], perGroup: number, random: () => number = Math.random): Connector[] {
  const picked = GROUPS.flatMap(g => shuffle(connectors.filter(c => c.group === g.key), random).slice(0, perGroup));
  return shuffle(picked, random);
}

// How many connectors the student put in their own group. A missing answer counts as wrong.
export function countRight(round: readonly Connector[], answers: Partial<Record<string, GroupKey>>): number {
  return round.filter(c => answers[c.id] === c.group).length;
}
