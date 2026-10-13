import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// tests/i18n-parity.test.mjs checks that EN and RU have the same keys. This test checks the planner pages and their
// components: every key they ask for exists in both languages (so no screen shows a raw key), and every key of the
// planner namespaces is used somewhere (so the files do not fill up with stale text).
const root = join(import.meta.dirname, '..');
const read = file => readFileSync(join(root, file), 'utf8');

const OWN_NAMESPACES = ['today', 'plan', 'exams', 'settings', 'planner'];
const FILES = [
  'src/pages/TodayPage.tsx',
  'src/pages/PlanPage.tsx',
  'src/pages/ExamsPage.tsx',
  'src/pages/SettingsPage.tsx',
  'src/components/progress/ExamCountdown.tsx',
  ...readdirSync(join(root, 'src/components/planner')).filter(name => /\.tsx?$/.test(name)).map(name => `src/components/planner/${name}`),
];

// Files that receive the translator as a parameter instead of calling useTranslation.
const PARAMETER_NAMESPACES = { 'src/components/planner/labels.ts': { t: 'planner' } };

// Keys built at run time from a union type: `${prefix}${value}`.
const DYNAMIC = {
  'planner:kind.': ['recall', 'topic', 'practice', 'timed', 'paper', 'study'],
  'planner:part.': ['reading', 'listening'],
  'planner:rag.': ['red', 'amber', 'green'],
};

const bundle = {};
for (const lang of ['en', 'ru']) {
  for (const file of readdirSync(join(root, 'src', 'i18n', lang)).filter(name => name.endsWith('.json'))) {
    bundle[`${lang}:${file.replace(/\.json$/, '')}`] = JSON.parse(read(`src/i18n/${lang}/${file}`));
  }
}
const lookup = (lang, ns, key) => key.split('.').reduce((node, part) => (node && typeof node === 'object' ? node[part] : undefined), bundle[`${lang}:${ns}`]);

function leafKeys(value, prefix = '') {
  return Object.entries(value).flatMap(([key, child]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return child && typeof child === 'object' ? leafKeys(child, path) : [path];
  });
}

// Which namespace each translator name stands for in one file. The same name must mean the same namespace
// everywhere in the file, otherwise the scan below could not tell the keys apart.
function translators(file, source) {
  const names = { ...(PARAMETER_NAMESPACES[file] ?? {}) };
  for (const match of source.matchAll(/const \{([^}]*)\} = useTranslation\((?:'([\w-]+)')?\)/g)) {
    const ns = match[2] ?? 'common';
    for (const part of match[1].split(',').map(item => item.trim())) {
      const alias = part === 't' ? 't' : /^t:\s*(\w+)$/.exec(part)?.[1];
      if (!alias) continue;
      assert.ok(names[alias] === undefined || names[alias] === ns, `${file}: "${alias}" stands for both ${names[alias]} and ${ns}`);
      names[alias] = ns;
    }
  }
  return names;
}

// Every call of a translator: its namespace and its key, or `computed` when the key is not written out.
function usedKeys(file) {
  const source = read(file);
  const names = translators(file, source);
  const used = [];
  for (const [alias, ns] of Object.entries(names)) {
    const call = new RegExp(`(?<![\\w.$])${alias}\\(\\s*(?:(['"\`])((?:(?!\\1).)*)\\1)?`, 'g');
    for (const match of source.matchAll(call)) {
      if (match[2] === undefined) {
        used.push({ file, ns, key: null });
        continue;
      }
      const key = match[2];
      const dynamic = /^([\w.]*)\$\{[^}]+\}$/.exec(key);
      if (dynamic) {
        const values = DYNAMIC[`${ns}:${dynamic[1]}`];
        assert.ok(values, `${file}: add the values of ${ns}:${key} to DYNAMIC`);
        for (const value of values) used.push({ file, ns, key: `${dynamic[1]}${value}` });
      } else {
        used.push({ file, ns, key });
      }
    }
  }
  return used;
}

const USED = FILES.flatMap(usedKeys);

test('the planner pages translate with written-out keys only', () => {
  const computed = USED.filter(entry => entry.key === null).map(entry => `${entry.file} (${entry.ns})`);
  assert.deepEqual(computed, [], 'a key built at run time cannot be checked; write it out or list it in DYNAMIC');
  assert.ok(USED.length > 100, `only ${USED.length} keys found: the scan is broken`);
});

for (const lang of ['en', 'ru']) {
  test(`every key the planner pages use exists in ${lang}`, () => {
    const missing = USED
      .filter(entry => entry.key !== null && typeof lookup(lang, entry.ns, entry.key) !== 'string')
      .map(entry => `${entry.ns}:${entry.key} (${entry.file})`);
    assert.deepEqual([...new Set(missing)], []);
  });
}

test('every key of the planner namespaces is used', () => {
  const used = new Set(USED.filter(entry => entry.key !== null).map(entry => `${entry.ns}:${entry.key}`));
  const unused = OWN_NAMESPACES.flatMap(ns => leafKeys(bundle[`en:${ns}`] ?? {}).map(key => `${ns}:${key}`)).filter(key => !used.has(key));
  assert.deepEqual(unused, []);
});

test('placeholders are the same in both languages', () => {
  const placeholders = text => [...text.matchAll(/\{\{(\w+)\}\}/g)].map(match => match[1]).sort();
  for (const ns of OWN_NAMESPACES) {
    for (const key of leafKeys(bundle[`en:${ns}`])) {
      assert.deepEqual(placeholders(lookup('ru', ns, key) ?? ''), placeholders(lookup('en', ns, key)), `${ns}:${key}`);
    }
  }
});
