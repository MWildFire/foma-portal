import { BookMarked } from 'lucide-react';
import type { Lang, Term } from '../../contract/types';
import { termLabel } from '../../lib/topic-text';
import { pickText } from '../../lib/text';
import { InlineText } from '../content/RichText';
import { SourceItem } from '../content/SourceList';
import { useLangT } from '../content/useLangT';
import { FrenchText } from './FrenchText';
import '../content/ui.css';

interface Props {
  term: Term;
  /** Language of the labels and of the example and pitfall. Without it, the UI language. */
  lang?: Lang;
}

// A term: "EN term (RU term)", the English definition first (the exam is in English), the Russian one below,
// then example, pitfall and source. A French term (the French subject) is a line of its own above the label, and a
// French example is a line of its own above the English one. It is built from spans only, so it is valid inside a
// paragraph too.
export function TermCard({ term, lang }: Props) {
  const { t, lang: lng } = useLangT(lang);
  return (
    <span className="foma-card foma-term">
      <span className="foma-kind">
        <BookMarked size={14} aria-hidden="true" />
        {t('term.kind')}
      </span>
      <FrenchText text={term.term} className="foma-term__label" />
      <span className="foma-term__label">{termLabel(term.term)}</span>
      <span className="foma-term__def" lang="en">
        <span className="foma-tag">EN</span> <InlineText text={term.def.en} />
      </span>
      <span className="foma-term__def" lang="ru">
        <span className="foma-tag">RU</span> <InlineText text={term.def.ru} />
      </span>
      <FrenchText text={term.example} className="foma-term__extra" />
      {term.example ? (
        <span className="foma-term__extra" lang={lng}>
          <strong>{t('term.example')}:</strong> <InlineText text={pickText(term.example, lng)} />
        </span>
      ) : null}
      {term.pitfall ? (
        <span className="foma-term__extra" lang={lng}>
          <strong>{t('term.pitfall')}:</strong> <InlineText text={pickText(term.pitfall, lng)} />
        </span>
      ) : null}
      <span className="foma-term__extra">
        <strong>{t('term.source')}:</strong> <SourceItem source={term.src} lang={lng} />
      </span>
    </span>
  );
}
