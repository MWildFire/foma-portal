import { useEffect, useState } from 'react';
import { setAllowanceMinutes } from '../../components/practice/timing';
import { EXAMS } from '../../planner/data';
import type { Lang } from '../../contract/types';

// Printed duration comes from the school schedule; writing gets the time left after planning and checking.
const PLAN_MINUTES = 10;
const CHECK_MINUTES = 10;
const SPARE_MINUTES = 5;

const STAGES = [
  {
    en: { name: 'Plan', tips: ['Read the prompt twice and underline its key words.', 'Choose two works and say why each one fits the prompt.', 'Write a thesis and three comparison points.'] },
    ru: { name: 'План', tips: ['Прочитайте задание дважды и подчеркните ключевые слова.', 'Выберите два произведения и объясните, почему каждое подходит к заданию.', 'Напишите тезис и три пункта сравнения.'] },
  },
  {
    en: { name: 'Write', tips: ['One comparison point per paragraph.', 'In every paragraph, compare the choices of the two writers.', 'Keep the last 10 minutes for checking.'] },
    ru: { name: 'Письмо', tips: ['Один пункт сравнения на абзац.', 'В каждом абзаце сравнивайте решения двух авторов.', 'Последние 10 минут оставьте на проверку.'] },
  },
  {
    en: { name: 'Check', tips: ['Does the conclusion answer the prompt, or only summarise?', 'Are the quotations short, exact and linked to a technique?', 'Does every paragraph still compare, rather than describe?'] },
    ru: { name: 'Проверка', tips: ['Отвечает ли вывод на задание, или он только пересказывает?', 'Короткие ли цитаты, точны ли они и связаны ли с приёмом?', 'Сравнивает ли каждый абзац, а не описывает ли?'] },
  },
];

// Minutes of each stage (plan, write, check) for a sitting of `total` minutes.
function stageMinutes(total: number): number[] {
  return [PLAN_MINUTES, total - PLAN_MINUTES - CHECK_MINUTES - SPARE_MINUTES, CHECK_MINUTES];
}

const LABELS = {
  en: {
    title: 'Paper 2 timing',
    start: 'Start',
    pause: 'Pause',
    next: 'Next stage',
    reset: 'Reset this stage',
    spare: `Spare: ${SPARE_MINUTES} minutes for a slow start or a longer check.`,
    done: 'Time for this stage is up. Move on to the next one.',
    total: (total: number) => `Total: ${total} min`,
    stage: 'Stage',
  },
  ru: {
    title: 'Тайминг Paper 2',
    start: 'Старт',
    pause: 'Пауза',
    next: 'Следующий этап',
    reset: 'Сбросить этап',
    spare: `Запас: ${SPARE_MINUTES} минут на медленный старт или более долгую проверку.`,
    done: 'Время этапа вышло. Переходите к следующему.',
    total: (total: number) => `Всего: ${total} мин`,
    stage: 'Этап',
  },
};

function clock(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}

function paperSitting(): { printed: number; total: number } {
  const paper = EXAMS.papers.find(exam => exam.subject === 'eng' && exam.paper === 'P2');
  if (!paper) throw new Error('data/exams.json has no English Paper 2');
  const total = setAllowanceMinutes({ subject: 'eng', set: { paper: paper.paper, minutes: paper.minutes }, exams: EXAMS });
  return { printed: paper.minutes, total };
}

export default function P2Timer({ lang }: { lang: Lang }) {
  const sitting = paperSitting();
  // A different sitting length starts a fresh timer.
  return <StageTimer key={sitting.total} lang={lang} printed={sitting.printed} total={sitting.total} />;
}

function StageTimer({ lang, total }: { lang: Lang; printed: number; total: number }) {
  const labels = LABELS[lang];
  const minutes = stageMinutes(total);
  const [index, setIndex] = useState(0);
  const [left, setLeft] = useState(minutes[0] * 60);
  const [running, setRunning] = useState(false);
  const stage = STAGES[index];
  const text = lang === 'ru' ? stage.ru : stage.en;
  const stageTotal = minutes[index] * 60;
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
    setLeft(minutes[next] * 60);
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
        {STAGES.map((item, position) => (
          <li key={position}>
            <button
              type="button"
              onClick={() => choose(position)}
              aria-current={position === index ? 'step' : undefined}
              style={{ ...button, fontWeight: position === index ? 700 : 400, borderColor: position === index ? 'var(--color-accent)' : 'var(--color-border)' }}
            >
              {`${labels.stage} ${position + 1}: ${lang === 'ru' ? item.ru.name : item.en.name} (${minutes[position]})`}
            </button>
          </li>
        ))}
      </ol>
      <div role="timer" aria-live="polite" style={{ fontSize: '2rem', fontVariantNumeric: 'tabular-nums', fontWeight: 700 }}>
        {clock(left)}
      </div>
      <div aria-hidden="true" style={{ height: 6, borderRadius: 3, background: 'var(--color-border)', margin: '0.5rem 0' }}>
        <div style={{ height: 6, borderRadius: 3, background: 'var(--color-accent)', width: `${((stageTotal - left) / stageTotal) * 100}%` }} />
      </div>
      {finished ? <p style={{ margin: '0 0 0.5rem' }}>{labels.done}</p> : null}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <button type="button" style={button} onClick={() => setRunning(!running)} disabled={finished}>
          {running ? labels.pause : labels.start}
        </button>
        <button type="button" style={button} onClick={() => choose(index)}>{labels.reset}</button>
        <button type="button" style={button} onClick={() => choose(Math.min(index + 1, STAGES.length - 1))} disabled={index === STAGES.length - 1}>
          {labels.next}
        </button>
      </div>
      <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
        {text.tips.map(tip => (
          <li key={tip} style={{ marginBottom: '0.25rem' }}>{tip}</li>
        ))}
      </ul>
      <p style={{ margin: '0.75rem 0 0', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
        {labels.total(total)}. {labels.spare}
      </p>
    </section>
  );
}
