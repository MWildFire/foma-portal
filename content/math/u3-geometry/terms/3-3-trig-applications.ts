import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'angle-of-elevation',
    term: { en: 'angle of elevation', ru: 'угол возвышения (angle of elevation)' },
    def: {
      en: 'The angle measured upwards from the horizontal to the line of sight, when the object being viewed is above the observer.',
      ru: 'Угол, отсчитываемый вверх от горизонтали до линии визирования, когда наблюдаемый объект находится выше наблюдателя.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.2, p. 14' },
    pitfall: {
      en: 'Measure from the horizontal through the observer, not from the vertical.',
      ru: 'Отсчитывайте угол от горизонтали через наблюдателя, а не от вертикали.',
    },
  },
  {
    id: 'angle-of-depression',
    term: { en: 'angle of depression', ru: 'угол понижения (angle of depression)' },
    def: {
      en: 'The angle measured downwards from the horizontal to the line of sight, when the object being viewed is below the observer.',
      ru: 'Угол, отсчитываемый вниз от горизонтали до линии визирования, когда наблюдаемый объект находится ниже наблюдателя.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.2, p. 15' },
    pitfall: {
      en: 'When the horizontal lines are parallel, the angle of depression equals the angle of elevation seen from the object (alternate angles).',
      ru: 'Если горизонтальные линии параллельны, угол понижения равен углу возвышения, видимому из наблюдаемого объекта (накрест лежащие углы).',
    },
  },
  {
    id: 'line-of-sight',
    term: { en: 'line of sight', ru: 'линия визирования (line of sight)' },
    def: {
      en: 'The straight line from the eye of the observer to the object being observed.',
      ru: 'Прямая линия от глаза наблюдателя до наблюдаемого объекта.',
    },
    syllabus: '3.3',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.2, p. 14' },
  },
];
