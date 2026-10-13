// Turns the turns of a listening track (content/fr/listening/<id>.ts) into Amazon Polly SSML, one document per turn.
//
//   node --experimental-strip-types scripts/fr-ssml.mjs content/fr/listening/<id>.ts <out-dir>
//
// Writes <out-dir>/001.ssml, 002.ssml, ... in turn order and prints "<file><TAB><voice>" for every turn; the list is
// what scripts/fr-polly.sh reads. The text is XML-escaped and "[pause 1.5s]" becomes <break time="1.5s"/>.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const VOICES = ['Lea', 'Remi', 'Gabrielle'];

// A silence after every turn, so that one speaker does not run into the next (Polly ends a turn without any). It is
// also what brings the shortest track (l8, 10 turns) to the 90 s minimum of the audio check without changing the text.
export const TURN_END_PAUSE = '1.2s';

const MAX_BREAK_SECONDS = 10; // the longest <break> Polly accepts
const MAX_CHARS = 3000;       // the longest text Polly accepts in one request, SSML tags included

const PAUSE = /\[pause\s+(\d+(?:\.\d+)?)s\]/g;
const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };

export function xmlEscape(text) {
  return text.replace(/[&<>"']/g, ch => ESCAPES[ch]);
}

// One turn of French text to one <speak> document. Text is escaped piece by piece, so the breaks stay tags.
export function turnToSsml(text) {
  const source = text.trim();
  let body = '';
  let last = 0;
  for (const match of source.matchAll(PAUSE)) {
    const seconds = Number(match[1]);
    if (seconds > MAX_BREAK_SECONDS) throw new Error(`pause ${match[0]} is longer than ${MAX_BREAK_SECONDS} s`);
    body += xmlEscape(source.slice(last, match.index)) + `<break time="${match[1]}s"/>`;
    last = match.index + match[0].length;
  }
  body += xmlEscape(source.slice(last));
  return `<speak>${body}<break time="${TURN_END_PAUSE}"/></speak>`;
}

// One part per turn, in order: { name: '001.ssml', voice: 'Lea', ssml: '<speak>…</speak>' }.
export function trackSsml(track) {
  if (!Array.isArray(track.turns) || track.turns.length === 0) throw new Error(`track "${track.id}" has no turns`);
  return track.turns.map((turn, index) => {
    const where = `turn ${index + 1} of "${track.id}"`;
    if (!VOICES.includes(turn.voice)) throw new Error(`${where}: unknown voice "${turn.voice}" (use ${VOICES.join(', ')})`);
    if (!turn.fr || turn.fr.trim() === '') throw new Error(`${where}: the French text is empty`);
    const ssml = turnToSsml(turn.fr);
    if (ssml.length > MAX_CHARS) throw new Error(`${where}: ${ssml.length} characters (the limit is ${MAX_CHARS})`);
    return { name: `${String(index + 1).padStart(3, '0')}.ssml`, voice: turn.voice, ssml };
  });
}

async function main(args) {
  const [trackFile, outDir] = args;
  if (!trackFile || !outDir) throw new Error('usage: node --experimental-strip-types scripts/fr-ssml.mjs <track.ts> <out-dir>');
  const file = path.resolve(trackFile);
  const name = path.basename(file, '.ts');
  const { track } = await import(pathToFileURL(file).href);
  if (!track) throw new Error(`${trackFile} exports no "track"`);
  if (track.id !== name) throw new Error(`track id "${track.id}" must equal the file name "${name}"`);
  fs.mkdirSync(outDir, { recursive: true });
  for (const part of trackSsml(track)) {
    const target = path.join(outDir, part.name);
    fs.writeFileSync(target, part.ssml, 'utf8');
    process.stdout.write(`${target}\t${part.voice}\n`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch(error => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
