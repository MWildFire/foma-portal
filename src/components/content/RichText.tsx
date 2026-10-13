import { Fragment, type CSSProperties, type ReactNode } from 'react';
import { parseBlocks, parseInline, type Block, type Inline } from '../../lib/topic-markdown';
import { useBodyT } from '../mdx/context';
import '../mdx/mdx.css';
import { ContentLink } from './ContentLink';
import { Tex } from './Tex';

// Teaching text stored as plain strings (the L fields of the content contract):
//   blank line      -> new paragraph
//   "- " / "1. "    -> bullet / numbered list
//   "| a | b |" with a "|---|:--:|" row under the header -> table
//   **bold**, *italic*, `code`, [text](url), $formula$, $$display formula$$
// Text without these marks renders as one paragraph. The parser is in src/lib/topic-markdown.ts.
function renderInline(nodes: Inline[]): ReactNode[] {
  return nodes.map((node, index) => {
    switch (node.type) {
      case 'text':
        return <Fragment key={index}>{node.value}</Fragment>;
      case 'strong':
        return <strong key={index}>{renderInline(node.children)}</strong>;
      case 'em':
        return <em key={index}>{renderInline(node.children)}</em>;
      case 'code':
        return <code key={index} className="rounded bg-[var(--color-bg)] px-1 text-[0.9em] [overflow-wrap:anywhere]">{node.value}</code>;
      case 'math':
        return <Tex key={index} tex={node.value} display={node.display} />;
      case 'link':
        return <ContentLink key={index} href={node.href}>{renderInline(node.children)}</ContentLink>;
      case 'br':
        return <br key={index} />;
    }
  });
}

// A table. A wide one scrolls inside its own box, which takes the keyboard focus and has a name, the same as the
// tables of the MDX body. The column alignment comes from the row under the header.
function ContentTable({ table }: { table: Extract<Block, { type: 'table' }> }) {
  const { t } = useBodyT();
  const cellStyle = (column: number): CSSProperties | undefined => {
    const align = table.align[column];
    return align ? { textAlign: align } : undefined;
  };
  return (
    <div className="foma-table-wrap" tabIndex={0} role="region" aria-label={t('table.label')}>
      <table className="foma-table">
        <thead>
          <tr>
            {table.header.map((cell, column) => (
              <th key={column} scope="col" className="foma-th" style={cellStyle(column)}>{renderInline(cell)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, column) => (
                <td key={column} className="foma-td" style={cellStyle(column)}>{renderInline(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Inline-only rendering: no paragraphs or lists, so it is safe inside a <span>, <p> or <li>.
export function InlineText({ text }: { text?: string | null }) {
  if (!text) return null;
  return <>{text.split(/\r?\n/).map((line, index) => (
    <Fragment key={index}>{index > 0 && <br />}{renderInline(parseInline(line.trim()))}</Fragment>
  ))}</>;
}

export function RichText({ text, className, paragraphClassName, style }: { text?: string | null; className?: string; paragraphClassName?: string; style?: CSSProperties }) {
  if (!text) return null;
  return <div className={['rich-text', className].filter(Boolean).join(' ')} style={style}>
    {parseBlocks(text).map((block, index) => {
      switch (block.type) {
        case 'ul':
          return <ul key={index} className="my-2 list-disc space-y-1 pl-6 first:mt-0 last:mb-0">{block.items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}</ul>;
        case 'ol':
          return <ol key={index} className="my-2 list-decimal space-y-1 pl-6 first:mt-0 last:mb-0">{block.items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}</ol>;
        case 'p':
          return <p key={index} className={['my-2 first:mt-0 last:mb-0', paragraphClassName].filter(Boolean).join(' ')}>{renderInline(block.children)}</p>;
        case 'table':
          return <ContentTable key={index} table={block} />;
      }
    })}
  </div>;
}
