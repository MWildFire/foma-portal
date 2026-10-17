import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Annotation trainer for Paper 1: four highlighted phrases in one public-domain poem. The student picks the technique;
// the explanation shows what the technique does, so the student can use the same reasoning in an exam extract.
const STANZAS = [
  ['I heard a fly buzz when I died;', 'The stillness round my form', 'Was like the stillness in the air', 'Between the heaves of storm.'],
  ['The eyes beside had wrung them dry,', 'And breaths were gathering sure', 'For that last onset, when the king', 'Be witnessed in his power.'],
  ['I willed my keepsakes, signed away', 'What portion of me I', 'Could make assignable, — and then', 'There interposed a fly,'],
  ['With blue, uncertain, stumbling buzz,', 'Between the light and me;', 'And then the windows failed, and then', 'I could not see to see.'],
];

const OPTIONS = ['simile', 'metaphor', 'onomatopoeia', 'repetition', 'enjambment'] as const;
type Technique = (typeof OPTIONS)[number];

const OPTION_LABELS: Record<Lang, Record<Technique, string>> = {
  en: { simile: 'simile', metaphor: 'metaphor', onomatopoeia: 'onomatopoeia', repetition: 'repetition', enjambment: 'enjambment' },
  ru: { simile: 'сравнение', metaphor: 'метафора', onomatopoeia: 'звукоподражание', repetition: 'повтор', enjambment: 'анжамбеман' },
};

const TARGETS: { id: string; phrase: string; technique: Technique; explain: Record<Lang, string> }[] = [
  {
    id: 'wrung',
    phrase: 'wrung them dry',
    technique: 'metaphor',
    explain: {
      en: '"Wrung them dry" describes crying as wringing out cloth. The image is physical and exhausted, and it is not meant literally.',
      ru: '«Wrung them dry» («выжали досуха») описывает плач как выжимание ткани. Образ физический и изнурённый и понимается не буквально.',
    },
  },
  {
    id: 'simile',
    phrase: 'Was like the stillness in the air',
    technique: 'simile',
    explain: {
      en: '"Was like" is a simile. The calm of the room is compared to the calm before a storm, so the stillness feels threatening rather than peaceful.',
      ru: '«Was like» — сравнение: покой комнаты сравнивается с затишьем перед бурей, поэтому тишина кажется угрожающей, а не спокойной.',
    },
  },
  {
    id: 'buzz',
    phrase: 'stumbling buzz',
    technique: 'onomatopoeia',
    explain: {
      en: '"Buzz" imitates the sound it names. "Stumbling" adds movement, so the sound of the fly and its clumsy flight arrive together.',
      ru: '«Buzz» подражает звуку, который называет. «Stumbling» добавляет движение: звук мухи и её неуклюжий полёт приходят вместе.',
    },
  },
  {
    id: 'sight',
    phrase: 'see to see',
    technique: 'repetition',
    explain: {
      en: 'The repeated "see" turns the failure of sight into an echo. The poem ends on the verb of seeing, which the speaker can no longer use.',
      ru: 'Повтор «see» превращает отказ зрения в эхо. Стихотворение заканчивается глаголом «видеть», которым говорящий уже не может воспользоваться; пол голоса текст не указывает.',
    },
  },
];

const LABELS = {
  en: {
    title: 'Annotate the extract',
    intro: 'Four techniques are hidden in this poem. Click a highlighted phrase, then choose the technique.',
    source: 'Emily Dickinson, Poems, Third Series (1896), XLVI “Dying”, Gutenberg 12242 (public domain)',
    choose: 'Which technique is in',
    correct: 'Correct.',
    wrong: 'Not quite.',
    found: 'Found',
    of: 'of',
    reveal: 'Show all answers',
    reset: 'Start again',
  },
  ru: {
    title: 'Аннотируйте отрывок',
    intro: 'В этом стихотворении спрятаны четыре приёма. Нажмите на выделенную фразу, затем выберите приём.',
    source: 'Эмили Дикинсон, Poems, Third Series (1896), XLVI «Dying», Gutenberg 12242 (общественное достояние)',
    choose: 'Какой приём в фразе',
    correct: 'Верно.',
    wrong: 'Не совсем.',
    found: 'Найдено',
    of: 'из',
    reveal: 'Показать все ответы',
    reset: 'Начать заново',
  },
};

