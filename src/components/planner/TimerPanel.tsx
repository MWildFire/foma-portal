import { Pause, Play, RotateCcw, SkipForward, Square } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNow } from '../../hooks/useExamCountdown';
import { isPaused, remainingMs } from '../../planner/timer';
import { studyTimer, useStudyTimer } from './timerStore';
import { Btn, CARD, MUTED } from './ui';

function clock(ms: number): string {
  const total = Math.ceil(ms / 1000);
  const mm = String(Math.floor(total / 60)).padStart(2, '0');
  const ss = String(total % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

// The study timer: a 25-minute round and a 5-minute break, or one countdown for a timed paper.
export function TimerPanel() {
  const { t } = useTranslation('today');
  const timer = useStudyTimer();
  const now = useNow(500);
  if (!timer) return null;

  const paused = isPaused(timer);
  const left = remainingMs(timer, now);
  const phase =
    timer.phase === 'done' ? t('timer.finished')
      : timer.phase === 'break' ? t('timer.break')
        : timer.mode === 'single' ? t('timer.paper')
          : t('timer.work');
  return (
    <section aria-label={t('timer.title')} className={`${CARD} sticky top-2 z-10 p-3 shadow-sm`}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="min-w-0 flex-1">
          {/* Announced when the phase changes (work -> break -> finished), so the change is not only visual. */}
          <p aria-live="polite" className={`text-xs font-medium uppercase tracking-wide ${MUTED}`}>
            {t('timer.title')} · {phase}
            {paused ? ` · ${t('timer.paused')}` : ''}
          </p>
          <p className="break-words text-sm">{t('timer.forBlock', { name: timer.label })}</p>
        </div>
        <p role="timer" aria-label={t('timer.left', { time: clock(left) })} className="font-mono text-3xl font-semibold tabular-nums">
          {timer.phase === 'done' ? '00:00' : clock(left)}
        </p>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {timer.phase === 'done' ? (
          <Btn variant="primary" onClick={() => studyTimer.start({ blockId: timer.blockId, label: timer.label, mode: timer.mode, minutes: timer.workMs / 60_000 })}>
            <RotateCcw size={16} aria-hidden /> {t('timer.again')}
          </Btn>
        ) : paused ? (
          <Btn variant="primary" onClick={() => studyTimer.resume()}>
            <Play size={16} aria-hidden /> {t('timer.resume')}
          </Btn>
        ) : (
          <Btn onClick={() => studyTimer.pause()}>
            <Pause size={16} aria-hidden /> {t('timer.pause')}
          </Btn>
        )}
        {timer.phase !== 'done' && (
          <Btn onClick={() => studyTimer.skip()}>
            <SkipForward size={16} aria-hidden /> {timer.phase === 'work' && timer.mode === 'pomodoro' ? t('timer.skipToBreak') : t('timer.finish')}
          </Btn>
        )}
        <Btn variant="quiet" onClick={() => studyTimer.stop()}>
          <Square size={16} aria-hidden /> {t('timer.stop')}
        </Btn>
      </div>
    </section>
  );
}
