import { figureDisplayWidth } from '../../lib/figure-size';
import { findFigureUrl } from '../../lib/topic-assets';
import { useBodyT, useTopicContext } from './context';
import { MdxWarning } from './MdxWarning';

// Serve SVG files even when small: browsers block data URLs in a new full-size tab.
const ASSET_URLS = import.meta.glob<string>('/content/**/assets/*.svg', { query: '?url&no-inline', import: 'default', eager: true });

const ASSET_TEXTS = import.meta.glob<string>('/content/**/assets/*.svg', { query: '?raw', import: 'default', eager: true });

// Only the paths of the topic bodies are needed here, to find the folder of a topic's MDX file.
// The glob is not eager, so none of the MDX is loaded by this line.
const MDX_PATHS = Object.keys(import.meta.glob('/content/**/topics/*.{en,ru}.mdx'));

// <Figure src="./assets/demand.svg" caption="Demand curve"/>. The src is relative to the MDX file. The alt text for a
// screen reader is the caption, unless the figure has its own alt (for a diagram without a caption).
export function Figure({ src, caption, alt }: { src?: string; caption?: string; alt?: string }) {
  const ctx = useTopicContext();
  const { t } = useBodyT();
  const url = ctx && src
    ? findFigureUrl({ assets: ASSET_URLS, mdxPaths: MDX_PATHS, subject: ctx.subjectId, topicId: ctx.topicId, src })
    : null;
  if (!url) return <MdxWarning>{t('warn.figure', { src: src || t('warn.noId') })}</MdxWarning>;
  const svg = ctx && src ? findFigureUrl({ assets: ASSET_TEXTS, mdxPaths: MDX_PATHS, subject: ctx.subjectId, topicId: ctx.topicId, src }) ?? '' : '';
  return (
    <figure className="foma-figure">
      <div className="foma-figure__frame" role="region" tabIndex={0} aria-label={t('region.figure')}>
        <img style={{ minWidth: figureDisplayWidth(svg) }} src={url} alt={alt ?? caption ?? ''} loading="lazy" />
      </div>
      <p className="text-sm"><a href={url} target="_blank" rel="noreferrer">{t('figure.open')}</a> · {t('figure.scroll')}</p>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
