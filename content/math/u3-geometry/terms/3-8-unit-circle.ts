import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 3.8',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'unit-circle',
    term: { en: 'unit circle', ru: 'единичная окружность (unit circle)' },
    def: {
      en: 'The circle of radius 1 centred at the origin. The ray at angle $\\theta$ from the positive $x$-axis meets it at the point $(\\cos\\theta, \\sin\\theta)$.',
      ru: 'Окружность радиуса 1 с центром в начале координат. Луч под углом $\\theta$ от положительной полуоси $x$ пересекает её в точке $(\\cos\\theta, \\sin\\theta)$.',
    },
    syllabus: '3.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.2, p. 343' },
    pitfall: {
      en: 'Angles are measured anticlockwise from the positive $x$-axis, so a negative angle is measured clockwise.',
      ru: 'Углы отсчитываются против часовой стрелки от положительной полуоси $x$; отрицательный угол откладывается по часовой стрелке.',
    },
    sim: 'math.unit-circle-lab',
  },
  {
    id: 'quadrant-sign-rule',
    term: { en: 'signs of sin, cos and tan by quadrant', ru: 'знаки sin, cos и tan по четвертям (signs of sin, cos and tan by quadrant)' },
    def: {
      en: 'In quadrant I all three ratios are positive. In quadrant II only sine is positive, in III only tangent, and in IV only cosine (remember All Students Take Calculus).',
      ru: 'В первой четверти положительны все три величины. Во второй положителен только синус, в третьей только тангенс, в четвёртой только косинус (мнемоника All Students Take Calculus).',
    },
    syllabus: '3.8',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'ambiguous-case-sine-rule',
    term: { en: 'ambiguous case of the sine rule', ru: 'неоднозначный случай теоремы синусов (ambiguous case of the sine rule)' },
    def: {
      en: 'Two sides and a non-included angle are given. If the angle being sought sits across from the longer of the two given sides, two triangles can be formed, and their two candidate angles add up to $180^\\circ$.',
      ru: 'Даны две стороны и угол, не заключённый между ними. Если искомый угол лежит напротив большей из двух данных сторон, можно построить два треугольника, а два возможных значения этого угла в сумме дают $180^\\circ$.',
    },
    syllabus: '3.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.2, p. 21' },
    pitfall: {
      en: 'Test both angles: the second triangle exists only if the angle sum is less than $180^\\circ$.',
      ru: 'Проверяйте оба угла: второй треугольник существует, только если сумма углов меньше $180^\\circ$.',
    },
  },
];
