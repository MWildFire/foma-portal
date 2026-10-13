import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePageTitle } from '../components/content/usePageTitle';
import { useScrollToTopOnArrival } from '../components/practice/pageScroll';
import { SimsView } from '../components/sims/SimsView';
import { PageLoading } from '../components/layout/PageLoading';
import { getSubjectMeta, listSubjects, simsOf } from '../content/registry';
import { useTopicIndexes } from '../content/useSubject';

// #/sims. The gallery reads each subject's topic index and simulations, not its whole pack. The example subject is
// included here, and the gallery hides it unless ?include=example.
export function SimsPage() {
  const { t } = useTranslation(['sims', 'common']);
  const indexes = useTopicIndexes([...listSubjects().map(meta => meta.id), '_example']);
  const packs = useMemo(
    () =>
      indexes?.flatMap(({ id, index }) => {
        const meta = getSubjectMeta(id);
        return meta ? [{ meta, topics: index.topics, sims: simsOf(id) }] : [];
      }),
    [indexes],
  );

  usePageTitle(t('title'), t('brand', { ns: 'common' }));
  // A link to one simulation (?sim=) scrolls that simulation into view; the page must not pull it back to the top.
  const { search } = useLocation();
  useScrollToTopOnArrival('sims', !new URLSearchParams(search).has('sim'));

  if (!packs) return <PageLoading />;
  return <SimsView packs={packs} />;
}
