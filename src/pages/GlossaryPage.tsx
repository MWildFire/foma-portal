import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BreadcrumbsNav } from '../components/layout/BreadcrumbsNav';
import { usePageTitle } from '../components/content/usePageTitle';
import { useScrollToTopOnArrival } from '../components/practice/pageScroll';
import { GlossaryView } from '../components/glossary/GlossaryView';
import { SubjectBar } from '../components/subject/SubjectHeader';
import { SubjectNotFound } from '../components/subject/SubjectNotFound';
import { ROUTES } from '../config/routes';
import { useSubject } from '../content/useSubject';
import { PageLoading } from '../components/layout/PageLoading';
import { pickText } from '../lib/text';

// #/s/:subject/terms (also ?mode=cards for the flashcards)
export function GlossaryPage() {
  const { subject = '' } = useParams();
  const { t, i18n } = useTranslation(['glossary', 'subject', 'common']);
  const { pack, loading } = useSubject(subject);
  const subjectTitle = pack ? pickText(pack.meta.title, i18n.language) : '';

  usePageTitle(loading ? null : pack ? `${t('title')} | ${subjectTitle}` : t('notFound.title', { ns: 'subject' }), t('brand', { ns: 'common' }));
  useScrollToTopOnArrival(subject);

  if (loading) return <PageLoading />;
  if (!pack) return <SubjectNotFound />;

  return (
    <div data-subject-color={pack.meta.color}>
      <BreadcrumbsNav crumbs={[{ label: subjectTitle, to: ROUTES.subject(subject) }, { label: t('title') }]} />
      <SubjectBar pack={pack} />
      {/* A new key per subject: the search text and the flashcard queue never carry over to another subject. */}
      <GlossaryView key={subject} pack={pack} />
    </div>
  );
}
