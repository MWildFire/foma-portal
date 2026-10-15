import { useId } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { PaperGuide } from '../contract/types';
import { BreadcrumbsNav } from '../components/layout/BreadcrumbsNav';
import { RichText } from '../components/content/RichText';
import { useContentLang } from '../components/content/useContentLang';
import { SectionHeading, TopicHero } from '../components/content/TopicHero';
import { PastPaperCard } from '../components/past-papers/PastPaperCard';
import { usePastPaperProgress } from '../components/past-papers/usePastPaperProgress';
import { usePageTitle, useScrollToTop } from '../components/content/usePageTitle';
import { SubjectBar } from '../components/subject/SubjectHeader';
import { SubjectLoadError } from '../components/subject/SubjectLoadError';
import { SubjectNotFound } from '../components/subject/SubjectNotFound';
import { ROUTES } from '../config/routes';
import { useSubject } from '../content/useSubject';
import { PageLoading } from '../components/layout/PageLoading';
import { groupPastPapers } from '../lib/past-papers';
import { pickText, shownLangs } from '../lib/text';
import { guidesForPaper, isPaperKey, timedSetSearch } from '../lib/topic-list';
import '../components/content/ui.css';
import '../components/subject/subject.css';

function GuideSection({ guide, subject, lang }: { guide: PaperGuide; subject: string; lang: string }) {
  const { t } = useTranslation('paper');
  const base = useId();
  const reading = 'font-reading max-w-[60ch] text-[1.0625rem] leading-relaxed';
  return (
    <article aria-labelledby={`${base}-title`} className="mb-12">
      <h2 id={`${base}-title`} className="text-xl font-semibold">{pickText(guide.title, lang)}</h2>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {guide.part ? <span className="foma-chip">{t('guide.part', { part: guide.part })}</span> : null}
        <span className="foma-chip">{t('guide.minutes', { n: guide.minutes })}</span>
        <span className="foma-chip">{t('guide.marks', { n: guide.marks })}</span>
      </div>

      <h3 className="mb-1 mt-6 text-base font-semibold">{t('sections.structure')}</h3>
      <RichText className={reading} text={pickText(guide.structure, lang)} />

      <h3 className="mb-1 mt-6 text-base font-semibold">{t('sections.strategy')}</h3>
      <RichText className={reading} text={pickText(guide.strategy, lang)} />

      {guide.criteria ? (
        <>
          <h3 className="mb-1 mt-6 text-base font-semibold">{t('sections.criteria')}</h3>
          <RichText className={reading} text={pickText(guide.criteria, lang)} />
        </>
      ) : null}

      {guide.commandTerms && guide.commandTerms.length > 0 ? (
        <>
          <h3 className="mb-2 mt-6 text-base font-semibold">{t('sections.commandTerms')}</h3>
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {guide.commandTerms.map(term => (
              <li key={term}><span className="foma-chip" data-tone="blue">{term}</span></li>
            ))}
          </ul>
        </>
      ) : null}

      <h3 className="mb-2 mt-6 text-base font-semibold">{t('sections.timedSets')}</h3>
      {guide.timedSets.length === 0 ? (
        <p className="m-0 text-[var(--color-muted)]">{t('timed.empty')}</p>
      ) : (
        <ul className="m-0 list-none space-y-3 p-0">
          {guide.timedSets.map(set => (
            <li key={set.id} className="foma-card flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="m-0 font-semibold [overflow-wrap:anywhere]">{pickText(set.title, lang)}</p>
                <p className="mb-0 mt-1 text-sm text-[var(--color-muted)]">
                  {t('timed.minutes', { n: set.minutes })} · {t('timed.questions', { n: set.questionIds.length })}
                </p>
              </div>
              <Link to={`${ROUTES.practice(subject)}${timedSetSearch(set.id)}`} className="foma-btn foma-btn--primary">
                {t('timed.start')}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

// #/s/:subject/paper/:paper: the guide for P1, P2 or P3 and its timed sets. A paper can have several guides
// (parts, such as reading and listening); they are shown one after another.
export function PaperPage() {
  const { subject = '', paper = '' } = useParams();
  const { t, i18n } = useTranslation(['paper', 'subject', 'common']);
  const [contentLang] = useContentLang();
  const base = useId();
  const { progressOf, extraTime, setScore, setSolved } = usePastPaperProgress(subject);
  const { pack, loading, failed, cause } = useSubject(subject);
  const guides = pack && isPaperKey(paper) ? guidesForPaper(pack.papers, paper) : [];
  const paperName = isPaperKey(paper) ? t(`paperNames.${paper}`, { ns: 'subject' }) : paper;
  const subjectTitle = pack ? pickText(pack.meta.title, i18n.language) : '';

  usePageTitle(loading ? null : failed ? t('loadError.title', { ns: 'subject' }) : pack ? `${t('title', { paper: paperName })} | ${subjectTitle}` : t('notFound.title', { ns: 'subject' }), t('brand', { ns: 'common' }));
  useScrollToTop(`${subject}/${paper}`);

  if (loading) return <PageLoading />;
  if (failed) return <SubjectLoadError cause={cause} />;
  if (!pack) return <SubjectNotFound />;

  const crumbs = [{ label: subjectTitle, to: ROUTES.subject(subject) }, { label: paperName }];
  // The past papers of this paper, newest session first: the same cards as on the past-papers page, with the timer.
  const pastRefs = isPaperKey(paper) ? (groupPastPapers(pack.pastPapers).find(group => group.paper === paper)?.refs ?? []) : [];

  return (
    <div data-subject-color={pack.meta.color}>
      <BreadcrumbsNav crumbs={crumbs} />
      <SubjectBar pack={pack} />
      {guides.length === 0 ? (
        <section>
          <h1 className="text-2xl font-semibold">{t('notFound.title')}</h1>
          <p role="status" className="mt-2 text-[var(--color-muted)]">{t('notFound.body', { paper: paperName })}</p>
          <Link to={ROUTES.subject(subject)} className="foma-btn">{t('notFound.back')}</Link>
        </section>
      ) : (
        <>
          <TopicHero title={t('title', { paper: paperName })} />
          {guides.map((guide, index) => (
            <GuideSection key={`${guide.part ?? ''}-${index}`} guide={guide} subject={subject} lang={shownLangs(contentLang)[0]} />
          ))}
          {pastRefs.length > 0 ? (
            <section aria-labelledby={`${base}-past`} className="mt-8">
              <SectionHeading id={`${base}-past`}>{t('pastPapers.heading', { ns: 'subject' })}</SectionHeading>
              <div className="flex flex-col gap-4">
                {pastRefs.map(ref => (
                  <PastPaperCard
                    key={ref.id}
                    subject={subject}
                    paper={ref}
                    topics={pack.topics}
                    progress={progressOf(ref.id)}
                    extraTime={extraTime}
                    onScore={(itemIndex, score) => setScore(ref.id, itemIndex, score)}
                    onSolved={date => setSolved(ref.id, date)}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </>
      )}
    </div>
  );
}
