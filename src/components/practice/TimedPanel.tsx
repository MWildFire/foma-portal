import { useId, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TriangleAlert } from 'lucide-react';
import { PAPER_IDS, timerStorageKey, type TimedSetInfo } from '../../lib/practice';
import { pickText } from '../../lib/text';
import { typingReminderFor } from '../../planner/access';
import { EXAMS } from '../../planner/data';
import { Clock } from './Clock';
import { ListeningPlayer } from './ListeningPlayer';
import { NO_TRACKS, tracksForSet, type ListeningTrackRef } from './listening';
import { readStoredTimer } from './timerStorage';
import { setAllowanceMinutes } from './timing';
import { FilterSelect } from './fields';
import '../content/ui.css';
import './fields.css';
import './practice.css';

interface Props {
  subject: string;
  sets: readonly TimedSetInfo[];
  /** The set chosen in the address or in the list. */
  active: TimedSetInfo | undefined;
  /** The ?set= value as typed, even when no such set exists. */
  requestedId: string;
  lang: string;
  /** How many of the set's questions are in the pack, and the ids that are not. */
  questionCount: number;
  missing: readonly string[];
  /** An empty id leaves timed mode. */
  onSelect: (id: string) => void;
  /** The recordings of the listening sets. The set's own recordings are picked from these. */
  tracks?: readonly ListeningTrackRef[];
}

// Timed mode: choose a set and run the clock. It returns the picker panel and, for a chosen set, the clock as a
// second element. The clock sticks to the top of the screen while the student scrolls through the questions, so
// the page must put both elements in the same container as the question list.
export function TimedPanel({ subject, sets, active, requestedId, lang, questionCount, missing, onSelect, tracks = NO_TRACKS }: Props) {
  const { t } = useTranslation(['practice', 'subject', 'timing']);
  const headingId = useId();
  const allowed = active ? setAllowanceMinutes({ subject, set: active, exams: EXAMS }) : 0;
  const setTracks = useMemo(() => (active ? tracksForSet(active, tracks) : []), [active, tracks]);
  const papers = PAPER_IDS.filter(paper => sets.some(set => set.paper === paper));

  // Leaving timed mode throws the countdown away. If it is running (it is saved when it starts), ask first.
  const leave = (): void => {
    if (active) {
      const saved = readStoredTimer(timerStorageKey(subject, active.id), allowed * 60_000);
      if (saved?.status === 'running' && !window.confirm(t('timed.leaveConfirm'))) return;
    }
    onSelect('');
  };

  return (
    <>
      <section aria-labelledby={headingId} className="study-panel">
        <h2 id={headingId} className="study-h2">{t('timed.heading')}</h2>

        {sets.length === 0 ? (
          <p className="study-muted">{t('timed.noSets')}</p>
        ) : (
          <>
            <p className="study-muted" style={{ marginBottom: '0.75rem' }}>{t('timed.intro')}</p>
            <div className="study-fields">
              <FilterSelect label={t('timed.set')} value={active?.id ?? ''} onChange={onSelect}>
                <option value="">{t('timed.none')}</option>
                {papers.map(paper => (
                  <optgroup key={paper} label={t(`paperNames.${paper}`, { ns: 'subject' })}>
                    {sets.filter(set => set.paper === paper).map(set => (
                      <option key={set.id} value={set.id}>
                        {t('timed.option', { title: pickText(set.title, lang), minutes: set.minutes })}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </FilterSelect>
            </div>
          </>
        )}

        {requestedId && !active ? (
          <p className="study-banner" data-tone="amber" role="note" style={{ marginTop: '0.75rem' }}>
            <TriangleAlert size={18} aria-hidden="true" />
            <span>{t('timed.notFound', { id: requestedId })}</span>
          </p>
        ) : null}

        {active ? (
          <div className="study-timed__info">
            <h3 className="study-timed__title">{pickText(active.title, lang)}</h3>
            <div className="study-q__chips">
              <span className="foma-chip">{t(`paperNames.${active.paper}`, { ns: 'subject' })}</span>
              {active.part ? <span className="foma-chip">{t('timed.part', { part: active.part })}</span> : null}
              <span className="foma-chip">{t('timed.questions', { n: questionCount })}</span>
              <span className="foma-chip">{t('timed.minutes', { n: active.minutes })}</span>
            </div>



            <p className="study-muted">{t('timed.printed')}</p>
            {typingReminderFor(subject, active.paper) ? <p className="study-muted">{t('typing.hint', { ns: 'timing' })}</p> : null}

            {active.part?.includes('listening') ? <ListeningPlayer key={active.id} tracks={setTracks} /> : null}

            {missing.length > 0 ? (
              <p className="study-banner" data-tone="amber" role="note">
                <TriangleAlert size={18} aria-hidden="true" />
                <span>{t('timed.missing', { ids: missing.join(', ') })}</span>
              </p>
            ) : null}

            <p className="mb-0 mt-3">
              <button type="button" className="foma-btn" onClick={leave}>{t('timed.leave')}</button>
            </p>
          </div>
        ) : null}
      </section>

      {active ? <Clock key={`${active.id}:${allowed}`} minutes={allowed} storageKey={timerStorageKey(subject, active.id)} /> : null}
    </>
  );
}
