import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Rag } from '../../planner/types';

const DOT: Record<Rag, string> = { red: '#dc2626', amber: '#d97706', green: '#16a34a' };
const OPTIONS: Rag[] = ['red', 'amber', 'green'];

// "How sure are you now?" after a topic. Selected state is shown by a check mark and a thicker border as well as colour.
export function RagControl({ name, value, onChange }: { name: string; value: Rag | undefined; onChange: (rag: Rag | null) => void }) {
  const { t } = useTranslation('planner');
  return (
    <fieldset className="mt-3 min-w-0 border-t border-[var(--color-border)] pt-3">
      <legend className="float-left mb-2 w-full text-sm font-medium">{t('rag.question', { name })}</legend>
      <div className="clear-both flex flex-wrap gap-2">
        {OPTIONS.map(rag => {
          const selected = value === rag;
          return (
            <button
              key={rag}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(selected ? null : rag)}
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                selected
                  ? 'border-2 border-[var(--color-accent)] bg-[var(--color-bg)]'
                  : 'border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]'
              }`}
            >
              <span aria-hidden className="inline-block h-3 w-3 rounded-full" style={{ background: DOT[rag] }} />
              {t(`rag.${rag}`)}
              {selected && <Check size={16} aria-hidden />}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
