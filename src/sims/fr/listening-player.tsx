import { useEffect, useMemo, useRef, useState } from 'react';
import type { Lang } from '../../contract/types';
import type { FrQuestion, ListeningTrack } from '../../../content/fr/types';
import {
  PAUSE_SECONDS,
  SPEEDS,
  TRUE_FALSE,
  answerKind,
  isCorrect,
  nextPhase,
  optionLetters,
  questionsForTrack,
  score,
  transcriptText,
  type AnswerKind,
  type Phase,
  type Speed,
} from './listening-logic';

// The listening player for Paper 2 (topic listening-strategy). The tracks and questions come from content/fr/ at build
// time. A run plays the recording twice, with the pause of listening-logic.ts between the plays, as in the exam.
const TRACKS: ListeningTrack[] = Object.values(
  import.meta.glob<{ track: ListeningTrack }>('../../../content/fr/listening/*.ts', { eager: true }),
).map(mod => mod.track).sort((a, b) => (a.id < b.id ? -1 : 1));

const QUESTIONS: FrQuestion[] = Object.values(
  import.meta.glob<{ questions: FrQuestion[] }>('../../../content/fr/questions/listening-*.ts', { eager: true }),
).flatMap(mod => mod.questions);

const EN = {
  title: 'Listening practice (Paper 2)',
  hint: 'Choose a recording. It plays twice, with a pause in between. Answer the questions, then press Vérifier. The transcript appears after the check. A French answer may leave out its accents when they do not change the word (ecole for école); ou and où need theirs.',
  track: 'Recording',
  speed: 'Speed',
  play: 'Play (Écouter)',
  stop: 'Stop',
  again: 'Start again (Recommencer)',
  check: 'Check (Vérifier)',
  phase: { idle: 'Ready.', first: 'First listening.', pause: 'Pause: read the questions you have not answered.', second: 'Second listening.', done: 'Finished. Answer the questions, then check.' },
  translation: 'Translation',
  yourAnswer: 'Your answer',
  right: 'Right.',
  wrong: 'Wrong.',
  answerIs: 'Answer:',
  result: (right: number, total: number) => `Right: ${right} of ${total}.`,
  transcript: 'Transcript',
  loadError: 'The recording could not be loaded.',
};

const COPY: Record<Lang, typeof EN> = {
  en: EN,
  ru: {
    title: 'Тренировка аудирования (P2)',
    hint: 'Выберите запись. Она звучит дважды, между прослушиваниями пауза. Ответьте на вопросы и нажмите «Vérifier». Текст записи появится после проверки. Французский ответ можно написать без акцентов, если они не меняют слово (ecole для école); ou и où нужны акценты.',
    track: 'Запись',
    speed: 'Скорость',
    play: 'Слушать (Écouter)',
    stop: 'Стоп',
    again: 'Начать заново (Recommencer)',
    check: 'Проверить (Vérifier)',
    phase: { idle: 'Готово к прослушиванию.', first: 'Первое прослушивание.', pause: 'Пауза: прочитайте вопросы, на которые ещё не ответили.', second: 'Второе прослушивание.', done: 'Запись закончилась. Ответьте на вопросы и проверьте ответы.' },
    translation: 'Перевод',
    yourAnswer: 'Ваш ответ',
    right: 'Верно.',
    wrong: 'Неверно.',
    answerIs: 'Ответ:',
    result: (right, total) => `Верно: ${right} из ${total}.`,
    transcript: 'Текст записи',
    loadError: 'Запись не загрузилась.',
  },
};

const button = { border: '1px solid currentColor', borderRadius: 6, padding: '4px 12px', background: 'transparent', color: 'inherit', cursor: 'pointer' } as const;
const row = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 } as const;
const plain = { border: 0, margin: 0, padding: 0, minWidth: 0 } as const;

// The choices of a true/false or letter item (a text item has none).
function choices(item: FrQuestion, kind: AnswerKind): string[] {
  return kind === 'truefalse' ? [...TRUE_FALSE] : optionLetters(item.prompt.fr ?? '');
}

