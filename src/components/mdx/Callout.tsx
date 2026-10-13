import type { ReactNode } from 'react';
import { BookOpen, Calculator, GraduationCap, Info, Lightbulb, TriangleAlert, type LucideIcon } from 'lucide-react';
import { useBodyT } from './context';
import '../content/ui.css';

// Each kind has an icon, a text label and a tone. The label is always text, so colour is never the only signal.
const KINDS = new Map<string, { tone: string; Icon: LucideIcon }>([
  ['exam', { tone: 'blue', Icon: GraduationCap }],
  ['mistake', { tone: 'red', Icon: TriangleAlert }],
  ['tip', { tone: 'green', Icon: Lightbulb }],
  ['gdc', { tone: 'purple', Icon: Calculator }],
  ['define', { tone: 'amber', Icon: BookOpen }],
]);

// <Callout kind="exam|mistake|tip|gdc|define">text</Callout>. An unknown kind becomes a neutral "Note".
export function Callout({ kind, children }: { kind?: string; children?: ReactNode }) {
  const { t } = useBodyT();
  const known = kind ? KINDS.get(kind) ?? null : null;
  const Icon = known ? known.Icon : Info;
  return (
    <div role="note" className="foma-callout" data-tone={known ? known.tone : 'slate'} data-kind={known ? kind : 'note'}>
      <p className="foma-callout__label">
        <Icon size={18} aria-hidden="true" />
        <span>{t(known ? `callout.${kind}` : 'callout.note')}</span>
      </p>
      <div className="foma-callout__body">{children}</div>
    </div>
  );
}
