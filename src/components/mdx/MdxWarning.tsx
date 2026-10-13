import type { ReactNode } from 'react';
import { TriangleAlert } from 'lucide-react';
import '../content/ui.css';

// A visible message for a bad id or a failed load. A span, so it is valid inside a paragraph.
export function MdxWarning({ children }: { children: ReactNode }) {
  return (
    <span className="foma-note" role="note">
      <TriangleAlert size={16} aria-hidden="true" />
      {children}
    </span>
  );
}
