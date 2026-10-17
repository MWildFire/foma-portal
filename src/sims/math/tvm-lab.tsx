import { useState } from 'react';
import type { Lang } from '../../contract/types';
import ReadableDiagram from '../readable-diagram';

// Loan or savings calculator. With k payments (or compounding periods) a year, the rate per period is r / (100k) and
// there are N = nk periods. Compound value: PV (1 + i)^N. Equal payment: M = PV i / (1 - (1 + i)^(-N)).
// Balance after j payments: PV (1 + i)^j - M ((1 + i)^j - 1) / i. Each table row: interest on the balance, the rest repays it.

const TEXT = {
  en: {
    label: 'Loan balance over time, with the first rows of the amortisation table',
    principal: 'Principal PV (AED)',
    rate: 'Nominal annual rate r (%), compounded k times',
    years: 'Years n',
    perYear: 'Payments per year k',
    compound: 'Compound value PV(1 + i)^N, with no payments',
    payment: 'Equal payment M',
    balance: 'Balance after each payment',
    balanceAxis: 'Balance (AED)',
    paymentAxis: 'Payment number',
    columns: ['No.', 'Interest', 'Repaid', 'Balance'],
    note: 'Payments are at the end of each compounding period. The calculation retains the unrounded payment; table entries are rounded for display only, so a bank schedule with payments rounded to cents can differ. Interest is charged on the balance first; the rest of each payment reduces it. These are positive magnitudes; in the GDC cash-flow convention, money received and paid has opposite signs (PV positive, PMT negative for a borrower).',
  },
  ru: {
    label: 'Остаток долга во времени и первые строки таблицы погашения',
    principal: 'Сумма PV (AED)',
    rate: 'Номинальная годовая ставка r (%), начисление k раз',
    years: 'Число лет n',
    perYear: 'Платежей в год k',
    compound: 'Сложная стоимость PV(1 + i)^N без платежей',
    payment: 'Равный платёж M',
    balance: 'Остаток долга после каждого платежа',
    balanceAxis: 'Остаток (AED)',
    paymentAxis: 'Номер платежа',
    columns: ['№', 'Проценты', 'Погашение', 'Остаток'],
    note: 'Платежи приходятся на конец каждого периода начисления. Расчёт сохраняет неокруглённый платёж; числа таблицы округлены только для показа, поэтому банковский график с платежом до копеек может отличаться. Сначала проценты начисляются на остаток; остальная часть платежа уменьшает долг. Здесь показаны положительные величины; на GDC поступления и выплаты имеют разные знаки (для заёмщика PV положительно, PMT отрицательно).',
  },
} as const;

const W = 320;
const H = 210;
const LEFT = 60;
const BASE = H - 45;
const TOP = 30;
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
  const line = curve.map((value, j) => `${LEFT + (j / periods) * (W - LEFT - 12)},${BASE - (value / principal) * (BASE - TOP)}`).join(' ');

  return (
    <figure style={{ margin: 0 }}>
      <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W }} role="img" aria-label={t.label}>
        <text x={4} y={14} fontSize={12} fill="currentColor">{t.balanceAxis}</text>
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BASE} stroke="currentColor" />
        <line x1={LEFT} y1={BASE} x2={W - 12} y2={BASE} stroke="currentColor" />
        <text x={LEFT - 6} y={TOP + 4} textAnchor="end" fontSize={12} fill="currentColor">{fmt(principal, 0)}</text>
        <text x={LEFT - 6} y={BASE + 4} textAnchor="end" fontSize={12} fill="currentColor">0</text>
        <text x={LEFT} y={BASE + 18} textAnchor="middle" fontSize={12} fill="currentColor">0</text>
        <text x={W - 12} y={BASE + 18} textAnchor="end" fontSize={12} fill="currentColor">{periods}</text>
        <text x={W / 2} y={H - 5} textAnchor="middle" fontSize={12} fill="currentColor">{t.paymentAxis}</text>
        <polyline points={line} fill="none" stroke="#4f6fd8" strokeWidth={2} />
      </svg></ReadableDiagram>
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
