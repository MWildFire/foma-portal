import type { SimComponent } from '../../contract/pack';
import type { L } from '../../contract/types';

// The list behind the simulations gallery. Pure functions: this file may import types only (the unit tests run it
// as plain TypeScript, without a bundler).

export type SimLoader = () => Promise<{ default: SimComponent }>;

// The parts of a subject pack the gallery reads. A SubjectPack fits.
export interface SimPackLike {
  meta: { id: string; title: L; color?: string };
  topics: readonly { id: string; code: string; title: L; sims?: readonly string[] }[];
  sims: Partial<Record<string, SimLoader>>;
}

export interface SimTopicRef {
  subject: string;
  id: string;
  code: string;
  title: L;
}

export interface SimEntry {
  /** For example econ.supply-demand. */
  id: string;
  subject: string;
  load: SimLoader;
  /** Topics whose `sims` list names this simulation. */
  topics: SimTopicRef[];
}

export interface SimGroup {
  subject: string;
  title: L;
  color?: string;
  sims: SimEntry[];
}

// Subjects whose id starts with an underscore (the example subject for authors) are not real subjects.
export const isFixturePack = (subject: string): boolean => subject.startsWith('_');

// The address says ?include=example: show the simulation of the example subject too.
export function wantsExample(params: { get(name: string): string | null }): boolean {
  return (params.get('include') ?? '').split(',').some(part => part.trim().toLowerCase() === 'example');
}

// Subjects that have at least one simulation, in the order of `packs`; simulations A-Z inside a subject.
export function collectSims(packs: readonly SimPackLike[], includeExample: boolean): SimGroup[] {
  const visible = packs.filter(pack => includeExample || !isFixturePack(pack.meta.id));
  const groups: SimGroup[] = [];
  for (const pack of visible) {
    const ids = Object.keys(pack.sims).filter(id => typeof pack.sims[id] === 'function').sort((a, b) => a.localeCompare(b, 'en'));
    if (ids.length === 0) continue;
    const sims: SimEntry[] = ids.map(id => ({
      id,
      subject: pack.meta.id,
      load: pack.sims[id] as SimLoader,
      topics: visible.flatMap(other =>
        other.topics
          .filter(topic => topic.sims?.includes(id))
          .map(topic => ({ subject: other.meta.id, id: topic.id, code: topic.code, title: topic.title }))),
    }));
    groups.push({ subject: pack.meta.id, title: pack.meta.title, color: pack.meta.color, sims });
  }
  return groups;
}

export function findSim(groups: readonly SimGroup[], id: string): SimEntry | undefined {
  for (const group of groups) {
    const found = group.sims.find(sim => sim.id === id);
    if (found) return found;
  }
  return undefined;
}

export function countSims(groups: readonly SimGroup[]): number {
  return groups.reduce((sum, group) => sum + group.sims.length, 0);
}
