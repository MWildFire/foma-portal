import { useId, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ContentLangSwitch } from '../components/content/ContentLangSwitch';
import { SectionHeading } from '../components/content/TopicHero';
import { useContentLang } from '../components/content/useContentLang';
import { usePageTitle, useScrollToTop } from '../components/content/usePageTitle';
import { AssignmentList } from '../components/subject/AssignmentList';
import { ProgressSummary } from '../components/subject/ProgressSummary';
import { SubjectHeader } from '../components/subject/SubjectHeader';
import { SubjectLinks } from '../components/subject/SubjectLinks';
import { SubjectLoadError } from '../components/subject/SubjectLoadError';
import { SubjectNotFound } from '../components/subject/SubjectNotFound';
import { TopicList } from '../components/subject/TopicList';
import { useSubject } from '../content/useSubject';
import { PageLoading } from '../components/layout/PageLoading';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { pickText } from '../lib/text';
import { filterMockTopics } from '../lib/mock-scope';
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
  const { pack, loading, failed, cause } = useSubject(subject);

  const [showOutside, setShowOutside] = useState(false);
  const topics = useMemo(() => sortTopics(filterMockTopics(pack?.topics ?? [], showOutside)), [pack, showOutside]);
  const progress = useMemo(
    () => subjectProgress(subject, topics.map(topic => topic.id), state.topics),
    [subject, topics, state.topics],
  );

  usePageTitle(loading ? null : failed ? t('loadError.title') : pack ? pickText(pack.meta.title, i18n.language) : t('notFound.title'), t('brand', { ns: 'common' }));
  useScrollToTop(subject);

  if (loading) return <PageLoading />;
  if (failed) return <SubjectLoadError cause={cause} />;
  if (!pack) return <SubjectNotFound />;

  return (
    <div data-subject-color={pack.meta.color}>
      <SubjectHeader pack={pack} />

      <section aria-labelledby={`${base}-progress`}>
        <SectionHeading id={`${base}-progress`}>{t('progress.heading')}</SectionHeading>
        <ProgressSummary progress={progress} />
      </section>

      {pack.assignments.length > 0 ? (
        <section aria-labelledby={`${base}-assignments`}>
          <SectionHeading id={`${base}-assignments`}>{t('assignments.heading')}</SectionHeading>
          <AssignmentList subject={subject} assignments={pack.assignments} topics={pack.topics} />
        </section>
      ) : null}

      <section aria-labelledby={`${base}-tools`}>
        <SectionHeading id={`${base}-tools`}>{t('tools.heading')}</SectionHeading>
        <SubjectLinks pack={pack} />
      </section>

      <section aria-labelledby={`${base}-topics`}>
        <SectionHeading id={`${base}-topics`}>{t('topics.heading')}</SectionHeading>
        <div className="mb-4">
          <ContentLangSwitch value={contentLang} onChange={setContentLang} />
        </div>
        <button type="button" className="foma-btn mb-4" aria-pressed={showOutside} onClick={()=>setShowOutside(v=>!v)}>{t(showOutside ? 'mock.hide' : 'mock.show')}</button>
        <TopicList pack={pack} topics={topics} progress={state.topics} contentLang={contentLang} />
      </section>
    </div>
  );
}
