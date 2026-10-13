import { Component, type ErrorInfo, type ReactNode } from 'react';
import { RotateCcw } from 'lucide-react';
import { useBodyT } from './context';
import { MdxWarning } from './MdxWarning';
import '../content/ui.css';

interface BoundaryProps {
  children: ReactNode;
  message: string;
  reloadLabel: string;
}

class Boundary extends Component<BoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('A part of the page failed to render', error, info.componentStack);
  }

  render(): ReactNode {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="my-3 flex flex-wrap items-center gap-3">
        <MdxWarning>{this.props.message}</MdxWarning>
        <button type="button" className="foma-btn" onClick={() => window.location.reload()}>
          <RotateCcw size={16} aria-hidden="true" />
          {this.props.reloadLabel}
        </button>
      </div>
    );
  }
}

// A failing part of a topic (a simulation that did not load, a map, a broken component) shows a message and
// a reload button. The rest of the page keeps working.
export function SafeContent({ children }: { children: ReactNode }) {
  const { t } = useBodyT();
  return <Boundary message={t('error.load')} reloadLabel={t('error.reload')}>{children}</Boundary>;
}
