import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AlarmClock, Pause, Play, RotateCcw, TimerOff } from 'lucide-react';
import { createTimer, formatClock, isWarning, pauseTimer, resetTimer, secondsLeft, startTimer, tickTimer, type TimerState } from '../../lib/practice';
import '../content/ui.css';
import './fields.css';
import './practice.css';

// The countdown of a timed set. It shows minutes and seconds, warns in the last five minutes and says when the
// time is up. The warning is a sentence with an icon, never a colour alone. The parent gives it a `key` made of the
// set and the allowed minutes, so a different set or a changed extra-time setting starts a fresh clock.
export function Clock({ minutes }: { minutes: number }) {
  const { t } = useTranslation('practice');
  const [timer, setTimer] = useState(() => createTimer(minutes));

  // While the clock runs, look at the time four times a second. The end moment is stored, so the display is right
  // even when the browser slows a background tab down.
  useEffect(() => {
    if (timer.status !== 'running') return undefined;
    const id = window.setInterval(() => {
      const now = Date.now();
      setTimer(current => tickTimer(current, now));
    }, 250);
    return () => window.clearInterval(id);
  }, [timer.status]);

  // The time is read once, outside the updater, so a repeated call of the updater gives the same result.
  const apply = (change: (current: TimerState, now: number) => TimerState): void => {
    const now = Date.now();
    setTimer(current => change(current, now));
  };

  const warning = isWarning(timer);
  const over = timer.status === 'done';
  const message = over ? t('timed.over') : warning ? t('timed.warn') : '';

  return (
    <div className="study-clock" data-state={timer.status} data-warning={warning ? 'true' : undefined}>
      <div className="study-clock__row">
        <p className="study-clock__time" role="timer" aria-label={t('timed.clock')}>{formatClock(secondsLeft(timer))}</p>
        <p className="study-clock__state">{t(`timed.state.${timer.status}`)}</p>
      </div>
      <div className="foma-btn-row">
        {timer.status === 'idle' ? (
          <button type="button" className="foma-btn foma-btn--primary" onClick={() => apply(startTimer)}>
            <Play size={16} aria-hidden="true" />
            {t('timed.start')}
          </button>
        ) : null}
        {timer.status === 'running' ? (
          <button type="button" className="foma-btn" onClick={() => apply(pauseTimer)}>
            <Pause size={16} aria-hidden="true" />
            {t('timed.pause')}
          </button>
        ) : null}
        {timer.status === 'paused' ? (
          <button type="button" className="foma-btn foma-btn--primary" onClick={() => apply(startTimer)}>
            <Play size={16} aria-hidden="true" />
            {t('timed.resume')}
          </button>
        ) : null}
        {timer.status !== 'idle' ? (
          <button type="button" className="foma-btn" onClick={() => apply(resetTimer)}>
            <RotateCcw size={16} aria-hidden="true" />
            {t('timed.reset')}
          </button>
        ) : null}
      </div>
      <div role="status" className="study-clock__alert">
        {message ? (
          <p className="study-banner" data-tone={over ? 'red' : 'amber'}>
            {over ? <TimerOff size={18} aria-hidden="true" /> : <AlarmClock size={18} aria-hidden="true" />}
            <span>{message}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
