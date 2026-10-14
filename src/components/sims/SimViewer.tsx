import { Component, Suspense, useEffect, useId, useRef, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RotateCcw, TriangleAlert, X } from 'lucide-react';
import type { Lang } from '../../contract/types';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';
import { lazyOnce } from '../mdx/lazy';
import { InlineLoadWait } from '../subject/SubjectLoadError';
import type { SimEntry } from './catalog';
import '../content/ui.css';
import '../practice/fields.css';
import './sims.css';

interface BoundaryProps {
  children: ReactNode;
  message: string;
  reloadLabel: string;
}

// A simulation that fails to load or to draw shows a message and a reload button. The gallery keeps working.
class SimBoundary extends Component<BoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('A simulation failed to load or to draw', error, info.componentStack);
  }

  render(): ReactNode {
    if (!this.state.failed) return this.props.children;
    return (
      <div role="alert" className="sim-failed">
        <p className="study-banner" data-tone="red">
          <TriangleAlert size={18} aria-hidden="true" />
          <span>{this.props.message}</span>
        </p>
        <button type="button" className="foma-btn" onClick={() => window.location.reload()}>
          <RotateCcw size={16} aria-hidden="true" />
          {this.props.reloadLabel}
        </button>
      </div>
    );
  }
}

interface Props {
  entry: SimEntry;
  lang: Lang;
  subjectTitle: string;
  onClose: () => void;
}

// One simulation, loaded the first time it is opened. It gets the UI language as `lang`. While it loads there is
// a status line; if it fails there is a message. The stage scrolls sideways inside its own box on a narrow screen.
export function SimViewer({ entry, lang, subjectTitle, onClose }: Props) {
  const { t } = useTranslation('sims');
  const titleId = useId();
  const heading = useRef<HTMLHeadingElement>(null);
  const Loaded = lazyOnce(entry.load);

  // Opening a simulation brings it into view and puts the focus on its title, so a keyboard or screen reader user
  // lands on it and not at the top of the long list.
  useEffect(() => {
    const node = heading.current;
    if (!node) return;
    node.scrollIntoView({ block: 'start' });
    node.focus({ preventScroll: true });
  }, [entry.id]);

  return (
    <section className="sim-viewer" aria-labelledby={titleId}>
      <header className="sim-viewer__head">
        <div className="min-w-0">
          <h2 id={titleId} ref={heading} tabIndex={-1} className="sim-viewer__title">{t('viewer.title', { id: entry.id })}</h2>
          <p className="study-muted">{subjectTitle}</p>
        </div>
        <button type="button" className="foma-btn" onClick={onClose}>
          <X size={16} aria-hidden="true" />
          {t('close')}
        </button>
      </header>

      {entry.topics.length > 0 ? (
        <p className="sim-viewer__topics">
          <strong>{t('topics')}:</strong>{' '}
          {entry.topics.map((topic, position) => (
            <span key={`${topic.subject}/${topic.id}`}>
              {position > 0 ? ', ' : null}
              <Link to={ROUTES.topic(topic.subject, topic.id)} className="foma-link">{pickText(topic.title, lang)}</Link>
            </span>
          ))}
        </p>
      ) : null}

      <div className="sim-viewer__stage" lang={lang}>
        <SimBoundary key={entry.id} message={t('error')} reloadLabel={t('reload')}>
          <Suspense fallback={<InlineLoadWait label={t('loading')} className="study-muted" />}>
            <Loaded lang={lang} />
          </Suspense>
        </SimBoundary>
      </div>
    </section>
  );
}
