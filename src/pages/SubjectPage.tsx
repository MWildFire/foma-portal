import { useId, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ContentLangSwitch } from '../components/content/ContentLangSwitch';
import { SectionHeading } from '../components/content/TopicHero';
import { useContentLang } from '../components/content/useContentLang';
import { usePageTitle, useScrollToTop } from '../components/content/usePageTitle';
import { ProgressSummary } from '../components/subject/ProgressSummary';
import { SubjectHeader } from '../components/subject/SubjectHeader';
import { SubjectLinks } from '../components/subject/SubjectLinks';
import { SubjectNotFound } from '../components/subject/SubjectNotFound';
import { TopicList } from '../components/subject/TopicList';
import { getSubject } from '../content/registry';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { pickText } from '../lib/text';
import { sortTopics } from '../lib/topic-list';
import { subjectProgress } from '../lib/topic-progress';
import '../components/subject/subject.css';

// #/s/:subject: title and level, progress, paper guides and tools, and the topics in teaching order.
export function SubjectPage() {
  const { subject = '' } = useParams();
  const { t, i18n } = useTranslation(['subject', 'common']);
  const [state] = useLocalProgress();
  const [contentLang, setContentLang] = useContentLang();
  const base = useId();
  const pack = getSubject(subject);

  const topics = useMemo(() => sortTopics(pack?.topics ?? []), [pack]);
  const progress = useMemo(
    () => subjectProgress(subject, topics.map(topic => topic.id), state.topics),
    [subject, topics, state.topics],
  );

  usePageTitle(pack ? pickText(pack.meta.title, i18n.language) : t('notFound.title'), t('brand', { ns: 'common' }));
  useScrollToTop(subject);

  if (!pack) return <SubjectNotFound />;

  return (
    <div data-subject-color={pack.meta.color}>
      <SubjectHeader pack={pack} />

      <section aria-labelledby={`${base}-progress`}>
        <SectionHeading id={`${base}-progress`}>{t('progress.heading')}</SectionHeading>
        <ProgressSummary progress={progress} />
      </section>

      <section aria-labelledby={`${base}-tools`}>
        <SectionHeading id={`${base}-tools`}>{t('tools.heading')}</SectionHeading>
        <SubjectLinks pack={pack} />
      </section>

      <section aria-labelledby={`${base}-topics`}>
        <SectionHeading id={`${base}-topics`}>{t('topics.heading')}</SectionHeading>
        <div className="mb-4">
          <ContentLangSwitch value={contentLang} onChange={setContentLang} />
        </div>
        <TopicList pack={pack} topics={topics} progress={state.topics} contentLang={contentLang} />
      </section>
    </div>
  );
}
