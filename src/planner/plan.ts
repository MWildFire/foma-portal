// The study planner (PLAN.md §5). A pure function: calendar, quotas, topics, progress and "today" go in, the plan comes out.
//
// How a recalculation works
//  - Days before today are frozen. They are not returned; only their leftovers matter: the regular minutes nobody
//    did (the "debt") and the timed papers nobody sat. Both move to the nearest later day of that subject's quota.
//  - Today's list is computed from the state at the start of today, so ticking blocks off never reshuffles it.
//    Later days are projected on the assumption that everything planned before them gets done.
//  - From today on, every day starts from the quotas file. The quota of a subject is filled with first-pass slices
//    of the topic queue (25 minutes each), then practice of studied topics (red first), then the day's timed paper.
//  - A day may take over moved work only up to 115% of its capacity.
//  - A subject is not planned on or after its last exam. On the eve of its exam only that exam's papers are planned.
import type { PaperId, SubjectId } from '../contract/types.ts';
import type {
  BlockKind, ExamPaper, Plan, PlanBlock, PlanDay, PlannerInput, PlannerTopic, QuotaDay, RecallInfo, TimedEntry, Unplaced, Weekday,
} from './types.ts';
import type { Interval } from './queue.ts';
// The .ts extensions are what Node's test runner needs.
import { ROUTES } from '../config/routes.ts';
import { addDays, dateRange, weekdayOf } from './dates.ts';
import { EXAM_EVENING_MINUTES, SUBJECT_IDS, examsOn, extendedMinutes, lastExamDate, lastExamOverall, sittingPapers } from './calendar.ts';
import { paperBlockId, parseBlockId, practiceBlockId, recallBlockId, studyBlockId, timedBlockId, topicBlockId } from './blocks.ts';
import { UNIT_MINUTES, addInterval, effectiveMinutes, firstGap, isCovered, topicQueue } from './queue.ts';
import { buildRecall } from './recall.ts';
import { shareFairly } from './share.ts';

const STEP = 5;                 // all quotas and slices are multiples of 5 minutes
const OVERLOAD = 1.15;          // a day may exceed its capacity by at most 15%
const ceil5 = (minutes: number): number => Math.ceil(minutes / STEP) * STEP;
const floor5 = (minutes: number): number => Math.floor(minutes / STEP) * STEP;

const KIND_RANK: Record<BlockKind, number> = { recall: 0, topic: 1, practice: 2, study: 3, paper: 4, timed: 5 };
const RAG_RANK = { red: 0, amber: 1, none: 2, green: 3 } as const;

// ---------------------------------------------------------------------------------------------
// Internal shapes
// ---------------------------------------------------------------------------------------------

interface Alloc {
  subject: SubjectId;
  flex: number;                 // regular minutes: the quota minus the timed papers, scaled by the load setting
  timed: TimedEntry[];          // timed papers the quotas file plans for this subject on this day
}

interface DayBase {
  date: string;
  weekday: Weekday;
  examDay: boolean;
  rest: boolean;                // no study time at all (capacity 0)
  exams: ExamPaper[];
  eve: ExamPaper[];
  baseCapacity: number;
  capacity: number;
  recall: number;
  focus: string | null;
  order: SubjectId[];
  allocs: Map<SubjectId, Alloc>;
}

interface TimedItem {
  entry: TimedEntry;
  from: string;                 // the day the quotas file planned it
  id: string;
}

interface TopicRun {
  topic: PlannerTopic;
  key: string;                  // `${subject}/${topicId}`
  index: number;                // position in the queue
  total: number;                // first-pass minutes, a multiple of 5
  covered: Interval[];          // finished before today, or already planned by the days processed so far
  before: Interval[];           // finished before today
  rounds: number;               // highest practice round used so far
  lastPractice: string;
  studied: boolean;             // first pass finished before the day being planned
}

interface Slot {
  subject: SubjectId;
  sitting: ExamPaper[];         // papers of this subject sitting tomorrow: the day is their eve
  items: TimedItem[];
  flex: number;
  extra: number;                // moved work taken over from earlier days
}

// ---------------------------------------------------------------------------------------------

