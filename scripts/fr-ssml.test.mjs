// node --test scripts/fr-ssml.test.mjs
// Checks the SSML built for the Polly voices. Pure functions only: no AWS call and no file is written.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { TURN_END_PAUSE, VOICES, trackSsml, turnToSsml, xmlEscape } from './fr-ssml.mjs';
import { track as l1 } from '../content/fr/listening/l1-racines.ts';

const END = `<break time="${TURN_END_PAUSE}"/></speak>`;

test('xmlEscape escapes the XML characters and keeps French quotes and accents', () => {
  assert.equal(xmlEscape(`a & b < c > d "e" 'f'`), 'a &amp; b &lt; c &gt; d &quot;e&quot; &apos;f&apos;');
  assert.equal(xmlEscape('« Léa » ça coûte, l’école'), '« Léa » ça coûte, l’école');
});

test('a turn without pauses is one speak element with the end pause', () => {
  assert.equal(turnToSsml('  Bonjour à tous.  '), `<speak>Bonjour à tous.${END}`);
});

test('[pause Xs] becomes a break where it stands, and the text around it is kept', () => {
  assert.equal(
    turnToSsml('[pause 1.5s] Attendez. [pause 2s]Merci.'),
    `<speak><break time="1.5s"/> Attendez. <break time="2s"/>Merci.${END}`,
  );
});

test('the text is escaped, and the breaks are not', () => {
  assert.equal(
    turnToSsml('Tu gagnes & tu perds [pause 1s] < 2'),
    `<speak>Tu gagnes &amp; tu perds <break time="1s"/> &lt; 2${END}`,
  );
});

test('a pause longer than 10 seconds is refused', () => {
  assert.throws(() => turnToSsml('Oui. [pause 11s] Non.'), /longer than 10 s/);
});

test('trackSsml gives one part per turn, in order, with the voice of each turn', () => {
  const parts = trackSsml(l1);
  assert.equal(parts.length, l1.turns.length);
  assert.deepEqual(parts.map(part => part.name), l1.turns.map((_, index) => `${String(index + 1).padStart(3, '0')}.ssml`));
  assert.deepEqual(parts.map(part => part.voice), l1.turns.map(turn => turn.voice));
});

test('trackSsml refuses an unknown voice', () => {
  const broken = { id: 'x', turns: [{ speaker: 'A', voice: 'Brian', fr: 'Bonjour.' }] };
  assert.throws(() => trackSsml(broken), /unknown voice "Brian"/);
});

test('every real track gives SSML inside the Polly limits, with text that has no raw markup characters', async () => {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'content', 'fr', 'listening');
  const files = fs.readdirSync(dir).filter(name => name.endsWith('.ts')).sort();
  assert.equal(files.length, 8);
  for (const name of files) {
    const { track } = await import(pathToFileURL(path.join(dir, name)).href);
    assert.equal(track.id, name.replace(/\.ts$/, ''), name);
    const parts = trackSsml(track);
    assert.equal(parts.length, track.turns.length, name);
    for (const part of parts) {
      assert.ok(VOICES.includes(part.voice), `${name} ${part.name}`);
      assert.ok(part.ssml.startsWith('<speak>') && part.ssml.endsWith('</speak>'), `${name} ${part.name}`);
      const text = part.ssml.replace(/<[^>]+>/g, '');
      assert.doesNotMatch(text, /[<>]|&(?!(amp|lt|gt|quot|apos);)/, `${name} ${part.name}`);
    }
  }
});
