import test from 'node:test';
import assert from 'node:assert/strict';
import { findFigureUrl, normalizePath, resolveRelative, topicDirOf } from '../src/lib/topic-assets.ts';

const mdxPaths = [
  '/content/_example/topics/example-topic.en.mdx',
  '/content/_example/topics/example-topic.ru.mdx',
  '/content/geo/core/topics/population.en.mdx',
  '/content/geo/core/topics/population.ru.mdx',
  '/content/geo/options/topics/population.en.mdx',
  '/content/geo/flat.en.mdx',
];

const assets = {
  '/content/_example/topics/assets/demo.svg': 'url-example-demo',
  '/content/geo/core/topics/assets/pyramid.svg': 'url-core-pyramid',
  '/content/geo/options/topics/assets/pyramid.svg': 'url-options-pyramid',
  '/content/geo/options/topics/assets/only-options.svg': 'url-only-options',
  '/content/geo/core/assets/shared.svg': 'url-core-shared',
  '/content/math/topics/assets/pyramid.svg': 'url-math-pyramid',
};

test('paths are normalised', () => {
  assert.equal(normalizePath('/content/a/b/../c/./d.svg'), '/content/a/c/d.svg');
  assert.equal(normalizePath('/content//a///b'), '/content/a/b');
  assert.equal(normalizePath('/../../x'), '/x');
  assert.equal(normalizePath(''), '/');
});

test('a src is resolved against the folder of the MDX file', () => {
  assert.equal(resolveRelative('/content/geo/core/topics/', './assets/x.svg'), '/content/geo/core/topics/assets/x.svg');
  assert.equal(resolveRelative('/content/geo/core/topics/', '../assets/x.svg'), '/content/geo/core/assets/x.svg');
  assert.equal(resolveRelative('/content/geo/core/topics/', 'assets/x.svg'), '/content/geo/core/topics/assets/x.svg');
  assert.equal(resolveRelative('/content/geo/core/topics/', '/content/geo/other/assets/x.svg'), '/content/geo/other/assets/x.svg');
});

test('the folder of a topic comes from its MDX path', () => {
  assert.equal(topicDirOf(mdxPaths, '_example', 'example-topic'), '/content/_example/topics/');
  assert.equal(topicDirOf(mdxPaths, 'geo', 'population'), '/content/geo/core/topics/');
  assert.equal(topicDirOf(mdxPaths, 'geo', 'flat'), '/content/geo/');
  assert.equal(topicDirOf(mdxPaths, 'geo', 'missing'), null);
  assert.equal(topicDirOf(mdxPaths, 'math', 'population'), null);
  assert.equal(topicDirOf([], 'geo', 'population'), null);
});

test('a figure is found next to its own topic', () => {
  const found = findFigureUrl({ assets, mdxPaths, subject: '_example', topicId: 'example-topic', src: './assets/demo.svg' });
  assert.equal(found, 'url-example-demo');
});

test('two units with the same file name each get their own figure', () => {
  const core = findFigureUrl({ assets, mdxPaths, subject: 'geo', topicId: 'population', src: './assets/pyramid.svg' });
  assert.equal(core, 'url-core-pyramid');
});

test('a figure one folder up is found', () => {
  const found = findFigureUrl({ assets, mdxPaths, subject: 'geo', topicId: 'population', src: '../assets/shared.svg' });
  assert.equal(found, 'url-core-shared');
});

test('when the exact path is missing, the same file name under any assets folder of the subject is used', () => {
  const found = findFigureUrl({ assets, mdxPaths, subject: 'geo', topicId: 'population', src: './assets/only-options.svg' });
  assert.equal(found, 'url-only-options');
  const unknownTopic = findFigureUrl({ assets, mdxPaths, subject: 'geo', topicId: 'no-such-topic', src: './assets/pyramid.svg' });
  assert.equal(unknownTopic, 'url-core-pyramid');
});

test('a figure never comes from another subject', () => {
  const found = findFigureUrl({ assets, mdxPaths, subject: 'econ', topicId: 'x', src: './assets/pyramid.svg' });
  assert.equal(found, null);
});

test('missing files, empty src and external URLs give null', () => {
  const base = { assets, mdxPaths, subject: 'geo', topicId: 'population' };
  assert.equal(findFigureUrl({ ...base, src: './assets/nope.svg' }), null);
  assert.equal(findFigureUrl({ ...base, src: '' }), null);
  assert.equal(findFigureUrl({ ...base, src: 'https://example.org/a.svg' }), null);
  assert.equal(findFigureUrl({ ...base, src: 'data:image/svg+xml;base64,AAAA' }), null);
  assert.equal(findFigureUrl({ ...base, src: '//cdn.example.org/a.svg' }), null);
  assert.equal(findFigureUrl({ ...base, src: 'javascript:alert(1)' }), null);
});

test('a bare file name is looked up under assets folders', () => {
  const found = findFigureUrl({ assets, mdxPaths, subject: '_example', topicId: 'example-topic', src: 'demo.svg' });
  assert.equal(found, 'url-example-demo');
});
