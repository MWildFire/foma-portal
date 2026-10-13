import type { SubjectPack } from '../contract/pack';

const modules = import.meta.glob<{ default: SubjectPack }>('../../content/*/index.ts', { eager: true });

// Subject order in navigation (PLAN.md §0–§1). The example subject is excluded from listSubjects().
const ORDER = ['geo', 'math', 'econ', 'cs', 'eng', 'fr'];

const packs = Object.values(modules).map(m => m.default);

export function listSubjects(): SubjectPack[] {
  return packs
    .filter(p => ORDER.includes(p.meta.id))
    .sort((a, b) => ORDER.indexOf(a.meta.id) - ORDER.indexOf(b.meta.id));
}

// Also returns the example subject, so authors can open it at #/s/_example.
export function getSubject(id: string): SubjectPack | undefined {
  return packs.find(p => p.meta.id === id);
}

export function getTopic(subjectId: string, topicId: string) {
  return getSubject(subjectId)?.topics.find(t => t.id === topicId);
}
