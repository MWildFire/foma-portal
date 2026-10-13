// Runs the Python examples of the CS content with python3 and checks them.
//   - Questions: a ```python block in stimulus.en (or prompt.en) is run; when the question has an `answer`, the printed
//     output (trailing spaces trimmed per line) must equal it. The ru version of the same block must match in code
//     (comments may differ).
//   - Topic bodies (*.en.mdx, *.ru.mdx): every ```python block must run with exit code 0 and no input() call.
//     A block whose first line is "# cs-verify: skip" is not run.
// Usage: node --experimental-strip-types scripts/cs-verify.mjs
// The question modules are TypeScript, so the strip-types flag is needed (the same flag as scripts/validate-content.ts).
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const subjectRoot = path.join(root, 'content', 'cs');
const TIMEOUT_MS = 5000;

function walk(dir, predicate, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, predicate, out);
    else if (predicate(full)) out.push(full);
  }
  return out;
}

function pythonBlocks(text) {
  const blocks = [];
  const pattern = /```python\n([\s\S]*?)```/g;
  let match = pattern.exec(text);
  while (match !== null) {
    blocks.push(match[1]);
    match = pattern.exec(text);
  }
  return blocks;
}

// Runs code with python3 (program on stdin, so no temporary files are needed).
function runPython(code) {
  const result = spawnSync('python3', ['-'], { input: code, encoding: 'utf8', timeout: TIMEOUT_MS });
  return {
    ok: result.status === 0 && !result.error,
    stdout: result.stdout || '',
    stderr: (result.stderr || '') + (result.error ? String(result.error) : ''),
  };
}

const normalise = (text) => text.replace(/\r\n/g, '\n').split('\n').map((line) => line.replace(/\s+$/, '')).join('\n').trim();

// Code without comments (whole-line and trailing), so the EN and RU versions can differ in their comments only.
const codeOnly = (code) => code
  .split('\n')
  .filter((line) => !line.trim().startsWith('#'))
  .map((line) => line.replace(/\s+#.*$/, '').replace(/\s+$/, ''))
  .join('\n')
  .trim();

const failures = [];
const notes = [];
let questionCount = 0;
let answerCount = 0;
let codeCount = 0;

// 1. Questions.
const questionFiles = walk(subjectRoot, (file) => /\/questions\/[^/]+\.ts$/.test(file));
for (const file of questionFiles) {
  const mod = await import(pathToFileURL(file).href);
  const list = Array.isArray(mod.questions) ? mod.questions : [];
  for (const question of list) {
    questionCount += 1;
    const source = question.stimulus?.en || question.prompt?.en || '';
    const blocks = pythonBlocks(source);
    if (blocks.length === 0) {
      if (question.answer !== undefined) notes.push(`${question.id}: has an answer but no python block, so it was not checked`);
      continue;
    }
    codeCount += 1;
    const run = runPython(blocks[0]);
    if (!run.ok) {
      failures.push(`${question.id}: python failed: ${run.stderr.trim().split('\n').slice(-1)[0] || 'timeout'}`);
      continue;
    }
    if (question.answer !== undefined) {
      answerCount += 1;
      const expected = normalise(String(question.answer));
      const actual = normalise(run.stdout);
      if (expected !== actual) failures.push(`${question.id}: output differs. expected "${expected}" got "${actual}"`);
    }
    const ruBlocks = pythonBlocks(question.stimulus?.ru || '');
    if (ruBlocks.length > 0 && codeOnly(ruBlocks[0]) !== codeOnly(blocks[0])) {
      notes.push(`${question.id}: the ru code differs from the en code (outside comments)`);
    }
  }
}

// 2. Topic bodies.
const bodyFiles = walk(subjectRoot, (file) => /\/topics\/[^/]+\.(en|ru)\.mdx$/.test(file));
let bodyBlocks = 0;
for (const file of bodyFiles) {
  const blocks = pythonBlocks(readFileSync(file, 'utf8'));
  for (const block of blocks) {
    if (block.split('\n')[0].trim() === '# cs-verify: skip') continue;
    bodyBlocks += 1;
    const run = runPython(block);
    if (!run.ok) {
      const where = path.relative(root, file);
      failures.push(`${where}: a python block failed: ${run.stderr.trim().split('\n').slice(-1)[0] || 'timeout'}`);
    }
  }
}

console.log(`questions read: ${questionCount} (python blocks run: ${codeCount}, answers checked: ${answerCount})`);
console.log(`topic bodies: ${bodyFiles.length} files, python blocks run: ${bodyBlocks}`);
notes.forEach((line) => console.log(`note: ${line}`));
if (failures.length > 0) {
  console.log(`failures (${failures.length}):`);
  failures.forEach((line) => console.log(`  ${line}`));
  process.exitCode = 1;
} else {
  console.log('all python examples run and match their answers');
}
