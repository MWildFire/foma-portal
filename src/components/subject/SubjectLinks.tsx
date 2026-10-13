import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { SubjectPack } from '../../contract/pack';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';
import { guidesForPaper, papersWithGuides } from '../../lib/topic-list';
import '../content/ui.css';
import './subject.css';

// Paper guides (P1, P2, P3, only those that have a guide) and the study tools of a subject.
export function SubjectLinks({ pack }: { pack: SubjectPack }) {
  const { t, i18n } = useTranslation('subject');
  const subject = pack.meta.id;
  const papers = papersWithGuides(pack.papers);
  return (
    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
      {papers.map(paper => {
        const titles = guidesForPaper(pack.papers, paper).map(guide => pickText(guide.title, i18n.language));
        return (
          <li key={paper}>
            <Link to={ROUTES.paper(subject, paper)} className="foma-btn">
              {t('tools.paperGuide', { paper: t(`paperNames.${paper}`), title: titles.join(' / ') })}
            </Link>
          </li>
        );
      })}
      <li><Link to={ROUTES.terms(subject)} className="foma-btn">{t('nav.glossary', { ns: 'common' })}</Link></li>
      <li><Link to={ROUTES.formulas(subject)} className="foma-btn">{t('nav.formulas', { ns: 'common' })}</Link></li>
      <li><Link to={ROUTES.practice(subject)} className="foma-btn">{t('nav.practice', { ns: 'common' })}</Link></li>
    </ul>
  );
}
