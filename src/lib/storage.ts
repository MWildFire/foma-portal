// Local progress for one browser (localStorage). Unknown or malformed data is dropped, never thrown.
export const STORAGE_KEY = 'foma-portal-v1';
export const UPDATE_EVENT = 'foma-portal-state-update';
export const STORAGE_SCHEMA_VERSION = 1;

export type Rag = 'red' | 'amber' | 'green';

export interface TopicProgress {
  done?: string;     // ISO date when the topic was marked done
  rag?: Rag;         // confidence after the topic
}

export interface TermProgress {
  box: number;       // Leitner box 1–4 (review intervals 1, 2, 4, 7 days)
  due: string;       // YYYY-MM-DD
}

export interface GlobalState {
  version: typeof STORAGE_SCHEMA_VERSION;
  topics: Record<string, TopicProgress>;   // key: `${subject}/${topicId}`
  terms: Record<string, TermProgress>;     // key: `${subject}/${termId}`
  blocks: Record<string, string>;          // plan block id -> ISO date when done
  settings: {
    accessArrangements: { extraTime: boolean; separateRoom: boolean };
  };
}

export function emptyState(): GlobalState {
  return {
    version: STORAGE_SCHEMA_VERSION,
    topics: {},
    terms: {},
    blocks: {},
    settings: { accessArrangements: { extraTime: false, separateRoom: false } },
  };
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isRag = (value: unknown): value is Rag => value === 'red' || value === 'amber' || value === 'green';

function mapRecord<T>(raw: unknown, pick: (value: unknown) => T | null): Record<string, T> {
  const out: Record<string, T> = {};
  if (!isRecord(raw)) return out;
  for (const [key, value] of Object.entries(raw)) {
    const item = pick(value);
    if (item !== null) out[key] = item;
  }
  return out;
}

function topicOf(value: unknown): TopicProgress | null {
  if (!isRecord(value)) return null;
  const out: TopicProgress = {};
  if (typeof value.done === 'string') out.done = value.done;
  if (isRag(value.rag)) out.rag = value.rag;
  return out;
}

function termOf(value: unknown): TermProgress | null {
  if (!isRecord(value) || typeof value.due !== 'string' || !Number.isFinite(value.box)) return null;
  return { box: Math.min(4, Math.max(1, Math.round(value.box as number))), due: value.due };
}

export function normalizeState(raw: unknown): GlobalState {
  const state = emptyState();
  if (!isRecord(raw)) return state;
  state.topics = mapRecord(raw.topics, topicOf);
  state.terms = mapRecord(raw.terms, termOf);
  state.blocks = mapRecord(raw.blocks, value => (typeof value === 'string' ? value : null));
  const settings = isRecord(raw.settings) ? raw.settings : {};
  const access = isRecord(settings.accessArrangements) ? settings.accessArrangements : {};
  state.settings.accessArrangements = {
    extraTime: access.extraTime === true,
    separateRoom: access.separateRoom === true,
  };
  return state;
}

export function loadState(): GlobalState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? normalizeState(JSON.parse(raw)) : emptyState();
  } catch {
    return emptyState();
  }
}

export function saveState(state: GlobalState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event(UPDATE_EVENT));
  } catch {
    // Storage can be blocked (private window, full quota). The app keeps working without saving.
  }
}
