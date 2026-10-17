import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative reservoir model, not data about any real dam. Volumes are million m³ (Mm³).
// Each year: water = storage + inflow − losses; supplied = min(demand, water).
// Storage at year end = min(capacity, water − supplied). Water above capacity spills.
// Losses = assumed evaporation (% of capacity a year) × capacity. Capacity is constant within a run; sedimentation is discussed separately, not modelled as water loss. The reservoir starts full.
// Demand is met in a year when the water available covers the whole demand.
// Fixed 10-year inflow pattern (no random numbers): multipliers of the mean annual inflow.
// Years 4 and 8 are dry and use the dry-year slider. The eight normal years average exactly 1.00.
// Sediment: UN University press release, 11 Jan 2023: global average annual storage loss of about 0.36% of initial capacity (UNU-INWEH study). The study says this may be an underestimate; earlier estimates mostly fall between 0.5% and 1% a year.
// https://unu.edu/press-release/trapped-sediment-robbing-worlds-large-dams-vital-water-storage-capacity
// Displacement: World Commission on Dams (2000), Dams and Development: A New Framework for Decision-Making, Executive Summary, p. xxx (Roman numeral 30; "some 40-80 million people displaced by dams"); chapter 1, pp. 16-17 ("some 40 to 80 million people"). Checked in a scanned copy (OCR of the page images), not in a publisher text layer.
// https://www.bpb.de/apuz/25868/mehr-nutzen-aus-staudamm-grossprojekten?p=9

const PATTERN: (number | 'dry')[] = [1.0, 1.1, 0.9, 'dry', 1.05, 0.95, 1.0, 'dry', 1.1, 0.9];
const CUTS = [0, 10, 20]; // management options: % less demand
const LEFT = 36;
const RIGHT = 312;
const TOP = 14;
const BOTTOM = 124;

interface YearRow {
  year: number;
  dry: boolean;
  inflow: number;
  end: number; // storage at the end of the year
  met: boolean;
  shortfall: number;
  spill: number;
}

function simulate(capacity: number, meanInflow: number, dryPct: number, demand: number, lossPct: number): YearRow[] {
  let storage = capacity; // the reservoir starts full
  const loss = (lossPct / 100) * capacity;
  return PATTERN.map((step, i) => {
    const inflow = meanInflow * (step === 'dry' ? dryPct / 100 : step);
    const available = storage + inflow;
    const water = available - Math.min(loss, available);
    const supplied = Math.min(demand, water);
    const left = water - supplied;
    storage = Math.min(capacity, left);
    return {
      year: i + 1,
      dry: step === 'dry',
      inflow,
      end: storage,
      met: water >= demand,
      shortfall: demand - supplied,
      spill: Math.max(0, left - capacity),
    };
  });
}

