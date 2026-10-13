import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BreadcrumbsNav } from '../components/layout/BreadcrumbsNav';
import { usePageTitle, useScrollToTop } from '../components/content/usePageTitle';
import { GlossaryView } from '../components/glossary/GlossaryView';
import { SubjectBar } from '../components/subject/SubjectHeader';
import { SubjectNotFound } from '../components/subject/SubjectNotFound';
import { ROUTES } from '../config/routes';
import { getSubject } from '../content/registry';
import { pickText } from '../lib/text';

// #/s/:subject/terms (also ?mode=cards for the flashcards)
export function GlossaryPage() {
  const { subject = '' } = useParams();
  const { t, i18n } = useTranslation(['glossary', 'subject', 'common']);
  const pack = getSubject(subject);
  const subjectTitle = pack ? pickText(pack.meta.title, i18n.language) : '';

  usePageTitle(pack ? `${t('title')} | ${subjectTitle}` : t('notFound.title', { ns: 'subject' }), t('brand', { ns: 'common' }));
  useScrollToTop(subject);

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
