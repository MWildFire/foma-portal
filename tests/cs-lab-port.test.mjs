import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, cpSync, unlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

function fixture() {
  const dir = mkdtempSync(path.join(tmpdir(), 'foma-cslab-port-'));
  const root = path.join(dir, 'portal'), source = path.join(dir, 'source');
  mkdirSync(path.join(root, 'scripts'), {recursive: true});
  mkdirSync(source);
  writeFileSync(path.join(source, 'foma-port.json'), JSON.stringify({portVersion: 2}));
  cpSync(new URL('../scripts/cs-port-lab.mjs', import.meta.url), path.join(root, 'scripts/cs-port-lab.mjs'));
  writeFileSync(path.join(source, 'lesson.html'), '<html><body>Fixture lesson</body></html>');
  return {root, source, run: () => spawnSync(process.execPath, ['scripts/cs-port-lab.mjs'], {
    cwd: root, env: {...process.env, FOMACS_DIR: source}, encoding: 'utf8'
  })};
}

test('FOMACS_DIR selects source without a positional argument', () => {
  const f = fixture();
  const result = f.run();
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.equal(readFileSync(path.join(f.root, 'public/cs-lab/lesson.html'), 'utf8'), '<html><body>Fixture lesson</body></html>');
});

for (const version of [null, 1, '2', 3]) {
  test(`port rejects incompatible marker ${version} without touching output`, () => {
    const f = fixture();
    if (version === null) unlinkSync(path.join(f.source, 'foma-port.json'));
    else writeFileSync(path.join(f.source, 'foma-port.json'), JSON.stringify({portVersion: version}));
    mkdirSync(path.join(f.root, 'public/cs-lab'), {recursive: true});
    writeFileSync(path.join(f.root, 'public/cs-lab/keep.html'), 'last good output');
    const r = f.run();
    assert.notEqual(r.status, 0);
    assert.match(r.stderr + r.stdout, /codex\/foma-r03-lab/);
    assert.equal(readFileSync(path.join(f.root, 'public/cs-lab/keep.html'), 'utf8'), 'last good output');
  });
}

test('a stale source-owned translation fails before changing output', () => {
  const f = fixture();
  mkdirSync(path.join(f.source, '.foma-port/pages'), {recursive: true});
  writeFileSync(path.join(f.source, '.foma-port/pages/lesson.html'), 'Translation');
  writeFileSync(path.join(f.source, '.foma-port/pages/lesson.html.base'), 'stale');
  mkdirSync(path.join(f.root, 'public/cs-lab'), {recursive: true});
  writeFileSync(path.join(f.root, 'public/cs-lab/keep.html'), 'last good output');
  const r = f.run();
  assert.notEqual(r.status, 0);
  assert.match(r.stderr + r.stdout, /Russian source changed/);
  assert.equal(readFileSync(path.join(f.root, 'public/cs-lab/keep.html'), 'utf8'), 'last good output');
});

test('source-owned translation is used, kept private, and porting is repeatable', () => {
  const f = fixture();
  const overlayDir = path.join(f.source, '.foma-port/pages');
  mkdirSync(overlayDir, {recursive: true});
  const original = readFileSync(path.join(f.source, 'lesson.html'));
  writeFileSync(path.join(overlayDir, 'lesson.html.base'), createHash('sha256').update(original).digest('hex'));
  writeFileSync(path.join(overlayDir, 'lesson.html'), '<html><body>Corrected bilingual diagram</body></html>');
  for (let i = 0; i < 2; i++) {
    const r = f.run();
    assert.equal(r.status, 0, r.stderr + r.stdout);
    assert.equal(readFileSync(path.join(f.root, 'public/cs-lab/lesson.html'), 'utf8'), '<html><body>Corrected bilingual diagram</body></html>');
    assert.throws(() => readFileSync(path.join(f.root, 'public/cs-lab/.foma-port/pages/lesson.html')));
  }
});

test('residual school references fail before output is replaced', () => {
  const f = fixture();
  writeFileSync(path.join(f.source, 'bad.js'), '/* sites.google.com should never reach the generated lab */');
  mkdirSync(path.join(f.root, 'public/cs-lab'), {recursive: true});
  writeFileSync(path.join(f.root, 'public/cs-lab/keep.html'), 'last good output');
  assert.notEqual(f.run().status, 0);
  assert.equal(readFileSync(path.join(f.root, 'public/cs-lab/keep.html'), 'utf8'), 'last good output');
});