export default function OptADamsSim({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [capacity, setCapacity] = useState(300); // million m³
  const [meanInflow, setMeanInflow] = useState(300); // million m³ a year
  const [dryPct, setDryPct] = useState(40); // % of mean inflow in a dry year
  const [demand, setDemand] = useState(320); // million m³ a year, before management
  const [lossPct, setLossPct] = useState(1); // % of capacity a year
  const [cut, setCut] = useState(0); // % less demand (management option)

  // Decimal comma and grouped thousands in Russian; decimal point and commas in English.
  const fmt = (value: number, digits = 0): string => {
    const [whole, fraction] = Math.abs(value).toFixed(digits).split('.');
    const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ru ? ' ' : ',');
    const isZero = Math.abs(value) < 0.5 * 10 ** -digits;
    const sign = value < 0 && !isZero ? '−' : '';
    return sign + grouped + (fraction === undefined ? '' : (ru ? ',' : '.') + fraction);
  };

  const demandNow = demand * (1 - cut / 100);
  const years = simulate(capacity, meanInflow, dryPct, demandNow, lossPct);
  const yearsMet = years.filter(row => row.met).length;
  const totalShortfall = years.reduce((sum, row) => sum + row.shortfall, 0);
  const totalSpill = years.reduce((sum, row) => sum + row.spill, 0);
  const lowest = Math.min(...years.map(row => row.end));
  const averageInflow = years.reduce((sum, row) => sum + row.inflow, 0) / years.length;
  const balance = averageInflow - (lossPct / 100) * capacity - demandNow;

  const sliders = [
    { key: 'capacity', en: 'Reservoir capacity (million m³)', ru: 'Ёмкость водохранилища (млн м³)', min: 50, max: 1000, step: 10, digits: 0, value: capacity, set: setCapacity },
    { key: 'inflow', en: 'Mean annual inflow (million m³ a year)', ru: 'Средний годовой приток (млн м³ в год)', min: 50, max: 1000, step: 10, digits: 0, value: meanInflow, set: setMeanInflow },
    { key: 'dry', en: 'Inflow in a dry year (% of mean)', ru: 'Приток в сухой год (% от среднего)', min: 10, max: 100, step: 5, digits: 0, value: dryPct, set: setDryPct },
    { key: 'demand', en: 'Annual demand before management (million m³ a year)', ru: 'Годовой спрос до мер (млн м³ в год)', min: 50, max: 1000, step: 10, digits: 0, value: demand, set: setDemand },
    { key: 'loss', en: 'Assumed evaporation loss (% of capacity a year)', ru: 'Условное испарение (% ёмкости в год)', min: 0, max: 5, step: 0.1, digits: 1, value: lossPct, set: setLossPct },
  ];

  const cutLabel = (option: number): string => {
    if (ru) return option === 0 ? 'без изменений (спрос как задан)' : `снизить спрос на ${option}%`;
    return option === 0 ? 'no change (demand as set)' : `cut demand by ${option}%`;
  };

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <p style={{ margin: '0 0 8px', fontWeight: 600 }}>
        {ru ? 'Учебная модель — не данные о реальной плотине.' : 'Illustrative — not data about any real dam.'}
      </p>
      <p style={{ margin: '0 0 12px', fontSize: 13, lineHeight: 1.5 }}>
        {ru
          ? 'Задайте ёмкость, приток, спрос и засуху, затем выберите вариант управления. Все объёмы в миллионах кубометров (млн м³).'
          : 'Set the capacity, inflow, demand and drought, then choose a management option. All volumes are in million cubic metres (million m³).'}
      </p>

      <div>
        {sliders.map(slider => (
          <label key={slider.key} style={{ display: 'block', marginBottom: 10 }}>
            <span style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 14 }}>
              <span>{ru ? slider.ru : slider.en}</span>
              <strong>{fmt(slider.value, slider.digits)}</strong>
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

      <label style={{ display: 'block', marginBottom: 12 }}>
        <span style={{ display: 'block', fontSize: 14, marginBottom: 4 }}>{ru ? 'Вариант управления' : 'Management option'}</span>
        <select value={cut} onChange={event => setCut(Number(event.target.value))} style={{ width: '100%' }}>
          {CUTS.map(option => (
            <option key={option} value={option}>
              {cutLabel(option)}
            </option>
          ))}
        </select>
      </label>

      <div style={{ margin: '0 0 12px', fontSize: 15, lineHeight: 1.6 }}>
        <div>
          {ru ? 'Лет, в которые спрос удовлетворён: ' : 'Years in which demand is met: '}
          <strong>{yearsMet}</strong> {ru ? 'из 10' : 'of 10'}
        </div>
        <div>
          {ru ? 'Общий недостаток воды за 10 лет: ' : 'Total shortfall over 10 years: '}
          <strong>{fmt(totalShortfall)}</strong> {ru ? 'млн м³' : 'million m³'}
        </div>
        <div>
          {ru ? 'Самый низкий запас на конец года: ' : 'Lowest storage at a year end: '}
          <strong>{fmt(lowest)}</strong> {ru ? 'млн м³' : 'million m³'} ({fmt((lowest / capacity) * 100)}% {ru ? 'ёмкости' : 'of capacity'})
        </div>
        <div>
          {ru ? 'Сброс через водосброс за 10 лет: ' : 'Water spilled over 10 years: '}
          <strong>{fmt(totalSpill)}</strong> {ru ? 'млн м³' : 'million m³'}
        </div>
        <div>
          {ru ? 'Средний приток за 10 лет: ' : 'Average inflow over 10 years: '}
          <strong>{fmt(averageInflow)}</strong> {ru ? 'млн м³ в год' : 'million m³ a year'}
        </div>
        <div>
          {ru ? 'Средний приток − условное испарение − спрос: ' : 'Mean inflow − assumed evaporation − demand: '}
          <strong>{fmt(balance)}</strong> {ru ? 'млн м³ в год' : 'million m³ a year'}
        </div>
      </div>

      <p style={{ margin: '0 0 2px', fontSize: 14 }}>
        {ru ? 'Запас воды на конец каждого года, млн м³ (* — сухой год)' : 'Storage at the end of each year, million m³ (* = dry year)'}
      </p>
      <p style={{ fontSize: 13 }}>{ru ? 'Пунктир — ёмкость водохранилища.' : 'Dashed line: reservoir capacity.'}</p>
      <ReadableDiagram lang={lang}><svg
        viewBox="0 0 320 166"
        width="100%"
        role="img"
        aria-label={ru ? 'Запас воды на конец каждого года' : 'Storage at the end of each year'}
        style={{ display: 'block', maxWidth: 360 }}
      >
        <line x1={LEFT} y1={TOP} x2={RIGHT} y2={TOP} stroke="currentColor" strokeWidth={1} strokeDasharray="4 3" opacity={0.6} />
        <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="currentColor" strokeWidth={1} opacity={0.5} />
        <text x={LEFT - 4} y={TOP + 4} fontSize="10" textAnchor="end" fill="currentColor">{fmt(capacity)}</text>
        <text x={LEFT - 4} y={BOTTOM + 4} fontSize="10" textAnchor="end" fill="currentColor">0</text>
        {years.map((row, i) => {
          const slot = (RIGHT - LEFT) / years.length;
          const x = LEFT + slot * i + slot * 0.2;
          const width = slot * 0.6;
          const top = BOTTOM - (row.end / capacity) * (BOTTOM - TOP);
          return (
            <g key={row.year}>
              <rect
                x={x}
                y={top}
                width={width}
                height={BOTTOM - top}
                fill={row.met ? 'currentColor' : 'none'}
                fillOpacity={0.55}
                stroke="currentColor"
                strokeWidth={row.met ? 0 : 1.5}
              />
              <text x={x + width / 2} y={BOTTOM + 14} fontSize="10" textAnchor="middle" fill="currentColor">
                {row.year}{row.dry ? '*' : ''}
              </text>
              <text x={x + width / 2} y={BOTTOM + 28} fontSize="9" textAnchor="middle" fill="currentColor">
                {row.met ? (ru ? 'ок' : 'ok') : (ru ? 'мало' : 'short')}
              </text>
            </g>
          );
        })}
      </svg></ReadableDiagram>

      <p style={{ margin: '12px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Формулы. ' : 'Formulas. '}</strong>
        {ru
          ? 'Каждый год: вода = запас + приток − потери; подано = меньшее из спроса и воды; запас на конец года = меньшее из ёмкости и (вода − подано), а всё, что выше ёмкости, сбрасывается через водосброс. Потери воды = условное испарение (% ёмкости в год) × ёмкость; значение 1% — учебное допущение, а не измеренный коэффициент. Заиление уменьшает вместимость, а не испаряет воду: здесь ёмкость постоянна в пределах одного прогона. Для отдельного сравнения можно задать меньшую ёмкость ползунком; скорость заиления эта модель не прогнозирует. Приток = средний приток × множитель года: 1,00; 1,10; 0,90; сухой; 1,05; 0,95; 1,00; сухой; 1,10; 0,90. Сухие годы (4 и 8) берут значение из ползунка. Восемь обычных лет в среднем дают 1,00, а шаблон фиксирован, поэтому одинаковые входные данные всегда дают одинаковый результат. Спрос удовлетворён, если вода в этом году покрывает весь спрос. Долгосрочный баланс = средний приток − потери − спрос; если он отрицательный, запас в долгосрочной перспективе падает.'
          : 'Each year: water = storage + inflow − losses; supplied = the smaller of demand and water; storage at year end = the smaller of capacity and (water − supplied), and anything above capacity spills. Water loss = assumed evaporation (% of capacity a year) × capacity; the 1% default is a teaching assumption, not a measured factor. Sedimentation reduces capacity rather than evaporating water: capacity stays constant within this run. Compare a lower capacity with the slider separately; this model does not forecast sedimentation. Inflow = mean inflow × pattern multiplier: 1.00, 1.10, 0.90, dry, 1.05, 0.95, 1.00, dry, 1.10, 0.90. The dry years (4 and 8) use the dry-year slider. The eight normal years average exactly 1.00, and the pattern is fixed, so the same inputs always give the same answer. Demand is met in a year when the water available covers the full demand. Long-run balance = average inflow − losses − demand; if it is negative, storage falls over the long run.'}
      </p>
      <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Компромиссы. ' : 'Trade-offs. '}</strong>
        {ru
          ? 'Плотина запасает воду, может давать электричество и снижать пики паводков, но дорогая в строительстве и обслуживании и меняет реку. Переселение: Всемирная комиссия по плотинам (2000) приводит глобальную оценку: от 40 до 80 млн человек вытеснены плотинами. Заиление: по исследованию Университета ООН (2023), средняя годовая потеря вместимости составляет около 0,36% первоначальной ёмкости. Исследование отмечает, что эта оценка может быть занижена, а более ранние оценки в основном лежат в диапазоне от 0,5% до 1% в год. Вместимость со временем сокращается, и до дельт и пляжей доходит меньше наносов. Экосистемы: плотины мешают миграции рыбы и меняют сезонный сток, от которого зависят пойменные местообитания. Управление спросом не требует новых объёмов, но пользователям приходится менять привычки, и это тоже имеет издержки.'
          : 'A dam stores water, can generate power and can reduce flood peaks, but it is costly to build and maintain and it changes the river. Displacement: the World Commission on Dams (2000) gave a global estimate of 40 to 80 million people displaced by dams. Sediment: the UN University study (2023) gives a global average annual storage loss of about 0.36% of initial capacity, and notes that this may be an underestimate (earlier estimates generally fall between 0.5% and 1% a year). Storage capacity shrinks over time, and less sediment reaches deltas and beaches. Ecosystems: dams block fish migration and change the seasonal flows that floodplain habitats depend on. Demand management needs no new storage, but users must change their habits, which has its own costs.'}
      </p>
      <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Что заметить. ' : 'What to notice. '}</strong>
        {ru
          ? 'Это помогает с вопросами «обсудите» и «оцените» о управлении водой, например: «Обсудите, является ли плотина лучшим способом обеспечить водой полузасушливую страну». Запустите сценарий по умолчанию: без снижения спроса он не удовлетворяется в нескольких годах, а снижение на 20% удовлетворяет его во все 10 лет. Одна плотина не гарантирует воду, если средний приток меньше спроса. Затем взвесьте компромиссы: стоимость, переселение людей, заиление, экосистемы, и сравните плотину с управлением спросом.'
          : 'This helps with "discuss" and "evaluate" questions on water management, for example: "Discuss whether a dam is the best way to secure water supply in a semi-arid country." Run the default scenario: with no demand cut, demand is not met in several years, while a 20% cut meets it in all ten. A dam alone cannot guarantee supply when the average inflow is below demand. Then weigh the trade-offs: costs, displaced people, sediment and ecosystems, and compare the dam with demand management.'}
      </p>
      <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Источники. ' : 'Sources. '}</strong>
        {ru
          ? 'Университет ООН (2023), пресс-релиз от 11 января 2023 г. о заилении водохранилищ (средняя годовая потеря около 0,36% первоначальной ёмкости, возможно занижена; исследование UNU-INWEH в журнале Sustainability); Всемирная комиссия по плотинам (2000), Dams and Development: A New Framework for Decision-Making, Executive Summary, с. xxx (римская нумерация: 30; от 40 до 80 млн человек вытеснены плотинами); глава 1, с. 16–17.'
          : 'UN University (2023), press release of 11 January 2023 on reservoir sedimentation (global average annual storage loss about 0.36% of initial capacity, possibly an underestimate; UNU-INWEH study in Sustainability); World Commission on Dams (2000), Dams and Development: A New Framework for Decision-Making, Executive Summary, p. xxx (Roman numeral 30; 40 to 80 million people displaced by dams); chapter 1, pp. 16–17.'}
      </p>
    </div>
  );
}
