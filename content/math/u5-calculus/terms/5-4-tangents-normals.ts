import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 5.4',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'tangent-to-curve',
    term: { en: 'tangent to a curve', ru: 'касательная (tangent)' },
    def: {
      en: 'The straight line that touches a curve at one given point and has the same gradient as the curve there, namely the derivative $f^{\\prime}(a)$ at that point.',
      ru: 'Прямая, которая касается кривой в данной точке и имеет в ней тот же угловой коэффициент, что и кривая, то есть производную $f^{\\prime}(a)$ в этой точке.',
    },
    syllabus: '5.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The tangent gradient is the derivative at the point, not the y-coordinate of the point.',
      ru: 'Угловой коэффициент касательной — это производная в точке, а не координата y этой точки.',
    },
  },
  {
    id: 'normal-to-curve',
    term: { en: 'normal to a curve', ru: 'нормаль (normal)' },
    def: {
      en: 'The straight line through a point on a curve that is perpendicular to the tangent to the curve at that point.',
      ru: 'Прямая, проходящая через точку кривой перпендикулярно касательной к кривой в этой точке.',
    },
    syllabus: '5.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient, not the negative of it.',
      ru: 'Нормаль перпендикулярна касательной, поэтому её угловой коэффициент — это отрицательная обратная величина к угловому коэффициенту касательной, а не просто противоположное число.',
    },
  },
  {
    id: 'gradient-of-normal',
    term: { en: 'gradient of the normal', ru: 'угловой коэффициент нормали (gradient of the normal)' },
    def: {
      en: 'If the tangent gradient at a point is $m$ and $m$ is not zero, the normal gradient is $-1/m$, because two perpendicular lines have gradients whose product is $-1$.',
      ru: 'Если угловой коэффициент касательной в точке равен $m$ и $m$ не равно нулю, то угловой коэффициент нормали равен $-1/m$, так как произведение угловых коэффициентов перпендикулярных прямых равно $-1$.',
    },
    syllabus: '5.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'When the tangent gradient is zero the normal is vertical, so it has no finite gradient.',
      ru: 'Если угловой коэффициент касательной равен нулю, нормаль вертикальна, и конечного углового коэффициента у неё нет.',
    },
  },
];
