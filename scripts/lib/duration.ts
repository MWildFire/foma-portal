import { isRecord, list } from './model.ts';

// Minutes from a number (already minutes) or a string such as "1h30", "1h 30m", "2h", "45m", "45".
export function parseDuration(value: unknown): number | null {
  if (typeof value === 'number') return Number.isFinite(value) && value > 0 ? value : null;
  if (typeof value !== 'string') return null;
  const match = /^(?:(\d+)h)?(?:(\d+)(?:m|min)?)?$/.exec(value.trim().toLowerCase().replace(/\s+/g, ''));
  if (!match || (match[1] === undefined && match[2] === undefined)) return null;
  const minutes = Number(match[1] || 0) * 60 + Number(match[2] || 0);
  return minutes > 0 ? minutes : null;
}

export interface ExamPaper {
  id: string;
  subject: string;
  paper: string;
  part?: string;
  minutes: number;
}

export interface ExamsRead { papers: ExamPaper[]; problems: string[] }

// data/exams.json lists papers as { id, subject, paper, part?, minutes, ... } with the subject id already filled in
// (geo, math, econ, cs, eng, fr), so no name-to-subject mapping is needed. `minutes` may be a number or "1h30".
export function readExamPapers(json: unknown): ExamsRead {
  const papers: ExamPaper[] = [];
  const problems: string[] = [];
  const entries = isRecord(json) ? list(json.papers as unknown[]) : [];
  if (entries.length === 0) problems.push('no "papers" array found');
  entries.forEach((entry, index) => {
    const row = isRecord(entry) ? entry : {};
    const minutes = parseDuration(row.minutes ?? row.duration);
    const label = typeof row.id === 'string' ? row.id : `papers[${index}]`;
    if (typeof row.subject !== 'string' || typeof row.paper !== 'string' || minutes === null) {
      problems.push(`${label}: needs "subject", "paper" and a duration in "minutes"`);
      return;
    }
    papers.push({
      id: label,
      subject: row.subject,
      paper: row.paper,
      part: typeof row.part === 'string' ? row.part : undefined,
      minutes,
    });
  });
  return { papers, problems };
}

export interface GuideKey { subject: string; paper: string; part?: string }

export type ExamMatch =
  | { kind: 'single'; exam: ExamPaper }
  | { kind: 'parts'; exams: ExamPaper[]; total: number }   // the paper is sat in parts and the guide names none
  | { kind: 'none'; known: string[] };                      // not listed (known = the parts that are listed)

// Finds the exam of data/exams.json that a PaperGuide describes.
export function matchExam(papers: ExamPaper[], guide: GuideKey): ExamMatch {
  const sameExam = papers.filter(exam => exam.subject === guide.subject && exam.paper === guide.paper);
  if (sameExam.length === 0) return { kind: 'none', known: [] };
  const part = (guide.part || '').trim().toLowerCase();
  if (part) {
    const found = sameExam.filter(exam => (exam.part || '').toLowerCase() === part)[0];
    return found ? { kind: 'single', exam: found } : { kind: 'none', known: sameExam.map(exam => exam.part || '(whole paper)') };
  }
  if (sameExam.length === 1) return { kind: 'single', exam: sameExam[0] };
  return { kind: 'parts', exams: sameExam, total: sameExam.reduce((sum, exam) => sum + exam.minutes, 0) };
}
