import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

// tests/i18n-parity.test.mjs checks that EN and RU have the same keys. This test checks the other direction:
// every key that the subject, topic and paper pages ask for exists, so no screen shows a raw key.
const root = join(import.meta.dirname, '..');
const read = file => readFileSync(join(root, file), 'utf8');

const bundle = {};
for (const lang of ['en', 'ru']) {
  for (const file of readdirSync(join(root, 'src', 'i18n', lang)).filter(name => name.endsWith('.json'))) {
    bundle[`${lang}:${file.replace(/\.json$/, '')}`] = JSON.parse(read(`src/i18n/${lang}/${file}`));
  }
}
const has = (lang, ns, key) => key.split('.').reduce((node, part) => (node && typeof node === 'object' ? node[part] : undefined), bundle[`${lang}:${ns}`]) !== undefined;

function sourceFiles(dir) {
  return readdirSync(join(root, dir), { withFileTypes: true }).flatMap(entry => {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(entry.name) ? [path] : [];
  });
}

const FILES = [
  ...sourceFiles('src/components/mdx'),
  ...sourceFiles('src/components/subject'),
  ...sourceFiles('src/components/content'),
  'src/components/ui/Formula.tsx',
  'src/components/ui/TermCard.tsx',
  'src/pages/SubjectPage.tsx',
  'src/pages/TopicPage.tsx',
  'src/pages/PaperPage.tsx',
];

// Keys built from a union type or a list. The values are checked against the contract below.
const DYNAMIC = {
  'source.kind.': ['textbook', 'ib-guide', 'thinkib', 'school', 'web', 'own'],
  'case.scales.': ['local', 'national', 'regional', 'global'],
  'callout.': ['exam', 'mistake', 'tip', 'gdc', 'define', 'note'],
  'question.rating.': ['right', 'partial', 'wrong'],
  'progress.': ['red', 'amber', 'green', 'unrated'],
  'chips.mock.': ['yes', 'no', 'unknown'],
  'topics.rag.': ['red', 'amber', 'green'],
  'topics.notReady.': ['en', 'ru', 'both'],
  'topicProgress.rag.': ['red', 'amber', 'green'],
  'paperNames.': ['P1', 'P2', 'P3'],
  'body.missing.': ['en', 'ru', 'both'],
  'body.switch.': ['en', 'ru'],
  'page.bodyLabel.': ['en', 'ru'],
  'contentLang.': ['en', 'ru', 'both'],
};

const NAMESPACE_OF_DYNAMIC = {
  'paperNames.': 'subject',
  'progress.': 'subject',
  'chips.mock.': 'subject',
  'topics.rag.': 'subject',
  'topics.notReady.': 'subject',
  'topicProgress.rag.': 'subject',
};

// The text of every t(...) call: from the opening bracket to its matching closing bracket.
function callsOf(source) {
  const calls = [];
  const start = /(?<![\w.$])t\(/g;
  let match;
  while ((match = start.exec(source))) {
    let depth = 1;
    let quote = null;
    let index = start.lastIndex;
    for (; index < source.length && depth > 0; index += 1) {
      const ch = source[index];
      if (quote) {
        if (ch === '\\') index += 1;
        else if (ch === quote) quote = null;
      } else if (ch === "'" || ch === '"' || ch === '`') quote = ch;
      else if (ch === '(') depth += 1;
      else if (ch === ')') depth -= 1;
    }
    calls.push(source.slice(start.lastIndex, index - 1));
  }
  return calls;
}

function defaultNamespace(source) {
  const hook = /useTranslation\(\s*(\[[^\]]*\]|'[^']*')/.exec(source);
  if (hook) return /'([^']+)'/.exec(hook[1])[1];
  return /useLangT|useBodyT/.test(source) ? 'topic' : null;
}

test('every i18n key used by the subject, topic and paper pages exists in EN and RU', () => {
  const problems = [];
  let checked = 0;
  for (const file of FILES) {
    const source = read(file);
    const fallback = defaultNamespace(source);
    for (const call of callsOf(source)) {
      const first = /^\s*(`[^`]*`|'[^']*'|"[^"]*")/.exec(call);
      if (!first) continue;
      const key = first[1].slice(1, -1);
      const namespace = /\bns:\s*'([^']+)'/.exec(call)?.[1] ?? fallback;
      if (key.includes('${')) {
        const prefix = key.slice(0, key.indexOf('${'));
        const values = DYNAMIC[prefix];
        const ns = NAMESPACE_OF_DYNAMIC[prefix] ?? namespace;
        if (!values || key.slice(key.indexOf('}') + 1) !== '') {
          problems.push(`${file}: dynamic key "${key}" is not registered in this test`);
          continue;
        }
        for (const value of values) {
          for (const lang of ['en', 'ru']) {
            checked += 1;
            if (!has(lang, ns, prefix + value)) problems.push(`${file}: ${lang}/${ns} has no "${prefix + value}"`);
          }
        }
        continue;
      }
      if (!namespace) {
        problems.push(`${relative(root, join(root, file))}: cannot tell the namespace of "${key}"`);
        continue;
      }
      for (const lang of ['en', 'ru']) {
        checked += 1;
        if (!has(lang, namespace, key)) problems.push(`${file}: ${lang}/${namespace} has no "${key}"`);
      }
    }
  }
  assert.deepEqual(problems, []);
  assert.ok(checked > 100, `only ${checked} keys were checked; the scanner may be broken`);
});

test('every registered dynamic key exists, including those the scanner cannot see (ternaries)', () => {
  const problems = [];
  for (const [prefix, values] of Object.entries(DYNAMIC)) {
    const ns = NAMESPACE_OF_DYNAMIC[prefix] ?? 'topic';
    for (const value of values) {
      for (const lang of ['en', 'ru']) {
        if (!has(lang, ns, prefix + value)) problems.push(`${lang}/${ns} has no "${prefix + value}"`);
      }
    }
  }
  assert.deepEqual(problems, []);
});

test('the keys built from the contract unions cover every member', () => {
  const types = read('src/contract/types.ts');
  const union = pattern => [...new RegExp(pattern).exec(types)[1].matchAll(/'([^']+)'/g)].map(item => item[1]);
  assert.deepEqual(DYNAMIC['source.kind.'], union(/kind: ((?:'[^']+'\s*\|?\s*)+);/.source));
  assert.deepEqual(DYNAMIC['case.scales.'], union(/scale: ((?:'[^']+'\s*\|?\s*)+);/.source));
  assert.deepEqual(DYNAMIC['paperNames.'], union(/export type PaperId = ((?:'[^']+'\s*\|?\s*)+);/.source));
});

test('English and Russian texts keep the same {{placeholders}}', () => {
  const placeholders = text => [...String(text).matchAll(/\{\{(\w+)\}\}/g)].map(item => item[1]).sort();
  const walk = (en, ru, path, problems) => {
    for (const [key, value] of Object.entries(en)) {
      if (value && typeof value === 'object') walk(value, ru?.[key] ?? {}, `${path}.${key}`, problems);
      else if (JSON.stringify(placeholders(value)) !== JSON.stringify(placeholders(ru?.[key]))) problems.push(`${path}.${key}`);
    }
  };
  const problems = [];
  for (const ns of ['topic', 'subject', 'paper']) walk(bundle[`en:${ns}`], bundle[`ru:${ns}`], ns, problems);
  assert.deepEqual(problems, []);
});
