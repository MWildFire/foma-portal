import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Loan or savings calculator. With k payments (or compounding periods) a year, the rate per period is r / (100k) and
// there are N = nk periods. Compound value: PV (1 + i)^N. Equal payment: M = PV i / (1 - (1 + i)^(-N)).
// Balance after j payments: PV (1 + i)^j - M ((1 + i)^j - 1) / i. Each table row: interest on the balance, the rest repays it.

const TEXT = {
  en: {
    label: 'Loan balance over time, with the first rows of the amortisation table',
    principal: 'Principal PV (AED)',
    rate: 'Annual rate r (%)',
    years: 'Years n',
    perYear: 'Payments per year k',
    compound: 'Compound value PV(1 + i)^N, with no payments',
    payment: 'Equal payment M',
    balance: 'Balance after each payment',
    columns: ['No.', 'Interest', 'Repaid', 'Balance'],
    note: 'Interest is charged on the balance first; the rest of each payment reduces it. These are positive magnitudes; in the GDC cash-flow convention, money received and paid has opposite signs (PV positive, PMT negative for a borrower).',
  },
  ru: {
    label: 'Остаток долга во времени и первые строки таблицы погашения',
    principal: 'Сумма PV (AED)',
    rate: 'Годовая ставка r (%)',
    years: 'Число лет n',
    perYear: 'Платежей в год k',
    compound: 'Сложная стоимость PV(1 + i)^N без платежей',
    payment: 'Равный платёж M',
    balance: 'Остаток долга после каждого платежа',
    columns: ['№', 'Проценты', 'Погашение', 'Остаток'],
    note: 'Сначала проценты начисляются на остаток; остальная часть платежа уменьшает долг. Здесь показаны положительные величины; на GDC поступления и выплаты имеют разные знаки (для заёмщика PV положительно, PMT отрицательно).',
  },
} as const;

const W = 320;
const H = 160;
const cell = { textAlign: 'right' as const, padding: 2 };

export default function TvmLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [principal, setPrincipal] = useState(60000);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(5);
  const [perYear, setPerYear] = useState(12);

  const i = rate / (100 * perYear);
  const periods = years * perYear;
  const compound = principal * (1 + i) ** periods;
  const payment = (principal * i) / (1 - (1 + i) ** -periods);

  // One payment at a time: interest on the balance, and the rest of the payment repays the loan.
  const fmt = (value: number, digits = 2) => value.toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-GB', { minimumFractionDigits: digits, maximumFractionDigits: digits });
  const curve = [principal];
  const rows: { no: number; interest: number; repaid: number; balance: number }[] = [];
  let balance = principal;
  for (let no = 1; no <= periods; no++) {
    const interest = balance * i;
    const repaid = payment - interest;
    balance = Math.max(0, balance - repaid);
    curve.push(balance);
    if (no <= 6) rows.push({ no, interest, repaid, balance });
  }
  const line = curve.map((value, j) => `${(j / periods) * W},${H - 10 - (value / principal) * (H - 20)}`).join(' ');

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W }} role="img" aria-label={t.label}>
        <line x1={0} y1={H - 10} x2={W} y2={H - 10} stroke="currentColor" strokeWidth={1} />
        <polyline points={line} fill="none" stroke="#4f6fd8" strokeWidth={2} />
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.5 }}>
        {t.balance}
        <br />
        {t.compound}: {fmt(compound)}
        <br />
        {t.payment}: {fmt(payment)}
        <br />
        {t.note}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.principal}: {fmt(principal, 0)}
        <input type="range" min={1000} max={200000} step={1000} value={principal} onChange={event => setPrincipal(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.rate}: {rate.toFixed(1)}
        <input type="range" min={0.5} max={15} step={0.1} value={rate} onChange={event => setRate(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.years}: {years}
        <input type="range" min={1} max={30} step={1} value={years} onChange={event => setYears(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.perYear}: {perYear}
        <input type="range" min={1} max={12} step={1} value={perYear} onChange={event => setPerYear(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <table style={{ width: '100%', fontSize: 13, marginTop: 8, borderCollapse: 'collapse' }}>
        <thead>
          <tr>{t.columns.map(column => <th key={column} style={cell}>{column}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.no}>
              <td style={cell}>{row.no}</td>
              <td style={cell}>{fmt(row.interest)}</td>
              <td style={cell}>{fmt(row.repaid)}</td>
              <td style={cell}>{fmt(row.balance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
