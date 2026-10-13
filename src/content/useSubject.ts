import { useEffect, useMemo, useReducer, useState } from 'react';
import type { SubjectPack, TopicIndex } from '../contract/pack';
import { getLoadedSubject, getLoadedTopicIndex, hasSubject, loadSubject, loadTopicIndex } from './registry';

export interface SubjectState {
  pack: SubjectPack | undefined; // undefined for an unknown subject, and while the pack is loading
  loading: boolean; // true while the pack is on its way: show a placeholder, not "not found"
}

// The pack of one subject. A subject that is not loaded yet reports loading, and the component renders again
// when the pack arrives. A failed load is logged and then reported as not found.
export function useSubject(id: string | undefined): SubjectState {
  const known = id !== undefined && hasSubject(id) ? id : undefined;
  const pack = known !== undefined ? getLoadedSubject(known) : undefined;
  const [, rerender] = useReducer((count: number) => count + 1, 0);
  const [failed, setFailed] = useState<string | null>(null);

  useEffect(() => {
    if (known === undefined || pack) return undefined;
    let active = true;
    loadSubject(known).then(
      () => {
        if (active) rerender();
      },
      error => {
        console.error(error);
        if (active) setFailed(known);
      },
    );
    return () => {
      active = false;
    };
  }, [known, pack]);

  return { pack, loading: known !== undefined && pack === undefined && failed !== known };
}

// Several modules at once: undefined until every one of them is loaded. The result keeps its identity between
// renders, so a component that memoises on it does not start over on every render.
function useAllLoaded<T>(ids: readonly string[], read: (id: string) => T | undefined, load: (id: string) => Promise<unknown>): T[] | undefined {
  const key = ids.join('|');
  const [version, rerender] = useReducer((count: number) => count + 1, 0);
  const values = useMemo(() => {
    const found = ids.map(id => read(id));
    return found.every((value): value is T => value !== undefined) ? found : undefined;
    // `key` is the list of ids; `version` moves when a load has finished.
  }, [key, version]);

  useEffect(() => {
    if (values) return undefined;
    let active = true;
    Promise.all(ids.map(id => load(id))).then(
      () => {
        if (active) rerender();
      },
      error => console.error(error),
    );
    return () => {
      active = false;
    };
    // The effect runs again when the ids change or when the values have arrived.
  }, [key, values === undefined]);

  return values;
}

// Several packs at once (the report). undefined until every one of them is loaded.
export function useSubjects(ids: readonly string[]): SubjectPack[] | undefined {
  return useAllLoaded(
    ids.filter(id => hasSubject(id)),
    getLoadedSubject,
    loadSubject,
  );
}

// The topic indexes of several subjects (the simulation gallery), each with its subject id.
export function useTopicIndexes(ids: readonly string[]): { id: string; index: TopicIndex }[] | undefined {
  const known = ids.filter(id => hasSubject(id));
  const indexes = useAllLoaded(known, getLoadedTopicIndex, loadTopicIndex);
  return useMemo(() => indexes?.map((index, position) => ({ id: known[position], index })), [indexes]);
}
