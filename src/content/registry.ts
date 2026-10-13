import type { SubjectMeta, SubjectPack } from '../contract/pack';

// Subject metadata is small and needed on the first screen (navigation, planner names), so it is read eagerly.
const metaModules = import.meta.glob<{ default: SubjectMeta }>('../../content/*/meta.ts', { eager: true });
// A subject's full pack (its index.ts and everything that index collects) is a chunk of its own, loaded on first use.
const packLoaders = import.meta.glob<{ default: SubjectPack }>('../../content/*/index.ts');

// Subject order in navigation (PLAN.md §0–§1). The example subject is not listed, but its pack opens at #/s/_example.
const ORDER = ['geo', 'math', 'econ', 'cs', 'eng', 'fr'];
const SUBJECT_INDEX = /\/content\/([^/]+)\/index\.ts$/;

const metas = new Map<string, SubjectMeta>();
for (const module of Object.values(metaModules)) metas.set(module.default.id, module.default);

const loaders = new Map<string, () => Promise<{ default: SubjectPack }>>();
for (const [path, load] of Object.entries(packLoaders)) {
  const id = SUBJECT_INDEX.exec(path)?.[1];
  if (id) loaders.set(id, load);
}

const packs = new Map<string, SubjectPack>();
const jobs = new Map<string, Promise<SubjectPack>>();

// True for every subject folder that has an index.ts, the example subject included.
export function hasSubject(id: string): boolean {
  return loaders.has(id);
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
  const loaded = packs.get(id);
  if (loaded) return Promise.resolve(loaded);
  const load = loaders.get(id);
  if (!load) return Promise.resolve(undefined);
  let job = jobs.get(id);
  if (!job) {
    job = load().then(
      module => {
        packs.set(id, module.default);
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
}

// Loads several packs at once. Ids without a subject folder are skipped.
export async function loadSubjects(ids: readonly string[]): Promise<SubjectPack[]> {
  const loaded = await Promise.all(ids.map(id => loadSubject(id)));
  return loaded.filter((pack): pack is SubjectPack => pack !== undefined);
}
