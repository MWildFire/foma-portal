import test from 'node:test';
import assert from 'node:assert/strict';
import { LOAD_TIMEOUT_MS, onLoadTimeout } from '../src/lib/load-timeout.ts';

test('a page waits fifteen seconds for its content before it shows the load error', () => {
  assert.equal(LOAD_TIMEOUT_MS, 15000);
});

test('the timeout calls its callback once, after the delay and not at once', { timeout: 2000 }, async () => {
  let calls = 0;
  const fired = new Promise(resolve => {
    onLoadTimeout(20, () => {
      calls += 1;
      resolve();
    });
  });
  assert.equal(calls, 0);
  await fired;
  await new Promise(resolve => setTimeout(resolve, 40));
  assert.equal(calls, 1);
});

test('a timeout cancelled before it fires never calls its callback', { timeout: 2000 }, async () => {
  let calls = 0;
  const cancel = onLoadTimeout(20, () => {
    calls += 1;
  });
  cancel();
  await new Promise(resolve => setTimeout(resolve, 60));
  assert.equal(calls, 0);
});
