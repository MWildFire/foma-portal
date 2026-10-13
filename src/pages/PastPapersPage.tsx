import { useId, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PastPaperCard } from '../components/past-papers/PastPaperCard';
import { RichText } from '../components/content/RichText';
import { SectionHeading } from '../components/content/TopicHero';
import { usePageTitle, useScrollToTop } from '../components/content/usePageTitle';
import { SubjectHeader } from '../components/subject/SubjectHeader';
import { SubjectNotFound } from '../components/subject/SubjectNotFound';
import { getSubject } from '../content/registry';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { groupPastPapers } from '../lib/past-papers';
import { pickText } from '../lib/text';
import '../components/subject/subject.css';

// #/s/:subject/past-papers: past IB papers by paper and session, newest first. The portal links to the papers and keeps
// your marks and your guide; the question text stays on the IB site.
export function PastPapersPage() {
  const { subject = '' } = useParams();
  const { t, i18n } = useTranslation('subject');
  const [state, update] = useLocalProgress();
  const base = useId();
  const pack = getSubject(subject);
  const groups = useMemo(() => groupPastPapers(pack?.pastPapers ?? []), [pack]);

  usePageTitle(
    pack ? `${pickText(pack.meta.title, i18n.language)}: ${t('pastPapers.heading')}` : t('notFound.title'),
    t('brand', { ns: 'common' }),
  );
  useScrollToTop(subject);

  if (!pack) return <SubjectNotFound />;

  const setScore = (key: string, itemIndex: number, score: number) => update(current => {
    const previous = current.pastPapers[key] ?? {};
    return {
      ...current,
      pastPapers: { ...current.pastPapers, [key]: { ...previous, scores: { ...previous.scores, [String(itemIndex)]: score } } },
    };
  });
  const setSolved = (key: string, date: string | undefined) => update(current => {
    const previous = current.pastPapers[key] ?? {};
    return { ...current, pastPapers: { ...current.pastPapers, [key]: { ...previous, solved: date } } };
  });

  return (
    <div data-subject-color={pack.meta.color}>
      <SubjectHeader pack={pack} />

      <section aria-labelledby={`${base}-heading`}>
        <SectionHeading id={`${base}-heading`}>{t('pastPapers.heading')}</SectionHeading>
        <p className="m-0 mb-4">{t('pastPapers.intro')}</p>
        {groups.length === 0 ? <p className="m-0">{t('pastPapers.empty')}</p> : null}
      </section>

      {groups.map(group => (
        <section key={group.paper} aria-labelledby={`${base}-${group.paper}`}>
          <SectionHeading id={`${base}-${group.paper}`}>{t(`paperNames.${group.paper}`)}</SectionHeading>
          {pack.papers.filter(guide => guide.paper === group.paper).map((guide, index) => guide.asked ? (
            <div key={`${guide.paper}-${guide.part ?? ''}-${index}`} className="mb-4">
              <h3 className="m-0 mb-2 text-base font-semibold">{t('pastPapers.asked')}</h3>
              <RichText text={pickText(guide.asked, i18n.language)} />
            </div>
          ) : null)}
          <div className="flex flex-col gap-4">
            {group.refs.map(paper => {
              const key = `${subject}/${paper.id}`;
              return (
                <PastPaperCard
                  key={paper.id}
                  subject={subject}
                  paper={paper}
                  topics={pack.topics}
                  progress={state.pastPapers[key]}
                  extraTime={state.settings.accessArrangements.extraTime}
                  onScore={(itemIndex, score) => setScore(key, itemIndex, score)}
                  onSolved={date => setSolved(key, date)}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
