// Collects validation findings and prints them. Errors fail the run (exit code 1); warnings and info lines do not.

export type Severity = 'error' | 'warning' | 'info';

// Short name of the rule that produced a finding (printed in brackets, easy to grep).
export type Rule =
  | 'load'
  | 'ids'
  | 'refs'
  | 'mdx-files'
  | 'mdx-syntax'
  | 'mdx-structure'
  | 'mdx-parity'
  | 'language'
  | 'placeholder'
  | 'source'
  | 'katex'
  | 'question'
  | 'duration'
  | 'timed-set'
  | 'sims'
  | 'stats'
  | 'internal';

export interface Pos { file?: string; line?: number }

export interface Issue extends Pos {
  severity: Severity;
  subject: string;
  rule: Rule;
  message: string;
}

export interface Report {
  issues: Issue[];
  error(subject: string, rule: Rule, message: string, pos?: Pos): void;
  warn(subject: string, rule: Rule, message: string, pos?: Pos): void;
  info(subject: string, rule: Rule, message: string, pos?: Pos): void;
}

export function createReport(): Report {
  const issues: Issue[] = [];
  const add = (severity: Severity) => (subject: string, rule: Rule, message: string, pos?: Pos): void => {
    issues.push({ severity, subject, rule, message, file: pos?.file, line: pos?.line });
  };
  return { issues, error: add('error'), warn: add('warning'), info: add('info') };
}

export function countBySeverity(issues: Issue[]): { errors: number; warnings: number } {
  return {
    errors: issues.filter(issue => issue.severity === 'error').length,
    warnings: issues.filter(issue => issue.severity === 'warning').length,
  };
}

const LABEL: Record<Severity, string> = { error: 'ERROR', warning: 'WARN', info: 'info' };

// "content/geo/terms/a.ts:12: ERROR [refs] message" — the file:line prefix is clickable in most terminals and editors.
export function formatIssue(issue: Issue): string {
  const where = issue.file ? `${issue.file}${issue.line ? `:${issue.line}` : ''}` : issue.subject || 'general';
  return `${where}: ${LABEL[issue.severity]} [${issue.rule}] ${issue.message}`;
}

// Info lines first (context), then errors, then warnings; keeps the order in which rules found things inside a group.
export function renderReport(issues: Issue[], subjects: string[]): string[] {
  const rank: Record<Severity, number> = { info: 0, error: 1, warning: 2 };
  const groups = [''].concat(subjects);
  const lines: string[] = [];
  groups.forEach(group => {
    const own = issues.filter(issue => issue.subject === group);
    own
      .map((issue, index) => ({ issue, index }))
      .sort((a, b) => rank[a.issue.severity] - rank[b.issue.severity] || a.index - b.index)
      .forEach(entry => lines.push(formatIssue(entry.issue)));
  });
  return lines;
}

export function plural(count: number, word: string, pluralWord = `${word}s`): string {
  return `${count} ${count === 1 ? word : pluralWord}`;
}
