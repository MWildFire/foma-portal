import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 3.10',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'vector-magnitude-direction',
    term: { en: 'vector', ru: 'вектор (vector)' },
    def: {
      en: 'A quantity with both a magnitude (length) and a direction, written as a column of components or as a directed segment AB. A scalar has magnitude only.',
      ru: 'Величина, у которой есть и длина (модуль), и направление; записывается столбцом координат или как направленный отрезок AB. У скаляра есть только величина.',
    },
    syllabus: '3.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.4, p. 104' },
  },
  {
    id: 'position-vector-from-origin',
    term: { en: 'position vector', ru: 'радиус-вектор (position vector)' },
    def: {
      en: 'The vector $\\overrightarrow{OP}$ from the origin O to a point P. Its components are the coordinates of P.',
      ru: 'Вектор $\\overrightarrow{OP}$ от начала координат O до точки P. Его компоненты — координаты точки P.',
    },
    syllabus: '3.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.4, p. 106' },
  },
  {
    id: 'unit-vector-in-direction',
    term: { en: 'unit vector', ru: 'единичный вектор (unit vector)' },
    def: {
      en: 'A vector of magnitude 1. The unit vector in the direction of a non-zero vector $\\mathbf{v}$ is $\\mathbf{v}/|\\mathbf{v}|$; i, j and k are the unit vectors along the axes.',
      ru: 'Вектор длины 1. Единичный вектор в направлении ненулевого вектора $\\mathbf{v}$ равен $\\mathbf{v}/|\\mathbf{v}|$; i, j и k — единичные векторы вдоль осей.',
    },
    pitfall: {
      en: 'Dividing by one component, instead of by the magnitude, does not give a unit vector.',
      ru: 'Деление на одну из компонент, а не на длину, не даёт единичный вектор.',
    },
    syllabus: '3.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
