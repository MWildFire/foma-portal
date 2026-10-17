import { Link } from 'react-router-dom';
import type { Lang } from '../../contract/types';
import { PREPARATION_GAPS, LEGAL_READING } from '../../../data/preparation-readiness';
import { CARD } from './ui';
export function PreparationReadiness({lang}: {lang: Lang}) {
 const ru=lang==='ru';
 return <details className={`${CARD} p-3 text-sm`} data-preparation-readiness>
  <summary className="cursor-pointer min-h-[44px] font-medium">{ru?'Подготовка: задания, самопроверка и ожидаемые уточнения':'Preparation: assigned work, self-checks and pending choices'}</summary>
  <p>{ru?'План задаёт работу, а не подтверждает её выполнение или полное владение школьным списком. Ниже — назначенные проверки навыков и ограничения источников; отдельные литературные решения ещё ожидаются.':'The plan assigns work; it does not certify completion or mastery of the full school list. The items below identify assigned skill checks and source limits; specific literature choices are still pending.'}</p>
  <ul className="list-disc space-y-3 pl-5">{PREPARATION_GAPS.map(g=><li key={g.title.en}><Link to={`/s/${g.subject}/t/${g.topicId}`} className="font-medium">{g.title[lang]}</Link><p>{g.detail[lang]}</p></li>)}</ul>
  <p className="mt-3">{ru?'Законные источники для чтения (издание школы не подтверждено):':'Legal reading sources (school edition unconfirmed):'}</p>
  <ul className="list-disc pl-5">{LEGAL_READING.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a></li>)}</ul>
 </details>;
}