export default function Annotate({ lang }: { lang: Lang }) {
  const labels = LABELS[lang];
  const [active, setActive] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, Technique>>({});
  const [reveal, setReveal] = useState(false);
  const activeTarget = TARGETS.find(target => target.id === active);
  const found = TARGETS.filter(target => answers[target.id] === target.technique).length;

  const renderLine = (line: string, key: string) => {
    const target = TARGETS.find(item => line.includes(item.phrase));
    if (!target) return <p key={key} style={{ margin: 0 }}>{line}</p>;
    const at = line.indexOf(target.phrase);
    const answered = answers[target.id];
    const color = answered === undefined ? 'inherit' : answered === target.technique ? 'var(--color-accent)' : 'var(--color-muted)';
    return (
      <p key={key} style={{ margin: 0 }}>
        {line.slice(0, at)}
        <button
          type="button"
          onClick={() => setActive(target.id)}
          aria-pressed={active === target.id}
          style={{
            background: 'transparent',
            border: 0,
            padding: 0,
            font: 'inherit',
            color,
            cursor: 'pointer',
            fontWeight: active === target.id ? 700 : 400,
            textDecoration: 'underline dotted',
            textUnderlineOffset: '3px',
          }}
        >
          {target.phrase}
        </button>
        {line.slice(at + target.phrase.length)}
      </p>
    );
  };

  const feedback = (target: (typeof TARGETS)[number]) => {
    const chosen = answers[target.id];
    if (chosen === undefined) return null;
    const verdict = chosen === target.technique ? labels.correct : labels.wrong;
    return (
      <p role="status" style={{ margin: '0.5rem 0 0' }}>
        <strong>{verdict}</strong> {target.explain[lang]}
      </p>
    );
  };

  return (
    <section style={{ color: 'var(--color-fg)' }}>
      <h3 style={{ margin: '0 0 0.25rem', fontSize: '1rem' }}>{labels.title}</h3>
      <p style={{ margin: '0 0 0.75rem' }}>{labels.intro}</p>
      <div style={{ lineHeight: 1.6, marginBottom: '0.5rem' }}>
        {STANZAS.map((stanza, stanzaIndex) => (
          <div key={stanzaIndex} style={{ marginBottom: '0.75rem' }}>
            {stanza.map((line, lineIndex) => renderLine(line, `${stanzaIndex}-${lineIndex}`))}
          </div>
        ))}
      </div>
      <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', color: 'var(--color-muted)' }}>{labels.source}</p>

      {activeTarget ? (
        <div style={{ border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '0.75rem', marginBottom: '0.75rem' }}>
          <p style={{ margin: '0 0 0.5rem' }}>
            {labels.choose} «{activeTarget.phrase}»?
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {OPTIONS.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => setAnswers(previous => ({ ...previous, [activeTarget.id]: option }))}
                aria-pressed={answers[activeTarget.id] === option}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.5rem',
                  background: answers[activeTarget.id] === option ? 'var(--color-accent)' : 'var(--color-bg)',
                  color: answers[activeTarget.id] === option ? 'var(--color-bg)' : 'var(--color-fg)',
                  padding: '0.3rem 0.7rem',
                  cursor: 'pointer',
                  font: 'inherit',
                }}
              >
                {OPTION_LABELS[lang][option]}
              </button>
            ))}
          </div>
          {feedback(activeTarget)}
        </div>
      ) : null}

      {reveal ? (
        <ul style={{ margin: '0 0 0.75rem', paddingLeft: '1.25rem' }}>
          {TARGETS.map(target => (
            <li key={target.id} style={{ marginBottom: '0.25rem' }}>
              <strong>{OPTION_LABELS[lang][target.technique]}</strong>: {target.explain[lang]}
            </li>
          ))}
        </ul>
      ) : null}

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
        <span role="status" style={{ fontWeight: 600 }}>
          {`${labels.found} ${found} ${labels.of} ${TARGETS.length}`}
        </span>
        <button
          type="button"
          onClick={() => setReveal(true)}
          style={{ border: '1px solid var(--color-border)', borderRadius: '0.5rem', background: 'var(--color-bg)', color: 'var(--color-fg)', padding: '0.3rem 0.7rem', cursor: 'pointer', font: 'inherit' }}
        >
          {labels.reveal}
        </button>
        <button
          type="button"
          onClick={() => {
            setAnswers({});
            setActive(null);
            setReveal(false);
          }}
          style={{ border: '1px solid var(--color-border)', borderRadius: '0.5rem', background: 'var(--color-bg)', color: 'var(--color-fg)', padding: '0.3rem 0.7rem', cursor: 'pointer', font: 'inherit' }}
        >
          {labels.reset}
        </button>
      </div>
    </section>
  );
}
