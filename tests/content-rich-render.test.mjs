import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// The rich text of the content, drawn once on the server: a table, a display formula and a code block are scrollable
// boxes, so each one is a region the keyboard can reach and that has a name in the language of the UI (axe rule
// scrollable-region-focusable). An inline formula is not a box and is not a region.

const root = join(import.meta.dirname, '..');
let server;
let i18n;
const loaded = {};

before(async () => {
  server = await createServer({
    root,
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, ws: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
    logLevel: 'silent',
    ssr: { resolve: { conditions: ['module-sync', 'module', 'node', 'development|production'], externalConditions: ['node', 'module-sync'] } },
  });
  i18n = (await server.ssrLoadModule('/src/i18n/index.ts')).default;
  await new Promise(resolve => setTimeout(resolve, 20));
  loaded.RichText = (await server.ssrLoadModule('/src/components/content/RichText.tsx')).RichText;
  loaded.Span = (await server.ssrLoadModule('/src/components/mdx/elements.tsx')).Span;
  loaded.Pre = (await server.ssrLoadModule('/src/components/mdx/elements.tsx')).Pre;
});

after(async () => {
  await server?.close();
});

async function draw(element, lang = 'en') {
  await i18n.changeLanguage(lang);
  return renderToString(createElement(MemoryRouter, null, element));
}

// The attributes of the first opening <tag> whose text contains `needle`, as a map.
function attributesOf(html, tag, needle) {
  const match = [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].find(item => item[0].includes(needle));
  assert.ok(match, `a <${tag}> with ${needle}`);
  return Object.fromEntries([...match[0].matchAll(/([\w-]+)="([^"]*)"/g)].map(item => [item[1], item[2]]));
}

const TABLE = '| Good | Price | Share |\n|:--|--:|:-:|\n| Rice | 2.50 | 40% |\n| Oil | 4 | 10% |';

test('a table is a focusable region named "Table", with the alignment of each column', async () => {
  const html = await draw(createElement(loaded.RichText, { text: TABLE }));
  const wrap = attributesOf(html, 'div', 'foma-table-wrap');
  assert.equal(wrap.tabindex, '0');
  assert.equal(wrap.role, 'region');
  assert.equal(wrap['aria-label'], 'Table');
  assert.match(html, /<th scope="col" class="foma-th" style="text-align:left">Good<\/th>/);
  assert.match(html, /<th scope="col" class="foma-th" style="text-align:right">Price<\/th>/);
  assert.match(html, /<th scope="col" class="foma-th" style="text-align:center">Share<\/th>/);
  assert.match(html, /<td class="foma-td" style="text-align:right">4<\/td>/);
});

test('a table without alignment markers has no alignment style, and a formula in a cell is drawn with KaTeX', async () => {
  const html = await draw(createElement(loaded.RichText, { text: '| a | b |\n|---|---|\n| $x^2$ | 3 |' }));
  assert.match(html, /<th scope="col" class="foma-th">a<\/th>/);
  assert.match(html, /<td class="foma-td">3<\/td>/);
  assert.ok(html.includes('class="katex"'), 'the formula in the cell is typeset');
});

test('the name of a table is in the language of the UI', async () => {
  const russian = await draw(createElement(loaded.RichText, { text: TABLE }), 'ru');
  assert.equal(attributesOf(russian, 'div', 'foma-table-wrap')['aria-label'], 'Таблица');
});

test('a display formula is a focusable region named for the reader; an inline formula is not a region', async () => {
  const display = await draw(createElement(loaded.RichText, { text: 'Ratio: $$\\frac{a}{b}$$' }));
  const box = attributesOf(display, 'span', 'overflow-x-auto');
  assert.equal(box.tabindex, '0');
  assert.equal(box.role, 'region');
  assert.equal(box['aria-label'], 'Scrollable formula');
  const inline = await draw(createElement(loaded.RichText, { text: 'Ratio: $a/b$ here' }));
  assert.ok(!inline.includes('role="region"'));
  const russian = await draw(createElement(loaded.RichText, { text: 'Ratio: $$\\frac{a}{b}$$' }), 'ru');
  assert.equal(attributesOf(russian, 'span', 'overflow-x-auto')['aria-label'], 'Формула с прокруткой');
});

test('a code block is a focusable region named "Scrollable code"', async () => {
  const html = await draw(createElement(loaded.Pre, null, createElement('code', null, 'x = 1')));
  const pre = attributesOf(html, 'pre', 'foma-pre');
  assert.equal(pre.tabindex, '0');
  assert.equal(pre.role, 'region');
  assert.equal(pre['aria-label'], 'Scrollable code');
  const russian = await draw(createElement(loaded.Pre, null, createElement('code', null, 'x = 1')), 'ru');
  assert.equal(attributesOf(russian, 'pre', 'foma-pre')['aria-label'], 'Код с прокруткой');
});

test('raw MDX display math compiles to KaTeX in a named focusable scroll region',async()=>{
 const {evaluate}=await import('@mdx-js/mdx');
 const runtime=await import('react/jsx-runtime');
 const remarkMath=(await import('remark-math')).default;
 const rehypeKatex=(await import('rehype-katex')).default;
 const {default:Content}=await evaluate('$$\nx^2+y^2=z^2\n$$',{...runtime,remarkPlugins:[remarkMath],rehypePlugins:[rehypeKatex]});
 const html=await draw(createElement(Content,{components:{span:loaded.Span ?? 'span'}}));
 assert.match(html,/katex-display/);assert.match(html,/role="region"/);assert.match(html,/tabindex="0"/);assert.match(html,/Scrollable formula/);assert.doesNotMatch(html,/\$\$/);
});
