import { useCallback, useId, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { SubjectPack } from '../../contract/pack';
import type { Lang, Question, TopicMeta } from '../../contract/types';
import { useLocalProgress } from '../../hooks/useLocalProgress';
import {
  filterOptions,
  filterQuestions,
  filtersFromParams,
  listTimedSets,
  questionsOfSet,
  rateQuestion,
  ratingCounts,
  ratingKey,
  splitRedo,
  timerStorageKey,
  withChosen,
  withFilter,
  withoutFilters,
  wrongIds,
  type PracticeFilters,
} from '../../lib/practice';
import type { GlobalState, Rating } from '../../lib/storage';
import { pickText } from '../../lib/text';
import { toLang } from '../../lib/topic-lang';
import { dubaiDate } from '../../lib/topic-progress';
import { TopicHero } from '../content/TopicHero';
import { FilterBar } from './FilterBar';
import { QuestionCard } from './QuestionCard';
import { TimedPanel } from './TimedPanel';
import { StatGrid } from './fields';
import { clearStoredTimer } from './timerStorage';
import '../content/ui.css';
import './fields.css';
import './practice.css';

interface ListProps {
  questions: readonly Question[];
  /** How many questions come before this list, so the numbers go on from the list above. */
  offset?: number;
  lang: Lang;
  subject: string;
  topicIndex: ReadonlyMap<string, TopicMeta>;
  progress: GlobalState['questions'];
  onRate: (questionId: string, rating: Rating) => void;
}

function QuestionList({ questions, offset = 0, progress, subject, ...rest }: ListProps) {
  return (
    <ol className="study-list">
      {questions.map((question, position) => {
        const saved = progress[ratingKey(subject, question.id)];
        return (
          <li key={question.id}>
            <QuestionCard question={question} index={offset + position + 1} subject={subject} rating={saved?.rating} ratedAt={saved?.at} {...rest} />
          </li>
        );
      })}
    </ol>
  );
}

// #/s/:subject/practice. Questions of the subject with filters (paper, topic, command term), a mistake log ("to redo"
// comes first) and timed mode for a set (?set=<id>). Filters and the chosen set live in the address.
export function PracticeView({ pack }: { pack: SubjectPack }) {
  const { t, i18n } = useTranslation(['practice', 'subject', 'common']);
  const lang = toLang(i18n.language);
  const subject = pack.meta.id;
  const [state, update] = useLocalProgress();
  const [params, setParams] = useSearchParams();
  const summaryId = useId();
  const redoId = useId();
  const listId = useId();
  const timedListId = useId();

  const topicIndex = useMemo(() => new Map(pack.topics.map(topic => [topic.id, topic] as const)), [pack.topics]);
  const baseOptions = useMemo(() => filterOptions(pack.questions, pack.topics.map(topic => topic.id)), [pack.questions, pack.topics]);
  const filters = useMemo(() => filtersFromParams(params), [params]);
  const options = useMemo(() => withChosen(baseOptions, filters), [baseOptions, filters]);
  // Keyed by the three values, not by the object: a change of ?set= must not rebuild the list.
  const filtered = useMemo(
    () => filterQuestions(pack.questions, filters),
    [pack.questions, filters.paper, filters.topic, filters.command],
  );

  const sets = useMemo(() => listTimedSets(pack.papers), [pack.papers]);
  const requestedSet = params.get('set') ?? '';
  const active = useMemo(() => sets.find(set => set.id === requestedSet), [sets, requestedSet]);
  const inSet = useMemo(() => (active ? questionsOfSet(active, pack.questions) : null), [active, pack.questions]);

  // "To redo" is decided when the page opens, when the filters change, and when the student goes into or out of timed
  // mode. A rating given in between moves a question the next time, so the cards do not jump under the student's
  // finger while they read a markscheme. (The list is kept in state, not in a memo: a memo may be thrown away.)
  const progress = state.questions;
  const snapshotKey = `${subject}|${filters.paper}|${filters.topic}|${filters.command}|${active?.id ?? ''}`;
  const [snapshot, setSnapshot] = useState(() => ({ key: snapshotKey, ids: wrongIds(subject, filtered, progress) }));
  let redoIds = snapshot.ids;
  if (snapshot.key !== snapshotKey) {
    redoIds = wrongIds(subject, filtered, progress);
    setSnapshot({ key: snapshotKey, ids: redoIds });
  }
  const parts = useMemo(() => splitRedo(filtered, redoIds), [filtered, redoIds]);
  const counts = ratingCounts(subject, pack.questions, progress);

  const topicTitle = useCallback((id: string): string => {
    const topic = topicIndex.get(id);
    return topic ? pickText(topic.title, lang) : id;
  }, [topicIndex, lang]);

  const onRate = useCallback((questionId: string, rating: Rating): void => {
    update(current => ({ ...current, questions: rateQuestion(current.questions, ratingKey(subject, questionId), rating, dubaiDate()) }));
  }, [update, subject]);

  const changeFilter = useCallback((name: keyof PracticeFilters, value: string): void => {
    setParams(previous => withFilter(previous, name, value), { replace: true });
  }, [setParams]);
  const clearFilters = useCallback((): void => {
    setParams(previous => withoutFilters(previous), { replace: true });
  }, [setParams]);
  const activeId = active?.id ?? '';
  const chooseSet = useCallback((id: string): void => {
    // Leaving a set or choosing another one is a decision to stop that paper: its saved countdown is forgotten.
    if (activeId && activeId !== id) clearStoredTimer(timerStorageKey(subject, activeId));
    setParams(previous => {
      const next = new URLSearchParams(previous);
      if (id) next.set('set', id);
      else next.delete('set');
      return next;
    }, { replace: true });
  }, [setParams, subject, activeId]);

  const listProps = { lang, subject, topicIndex, progress, onRate };

  return (
    <div className="study-page">
      <TopicHero title={t('title')} intro={t('intro')} />

      {pack.questions.length === 0 ? (
        <section className="study-empty" aria-labelledby={summaryId}>
          <h2 id={summaryId}>{t('empty.title')}</h2>
          <p className="study-muted">{t('empty.body')}</p>
        </section>
      ) : (
        <>
          {active ? null : (
            <section aria-labelledby={summaryId}>
              <h2 id={summaryId} className="study-h2">{t('summary.heading')}</h2>
              <StatGrid
                tiles={[
                  { key: 'total', label: t('summary.total'), value: counts.total },
                  { key: 'right', label: t('summary.right'), value: counts.right },
                  { key: 'partial', label: t('summary.partial'), value: counts.partial },
                  { key: 'wrong', label: t('summary.wrong'), value: counts.wrong },
                  { key: 'unrated', label: t('summary.unrated'), value: counts.unrated },
                ]}
              />
            </section>
          )}

          <div>
            <TimedPanel
              subject={subject}
              sets={sets}
              active={active}
              requestedId={requestedSet}
              extraTime={state.settings.accessArrangements.extraTime}
              lang={lang}
              questionCount={inSet?.found.length ?? 0}
              missing={inSet?.missing ?? []}
              onSelect={chooseSet}
            />

            {active && inSet ? (
              <section aria-labelledby={timedListId} className="study-section">
                <h2 id={timedListId} className="study-h2">{t('timed.list', { n: inSet.found.length })}</h2>
                {inSet.found.length === 0 ? <p className="study-muted">{t('timed.emptySet')}</p> : <QuestionList questions={inSet.found} {...listProps} />}
              </section>
            ) : (
              <>
                <FilterBar
                  filters={filters}
                  options={options}
                  topicTitle={topicTitle}
                  shown={filtered.length}
                  total={pack.questions.length}
                  onChange={changeFilter}
                  onClear={clearFilters}
                />

                {filtered.length === 0 ? (
                  <p role="note" className="study-banner study-section" data-tone="amber">{t('filters.none')}</p>
                ) : (
                  <>
                    <section aria-labelledby={redoId} className="study-section">
                      <h2 id={redoId} className="study-h2">{t('redo.heading', { n: parts.redo.length })}</h2>
                      {parts.redo.length === 0 ? (
                        <p className="study-muted">{t('redo.empty')}</p>
                      ) : (
                        <>
                          <p className="study-muted" style={{ marginBottom: '0.75rem' }}>{t('redo.hint')}</p>
                          <QuestionList questions={parts.redo} {...listProps} />
                        </>
                      )}
                    </section>

                    {parts.rest.length > 0 ? (
                      <section aria-labelledby={listId} className="study-section">
                        <h2 id={listId} className="study-h2">
                          {t(parts.redo.length > 0 ? 'list.headingOther' : 'list.heading', { n: parts.rest.length })}
                        </h2>
                        <QuestionList questions={parts.rest} offset={parts.redo.length} {...listProps} />
                      </section>
                    ) : null}
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
