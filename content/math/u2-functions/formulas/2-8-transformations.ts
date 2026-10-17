import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'function-graph-general-form',
    tex: 'y=p\\,f\\bigl(q(x-a)\\bigr)+b',
    name: { en: 'General transformation of y = f(x)', ru: 'Общее преобразование графика y = f(x) (General transformation of y = f(x))' },
    meaning: {
      en: 'For q≠0: horizontal scale factor 1/|q|, with reflection in the y-axis if q<0, then translation by a; vertical scale factor |p|, with reflection in the x-axis if p<0, then translation by b. If p=0, the graph collapses to y=b on the transformed domain; multiplying by zero does not make undefined f inputs valid.',
      ru: 'При q≠0: горизонтальный масштаб 1/|q|, при q<0 также отражение относительно Oy, затем сдвиг на a; вертикальный масштаб |p|, при p<0 также отражение относительно Ox, затем сдвиг на b. При p=0 получается часть горизонтальной прямой y=b на преобразованной области определения; умножение на ноль не делает недопустимые аргументы f допустимыми.',
    },
    when: {
      en: 'Describing or sketching a graph obtained from y = f(x) by several transformations at once.',
      ru: 'Описание или построение графика, полученного из y = f(x) несколькими преобразованиями сразу.',
    },
    syllabus: '2.8',
    inBooklet: false,
    example: {
      en: 'For y = 2f(0.5(x + 1)) + 5 the parameters are p = 2, q = 0.5, a = -1 and b = 5.',
      ru: 'Для y = 2f(0,5(x + 1)) + 5 параметры равны p = 2, q = 0,5, a = -1 и b = 5.',
    },
  },
  {
    id: 'function-graph-image-rule',
    tex: '(x,\\,y)\\longmapsto\\left(a+\\dfrac{x}{q},\\;py+b\\right)',
    name: { en: 'Image of a point', ru: 'Образ точки (Image of a point)' },
    meaning: {
      en: 'For q≠0, a point (x, y) of y = f(x) moves to the point with x-coordinate a + x/q and y-coordinate py + b on y = p f(q(x - a)) + b.',
      ru: 'При q≠0 точка (x, y) графика y = f(x) переходит в точку с x-координатой a + x/q и y-координатой py + b на графике y = p f(q(x - a)) + b.',
    },
    when: {
      en: 'Finding where a named point goes under a combined transformation, or checking a transformed equation.',
      ru: 'Поиск образа названной точки при составном преобразовании или проверка уравнения преобразованного графика.',
    },
    syllabus: '2.8',
    inBooklet: false,
  },
  {
    id: 'function-graph-reflection-rules',
    tex: 'y=-f(x)\\quad\\text{and}\\quad y=f(-x)',
    name: { en: 'Reflections in the axes', ru: 'Отражения в осях (Reflections in the axes)' },
    meaning: {
      en: 'y = -f(x) reflects the graph in the x-axis; y = f(-x) reflects it in the y-axis.',
      ru: 'y = -f(x) отражает график в оси x; y = f(-x) отражает его в оси y.',
    },
    when: {
      en: 'A negative sign in front of f(x) or in front of x inside the bracket.',
      ru: 'Знак минус перед f(x) или перед x внутри скобки.',
    },
    syllabus: '2.8',
    inBooklet: false,
  },
];
