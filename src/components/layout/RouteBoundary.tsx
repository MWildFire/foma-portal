import { Component, type ReactNode } from 'react';
import { SubjectLoadError } from '../subject/SubjectLoadError';

interface State {
  failed: boolean;
  cause: unknown;
}

// A page whose files failed to load, or that threw while rendering, shows the load error with a retry instead of a
// blank screen. The header and footer stay where they are.
export class RouteBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false, cause: undefined };

  static getDerivedStateFromError(cause: unknown): State {
    return { failed: true, cause };
  }

  componentDidCatch(cause: unknown): void {
    console.error('A page failed to load or render', cause);
  }

  render(): ReactNode {
    if (this.state.failed) return <SubjectLoadError cause={this.state.cause} />;
    return this.props.children;
  }
}
