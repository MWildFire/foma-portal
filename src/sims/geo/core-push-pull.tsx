import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Push and pull factors and intervening obstacles. Each ticked factor counts as one. The count is a teaching device, not a
// measurement: real people weigh the same factor very differently (age, skills, family, money).
const PUSH = [
  { en: 'Low wages or unemployment', ru: 'Низкие зарплаты или безработица' },
  { en: 'Conflict or political insecurity', ru: 'Конфликт или политическая нестабильность' },
  { en: 'Weak schools and health care', ru: 'Слабые школы и здравоохранение' },
  { en: 'Environmental hazard (drought, flood)', ru: 'Экологический риск (засуха, наводнение)' },
  { en: 'Shrinking land or farm income', ru: 'Нехватка земли или падение доходов фермеров' },
];
const PULL = [
  { en: 'Jobs and higher wages', ru: 'Работа и более высокие зарплаты' },
  { en: 'Better schools and health care', ru: 'Лучшие школы и здравоохранение' },
  { en: 'Safety and political stability', ru: 'Безопасность и политическая стабильность' },
  { en: 'Family and community networks', ru: 'Семейные и общинные связи' },
  { en: 'Demand for particular skills', ru: 'Спрос на определённые навыки' },
];
const OBSTACLES = [
  { en: 'Distance and cost of travel', ru: 'Расстояние и стоимость переезда' },
  { en: 'Border controls and visa rules', ru: 'Границы и визовые правила' },
  { en: 'Language and cultural difference', ru: 'Язык и культурные различия' },
  { en: 'Shortage of housing at the destination', ru: 'Нехватка жилья на месте прибытия' },
];

type Item = { en: string; ru: string };

function Factors({ title, items, checked, onToggle, lang }: { title: string; items: Item[]; checked: boolean[]; onToggle: (index: number) => void; lang: Lang }) {
  return (
    <fieldset style={{ border: '1px solid currentColor', borderRadius: 8, padding: '6px 12px 10px', margin: 0, minWidth: 0 }}>
      <legend style={{ padding: '0 6px', fontWeight: 600 }}>{title}</legend>
      {items.map((item, index) => (
        <label key={item.en} style={{ display: 'block', margin: '6px 0', cursor: 'pointer' }}>
          <input type="checkbox" checked={checked[index]} onChange={() => onToggle(index)} /> {item[lang]}
        </label>
      ))}
    </fieldset>
  );
}

export default function PushPull({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [push, setPush] = useState<boolean[]>(PUSH.map(() => false));
  const [pull, setPull] = useState<boolean[]>(PULL.map(() => false));
  const [obstacle, setObstacle] = useState<boolean[]>(OBSTACLES.map(() => false));

  const toggle = (list: boolean[], setList: (next: boolean[]) => void) => (index: number): void => {
    setList(list.map((value, position) => (position === index ? !value : value)));
  };
  const count = (list: boolean[]): number => list.filter(Boolean).length;
  const net = count(push) + count(pull) - count(obstacle);
  const thickness = Math.min(12, Math.max(1, 3 + net));
  const verdict = net > 1
    ? (ru ? 'Перемещение вероятно: факторы выталкивания и притяжения перевешивают барьеры.' : 'Movement is likely: push and pull factors outweigh the obstacles.')
    : net < 0
      ? (ru ? 'Перемещению что-то мешает: барьеры перевешивают.' : 'Movement is held back: the obstacles outweigh the factors.')
      : (ru ? 'Силы почти уравновешены: решение зависит от конкретного человека.' : 'The forces are roughly balanced: the decision depends on the person.');

  return (
    <div>
      <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))' }}>
        <Factors title={ru ? 'Факторы выталкивания (место выезда)' : 'Push factors (origin)'} items={PUSH} checked={push} onToggle={toggle(push, setPush)} lang={lang} />
        <Factors title={ru ? 'Факторы притяжения (место прибытия)' : 'Pull factors (destination)'} items={PULL} checked={pull} onToggle={toggle(pull, setPull)} lang={lang} />
        <Factors title={ru ? 'Промежуточные барьеры' : 'Intervening obstacles'} items={OBSTACLES} checked={obstacle} onToggle={toggle(obstacle, setObstacle)} lang={lang} />
      </div>
      <svg role="img" aria-label={ru ? 'Схема потока миграции' : 'Migration flow diagram'} viewBox="0 0 400 120" width="100%" style={{ maxWidth: 520, display: 'block', margin: '14px auto 0' }}>
        <circle cx={60} cy={60} r={36} fill="none" stroke="currentColor" strokeWidth={2} />
        <circle cx={340} cy={60} r={36} fill="none" stroke="currentColor" strokeWidth={2} />
        <text x={60} y={64} textAnchor="middle" fontSize="12" fill="currentColor">{ru ? 'Выезд' : 'Origin'}</text>
        <text x={340} y={64} textAnchor="middle" fontSize="12" fill="currentColor">{ru ? 'Прибытие' : 'Destination'}</text>
        <line x1={100} y1={60} x2={300} y2={60} stroke="#b4604a" strokeWidth={thickness} strokeLinecap="round" />
        <text x={200} y={42} textAnchor="middle" fontSize="12" fill="currentColor">
          {ru ? `Сила потока: ${net > 0 ? `+${net}` : net}` : `Flow strength: ${net > 0 ? `+${net}` : net}`}
        </text>
      </svg>
      <p style={{ marginTop: 12 }}>
        <strong>{ru ? 'Итог модели: ' : 'Model result: '}</strong>
        {verdict}
      </p>
      <p style={{ fontSize: 13, opacity: 0.8 }}>
        {ru
          ? 'Каждый отмеченный фактор считается за единицу. Это учебный инструмент, а не измерение. Для реального потока назовите конкретные факторы и приведите данные о них.'
          : 'Each ticked factor counts as one unit. This is a teaching tool, not a measurement. For a real flow, name the specific factors and support them with data.'}
      </p>
    </div>
  );
}
