import { Fragment, useCallback, useId, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen, Check } from 'lucide-react';
import type { SubjectPack } from '../../contract/pack';
import type { TopicMeta } from '../../contract/types';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';
import { toLang } from '../../lib/topic-lang';
import { TopicHero } from '../content/TopicHero';
import { FormulaCard } from '../ui/Formula';
import '../content/ui.css';
import '../practice/fields.css';
import './formulas.css';

const NO_TOPICS: readonly TopicMeta[] = [];

// #/s/:subject/formulas. Every formula of the subject: KaTeX, name, meaning, when to use it, units, example, the
// GDC note and a booklet badge (all drawn by FormulaCard). The filter "Booklet only" lives in the address.
export function FormulasView({ pack }: { pack: SubjectPack }) {
  const { t, i18n } = useTranslation(['formulas', 'common']);
  const lang = toLang(i18n.language);
  const subject = pack.meta.id;
  const [params, setParams] = useSearchParams();
  const bookletOnly = params.get('booklet') === '1';
  const emptyId = useId();

  const inBooklet = useMemo(() => pack.formulas.filter(formula => formula.inBooklet === true), [pack.formulas]);
  const shown = bookletOnly ? inBooklet : pack.formulas;
  const topicsByFormula = useMemo(() => {
    const map = new Map<string, TopicMeta[]>();
    for (const topic of pack.topics) {
      for (const id of topic.formulaIds ?? []) {
        const list = map.get(id) ?? [];
        list.push(topic);
        map.set(id, list);
      }
    }
    return map;
  }, [pack.topics]);

  const toggleBooklet = useCallback((): void => {
    setParams(previous => {
      const next = new URLSearchParams(previous);
      if (next.get('booklet') === '1') next.delete('booklet');
      else next.set('booklet', '1');
      return next;
    }, { replace: true });
  }, [setParams]);

  return (
    <div className="study-page">
      <TopicHero title={t('title')} intro={t('intro')} />

      {pack.formulas.length === 0 ? (
        <section className="study-empty" aria-labelledby={emptyId}>
          <h2 id={emptyId}>{t('empty.title')}</h2>
          <p className="study-muted">{t('empty.body')}</p>
        </section>
      ) : (
        <>
          <div role="group" aria-label={t('filter.label')} className="foma-btn-row">
            <button type="button" className="foma-btn" aria-pressed={bookletOnly} onClick={toggleBooklet}>
              {bookletOnly ? <Check size={16} aria-hidden="true" /> : <BookOpen size={16} aria-hidden="true" />}
              {t('filter.booklet')}
            </button>
          </div>
          <p role="status" className="study-status">
            {t('count', { shown: shown.length, total: pack.formulas.length })} · {t('bookletCount', { n: inBooklet.length })}
          </p>

          {shown.length === 0 ? (
            <p className="study-banner" data-tone="amber" role="note">{t('noBooklet')}</p>
          ) : (
            <ul className="fm-list" aria-label={t('title')}>
              {shown.map(formula => {
                const topics = topicsByFormula.get(formula.id) ?? NO_TOPICS;
                return (
                  <li key={formula.id}>
                    <FormulaCard formula={formula} lang={lang} />
                    {topics.length > 0 ? (
                      <p className="fm-topics">
                        <strong>{t('usedIn')}:</strong>{' '}
                        {topics.map((topic, position) => (
                          <Fragment key={topic.id}>
                            {position > 0 ? ', ' : null}
                            <Link to={ROUTES.topic(subject, topic.id)} className="foma-link">{pickText(topic.title, lang)}</Link>
                          </Fragment>
                        ))}
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
