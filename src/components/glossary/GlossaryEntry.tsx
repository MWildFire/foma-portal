import { Fragment, memo, useId } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Lang, Term, TopicMeta } from '../../contract/types';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';
import { InlineText } from '../content/RichText';
import { SourceItem } from '../content/SourceList';
import { isFixturePack } from '../sims/catalog';
import { FrenchText } from '../ui/FrenchText';
import '../content/ui.css';
import './glossary.css';

interface Props {
  term: Term;
  /** UI language: used for the example, the pitfall and the labels. */
  lang: Lang;
  subject: string;
  /** Topics whose termIds list this term. */
  topics: readonly TopicMeta[];
}

// The simulation page opens the chosen simulation. The example subject needs ?include=example to be listed.
function simHref(id: string): string {
  const include = isFixturePack(id) ? '&include=example' : '';
  return `${ROUTES.sims()}?sim=${encodeURIComponent(id)}${include}`;
}

// One term of the glossary. The English term and definition come first (the exam is in English); the Russian
// term and definition are below them. A French term (the French subject) is the first line of the heading, above
// the English one. Then the syllabus code, papers, example, pitfall, source and links.
export const GlossaryEntry = memo(function GlossaryEntry({ term, lang, subject, topics }: Props) {
  const { t } = useTranslation('glossary');
  const titleId = useId();
  const russianTerm = term.term.ru.trim();
  return (
    <article className="gl-entry" aria-labelledby={titleId}>
      <header>
        <h3 id={titleId} className="gl-entry__term" lang="en">
          <FrenchText text={term.term} />
          {term.term.en}
        </h3>
        <div className="gl-entry__chips">
          <span className="foma-chip">{t('entry.syllabus', { code: term.syllabus })}</span>
          {term.papers.length > 0 ? <span className="foma-chip">{t('entry.papers', { papers: term.papers.join(', ') })}</span> : null}
        </div>
      </header>

      <p className="gl-entry__def" lang="en">
        <span className="foma-tag">EN</span> <InlineText text={term.def.en} />
      </p>
      <p className="gl-entry__def" lang="ru">
        <span className="foma-tag">RU</span>{' '}
        {russianTerm ? <><strong>{russianTerm}</strong>{' — '}</> : null}
        <InlineText text={term.def.ru} />
      </p>

      <FrenchText text={term.example} rich />
      {term.example ? (
        <p className="gl-entry__extra" lang={lang}>
          <strong>{t('entry.example')}:</strong> <InlineText text={pickText(term.example, lang)} />
        </p>
      ) : null}
      {term.pitfall ? (
        <p className="gl-entry__extra" lang={lang}>
          <strong>{t('entry.pitfall')}:</strong> <InlineText text={pickText(term.pitfall, lang)} />
        </p>
      ) : null}
      <p className="gl-entry__extra">
        <strong>{t('entry.source')}:</strong> <SourceItem source={term.src} lang={lang} />
      </p>
      {topics.length > 0 ? (
        <p className="gl-entry__extra">
          <strong>{t('entry.topics')}:</strong>{' '}
          {topics.map((topic, position) => (
            <Fragment key={topic.id}>
              {position > 0 ? ', ' : null}
              <Link to={ROUTES.topic(subject, topic.id)} className="foma-link">{pickText(topic.title, lang)}</Link>
            </Fragment>
          ))}
        </p>
      ) : null}
      {term.sim ? (
        <p className="gl-entry__extra">
          <Link to={simHref(term.sim)} className="foma-link">{t('entry.sim', { id: term.sim })}</Link>
        </p>
      ) : null}
    </article>
  );
});
