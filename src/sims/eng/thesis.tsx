import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Thesis builder for Paper 2: pick a prompt, name two works, write a thesis, and check it against a short list.
// The checks are simple text tests: they catch the usual faults, they do not judge the quality of the argument.
const PROMPTS = [
  {
    en: 'Compare how two works use a narrator to shape the reader\'s sympathy. To what extent does the narrative voice decide what we feel?',
    ru: 'Сравните, как два произведения используют рассказчика, чтобы направлять читательское сочувствие. В какой степени голос повествователя определяет то, что мы чувствуем?',
    keywords: ['narrat', 'voice', 'sympath'],
  },
  {
    en: 'Discuss how two works present the experience of leaving home. How far does the writer\'s choice of setting shape a character\'s sense of belonging?',
    ru: 'Обсудите, как два произведения передают опыт ухода из дома. В какой степени выбор места действия определяет чувство принадлежности персонажа?',
    keywords: ['home', 'setting', 'belong'],
  },
  {
    en: 'Compare two works in which a character\'s identity is tested by a public ritual. How do the writers use dialogue and staging to show what the ritual costs?',
    ru: 'Сравните два произведения, в которых идентичность персонажа проверяется публичным ритуалом. Как авторы используют диалог и постановку, чтобы показать цену ритуала?',
    keywords: ['identity', 'ritual', 'dialogue'],
  },
];

const COMPARE_WORDS = ['while', 'whereas', 'unlike', 'both', 'similarly', 'in contrast', 'compared', 'rather than', 'although'];
const EFFECT_WORDS = ['effect', 'suggest', 'invite', 'reveal', 'challeng', 'shape', 'undermin', 'encourag', 'create', 'so that', 'force', 'ask', 'make'];
const SUMMARY_PHRASES = ['is about', 'tells the story', 'the story of', 'in the story', 'describes what', 'deals with'];

const LABELS = {
  en: {
    title: 'Thesis builder (Paper 2)',
    prompt: 'Prompt',
    workA: 'First work',
    workB: 'Second work',
    thesis: 'Your thesis (one sentence, in English)',
    workAPlaceholder: 'Title and author',
    workBPlaceholder: 'Title and author',
    thesisPlaceholder: 'Two works, one comparison, one claim about effect',
    checks: 'Checklist',
    ready: 'Ready. Next, plan three comparison points for the paragraphs.',
    notReady: 'Not yet. Fix the points marked below.',
    words: 'words',
  },
  ru: {
    title: 'Конструктор тезиса (Paper 2)',
    prompt: 'Задание',
    workA: 'Первое произведение',
    workB: 'Второе произведение',
    thesis: 'Ваш тезис (одно предложение, по-английски)',
    workAPlaceholder: 'Название и автор',
    workBPlaceholder: 'Название и автор',
    thesisPlaceholder: 'Два произведения, одно сравнение, одно утверждение об эффекте',
    checks: 'Чек-лист',
    ready: 'Готово. Дальше составьте три пункта сравнения для абзацев.',
    notReady: 'Пока нет. Исправьте пункты, отмеченные ниже.',
    words: 'слов',
  },
};

const CHECKS = [
  {
    id: 'works',
    en: 'Both works are named, and they are different',
    ru: 'Названы оба произведения, и они разные',
    hint: { en: 'Name both works. Two entries of the same work do not make a comparison.', ru: 'Назовите оба произведения. Два раза одно и то же — не сравнение.' },
    pass: (a: string, b: string) => a.trim() !== '' && b.trim() !== '' && a.trim().toLowerCase() !== b.trim().toLowerCase(),
  },
  {
    id: 'sentence',
    en: 'The thesis is one sentence',
    ru: 'Тезис — одно предложение',
    hint: { en: 'Keep the thesis to one sentence. Move the second idea into a paragraph.', ru: 'Оставьте один тезис в одном предложении. Вторую мысль перенесите в абзац.' },
    pass: (_a: string, _b: string, thesis: string) => thesis.trim() !== '' && (thesis.trim().replace(/[.!?]+$/, '').match(/[.!?]/g) || []).length === 0,
  },
  {
    id: 'length',
    en: 'The length is 15 to 45 words',
    ru: 'Длина от 15 до 45 слов',
    hint: { en: 'Aim for 15 to 45 words: short enough to be a thesis, long enough to make a claim.', ru: 'Ориентир — 15–45 слов: достаточно коротко для тезиса и достаточно, чтобы сделать утверждение.' },
    pass: (_a: string, _b: string, thesis: string) => {
      const count = thesis.trim() === '' ? 0 : thesis.trim().split(/\s+/).length;
      return count >= 15 && count <= 45;
    },
  },
  {
    id: 'compare',
    en: 'It uses a comparison word',
    ru: 'Есть слово сравнения',
    hint: { en: 'Use a comparison word such as while, whereas, unlike or similarly.', ru: 'Используйте слово сравнения: while, whereas, unlike, similarly и т. п.' },
    pass: (_a: string, _b: string, thesis: string) => COMPARE_WORDS.some(word => thesis.toLowerCase().includes(word)),
  },
  {
    id: 'keyword',
    en: 'It uses a key word from the prompt',
    ru: 'Есть ключевое слово задания',
    hint: { en: 'Take one key word from the prompt, so the thesis answers it.', ru: 'Возьмите одно ключевое слово из задания, чтобы тезис отвечал на него.' },
    pass: (_a: string, _b: string, thesis: string, keywords: string[]) => keywords.some(word => thesis.toLowerCase().includes(word)),
  },
  {
    id: 'effect',
    en: 'It claims something about effect, not only content',
    ru: 'Утверждает что-то об эффекте, а не только о содержании',
    hint: { en: 'Say what the comparison does: it suggests, invites, undermines, reveals.', ru: 'Скажите, что делает сравнение: suggests, invites, undermines, reveals и т. п.' },
    pass: (_a: string, _b: string, thesis: string) => EFFECT_WORDS.some(word => thesis.toLowerCase().includes(word)),
  },
  {
    id: 'summary',
    en: 'It is not a plot summary',
    ru: 'Это не пересказ сюжета',
    hint: { en: 'Drop the plot summary ("is about", "tells the story") and make a claim about how the works work.', ru: 'Уберите пересказ сюжета («is about», «tells the story») и сделайте утверждение о том, как работают произведения.' },
    pass: (_a: string, _b: string, thesis: string) => !SUMMARY_PHRASES.some(phrase => thesis.toLowerCase().includes(phrase)),
  },
];

