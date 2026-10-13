import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 3.2',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'sine-rule-triangle',
    term: { en: 'sine rule', ru: 'теорема синусов (sine rule)' },
    def: {
      en: 'In any triangle, the ratio of each side to the sine of its opposite angle is the same for all three sides.',
      ru: 'В любом треугольнике отношение каждой стороны к синусу противолежащего угла одинаково для всех трёх сторон.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Pair each side with the angle opposite it, not with a neighbouring angle.',
      ru: 'Сторону нужно сопоставлять с противолежащим углом, а не с соседним.',
    },
  },
  {
    id: 'cosine-rule-triangle',
    term: { en: 'cosine rule', ru: 'теорема косинусов (cosine rule)' },
    def: {
      en: 'In any triangle, the square of one side equals the sum of the squares of the other two sides minus twice their product times the cosine of the angle between them.',
      ru: 'В любом треугольнике квадрат одной стороны равен сумме квадратов двух других сторон минус удвоенное произведение этих сторон на косинус угла между ними.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The angle in the formula must be the one opposite the side on the left. Check the letters before you substitute.',
      ru: 'Угол в формуле должен быть противолежащим стороне слева. Проверьте буквы перед подстановкой.',
    },
  },
  {
    id: 'included-angle',
    term: { en: 'included angle', ru: 'угол между сторонами (included angle)' },
    def: {
      en: 'The angle enclosed by two given sides of a triangle. The area rule $\\frac{1}{2}ab\\sin C$ needs the included angle $C$ between sides $a$ and $b$.',
      ru: 'Угол, заключённый между двумя заданными сторонами треугольника. Формула площади $\\frac{1}{2}ab\\sin C$ требует именно угол $C$ между сторонами $a$ и $b$.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'soh-cah-toa',
    term: { en: 'SOH CAH TOA', ru: 'отношения синуса, косинуса и тангенса (SOH CAH TOA)' },
    def: {
      en: 'A memory aid for the three trigonometric ratios of a right-angled triangle: sine is opposite over hypotenuse, cosine is adjacent over hypotenuse and tangent is opposite over adjacent.',
      ru: 'Мнемоническое правило для трёх отношений прямоугольного треугольника: синус — противолежащий катет к гипотенузе, косинус — прилежащий катет к гипотенузе, тангенс — противолежащий катет к прилежащему.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The hypotenuse is always opposite the right angle. Label the sides relative to the angle you are using.',
      ru: 'Гипотенуза всегда лежит напротив прямого угла. Подписывайте катеты относительно того угла, который используете.',
    },
  },
];
