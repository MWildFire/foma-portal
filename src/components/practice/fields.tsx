import { useId, type ReactNode } from 'react';
import '../content/ui.css';
import './fields.css';

// Small building blocks shared by the study pages (practice, glossary, formulas): a labelled select, a labelled
// search box and a row of count tiles.

export function FilterSelect({ label, value, onChange, children }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  const id = useId();
  return (
    <div className="study-field">
      <label htmlFor={id} className="study-field__label">{label}</label>
      <select id={id} className="study-input" value={value} onChange={event => onChange(event.target.value)}>
        {children}
      </select>
    </div>
  );
}

export function SearchField({ label, value, placeholder, onChange }: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  const id = useId();
  return (
    <div className="study-field">
      <label htmlFor={id} className="study-field__label">{label}</label>
      <input
        id={id}
        type="search"
        className="study-input"
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
}

export interface Tile {
  key: string;
  label: string;
  value: number | string;
  /** A small line under the label, such as the review interval of a box. */
  hint?: string;
}

// Count tiles. The label comes first in the markup (so a screen reader says "Due today: 3"); the number is shown
// above it. The words are always written, the tiles do not rely on colour.
export function StatGrid({ tiles, label }: { tiles: readonly Tile[]; label: string }) {
  return (
    <dl className="study-stats" aria-label={label}>
      {tiles.map(tile => (
        <div key={tile.key} className="study-stat">
          <dt>
            {tile.label}
            {tile.hint ? <span className="study-stat__hint">{tile.hint}</span> : null}
          </dt>
          <dd>{tile.value}</dd>
        </div>
      ))}
    </dl>
  );
}
