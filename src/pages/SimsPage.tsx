import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { usePageTitle } from '../components/content/usePageTitle';
import { useScrollToTopOnArrival } from '../components/practice/pageScroll';
import { SimsView } from '../components/sims/SimsView';
import { getSubject, listSubjects } from '../content/registry';

// #/sims. The example subject is added to the packs here, and the gallery hides it unless ?include=example.
export function SimsPage() {
  const { t } = useTranslation(['sims', 'common']);
  const packs = useMemo(() => {
    const example = getSubject('_example');
    return example ? [...listSubjects(), example] : listSubjects();
  }, []);

  usePageTitle(t('title'), t('brand', { ns: 'common' }));
  useScrollToTopOnArrival('sims');

  return <SimsView packs={packs} />;
}
