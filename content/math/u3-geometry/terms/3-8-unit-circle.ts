import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.2, pp. 344–345: coordinates, signs and periodic identities' },
  },
  {
    id: 'ambiguous-case-sine-rule',
    term: { en: 'ambiguous case of the sine rule', ru: 'неоднозначный случай теоремы синусов (ambiguous case of the sine rule)' },
    def: {
      en: 'Given sides a,b and angle A opposite a, the sine rule gives sin B=b sin A/a. Test arcsin and its supplement. For acute A, exactly two triangles occur when b sin A<a<b; other data can give zero or one. Reject nonpositive remaining angles.',
      ru: 'Для сторон a,b и угла A напротив a теорема синусов даёт sin B=b sin A/a. Проверьте арксинус и дополнение до180°. При остром A ровно два треугольника получаются, если b sin A<a<b; другие данные могут дать ноль или один. Исключайте неположительные оставшиеся углы.',
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
