import { Suspense, useId, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MDXProvider } from '@mdx-js/react';
import type { SubjectPack } from '../contract/pack';
import type { Lang, TopicMeta } from '../contract/types';
import { BreadcrumbsNav } from '../components/layout/BreadcrumbsNav';
import { ContentLangSwitch } from '../components/content/ContentLangSwitch';
import { InlineText } from '../components/content/RichText';
import { LinkList, SourceList } from '../components/content/SourceList';
import { SectionHeading, TopicHero } from '../components/content/TopicHero';
import { useContentLang } from '../components/content/useContentLang';
import { useLangT } from '../components/content/useLangT';
import { usePageTitle, useScrollToTop } from '../components/content/usePageTitle';
import { mdxComponents, SafeContent, TopicContextProvider, type TopicContextValue } from '../components/mdx';
import { lazyOnce } from '../components/mdx/lazy';
import { SubjectBar } from '../components/subject/SubjectHeader';
import { SubjectNotFound } from '../components/subject/SubjectNotFound';
import { TopicChips } from '../components/subject/TopicChips';
import { TopicProgressControls } from '../components/subject/TopicProgressControls';
import { ROUTES } from '../config/routes';
import { getSubject } from '../content/registry';
import { pickText } from '../lib/text';
import { langsOf, toLang, type ContentLang } from '../lib/topic-lang';
import { publicUrl } from '../lib/topic-text';
import '../components/content/ui.css';
import '../components/subject/subject.css';

// The compiled MDX body of one language. The MDX file is loaded when it is first shown. The MDX components get
// their subject, topic, pack and languages from the context, not from props.
function LoadedBody({ pack, topic, lang, uiLang }: { pack: SubjectPack; topic: TopicMeta; lang: Lang; uiLang: Lang }) {
  const { t } = useLangT(lang);
  const loader = pack.topicBodies[topic.id]?.[lang];
  const context = useMemo<TopicContextValue>(
    () => ({ subjectId: pack.meta.id, topicId: topic.id, pack, contentLang: lang, uiLang }),
    [pack, topic.id, lang, uiLang],
  );
  if (!loader) return null;
  const Body = lazyOnce(loader);
  return (
    <TopicContextProvider value={context}>
      <MDXProvider components={mdxComponents}>
        <div className="foma-prose">
          <SafeContent>
            <Suspense fallback={<p role="status" className="m-0 text-[var(--color-muted)]">{t('page.loading')}</p>}>
              <Body />
            </Suspense>
          </SafeContent>
        </div>
      </MDXProvider>
    </TopicContextProvider>
  );
}

// One language has no text yet: say so, offer the other language, and show the reading links.
function MissingBody({ topic, lang, other, onSwitch }: { topic: TopicMeta; lang: Lang; other: Lang | null; onSwitch: (to: ContentLang) => void }) {
  const { t } = useTranslation('topic');
  const links = (topic.links ?? []).filter(link => publicUrl(link.url) !== null);
  return (
    <div className="foma-card">
      <p className="m-0 font-semibold">{t(`body.missing.${lang}`)}</p>
      {other ? (
        <p className="mb-0 mt-3">
          <button type="button" className="foma-btn" onClick={() => onSwitch(other)}>{t(`body.switch.${other}`)}</button>
        </p>
      ) : null}
      <p className="mb-1 mt-4 text-sm text-[var(--color-muted)]">{links.length > 0 ? t('body.meanwhile') : t('body.noLinks')}</p>
      <LinkList links={links} />
    </div>
  );
}

// Both languages are wanted and neither has text yet.
function NoBody({ topic }: { topic: TopicMeta }) {
  const { t } = useTranslation('topic');
  const links = (topic.links ?? []).filter(link => publicUrl(link.url) !== null);
  return (
    <div className="foma-card">
      <p className="m-0 font-semibold">{t('body.missing.both')}</p>
      <p className="mb-1 mt-3 text-sm text-[var(--color-muted)]">{links.length > 0 ? t('body.meanwhile') : t('body.noLinks')}</p>
      <LinkList links={links} />
    </div>
  );
}

