import { BookOpen, Calculator, Sigma, TriangleAlert } from 'lucide-react';
import type { Formula, Lang } from '../../contract/types';
import { pickText } from '../../lib/text';
import { InlineText } from '../content/RichText';
import { Tex, texToHtml } from '../content/Tex';
import { useLangT } from '../content/useLangT';
import '../content/ui.css';

interface Props {
  formula: Formula;
  /** Language of the name, text and labels. Without it, the UI language. */
  lang?: Lang;
}

// A formula: the KaTeX rendering, name, what it means, when to use it, a booklet badge, units, an example and
// the GDC note. The formula itself scrolls inside its box on a narrow screen.
export function FormulaCard({ formula, lang }: Props) {
  const { t, lang: lng } = useLangT(lang);
  const broken = texToHtml(formula.tex, true) === null;
  return (
    <div className="foma-card foma-formula" lang={lng}>
      <p className="foma-kind">
        <Sigma size={14} aria-hidden="true" />
        {t('formula.kind')}
      </p>
      <div className="foma-formula__head">
        <p className="foma-formula__name">{pickText(formula.name, lng)}</p>
        {formula.inBooklet === true ? (
          <span className="foma-chip" data-tone="blue">
            <BookOpen size={14} aria-hidden="true" />
            {t('formula.inBooklet')}
          </span>
        ) : null}
        {formula.inBooklet === false ? (
          <span className="foma-chip" data-tone="amber">
            <TriangleAlert size={14} aria-hidden="true" />
            {t('formula.notInBooklet')}
          </span>
        ) : null}
      </div>
      <div className="foma-formula__tex">
        <Tex tex={formula.tex} display />
      </div>
      {broken ? <p className="foma-note">{t('formula.cannotRender')}</p> : null}
      <dl className="foma-formula__list">
        <dt>{t('formula.meaning')}</dt>
        <dd><InlineText text={pickText(formula.meaning, lng)} /></dd>
        <dt>{t('formula.when')}</dt>
        <dd><InlineText text={pickText(formula.when, lng)} /></dd>
        {formula.units ? (
          <>
            <dt>{t('formula.units')}</dt>
            <dd>{formula.units}</dd>
          </>
        ) : null}
        {formula.example ? (
          <>
            <dt>{t('formula.example')}</dt>
            <dd><InlineText text={pickText(formula.example, lng)} /></dd>
          </>
        ) : null}
      </dl>
      {formula.gdc ? (
        <p className="foma-formula__gdc" data-tone="purple">
          <Calculator size={16} aria-hidden="true" />
          <span><strong>{t('formula.gdc')}:</strong> <InlineText text={pickText(formula.gdc, lng)} /></span>
        </p>
      ) : null}
    </div>
  );
}
