// Scale of the vector panel in the vector lab (topics 3-12 and 3-13), kept apart from the component so that it can be tested.

export const PANEL = 220; // side of the square panel, in SVG pixels
export const RANGE = 6; // the panel shows at least -RANGE to RANGE on each axis, in vector units

// Largest coordinate, in vector units, that the panel has to show: at least RANGE, and more when a coordinate of
// a, b or a + b reaches further, so that no arrow leaves the frame.
export function panelReach(coordinates: number[]): number {
  return Math.max(RANGE, ...coordinates.map(Math.abs));
}

// Pixels per vector unit, leaving 12 pixels between the outermost arrow end and the panel edge.
export function pixelsPerUnit(reach: number): number {
  return (PANEL / 2 - 12) / reach;
}

// SVG coordinate of an arrow end at `value` along one axis. For the vertical axis pass -y, because SVG y grows downwards.
export function tipPixel(value: number, scale: number): number {
  return PANEL / 2 + value * scale;
}
