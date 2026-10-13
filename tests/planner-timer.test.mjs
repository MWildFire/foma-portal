import test from 'node:test';
import assert from 'node:assert/strict';
import { pauseTimer, remainingMs, resumeTimer, skipPhase, startTimer, tickTimer } from '../src/planner/timer.ts';

const MIN = 60_000;
const T0 = Date.UTC(2026, 9, 14, 6, 0, 0);

test('a Pomodoro is 25 minutes of work, then a 5 minute break, then done', () => {
  let timer = startTimer({ blockId: 'b1', label: 'Geography', now: T0 });
  assert.equal(timer.phase, 'work');
  assert.equal(timer.mode, 'pomodoro');
  assert.equal(remainingMs(timer, T0), 25 * MIN);
  assert.equal(remainingMs(timer, T0 + 10 * MIN), 15 * MIN);

  let step = tickTimer(timer, T0 + 24 * MIN);
  assert.equal(step.event, null);

  step = tickTimer(timer, T0 + 25 * MIN);
  assert.equal(step.event, 'work-ended');
  timer = step.state;
  assert.equal(timer.phase, 'break');
  assert.equal(remainingMs(timer, T0 + 25 * MIN), 5 * MIN);

  step = tickTimer(timer, T0 + 30 * MIN);
  assert.equal(step.event, 'break-ended');
  assert.equal(step.state.phase, 'done');
  assert.equal(remainingMs(step.state, T0 + 31 * MIN), 0);
  assert.equal(tickTimer(step.state, T0 + 40 * MIN).event, null, 'a finished timer stays finished');
});

test('a late tick (sleeping tab) still moves to the break and gives the full break', () => {
  const timer = startTimer({ blockId: 'b1', label: 'x', now: T0 });
  const step = tickTimer(timer, T0 + 27 * MIN);
  assert.equal(step.event, 'work-ended');
  assert.equal(step.state.phase, 'break');
  assert.equal(remainingMs(step.state, T0 + 27 * MIN), 5 * MIN);
});

test('pause freezes the remaining time and resume continues from it', () => {
  let timer = startTimer({ blockId: 'b1', label: 'x', now: T0 });
  timer = pauseTimer(timer, T0 + 10 * MIN);
  assert.equal(remainingMs(timer, T0 + 99 * MIN), 15 * MIN);
  assert.equal(tickTimer(timer, T0 + 99 * MIN).event, null, 'a paused timer does not run out');
  timer = resumeTimer(timer, T0 + 20 * MIN);
  assert.equal(remainingMs(timer, T0 + 20 * MIN), 15 * MIN);
  assert.equal(tickTimer(timer, T0 + 35 * MIN).event, 'work-ended');
  assert.equal(pauseTimer(pauseTimer(timer, T0 + 21 * MIN), T0 + 30 * MIN).pausedLeftMs, 14 * MIN, 'pausing twice changes nothing');
});

test('a timed paper runs one countdown for its own length, with no break', () => {
  const timer = startTimer({ blockId: 'm1', label: 'Maths P2', now: T0, minutes: 150, mode: 'single' });
  assert.equal(timer.mode, 'single');
  assert.equal(remainingMs(timer, T0), 150 * MIN);
  const step = tickTimer(timer, T0 + 150 * MIN);
  assert.equal(step.event, 'finished');
  assert.equal(step.state.phase, 'done');
});

test('skipping goes straight to the next phase', () => {
  let timer = startTimer({ blockId: 'b1', label: 'x', now: T0 });
  timer = skipPhase(timer, T0 + 3 * MIN);
  assert.equal(timer.phase, 'break');
  assert.equal(remainingMs(timer, T0 + 3 * MIN), 5 * MIN);
  timer = skipPhase(timer, T0 + 4 * MIN);
  assert.equal(timer.phase, 'done');
});
