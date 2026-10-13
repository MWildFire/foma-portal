import { list, textOf } from './model.ts';
import type { Report } from './report.ts';
import { findDuplicates, idSets, type DataCtx } from './rules-data.ts';

// Rules for content/<s>/**/assignments.ts (Assignment in src/contract/types.ts): tasks the teacher set, shown on the
// subject page with their due dates. A link must be a public page; school and account pages (Classlink, Google Drive,
// Google Classroom, Toddle) are never linked from the portal.

const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;   // kebab-case, for example core-unit-2-revision
const DUE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;       // YYYY-MM-DD
const PRIVATE_LINK = /(classlink|classroom\.google|drive\.google|docs\.google|toddle)/i;

// A real calendar day (2026-02-30 is not one).
function isCalendarDate(value: string): boolean {
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

export function checkAssignments(r: Report, ctx: DataCtx): void {
  const { subject, pack, where } = ctx;
  const items = list(pack.assignments);
  const topics = idSets(pack).topics;
  const duplicates = findDuplicates(items.map(item => textOf(item.id)));

  items.forEach(item => {
    const id = textOf(item.id);
    const label = `assignment "${id || '(no id)'}"`;
    const at = where.find('assignment', id);
    const fail = (message: string): void => r.error(subject, 'assignment', `${label}: ${message}`, at);

    if (!ID_PATTERN.test(id)) fail('id must be kebab-case, for example core-unit-2-revision');
    if (duplicates.indexOf(id) !== -1) fail('this id is used by more than one assignment; ids must be unique');
    if (!DUE_PATTERN.test(textOf(item.due)) || !isCalendarDate(textOf(item.due))) {
      fail(`due must be a date as YYYY-MM-DD (got ${JSON.stringify(item.due)})`);
    }
    if (item.url !== undefined) {
      const url = textOf(item.url);
      if (!url.startsWith('https://')) fail(`url must start with https:// (got ${JSON.stringify(url)})`);
      else if (PRIVATE_LINK.test(url)) fail('url points at a school or account page (Classlink, Google Drive or Toddle); link public pages only');
    }
    const topicIds = list(item.topicIds);
    if (topicIds.length === 0) r.warn(subject, 'assignment', `${label}: no topic, so it does not link to a topic page`, at);
    topicIds.forEach(topic => {
      if (!topics.has(textOf(topic))) fail(`topicIds lists "${textOf(topic)}", which is not a topic of ${subject}`);
    });
  });
}
