import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { SubjectPack } from '../../contract/pack';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';
import { papersWithGuides } from '../../lib/topic-list';
import '../content/ui.css';
import './subject.css';

// Title and level of a subject, with its colour. The h1 of the subject page.
export function SubjectHeader({ pack }: { pack: SubjectPack }) {
  const { t, i18n } = useTranslation('subject');
  return (
    <header className="mb-6">
      <h1 className="flex items-center gap-3 text-2xl font-semibold leading-tight md:text-3xl">
        <span className="foma-subject-dot" aria-hidden="true" />
        <span className="min-w-0 [overflow-wrap:anywhere]">{pickText(pack.meta.title, i18n.language)}</span>
      </h1>
      <p className="mb-0 mt-2">
        <span className="foma-chip">{t('header.level', { level: pack.meta.level })}</span>
      </p>
    </header>
  );
}

// The subject layout on the inner pages (topic, paper): the subject name and level, and the pages of the subject.
export function SubjectBar({ pack }: { pack: SubjectPack }) {
  const { t, i18n } = useTranslation('subject');
  const subject = pack.meta.id;
  const papers = papersWithGuides(pack.papers);
  const items = [
    { to: ROUTES.subject(subject), label: t('bar.topics') },
    ...papers.map(paper => ({ to: ROUTES.paper(subject, paper), label: t('bar.paper', { paper: t(`paperNames.${paper}`) }) })),
    { to: ROUTES.terms(subject), label: t('nav.glossary', { ns: 'common' }) },
    { to: ROUTES.formulas(subject), label: t('nav.formulas', { ns: 'common' }) },
    { to: ROUTES.practice(subject), label: t('nav.practice', { ns: 'common' }) },
  ];
  return (
    <div className="mb-5">
      <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="foma-subject-dot" aria-hidden="true" />
        <Link to={ROUTES.subject(subject)} className="font-semibold underline underline-offset-2">{pickText(pack.meta.title, i18n.language)}</Link>
        <span className="foma-chip">{t('header.level', { level: pack.meta.level })}</span>
      </p>
      <nav aria-label={t('bar.label')} className="mt-2">
        <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-sm">
          {items.map(item => (
            <li key={item.to}><Link to={item.to} className="underline underline-offset-2">{item.label}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
