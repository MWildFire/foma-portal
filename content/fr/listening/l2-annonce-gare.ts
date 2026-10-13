import type { ListeningTrack } from '../types';

// Listening track 2 (theme T2, Experiences): a station announcement about train changes, a festival and instructions.
// Level B1, announcement, one speaker. Original script. The audio is generated later by scripts/fr-polly.sh.
export const track: ListeningTrack = {
  id: 'l2-annonce-gare',
  theme: 'T2',
  title: { en: 'Station announcement: train changes and a festival', ru: 'Объявление на вокзале: изменения в расписании и фестиваль' },
  level: 'B1',
  genre: 'announcement',
  turns: [
    { speaker: "L'annonceuse", voice: 'Gabrielle', fr: "Mesdames et messieurs, bonjour. Ici la gare de Saint-Aubert. Nous vous informons de plusieurs changements pour le trafic de ce samedi. Merci de bien écouter les informations suivantes." },
    { speaker: "L'annonceuse", voice: 'Gabrielle', fr: "Le train de neuf heures quatorze à destination de Rennes est supprimé. Les voyageurs qui devaient le prendre sont priés d'emprunter le train de neuf heures quarante. Celui-ci partira de la voie trois, et non de la voie une, comme indiqué sur les écrans." },
    { speaker: "L'annonceuse", voice: 'Gabrielle', fr: "Le train de dix heures cinq, à destination de Nantes, accuse un retard d'environ vingt minutes. Nous vous prions de nous excuser pour la gêne occasionnée. Les personnes qui ont un billet pour ce train peuvent se présenter au guichet numéro quatre pour échanger leur billet. Nous vous conseillons aussi de consulter les écrans, car les horaires peuvent encore changer." },
    { speaker: "L'annonceuse", voice: 'Gabrielle', fr: "Un rappel pour le festival de musique de Saint-Aubert. La navette gratuite part de la sortie est de la gare toutes les trente minutes. Le festival ouvre ses portes à dix-sept heures, et le dernier concert commence à vingt-trois heures. Vous pouvez aussi venir à pied : il faut environ quinze minutes." },
    { speaker: "L'annonceuse", voice: 'Gabrielle', fr: "Je vous rappelle que les bagages doivent rester sous votre surveillance. Il est interdit de traverser les voies, même si vous êtes pressés. Pour changer de quai, utilisez le passage souterrain, qui se trouve près du café." },
    { speaker: "L'annonceuse", voice: 'Gabrielle', fr: "Pour les personnes à mobilité réduite, un agent se tient à l'entrée principale, près du bureau d'accueil. Si vous avez perdu un objet, rendez-vous au bureau des objets trouvés, ouvert de sept heures à dix-neuf heures. Les enfants de moins de douze ans doivent être accompagnés par un adulte." },
    { speaker: "L'annonceuse", voice: 'Gabrielle', fr: "Merci de votre attention, et bonne journée à tous. À bientôt à Saint-Aubert !" },
  ],
  questionIds: ['l2-q01', 'l2-q02', 'l2-q03', 'l2-q04', 'l2-q05', 'l2-q06', 'l2-q07', 'l2-q08', 'l2-q09', 'l2-q10'],
  audio: '/audio/fr/l2-annonce-gare.mp3',
  source: { kind: 'own', title: "Authors' French B material (2026)" },
};
