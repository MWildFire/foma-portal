import type { ListeningTrack } from '../types';

// L8 (theme T4, Social organization): a town hall message about a new rule for waste collection and a public
// meeting. Level B2. Remi speaks for the town hall; Lea is the head of the environment department.
export const track: ListeningTrack = {
  id: 'l8-waste-collection',
  theme: 'T4',
  title: { en: 'Town hall message: new waste collection rules', ru: 'Сообщение мэрии: новые правила вывоза мусора' },
  level: 'B2',
  genre: 'announcement',
  turns: [
    { speaker: 'Le message de la mairie', voice: 'Remi', fr: "Bonjour à toutes et à tous. Ici la mairie. Vous êtes nombreux à nous poser la question, alors voici les détails d'un changement important concernant la collecte des déchets." },
    { speaker: 'Le message de la mairie', voice: 'Remi', fr: "À partir du premier décembre, la collecte des ordures ménagères aura lieu le mercredi matin, et non plus le lundi." },
    { speaker: 'La responsable du service environnement', voice: 'Lea', fr: "Concrètement, les bacs doivent être sortis la veille au soir, à partir de vingt heures, et rentrés le jour même, après le passage du camion." },
    { speaker: 'Le message de la mairie', voice: 'Remi', fr: "Le bac jaune, lui, ne change pas. Il continue d'être collecté une fois par semaine, le jeudi matin. Quant au verre, il sera ramassé une fois par mois, le dernier mardi du mois." },
    { speaker: 'La responsable du service environnement', voice: 'Lea', fr: "Pour les immeubles, chaque habitant doit déposer ses sacs dans les conteneurs prévus, et jamais sur le trottoir. C'est une question de propreté pour tout le quartier." },
    { speaker: 'Le message de la mairie', voice: 'Remi', fr: "Nous savons que ce changement peut surprendre. C'est pourquoi nous organisons une réunion publique, le mardi 17 novembre, à dix-huit heures trente, à la salle des fêtes." },
    { speaker: 'La responsable du service environnement', voice: 'Lea', fr: "Lors de cette réunion, les habitants pourront poser leurs questions. On présentera aussi les chiffres du tri des derniers mois : la commune a réduit de près d'un tiers la quantité d'ordures ménagères." },
    { speaker: 'Le message de la mairie', voice: 'Remi', fr: "Pour participer, il n'est pas nécessaire de vous inscrire. L'entrée est libre pour tout le monde." },
    { speaker: 'La responsable du service environnement', voice: 'Lea', fr: "Et si vous ne pouvez pas venir, vous pouvez envoyer vos questions par courriel au service environnement, avant le dix novembre." },
    { speaker: 'Le message de la mairie', voice: 'Remi', fr: "Merci de votre attention et de votre patience. Ensemble, on peut encore faire baisser la quantité de déchets. Le tri, c'est l'affaire de tous, et chacun peut y contribuer. Bonne journée à toutes et à tous." },
  ],
  questionIds: ['l8-q01', 'l8-q02', 'l8-q03', 'l8-q04', 'l8-q05', 'l8-q06', 'l8-q07', 'l8-q08', 'l8-q09', 'l8-q10'],
  audio: '/audio/fr/l8-waste-collection.mp3',
  source: { kind: 'own', title: "Authors' French B material (2026)" },
};
