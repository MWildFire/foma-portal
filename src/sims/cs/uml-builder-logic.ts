// Box layout and relation end points for the UML builder (pure, no JSX). Checked by tests/cs-diagram-uml.test.mjs.
export type Box = { x: number; y: number; w: number; h: number };

export const BOX_W = 230;
export const HEAD = 28; // class-name compartment height
export const LINE = 16; // one member line
export const MARGIN = 20;
export const GAP = 60; // horizontal gap between the two columns
export const ROW_GAP = 40; // vertical gap between rows of boxes
export const WIDE_W = 2 * MARGIN + 2 * BOX_W + GAP; // 560 SVG units: two columns
export const NARROW_W = 2 * MARGIN + BOX_W; // 270 SVG units: one column, for narrow screens

export const comp = (n: number) => 12 + Math.max(1, n) * LINE;

// Boxes in rows of `columns` boxes (1 or 2). The height of a row is that of its tallest box.
export function layoutBoxes(sizes: { attrs: number; methods: number }[], columns: 1 | 2): Box[] {
  const heights = sizes.map((c) => HEAD + comp(c.attrs) + comp(c.methods));
  const rowTop: number[] = [];
  let y = MARGIN;
  for (let r = 0; r * columns < sizes.length; r++) {
    rowTop[r] = y;
    y += Math.max(...heights.slice(r * columns, r * columns + columns)) + ROW_GAP;
  }
  return sizes.map((_, i) => ({
    x: MARGIN + (i % columns) * (BOX_W + GAP),
    y: rowTop[Math.floor(i / columns)],
    w: BOX_W,
    h: heights[i],
  }));
}

// Point where the line from the box centre towards (tx, ty) leaves the box.
export function edge(b: Box, tx: number, ty: number): [number, number] {
  const dx = tx - (b.x + b.w / 2);
  const dy = ty - (b.y + b.h / 2);
  const s = Math.min(dx === 0 ? Infinity : b.w / 2 / Math.abs(dx), dy === 0 ? Infinity : b.h / 2 / Math.abs(dy));
  return [b.x + b.w / 2 + dx * s, b.y + b.h / 2 + dy * s];
}
