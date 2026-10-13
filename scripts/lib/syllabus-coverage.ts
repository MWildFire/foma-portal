import { list, textOf, type Pack, type TopicMeta } from './model.ts';

// How much of a subject's syllabus has a finished topic. Used by `npm run coverage` and by the validator's summary.
// A code is covered when a topic has it as `code` or in `codes`, and both <id>.en.mdx and <id>.ru.mdx exist.

export type Scope = 'yes' | 'no' | 'unknown';

export interface CoverageRow {
  code: string;
  title: string;
  papers: string[];
  scope: Scope;            // taken from the topics that carry the code; "unknown" when there is none
  topicIds: string[];      // topics with this code
  hasBodies: boolean;      // at least one of them has both bodies
}

export interface Coverage {
  rows: CoverageRow[];
  covered: number;         // codes with bodies, whatever their scope
  inScope: number;         // codes whose scope is not "no"
  coveredInScope: number;
  percent: number | null;  // coveredInScope / inScope, null without a syllabus
}

function scopeOf(topics: TopicMeta[]): Scope {
  if (topics.length === 0) return 'unknown';
  if (topics.some(topic => topic.inMockScope === 'yes')) return 'yes';
  if (topics.every(topic => topic.inMockScope === 'no')) return 'no';
  return 'unknown';
}

export function computeCoverage(pack: Pack, hasBodies: (topicId: string) => boolean): Coverage {
  const rows = pack.syllabus.map((item): CoverageRow => {
    const code = textOf(item.code);
    const topics = pack.topics.filter(topic => topic.code === code || list(topic.codes).indexOf(code) !== -1);
    return {
      code,
      title: item.title ? textOf(item.title.en) : '',
      papers: list(item.papers),
      scope: scopeOf(topics),
      topicIds: topics.map(topic => textOf(topic.id)),
      hasBodies: topics.some(topic => hasBodies(textOf(topic.id))),
    };
  });
  const inScopeRows = rows.filter(row => row.scope !== 'no');
  const coveredInScope = inScopeRows.filter(row => row.hasBodies).length;
  return {
    rows,
    covered: rows.filter(row => row.hasBodies).length,
    inScope: inScopeRows.length,
    coveredInScope,
    percent: inScopeRows.length === 0 ? null : (coveredInScope / inScopeRows.length) * 100,
  };
}

export function formatPercent(value: number | null): string {
  return value === null ? 'n/a' : `${(Math.round(value * 10) / 10).toFixed(1)}%`;
}

const cell = (text: string): string => text.replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim();

// The content of ops/coverage/<subject>.md. The first line carries the percentage.
export function renderCoverage(subject: string, coverage: Coverage): string {
  const summary = coverage.percent === null
    ? 'no syllabus codes yet'
    : `${coverage.coveredInScope} of ${coverage.inScope} codes in scope`;
  const lines = [
    `# Coverage ${subject}: ${formatPercent(coverage.percent)} (${summary})`,
    '',
    `A code is covered when a topic has that \`code\` (or lists it in \`codes\`) and both \`<id>.en.mdx\` and \`<id>.ru.mdx\` exist. Codes whose topics are outside the mock (\`no\`) are left out of the percentage. Written by \`npm run coverage -- ${subject}\`; do not edit by hand.`,
    '',
    '| Code | Title (EN) | Papers | In mock scope | Covered by topic | EN+RU MDX |',
    '|---|---|---|---|---|---|',
  ];
  coverage.rows.forEach(row => {
    lines.push(`| ${[
      cell(row.code),
      cell(row.title),
      cell(row.papers.join(', ')),
      row.scope,
      row.topicIds.length > 0 ? cell(row.topicIds.join(', ')) : '—',
      row.hasBodies ? 'yes' : 'no',
    ].join(' | ')} |`);
  });
  return `${lines.join('\n')}\n`;
}
