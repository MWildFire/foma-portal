import { useCallback, useEffect, useRef, useState } from 'react';
import { loadState, saveState, storageAvailable, GlobalState, STORAGE_KEY, UPDATE_EVENT } from '../lib/storage';


export function useLocalProgress(): [GlobalState, (updater: (s: GlobalState) => GlobalState) => void] {
  const [state, setState] = useState<GlobalState>(() => loadState());
  const current = useRef(state);
  current.current = state;

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY || e.key === null) setState(loadState());
    };
    const onLocalUpdate = () => setState(loadState());
    window.addEventListener('storage', onStorage);
    window.addEventListener(UPDATE_EVENT, onLocalUpdate);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener(UPDATE_EVENT, onLocalUpdate);
    };
  }, []);

  const update = useCallback((updater: (s: GlobalState) => GlobalState) => {
    // Stored state when storage works (another tab may have changed it). Otherwise keep the in-memory state,
    // so a blocked browser does not lose the earlier changes on every update.
    const next = updater(storageAvailable() ? loadState() : current.current);
    current.current = next;
    saveState(next);
    setState(next);
  }, []);

  return [state, update];
}
