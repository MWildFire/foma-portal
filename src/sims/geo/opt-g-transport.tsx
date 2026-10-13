import { useState, type CSSProperties } from 'react';
import type { Lang } from '../../contract/types';

// IB Geography Option G (G.4): how the split of 10,000 daily trips between transport modes changes CO2e emissions and
// average travel time. A teaching model, not a forecast: every coefficient is an illustrative assumption.
// Emission factors: UK DESNZ GHG conversion factors 2023, "Journey emissions comparisons" (kg CO2e per passenger-mile,
// direct plus indirect), converted to grams per passenger-km: petrol car 0.22 kg = 137 g; train 0.07 kg = 43 g;
// bicycle and walking 0. The BRT figure (80 g) and all speeds are teaching assumptions, not DESNZ values.

type Mode = 'car' | 'bus' | 'rail' | 'bike' | 'walk';

interface Strings {
  title: string;
  lead: string;
  modes: Record<Mode, string>;
  trips: string;
  co2: string;
  time: string;
  tonnes: string;
  minutes: string;
  formula: string;
  notes: string;
}

const MODES: Mode[] = ['car', 'bus', 'rail', 'bike', 'walk'];
// Starting shares in percent, in the order of MODES. The shares always add up to 100.
const START_SHARES = [60, 25, 5, 2, 8];
const TRIPS_PER_DAY = 10000;
const TRIP_KM = 6;
const GRAMS_PER_PASSENGER_KM: Record<Mode, number> = { car: 137, bus: 80, rail: 43, bike: 0, walk: 0 };
const SPEED_KMH: Record<Mode, number> = { car: 20, bus: 24, rail: 30, bike: 14, walk: 5 };
const COLOR: Record<Mode, string> = { car: '#b23a48', bus: '#1f6fb2', rail: '#2a9d8f', bike: '#e9a03b', walk: '#5d8a3a' };

const TEXT: Record<Lang, Strings> = {
  en: {
    title: 'Modal split: emissions and travel time for one day',
    lead: '10,000 trips a day, average trip 6 km. Move a slider: the other shares adjust so the total stays at 100%.',
    modes: { car: 'Car', bus: 'BRT bus', rail: 'Rail (metro, tram or train)', bike: 'Cycling', walk: 'Walking' },
    trips: 'trips',
    co2: 'CO2e per day',
    time: 'Average travel time',
    tonnes: 't',
    minutes: 'min',
    formula: 'Emissions = trips × share × 6 km × grams per passenger-km. Time = share × 6 km ÷ speed.',
    notes:
      'Teaching assumptions, not measured data. Car: 137 g CO2e per passenger-km (DESNZ 2023 factor: 0.17 kg direct plus 0.05 kg indirect per mile, converted to km). BRT bus: 80 g (assumption; for comparison, the DESNZ coach factor is 31 g). Rail: 43 g (DESNZ train factor: 0.06 + 0.01 kg per mile; used here as an approximation for metro and tram). Cycling and walking: 0 (DESNZ). Speeds (assumptions): car 20, BRT 24, rail 30, cycling 14, walking 5 km/h. Waiting time and transfers are ignored.',
  },
  ru: {
    title: 'Распределение поездок: выбросы и время в пути за день',
    lead: '10 000 поездок в день, средняя поездка 6 км. Двигайте ползунок: остальные доли пересчитываются, сумма остаётся 100%.',
    modes: { car: 'Автомобиль', bus: 'Автобус BRT', rail: 'Рельс (метро, трамвай, поезд)', bike: 'Велосипед', walk: 'Пешком' },
    trips: 'поездок',
    co2: 'Выбросы CO2e за день',
    time: 'Среднее время в пути',
    tonnes: 'т',
    minutes: 'мин',
    formula: 'Выбросы = поездки × доля × 6 км × граммы на пассажиро-километр. Время = доля × 6 км ÷ скорость.',
    notes:
      'Учебные допущения, а не измеренные данные. Автомобиль: 137 г CO2e на пассажиро-километр (коэффициент DESNZ 2023: 0,17 кг прямых и 0,05 кг косвенных выбросов на милю, пересчитано в километры). Автобус BRT: 80 г (допущение; для сравнения коэффициент DESNZ для коуча составляет 31 г). Рельс: 43 г (коэффициент DESNZ для поезда: 0,06 + 0,01 кг на милю; для метро и трамвая это приближение). Велосипед и ходьба: 0 (DESNZ). Скорости (допущения): автомобиль 20, BRT 24, рельс 30, велосипед 14, пешком 5 км/ч. Время ожидания и пересадок не учитывается.',
  },
};

