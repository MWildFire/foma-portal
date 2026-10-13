import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BreadcrumbsNav } from '../components/layout/BreadcrumbsNav';
import { usePageTitle } from '../components/content/usePageTitle';
import { useScrollToTopOnArrival } from '../components/practice/pageScroll';
import { FormulasView } from '../components/formulas/FormulasView';
import { SubjectBar } from '../components/subject/SubjectHeader';
import { SubjectNotFound } from '../components/subject/SubjectNotFound';
import { ROUTES } from '../config/routes';
import { getSubject } from '../content/registry';
import { pickText } from '../lib/text';

// #/s/:subject/formulas (also ?booklet=1 for the formulas of the booklet only)
export function FormulasPage() {
  const { subject = '' } = useParams();
  const { t, i18n } = useTranslation(['formulas', 'subject', 'common']);
  const pack = getSubject(subject);
  const subjectTitle = pack ? pickText(pack.meta.title, i18n.language) : '';

  usePageTitle(pack ? `${t('title')} | ${subjectTitle}` : t('notFound.title', { ns: 'subject' }), t('brand', { ns: 'common' }));
  useScrollToTopOnArrival(subject);

  if (!pack) return <SubjectNotFound />;

  return (
    <div data-subject-color={pack.meta.color}>
      <BreadcrumbsNav crumbs={[{ label: subjectTitle, to: ROUTES.subject(subject) }, { label: t('title') }]} />
      <SubjectBar pack={pack} />
      <FormulasView key={subject} pack={pack} />
    </div>
  );
}
