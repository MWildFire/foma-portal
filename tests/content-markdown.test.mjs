import test from 'node:test';
import assert from 'node:assert/strict';
import { parseBlocks, parseInline, safeLinkTarget } from '../src/lib/topic-markdown.ts';

const text = value => ({ type: 'text', value });

test('plain text is one text node', () => {
  assert.deepEqual(parseInline('Demand slopes down.'), [text('Demand slopes down.')]);
  assert.deepEqual(parseInline(''), []);
});

test('bold, italic and code', () => {
  assert.deepEqual(parseInline('a **bold** b'), [text('a '), { type: 'strong', children: [text('bold')] }, text(' b')]);
  assert.deepEqual(parseInline('a *it* b'), [text('a '), { type: 'em', children: [text('it')] }, text(' b')]);
  assert.deepEqual(parseInline('a _it_ b'), [text('a '), { type: 'em', children: [text('it')] }, text(' b')]);
  assert.deepEqual(parseInline('use `x * y` here'), [text('use '), { type: 'code', value: 'x * y' }, text(' here')]);
});

test('markers that do not close, or that touch spaces, stay as text', () => {
  assert.deepEqual(parseInline('3 * 4 = 12'), [text('3 * 4 = 12')]);
  assert.deepEqual(parseInline('a ** b'), [text('a ** b')]);
  assert.deepEqual(parseInline('**open only'), [text('**open only')]);
  assert.deepEqual(parseInline('half *open'), [text('half *open')]);
  assert.deepEqual(parseInline('a `open'), [text('a `open')]);
});

test('underscores inside words are not italic', () => {
  assert.deepEqual(parseInline('snake_case_name'), [text('snake_case_name')]);
  assert.deepEqual(parseInline('(_like this_)'), [text('('), { type: 'em', children: [text('like this')] }, text(')')]);
});

test('bold can hold italic, code and math', () => {
  assert.deepEqual(parseInline('**a *b* `c` $d$**'), [
    {
      type: 'strong',
      children: [
        text('a '),
        { type: 'em', children: [text('b')] },
        text(' '),
        { type: 'code', value: 'c' },
        text(' '),
        { type: 'math', value: 'd', display: false },
      ],
    },
  ]);
});

test('italic that contains bold closes on the last star', () => {
  assert.deepEqual(parseInline('*a **b** c*'), [
    { type: 'em', children: [text('a '), { type: 'strong', children: [text('b')] }, text(' c')] },
  ]);
});

test('inline math in dollars', () => {
  assert.deepEqual(parseInline('PED $= \\frac{a}{b}$ always'), [
    text('PED '),
    { type: 'math', value: '= \\frac{a}{b}', display: false },
    text(' always'),
  ]);
  assert.deepEqual(parseInline('$x$'), [{ type: 'math', value: 'x', display: false }]);
});

test('display math in double dollars', () => {
  assert.deepEqual(parseInline('see $$a^2 + b^2$$ here'), [text('see '), { type: 'math', value: 'a^2 + b^2', display: true }, text(' here')]);
});

test('dollar amounts are not math', () => {
  assert.deepEqual(parseInline('It costs $5 and $10 each.'), [text('It costs $5 and $10 each.')]);
  assert.deepEqual(parseInline('Total: $ 5'), [text('Total: $ 5')]);
  assert.deepEqual(parseInline('$$'), [text('$$')]);
});

test('a dollar sign that follows a formula and starts a number does not close it', () => {
  assert.deepEqual(parseInline('$a$5'), [text('$a$5')]);
});

test('a backslash-dollar inside a formula does not close it', () => {
  assert.deepEqual(parseInline('$p = \\$5$'), [{ type: 'math', value: 'p = \\$5', display: false }]);
});

test('a backslash escapes markers', () => {
  assert.deepEqual(parseInline('2 \\* 3 and \\$5 and \\_x\\_'), [text('2 * 3 and $5 and _x_')]);
  assert.deepEqual(parseInline('path \\\\ end'), [text('path \\ end')]);
  assert.deepEqual(parseInline('\\frac stays'), [text('\\frac stays')]);
});

test('markers inside math or code are left alone', () => {
  assert.deepEqual(parseInline('**$a*b$**'), [{ type: 'strong', children: [{ type: 'math', value: 'a*b', display: false }] }]);
  assert.deepEqual(parseInline('*`a*b`*'), [{ type: 'em', children: [{ type: 'code', value: 'a*b' }] }]);
});