export function buildPlan(input: PlannerInput): Plan {
  const { today, exams, quotas, state } = input;
  const settings = state.settings;
  const extraTime = settings.accessArrangements.extraTime;
  const ext = (minutes: number): number => (extraTime ? extendedMinutes(exams, minutes) : minutes);

  const lastOverall = lastExamOverall(exams);
  const firstDate = quotas.start || exams.papers[0]?.date || today;
  const lastDate = [quotas.end, lastOverall ?? ''].reduce((a, b) => (b > a ? b : a), firstDate);
  const startDay = today > firstDate ? today : firstDate;

  const universe = new Set<SubjectId>(input.subjects.map(s => s.id));
  for (const exam of exams.papers) universe.add(exam.subject);
  for (const day of quotas.days) for (const subject of day.subjectOrder) universe.add(subject);
  const allSubjects = SUBJECT_IDS.filter(subject => universe.has(subject));
  const lastExamOf = new Map<SubjectId, string | null>(allSubjects.map(subject => [subject, lastExamDate(exams, subject)]));
  const isActiveOn = (subject: SubjectId, date: string): boolean => {
    const last = lastExamOf.get(subject) ?? null;
    return last === null || date < last;
  };
  const activeOn = (date: string): SubjectId[] => allSubjects.filter(subject => isActiveOn(subject, date));
  // A timed paper is only worth moving while a sitting of that paper is still ahead of the day it would land on.
  const paperAhead = (subject: SubjectId, paper: PaperId, date: string): boolean => {
    const sittings = exams.papers.filter(exam => exam.subject === subject && exam.paper === paper);
    return sittings.length === 0 || sittings.some(exam => exam.date > date);
  };

  const quotaByDate = new Map<string, QuotaDay>(quotas.days.map(day => [day.date, day]));
  const doneEntries = Object.entries(state.blocks);

  // -------------------------------------------------------------------------------------------
  // The calendar of one day: capacity, exams and the subjects' allocations
  // -------------------------------------------------------------------------------------------

  function allocate(qd: QuotaDay, capacity: number, recall: number, scale: boolean): Map<SubjectId, Alloc> {
    const subjects: SubjectId[] = [...qd.subjectOrder];
    for (const entry of qd.timed) if (!subjects.includes(entry.subject)) subjects.push(entry.subject);
    const rows = subjects.map(subject => {
      const timed = qd.timed.filter(entry => entry.subject === subject);
      const nominal = timed.reduce((sum, entry) => sum + entry.minutes, 0);
      const actual = timed.reduce((sum, entry) => sum + ext(entry.minutes), 0);
      const quota = Math.max(qd.quota[subject] ?? 0, nominal);
      return { subject, timed, actual, flex: Math.max(0, quota - ceil5(actual)) };
    });
    let flexOf = new Map<SubjectId, number>(rows.map(row => [row.subject, row.flex]));
    if (scale) {
      // The load setting replaces the day's capacity. Timed papers keep their length; the regular work is scaled in proportion.
      const timedTotal = rows.reduce((sum, row) => sum + row.actual, 0);
      const units = Math.max(0, Math.floor((capacity - recall - timedTotal) / STEP));
      const shares = shareFairly(units, rows.map(row => ({ key: row.subject, wants: Infinity, weight: row.flex })));
      flexOf = new Map(rows.map(row => [row.subject, (shares.get(row.subject) ?? 0) * STEP]));
    }
    return new Map(rows.map(row => [row.subject, { subject: row.subject, flex: flexOf.get(row.subject) ?? 0, timed: row.timed }]));
  }

  function dayBase(date: string): DayBase {
    const qd = quotaByDate.get(date);
    const dayExams = examsOn(exams, date);
    const examDay = dayExams.length > 0 || qd?.examDay === true;
    const weekday = weekdayOf(date);
    const baseCapacity = qd ? qd.capacity : examDay ? EXAM_EVENING_MINUTES : 0;
    const override = settings.dailyLoadMinutes[weekday];
    // Exam days keep the evening capacity from the schedule; the weekday setting is for ordinary days.
    const scale = qd !== undefined && !examDay && override !== undefined;
    const capacity = scale ? (override as number) : baseCapacity;
    const rest = capacity <= 0;
    const recall = qd && !rest ? Math.min(qd.recall, capacity) : 0;
    return {
      date,
      weekday,
      examDay,
      rest,
      exams: dayExams,
      eve: examsOn(exams, addDays(date, 1)),
      baseCapacity,
      capacity,
      recall,
      focus: qd && qd.focus ? qd.focus : null,
      order: qd ? [...new Set<SubjectId>([...qd.subjectOrder, ...qd.timed.map(entry => entry.subject)])] : [],
      allocs: qd && !rest ? allocate(qd, capacity, recall, scale) : new Map(),
    };
  }

  // -------------------------------------------------------------------------------------------
  // Leftovers of the frozen days: debt (regular minutes) and timed papers that were not sat
  // -------------------------------------------------------------------------------------------

  const debt = new Map<SubjectId, number>();
  const carried = new Map<SubjectId, TimedItem[]>();   // timed papers waiting for a day that can take them

  const timedItem = (date: string, entry: TimedEntry): TimedItem => ({ entry, from: date, id: timedBlockId(date, entry.subject, entry.paper) });
  const carry = (subject: SubjectId, item: TimedItem): void => {
    const list = carried.get(subject) ?? [];
    list.push(item);
    carried.set(subject, list);
  };

  if (today > firstDate) {
    const planned = new Map<SubjectId, number>();
    for (const date of dateRange(firstDate, addDays(today, -1))) {
      const base = dayBase(date);
      if (base.rest) {
        // A rest day never had a plan, so its timed papers are still owed.
        for (const entry of quotaByDate.get(date)?.timed ?? []) {
          if (isActiveOn(entry.subject, today) && paperAhead(entry.subject, entry.paper, today)) carry(entry.subject, timedItem(date, entry));
        }
        continue;
      }
      for (const subject of base.order) {
        const alloc = base.allocs.get(subject);
        if (!alloc || !isActiveOn(subject, date) || !isActiveOn(subject, today)) continue;
        if (sittingPapers(exams, subject, addDays(date, 1)).length === 0) {
          planned.set(subject, (planned.get(subject) ?? 0) + alloc.flex);
        }
        for (const entry of alloc.timed) {
          const item = timedItem(date, entry);
          const doneOn = state.blocks[item.id];
          if ((doneOn === undefined || doneOn >= today) && paperAhead(subject, entry.paper, today)) carry(subject, item);
        }
      }
    }
    const done = new Map<SubjectId, number>();
    for (const [id, doneOn] of doneEntries) {
      if (doneOn >= today) continue;
      const parsed = parseBlockId(id);
      if (parsed && (parsed.kind === 'topic' || parsed.kind === 'practice' || parsed.kind === 'study')) {
        done.set(parsed.subject, (done.get(parsed.subject) ?? 0) + parsed.len);
      }
    }
    for (const subject of allSubjects) {
      const owed = Math.max(0, (planned.get(subject) ?? 0) - (done.get(subject) ?? 0));
      if (owed >= STEP) debt.set(subject, owed);
    }
  }
  const initialDebt = allSubjects.filter(subject => (debt.get(subject) ?? 0) > 0).map(subject => ({ subject, minutes: debt.get(subject) ?? 0 }));

  // -------------------------------------------------------------------------------------------
  // Topics: first-pass progress per topic, as it stood before today
  // -------------------------------------------------------------------------------------------

  const runsBySubject = new Map<SubjectId, TopicRun[]>();
  const runByKey = new Map<string, TopicRun>();
  for (const subject of input.subjects) {
    const runs: TopicRun[] = topicQueue(subject.topics).map((topic, index) => ({
      topic,
      key: `${subject.id}/${topic.id}`,
      index,
      total: effectiveMinutes(topic.minutes),
      covered: [],
      before: [],
      rounds: 0,
      lastPractice: '',
      studied: false,
    }));
    runsBySubject.set(subject.id, runs);
    for (const run of runs) runByKey.set(run.key, run);
  }

  // Work finished today is not part of the starting state: it is shown as done in the list that was planned without it.
  for (const [id, doneOn] of doneEntries) {
    const parsed = parseBlockId(id);
    if (!parsed || (parsed.kind !== 'topic' && parsed.kind !== 'practice') || doneOn >= startDay) continue;
    const run = runByKey.get(`${parsed.subject}/${parsed.topicId}`);
    if (!run) continue;
    if (parsed.kind === 'topic') {
      run.covered = addInterval(run.covered, parsed.start, parsed.start + parsed.len);
      run.before = addInterval(run.before, parsed.start, parsed.start + parsed.len);
    } else {
      run.rounds = Math.max(run.rounds, parsed.seq);
      if (doneOn > run.lastPractice) run.lastPractice = doneOn;
    }
  }

  const pageDoneToday: TopicRun[] = [];      // marked done on their own page today
  for (const runs of runsBySubject.values()) {
    for (const run of runs) {
      const marked = state.topics[run.key]?.done;
      if (typeof marked === 'string' && marked) {
        if (marked < startDay) {
          run.before = addInterval(run.before, 0, run.total);
          run.covered = addInterval(run.covered, 0, run.total);
        } else {
          pageDoneToday.push(run);
        }
      }
      run.studied = isCovered(run.before, run.total);
    }
  }

  // -------------------------------------------------------------------------------------------
  // Blocks
  // -------------------------------------------------------------------------------------------

  const ragOf = (subject: SubjectId, topicId: string) => state.topics[`${subject}/${topicId}`]?.rag;
  const practiceRoute = (subject: SubjectId, topic: PlannerTopic | undefined): string =>
    topic && topic.questionCount > 0
      ? `${ROUTES.practice(subject)}?topic=${encodeURIComponent(topic.id)}`
      : topic ? ROUTES.topic(subject, topic.id) : ROUTES.practice(subject);

  const doneStatus = (id: string, moved = false): Pick<PlanBlock, 'status' | 'doneOn'> => {
    const doneOn = state.blocks[id];
    if (doneOn !== undefined) return { status: 'done', doneOn };
    return { status: moved ? 'moved' : 'planned' };
  };

  function topicBlock(subject: SubjectId, run: TopicRun | undefined, topicId: string, date: string, start: number, len: number, moved: boolean): PlanBlock {
    const id = topicBlockId(subject, topicId, start, len);
    const total = run?.total;
    let status = doneStatus(id, moved);
    // A topic ticked off on its own page today finishes the slices that were planned for today.
    const pageDone = state.topics[`${subject}/${topicId}`]?.done;
    if (status.status !== 'done' && date === today && typeof pageDone === 'string' && pageDone >= today) status = { status: 'done', doneOn: pageDone };
    return {
      id,
      kind: 'topic',
      subject,
      date,
      minutes: len,
      ...status,
      route: ROUTES.topic(subject, topicId),
      topicId,
      title: run?.topic.title ?? { en: topicId, ru: topicId },
      start,
      last: total !== undefined && start + len >= total,
      totalMinutes: total,
      rag: ragOf(subject, topicId),
      ready: run?.topic.ready ?? { en: false, ru: false },
      links: run?.topic.links ?? [],
    };
  }

  function practiceBlock(subject: SubjectId, run: TopicRun | undefined, topicId: string, date: string, seq: number, len: number, moved = false): PlanBlock {
    const id = practiceBlockId(subject, topicId, seq, len);
    return {
      id,
      kind: 'practice',
      subject,
      date,
      minutes: len,
      ...doneStatus(id, moved),
      route: practiceRoute(subject, run?.topic),
      topicId,
      title: run?.topic.title ?? { en: topicId, ru: topicId },
      rag: ragOf(subject, topicId),
      ready: run?.topic.ready ?? { en: false, ru: false },
      links: run?.topic.links ?? [],
      hasQuestions: (run?.topic.questionCount ?? 0) > 0,
    };
  }

  function studyBlock(subject: SubjectId, date: string, seq: number, len: number, moved = false): PlanBlock {
    const id = studyBlockId(subject, date, seq, len);
    return { id, kind: 'study', subject, date, minutes: len, ...doneStatus(id, moved), route: ROUTES.subject(subject) };
  }

  // Blocks finished today that today's list does not contain (the plan changed since they were done) still show as done.
  const todayLeftovers: PlanBlock[] = [];
  if (today >= startDay && today <= lastDate) {
    for (const [id, doneOn] of doneEntries) {
      if (doneOn < today) continue;
      const parsed = parseBlockId(id);
      if (!parsed || parsed.kind === 'recall' || parsed.kind === 'paper' || parsed.kind === 'timed' || !isActiveOn(parsed.subject, today)) continue;
      if (parsed.kind === 'topic') todayLeftovers.push(topicBlock(parsed.subject, runByKey.get(`${parsed.subject}/${parsed.topicId}`), parsed.topicId, today, parsed.start, parsed.len, false));
      else if (parsed.kind === 'practice') todayLeftovers.push(practiceBlock(parsed.subject, runByKey.get(`${parsed.subject}/${parsed.topicId}`), parsed.topicId, today, parsed.seq, parsed.len));
      else todayLeftovers.push(studyBlock(parsed.subject, today, parsed.seq, parsed.len));
    }
  }

  // -------------------------------------------------------------------------------------------
  // Filling a subject's regular minutes
  // -------------------------------------------------------------------------------------------

  // Red topics first, then the ones practised least and longest ago. Finished practice from today is not counted
  // (see above), so ticking a block off cannot reshuffle the list.
  const practiceOrder = (a: TopicRun, b: TopicRun): number => {
    const rag = (run: TopicRun): number => RAG_RANK[ragOf(run.topic.subject, run.topic.id) ?? 'none'];
    return rag(a) - rag(b)
      || a.rounds - b.rounds
      || (a.lastPractice < b.lastPractice ? -1 : a.lastPractice > b.lastPractice ? 1 : 0)
      || a.index - b.index;
  };

  function fillRegular(subject: SubjectId, date: string, target: number, moved: number): PlanBlock[] {
    const out: PlanBlock[] = [];
    const runs = runsBySubject.get(subject) ?? [];
    let left = floor5(target);
    let used = 0;
    const isMoved = (len: number): boolean => {
      const flag = used < moved;
      used += len;
      return flag;
    };

    // 1. First pass of the topic queue, in slices of at most one Pomodoro.
    for (const run of runs) {
      while (left >= STEP) {
        const gap = firstGap(run.covered, run.total);
        if (!gap) break;
        let len = Math.min(UNIT_MINUTES, gap[1] - gap[0], left);
        if (len < 1) break;
        // Never leave a 5-minute stub of a topic behind when the quota has room to finish it in this block.
        const stub = gap[1] - gap[0] - len;
        if (stub > 0 && stub < 2 * STEP && left - len >= stub) len += stub;
        out.push(topicBlock(subject, run, run.topic.id, date, gap[0], len, isMoved(len)));
        run.covered = addInterval(run.covered, gap[0], gap[0] + len);
        left -= len;
      }
      if (left < STEP) break;
    }

    // 2. Practice of the topics studied on earlier days, red ones first.
    const pool = runs.filter(run => run.studied).sort(practiceOrder);
    for (let turn = 0; left >= STEP && pool.length > 0; turn++) {
      const run = pool[turn % pool.length];
      const len = Math.min(UNIT_MINUTES, left);
      run.rounds += 1;
      run.lastPractice = date;
      out.push(practiceBlock(subject, run, run.topic.id, date, run.rounds, len, isMoved(len)));
      left -= len;
    }

    // 3. A subject with no topics yet still gets its time, as free study on the subject page.
    for (let seq = 1; left >= STEP; seq++) {
      const len = Math.min(UNIT_MINUTES, left);
      out.push(studyBlock(subject, date, seq, len, isMoved(len)));
      left -= len;
    }
    return out;
  }

  // -------------------------------------------------------------------------------------------
  // Timed papers and exam-eve preparation
  // -------------------------------------------------------------------------------------------

  const timedBlock = (subject: SubjectId, date: string, item: TimedItem): PlanBlock => {
    const exam = exams.papers.find(paper => paper.subject === subject && paper.paper === item.entry.paper);
    const movedFrom = item.from !== date ? item.from : undefined;
    return {
      id: item.id,
      kind: 'timed',
      subject,
      date,
      minutes: ext(item.entry.minutes),
      ...doneStatus(item.id, movedFrom !== undefined),
      route: ROUTES.paper(subject, item.entry.paper),
      paper: item.entry.paper,
      examId: exam?.id,
      note: item.entry.note,
      ...(movedFrom !== undefined ? { movedFrom } : {}),
    };
  };

  // Preparation for the papers sitting tomorrow, split in proportion to their length.
  function paperBlocks(subject: SubjectId, date: string, minutes: number, sitting: ExamPaper[]): PlanBlock[] {
    const shares = shareFairly(Math.floor(minutes / STEP), sitting.map(exam => ({ key: exam.id, wants: Infinity, weight: exam.minutes })));
    const out: PlanBlock[] = [];
    for (const exam of sitting) {
      const len = (shares.get(exam.id) ?? 0) * STEP;
      if (len <= 0) continue;
      const id = paperBlockId(date, exam.id);
      out.push({
        id, kind: 'paper', subject, date, minutes: len, ...doneStatus(id), route: ROUTES.paper(subject, exam.paper),
        paper: exam.paper, examId: exam.id, ...(exam.part ? { part: exam.part } : {}),
      });
    }
    return out;
  }

  // -------------------------------------------------------------------------------------------
  // One day
  // -------------------------------------------------------------------------------------------

  function planDay(date: string): PlanDay {
    const base = dayBase(date);
    const isToday = date === today;
    const active = activeOn(date);
    const blocks: PlanBlock[] = [];
    let planned = 0;
    let moved = 0;                  // exact minutes taken over from earlier days (blocks that carry them are marked "moved")

    let recallBlock: PlanBlock | null = null;
    if (base.recall > 0 && active.length > 0) {
      const id = recallBlockId(date);
      recallBlock = { id, kind: 'recall', subject: null, date, minutes: base.recall, ...doneStatus(id), route: active[0] ? ROUTES.flashcards(active[0]) : ROUTES.today() };
      planned += base.recall;
    }

    // A rest day has no plan, so the timed papers the quotas file put there are still owed.
    if (base.rest) {
      for (const entry of quotaByDate.get(date)?.timed ?? []) {
        if (isActiveOn(entry.subject, date) && paperAhead(entry.subject, entry.paper, date)) carry(entry.subject, timedItem(date, entry));
      }
    }

    // Phase 1: timed papers (planned, displaced by an exam eve, or moved from earlier) and the regular minutes left.
    const slots = new Map<SubjectId, Slot>();
    for (const subject of base.order) {
      const alloc = base.allocs.get(subject);
      if (!alloc || !isActiveOn(subject, date)) continue;
      const sitting = sittingPapers(exams, subject, addDays(date, 1));
      const eve = sitting.length > 0;
      const sits = (entry: TimedEntry): boolean => sitting.some(paper => paper.paper === entry.paper);
      let flex = alloc.flex;
      const items: TimedItem[] = [];

      const stillWaiting: TimedItem[] = [];
      for (const item of carried.get(subject) ?? []) {
        if (!paperAhead(subject, item.entry.paper, date)) continue;   // the paper has been sat: nothing left to move
        const need = ceil5(ext(item.entry.minutes));
        const finishedToday = state.blocks[item.id] !== undefined;
        if ((!eve || sits(item.entry)) && (finishedToday || flex >= need)) {
          items.push(item);
          moved += ext(item.entry.minutes);
          const swapped = Math.min(flex, need);   // the paper takes the place of regular work
          flex -= swapped;
          if (!eve) debt.set(subject, (debt.get(subject) ?? 0) + swapped);
        } else {
          stillWaiting.push(item);
        }
      }
      for (const entry of alloc.timed) {
        const item = timedItem(date, entry);
        if (eve && !sits(entry)) {
          flex += ceil5(ext(entry.minutes));     // its minutes go back to the paper preparation of the day
          if (paperAhead(subject, entry.paper, date)) stillWaiting.push(item);
        } else {
          items.push(item);
        }
      }
      carried.set(subject, stillWaiting);

      planned += items.reduce((sum, item) => sum + ext(item.entry.minutes), 0) + flex;
      slots.set(subject, { subject, sitting, items, flex, extra: 0 });
    }

    // Phase 2: moved work, within 115% of the capacity, shared fairly between the subjects that owe time.
    if (!base.rest) {
      const room = Math.floor(Math.max(0, Math.floor(base.capacity * OVERLOAD) - planned) / STEP);
      const claims = [...slots.values()]
        .filter(slot => slot.sitting.length === 0 && (debt.get(slot.subject) ?? 0) >= STEP)
        .map(slot => ({ key: slot.subject, wants: Math.floor((debt.get(slot.subject) ?? 0) / STEP), weight: 1 }));
      if (room > 0 && claims.length > 0) {
        for (const [key, units] of shareFairly(room, claims)) {
          const slot = slots.get(key as SubjectId);
          if (!slot || units <= 0) continue;
          slot.extra = units * STEP;
          debt.set(slot.subject, (debt.get(slot.subject) ?? 0) - slot.extra);
          planned += slot.extra;
          moved += slot.extra;
        }
      }
    }

    // Phase 3: the blocks.
    for (const slot of slots.values()) {
      const own: PlanBlock[] = slot.items.map(item => timedBlock(slot.subject, date, item));
      if (slot.sitting.length > 0) {
        own.push(...paperBlocks(slot.subject, date, slot.flex, slot.sitting));
      } else {
        const regular = fillRegular(slot.subject, date, slot.flex + slot.extra, slot.extra);
        own.push(...regular);
        if (isToday) {
          const ids = new Set(regular.map(block => block.id));
          own.push(...todayLeftovers.filter(block => block.subject === slot.subject && !ids.has(block.id)));
        }
      }
      own.sort((a, b) => KIND_RANK[a.kind] - KIND_RANK[b.kind]
        || (a.kind === 'topic' ? (runByKey.get(`${a.subject}/${a.topicId}`)?.index ?? 1e9) - (runByKey.get(`${b.subject}/${b.topicId}`)?.index ?? 1e9) || (a.start ?? 0) - (b.start ?? 0) : 0));
      blocks.push(...own);
    }
    if (recallBlock) blocks.unshift(recallBlock);

    let recall: RecallInfo | null = null;
    if (isToday && recallBlock) {
      recall = buildRecall({ date, minutes: base.recall, subjects: input.subjects, active, state });
      const lead = recall.subjects[0]?.subject;
      if (lead) recallBlock.route = ROUTES.flashcards(lead);
    }

    return {
      date,
      weekday: base.weekday,
      isToday,
      kind: base.rest ? 'rest' : base.examDay ? 'exam' : 'study',
      capacity: base.capacity,
      baseCapacity: base.baseCapacity,
      minutes: blocks.reduce((sum, block) => sum + block.minutes, 0),
      doneMinutes: blocks.reduce((sum, block) => sum + (block.status === 'done' ? block.minutes : 0), 0),
      moved,
      focus: base.focus,
      exams: base.exams,
      eveOf: base.eve,
      blocks,
      recall,
    };
  }

  // After today is planned, what the student already did today counts as progress for the days that follow.
  function applyTodaysProgress(): void {
    for (const [id, doneOn] of doneEntries) {
      if (doneOn < today) continue;
      const parsed = parseBlockId(id);
      if (!parsed || (parsed.kind !== 'topic' && parsed.kind !== 'practice')) continue;
      const run = runByKey.get(`${parsed.subject}/${parsed.topicId}`);
      if (!run) continue;
      if (parsed.kind === 'topic') run.covered = addInterval(run.covered, parsed.start, parsed.start + parsed.len);
      else run.rounds = Math.max(run.rounds, parsed.seq);
    }
    for (const run of pageDoneToday) run.covered = addInterval(run.covered, 0, run.total);
  }

  const days: PlanDay[] = [];
  if (startDay <= lastDate) {
    for (const date of dateRange(startDay, lastDate)) {
      days.push(planDay(date));
      if (date === today) applyTodaysProgress();
      // The day is over: topics whose first pass is complete can be practised from tomorrow on.
      for (const runs of runsBySubject.values()) for (const run of runs) if (isCovered(run.covered, run.total)) run.studied = true;
    }
  }

  const unplaced: Unplaced[] = [];
  for (const subject of allSubjects) {
    const minutes = debt.get(subject) ?? 0;
    const timed = (carried.get(subject) ?? []).filter(item => state.blocks[item.id] === undefined).map(item => ({ paper: item.entry.paper, from: item.from }));
    if (minutes >= STEP || timed.length > 0) unplaced.push({ subject, minutes: Math.max(0, minutes), timed });
  }

  return {
    today,
    firstDate: startDay <= lastDate ? startDay : firstDate,
    lastDate,
    days,
    debt: initialDebt,
    unplaced,
    activeSubjects: activeOn(today),
  };
}
