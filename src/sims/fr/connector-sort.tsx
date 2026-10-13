import { useState } from 'react';
import type { Lang } from '../../contract/types';
import { terms } from '../../../content/fr/terms/connectors';
import { GROUPS, buildRound, connectorsFrom, countRight, groupLabel, type Connector, type GroupKey } from './connector-logic';

// The sort for p1-connectors. Each set has two connectors from every one of the nine functions, in a shuffled order.
// The logic is in connector-logic.ts; the groups are fixed by the connector ids there.
const PER_GROUP = 2;
const ALL = connectorsFrom(terms);

const COPY = {
  en: {
    title: 'Sort the connectors by function',
    hint: 'Each connector has one of the nine functions. Choose a function for each connector, then check (Vérifier). Each set has two connectors from every function.',
    choose: 'Choose a function',
    groupFor: 'Function of',
    check: 'Check (Vérifier)',
    again: 'New set',
    right: 'Right:',
    wrong: 'Wrong. Correct:',
    result: (right: number, total: number) => `Right: ${right} of ${total}.`,
  },
  ru: {
    title: 'Разложите связки по функциям',
    hint: 'Каждая связка выполняет одну из девяти функций. Выберите функцию для каждой связки и нажмите «Проверить» (Vérifier). В каждом наборе по две связки из каждой функции.',
    choose: 'Выберите функцию',
    groupFor: 'Функция связки',
    check: 'Проверить (Vérifier)',
    again: 'Новый набор',
    right: 'Верно:',
    wrong: 'Неверно. Правильно:',
    result: (right: number, total: number) => `Верно: ${right} из ${total}.`,
  },
};

const button = {
  border: '1px solid currentColor',
  borderRadius: 6,
  padding: '4px 12px',
  background: 'transparent',
  color: 'inherit',
  cursor: 'pointer',
} as const;

export default function ConnectorSort({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const [round, setRound] = useState<Connector[]>(() => buildRound(ALL, PER_GROUP));
  const [answers, setAnswers] = useState<Partial<Record<string, GroupKey>>>({});
  const [checked, setChecked] = useState(false);

  const choose = (connectorId: string, value: string): void => {
    setAnswers(previous => ({ ...previous, [connectorId]: value === '' ? undefined : (value as GroupKey) }));
    setChecked(false);
  };

  const newSet = (): void => {
    setRound(buildRound(ALL, PER_GROUP));
    setAnswers({});
    setChecked(false);
  };

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <p style={{ margin: 0 }}>
        <strong>{copy.title}</strong>
        <br />
        {copy.hint}
      </p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
        {round.map(c => {
          const answer = answers[c.id];
          const isRight = answer === c.group;
          // A green border is 3.17:1 on the dark card, enough for a non-text border; red is 2.45:1, so a wrong row keeps
          // the default border and relies on its text.
          const borderColor = checked && isRight ? '#1a7f37' : 'currentColor';
          return (
            <li key={c.id} style={{ border: `1px solid ${borderColor}`, borderRadius: 8, padding: '8px 10px', display: 'grid', gap: 6 }}>
              <div>
                <strong lang="fr">{c.fr}</strong>
                <span style={{ marginLeft: 8, opacity: 0.8 }}>
                  {c.en} · {c.ru}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
                <select value={answer ?? ''} onChange={e => choose(c.id, e.target.value)} aria-label={`${copy.groupFor}: ${c.fr}`}>
                  <option value="">{copy.choose}</option>
                  {GROUPS.map(g => (
                    <option key={g.key} value={g.key}>
                      {groupLabel(g.key, lang)}
                    </option>
                  ))}
                </select>
                {checked ? (
                  <span>
                    {isRight ? copy.right : copy.wrong} <strong>{groupLabel(c.group, lang)}</strong>
                  </span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
        <button type="button" style={button} onClick={() => setChecked(true)}>
          {copy.check}
        </button>
        <button type="button" style={button} onClick={newSet}>
          {copy.again}
        </button>
        <span role="status">{checked ? copy.result(countRight(round, answers), round.length) : ''}</span>
      </div>
    </div>
  );
}
