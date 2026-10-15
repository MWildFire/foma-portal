import { useMemo } from 'react';
import type { Lang, PastPaperRef, TopicMeta } from '../../contract/types';

// What the past papers ask: November sessions N20 to N25, SL. The counts are made when the page opens, from
// content/fr/pastpapers.ts. The labels are the titles of the topics (themes and text types), so the English term
// stays in the Russian labels as on the other French pages.
const PAPERS: PastPaperRef[] = Object.values(
  import.meta.glob<{ pastPapers?: PastPaperRef[] }>('../../../content/fr/pastpapers.ts', { eager: true }),
).flatMap(module => module.pastPapers ?? []);

const TITLES = new Map<string, { en: string; ru: string }>(
  Object.values(import.meta.glob<{ default: TopicMeta }>('../../../content/fr/topics/*.meta.ts', { eager: true }))
    .map(module => module.default)
    .map(topic => [topic.id, topic.title]),
);

interface Row { label: string; n: number }

// The Paper 1 tasks of every session, each counted once. Two time-zone versions of one session can print the same
// task (N23 TZ1 and TZ2 do), so a task is identified by its session, label and topics.
function uniqueTasks(refs: PastPaperRef[]): PastPaperRef['items'] {
  const seen = new Map<string, PastPaperRef['items'][number]>();
  refs.forEach(ref => ref.items.forEach(item => {
    const key = [ref.session, item.q, [...item.topicIds].sort().join(',')].join('|');
    if (!seen.has(key)) seen.set(key, item);
  }));
  return [...seen.values()];
}

// How many items carry each key, most frequent first; ties keep the key order, so the table never jumps between renders.
function tally(keys: string[], label: (key: string) => string): Row[] {
  const counts = new Map<string, number>();
  keys.forEach(key => counts.set(key, (counts.get(key) ?? 0) + 1));
  return [...counts]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([key, n]) => ({ label: label(key), n }));
}

const titleOf = (lang: Lang) => (id: string): string => {
  const title = TITLES.get(id)?.[lang] ?? id;
  return lang === 'ru' ? title.replace(/^Письмо:/, 'Письменное задание:') : title;
};

const COPY = {
  en: {
    title: 'What the past papers ask',
    intro: 'Counts from the November papers, 2020 to 2025 (SL). A task can offer several text types, so each type is counted once for every task that offers it. A task printed in two time-zone versions counts once. Each reading and listening question is counted once.',
    p1Types: 'Paper 1: text types offered in the tasks',
    p1Themes: 'Paper 1: themes of the tasks',
    readingTypes: 'Paper 2 reading: question types',
    readingThemes: 'Paper 2 reading: themes of the texts',
    listeningTypes: 'Paper 2 listening: question types',
    listeningThemes: 'Paper 2 listening: themes of the recordings',
    tasks: (n: number) => `${n} different tasks`,
    empty: 'No past papers are listed yet.',
  },
  ru: {
    title: 'Что спрашивают в прошлых экзаменах',
    intro: 'Подсчёт по ноябрьским пейперам 2020–2025 (SL). Задание может предлагать несколько типов текста (text type), поэтому каждый тип считается по каждому заданию, где он есть. Задание, напечатанное в двух вариантах по часовым поясам, считается один раз. Каждый вопрос чтения и аудирования считается один раз.',
    p1Types: 'Часть 1: типы текста в заданиях',
    p1Themes: 'Часть 1: темы заданий',
    readingTypes: 'Часть 2, чтение: типы вопросов',
    readingThemes: 'Часть 2, чтение: темы текстов',
    listeningTypes: 'Часть 2, аудирование: типы вопросов',
    listeningThemes: 'Часть 2, аудирование: темы записей',
    tasks: (n: number) => `${n} разных заданий`,
    empty: 'Прошлые пейперы пока не добавлены.',
  },
};

const list = { listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 } as const;
const row = { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: '6px 12px', alignItems: 'center' } as const;
const track = { gridColumn: '1 / -1', height: 10, borderRadius: 4, background: 'var(--color-border)', overflow: 'hidden' } as const;
const fill = { display: 'block', height: '100%', background: 'var(--color-accent)' } as const;
const section = { display: 'grid', gap: 10, marginTop: 20 } as const;

export function Bars({ rows, total }: { rows: Row[]; total: number }) {
  return (
    <ul style={list}>
      {rows.map(item => (
        <li key={item.label} style={row}>
          <span style={{ minWidth: 0, overflowWrap: 'anywhere' }}>{item.label}</span>
          <span style={{ whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{item.n} / {total}</span>
          <span aria-hidden style={track}>
            <span style={{ ...fill, width: `${total > 0 ? (item.n / total) * 100 : 0}%` }} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function WhatIsAsked({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const sections = useMemo(() => {
    const label = titleOf(lang);
    const isTheme = (id: string): boolean => id.startsWith('theme-');
    const isTextType = (id: string): boolean => id.startsWith('text-');
    const p1 = uniqueTasks(PAPERS.filter(ref => ref.paper === 'P1'));
    const reading = PAPERS.filter(ref => ref.part === 'reading').flatMap(ref => ref.items);
    const listening = PAPERS.filter(ref => ref.part === 'listening').flatMap(ref => ref.items);
    return {
      p1Tasks: p1.length,
      p1Types: tally(p1.flatMap(item => item.topicIds.filter(isTextType)), label),
      p1Themes: tally(p1.flatMap(item => item.topicIds.filter(isTheme)), label),
      readingTotal: reading.length,
      readingTypes: tally(reading.map(item => item.command ?? 'Other'), key => key),
      readingThemes: tally(reading.flatMap(item => item.topicIds.filter(isTheme)), label),
      listeningTotal: listening.length,
      listeningTypes: tally(listening.map(item => item.command ?? 'Other'), key => key),
      listeningThemes: tally(listening.flatMap(item => item.topicIds.filter(isTheme)), label),
    };
  }, [lang]);

  if (PAPERS.length === 0) return <p>{copy.empty}</p>;

  return (
    <section aria-label={copy.title}>
      <p>{copy.intro}</p>
      <div style={section}>
        <h3>{copy.p1Types}</h3>
        <p>{copy.tasks(sections.p1Tasks)}</p>
        <Bars rows={sections.p1Types} total={sections.p1Tasks} />
        <h3>{copy.p1Themes}</h3>
        <Bars rows={sections.p1Themes} total={sections.p1Tasks} />
      </div>
      <div style={section}>
        <h3>{copy.readingTypes}</h3>
        <Bars rows={sections.readingTypes} total={sections.readingTotal} />
        <h3>{copy.readingThemes}</h3>
        <Bars rows={sections.readingThemes} total={sections.readingTotal} />
      </div>
      <div style={section}>
        <h3>{copy.listeningTypes}</h3>
        <Bars rows={sections.listeningTypes} total={sections.listeningTotal} />
        <h3>{copy.listeningThemes}</h3>
        <Bars rows={sections.listeningThemes} total={sections.listeningTotal} />
      </div>
    </section>
  );
}
