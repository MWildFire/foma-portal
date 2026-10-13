import { Fragment, memo, useId } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Term, TopicMeta } from '../../contract/types';
import { ROUTES } from '../../config/routes';
import { pickText, primaryTermIn, shownLangs, textsIn } from '../../lib/text';
import type { ContentLang } from '../../lib/topic-lang';
import { showsSource } from '../../lib/topic-text';
import { InlineText } from '../content/RichText';
import { SourceItem } from '../content/SourceList';
import { isFixturePack } from '../sims/catalog';
import { FrenchText } from '../ui/FrenchText';
import '../content/ui.css';
import './glossary.css';

interface Props {
  term: Term;
  /** Text language of the glossary: EN, RU or both. The labels follow the first language that is shown. */
  mode: ContentLang;
  subject: string;
  /** Topics whose termIds list this term. */
  topics: readonly TopicMeta[];
}

// The simulation page opens the chosen simulation. The example subject needs ?include=example to be listed.
function simHref(id: string): string {
  const include = isFixturePack(id) ? '&include=example' : '';
  return `${ROUTES.sims()}?sim=${encodeURIComponent(id)}${include}`;
}

// One term of the glossary, in the language(s) of the mode. When both are shown the English term and definition come
// first (the exam is in English) and the Russian definition is below them. A French term (the French subject) is the
// first line of the heading. Then the syllabus code, papers, example, pitfall, source (not for own notes) and links.
export const GlossaryEntry = memo(function GlossaryEntry({ term, mode, subject, topics }: Props) {
  const { t } = useTranslation('glossary');
  const titleId = useId();
  const langs = shownLangs(mode);
  const primary = primaryTermIn(term.term, mode);
  const russianTerm = term.term.ru.trim();
  return (
    <article className="gl-entry" aria-labelledby={titleId}>
      <header>
        <h3 id={titleId} className="gl-entry__term" lang={primary.lang}>
          <FrenchText text={term.term} />
          {primary.text}
        </h3>
        <div className="gl-entry__chips">
          <span className="foma-chip">{t('entry.syllabus', { code: term.syllabus, lng: primary.lang })}</span>
          {term.papers.length > 0 ? (
            <span className="foma-chip">{t('entry.papers', { papers: term.papers.join(', '), lng: primary.lang })}</span>
          ) : null}
        </div>
      </header>

      {langs.includes('en') ? (
        <p className="gl-entry__def" lang="en">
          <span className="foma-tag">EN</span> <InlineText text={term.def.en} />
        </p>
      ) : null}
      {langs.includes('ru') ? (
        <p className="gl-entry__def" lang="ru">
          <span className="foma-tag">RU</span>{' '}
          {langs.length > 1 && russianTerm ? <><strong>{russianTerm}</strong>{' — '}</> : null}
          <InlineText text={term.def.ru} />
        </p>
      ) : null}

      <FrenchText text={term.example} rich />
      {textsIn(term.example, mode).map(({ lang, text }) => (
        <p key={`example-${lang}`} className="gl-entry__extra" lang={lang}>
          <strong>{t('entry.example', { lng: lang })}:</strong> <InlineText text={text} />
        </p>
      ))}
      {textsIn(term.pitfall, mode).map(({ lang, text }) => (
        <p key={`pitfall-${lang}`} className="gl-entry__extra" lang={lang}>
          <strong>{t('entry.pitfall', { lng: lang })}:</strong> <InlineText text={text} />
        </p>
      ))}
      {showsSource(term.src) ? (
        <p className="gl-entry__extra">
          <strong>{t('entry.source', { lng: primary.lang })}:</strong> <SourceItem source={term.src} lang={primary.lang} />
        </p>
      ) : null}
      {topics.length > 0 ? (
        <p className="gl-entry__extra">
          <strong>{t('entry.topics', { lng: primary.lang })}:</strong>{' '}
          {topics.map((topic, position) => (
            <Fragment key={topic.id}>
              {position > 0 ? ', ' : null}
              <Link to={ROUTES.topic(subject, topic.id)} className="foma-link">{pickText(topic.title, primary.lang)}</Link>
            </Fragment>
          ))}
        </p>
      ) : null}
      {term.sim ? (
        <p className="gl-entry__extra">
          <Link to={simHref(term.sim)} className="foma-link">{t('entry.sim', { id: term.sim, lng: primary.lang })}</Link>
        </p>
      ) : null}
    </article>
  );
});
