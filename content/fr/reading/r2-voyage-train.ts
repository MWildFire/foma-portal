import type { ReadingPassage } from '../types';

// Reading passage R2 (theme T2, Experiences, level B2): a travel blog post about a long train journey from Paris to
// Sofia, with a delay, a missed connection and a surprise on the train. Original text, five paragraphs (A to E).
// Questions: r2-q01 to r2-q10.
export const passage: ReadingPassage = {
  id: 'r2-voyage-train',
  theme: 'T2',
  title: { en: 'Two and a half days by train', ru: 'Двое с половиной суток в поезде' },
  level: 'B2',
  paragraphs: [
    "Quand j'ai annoncé à mes amis que j'irais à Sofia en train, ils m'ont prise pour une folle. Le billet d'avion coûtait moins cher, mais je voulais voir plusieurs pays sans passer par un aéroport. Le départ était prévu à sept heures du matin, le 12 octobre, depuis la gare de l'Est, à Paris.",
    "Le premier incident a eu lieu à Munich : une panne de signalisation a retardé le train de trois heures. J'ai donc raté la correspondance pour Vienne, et j'ai dû passer la nuit dans la gare, sur un banc trop court pour dormir. Pourtant, j'ai fini par trouver un café ouvert, et le serveur m'a offert un chocolat chaud.",
    "C'est dans le train de Vienne à Budapest que j'ai vécu la rencontre la plus inattendue. Un vieux monsieur hongrois, qui jouait du violon dans son wagon, m'a proposé de partager son repas. Bien que nous ne parlions pas la même langue, nous nous sommes compris grâce à la musique et à quelques mots d'allemand. Il m'a même appris un air traditionnel, que je fredonne encore aujourd'hui.",
    "Entre Budapest et la frontière serbe, le paysage a changé : les plaines ont laissé la place à de grandes forêts, puis à des montagnes couvertes de brume. Le contrôle des passeports a duré presque deux heures, ce qui m'a fait rater le dîner. Heureusement, en regardant la vallée depuis la fenêtre, j'ai compris que cette attente valait la peine.",
    "Quand je suis enfin arrivée à Sofia, le lendemain soir, je n'avais qu'une envie : dormir. Malgré tout, je ne regrette rien. Si vous hésitez à prendre le train pour un long voyage, je vous conseille d'accepter les retards, car ce sont souvent eux qui rendent le voyage inoubliable.",
  ],
  questionIds: ['r2-q01', 'r2-q02', 'r2-q03', 'r2-q04', 'r2-q05', 'r2-q06', 'r2-q07', 'r2-q08', 'r2-q09', 'r2-q10'],
  source: { kind: 'own', title: "Authors' French B material (2026)" },
};
