import { MapPin } from 'lucide-react';
import type { CaseStudy, Lang } from '../../contract/types';
import { pickText } from '../../lib/text';
import { RichText } from '../content/RichText';
import { SourceList } from '../content/SourceList';
import { useLangT } from '../content/useLangT';
import { useBodyT, useTopicContext } from './context';
import { MdxWarning } from './MdxWarning';
import '../content/ui.css';

// A case study: title, place, scale, years, facts and sources.
export function CaseCard({ study, lang }: { study: CaseStudy; lang?: Lang }) {
  const { t, lang: lng } = useLangT(lang);
  return (
    <div role="group" className="foma-card foma-case" lang={lng} aria-label={pickText(study.title, lng)}>
      <p className="foma-kind">
        <MapPin size={14} aria-hidden="true" />
        {t('case.kind')}
      </p>
      <p className="foma-case__title">{pickText(study.title, lng)}</p>
      <div className="foma-case__meta">
        <span className="foma-chip">{t('case.place', { place: study.place })}</span>
        <span className="foma-chip">{t('case.scale', { scale: t(`case.scales.${study.scale}`) })}</span>
        <span className="foma-chip">{t('case.years', { years: study.years })}</span>
      </div>
      <RichText className="foma-case__facts" text={pickText(study.facts, lng)} />
      {study.src.length > 0 ? (
        <div className="foma-case__sources">
          <p className="foma-case__sources-label">{t('case.sources')}</p>
          <SourceList sources={study.src} lang={lng} />
        </div>
      ) : null}
    </div>
  );
}

// <Case id="lagos"/>
export function Case({ id }: { id?: string }) {
  const ctx = useTopicContext();
  const { t } = useBodyT();
  if (!ctx) return <MdxWarning>{t('warn.outside', { name: 'Case' })}</MdxWarning>;
  const study = id ? ctx.pack.cases.find(item => item.id === id) : undefined;
  if (!study) return <MdxWarning>{t('warn.case', { id: id || t('warn.noId') })}</MdxWarning>;
  return <CaseCard study={study} lang={ctx.contentLang} />;
}
