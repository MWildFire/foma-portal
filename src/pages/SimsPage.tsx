import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePageTitle } from '../components/content/usePageTitle';
import { useScrollToTopOnArrival } from '../components/practice/pageScroll';
import { SimsView } from '../components/sims/SimsView';
import { PageLoading } from '../components/layout/PageLoading';
import { listSubjects } from '../content/registry';
import { useSubjects } from '../content/useSubject';

// #/sims. The example subject is added to the packs here, and the gallery hides it unless ?include=example.
export function SimsPage() {
  const { t } = useTranslation(['sims', 'common']);
  const packs = useSubjects([...listSubjects().map(meta => meta.id), '_example']);

  usePageTitle(t('title'), t('brand', { ns: 'common' }));
  // A link to one simulation (?sim=) scrolls that simulation into view; the page must not pull it back to the top.
  const { search } = useLocation();
  useScrollToTopOnArrival('sims', !new URLSearchParams(search).has('sim'));

  if (!packs) return <PageLoading />;
  return <SimsView packs={packs} />;
}
