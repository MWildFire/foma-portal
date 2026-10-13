import type { SyllabusItem } from '../../../src/contract/types';

// Geography SL, Paper 2 (core): three units and their nine subtopics (Geography guide, first assessment 2017).
// The three `core-essay-N` codes and `core-paper-2` are exam technique (how the paper is examined), not programme codes.
export const syllabus: SyllabusItem[] = [
  { code: 'core-1.1', title: { en: 'Population and economic development patterns', ru: 'Закономерности населения и экономического развития' }, papers: ['P2'] },
  { code: 'core-1.2', title: { en: 'Changing populations and places', ru: 'Изменение населения и мест' }, papers: ['P2'] },
  { code: 'core-1.3', title: { en: 'Challenges and opportunities', ru: 'Вызовы и возможности' }, papers: ['P2'] },
  { code: 'core-essay-1', title: { en: 'Section C essays: Unit 1, changing population', ru: 'Эссе Section C: юнит 1, изменение населения' }, papers: ['P2'] },
  { code: 'core-2.1', title: { en: 'Causes of global climate change', ru: 'Причины глобального изменения климата' }, papers: ['P2'] },
  { code: 'core-2.2', title: { en: 'Consequences of global climate change', ru: 'Последствия глобального изменения климата' }, papers: ['P2'] },
  { code: 'core-2.3', title: { en: 'Responding to global climate change', ru: 'Реагирование на глобальное изменение климата' }, papers: ['P2'] },
  { code: 'core-essay-2', title: { en: 'Section C essays: Unit 2, climate change', ru: 'Эссе Section C: юнит 2, изменение климата' }, papers: ['P2'] },
  { code: 'core-3.1', title: { en: 'Global trends in consumption', ru: 'Глобальные тенденции потребления' }, papers: ['P2'] },
  { code: 'core-3.2', title: { en: 'Impacts of changing trends in resource consumption', ru: 'Последствия меняющихся тенденций потребления ресурсов' }, papers: ['P2'] },
  { code: 'core-3.3', title: { en: 'Resource stewardship', ru: 'Бережное управление ресурсами (resource stewardship)' }, papers: ['P2'] },
  { code: 'core-essay-3', title: { en: 'Section C essays: Unit 3, resource consumption', ru: 'Эссе Section C: юнит 3, потребление ресурсов' }, papers: ['P2'] },
  { code: 'core-paper-2', title: { en: 'What Paper 2 asks and how it is marked (exam technique)', ru: 'Что спрашивают на Paper 2 и как это оценивают (техника экзамена)' }, papers: ['P2'] },
];
