import type { ReactNode } from 'react';

interface TopicHeroProps {
  /** A string, or a node when the title has more than one line (a French title above the English one). */
  title: ReactNode;
  intro?: string;
  icon?: ReactNode;
  /** Small line above the title: a topic code, a paper name. */
  eyebrow?: ReactNode;
  /** Chips or links under the title. */
  children?: ReactNode;
}

// Page title block: one h1, an optional eyebrow, intro line and a row of chips.
export function TopicHero({ title, intro, icon, eyebrow, children }: TopicHeroProps) {
  return (
    <header className="mb-6">
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-accent)] md:flex">
            {icon}
          </div>
        ) : null}
        <div className="min-w-0 [overflow-wrap:anywhere]">
          {eyebrow ? <div className="mb-1 text-sm text-[var(--color-muted)]">{eyebrow}</div> : null}
          <h1 className="text-2xl font-semibold leading-tight md:text-3xl">{title}</h1>
          {intro ? <p className="mt-2 max-w-[60ch] text-[var(--color-muted)]">{intro}</p> : null}
          {children ? <div className="mt-3">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}

interface SectionHeadingProps {
  children: ReactNode;
  description?: string;
  id?: string;
}

// Page section title (h2) with an optional one-line description.
export function SectionHeading({ children, description, id }: SectionHeadingProps) {
  return (
    <div className="mb-3 mt-10">
      <h2 id={id} className="text-xl font-semibold">{children}</h2>
      {description ? <p className="mt-1 text-sm text-[var(--color-muted)]">{description}</p> : null}
    </div>
  );
}
