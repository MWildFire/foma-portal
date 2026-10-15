import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('content/geo');
const read = (p) => readFileSync(path.join(root, p), 'utf8');
const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const p = path.join(dir, entry.name);
  return entry.isDirectory() ? files(p) : [p];
});

test('resource stewardship teaches population-resource views in both languages with a registered visual', () => {
  const meta = read('core/topics/core-3-3-resource-stewardship.meta.ts');
  assert.match(meta, /sims:\s*\[[^\]]*'geo\.core-malthus-boserup'/);
  for (const lang of ['en', 'ru']) {
    const body = read('core/topics/core-3-3-resource-stewardship.' + lang + '.mdx');
    assert.match(body, /<Sim id="geo.core-malthus-boserup"\s*\/>/);
    assert.match(body, lang === 'en' ? /Malthus/ : /Мальтус/);
    assert.match(body, lang === 'en' ? /Boserup/ : /Бозеруп/);
    assert.match(body, lang === 'en' ? /balanced/i : /сбалансирован/i);
  }
});

test('Paper 2 retains at least three reachable ten-mark Section B tasks with reviewed local infographics', () => {
  const reviewed = readFileSync('ops/review/diagrams-geo.md', 'utf8');
  const questions = files(path.join(root, 'core/questions')).filter((p) => p.endsWith('.ts'));
  let count = 0;
  for (const file of questions) {
    for (const block of readFileSync(file, 'utf8').split(/\n  \{/).slice(1)) {
      if (!/section: 'B'/.test(block) || !/marks: 10,/.test(block)) continue;
      const id = block.match(/id: '([^']+)'/)[1];
      const source = readFileSync(file, 'utf8');
      const asset = source.match(/new URL\('..\/topics\/assets\/([^']+\.svg)(?:\?no-inline)?'/s)?.[1];
      assert.ok(asset && existsSync(path.join(root, 'core/topics/assets', asset)), id + ' must link to a local infographic');
      assert.match(block, /Open infographic/);
      assert.match(block, /Открыть инфографику/);
      const reviewRow = reviewed.split('\n').find((line) => line.startsWith('| ' + asset.replace('.svg', '') + ' |'));
      assert.ok(reviewRow && /OK|исправлено/.test(reviewRow), id + ' must have a reviewed infographic');
      const lessonRefs = files(path.join(root, 'core/topics')).filter((p) => p.endsWith('.meta.ts')).map((p) => readFileSync(p, 'utf8')).join('\n');
      assert.ok((lessonRefs + read('core/papers.ts')).includes("'" + id + "'"), id + ' must be linked from a lesson or timed set');
      count++;
    }
  }
  assert.ok(count >= 3, 'only ' + count + ' Section B tasks');
});

test('every geography topic is explicitly in the mock scope', () => {
  for (const file of files(root).filter((p) => p.endsWith('.meta.ts'))) {
    assert.match(readFileSync(file, 'utf8'), /inMockScope:\s*'yes'/, file);
  }
});

test('production packaging emits every Section B infographic as a browser-linkable SVG file', async () => {
  const { build } = await import('vite');
  const ids = ['core-1-1', 'core-1-2', 'core-1-3', 'core-2-2', 'core-3-1', 'core-3-3'];
  const result = await build({
    configFile: false,
    logLevel: 'silent',
    build: {
      write: false,
      rollupOptions: {
        input: ids.map((id) => path.resolve(root, 'core/questions', id + '.ts')),
        preserveEntrySignatures: 'strict',
      },
    },
  });
  const output = (Array.isArray(result) ? result : [result]).flatMap((item) => item.output);
  for (const id of ids) {
    assert.ok(output.some((item) => item.type === 'asset' && item.fileName.includes(id + '-infographic') && item.fileName.endsWith('.svg')),
      id + ' must be a served SVG; inline data URLs cannot be opened by the lesson link renderer');
  }
});
