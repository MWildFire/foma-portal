import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { afterPlay, LISTENING_PAUSE_SECONDS, playbackSteps, tracksForSet } from '../src/components/practice/listening.ts';
import { papers } from '../content/fr/papers.ts';
import { track as l1 } from '../content/fr/listening/l1-racines.ts';
import { track as l2 } from '../content/fr/listening/l2-annonce-gare.ts';
import { track as l3 } from '../content/fr/listening/l3-courses-simples.ts';
import { track as l4 } from '../content/fr/listening/l4-benevolat-quartier.ts';
import { track as l5 } from '../content/fr/listening/l5-school-water.ts';
import { track as l6 } from '../content/fr/listening/l6-trip-to-lyon.ts';
import { track as l7 } from '../content/fr/listening/l7-bilingual-school.ts';
import { track as l8 } from '../content/fr/listening/l8-waste-collection.ts';

// Synthetic tracks: track a holds the questions of section l1, b of l2, c of l3.
const sectionIds = section => Array.from({ length: 10 }, (_, i) => `${section}-q${String(i + 1).padStart(2, '0')}`);
const track = (id, questionIds) => ({ id, audio: `/audio/fr/${id}.mp3`, questionIds });
const tracks = [track('a', sectionIds('l1')), track('b', sectionIds('l2')), track('c', sectionIds('l3'))];
const pauses = steps => steps.map(step => step.pauseAfterSeconds);

test('a set of three recordings plays each one twice, in order, with a pause between the plays', () => {
  const steps = playbackSteps(tracks);
  assert.equal(steps.length, 6);
  assert.deepEqual(steps.map(step => step.trackId), ['a', 'a', 'b', 'b', 'c', 'c']);
  assert.deepEqual(steps.map(step => step.play), [1, 2, 1, 2, 1, 2]);
  assert.deepEqual(steps.map(step => step.src), ['/audio/fr/a.mp3', '/audio/fr/a.mp3', '/audio/fr/b.mp3', '/audio/fr/b.mp3', '/audio/fr/c.mp3', '/audio/fr/c.mp3']);
  assert.deepEqual(pauses(steps), [LISTENING_PAUSE_SECONDS, LISTENING_PAUSE_SECONDS, LISTENING_PAUSE_SECONDS, LISTENING_PAUSE_SECONDS, LISTENING_PAUSE_SECONDS, 0]);
});

test('the pause is one named constant of two minutes (IB instructions), and a given pause only changes the number', () => {
  assert.equal(LISTENING_PAUSE_SECONDS, 120);
  assert.deepEqual(pauses(playbackSteps(tracks, 5)), [5, 5, 5, 5, 5, 0]);
  assert.deepEqual(pauses(playbackSteps(tracks, 0)), [0, 0, 0, 0, 0, 0]);
  assert.deepEqual(pauses(playbackSteps(tracks, Number.NaN)), [0, 0, 0, 0, 0, 0]);
  assert.deepEqual(pauses(playbackSteps(tracks, -3)), [0, 0, 0, 0, 0, 0]);
});

test('one recording is two plays, and nothing follows the second', () => {
  assert.deepEqual(playbackSteps([track('a', sectionIds('l1'))]), [
    { trackId: 'a', src: '/audio/fr/a.mp3', play: 1, pauseAfterSeconds: LISTENING_PAUSE_SECONDS },
    { trackId: 'a', src: '/audio/fr/a.mp3', play: 2, pauseAfterSeconds: 0 },
  ]);
});

test('no recordings give no steps and no tracks', () => {
  assert.deepEqual(playbackSteps([]), []);
  assert.deepEqual(tracksForSet({ questionIds: sectionIds('l1') }, []), []);
  assert.deepEqual(tracksForSet({ questionIds: [] }, tracks), []);
});

test('the recordings of a set come in the order its questions first appear', () => {
  const set = { questionIds: [...sectionIds('l3'), ...sectionIds('l1')] };
  assert.deepEqual(tracksForSet(set, tracks).map(item => item.id), ['c', 'a']);
});

test('a question no track holds is left out, and no recording is guessed for it', () => {
  assert.deepEqual(tracksForSet({ questionIds: ['x-q01', ...sectionIds('l2')] }, tracks).map(item => item.id), ['b']);
  assert.deepEqual(tracksForSet({ questionIds: ['x-q01', 'x-q02'] }, tracks), []);
});

test('a question held by two tracks puts both recordings in the set, each once, in the order of the set', () => {
  const shared = [track('a', ['q1', 'q2']), track('b', ['q2', 'q3'])];
  assert.deepEqual(tracksForSet({ questionIds: ['q3', 'q2', 'q1'] }, shared).map(item => item.id), ['b', 'a']);
});

test('a question repeated in the set does not list its recording twice', () => {
  const set = { questionIds: [...sectionIds('l1'), 'l1-q01', 'l1-q01'] };
  assert.deepEqual(tracksForSet(set, tracks).map(item => item.id), ['a']);
});

test('after a play the set goes on at once, after the pause, or ends', () => {
  const steps = playbackSteps(tracks);
  assert.deepEqual(afterPlay(steps, 0), { kind: 'pause', index: 1, seconds: LISTENING_PAUSE_SECONDS });
  assert.deepEqual(afterPlay(steps, 4), { kind: 'pause', index: 5, seconds: LISTENING_PAUSE_SECONDS });
  assert.deepEqual(afterPlay(steps, 5), { kind: 'end' });
  assert.deepEqual(afterPlay(steps, 9), { kind: 'end' });
  assert.deepEqual(afterPlay(playbackSteps(tracks, 0), 0), { kind: 'play', index: 1 });
  assert.deepEqual(afterPlay([], 0), { kind: 'end' });
});

// The real sets and recordings of French B SL Paper 2 (listening).
const listening = papers.find(guide => guide.part === 'listening');
const realTracks = [l1, l2, l3, l4, l5, l6, l7, l8];

test('the French listening sets take their recordings from the content', () => {
  const recordings = set => tracksForSet(set, realTracks).map(item => item.id);
  const byId = Object.fromEntries(listening.timedSets.map(set => [set.id, recordings(set)]));
  assert.deepEqual(byId, {
    'fr-p2l-set-1': ['l1-racines', 'l2-annonce-gare', 'l3-courses-simples'],
    'fr-p2l-set-2': ['l4-benevolat-quartier', 'l5-school-water', 'l6-trip-to-lyon'],
    'fr-p2l-set-3': ['l7-bilingual-school', 'l8-waste-collection', 'l6-trip-to-lyon'],
  });
});

test('every question of each French listening set is held by one of its recordings, which has an audio file', () => {
  for (const set of listening.timedSets) {
    const chosen = tracksForSet(set, realTracks);
    const held = new Set(chosen.flatMap(item => item.questionIds));
    assert.deepEqual(set.questionIds.filter(id => !held.has(id)), [], set.id);
    assert.equal(playbackSteps(chosen).length, 2 * chosen.length, set.id);
    for (const item of chosen) {
      assert.ok(existsSync(new URL(`../public${item.audio}`, import.meta.url)), `${item.id}: ${item.audio}`);
    }
  }
});