// Sets one mode to `value` and shares the rest of the 100% among the other modes in proportion to their current shares.
// Largest-remainder rounding keeps the whole numbers adding up to exactly 100.
function rebalance(shares: number[], index: number, value: number): number[] {
  const target = Math.min(100, Math.max(0, Math.round(value)));
  const rest = 100 - target;
  const othersTotal = shares.reduce((sum, share, i) => (i === index ? sum : sum + share), 0);
  const exact = shares.map((share, i) => {
    if (i === index) return 0;
    return othersTotal > 0 ? (share * rest) / othersTotal : rest / (shares.length - 1);
  });
  const result = exact.map(amount => Math.floor(amount));
  let remaining = rest - result.reduce((sum, amount) => sum + amount, 0);
  const byFraction = exact
    .map((amount, i) => ({ i, fraction: amount - Math.floor(amount) }))
    .filter(entry => entry.i !== index)
    .sort((a, b) => b.fraction - a.fraction || a.i - b.i);
  for (const entry of byFraction) {
    if (remaining <= 0) break;
    result[entry.i] += 1;
    remaining -= 1;
  }
  result[index] = target;
  return result;
}

// Daily CO2e in tonnes and the average travel time in minutes for the current shares.
function totals(shares: number[]): { tonnes: number; minutes: number } {
  let grams = 0;
  let minutes = 0;
  MODES.forEach((mode, i) => {
    const share = shares[i] / 100;
    grams += TRIPS_PER_DAY * share * TRIP_KM * GRAMS_PER_PASSENGER_KM[mode];
    minutes += share * (TRIP_KM / SPEED_KMH[mode]) * 60;
  });
  return { tonnes: grams / 1e6, minutes };
}

function format(value: number, digits: number, lang: Lang): string {
  const text = value.toFixed(digits);
  return lang === 'ru' ? text.replace('.', ',') : text;
}

const CARD: CSSProperties = { border: '1px solid currentColor', borderRadius: 8, padding: '0.6rem 0.8rem' };

export default function GTransportSim({ lang }: { lang: Lang }) {
  const [shares, setShares] = useState<number[]>(START_SHARES);
  const t = TEXT[lang];
  const total = totals(shares);
  const numberLocale = lang === 'ru' ? 'ru-RU' : 'en-US';

  return (
    <figure style={{ margin: '1.5rem 0', maxWidth: '100%', boxSizing: 'border-box' }}>
      <figcaption style={{ fontWeight: 600 }}>{t.title}</figcaption>
      <p style={{ margin: '0.4rem 0 0.9rem' }}>{t.lead}</p>

      {MODES.map((mode, i) => (
        <div key={mode} style={{ marginBottom: '0.7rem' }}>
          <label htmlFor={`g-transport-${mode}`} style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
            <span>{t.modes[mode]}</span>
            <strong>{shares[i]}%</strong>
          </label>
          <input
            id={`g-transport-${mode}`}
            type="range"
            min={0}
            max={100}
            step={1}
            value={shares[i]}
            onChange={event => setShares(rebalance(shares, i, Number(event.target.value)))}
            style={{ width: '100%', margin: '4px 0 0' }}
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        style={{ display: 'flex', height: 16, borderRadius: 4, overflow: 'hidden', margin: '0.9rem 0 0.5rem' }}
      >
        {MODES.map((mode, i) => (
          <div key={mode} style={{ width: `${shares[i]}%`, background: COLOR[mode] }} />
        ))}
      </div>
      <ul
        style={{ listStyle: 'none', padding: 0, margin: '0 0 0.9rem', display: 'flex', flexWrap: 'wrap', gap: '0.25rem 0.9rem', fontSize: '0.85rem' }}
      >
        {MODES.map(mode => (
          <li key={mode} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span
              aria-hidden="true"
              style={{ display: 'inline-block', width: 12, height: 12, borderRadius: 2, background: COLOR[mode] }}
            />
            {t.modes[mode]}
          </li>
        ))}
      </ul>

      <div
        aria-live="polite"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.6rem' }}
      >
        <div style={CARD}>
          <div>{t.co2}</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>
            {format(total.tonnes, 1, lang)} {t.tonnes}
          </div>
        </div>
        <div style={CARD}>
          <div>{t.time}</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>
            {format(total.minutes, 1, lang)} {t.minutes}
          </div>
        </div>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0.9rem 0 0', fontSize: '0.9rem' }}>
        {MODES.map((mode, i) => {
          const trips = (TRIPS_PER_DAY * shares[i]) / 100;
          const tonnes = (trips * TRIP_KM * GRAMS_PER_PASSENGER_KM[mode]) / 1e6;
          return (
            <li
              key={mode}
              style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.2rem 0.5rem', padding: '2px 0' }}
            >
              <span>{t.modes[mode]}</span>
              <span>
                {Math.round(trips).toLocaleString(numberLocale)} {t.trips}, {format(tonnes, 2, lang)} {t.tonnes}
              </span>
            </li>
          );
        })}
      </ul>

      <p style={{ margin: '0.9rem 0 0.4rem', fontSize: '0.9rem' }}>{t.formula}</p>
      <p style={{ margin: 0, fontSize: '0.8rem' }}>{t.notes}</p>
    </figure>
  );
}
