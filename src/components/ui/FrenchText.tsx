import type { L } from '../../contract/types';
import { frenchOf } from '../../lib/text';
import { InlineText, RichText } from '../content/RichText';
import '../content/ui.css';

interface Props {
  /** A text object that may carry a French version. Without one, nothing is drawn. */
  text: L | undefined;
  /** Markdown blocks (paragraphs, lists, formulas), for prompts, stimuli and model answers. Without it: one inline line, for terms, titles and examples. */
  rich?: boolean;
  /** One line: classes for the element. Rich text: classes for the text block inside it, the same as on the English text below. */
  className?: string;
}

// The French text of an L object, drawn before the English or Russian text that the page shows. It sits in its own
// element with lang="fr", so a screen reader switches to a French voice. Without a French text it draws nothing and
// the page stays exactly as it was. A line (a term, a title, an example) is a span, so it is valid inside a heading, a
// link or a paragraph, and it reads inline Markdown like the English text does; rich text is a block.
export function FrenchText({ text, rich = false, className }: Props) {
  const french = frenchOf(text);
  if (french === undefined) return null;
  if (rich) {
    return (
      <div lang="fr" className="foma-fr foma-fr--rich">
        <RichText text={french} className={className} />
      </div>
    );
  }
  return <span lang="fr" className={['foma-fr', className].filter(Boolean).join(' ')}><InlineText text={french} /></span>;
}
