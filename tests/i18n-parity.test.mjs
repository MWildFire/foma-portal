import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Every namespace must exist in both languages with the same keys, so no screen shows a raw key.
const root = join(import.meta.dirname, '..', 'src', 'i18n');
const namespaces = (lang) => readdirSync(join(root, lang)).filter(file => file.endsWith('.json')).sort();

function flatKeys(value, prefix = '') {
  return Object.entries(value).flatMap(([key, child]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return child && typeof child === 'object' ? flatKeys(child, path) : [path];
  });
}

test('en and ru have the same namespace files', () => {
  assert.deepEqual(namespaces('ru'), namespaces('en'));
});

for (const file of namespaces('en')) {
  test(`en/${file} and ru/${file} have the same keys`, () => {
    const en = JSON.parse(readFileSync(join(root, 'en', file), 'utf8'));
    const ru = JSON.parse(readFileSync(join(root, 'ru', file), 'utf8'));
    assert.deepEqual(flatKeys(ru).sort(), flatKeys(en).sort());
  });
}
