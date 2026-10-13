import type { Lang } from '../../contract/types';

// Example simulation. A sim is a default export that takes { lang }.
export default function DemoSim({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  return (
    <figure role="img" aria-label={ru ? 'Пример кривой спроса' : 'Example demand curve'}>
      <svg viewBox="0 0 240 160" width="100%" style={{ maxWidth: 320 }} aria-hidden="true">
        <line x1="30" y1="130" x2="225" y2="130" stroke="currentColor" strokeWidth={2} />
        <line x1="30" y1="15" x2="30" y2="130" stroke="currentColor" strokeWidth={2} />
        <path d="M40 30 Q 110 75 215 122" fill="none" stroke="currentColor" strokeWidth={3} />
        <text x="222" y="150" fontSize="12" fill="currentColor">Q</text>
        <text x="14" y="18" fontSize="12" fill="currentColor">P</text>
      </svg>
      <figcaption>
        {ru ? 'При росте цены величина спроса падает.' : 'As price rises, quantity demanded falls.'}
      </figcaption>
    </figure>
  );
}
