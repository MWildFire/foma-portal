import { list, textOf } from './model.ts';
import type { Pos, Report } from './report.ts';
import { findDuplicates, idSets, type DataCtx } from './rules-data.ts';

// Rules for content/<s>/**/pastpapers.ts (PastPaperRef in src/contract/types.ts). The portal links to the IB PDFs on
// ibdocs.re and adds its own guide, so these rules check the links, the session and that every item points at a topic
// of the same subject. Minutes are not compared with data/exams.json: past sessions print their own time on the cover
// (60 or 75 minutes, see S2 and S7 requests), and sections carry their own time. The guide's English and Russian text
// is checked by checkTexts in rules-data.ts.

const PAPERS = ['P1', 'P2', 'P3'];
const LEVELS = ['SL', 'HL', 'SLHL'];
const FILE_KINDS = ['questions', 'resources', 'markscheme', 'audio'];
const LINK_PREFIX = 'https://ibdocs.re/';
const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;   // kebab-case, for example geo-p2-m24-tz1
const SESSION_PATTERN = /^(?:[MN]\d{2}|SPEC\d{2})$/;   // May or November session with a two-digit year: M24, N23; specimen paper: SPEC27

const isPositiveInteger = (value: unknown): boolean => Number.isInteger(value) && (value as number) > 0;
const MINUTES_RANGE = [5, 240];   // a paper, or a section of one, lasts between these

export function checkPastPapers(r: Report, ctx: DataCtx): void {
  const { subject, pack, where } = ctx;
  const refs = list(pack.pastPapers);
  const topics = idSets(pack).topics;
  const duplicates = findDuplicates(refs.map(ref => textOf(ref.id)));

  refs.forEach(ref => {
    const id = textOf(ref.id);
    const label = `past paper "${id || '(no id)'}"`;
    const at = where.find('pastPaper', id);
    const fail = (message: string, pos: Pos | undefined = at): void => r.error(subject, 'past-paper', `${label}: ${message}`, pos);

    if (!ID_PATTERN.test(id)) fail('id must be kebab-case, for example geo-p2-m24-tz1');
    if (duplicates.indexOf(id) !== -1) fail('this id is used by more than one past paper; ids must be unique');
    if (ref.subject !== subject) fail(`subject is ${JSON.stringify(ref.subject)}, but the folder is "${subject}"`);
    if (PAPERS.indexOf(textOf(ref.paper)) === -1) fail(`paper must be P1, P2 or P3 (got ${JSON.stringify(ref.paper)})`);
    if (LEVELS.indexOf(textOf(ref.level)) === -1) fail(`level must be SL, HL or SLHL (got ${JSON.stringify(ref.level)})`);
    if (!SESSION_PATTERN.test(textOf(ref.session))) fail(`session must look like M24, N23 or SPEC27 (got ${JSON.stringify(ref.session)})`);
    if (!isPositiveInteger(ref.marks)) fail(`marks must be a whole number above 0 (got ${JSON.stringify(ref.marks)})`);

    const minutes = ref.minutes;
    if (typeof minutes !== 'number' || !Number.isInteger(minutes) || minutes < MINUTES_RANGE[0] || minutes > MINUTES_RANGE[1]) {
      fail(`minutes must be a whole number from ${MINUTES_RANGE[0]} to ${MINUTES_RANGE[1]} (got ${JSON.stringify(minutes)})`);
    }

    list(ref.items).forEach((item, index) => {
      const name = `item ${index + 1}`;
      if (typeof item?.q !== 'string' || item.q.trim() === '') fail(`${name} needs a question label in "q"`);
      if (!isPositiveInteger(item?.marks)) fail(`${name} needs marks as a whole number above 0`);
      const itemTopics = list(item?.topicIds);
      if (itemTopics.length === 0) r.warn(subject, 'past-paper', `${label}: ${name} has no topic, so the planner cannot use it`, at);
      itemTopics.forEach(topic => {
        if (!topics.has(textOf(topic))) fail(`${name} points at topic "${textOf(topic)}", which is not a topic of ${subject}`);
      });
    });

    const files = list(ref.files);
    if (files.length === 0) r.warn(subject, 'past-paper', `${label}: no files yet, so the portal shows no links to the paper`, at);
    files.forEach(file => {
      if (FILE_KINDS.indexOf(textOf(file?.kind)) === -1) fail(`a file kind must be one of ${FILE_KINDS.join(', ')} (got ${JSON.stringify(file?.kind)})`);
      if (!textOf(file?.url).startsWith(LINK_PREFIX)) fail(`file links must start with ${LINK_PREFIX} (got ${JSON.stringify(file?.url)})`);
    });
  });
}
