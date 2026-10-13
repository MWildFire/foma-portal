import type { CaseStudy } from '../../../src/contract/types';

// 'geo' is the only type-valid subject for a case study here. The _example folder is never shown in navigation.
export const cases: CaseStudy[] = [
  {
    id: 'example-case',
    subject: 'geo',
    title: { en: 'Example case (placeholder figures)', ru: 'Пример кейса (условные цифры)' },
    place: 'Dubai, UAE',
    scale: 'local',
    years: '2024',
    lat: 25.2048,
    lng: 55.2708,
    facts: {
      en: 'Placeholder for a real case: name the place, the year and the source for every figure.',
      ru: 'Заготовка для реального кейса: укажите место, год и источник каждой цифры.',
    },
    usedFor: ['example-topic'],
    src: [{ kind: 'own', title: 'Placeholder, no real data' }],
  },
];
