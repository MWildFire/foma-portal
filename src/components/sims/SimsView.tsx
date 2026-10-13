import { useCallback, useId, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';
import { toLang } from '../../lib/topic-lang';
import { TopicHero } from '../content/TopicHero';
import { collectSims, countSims, findSim, wantsExample, type SimGroup, type SimPackLike } from './catalog';
import { SimViewer } from './SimViewer';
import '../content/ui.css';
import '../practice/fields.css';
import '../subject/subject.css';
import './sims.css';

function SimGroupSection({ group, selectedId, lang, onOpen }: { group: SimGroup; selectedId: string; lang: 'en' | 'ru'; onOpen: (id: string) => void }) {
  const { t } = useTranslation('sims');
  const headingId = useId();
  const baseId = useId();
  return (
    <section aria-labelledby={headingId} className="study-section" data-subject-color={group.color}>
      <h2 id={headingId} className="sim-group__title">
        <span className="foma-subject-dot" aria-hidden="true" />
        <span className="min-w-0 [overflow-wrap:anywhere]">{pickText(group.title, lang)}</span>
      </h2>
      <ul className="sim-list">
        {group.sims.map(sim => {
          const idElement = `${baseId}-${sim.id}`;
          const open = sim.id === selectedId;
          return (
            <li key={sim.id} className="sim-card">
              <p className="sim-card__id"><code id={idElement}>{sim.id}</code></p>
              {sim.topics.length > 0 ? (
                <p className="sim-card__topics">
                  <strong>{t('topics')}:</strong>{' '}
                  {sim.topics.map((topic, position) => (
                    <span key={`${topic.subject}/${topic.id}`}>
                      {position > 0 ? ', ' : null}
                      <Link to={ROUTES.topic(topic.subject, topic.id)} className="foma-link">{pickText(topic.title, lang)}</Link>
                    </span>
                  ))}
                </p>
              ) : (
                <p className="sim-card__topics study-muted">{t('noTopics')}</p>
              )}
              <button
                type="button"
                className={open ? 'foma-btn' : 'foma-btn foma-btn--primary'}
                aria-pressed={open}
                aria-describedby={idElement}
                onClick={() => onOpen(sim.id)}
              >
                <Play size={16} aria-hidden="true" />
                {open ? t('opened') : t('open')}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// #/sims. Every simulation of every subject, grouped by subject, each with links to the topics that use it. One
// simulation is open at a time (?sim=<id>). The example subject is listed only with ?include=example.
export function SimsView({ packs }: { packs: readonly SimPackLike[] }) {
  const { t, i18n } = useTranslation(['sims', 'common']);
  const lang = toLang(i18n.language);
  const [params, setParams] = useSearchParams();
  const emptyId = useId();
  const includeExample = wantsExample(params);
  const groups = useMemo(() => collectSims(packs, includeExample), [packs, includeExample]);
  const selectedId = params.get('sim') ?? '';
  const selected = useMemo(() => findSim(groups, selectedId), [groups, selectedId]);
  const subjectTitle = selected ? pickText(groups.find(group => group.subject === selected.subject)?.title ?? { en: '', ru: '' }, lang) : '';

  const open = useCallback((id: string): void => {
    setParams(previous => {
      const next = new URLSearchParams(previous);
      next.set('sim', id);
      return next;
    });
  }, [setParams]);
  const close = useCallback((): void => {
    setParams(previous => {
      const next = new URLSearchParams(previous);
      next.delete('sim');
      return next;
    }, { replace: true });
  }, [setParams]);

  return (
    <div className="study-page">
      <TopicHero title={t('title')} intro={t('intro')} />

      {groups.length === 0 ? (
        <section className="study-empty" aria-labelledby={emptyId}>
          <h2 id={emptyId}>{t('empty.title')}</h2>
          <p className="study-muted">{t('empty.body')}</p>
        </section>
      ) : (
        <>
          <p role="status" className="study-status">{t('count', { n: countSims(groups) })}</p>

          {selected ? (
            <SimViewer key={selected.id} entry={selected} lang={lang} subjectTitle={subjectTitle} onClose={close} />
          ) : selectedId ? (
            <p className="study-banner" data-tone="amber" role="note">{t('notFound', { id: selectedId })}</p>
          ) : null}

          {groups.map(group => (
            <SimGroupSection key={group.subject} group={group} selectedId={selected?.id ?? ''} lang={lang} onOpen={open} />
          ))}
        </>
      )}
    </div>
  );
}
