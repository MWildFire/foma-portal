import { useTranslation } from 'react-i18next';
import { usePageTitle } from '../components/content/usePageTitle';
import { useScrollToTopOnArrival } from '../components/practice/pageScroll';
import { ReportView } from '../components/report/ReportView';
import { PageLoading } from '../components/layout/PageLoading';
import { listSubjects } from '../content/registry';
import { useSubjects } from '../content/useSubject';

// #/report. The subjects of the portal (not the example subject), in the order of the navigation.
export function ReportPage() {
  const { t } = useTranslation(['report', 'common']);
  const packs = useSubjects(listSubjects().map(meta => meta.id));

  usePageTitle(t('title'), t('brand', { ns: 'common' }));
  useScrollToTopOnArrival('report');

  if (!packs) return <PageLoading />;
  return <ReportView packs={packs} />;
}
