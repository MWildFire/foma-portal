import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'theme-experiences',
  subject: 'fr',
  code: 'T2',
  title: { en: 'Theme 2: Experiences', ru: 'Тема 2: Опыт и впечатления (Experiences)' },
  papers: ['P1', 'P2'],
  order: 2,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can talk about trips, accommodation and transport, using the passé composé and the imparfait', ru: 'Могу рассказывать о поездках, жильё и транспорте, используя passé composé и imparfait' },
    { en: 'I can tell a travel anecdote in order: events in the passé composé, the background in the imparfait', ru: 'Могу рассказать историю о поездке по порядку: события в passé composé, фон в imparfait' },
    { en: 'I can make the past participle agree with être and with a direct object placed before avoir', ru: 'Могу согласовать причастие прошедшего времени с être и с прямым дополнением перед avoir' },
    { en: 'I can describe feelings and sensations with precise words, such as ému, avoir le mal du pays and avoir le trac', ru: 'Могу описывать чувства и ощущения точными словами: ému, avoir le mal du pays, avoir le trac' },
    { en: 'I can describe a cultural outing, such as a concert, a museum or a festival, and give my opinion on it', ru: 'Могу описать культурный выход, например концерт, музей или фестиваль, и высказать своё мнение' },
    { en: 'I can write about school exchanges and first experiences, and say how I have changed', ru: 'Могу написать о школьных обменах и первом опыте и рассказать, как я изменился' },
    { en: 'I can use passer un examen and réussir correctly, without mixing them up', ru: 'Могу правильно использовать passer un examen и réussir и не путать их' },
  ],
  termIds: [
    'v-school-003', 'v-school-004', 'v-school-005',
    'v-t2-001', 'v-t2-002', 'v-t2-003', 'v-t2-004', 'v-t2-005', 'v-t2-006', 'v-t2-007', 'v-t2-008', 'v-t2-009', 'v-t2-010',
    'v-t2-011', 'v-t2-012', 'v-t2-013', 'v-t2-014', 'v-t2-015', 'v-t2-016', 'v-t2-017', 'v-t2-018', 'v-t2-019', 'v-t2-020',
    'v-t2-021', 'v-t2-022', 'v-t2-023', 'v-t2-024', 'v-t2-025', 'v-t2-026', 'v-t2-027', 'v-t2-028', 'v-t2-029', 'v-t2-030',
    'v-t2-031', 'v-t2-032', 'v-t2-033', 'v-t2-034', 'v-t2-035', 'v-t2-036', 'v-t2-037', 'v-t2-038', 'v-t2-039', 'v-t2-040',
    'v-t2-041', 'v-t2-042', 'v-t2-043', 'v-t2-044', 'v-t2-045', 'v-t2-046', 'v-t2-047', 'v-t2-048', 'v-t2-049', 'v-t2-050',
    'v-t2-051', 'v-t2-052', 'v-t2-053', 'v-t2-054', 'v-t2-055', 'v-t2-056', 'v-t2-057', 'v-t2-058', 'v-t2-059', 'v-t2-060',
    'v-t2-061', 'v-t2-062', 'v-t2-063', 'v-t2-064', 'v-t2-065', 'v-t2-066', 'v-t2-067', 'v-t2-068', 'v-t2-069', 'v-t2-070',
    'v-t2-071', 'v-t2-072', 'v-t2-073', 'v-t2-074', 'v-t2-075', 'v-t2-076', 'v-t2-077', 'v-t2-078', 'v-t2-079', 'v-t2-080',
    'v-t2-081', 'v-t2-082', 'v-t2-083', 'v-t2-084', 'v-t2-085', 'v-t2-086', 'v-t2-087', 'v-t2-088', 'v-t2-089', 'v-t2-090',
  ],
  questionIds: ['t2-q1', 't2-q2'],
  sources: [
    { kind: 'ib-guide', title: 'IB Language B guide (2018)' },
    { kind: 'thinkib', title: 'ThinkIB, French B SL: Expériences (page 42627)', locator: 'Activités de loisirs; Vacances et voyages; Récits de vie; Rites de passage; Coutumes et traditions; Migration' },
  ],
};

export default topic;
