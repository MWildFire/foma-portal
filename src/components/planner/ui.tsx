import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

// Small building blocks for the planner pages. Colours come from the CSS variables in index.css, so the dark theme works.
const CARD_SHAPE = 'rounded-lg border bg-[var(--color-card)]';
export const CARD = `${CARD_SHAPE} border-[var(--color-border)]`;
// A card that stands out (today, the running or next exam, a warning). Each card gets exactly one border colour class:
// with two, the order of the rules in the built CSS would decide, not the order in className.
export const CARD_ACCENT = `${CARD_SHAPE} border-[var(--color-accent)]`;
export const card = (accent: boolean): string => (accent ? CARD_ACCENT : CARD);
export const MUTED = 'text-[var(--color-muted)]';

type Variant = 'primary' | 'secondary' | 'quiet';

const VARIANTS: Record<Variant, string> = {
  primary: 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] hover:opacity-90',
  secondary: 'border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-fg)] hover:border-[var(--color-accent)]',
  quiet: 'border-transparent bg-transparent text-[var(--color-accent)] underline-offset-2 hover:underline',
};

// Every button carries a text label; icons are decoration only. The ref lets a page move focus to a button that
// replaces another one. `aria-disabled` looks like `disabled` but keeps the button focusable.
export const Btn = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }>(function Btn(
  { variant = 'secondary', className = '', type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium leading-tight transition-colors disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ${VARIANTS[variant]} ${className}`}
      {...rest}
    />
  );
});

export function Chip({ children, strong = false }: { children: ReactNode; strong?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium ${
        strong ? 'border-[var(--color-accent)] text-[var(--color-accent)]' : 'border-[var(--color-border)] text-[var(--color-muted)]'
      }`}
    >
      {children}
    </span>
  );
}

// An external link that says so, for screen readers as well.
export function ExternalLink({ href, children, hint }: { href: string; children: ReactNode; hint: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="break-words">
      {children}
      <span className="sr-only"> ({hint})</span>
    </a>
  );
}
