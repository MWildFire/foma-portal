import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../ui/LanguageToggle';
import { listSubjects } from '../../content/registry';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';

const LINKS = [
  { to: ROUTES.today(), key: 'nav.today' },
  { to: ROUTES.plan(), key: 'nav.plan' },
  { to: ROUTES.exams(), key: 'nav.exams' },
  { to: ROUTES.sims(), key: 'nav.sims' },
  { to: ROUTES.report(), key: 'nav.report' },
  { to: ROUTES.settings(), key: 'nav.settings' },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'font-semibold underline' : 'hover:underline');
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3">
        <Link to={ROUTES.today()} className="font-semibold text-[var(--color-fg)] no-underline">
          {t('brand')}
        </Link>
        <nav aria-label={t('nav.main')} className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {LINKS.map(link => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {t(link.key)}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto">
          <LanguageToggle />
        </div>
      </div>
      <nav aria-label={t('nav.subjects')} className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 pb-3 text-sm">
        {listSubjects().map(subject => (
          <NavLink
            key={subject.id}
            to={ROUTES.subject(subject.id)}
            className="whitespace-nowrap rounded-full border border-[var(--color-border)] px-3 py-1 no-underline"
          >
            {pickText(subject.title, i18n.language)}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
