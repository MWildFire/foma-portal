import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TriangleAlert } from 'lucide-react';
import { afterPlay, LISTENING_PAUSE_SECONDS, playbackSteps, type ListeningTrackRef } from './listening';

type Phase = 'idle' | 'playing' | 'pause' | 'done';

interface Props {
  /** The recordings of this set, in the order they play (tracksForSet). */
  tracks: readonly ListeningTrackRef[];
}

// Plays the recordings of a timed listening set as in the exam: each one twice, with a pause between the plays.
// Start plays the set from the first recording. Repeat plays the current recording again from its beginning.
export function ListeningPlayer({ tracks }: Props) {
  const { t } = useTranslation('timing');
  const steps = useMemo(() => playbackSteps(tracks, LISTENING_PAUSE_SECONDS), [tracks]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [failed, setFailed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<number | null>(null);
  // The step being played, kept in a ref too: a short recording can end before the next render, and the end handler
  // must still see the step it belongs to.
  const indexRef = useRef(0);

  // Leaving the page stops the audio and a pending pause. The element is read on mount, because the ref is already
  // empty when the cleanup runs.
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      audio?.pause();
    };
  }, []);

  // Plays step `at` from its beginning. One audio element serves every step: its source changes with the step.
  const playStep = (at: number): void => {
    const audio = audioRef.current;
    const step = steps[at];
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (!audio || !step) return;
    indexRef.current = at;
    setFailed(false);
    setIndex(at);
    setPhase('playing');
    audio.src = step.src;
    audio.currentTime = 0;
    audio.play().catch((error: unknown) => {
      // A newer play request took over this one: nothing is wrong.
      if ((error as { name?: string } | null)?.name === 'AbortError') return;
      setPhase('idle');
      setFailed(true);
    });
  };

  // A play has ended: the next play comes at once or after the pause, or the set is done.
  const onEnded = (): void => {
    const next = afterPlay(steps, indexRef.current);
    if (next.kind === 'end') {
      setPhase('done');
    } else if (next.kind === 'play') {
      playStep(next.index);
    } else {
      const at = next.index;
      setPhase('pause');
      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        playStep(at);
      }, next.seconds * 1000);
    }
  };

  if (steps.length === 0) return <p className="study-muted">{t('listening.none')}</p>;

  const total = tracks.length;
  const trackNumber = (at: number): number => tracks.findIndex(track => track.id === steps[at]?.trackId) + 1;
  let status: string;
  if (phase === 'playing' && steps[index]) {
    status = t('listening.status.playing', { track: trackNumber(index), total, play: steps[index].play });
  } else if (phase === 'pause' && steps[index + 1]) {
    status = t('listening.status.pause', { track: trackNumber(index + 1), total, play: steps[index + 1].play });
  } else if (phase === 'done') {
    status = t('listening.status.done');
  } else {
    status = t('listening.status.idle', { total });
  }

  return (
    <div style={{ marginTop: '0.75rem' }}>
      <p className="study-muted">{t('listening.hint')}</p>
      <div className="foma-btn-row" style={{ marginTop: '0.5rem' }}>
        <button type="button" className="foma-btn foma-btn--primary" onClick={() => playStep(0)} disabled={phase === 'playing'}>
          {t('listening.start')}
        </button>
        <button type="button" className="foma-btn" onClick={() => playStep(indexRef.current)} disabled={phase === 'idle'}>
          {t('listening.repeat')}
        </button>
      </div>
      <p role="status" aria-live="polite" className="study-muted" style={{ marginTop: '0.5rem' }}>{status}</p>
      {failed ? (
        <p className="study-banner" data-tone="amber" role="alert">
          <TriangleAlert size={18} aria-hidden="true" />
          <span>{t('listening.error')}</span>
        </p>
      ) : null}
      <audio
        ref={audioRef}
        preload="auto"
        onEnded={onEnded}
        onError={() => {
          setPhase('idle');
          setFailed(true);
        }}
      />
    </div>
  );
}
