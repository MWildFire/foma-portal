import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useLangT } from './useLangT';
import type { Lang } from '../../contract/types';
import './ui.css';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  lang?: Lang;
}

// In-app hash routes (#/s/geo) use the router. Web pages open in a new tab, with the same words for a
// screen reader, and without handing the opener window to the other site.
export function ContentLink({ href, children, className, lang }: Props) {
  const { t } = useLangT(lang);
  const classes = ['foma-link', className].filter(Boolean).join(' ');
  if (href.startsWith('#/')) {
    return <Link to={href.slice(1)} className={classes}>{children}</Link>;
  }
  const external = /^https?:\/\//i.test(href);
  if (!external) return <a href={href} className={classes}>{children}</a>;
  return (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
      {children}
      <ExternalLink size={13} aria-hidden="true" className="ml-1 inline-block align-[-0.1em]" />
      <span className="sr-only"> ({t('link.newTab')})</span>
    </a>
  );
}
