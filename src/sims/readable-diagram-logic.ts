// SVG labels shrink with the entire viewBox. Keep the smallest label at least 11 CSS px.
export const minimumDiagramWidth = (viewBoxWidth: number, smallestFont: number): number =>
  Math.ceil(viewBoxWidth * 11 / smallestFont);
