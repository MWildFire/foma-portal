// Argument of a complex number for the complex-plane lab (topics 1-12 and 1-13), kept apart from the component so that it can be tested.

// Principal argument of a + bi in radians, in the interval (-pi, pi] used in the textbook (chapter 8.4).
// Math.atan2 returns values in [-pi, pi], so the single value -pi is moved to pi.
export function principalArgument(re: number, im: number): number {
  const theta = Math.atan2(im, re);
  return theta <= -Math.PI ? theta + 2 * Math.PI : theta;
}

export const ARGAND_SIZE = 280;
export const ARGAND_SCALE = 15;
type Rect = { left: number; right: number; top: number; bottom: number };
type PointLabel = { text: string; x: number; y: number; anchor: 'start' | 'end'; rect: Rect };
const overlaps = (a: Rect, b: Rect) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

// Keep point names clear of both points, the axes' names and one another, including z = 0 and zw near Im.
// Widths reserve more space than these short labels need at the component's 13px font.
export function complexPointLabels(re: number, im: number): PointLabel[] {
  const centre = ARGAND_SIZE / 2;
  const point = (x: number, y: number) => ({ x: centre + x * ARGAND_SCALE, y: centre - y * ARGAND_SCALE });
  const z = point(re, im);
  const product = point(re - im, re + im);
  const names = re === 0 && im === 0 ? [{ ...z, text: 'z = zw', width: 42 }] : [{ ...z, text: 'z', width: 10 }, { ...product, text: 'zw', width: 22 }];
  const obstacles: Rect[] = [
    { left: centre + 4, right: centre + 25, top: 0, bottom: 18 },
    { left: ARGAND_SIZE - 21, right: ARGAND_SIZE, top: centre - 20, bottom: centre - 2 },
    ...[z, product].map(p => ({ left: p.x - 5, right: p.x + 5, top: p.y - 5, bottom: p.y + 5 })),
  ];
  const choices = names.map(p => [7, 20, 32].flatMap(gap => [-7, 18, -20, 30].flatMap(dy => (['start', 'end'] as const).map(anchor => {
    const x = p.x + (anchor === 'start' ? gap : -gap);
    const y = p.y + dy;
    const rect = { left: anchor === 'start' ? x : x - p.width, right: anchor === 'start' ? x + p.width : x, top: y - 14, bottom: y + 4 };
    return { text: p.text, x, y, anchor, rect };
  }))).filter(p => p.rect.left >= 3 && p.rect.right <= ARGAND_SIZE - 3 && p.rect.top >= 3 && p.rect.bottom <= ARGAND_SIZE - 3 && !obstacles.some(o => overlaps(p.rect, o))));
  for (const first of choices[0]) {
    if (choices.length === 1) return [first];
    const second = choices[1].find(p => !overlaps(first.rect, p.rect));
    if (second) return [first, second];
  }
  throw new Error('No clear Argand point-label placement');
}
