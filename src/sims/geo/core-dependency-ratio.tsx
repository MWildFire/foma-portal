import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Dependency ratios are given per 100 people of working age (15–64). The presets are illustrative shares, not data.
const PRESETS = [
  { en: 'Young population', ru: 'Молодое население', young: 35, old: 5 },
  { en: 'Balanced', ru: 'Сбалансированное', young: 25, old: 12 },
  { en: 'Ageing population', ru: 'Стареющее население', young: 15, old: 22 },
];

export default function DependencyRatio({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [young, setYoung] = useState(25); // % aged 0–14
  const [old, setOld] = useState(12); // % aged 65 and over
  const working = 100 - young - old; // % aged 15–64; never below 25 with these slider limits
  const childRatio = (young / working) * 100;
  const oldRatio = (old / working) * 100;
  const totalRatio = childRatio + oldRatio;
  const title = ru ? 'Коэффициент демографической нагрузки' : 'Dependency ratio';

  return (
    <div>
      <div role="group" aria-label={ru ? 'Готовые примеры' : 'Presets'} style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
        {PRESETS.map(preset => (
          <button
            key={preset.en}
            type="button"
            onClick={() => {
              setYoung(preset.young);
              setOld(preset.old);
            }}
            style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid currentColor', background: 'transparent', color: 'inherit', cursor: 'pointer' }}
          >
            {ru ? preset.ru : preset.en}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <label style={{ display: 'block' }}>
          {ru ? 'Доля 0–14 лет: ' : 'Share aged 0–14: '}<strong>{young}%</strong>
          <input type="range" min={5} max={45} step={1} value={young} onChange={event => setYoung(Number(event.target.value))} style={{ width: '100%' }} />
        </label>
        <label style={{ display: 'block' }}>
          {ru ? 'Доля 65 лет и старше: ' : 'Share aged 65 and over: '}<strong>{old}%</strong>
          <input type="range" min={2} max={30} step={1} value={old} onChange={event => setOld(Number(event.target.value))} style={{ width: '100%' }} />
        </label>
      </div>
      <svg role="img" aria-label={title} viewBox="0 0 360 64" width="100%" style={{ maxWidth: 520, display: 'block', marginTop: 16 }}>
        <rect x={0} y={14} width={(young / 100) * 360} height={30} fill="#3f6b8c" />
        <rect x={(young / 100) * 360} y={14} width={(working / 100) * 360} height={30} fill="#9aa5ad" />
        <rect x={((young + working) / 100) * 360} y={14} width={(old / 100) * 360} height={30} fill="#b4604a" />
        <text x={(young / 200) * 360} y={36} textAnchor="middle" fontSize="12" fill="#ffffff">0–14</text>
        <text x={((young + working / 2) / 100) * 360} y={36} textAnchor="middle" fontSize="12" fill="#ffffff">{ru ? '15–64 (работающие)' : '15–64 (working)'}</text>
        <text x={((young + working + old / 2) / 100) * 360} y={36} textAnchor="middle" fontSize="12" fill="#ffffff">65+</text>
      </svg>
      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        <li>
          {ru ? 'Детская нагрузка = 0–14 ÷ 15–64 × 100 = ' : 'Child dependency = 0–14 ÷ 15–64 × 100 = '}
          <strong>{childRatio.toFixed(1)}</strong>
        </li>
        <li>
          {ru ? 'Нагрузка пожилых = 65+ ÷ 15–64 × 100 = ' : 'Old-age dependency = 65+ ÷ 15–64 × 100 = '}
          <strong>{oldRatio.toFixed(1)}</strong>
        </li>
        <li>
          {ru ? 'Общая нагрузка = (0–14 + 65+) ÷ 15–64 × 100 = ' : 'Total dependency = (0–14 + 65+) ÷ 15–64 × 100 = '}
          <strong>{totalRatio.toFixed(1)}</strong>
        </li>
      </ul>
      <p style={{ fontSize: 13, opacity: 0.8 }}>
        {ru
          ? 'Заметьте: общая нагрузка может снижаться, пока нагрузка пожилых растёт. Значения примеров условные.'
          : 'Note: total dependency can fall while old-age dependency rises. The preset values are illustrative.'}
      </p>
    </div>
  );
}
