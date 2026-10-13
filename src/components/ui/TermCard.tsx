import { BookMarked } from 'lucide-react';
import type { Lang, Term } from '../../contract/types';
import { shownLangs, termLabelIn, textsIn } from '../../lib/text';
import { showsSource } from '../../lib/topic-text';
import { InlineText } from '../content/RichText';
import { SourceItem } from '../content/SourceList';
import { useLangT } from '../content/useLangT';
import { FrenchText } from './FrenchText';
import '../content/ui.css';

interface Props {
  term: Term;
  /** Language of the topic body the card sits in: the card shows that language only. Without it, both, English first. */
  lang?: Lang;
}

// A term: the label (EN: "demand"; RU: "спрос (demand)"; both: "demand (спрос)"), then the definition in the shown
// language(s), example, pitfall and source (an own-notes source is not shown). A French term (the French subject) is
// a line of its own above the label, and a French example is a line of its own above the others. It is built from
// spans only, so it is valid inside a paragraph too.
export function TermCard({ term, lang }: Props) {
  const { t, lang: lng } = useLangT(lang);
  const langs = shownLangs(lang);
  return (
    <span className="foma-card foma-term">
      <span className="foma-kind">
        <BookMarked size={14} aria-hidden="true" />
        {t('term.kind')}
      </span>
      <FrenchText text={term.term} className="foma-term__label" />
      <span className="foma-term__label">{termLabelIn(term.term, lang)}</span>
      {langs.includes('en') ? (
        <span className="foma-term__def" lang="en">
          <span className="foma-tag">EN</span> <InlineText text={term.def.en} />
        </span>
      ) : null}
      {langs.includes('ru') ? (
        <span className="foma-term__def" lang="ru">
          <span className="foma-tag">RU</span> <InlineText text={term.def.ru} />
        </span>
      ) : null}
      <FrenchText text={term.example} className="foma-term__extra" />
      {textsIn(term.example, lang).map(({ lang: textLang, text }) => (
        <span key={`example-${textLang}`} className="foma-term__extra" lang={textLang}>
          <strong>{t('term.example')}:</strong> <InlineText text={text} />
        </span>
      ))}
      {textsIn(term.pitfall, lang).map(({ lang: textLang, text }) => (
        <span key={`pitfall-${textLang}`} className="foma-term__extra" lang={textLang}>
          <strong>{t('term.pitfall')}:</strong> <InlineText text={text} />
        </span>
      ))}
      {showsSource(term.src) ? (
        <span className="foma-term__extra">
          <strong>{t('term.source')}:</strong> <SourceItem source={term.src} lang={lng} />
        </span>
      ) : null}
    </span>
  );
}
