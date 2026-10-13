import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AlarmClock, Pause, Play, RotateCcw, TimerOff } from 'lucide-react';
import {
  createTimer, formatClock, isWarning, pauseTimer, resetTimer, secondsLeft, startTimer, tickTimer, timerSignature, type TimerState,
} from '../../lib/practice';
import { readStoredTimer, writeStoredTimer } from './timerStorage';
import '../content/ui.css';
import './fields.css';
import './practice.css';

// The countdown of a timed set. It shows minutes and seconds, warns in the last five minutes and says when the
// time is up. The warning is a sentence with an icon, never a colour alone.
//
// It returns two elements: the clock (this one sticks to the top of the screen while the questions scroll under
// it, so it is kept small) and the buttons under it. The parent gives it a `key` made of the set and the allowed
// minutes, so a different set or a changed extra-time setting starts a fresh clock. The state is saved in
// localStorage under `storageKey`, so a reload does not lose a running paper.
export function Clock({ minutes, storageKey }: { minutes: number; storageKey: string }) {
  const { t } = useTranslation('practice');
  const [timer, setTimer] = useState(() => {
    const fresh = createTimer(minutes);
    return readStoredTimer(storageKey, fresh.totalMs) ?? fresh;
  });

  // Save when the clock starts, pauses, ends or is reset. While it runs, the end moment is all that is needed. What
  // was just read from storage is not written back: that would renew its eight hours every time the page is opened.
  const written = useRef(timerSignature(timer));
  useEffect(() => {
    const signature = timerSignature(timer);
    if (written.current === signature) return;
    written.current = signature;
    writeStoredTimer(storageKey, timer);
  }, [storageKey, timer.status, timer.endsAt]);

  // While the clock runs, look at the time four times a second. The end moment is stored, so the display is right
  // even when the browser slows a background tab down.
  useEffect(() => {
    if (timer.status !== 'running') return undefined;
    const look = (): void => {
      const now = Date.now();
      setTimer(current => tickTimer(current, now));
    };
    const id = window.setInterval(look, 250);
    // A tab in the background is slowed down: look again the moment the student comes back.
    document.addEventListener('visibilitychange', look);
    window.addEventListener('pageshow', look);
    return () => {
      window.clearInterval(id);
      document.removeEventListener('visibilitychange', look);
      window.removeEventListener('pageshow', look);
    };
  }, [timer.status]);

  // The time is read once, outside the updater, so a repeated call of the updater gives the same result.
  const apply = (change: (current: TimerState, now: number) => TimerState): void => {
    const now = Date.now();
    setTimer(current => change(current, now));
  };

  const clock = formatClock(secondsLeft(timer));
  const warning = isWarning(timer);
  const over = timer.status === 'done';
  const message = over ? t('timed.over') : warning ? t('timed.warn') : '';

  return (
    <>
      <div className="study-clock" data-state={timer.status} data-warning={warning ? 'true' : undefined}>
        <div className="study-clock__row">
          <p className="study-clock__time" role="timer" aria-label={`${t('timed.clock')}: ${clock}`}>{clock}</p>
          <p className="study-clock__state">{t(`timed.state.${timer.status}`)}</p>
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

      <div className="foma-btn-row study-clock__buttons">
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
    </>
  );
}