// #/s/:subject/t/:topic: the topic header and outcomes, the MDX text (EN, RU or both), the student's progress
// on the topic, and the sources.
export function TopicPage() {
  const { subject = '', topic: topicId = '' } = useParams();
  const { t, i18n } = useTranslation(['topic', 'subject', 'common']);
  const uiLang = toLang(i18n.language);
  const [contentLang, setContentLang] = useContentLang();
  const base = useId();
  const pack = getSubject(subject);
  const topic = pack?.topics.find(item => item.id === topicId);

  usePageTitle(
    topic ? pickText(topic.title, uiLang) : t('page.notFound.title'),
    pack ? `${pickText(pack.meta.title, uiLang)} | ${t('brand', { ns: 'common' })}` : t('brand', { ns: 'common' }),
  );
  useScrollToTop(`${subject}/${topicId}`);

  if (!pack) return <SubjectNotFound />;

  const subjectTitle = pickText(pack.meta.title, uiLang);

  if (!topic) {
    return (
      <div data-subject-color={pack.meta.color}>
        <BreadcrumbsNav crumbs={[{ label: subjectTitle, to: ROUTES.subject(subject) }, { label: t('page.notFound.title') }]} />
        <SubjectBar pack={pack} />
        <section>
          <h1 className="text-2xl font-semibold">{t('page.notFound.title')}</h1>
          <p role="status" className="mt-2 text-[var(--color-muted)]">{t('page.notFound.body')}</p>
          <Link to={ROUTES.subject(subject)} className="foma-btn">{t('page.notFound.back')}</Link>
        </section>
      </div>
    );
  }

  const bodies = pack.topicBodies[topic.id];
  const wanted = langsOf(contentLang);
  const ready = wanted.filter(lang => Boolean(bodies?.[lang]));
  const dual = wanted.length === 2;
  // The language to offer when a wanted one is missing: the other language, if its text exists.
  const offer = (lang: Lang): Lang | null => {
    const other: Lang = lang === 'en' ? 'ru' : 'en';
    return bodies?.[other] && !wanted.includes(other) ? other : null;
  };

  return (
    <div data-subject-color={pack.meta.color} className={dual ? '' : 'max-w-3xl'}>
      <BreadcrumbsNav crumbs={[{ label: subjectTitle, to: ROUTES.subject(subject) }, { label: pickText(topic.title, uiLang) }]} />
      <SubjectBar pack={pack} />

      <TopicHero title={pickText(topic.title, uiLang)} eyebrow={<span className="foma-code-label">{t('page.code', { code: topic.code })}</span>}>
        <TopicChips topic={topic} />
      </TopicHero>

      <div className="mb-6">
        <ContentLangSwitch value={contentLang} onChange={setContentLang} />
      </div>

      {topic.outcomes.length > 0 ? (
        <section aria-labelledby={`${base}-outcomes`} className="foma-card mb-8">
          <h2 id={`${base}-outcomes`} className="mb-2 text-base font-semibold">{t('page.outcomes')}</h2>
          <ul className="m-0 list-disc space-y-1 pl-6">
            {topic.outcomes.map((outcome, index) => (
              <li key={index}><InlineText text={pickText(outcome, uiLang)} /></li>
            ))}
          </ul>
        </section>
      ) : null}

      {dual && ready.length === 0 ? (
        <NoBody topic={topic} />
      ) : (
        <div className={dual ? 'grid gap-x-10 gap-y-8 md:grid-cols-2' : ''}>
          {wanted.map(lang => (
            <article key={lang} lang={lang} aria-label={t(`page.bodyLabel.${lang}`)} className="min-w-0">
              {dual ? <p className="mb-3 mt-0"><span className="foma-tag">{lang.toUpperCase()}</span></p> : null}
              {bodies?.[lang]
                ? <LoadedBody pack={pack} topic={topic} lang={lang} uiLang={uiLang} />
                : <MissingBody topic={topic} lang={lang} other={offer(lang)} onSwitch={setContentLang} />}
            </article>
          ))}
        </div>
      )}

      <section aria-labelledby={`${base}-progress`}>
        <SectionHeading id={`${base}-progress`}>{t('page.progress')}</SectionHeading>
        <TopicProgressControls subject={subject} topicId={topic.id} />
      </section>

      <section aria-labelledby={`${base}-sources`}>
        <SectionHeading id={`${base}-sources`}>{t('page.sources')}</SectionHeading>
        <SourceList sources={topic.sources} lang={uiLang} />
        {(topic.links ?? []).some(link => publicUrl(link.url) !== null) ? (
          <>
            <h3 className="mb-2 mt-5 text-base font-semibold">{t('page.links')}</h3>
            <LinkList links={topic.links ?? []} lang={uiLang} />
          </>
        ) : null}
      </section>
    </div>
  );
}
