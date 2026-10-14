// Argument of a complex number for the complex-plane lab (topics 1-12 and 1-13), kept apart from the component so that it can be tested.

// Principal argument of a + bi in radians, in the interval (-pi, pi] used in the textbook (chapter 8.4).
// Math.atan2 returns values in [-pi, pi], so the single value -pi is moved to pi.
export function principalArgument(re: number, im: number): number {
  const theta = Math.atan2(im, re);
  return theta <= -Math.PI ? theta + 2 * Math.PI : theta;
}
