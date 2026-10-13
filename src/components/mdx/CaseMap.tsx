import { lazy, Suspense } from 'react';
import type { CaseStudy } from '../../contract/types';
import { useLoadTimedOut } from '../../lib/load-timeout';
import { pickText } from '../../lib/text';
import { parseIdList } from '../../lib/topic-text';
import { SubjectLoadError } from '../subject/SubjectLoadError';
import type { MappableCase } from './CaseMapView';
import { useBodyT, useTopicContext } from './context';
import { MdxWarning } from './MdxWarning';
import { SafeContent } from './SafeContent';

// Leaflet and the map component are a separate chunk. Nothing is fetched until a CaseMap is rendered.
const CaseMapView = lazy(() => import('./CaseMapView'));

const hasCoordinates = (study: CaseStudy): study is MappableCase =>
  typeof study.lat === 'number' && Number.isFinite(study.lat) && typeof study.lng === 'number' && Number.isFinite(study.lng);

// The placeholder while the map's chunk loads. After the load timeout it becomes the load error, with a retry.
function CaseMapLoading({ label }: { label: string }) {
  const timedOut = useLoadTimedOut(true);
  if (timedOut) return <SubjectLoadError cause={new Error('load timeout')} />;
  return <p role="status" className="m-0 text-sm text-[var(--color-muted)]">{label}</p>;
}

// <CaseMap ids="lagos,mumbai"/>: a map of the cases that have coordinates, with a text list under it.
export function CaseMap({ ids }: { ids?: string }) {
  const ctx = useTopicContext();
  const { t, lang } = useBodyT();
  if (!ctx) return <MdxWarning>{t('warn.outside', { name: 'CaseMap' })}</MdxWarning>;

  const wanted = parseIdList(ids);
  if (wanted.length === 0) return <MdxWarning>{t('warn.caseMapIds')}</MdxWarning>;

  const found: CaseStudy[] = [];
  const unknown: string[] = [];
  for (const id of wanted) {
    const study = ctx.pack.cases.find(item => item.id === id);
    if (study) found.push(study);
    else unknown.push(id);
  }
  const onMap = found.filter(hasCoordinates);
  const offMap = found.filter(study => !hasCoordinates(study));

  return (
    <div className="foma-casemap" lang={lang}>
      {unknown.map(id => (
        <div key={id} className="mb-2"><MdxWarning>{t('warn.case', { id })}</MdxWarning></div>
      ))}
      {onMap.length > 0 ? (
        <>
          <SafeContent>
            <Suspense fallback={<CaseMapLoading label={t('caseMap.loading')} />}>
              <CaseMapView cases={onMap} lang={lang} label={t('caseMap.label')} />
            </Suspense>
          </SafeContent>
          <ul className="foma-casemap__list">
            {onMap.map(study => (
              <li key={study.id}>
                <strong>{pickText(study.title, lang)}</strong>: {study.place}, {study.years}
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {offMap.length > 0 ? (
        <div className="mt-2">
          <MdxWarning>{t('caseMap.noCoordinates', { titles: offMap.map(study => pickText(study.title, lang)).join('; ') })}</MdxWarning>
        </div>
      ) : null}
    </div>
  );
}
