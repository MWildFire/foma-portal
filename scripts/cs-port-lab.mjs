// Copies the FomaCS lesson site into public/cs-lab (served at /cs-lab/).
// Removed on the way, so no school material reaches git: the teacher's official question cards, the banners that
// point to them, and links to the school's private Google Site and Google Docs (the links carry a Google account index).
// Usage: node scripts/cs-port-lab.mjs [path/to/FomaCS]
// The output is generated: change this script and rerun it instead of editing public/cs-lab by hand.
import { copyFileSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.resolve(process.argv[2] || path.join(homedir(), 'Projects', 'FomaCS'));
const target = path.join(root, 'public', 'cs-lab');

// Banners that point to teacher material or to the school site are dropped as a whole.
const BANNED_BANNER = [/sites\.google\.com/i, /docs\.google\.com/i, /Google Doc/i, /официальн/i, /экзамен-вопрос/i, /от преподавателя/i];

// Errors in the FomaCS source that are corrected in the copy. The FomaCS repository should get the same fix.
// Population sigma of 20, 25, 30, 35, 80 (mean 38) is sqrt(466) = 21.59, not 21.4; the z-scores follow from it.
const CORRECTIONS = [
  {
    file: 'a4-2-preprocessing.html',
    replace: [
      ['σ ≈ 21.4<br>', 'σ = √466 ≈ 21.59<br>'],
      ['(20−38)/21.4 ≈ <b>−0.84</b>', '(20−38)/21.59 ≈ <b>−0.83</b>'],
      ['25 → <b>−0.61</b>', '25 → <b>−0.60</b>'],
      ['80 → <b>+1.96</b>', '80 → <b>+1.95</b>'],
    ],
  },
];

// A heading that opens a section of teacher questions: the section runs to the next heading of the same or a higher level.
const OFFICIAL_HEADING = /официальн|экзаменационн\S* вопрос|вопросы преподавателя|Тренировочн/i;

// Pages made only of teacher question collections are not published; their links point to the portal topic instead.
const DROPPED_PAGES = new Set(['a4-1-ml-fundamentals.html', 'a4-3-approaches.html', 'a4-4-ethics.html']);

// Anything that is not a plain lesson file stays out (notes, handoff, PDFs, git data, editor folders).
const KEEP_EXT = new Set(['.html', '.css', '.js', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico']);

function listFiles(dir, base = '') {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const full = path.join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    if (statSync(full).isDirectory()) out.push(...listFiles(full, rel));
    else if (KEEP_EXT.has(path.extname(name).toLowerCase())) out.push(rel);
  }
  return out;
}

const plain = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// Cuts every section that starts with an official-question heading (up to the next heading of the same or higher level).
function cutOfficialSections(html, rel) {
  let text = html;
  for (let guard = 0; guard < 60; guard++) {
    const headings = [...text.matchAll(/<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>/gi)];
    const hit = headings.find((match) => OFFICIAL_HEADING.test(plain(match[2])));
    if (!hit) break;
    const level = Number(hit[1]);
    const next = headings.find((match) => match.index > hit.index && Number(match[1]) <= level);
    const mainEnd = text.indexOf('</main>', hit.index);
    let end = next ? next.index : text.length;
    if (mainEnd !== -1 && mainEnd < end) end = mainEnd;
    console.log(`  ${rel}: cut section "${plain(hit[2]).slice(0, 70)}" (${end - hit.index} chars)`);
    text = text.slice(0, hit.index) + text.slice(end);
  }
  return text;
}

// Removes the question cards, the official sections and the banned banners; unwraps the school links; rewrites the
// links to dropped pages to the portal topic. The lesson text stays.
function cleanHtml(html, rel) {
  let text = html.replace(/<details class="question-card">[\s\S]*?<\/details>/g, '');
  for (const correction of CORRECTIONS.filter((entry) => entry.file === rel)) {
    for (const [from, to] of correction.replace) {
      if (!text.includes(from)) throw new Error(`${rel}: correction target not found: ${from}`);
      text = text.split(from).join(to);
      console.log(`  ${rel}: corrected "${from.slice(0, 40)}"`);
    }
  }
  text = cutOfficialSections(text, rel);
  let banners = 0;
  text = text.replace(/<div class="ru-tip"[^>]*>(?:(?!<\/div>)[\s\S])*<\/div>/g, (block) => {
    if (BANNED_BANNER.some((pattern) => pattern.test(block))) {
      banners += 1;
      return '';
    }
    return block;
  });
  if (banners > 0) console.log(`  ${rel}: dropped ${banners} banner(s)`);
  text = text.replace(/✅ Официальные вопросы\.?/g, '');
  text = text.replace(/<a\b[^>]*href="https:\/\/(?:sites\.google\.com|docs\.google\.com)[^"]*"[^>]*>([\s\S]*?)<\/a>/g, '$1');
  text = text.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g, (match, name) => (DROPPED_PAGES.has(`${name}.html`)
    ? `href="/#/s/cs/t/${name}"`
    : match));
  return text;
}

rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
const files = listFiles(source);
let cards = 0;
for (const rel of files) {
  if (DROPPED_PAGES.has(rel)) {
    console.log(`  ${rel}: not published (teacher question collection)`);
    continue;
  }
  const from = path.join(source, rel);
  const to = path.join(target, rel);
  mkdirSync(path.dirname(to), { recursive: true });
  if (rel.endsWith('.html')) {
    const original = readFileSync(from, 'utf8');
    cards += (original.match(/<details class="question-card">/g) || []).length;
    writeFileSync(to, cleanHtml(original, rel), 'utf8');
  } else {
    copyFileSync(from, to);
  }
}
console.log(`copied ${files.length} files from ${source} to ${path.relative(root, target)}; question cards removed: ${cards}`);

// Residual check: nothing that points to school documents or to the teacher's questions may remain.
// "Google Docs" as a product name in a list is fine; a quoted teacher document title is not.
const residual = /docs\.google|sites\.google|authuser=|официальн|от преподавателя|Google Doc\s*[«"“]/i;
const leftovers = files
  .filter((rel) => /\.(html|js|css)$/.test(rel) && !DROPPED_PAGES.has(rel))
  .flatMap((rel) => readFileSync(path.join(target, rel), 'utf8').split('\n')
    .map((line, index) => ({ rel, line: index + 1, text: line.trim() }))
    .filter((entry) => residual.test(entry.text)));
if (leftovers.length > 0) {
  console.log(`residual references (${leftovers.length}):`);
  leftovers.slice(0, 40).forEach((entry) => console.log(`  ${entry.rel}:${entry.line}: ${entry.text.slice(0, 160)}`));
  process.exitCode = 1;
} else {
  console.log('residual check: clean');
}
