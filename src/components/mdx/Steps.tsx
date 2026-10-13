import type { ReactNode } from 'react';

// <Steps><Step>first</Step><Step>second</Step></Steps>: a numbered list.
export function Steps({ children }: { children?: ReactNode }) {
  return <ol className="foma-steps">{children}</ol>;
}

export function Step({ children }: { children?: ReactNode }) {
  return <li className="foma-step">{children}</li>;
}
