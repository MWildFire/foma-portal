import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p1-connectors',
  subject: 'fr',
  code: 'P1.connectors',
  title: { en: 'Writing (P1): connectors and fixed phrases', ru: 'Письмо (P1): связки (connectors) и устойчивые обороты' },
  papers: ['P1'],
  order: 7,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the nine functions of connectors and use each one correctly', ru: 'Могу назвать девять функций связок и правильно использовать каждую' },
    { en: 'I can avoid repeating the same connector in a text', ru: 'Могу не повторять одну и ту же связку в тексте' },
    { en: 'I can place a connector in a sentence with the right punctuation and mood', ru: 'Могу поставить связку в предложении с правильной пунктуацией и наклонением' },
    { en: "I can use « certes… mais », « non seulement… mais aussi » and « d'une part… d'autre part » correctly", ru: "Могу правильно использовать « certes… mais », « non seulement… mais aussi » и « d'une part… d'autre part »" },
  ],
  termIds: [
    'cn-001', 'cn-002', 'cn-003', 'cn-004', 'cn-005', 'cn-006', 'cn-007', 'cn-008', 'cn-009', 'cn-010',
    'cn-011', 'cn-012', 'cn-013', 'cn-014', 'cn-015', 'cn-016', 'cn-017', 'cn-018', 'cn-019', 'cn-020',
    'cn-021', 'cn-022', 'cn-023', 'cn-024', 'cn-025', 'cn-026', 'cn-027', 'cn-028', 'cn-029', 'cn-030',
    'cn-031', 'cn-032', 'cn-033', 'cn-034', 'cn-035', 'cn-036', 'cn-037', 'cn-038', 'cn-039', 'cn-040',
    'cn-041', 'cn-042', 'cn-043', 'cn-044', 'cn-045', 'cn-046', 'cn-047', 'cn-048', 'cn-049', 'cn-050',
    'cn-051', 'cn-052', 'cn-053', 'cn-054', 'cn-055', 'cn-056', 'cn-057', 'cn-058', 'cn-059', 'cn-060',
  ],
  questionIds: ['p1-connectors-q1', 'p1-connectors-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
