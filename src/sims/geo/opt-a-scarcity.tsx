import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative water-scarcity calculator, not data about any real country.
// Water per person (m³ per year) = renewable water (km³ per year) × 10^9 m³ per km³ ÷ (population in millions × 10^6 people).
// This simplifies to resources × 1 000 ÷ population, since 10^9 ÷ 10^6 = 10^3.
// Thresholds: UN-Water (2017), Policy Brief: Water Quality, p. 5, after Falkenmark and Lindh (1976). A rule of thumb.
// https://www.unwater.org/sites/default/files/app/uploads/2017/05/waterquality_policybrief.pdf
// Physical and economic tests: FAO (2007), World Water Day brochure, map "Areas of Physical and Economic Water Scarcity".
// Farming share of withdrawals: FAO SDG Data Portal, indicator 6.4.2 page, 2023 data. The page says agriculture took 72 percent of total withdrawals in 2023, industry 15 percent and services 13 percent; the third share is labelled 'services'.
// https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/642-water-stress/en

const THRESHOLDS = { stress: 1700, scarcity: 1000, absolute: 500 }; // m³ per person per year
const CHART_MAX = 3000; // right end of the scale, m³ per person per year
const LEFT = 12;
const RIGHT = 308;

type Category = 'none' | 'stress' | 'scarcity' | 'absolute';

// A value below a threshold falls into the lower category.
function categoryOf(water: number): Category {
  if (water < THRESHOLDS.absolute) return 'absolute';
  if (water < THRESHOLDS.scarcity) return 'scarcity';
  if (water < THRESHOLDS.stress) return 'stress';
  return 'none';
}

// The threshold the country falls below next, from its current category (null: already the lowest).
const NEXT_LOWER: Record<Category, number | null> = {
  none: THRESHOLDS.stress,
  stress: THRESHOLDS.scarcity,
  scarcity: THRESHOLDS.absolute,
  absolute: null,
};

const NAMES: Record<Category, { en: string; ru: string }> = {
  none: { en: 'no water stress (above 1,700)', ru: 'водного стресса нет (выше 1 700)' },
  stress: { en: 'water stress (1,000 to 1,700)', ru: 'водный стресс (1 000–1 700)' },
  scarcity: { en: 'water scarcity (500 to 1,000)', ru: 'водный дефицит (500–1 000)' },
  absolute: { en: 'absolute scarcity (below 500)', ru: 'абсолютный дефицит (ниже 500)' },
};

// Shaded bands on the scale: from, to, opacity (darker means more scarce).
const BANDS: [number, number, number][] = [
  [0, 500, 0.5],
  [500, 1000, 0.35],
  [1000, 1700, 0.2],
  [1700, CHART_MAX, 0.08],
];