export default function ThesisBuilder({ lang }: { lang: Lang }) {
  const labels = LABELS[lang];
  const [promptIndex, setPromptIndex] = useState(0);
  const [workA, setWorkA] = useState('');
  const [workB, setWorkB] = useState('');
  const [thesis, setThesis] = useState('');
  const prompt = PROMPTS[promptIndex];
  const results = CHECKS.map(check => ({
    check,
    passed: check.pass(workA, workB, thesis, prompt.keywords),
  }));
  const allPassed = results.every(result => result.passed);
  const wordCount = thesis.trim() === '' ? 0 : thesis.trim().split(/\s+/).length;

  const field = {
    width: '100%',
    border: '1px solid var(--color-border)',
    borderRadius: '0.5rem',
    background: 'var(--color-bg)',
    color: 'var(--color-fg)',
    padding: '0.4rem 0.6rem',
    font: 'inherit',
    boxSizing: 'border-box',
  } as const;

  return (
    <section style={{ color: 'var(--color-fg)' }}>
      <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>{labels.title}</h3>
      <label style={{ display: 'block', marginBottom: '0.75rem' }}>
        <span style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem' }}>{labels.prompt}</span>
        <select value={promptIndex} onChange={event => setPromptIndex(Number(event.target.value))} style={field}>
          {PROMPTS.map((item, index) => (
            <option key={item.en} value={index}>{`${index + 1}. ${lang === 'ru' ? item.ru : item.en}`}</option>
          ))}
        </select>
      </label>
      <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', marginBottom: '0.75rem' }}>
        <label>
          <span style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem' }}>{labels.workA}</span>
          <input value={workA} onChange={event => setWorkA(event.target.value)} placeholder={labels.workAPlaceholder} style={field} />
        </label>
        <label>
          <span style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem' }}>{labels.workB}</span>
          <input value={workB} onChange={event => setWorkB(event.target.value)} placeholder={labels.workBPlaceholder} style={field} />
        </label>
      </div>
      <label style={{ display: 'block', marginBottom: '0.25rem' }}>
        <span style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem' }}>{labels.thesis}</span>
        <textarea rows={3} value={thesis} onChange={event => setThesis(event.target.value)} placeholder={labels.thesisPlaceholder} style={field} />
      </label>
      <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', color: 'var(--color-muted)' }}>{`${wordCount} ${labels.words}`}</p>
      <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem' }}>{labels.checks}</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.75rem' }}>
        {results.map(({ check, passed }) => (
          <li key={check.id} style={{ marginBottom: '0.35rem' }}>
            <span aria-hidden="true" style={{ fontWeight: 700, color: passed ? 'var(--color-accent)' : 'var(--color-fg)', marginRight: '0.5rem' }}>
              {passed ? '✓' : '✗'}
            </span>
            <span>{lang === 'ru' ? check.ru : check.en}</span>
            {passed ? null : (
              <span style={{ display: 'block', marginLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                {lang === 'ru' ? check.hint.ru : check.hint.en}
              </span>
            )}
          </li>
        ))}
      </ul>
      <p role="status" style={{ margin: 0, fontWeight: 600 }}>
        {thesis.trim() === '' ? '' : allPassed ? labels.ready : labels.notReady}
      </p>
    </section>
  );
}
