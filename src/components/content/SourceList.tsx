import type { Lang, SourceRef } from '../../contract/types';
import { publicUrl } from '../../lib/topic-text';
import { ContentLink } from './ContentLink';
import { useLangT } from './useLangT';
import './ui.css';

// One source: kind tag, title, locator ("ch. 2.8, p. 113"). A link is shown only for a public page.
// Spans only, so it fits inside a sentence as well as inside a list item.
export function SourceItem({ source, lang }: { source: SourceRef; lang?: Lang }) {
  const { t, lang: lng } = useLangT(lang);
  const url = publicUrl(source.url);
  return (
    <>
      <span className="foma-tag">{t(`source.kind.${source.kind}`)}</span>{' '}
      {url ? <ContentLink href={url} lang={lng}>{source.title}</ContentLink> : <span>{source.title}</span>}
      {source.locator ? <span>, {source.locator}</span> : null}
    </>
  );
}

export function SourceList({ sources, lang }: { sources: readonly SourceRef[]; lang?: Lang }) {
  if (sources.length === 0) return null;
  return (
    <ul className="m-0 list-none space-y-2 p-0">
      {sources.map((source, index) => (
        <li key={index} className="[overflow-wrap:anywhere]"><SourceItem source={source} lang={lang} /></li>
      ))}
    </ul>
  );
}

// Public reading links of a topic (ThinkIB, textbook pages). Links to private hosts are left out.
export function LinkList({ links, lang }: { links: readonly { title: string; url: string }[]; lang?: Lang }) {
  const shown = links.flatMap(link => {
    const url = publicUrl(link.url);
    return url ? [{ title: link.title, url }] : [];
  });
  if (shown.length === 0) return null;
  return (
    <ul className="m-0 list-none space-y-2 p-0">
      {shown.map((link, index) => (
        <li key={`${index}-${link.url}`} className="[overflow-wrap:anywhere]"><ContentLink href={link.url} lang={lang}>{link.title}</ContentLink></li>
      ))}
    </ul>
  );
}
