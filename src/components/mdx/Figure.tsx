import { findFigureUrl } from '../../lib/topic-assets';
import { useBodyT, useTopicContext } from './context';
import { MdxWarning } from './MdxWarning';

// Every SVG that subjects ship in content/<subject>/**/assets/, as built URLs. Small files become data URLs.
const ASSET_URLS = import.meta.glob<string>('/content/**/assets/*.svg', { query: '?url', import: 'default', eager: true });

// Only the paths of the topic bodies are needed here, to find the folder of a topic's MDX file.
// The glob is not eager, so none of the MDX is loaded by this line.
const MDX_PATHS = Object.keys(import.meta.glob('/content/**/topics/*.{en,ru}.mdx'));

// <Figure src="./assets/demand.svg" caption="Demand curve"/>. The src is relative to the MDX file.
export function Figure({ src, caption }: { src?: string; caption?: string }) {
  const ctx = useTopicContext();
  const { t } = useBodyT();
  const url = ctx && src
    ? findFigureUrl({ assets: ASSET_URLS, mdxPaths: MDX_PATHS, subject: ctx.subjectId, topicId: ctx.topicId, src })
    : null;
  if (!url) return <MdxWarning>{t('warn.figure', { src: src || t('warn.noId') })}</MdxWarning>;
  return (
    <figure className="foma-figure">
      <div className="foma-figure__frame">
        <img src={url} alt={caption ?? ''} loading="lazy" />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