test('links keep public targets and drop dangerous ones', () => {
  assert.deepEqual(parseInline('see [ThinkIB](https://www.thinkib.net/) now'), [
    text('see '),
    { type: 'link', href: 'https://www.thinkib.net/', children: [text('ThinkIB')] },
    text(' now'),
  ]);
  assert.deepEqual(parseInline('[plan](#/plan)'), [{ type: 'link', href: '#/plan', children: [text('plan')] }]);
  assert.deepEqual(parseInline('[x](javascript:alert(1))'), [text('[x](javascript:alert(1))')]);
  assert.deepEqual(parseInline('[no url]'), [text('[no url]')]);
  assert.deepEqual(parseInline('[a](not a url)'), [text('[a](not a url)')]);
});

test('the link target check', () => {
  assert.equal(safeLinkTarget('https://example.org/a'), 'https://example.org/a');
  assert.equal(safeLinkTarget(' http://example.org '), 'http://example.org');
  assert.equal(safeLinkTarget('mailto:a@b.org'), 'mailto:a@b.org');
  assert.equal(safeLinkTarget('#/s/geo'), '#/s/geo');
  assert.equal(safeLinkTarget('javascript:alert(1)'), null);
  assert.equal(safeLinkTarget('data:text/html,x'), null);
  assert.equal(safeLinkTarget('/relative'), null);
});

test('Russian text with emphasis and math', () => {
  assert.deepEqual(parseInline('Спрос **падает**, когда $P$ растёт'), [
    text('Спрос '),
    { type: 'strong', children: [text('падает')] },
    text(', когда '),
    { type: 'math', value: 'P', display: false },
    text(' растёт'),
  ]);
});

test('one paragraph keeps its line breaks', () => {
  assert.deepEqual(parseBlocks('first line\nsecond line'), [
    { type: 'p', children: [text('first line'), { type: 'br' }, text('second line')] },
  ]);
});

test('a blank line starts a new paragraph, and text is trimmed', () => {
  assert.deepEqual(parseBlocks('\n\n  one  \n\n\ntwo\n'), [
    { type: 'p', children: [text('one')] },
    { type: 'p', children: [text('two')] },
  ]);
  assert.deepEqual(parseBlocks(''), []);
  assert.deepEqual(parseBlocks('   \n \n'), []);
});

test('bullet and numbered lists', () => {
  assert.deepEqual(parseBlocks('- a\n- **b**\n* c'), [
    { type: 'ul', items: [[text('a')], [{ type: 'strong', children: [text('b')] }], [text('c')]] },
  ]);
  assert.deepEqual(parseBlocks('1. first\n2) second'), [{ type: 'ol', items: [[text('first')], [text('second')]] }]);
});

test('a list can follow a paragraph without a blank line, and a paragraph can follow a list', () => {
  assert.deepEqual(parseBlocks('Marks are given for:\n- a\n- b\nThen a closing line.'), [
    { type: 'p', children: [text('Marks are given for:')] },
    { type: 'ul', items: [[text('a')], [text('b')]] },
    { type: 'p', children: [text('Then a closing line.')] },
  ]);
});

test('an indented line continues the previous list item', () => {
  assert.deepEqual(parseBlocks('- first part\n  second part\n- next'), [
    { type: 'ul', items: [[text('first part second part')], [text('next')]] },
  ]);
});

test('a bullet list followed by a numbered list makes two lists', () => {
  assert.deepEqual(parseBlocks('- a\n1. b'), [
    { type: 'ul', items: [[text('a')]] },
    { type: 'ol', items: [[text('b')]] },
  ]);
});

test('lines that only look like list markers stay paragraphs', () => {
  assert.deepEqual(parseBlocks('-5 degrees'), [{ type: 'p', children: [text('-5 degrees')] }]);
  assert.deepEqual(parseBlocks('**Bold** start'), [{ type: 'p', children: [{ type: 'strong', children: [text('Bold')] }, text(' start')] }]);
  assert.deepEqual(parseBlocks('1990. The city grew.'), [{ type: 'p', children: [text('1990. The city grew.')] }]);
});

test('Windows line endings are handled', () => {
  assert.deepEqual(parseBlocks('a\r\n\r\n- b\r\n- c'), [
    { type: 'p', children: [text('a')] },
    { type: 'ul', items: [[text('b')], [text('c')]] },
  ]);
});
