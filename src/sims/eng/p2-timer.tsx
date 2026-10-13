import { useEffect, useState } from 'react';
import type { Lang } from '../../contract/types';

// Paper 2 timing with the 25% access time (131 minutes): 10 to plan, 106 to write, 10 to check. That is 126 of the 131 minutes; 5 are spare.
const PHASES = [
  {
    minutes: 10,
    en: { name: 'Plan', tips: ['Read the prompt twice and underline its key words.', 'Choose two works and say why each one fits the prompt.', 'Write a thesis and three comparison points.'] },
    ru: { name: 'План', tips: ['Прочитайте задание дважды и подчеркните ключевые слова.', 'Выберите два произведения и объясните, почему каждое подходит к заданию.', 'Напишите тезис и три пункта сравнения.'] },
  },
  {
    minutes: 106,
    en: { name: 'Write', tips: ['One comparison point per paragraph.', 'In every paragraph, compare the choices of the two writers.', 'Keep the last 10 minutes for checking.'] },
    ru: { name: 'Письмо', tips: ['Один пункт сравнения на абзац.', 'В каждом абзаце сравнивайте решения двух авторов.', 'Последние 10 минут оставьте на проверку.'] },
  },
  {
    minutes: 10,
    en: { name: 'Check', tips: ['Does the conclusion answer the prompt, or only summarise?', 'Are the quotations short, exact and linked to a technique?', 'Does every paragraph still compare, rather than describe?'] },
    ru: { name: 'Проверка', tips: ['Отвечает ли вывод на задание, или он только пересказывает?', 'Короткие ли цитаты, точны ли они и связаны ли с приёмом?', 'Сравнивает ли каждый абзац, а не описывает ли?'] },
  },
];

const LABELS = {
  en: {
    title: 'Paper 2 timing',
    start: 'Start',
    pause: 'Pause',
    next: 'Next stage',
    reset: 'Reset this stage',
    spare: 'Spare: 5 minutes for a slow start or a longer check.',
    done: 'Time for this stage is up. Move on to the next one.',
    total: 'Total: 131 minutes (105 + 25% access time)',
    stage: 'Stage',
  },
  ru: {
    title: 'Тайминг Paper 2',
    start: 'Старт',
    pause: 'Пауза',
    next: 'Следующий этап',
    reset: 'Сбросить этап',
    spare: 'Запас: 5 минут на медленный старт или более долгую проверку.',
    done: 'Время этапа вышло. Переходите к следующему.',
    total: 'Всего: 131 минута (105 + 25% доп. времени)',
    stage: 'Этап',
  },
};

function clock(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}

export default function P2Timer({ lang }: { lang: Lang }) {
  const labels = LABELS[lang];
  const [index, setIndex] = useState(0);
  const [left, setLeft] = useState(PHASES[0].minutes * 60);
  const [running, setRunning] = useState(false);
  const phase = PHASES[index];
  const text = lang === 'ru' ? phase.ru : phase.en;
  const total = phase.minutes * 60;
  const finished = left === 0;

  useEffect(() => {
    if (!running) return undefined;
    const id = window.setInterval(() => {
      setLeft(seconds => Math.max(0, seconds - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (finished) setRunning(false);
  }, [finished]);

  const choose = (next: number) => {
    setIndex(next);
    setLeft(PHASES[next].minutes * 60);
    setRunning(false);
  };

  const button = {
    border: '1px solid var(--color-border)',
    borderRadius: '0.5rem',
    background: 'var(--color-bg)',
    color: 'var(--color-fg)',
    padding: '0.35rem 0.75rem',
    cursor: 'pointer',
    font: 'inherit',
  } as const;

  return (
    <section style={{ color: 'var(--color-fg)' }}>
      <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>{labels.title}</h3>
      <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: 0, margin: '0 0 0.75rem' }}>
        {PHASES.map((item, position) => (
          <li key={position}>
            <button
              type="button"
              onClick={() => choose(position)}
              aria-current={position === index ? 'step' : undefined}
              style={{ ...button, fontWeight: position === index ? 700 : 400, borderColor: position === index ? 'var(--color-accent)' : 'var(--color-border)' }}
            >
              {`${labels.stage} ${position + 1}: ${lang === 'ru' ? item.ru.name : item.en.name} (${item.minutes})`}
            </button>
          </li>
        ))}
      </ol>
      <div role="timer" aria-live="polite" style={{ fontSize: '2rem', fontVariantNumeric: 'tabular-nums', fontWeight: 700 }}>
        {clock(left)}
      </div>
      <div aria-hidden="true" style={{ height: 6, borderRadius: 3, background: 'var(--color-border)', margin: '0.5rem 0' }}>
        <div style={{ height: 6, borderRadius: 3, background: 'var(--color-accent)', width: `${((total - left) / total) * 100}%` }} />
      </div>
      {finished ? <p style={{ margin: '0 0 0.5rem' }}>{labels.done}</p> : null}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <button type="button" style={button} onClick={() => setRunning(!running)} disabled={finished}>
          {running ? labels.pause : labels.start}
        </button>
        <button type="button" style={button} onClick={() => choose(index)}>{labels.reset}</button>
        <button type="button" style={button} onClick={() => choose(Math.min(index + 1, PHASES.length - 1))} disabled={index === PHASES.length - 1}>
          {labels.next}
        </button>
      </div>
      <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
        {text.tips.map(tip => (
          <li key={tip} style={{ marginBottom: '0.25rem' }}>{tip}</li>
        ))}
      </ul>
      <p style={{ margin: '0.75rem 0 0', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
        {labels.total}. {labels.spare}
      </p>
    </section>
  );
}
