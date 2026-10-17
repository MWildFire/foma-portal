import { Link } from 'react-router-dom';
import type { DailyActivity } from '../../../data/daily-preparation';
import type { Lang } from '../../contract/types';
import type { Plan, PlanDay } from '../../planner/types';
import { CARD, MUTED } from './ui';

export function ActivityDetails({ activity: a, maintenance, lang }: { activity: DailyActivity; maintenance?: boolean; lang: Lang }) {
  const ru = lang === 'ru';
  return <div className="mt-2 space-y-2 break-words text-sm" data-daily-task={a.id}>
    <p className={MUTED}>{maintenance ? (ru ? 'Закрепление после экзамена · ' : 'Consolidation after the exam · ') : ''}
      {a.priority === 'recall' ? (ru ? 'Вспомнить без подсказки' : 'Recall without notes') : (ru ? 'Самостоятельная практика' : 'Independent practice')}</p>
    {a.timedMinutes && <p className="font-medium">{ru
      ? `${a.timedMinutes} мин по таймеру + ${a.minutes - a.timedMinutes} мин на чтение/выбор и проверку по этапам ниже. Кнопка «Начать» запускает только работу по таймеру; проверку выполните после неё.`
      : `${a.timedMinutes} min timed + ${a.minutes - a.timedMinutes} min reading/selection and review as itemised below. Start runs the timed work only; review your answers afterwards.`}</p>}
    <ol className="list-decimal space-y-2 pl-5">{a.stages.map((stage, index) => <li key={index}><strong>{stage.minutes} {ru ? 'мин' : 'min'}.</strong> {stage.text[lang]}</li>)}</ol>
    <p>{ru ? 'Материалы: ' : 'Lessons: '}{a.relatedTopicIds.map((id, index) => <span key={id}>{index ? ' · ' : ''}<Link to={`/s/${a.subject}/t/${id}`}>{id}</Link></span>)}</p>
    <p><strong>{ru ? 'Результат: ' : 'Outcome: '}</strong>{a.expectedOutcome[lang]}</p>
    {a.scopeNote && <p role="note" className={MUTED}>{a.scopeNote[lang]}</p>}
    <details><summary className="cursor-pointer py-2 font-medium">{ru ? 'Самопроверка — после своего ответа' : 'Self-check — after your own answer'}</summary><p className="pt-1">{a.selfCheck[lang]}</p>{a.transferCheck && <p>{a.transferCheck[lang]}</p>}</details>
    <details><summary className="cursor-pointer py-2 font-medium">{ru ? 'Дополнительно 15 минут — если есть время' : 'Optional 15 minutes — if time permits'}</summary><p>{a.extension[lang]}</p></details>
  </div>;
}

export function DailyBudget({ day, lang }: { day: PlanDay; lang: Lang }) {
  const b = day.budget, ru = lang === 'ru';
  return <div role="note" data-budget-status={b.status} className={`${CARD} space-y-1 p-3 text-sm`}>
    <p className="font-medium">{ru ? `Самостоятельная работа: ${day.minutes} мин. Выполнено ${b.completed}; осталось ${b.remaining} мин.` : `Self-study: ${day.minutes} min. Completed: ${b.completed}; remaining: ${b.remaining} min.`}</p>
    <p>{ru ? 'Цель: 240 минут ежедневно и до 60 дополнительных. Репетиторы и перерывы в эти минуты не входят.' : 'Target: 240 minutes every day, plus up to 60 optional minutes. Tutors and breaks are excluded.'}</p>
    <p>{ru ? `Суточная квота: ${b.dailyQuota ?? '—'} мин. Верхний предел оставшегося окна по часам: ${b.clockLimit} мин.` : `Daily quota: ${b.dailyQuota ?? '—'} min. Remaining clock-window ceiling: ${b.clockLimit} min.`}</p>
    <p>{b.available === null
      ? (ru ? 'Доступное время не задано. Совместимость с расписанием не подтверждена.' : 'Available time is unset. The schedule cannot yet be confirmed.')
      : (ru ? `Остаётся не более ${b.available} мин в пределах квоты и часов. ${b.deficit ? `Не хватает ${b.deficit} мин.` : 'Часовой предел не превышен; проверь личное расписание.'}` : `At most ${b.available} min remain within quota and clock limits. ${b.deficit ? `Shortfall: ${b.deficit} min.` : 'Within the clock ceiling; check your personal schedule.'}`)}</p>
    <p className={MUTED}>{ru ? 'Это верхняя граница, а не обещание свободного времени. Учти школу, репетиторов, дорогу, сон и перерывы в настройках. Прошедшие часы и время экзаменов исключены; на последний день подготовка ограничена началом последней работы.' : 'This is an upper bound, not a promise of free time. Account for school, tutors, travel, sleep and breaks in Settings. Elapsed hours and exam sittings are excluded; on the final day preparation ends at the last paper’s start.'}</p>
    {b.source === 'default' && <p className={MUTED}>{ru ? 'Используется учебная цель, личная доступность не подтверждена.' : 'The study target is used; personal availability is unconfirmed.'}</p>}
    {b.roomUnconfirmed && <p>{ru ? 'Личное время ACC2 не подтверждено. Общие часы — только ориентир; уточни у школы.' : 'Your ACC2 time is unconfirmed. General times are a reference only; confirm with school.'}</p>}
    {b.runningExam && <p>{ru ? 'Сейчас идёт экзамен. Не выполняй подготовку во время работы.' : 'An exam is in progress. Do not study during the sitting.'}</p>}
    {b.status !== 'fits' && <p>{ru ? 'Все четыре задания остаются видимыми. Конфликт не превращается в выполненную работу или долг на завтра.' : 'All four activities remain visible. A conflict does not become completed work or tomorrow’s debt.'}</p>}
    <Link className="inline-flex min-h-[44px] items-center" to="/settings">{ru ? 'Настроить доступное время' : 'Set available time'}</Link>
  </div>;
}

export function CompletionHistory({ history, lang }: { history: Plan['completedHistory']; lang: Lang }) {
  if (!history.length) return null;
  const counts = new Map<string, number>();
  for (const item of history) counts.set(item.date, (counts.get(item.date) ?? 0) + 1);
  return <details className={`${CARD} p-3 text-sm`}><summary className="cursor-pointer py-1 font-medium">{lang === 'ru' ? `Сохранённая история: ${history.length} выполненных заданий` : `Saved history: ${history.length} completed activities`}</summary>
    <p className="mt-2">{lang === 'ru' ? 'Прежние отметки сохранены. Новый план не превращает старые задания в долг.' : 'Earlier completions are retained. The new plan does not turn old activities into debt.'}</p>
    <ul className="mt-2 list-disc pl-5">{[...counts].map(([date, n]) => <li key={date}>{date}: {n}</li>)}</ul>
  </details>;
}
