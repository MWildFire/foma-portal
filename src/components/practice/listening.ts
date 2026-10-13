// Listening in a timed set: which recordings a set needs and the order they play in. Pure (no React); the player is
// ListeningPlayer.tsx. Tests: tests/access-listening.test.mjs (the real sets and tracks are checked there too).

// The pause between the two plays of a recording, and between two recordings, in seconds. A placeholder until the
// official IB listening instructions are checked: the single-recording sim (src/sims/fr/listening-logic.ts) uses 30.
export const LISTENING_PAUSE_SECONDS = 60;

// A recording (a track of content/fr/listening/*.ts) as a practice set needs it.
export interface ListeningTrackRef {
  id: string;
  audio: string;
  questionIds: readonly string[];
}

export const NO_TRACKS: readonly ListeningTrackRef[] = [];

export interface PlaybackStep {
  trackId: string;
  src: string;
  /** 1 for the first play of the recording, 2 for the second. */
  play: 1 | 2;
  /** Silence after this play, in seconds. Nothing follows the last play, so it is 0 there. */
  pauseAfterSeconds: number;
}

// The recordings a set needs: every track that holds one of the set's questions, in the order the set first asks about
// it. A track is listed once. A question that no track holds is left out: nothing is guessed.
export function tracksForSet(set: { questionIds: readonly string[] }, tracks: readonly ListeningTrackRef[]): ListeningTrackRef[] {
  const out: ListeningTrackRef[] = [];
  const listed = new Set<string>();
  for (const questionId of set.questionIds) {
    for (const track of tracks) {
      if (listed.has(track.id) || !track.questionIds.includes(questionId)) continue;
      listed.add(track.id);
      out.push(track);
    }
  }
  return out;
}

// Each recording plays twice, with the pause between the two plays and before the next recording. The pause after the
// last play is 0, because nothing follows it.
export function playbackSteps(tracks: readonly ListeningTrackRef[], pauseSeconds: number = LISTENING_PAUSE_SECONDS): PlaybackStep[] {
  const pause = Number.isFinite(pauseSeconds) && pauseSeconds > 0 ? pauseSeconds : 0;
  const steps: PlaybackStep[] = [];
  for (const track of tracks) {
    for (const play of [1, 2] as const) steps.push({ trackId: track.id, src: track.audio, play, pauseAfterSeconds: pause });
  }
  if (steps.length > 0) steps[steps.length - 1] = { ...steps[steps.length - 1], pauseAfterSeconds: 0 };
  return steps;
}

// What comes after play `index` has ended: the next play at once, the next play after a pause, or the end of the set.
export type AfterPlay = { kind: 'end' } | { kind: 'play'; index: number } | { kind: 'pause'; index: number; seconds: number };

export function afterPlay(steps: readonly PlaybackStep[], index: number): AfterPlay {
  const current = steps[index];
  const next = index + 1;
  if (!current || next >= steps.length) return { kind: 'end' };
  if (current.pauseAfterSeconds > 0) return { kind: 'pause', index: next, seconds: current.pauseAfterSeconds };
  return { kind: 'play', index: next };
}
