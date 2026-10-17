// Geometry of the unit-circle lab (topics 3-7 and 3-8), kept apart from the component so that it can be tested.

export const SIZE = 300; // side of the square frame, in SVG pixels
export const CENTRE = 150; // centre of the frame and of the circle
export const RADIUS = 110; // pixels for one unit

// tan θ = sin θ / cos θ. Where cos θ is zero to floating-point precision (tolerance 1e-12) tan is undefined and the value is null.
export function tangentOf(theta: number): number | null {
  const cos = Math.cos(theta);
  return Math.abs(cos) < 1e-12 ? null : Math.sin(theta) / cos;
}

// The tangent line runs from the centre to the point (1, tan θ). If that point lies outside the frame, the line stops
// on the top or bottom edge, still on the same line through the centre, and `cut` is true.
export function tangentSegment(tan: number): { x: number; y: number; cut: boolean } {
  const endY = CENTRE - RADIUS * tan;
  if (endY >= 0 && endY <= SIZE) return { x: CENTRE + RADIUS, y: endY, cut: false };
  const edge = endY < 0 ? 0 : SIZE;
  const s = (edge - CENTRE) / (endY - CENTRE); // fraction of the way from the centre to the true end point
  return { x: CENTRE + s * RADIUS, y: edge, cut: true };
}
