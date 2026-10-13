import { useEffect, useId, useRef, type ReactNode, type RefObject } from 'react';
import '../content/ui.css';
import './fields.css';

// Small building blocks shared by the study pages (practice, glossary, formulas): a labelled select, a labelled
// search box and a row of count tiles.

// A labelled select. The browser keeps the choice itself (the select is not "controlled"), and the choice is copied
// to the element only when `value` says something else. This matters when the value comes from the address: the
// router changes the address in a React transition, which takes a moment, and a controlled select would jump back
// to the old choice for that moment and then forward again.
export function FilterSelect({ label, value, onChange, children, selectRef }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  /** To put the focus on the select from outside. */
  selectRef?: RefObject<HTMLSelectElement>;
}) {
  const id = useId();
  const own = useRef<HTMLSelectElement>(null);
  const ref = selectRef ?? own;
  useEffect(() => {
    const element = ref.current;
    if (element && element.value !== value) element.value = value;
  });
  return (
    <div className="study-field">
      <label htmlFor={id} className="study-field__label">{label}</label>
      <select id={id} ref={ref} className="study-input" defaultValue={value} onChange={event => onChange(event.target.value)}>
        {children}
      </select>
    </div>
  );
}

export function SearchField({ label, value, placeholder, onChange, inputRef }: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  /** To put the focus on the box from outside. */
  inputRef?: RefObject<HTMLInputElement>;
}) {
  const id = useId();
  return (
    <div className="study-field">
      <label htmlFor={id} className="study-field__label">{label}</label>
      <input
        id={id}
        ref={inputRef}
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
export function StatGrid({ tiles }: { tiles: readonly Tile[] }) {
  return (
    <dl className="study-stats">
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
