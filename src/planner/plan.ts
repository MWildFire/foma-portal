// Four concrete daily activities. Workload, quota and the remaining clock window are separate:
// a missing/insufficient budget is a conflict, never permission to overflow or drop a subject.
import { DAILY_PREPARATION, DAILY_SUBJECTS } from '../../data/daily-preparation.ts';
import { eveExams, examEndMs, examStartMs, examsOn, lastExamDate, lastExamOverall } from './calendar.ts';
import { addDays, dubaiEpoch, weekdayOf } from './dates.ts';
import { focusForBlocks } from './focus.ts';
import type { DayBudget, Plan, PlanBlock, PlanDay, PlannerInput } from './types.ts';

export function buildPlan(input: PlannerInput): Plan {
  const { today, state, exams, quotas } = input;
  const firstDate = DAILY_PREPARATION[0].date;
  const lastDate = lastExamOverall(exams) ?? DAILY_PREPARATION.at(-1)!.date;
  const separate = state.settings.accessArrangements.separateRoom;
  const finalEnd = exams.papers.length ? Math.max(...exams.papers.map(exam => examEndMs(exam, exams, separate))) : Infinity;
  const finished = today > lastDate || (input.now ?? dubaiEpoch(today)) >= finalEnd;
  const days: PlanDay[] = [];
  if (!finished) for (const template of DAILY_PREPARATION) {
    const date = template.date;
    if (date < today || date > lastDate) continue;
    const weekday = weekdayOf(date);
    const defaults = quotas.days.find(day => day.date === date);
    const custom = state.settings.dailyLoadMinutes[weekday];
    const dailyQuota = custom ?? defaults?.capacity ?? null;
    const blocks: PlanBlock[] = template.activities.map(activity => {
      const completion = state.blocks[activity.id];
      const last = lastExamDate(exams, activity.subject);
      return {
        id: activity.id, kind: 'practice', subject: activity.subject, date,
        minutes: activity.minutes, status: completion ? 'done' : 'planned',
        ...(completion ? { doneOn: completion } : {}),
        route: activity.route, title: activity.title, topicId: activity.topicId,
        activity, maintenance: !!last && date > last,
      };
    });
    const minutes = blocks.reduce((sum, block) => sum + block.minutes, 0);
    const required = minutes + template.bufferMinutes;
    const completed = blocks.filter(block => block.status === 'done').reduce((sum, block) => sum + block.minutes, 0);
    const remaining = Math.max(0, required - completed);
    const papers = examsOn(exams, date);
    const now = date === today ? (input.now ?? dubaiEpoch(today)) : dubaiEpoch(date);
    // Preparation ends at the final sitting's start. Never promise study during that paper.
    const finalPapers = papers.filter(p => examEndMs(p, exams, separate) === finalEnd);
    const cutoff = Math.min(dubaiEpoch(addDays(date, 1)), ...finalPapers.map(p => examStartMs(p, separate)));
    const windows = papers.map(p => [Math.max(now, examStartMs(p, separate)), Math.min(cutoff, examEndMs(p, exams, separate))])
      .filter(([a, b]) => b > a).sort((a, b) => a[0] - b[0]);
    let cursor = now, blockedMs = 0;
    for (const [a, b] of windows) { blockedMs += Math.max(0, b - Math.max(cursor, a)); cursor = Math.max(cursor, b); }
    const clockLimit = Math.max(0, Math.floor((cutoff - now - blockedMs) / 60_000));
    const available = dailyQuota === null ? null : Math.min(Math.max(0, dailyQuota - completed), clockLimit);
    const roomUnconfirmed = separate && papers.some(p => !p.acc2Start && p.room !== 'ACC2');
    const runningExam = papers.some(p => now >= examStartMs(p, separate) && now < examEndMs(p, exams, separate));
    const budget: DayBudget = {
      dailyQuota, completed, remaining, clockLimit, runningExam, roomUnconfirmed,
      available, required, bufferMinutes: template.bufferMinutes,
      source: custom !== undefined ? 'custom' : defaults ? 'default' : 'missing',
      deficit: available === null ? null : Math.max(0, remaining - available),
      status: available !== null && remaining > available ? 'conflict' : available === null || roomUnconfirmed || custom === undefined ? 'unknown' : 'fits',
    };
    days.push({
      date, weekday, isToday: date === today, kind: papers.length ? 'exam' : 'study',
      capacity: dailyQuota ?? 0, baseCapacity: defaults?.capacity ?? 0,
      minutes, doneMinutes: completed,
      scheduledMinutes: budget.status === 'fits' ? remaining : 0,
      budget, moved: 0, focus: focusForBlocks(blocks), exams: papers,
      eveOf: eveExams(exams, date), blocks, recall: null,
    });
  }
  const currentIds = new Set(days.flatMap(day => day.blocks.map(block => block.id)));
  // Keep legacy completions and previous days visible without rescheduling them as preparation debt.
  const completedHistory = Object.entries(state.blocks)
    .filter(([id]) => !currentIds.has(id))
    .map(([id, block]) => ({ id, date: block }))
    .sort((a, b) => b.date.localeCompare(a.date));
  return { today, firstDate, lastDate, days, debt: [], unplaced: [],
    activeSubjects: finished ? [] : [...DAILY_SUBJECTS], completedHistory };
}