export default function ListeningPlayer({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const [trackId, setTrackId] = useState(TRACKS[0]?.id ?? '');
  const track: ListeningTrack | undefined = TRACKS.find(item => item.id === trackId) ?? TRACKS[0];
  const [speed, setSpeed] = useState<Speed>(1);
  const [phase, setPhase] = useState<Phase>('idle');
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<number | null>(null);
  const speedRef = useRef<Speed>(speed);
  const items = useMemo(() => (track ? questionsForTrack(track, QUESTIONS) : []), [track]);

  useEffect(() => {
    speedRef.current = speed;
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed]);

  // The audio element is replaced when the track changes (key={track.id}). By the time a cleanup runs, audioRef.current is
  // empty, so the element is kept in a local variable and paused on unmount or when the track changes.
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      audio?.pause();
    };
  }, [track]);

  const clearTimer = (): void => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  // Plays the recording from its start at the chosen speed.
  const playFromStart = (): void => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.playbackRate = speedRef.current;
    audio.play().catch(() => setPhase('idle'));
  };

  const start = (): void => {
    clearTimer();
    setPhase('first');
    playFromStart();
  };

  const stop = (): void => {
    clearTimer();
    audioRef.current?.pause();
    setPhase('idle');
  };

  // The first listening is followed by the pause, the pause by the second listening, and that by done.
  const onEnded = (): void => {
    if (phase === 'first') {
      setPhase(nextPhase(phase));
      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        setPhase(nextPhase('pause'));
        playFromStart();
      }, PAUSE_SECONDS * 1000);
    } else if (phase === 'second') {
      setPhase(nextPhase(phase));
    }
  };

  const chooseTrack = (id: string): void => {
    stop();
    setTrackId(id);
    setResponses({});
    setChecked(false);
    setLoadError(false);
  };

  const answer = (id: string, value: string): void => {
    setResponses(previous => ({ ...previous, [id]: value }));
    setChecked(false);
  };

  if (!track) return <p>{copy.loadError}</p>;

  const busy = phase === 'first' || phase === 'pause' || phase === 'second';
  const result = score(items, responses);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 14 }}>
      <p style={{ margin: 0 }}>
        <strong>{copy.title}</strong>
        <br />
        {copy.hint}
      </p>

      <div style={row}>
        <label style={{ minWidth: 0, maxWidth: '100%' }}>
          {copy.track}{' '}
          <select style={{ minWidth: 0, maxWidth: '100%' }} value={track.id} onChange={e => chooseTrack(e.target.value)}>
            {TRACKS.map(item => <option key={item.id} value={item.id}>{item.title[lang]}</option>)}
          </select>
        </label>
        <fieldset style={{ ...plain, ...row }}>
          <legend>{copy.speed}</legend>
          {SPEEDS.map(value => (
            <label key={value}>
              <input type="radio" name="listening-speed" value={value} checked={speed === value} onChange={() => setSpeed(value)} />{' '}
              {value}×
            </label>
          ))}
        </fieldset>
      </div>

      <div style={row}>
        <button type="button" style={{ ...button, opacity: busy ? 0.5 : 1 }} onClick={start} disabled={busy}>{copy.play}</button>
        <button type="button" style={{ ...button, opacity: busy ? 1 : 0.5 }} onClick={stop} disabled={!busy}>{copy.stop}</button>
        <span role="status" aria-live="polite">{copy.phase[phase]}</span>
      </div>
      {loadError ? <p role="alert" style={{ margin: 0 }}>{copy.loadError}</p> : null}
      <audio key={track.id} ref={audioRef} src={track.audio} preload="auto" onEnded={onEnded} onError={() => setLoadError(true)} />

      <ol style={{ ...plain, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 12, listStyle: 'none' }}>
        {items.map((item, index) => {
          const expected = item.answer ?? '';
          const kind = answerKind(expected);
          const response = responses[item.id] ?? '';
          const right = isCorrect(expected, response);
          const border = !checked ? 'currentColor' : right ? '#1a7f37' : '#b42318';
          return (
            <li key={item.id} style={{ border: `1px solid ${border}`, borderRadius: 8, padding: '8px 10px' }}>
              <fieldset style={{ ...plain, display: 'grid', gap: 6 }}>
                <legend style={{ maxWidth: '100%', whiteSpace: 'normal' }}>
                  <strong>{index + 1}. <span lang="fr" style={{ whiteSpace: 'pre-line' }}>{item.prompt.fr}</span></strong>
                </legend>
                <details>
                  <summary>{copy.translation}</summary>
                  <p style={{ margin: '4px 0 0', whiteSpace: 'pre-line' }}>{item.prompt[lang]}</p>
                </details>
                <div style={row}>
                  {kind === 'text' ? (
                    <label style={{ ...row, width: '100%' }}>
                      {copy.yourAnswer}:
                      <input type="text" lang="fr" value={response} onChange={e => answer(item.id, e.target.value)} autoComplete="off" spellCheck={false} style={{ minWidth: 0, flex: '1 1 180px' }} />
                    </label>
                  ) : choices(item, kind).map(value => (
                    <label key={value}>
                      <input type="radio" name={`${track.id}-${item.id}`} value={value} checked={response === value} onChange={() => answer(item.id, value)} />{' '}
                      {value}
                    </label>
                  ))}
                </div>
              </fieldset>
              {checked ? (
                <p style={{ margin: '8px 0 0' }}>
                  <strong>{right ? copy.right : copy.wrong}</strong> {copy.answerIs} <strong lang="fr">{expected}</strong>
                  <br />
                  {item.markscheme[lang]}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div style={row}>
        <button type="button" style={button} onClick={() => setChecked(true)}>{copy.check}</button>
        <button type="button" style={button} onClick={() => { stop(); setResponses({}); setChecked(false); }}>{copy.again}</button>
        {checked ? <span role="status">{copy.result(result.right, result.total)}</span> : null}
      </div>

      {checked ? (
        <section aria-label={copy.transcript} style={{ display: 'grid', gap: 6 }}>
          <h3 style={{ margin: 0, fontSize: '1em' }}>{copy.transcript}</h3>
          {track.turns.map((turn, index) => (
            <p key={index} style={{ margin: 0 }}><strong>{turn.speaker}:</strong> {transcriptText(turn.fr)}</p>
          ))}
        </section>
      ) : null}
    </div>
  );
}
