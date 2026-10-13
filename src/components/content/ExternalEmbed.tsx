import { useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import { useLangT } from './useLangT';

interface Props {
  url: string;
  title: string;
  fallbackText?: string;
  height?: string;
}

// A public web page inside the portal. The link above it always works, even if the site refuses to be embedded.
export function ExternalEmbed({ url, title, fallbackText, height = '500px' }: Props) {
  const { t } = useLangT();
  const [failed, setFailed] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2 text-sm text-[var(--color-muted)]">
          <Globe size={14} aria-hidden="true" />
          <span className="[overflow-wrap:anywhere]">{title}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs"
        >
          <ExternalLink size={12} aria-hidden="true" />
          {t('link.openNewTab')}
        </a>
      </div>
      {!failed ? (
        <iframe
          src={url}
          title={title}
          style={{ width: '100%', height, border: 0 }}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="p-6 text-center">
          <p className="mb-3 text-sm text-[var(--color-muted)]">{fallbackText ?? t('link.cannotEmbed')}</p>
        </div>
      )}
    </div>
  );
}
