import test from 'node:test';
import assert from 'node:assert/strict';
import { copyText } from '../src/components/report/copy.ts';

function env(overrides = {}) {
  const calls = [];
  return {
    calls,
    env: {
      writeText: async text => { calls.push(['writeText', text]); },
      select: () => { calls.push(['select']); },
      execCopy: () => { calls.push(['execCopy']); return true; },
      ...overrides,
    },
  };
}

test('the clipboard API is used first, and nothing else is needed when it works', async () => {
  const { env: e, calls } = env();
  assert.equal(await copyText('report', e), 'copied');
  assert.deepEqual(calls, [['writeText', 'report']]);
});

test('when the clipboard API is blocked, the text is selected and the old copy command is tried', async () => {
  const { env: e, calls } = env({ writeText: async () => { throw new Error('NotAllowedError'); } });
  assert.equal(await copyText('report', e), 'copied');
  assert.deepEqual(calls, [['select'], ['execCopy']]);
});

test('without the clipboard API the old copy command is used', async () => {
  const { env: e, calls } = env({ writeText: undefined });
  assert.equal(await copyText('report', e), 'copied');
  assert.deepEqual(calls, [['select'], ['execCopy']]);
});

test('when nothing can copy, the text stays selected for the student to copy by hand', async () => {
  const none = env({ writeText: undefined, execCopy: () => false });
  assert.equal(await copyText('report', none.env), 'selected');
  assert.deepEqual(none.calls, [['select']]);

  const throwing = env({ writeText: async () => { throw new Error('no'); }, execCopy: () => { throw new Error('no'); } });
  assert.equal(await copyText('report', throwing.env), 'selected');

  const bare = env({ writeText: undefined, execCopy: undefined });
  assert.equal(await copyText('report', bare.env), 'selected');
  assert.deepEqual(bare.calls, [['select']]);
});
