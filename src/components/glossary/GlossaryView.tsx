import { filterMockResources } from '../../lib/mock-scope';
import { useCallback, useDeferredValue, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import type { SubjectPack } from '../../contract/pack';
import type { PaperId, Term, TopicMeta } from '../../contract/types';
import { useLocalProgress } from '../../hooks/useLocalProgress';
import { BOXES, INTERVAL_DAYS, NEW_PER_SESSION, deckStats, review, termKey, type Answer } from '../../lib/leitner';
import type { TermProgress } from '../../lib/storage';
import { dubaiDate } from '../../lib/topic-progress';
import { ContentLangSwitch } from '../content/ContentLangSwitch';
import { TopicHero } from '../content/TopicHero';
import { useContentLang } from '../content/useContentLang';
import { FilterSelect, SearchField, StatGrid } from '../practice/fields';
import { FlashcardDeck } from './FlashcardDeck';
import { GlossaryEntry } from './GlossaryEntry';
import { filterTerms, sortTerms, termPapers } from './terms';
import '../content/ui.css';
import '../practice/fields.css';
import './glossary.css';

const NO_TOPICS: readonly TopicMeta[] = [];

// #/s/:subject/terms. Counts of the flashcard boxes at the top, then either the glossary (all terms, searchable) or
// the flashcards (?mode=cards): one due card at a time with a Leitner schedule.
export function GlossaryView({ pack }: { pack: SubjectPack }) {
  const { t } = useTranslation(['glossary', 'subject', 'common']);
  // The text language (EN, RU or both) is the same choice as on the topic pages.
  const [contentLang, setContentLang] = useContentLang();
  const subject = pack.meta.id;
  const [showOutside,setShowOutside]=useState(false);
  const scopeTerms=useMemo(()=>filterMockResources(pack.terms,pack.topics,'termIds',showOutside),[pack.terms,pack.topics,showOutside]);
  const [state, update] = useLocalProgress();
  const [params, setParams] = useSearchParams();
  const mode: 'list' | 'cards' = params.get('mode') === 'cards' ? 'cards' : 'list';
  const today = dubaiDate();
  const statsId = useId();
  const viewId = useId();

  const [query, setQuery] = useState('');
  const [paper, setPaper] = useState<PaperId | ''>('');
  const deferredQuery = useDeferredValue(query);

  const stats = useMemo(
    () => deckStats(subject, scopeTerms.map(term => term.id), state.terms, today),
    [subject, scopeTerms, state.terms, today],
  );
  const sorted = useMemo(() => sortTerms(scopeTerms), [scopeTerms]);
  const papers = useMemo(() => termPapers(scopeTerms), [scopeTerms]);
  const visible = useMemo(() => filterTerms(sorted, { query: deferredQuery, paper }), [sorted, deferredQuery, paper]);
  const topicsByTerm = useMemo(() => {
    const map = new Map<string, TopicMeta[]>();
    for (const topic of pack.topics) {
      for (const id of topic.termIds) {
        const list = map.get(id) ?? [];
        list.push(topic);
        map.set(id, list);
      }
    }
    return map;
  }, [pack.topics]);

  const setMode = useCallback((next: 'list' | 'cards'): void => {
    setParams(previous => {
      const params = new URLSearchParams(previous);
      if (next === 'cards') params.set('mode', 'cards');
      else params.delete('mode');
      return params;
    }, { replace: true });
  }, [setParams]);

  // Writes the answer as terms["<subject>/<termId>"] = { box, due } and returns what was written. The new value is
  // worked out from the latest saved state (the updater runs at once), not from the one this page was drawn with.
  const answerCard = useCallback((term: Term, answer: Answer): TermProgress => {
    const key = termKey(subject, term.id);
    const day = dubaiDate();
    let saved: TermProgress | undefined;
    update(current => {
      saved = review(current.terms[key], answer, day);
      return { ...current, terms: { ...current.terms, [key]: saved } };
    });
    return saved ?? review(undefined, answer, day);
  }, [subject, update]);

  // "Open the glossary" in the flashcards: the button disappears with the deck, so the focus goes to the switch.
  const glossarySwitch = useRef<HTMLButtonElement>(null);
  const focusSwitch = useRef(false);
  useEffect(() => {
    if (mode === 'list' && focusSwitch.current) glossarySwitch.current?.focus({ preventScroll: true });
    focusSwitch.current = false;
  }, [mode]);
  const showGlossary = useCallback((): void => {
    focusSwitch.current = true;
    setMode('list');
  }, [setMode]);

  const tiles = [
    { key: 'total', label: t('stats.total'), value: stats.total },
    { key: 'due', label: t('stats.due'), value: stats.due },
    { key: 'fresh', label: t('stats.fresh'), hint: t('stats.freshHint', { n: NEW_PER_SESSION }), value: stats.fresh },
    ...BOXES.map(box => ({
      key: `box${box}`,
      label: t('stats.box', { n: box }),
      hint: t('stats.interval', { n: INTERVAL_DAYS[box] }),
      value: stats.boxes[box - 1],
    })),
  ];

  return (
    <div className="study-page"><button type="button" className="foma-btn" aria-pressed={showOutside} onClick={()=>setShowOutside(v=>!v)}>{t(showOutside ? 'mock.hide' : 'mock.show',{ns:'subject'})}</button>
      <TopicHero title={t('title')} intro={t('intro')} />

      {pack.terms.length === 0 ? (
        <section className="study-empty" aria-labelledby={viewId}>
          <h2 id={viewId}>{t('empty.title')}</h2>
          <p className="study-muted">{t('empty.body')}</p>
        </section>
      ) : (
        <>
          <div className="mb-6">
            <ContentLangSwitch value={contentLang} onChange={setContentLang} />
          </div>

          <section aria-labelledby={statsId}>
            <h2 id={statsId} className="study-h2">{t('stats.heading')}</h2>
            <StatGrid tiles={tiles} />
          </section>

          <div role="group" aria-label={t('modes.label')} className="foma-btn-row gl-modes">
            <button ref={glossarySwitch} type="button" className="foma-btn" aria-pressed={mode === 'list'} onClick={() => setMode('list')}>
              {mode === 'list' ? <Check size={16} aria-hidden="true" /> : null}
              {t('modes.list')}
            </button>
            <button type="button" className="foma-btn" aria-pressed={mode === 'cards'} onClick={() => setMode('cards')}>
              {mode === 'cards' ? <Check size={16} aria-hidden="true" /> : null}
              {t('modes.cards')}
            </button>
          </div>

          {mode === 'list' && stats.due > 0 ? (
            <div className="study-banner gl-due" data-tone="blue">
              <span>{t('modes.dueNotice', { n: stats.due })}</span>
              <button type="button" className="foma-btn foma-btn--primary" onClick={() => setMode('cards')}>{t('modes.start')}</button>
            </div>
          ) : null}

          {mode === 'cards' ? (
            <FlashcardDeck
              subject={subject}
              terms={pack.terms}
              progress={state.terms}
              today={today}
              mode={contentLang}
              nextDue={stats.nextDue}
              fresh={stats.fresh}
              onAnswer={answerCard}
              onShowGlossary={showGlossary}
            />
          ) : (
            <section aria-label={t('modes.list')} className="study-section">
              <div className="study-fields">
                <SearchField label={t('list.search')} value={query} placeholder={t('list.placeholder')} onChange={setQuery} />
                {papers.length > 1 ? (
                  <FilterSelect label={t('list.paper')} value={paper} onChange={value => setPaper(value === 'P1' || value === 'P2' || value === 'P3' ? value : '')}>
                    <option value="">{t('list.allPapers')}</option>
                    {papers.map(item => (
                      <option key={item} value={item}>{t(`paperNames.${item}`, { ns: 'subject' })}</option>
                    ))}
                  </FilterSelect>
                ) : null}
              </div>
              <p role="status" className="study-status">{t('list.shown', { shown: visible.length, total: pack.terms.length })}</p>
              {visible.length === 0 ? (
                <p className="study-banner" data-tone="amber" role="note">{t('list.none')}</p>
              ) : (
                <ul className="gl-list">
                  {visible.map(term => (
                    <li key={term.id}>
                      <GlossaryEntry term={term} mode={contentLang} subject={subject} topics={topicsByTerm.get(term.id) ?? NO_TOPICS} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}
        </>
      )}
    </div>
  );
}
