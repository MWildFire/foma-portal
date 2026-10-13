import { useEffect, useReducer, useState } from 'react';
import type { SubjectPack } from '../contract/pack';
import { getLoadedSubject, hasSubject, loadSubject, loadSubjects } from './registry';

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

// Several packs at once (the report and the simulation gallery). undefined until every one of them is loaded.
export function useSubjects(ids: readonly string[]): SubjectPack[] | undefined {
  const wanted = ids.filter(id => hasSubject(id));
  const key = wanted.join('|');
  const loaded = wanted.map(id => getLoadedSubject(id));
  const ready = loaded.every((pack): pack is SubjectPack => pack !== undefined) ? loaded : undefined;
  const [, rerender] = useReducer((count: number) => count + 1, 0);

  useEffect(() => {
    if (ready) return undefined;
    let active = true;
    loadSubjects(wanted).then(
      () => {
        if (active) rerender();
      },
      error => console.error(error),
    );
    return () => {
      active = false;
    };
    // The key stands for the list of ids, which is rebuilt on every render.
  }, [key, ready === undefined]);

  return ready;
}