export default function OptAScarcitySim({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [population, setPopulation] = useState(50); // million people
  const [resources, setResources] = useState(60); // km³ per year
  const [farming, setFarming] = useState(72); // % of withdrawals used for farming
  const [drought, setDrought] = useState(0); // % fall in renewable resources

  // Decimal comma and grouped thousands in Russian; decimal point and commas in English.
  const fmt = (value: number, digits = 0): string => {
    const [whole, fraction] = Math.abs(value).toFixed(digits).split('.');
    const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ru ? ' ' : ',');
    const isZero = Math.abs(value) < 0.5 * 10 ** -digits;
    const sign = value < 0 && !isZero ? '−' : '';
    return sign + grouped + (fraction === undefined ? '' : (ru ? ',' : '.') + fraction);
  };

  const before = (resources * 1000) / population;
  const after = before * (1 - drought / 100);
  const categoryBefore = categoryOf(before);
  const categoryAfter = categoryOf(after);
  const nextLower = NEXT_LOWER[categoryAfter];
  // Further fall from the current (after-drought) value. Every category has after >= its lower bound, so this is never negative.
  const furtherFall = nextLower === null ? null : (1 - nextLower / after) * 100;
  const furtherText = nextLower === null
    ? (ru ? '(уже абсолютный дефицит)' : '(already absolute scarcity)')
    : (ru ? `(ниже ${fmt(nextLower)})` : `(below ${fmt(nextLower)})`);
  const farmingShare = after * (farming / 100);
  const otherShare = after - farmingShare;

  const sliders = [
    { key: 'population', en: 'Population (million people)', ru: 'Население (млн человек)', min: 5, max: 1500, step: 1, value: population, set: setPopulation },
    { key: 'resources', en: 'Renewable water resources (km³ per year)', ru: 'Возобновляемые водные ресурсы (км³ в год)', min: 5, max: 1000, step: 1, value: resources, set: setResources },
    { key: 'farming', en: 'Share of withdrawals used for farming (%)', ru: 'Доля изъятой воды на сельское хозяйство (%)', min: 0, max: 100, step: 1, value: farming, set: setFarming },
    { key: 'drought', en: 'Drought: fall in renewable resources (%)', ru: 'Засуха: снижение водных ресурсов (%)', min: 0, max: 80, step: 1, value: drought, set: setDrought },
  ];

  const xOf = (value: number): number => LEFT + (Math.min(value, CHART_MAX) / CHART_MAX) * (RIGHT - LEFT);
  const anchorOf = (x: number): 'start' | 'middle' | 'end' => (x < 60 ? 'start' : x > 260 ? 'end' : 'middle');
  const xBefore = xOf(before);
  const xAfter = xOf(after);

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <p style={{ margin: '0 0 8px', fontWeight: 600 }}>
        {ru ? 'Учебная модель — не данные о реальной стране.' : 'Illustrative — not data about any real country.'}
      </p>
      <p style={{ margin: '0 0 12px', fontSize: 13, lineHeight: 1.5 }}>
        {ru
          ? 'Задайте население, водные ресурсы и засуху. Доля сельского хозяйства нужна только для иллюстративного разбиения воды ниже.'
          : 'Set the population, the renewable water and the drought. The farming share is used only for the illustrative split below.'}
      </p>

      <div>
        {sliders.map(slider => (
          <label key={slider.key} style={{ display: 'block', marginBottom: 10 }}>
            <span style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 14 }}>
              <span>{ru ? slider.ru : slider.en}</span>
              <strong>{fmt(slider.value)}</strong>
            </span>
            <input
              type="range"
              min={slider.min}
              max={slider.max}
              step={slider.step}
              value={slider.value}
              onChange={event => slider.set(Number(event.target.value))}
              style={{ width: '100%' }}
            />
          </label>
        ))}
      </div>

      <div style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.6 }}>
        <div>
          {ru ? 'Вода на человека до засухи: ' : 'Water per person before the drought: '}
          <strong>{fmt(before)}</strong> {ru ? 'м³ в год' : 'm³ a year'}
        </div>
        <div>
          {ru ? 'Вода на человека после засухи: ' : 'Water per person after the drought: '}
          <strong>{fmt(after)}</strong> {ru ? 'м³ в год' : 'm³ a year'}
        </div>
        <div>
          {ru ? 'Категория до засухи: ' : 'Category before the drought: '}
          <strong>{ru ? NAMES[categoryBefore].ru : NAMES[categoryBefore].en}</strong>
        </div>
        <div>
          {ru ? 'Категория после засухи: ' : 'Category after the drought: '}
          <strong>{ru ? NAMES[categoryAfter].ru : NAMES[categoryAfter].en}</strong>
        </div>
        <div>
          {ru ? 'Дальнейшее снижение ресурсов до следующей категории: ' : 'Further fall in resources to the next category: '}
          <strong>{furtherFall === null ? '—' : `${fmt(furtherFall, 1)}%`}</strong> {furtherText}
        </div>
        <div style={{ marginTop: 6, fontSize: 14 }}>
          {ru ? 'Иллюстративное разбиение воды после засухи: сельское хозяйство ' : 'Illustrative split after the drought: farming '}
          <strong>{fmt(farmingShare)}</strong>
          {ru ? ' м³, остальные нужды ' : ' m³, other uses '}
          <strong>{fmt(otherShare)}</strong>
          {ru ? ' м³ на человека в год' : ' m³ per person a year'}
        </div>
      </div>

      <svg
        viewBox="0 0 320 94"
        width="100%"
        role="img"
        aria-label={ru ? 'Шкала водообеспеченности на человека' : 'Scale of water per person'}
        style={{ display: 'block', maxWidth: 360, marginTop: 10 }}
      >
        {BANDS.map(([from, to, opacity]) => (
          <rect key={from} x={xOf(from)} y={30} width={xOf(to) - xOf(from)} height={24} fill="currentColor" fillOpacity={opacity} />
        ))}
        {[500, 1000, 1700].map(threshold => (
          <text key={threshold} x={xOf(threshold)} y={68} fontSize="10" textAnchor="middle" fill="currentColor">
            {fmt(threshold)}
          </text>
        ))}
        <line x1={xBefore} y1={22} x2={xBefore} y2={58} stroke="currentColor" strokeWidth={1.5} strokeDasharray="4 3" />
        <text x={xBefore} y={14} fontSize="10" textAnchor={anchorOf(xBefore)} fill="currentColor">
          {ru ? 'до засухи' : 'before drought'}
        </text>
        <line x1={xAfter} y1={22} x2={xAfter} y2={58} stroke="currentColor" strokeWidth={3} />
        <text x={xAfter} y={90} fontSize="10" textAnchor={anchorOf(xAfter)} fill="currentColor">
          {ru ? 'после засухи' : 'after drought'}
        </text>
      </svg>

      <p style={{ margin: '12px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Формулы. ' : 'Formulas. '}</strong>
        {ru
          ? 'Вода на человека = возобновляемые ресурсы × 1 000 ÷ население, потому что 1 км³ = 10⁹ м³, а 1 млн человек = 10⁶ человек. После засухи: вода × (1 − засуха, %). Пороги: ниже 1 700 — водный стресс; ниже 1 000 — водный дефицит; ниже 500 — абсолютный дефицит. Пороги Фалькенмарк — эмпирическое правило: они не учитывают, как используется вода, насколько богата страна и что она ввозит из-за рубежа.'
          : 'Water per person = renewable resources × 1 000 ÷ population, because 1 km³ = 10⁹ m³ and 1 million people = 10⁶ people. After a drought: water × (1 − drought %). Thresholds: below 1,700 = water stress; below 1,000 = water scarcity; below 500 = absolute scarcity. The Falkenmark thresholds are a rule of thumb: they ignore how the water is used, how rich the country is, and what food it imports.'}
      </p>
      <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Физический или экономический? ' : 'Physical or economic? '}</strong>
        {ru
          ? 'Физический дефицит: более 75% речного стока изымается на сельское хозяйство, промышленность и быт. Экономический дефицит: вода рядом, но стране не по силам освоить и доставить её, потому что человеческий, институциональный и финансовый капитал ограничивают доступ. Симуляция только задаёт этот тест и не вычисляет его: для проверки нужны данные о доходах, инвестициях, управлении и инфраструктуре.'
          : 'Physical scarcity: more than 75% of river flows are withdrawn for farming, industry and homes. Economic scarcity: water is nearby, but a country cannot afford to develop and deliver it, because human, institutional and financial capital limit access. This simulation only states the test; it does not calculate it. Testing it needs data on income, investment, governance and infrastructure.'}
      </p>
      <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Доля сельского хозяйства. ' : 'Farming share. '}</strong>
        {ru
          ? 'Разбиение иллюстративное. По данным FAO за 2023 год, в мире на сельское хозяйство приходилось 72% изъятой воды, на промышленность 15%, на услуги 13%. Разбиение выше делит воду после засухи в тех же пропорциях; это не измеренный забор воды.'
          : 'The split is illustrative. In FAO data for 2023, farming took 72% of withdrawals worldwide, industry 15% and services 13%. The split above divides the water after the drought in the same proportions; it is not a measured withdrawal.'}
      </p>
      <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Источники. ' : 'Sources. '}</strong>
        {ru
          ? 'UN-Water (2017), Policy Brief: Water Quality, с. 5 (пороги, по Falkenmark и Lindh, 1976); FAO (2007), брошюра ко Дню водных ресурсов, карта «Areas of Physical and Economic Water Scarcity» (тест 75%); портал данных FAO SDG, индикатор 6.4.2 (72%, 15% и 13% за 2023 год).'
          : 'UN-Water (2017), Policy Brief: Water Quality, p. 5 (thresholds, after Falkenmark and Lindh, 1976); FAO (2007), World Water Day brochure, map "Areas of Physical and Economic Water Scarcity" (the 75% test); FAO SDG Data Portal, indicator 6.4.2 (72%, 15% and 13% in 2023).'}
      </p>
      <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Что заметить. ' : 'What to notice. '}</strong>
        {ru
          ? 'Это помогает с вопросами «объясните» и «обсудите» о дефиците воды, например: «Объясните, как засуха может перевести страну из водного стресса в водный дефицит». Сначала определите категорию по цифре на человека, затем скажите, насколько засуха сдвигает страну, проверьте физический или экономический тест и закончите примером с названием места. Сельское хозяйство забирает больше всего воды, поэтому последствия засухи часто видны сначала в земледелии.'
          : 'This helps with "explain" and "discuss" questions on water scarcity, for example: "Explain how a drought can move a country from water stress to water scarcity." Read the category from the figure per person, then say how far a drought moves the country, apply the physical or economic test, and finish with a named case study. Farming takes most of the water, so drought effects often show up in farming first.'}
      </p>
    </div>
  );
}
