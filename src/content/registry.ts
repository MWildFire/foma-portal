import type { SimComponent, SubjectMeta, SubjectPack, TopicIndex } from '../contract/pack';
import { simsForSubject } from './build-pack';

// Subject metadata is small and needed on the first screen (navigation, planner names), so it is read eagerly.
const metaModules = import.meta.glob<{ default: SubjectMeta }>('../../content/*/meta.ts', { eager: true });
// The full pack of a subject (its index.ts and everything that index collects), its topic index and its simulations
// are chunks of their own, loaded on first use. Only the paths of the simulations are read here.
const packModules = import.meta.glob<{ default: SubjectPack }>('../../content/*/index.ts');
const indexModules = import.meta.glob<{ default: TopicIndex }>('../../content/*/topic-index.ts');
const simModules = import.meta.glob<{ default: SimComponent }>('../../src/sims/*/*.tsx');

// Subject order in navigation (PLAN.md §0–§1). The example subject is not listed, but its pack opens at #/s/_example.
const ORDER = ['geo', 'math', 'econ', 'cs', 'eng', 'fr'];

const metas = new Map<string, SubjectMeta>();
for (const module of Object.values(metaModules)) metas.set(module.default.id, module.default);

type Loader<T> = () => Promise<{ default: T }>;

// Loads the module of a subject (the file that matches `file` in its folder) once, and remembers it.
function subjectCache<T>(modules: Record<string, Loader<T>>, file: RegExp) {
  const loaders = new Map<string, Loader<T>>();
  for (const [path, load] of Object.entries(modules)) {
    const id = file.exec(path)?.[1];
    if (id) loaders.set(id, load);
  }
  const loaded = new Map<string, T>();
  const jobs = new Map<string, Promise<T>>();
  return {
    has: (id: string): boolean => loaders.has(id),
    get: (id: string): T | undefined => loaded.get(id),
    load(id: string): Promise<T | undefined> {
      const known = loaded.get(id);
      if (known) return Promise.resolve(known);
      const load = loaders.get(id);
      if (!load) return Promise.resolve(undefined);
      let job = jobs.get(id);
      if (!job) {
        job = load().then(
          module => {
            loaded.set(id, module.default);
            jobs.delete(id);
            return module.default;
          },
          error => {
            jobs.delete(id); // a failed load may be tried again
            throw error;
          },
        );
        jobs.set(id, job);
      }
      return job;
    },
  };
}

const packs = subjectCache(packModules, /\/content\/([^/]+)\/index\.ts$/);
const indexes = subjectCache(indexModules, /\/content\/([^/]+)\/topic-index\.ts$/);

// True for every subject folder that has an index.ts, the example subject included.
export function hasSubject(id: string): boolean {
  return packs.has(id);
}

// The subjects of the navigation, in their usual order (without the example subject).
export function listSubjects(): SubjectMeta[] {
  return ORDER.flatMap(id => metas.get(id) ?? []);
}

export function getSubjectMeta(id: string): SubjectMeta | undefined {
  return metas.get(id);
}

// The pack when it is already loaded. Use loadSubject (or the useSubject hook) to load it.
export function getLoadedSubject(id: string): SubjectPack | undefined {
  return packs.get(id);
}

// Loads a subject's pack once. Resolves to undefined for an id that has no subject folder.
export function loadSubject(id: string): Promise<SubjectPack | undefined> {
  return packs.load(id);
}

// Loads several packs at once. Ids without a subject folder are skipped.
export async function loadSubjects(ids: readonly string[]): Promise<SubjectPack[]> {
  const loaded = await Promise.all(ids.map(id => loadSubject(id)));
  return loaded.filter((pack): pack is SubjectPack => pack !== undefined);
}

// The topic index of a subject, the light part the planner and the simulation gallery read (see TopicIndex).
export function getLoadedTopicIndex(id: string): TopicIndex | undefined {
  return indexes.get(id);
}

export function loadTopicIndex(id: string): Promise<TopicIndex | undefined> {
  return indexes.load(id);
}

// Loads several topic indexes at once, each with its subject id. Ids without a subject folder are skipped.
export async function loadTopicIndexes<T extends string>(ids: readonly T[]): Promise<{ id: T; index: TopicIndex }[]> {
  const loaded = await Promise.all(ids.map(async id => ({ id, index: await loadTopicIndex(id) })));
  return loaded.flatMap(({ id, index }) => (index ? [{ id, index }] : []));
}

// The simulations of a subject as lazy loaders, keyed by '<subject>.<name>' (src/sims/<subject>/<name>.tsx).
export function simsOf(id: string): ReturnType<typeof simsForSubject> {
  return simsForSubject(id, simModules);
}
