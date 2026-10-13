import { useId } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Hourglass, TriangleAlert } from 'lucide-react';
import { ROUTES } from '../../config/routes';
import { PAPER_IDS, allowedMinutes, extraMinutes, type TimedSetInfo } from '../../lib/practice';
import { pickText } from '../../lib/text';
import { Clock } from './Clock';
import { FilterSelect } from './fields';
import '../content/ui.css';
import './fields.css';
import './practice.css';

interface Props {
  sets: readonly TimedSetInfo[];
  /** The set chosen in the address or in the list. */
  active: TimedSetInfo | undefined;
  /** The ?set= value as typed, even when no such set exists. */
  requestedId: string;
  /** storage.settings.accessArrangements.extraTime */
  extraTime: boolean;
  lang: string;
  /** How many of the set's questions are in the pack, and the ids that are not. */
  questionCount: number;
  missing: readonly string[];
  /** An empty id leaves timed mode. */
  onSelect: (id: string) => void;
}

// Timed mode: choose a set and run the clock. It returns the picker panel and, for a chosen set, the clock as a
// second element. The clock sticks to the top of the screen while the student scrolls through the questions, so
// the page must put both elements in the same container as the question list.
export function TimedPanel({ sets, active, requestedId, extraTime, lang, questionCount, missing, onSelect }: Props) {
  const { t } = useTranslation(['practice', 'subject']);
  const headingId = useId();
  const allowed = active ? allowedMinutes(active.minutes, extraTime) : 0;
  const papers = PAPER_IDS.filter(paper => sets.some(set => set.paper === paper));

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

            {extraTime ? (
              <p className="study-banner" data-tone="blue">
                <Hourglass size={18} aria-hidden="true" />
                <span>{t('timed.extra.on', { base: active.minutes, extra: extraMinutes(active.minutes, true), total: allowed })}</span>
              </p>
            ) : (
              <p className="study-muted">
                {t('timed.extra.off')}{' '}
                <Link to={ROUTES.settings()} className="foma-link">{t('timed.extra.settings')}</Link>
              </p>
            )}

            {missing.length > 0 ? (
              <p className="study-banner" data-tone="amber" role="note">
                <TriangleAlert size={18} aria-hidden="true" />
                <span>{t('timed.missing', { ids: missing.join(', ') })}</span>
              </p>
            ) : null}

            <p className="mb-0 mt-3">
              <button type="button" className="foma-btn" onClick={() => onSelect('')}>{t('timed.leave')}</button>
            </p>
          </div>
        ) : null}
      </section>

      {active ? <Clock key={`${active.id}:${allowed}`} minutes={allowed} /> : null}
    </>
  );
}
