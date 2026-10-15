import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (name, lang) => readFileSync(`content/eng/topics/${name}.${lang}.mdx`, 'utf8');
for (const lang of ['en', 'ru']) {
  test(`Yun R03 ${lang}: likely three, spares and prior poems retain the IO warning`, () => {
    const t = read('w-yun-dong-ju', lang);
    const titles = [...t.matchAll(/^#### \*\*(The Road|Self-Portrait|The Liver|The Cross|Prologue|Counting the Stars at Night|An Easily Written Poem|Confession)/gm)].map(m=>m[1]);
    assert.deepEqual(titles, ['The Road','Self-Portrait','The Liver','The Cross','Prologue','Counting the Stars at Night','An Easily Written Poem','Confession']);
    assert.ok(t.indexOf('Individual Oral') < t.indexOf('#### **The Road'));
    assert.match(t, /K1/); assert.match(t, /C1/);
    assert.match(t, /1941-11-05/); assert.match(t, /1948/);
  });
  for (const pair of ['much-ado', 'into-the-wild']) {
    test(`Yun R03 ${lang} ${pair}: four original plans compare both works in three paragraphs`, () => {
      const t = read(`p2-pair-yun-dong-ju-${pair}`, lang);
      const plans=t.split(/^### [1-4]\. /m).slice(1);
      assert.equal(plans.length,4);
      for (const p of plans) {
        for (const label of (lang==='en'?['Thesis.','Paragraph 1.','Paragraph 2.','Paragraph 3.','Conclusion.']:['Тезис.','Абзац 1.','Абзац 2.','Абзац 3.','Вывод.'])) assert.ok(p.includes(label),label);
      }
      for (const poem of ['The Road','Self-Portrait','The Liver']) assert.ok(t.includes(poem));
      assert.match(t,/10 \/ 80 \/ 10 \/ 5/);
      assert.doesNotMatch(t,/epilogue shows|parents' note|one first-person voice|one voice that says "I"/);
    });
  }
}
