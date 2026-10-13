import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { usePageTitle, useScrollToTop } from '../components/content/usePageTitle';
import { ReportView } from '../components/report/ReportView';
import { listSubjects } from '../content/registry';

// #/report. The subjects of the portal (not the example subject), in the order of the navigation.
export function ReportPage() {
  const { t } = useTranslation(['report', 'common']);
  const packs = useMemo(() => listSubjects(), []);

  usePageTitle(t('title'), t('brand', { ns: 'common' }));
  useScrollToTop('report');

  return <ReportView packs={packs} />;
}
