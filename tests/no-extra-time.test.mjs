import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
// No runtime exceptions: normalization selects supported fields and drops legacy properties.
const exceptions = new Map();
const pattern = /extra[\s_-]?time|extra_?minutes|withExtra|удлин[её]нн|доп(?:\.|олнительн[а-яё]*)\s*врем|(?:\+\s*25\s*%|25\s*%)[^\n]{0,24}(?:time|врем)/iu;
function files(dir) { return readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(join(dir,e.name)) : [join(dir,e.name)]); }
test('runtime, translations and exam content contain no retired timing mechanism', () => {
 const hits=[];
 for (const file of [...files('src'),...files('content'),...files('data'),'index.html']) {
  if (!/\.(?:ts|tsx|json|mdx|html|css)$/.test(file)) continue;
  readFileSync(file,'utf8').split('\n').forEach((line,i)=>{
   // A database insert's performance cost is unrelated to exam accommodations.
   const academic = file === 'content/cs/theme-a/questions/a3-3.ts' && /index|индекс/i.test(line);
   if (pattern.test(line) && !academic && !exceptions.has(`${file}:${i+1}`)) hits.push(`${file}:${i+1}`);
  });
 }
 assert.deepEqual(hits, []);
});
