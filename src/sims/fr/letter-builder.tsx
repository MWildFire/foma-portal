import { useState } from 'react';
import type { Lang } from '../../contract/types';

// The formal letter builder (P1, T4). The student puts the eleven blocks of a French formal letter in the right order,
// then checks. Labels follow the page language; the French block texts are shown as they are. No network calls.

type BlockId = 'sender' | 'recipient' | 'date' | 'objet' | 'greeting' | 'intro' | 'body1' | 'body2' | 'request' | 'closing' | 'signature';

interface Block {
  label: { en: string; ru: string };
  text: string;
}

const BLOCKS: Record<BlockId, Block> = {
  sender: { label: { en: "Sender's details", ru: 'Отправитель' }, text: 'Camille Durand\n12, rue des Acacias\n69003 Lyon' },
  recipient: {
    label: { en: 'Recipient', ru: 'Адресат' },
    text: 'Madame la Responsable du personnel\nLibrairie Les Heures Claires\n8, quai Saint-Antoine\n69002 Lyon',
  },
  date: { label: { en: 'Place and date', ru: 'Место и дата' }, text: 'Lyon, le 12 octobre 2026' },
  objet: { label: { en: 'Subject line (Objet)', ru: 'Строка «Objet» (тема)' }, text: "Objet : demande de stage d'observation" },
  greeting: { label: { en: 'Greeting', ru: 'Обращение' }, text: 'Madame la Responsable,' },
  intro: {
    label: { en: 'Introduction', ru: 'Вступление' },
    text: "Je me permets de vous écrire pour solliciter un stage d'observation de cinq jours dans votre librairie, du 2 au 6 mars 2027, dans le cadre de ma scolarité.",
  },
  body1: {
    label: { en: 'Body paragraph 1', ru: 'Абзац 1' },
    text: "Je suis élève de première et je prépare un projet sur le métier de libraire. Ce métier m'attire depuis longtemps : je voudrais comprendre comment une librairie choisit ses titres, accueille ses clients et organise ses rencontres avec les auteurs.",
  },
  body2: {
    label: { en: 'Body paragraph 2', ru: 'Абзац 2' },
    text: "Si vous l'acceptez, je pourrais participer à la préparation des commandes et au conseil des clients, sous votre supervision. Je m'engage à respecter les horaires et le règlement de l'entreprise.",
  },
  request: {
    label: { en: 'Request', ru: 'Просьба' },
    text: "Pourriez-vous m'accueillir pendant cette période ? Je vous remercie d'avance de votre réponse, que j'attends avec intérêt.",
  },
  closing: {
    label: { en: 'Closing formula', ru: 'Формула вежливости' },
    text: "Je vous prie d'agréer, Madame la Responsable, l'expression de mes salutations distinguées.",
  },
  signature: { label: { en: 'Signature', ru: 'Подпись' }, text: 'Camille Durand' },
};

// The correct order: the layout of a formal letter in French, from the sender to the signature.
const CORRECT_ORDER: BlockId[] = ['sender', 'recipient', 'date', 'objet', 'greeting', 'intro', 'body1', 'body2', 'request', 'closing', 'signature'];

// The shuffled start order: fixed, so the page looks the same on every visit and never starts in the right order.
const START_ORDER: BlockId[] = ['request', 'body2', 'sender', 'closing', 'objet', 'recipient', 'intro', 'signature', 'greeting', 'date', 'body1'];

const COPY = {
  en: {
    title: 'Put the letter in the right order',
    hint: 'Move each block up or down, then press Check (Vérifier).',
    up: 'Up',
    down: 'Down',
    check: 'Check (Vérifier)',
    again: 'Start again',
    result: (n: number) => `${n} of ${CORRECT_ORDER.length} blocks are in the right place.`,
    right: 'In the right place',
    wrong: 'Not in the right place',
  },
  ru: {
    title: 'Расставьте части письма по порядку',
    hint: 'Переставьте каждый блок вверх или вниз, затем нажмите «Проверить» (Vérifier).',
    up: 'Вверх',
    down: 'Вниз',
    check: 'Проверить (Vérifier)',
    again: 'Начать заново',
    result: (n: number) => `На своих местах: ${n} из ${CORRECT_ORDER.length}.`,
    right: 'На месте',
    wrong: 'Не на месте',
  },
};

const button = {
  border: '1px solid currentColor',
  borderRadius: 6,
  padding: '2px 10px',
  background: 'transparent',
  color: 'inherit',
  cursor: 'pointer',
} as const;

export default function LetterBuilder({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const [order, setOrder] = useState<BlockId[]>(START_ORDER);
  const [checked, setChecked] = useState(false);

  const move = (index: number, step: -1 | 1): void => {
    const target = index + step;
    if (target < 0 || target >= order.length) return;
    const next = [...order];
    [next[index], next[target]] = [next[target], next[index]];
    setOrder(next);
    setChecked(false);
  };

  const rightCount = order.filter((id, index) => id === CORRECT_ORDER[index]).length;

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <p style={{ margin: 0 }}>
        <strong>{copy.title}</strong>
        <br />
        {copy.hint}
      </p>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
        {order.map((id, index) => {
          const block = BLOCKS[id];
          const label = block.label[lang];
          const isRight = id === CORRECT_ORDER[index];
          const borderColor = !checked ? 'currentColor' : isRight ? '#1a7f37' : '#b42318';
          return (
            <li key={id} style={{ border: `1px solid ${borderColor}`, borderRadius: 8, padding: '8px 10px', display: 'grid', gap: 6 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <span>
                  <strong>{index + 1}. {label}</strong>
                  {checked ? <em style={{ marginLeft: 8 }}>{isRight ? copy.right : copy.wrong}</em> : null}
                </span>
                <span style={{ display: 'flex', gap: 6 }}>
                  <button
                    type="button"
                    style={button}
                    disabled={index === 0}
                    onClick={() => move(index, -1)}
                    aria-label={`${copy.up}: ${label}`}
                  >
                    ↑ {copy.up}
                  </button>
                  <button
                    type="button"
                    style={button}
                    disabled={index === order.length - 1}
                    onClick={() => move(index, 1)}
                    aria-label={`${copy.down}: ${label}`}
                  >
                    ↓ {copy.down}
                  </button>
                </span>
              </div>
              <div style={{ whiteSpace: 'pre-line' }}>{block.text}</div>
            </li>
          );
        })}
      </ol>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
        <button type="button" style={button} onClick={() => setChecked(true)}>
          {copy.check}
        </button>
        <button
          type="button"
          style={button}
          onClick={() => {
            setOrder(START_ORDER);
            setChecked(false);
          }}
        >
          {copy.again}
        </button>
        {checked ? <span role="status">{copy.result(rightCount)}</span> : null}
      </div>
    </div>
  );
}
