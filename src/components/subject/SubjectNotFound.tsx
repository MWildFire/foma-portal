import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../config/routes';
import '../content/ui.css';
import './subject.css';

// Shown when the address names a subject that does not exist.
export function SubjectNotFound() {
  const { t } = useTranslation('subject');
  return (
    <section>
      <h1 className="text-2xl font-semibold">{t('notFound.title')}</h1>
      <p className="mt-2 text-[var(--color-muted)]">{t('notFound.body')}</p>
      <Link to={ROUTES.today()} className="foma-btn">{t('notFound.back')}</Link>
    </section>
  );
}
