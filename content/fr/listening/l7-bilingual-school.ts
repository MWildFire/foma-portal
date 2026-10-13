import type { ListeningTrack } from '../types';

// L7 (theme T1, Identities): a teenager explains to an aunt why they want a bilingual school life; the aunt
// disagrees, respectfully. Level B2.
export const track: ListeningTrack = {
  id: 'l7-bilingual-school',
  theme: 'T1',
  title: { en: 'A bilingual school: a talk with my aunt', ru: 'Двуязычная школа: разговор с тётей' },
  level: 'B2',
  genre: 'dialogue',
  turns: [
    { speaker: 'Gabrielle', voice: 'Gabrielle', fr: "Alors, raconte-moi ! Ta mère m'a dit que tu voulais t'inscrire dans une école bilingue. Tu es sûre de ton choix ?" },
    { speaker: 'Léa', voice: 'Lea', fr: "Oui, je suis sûre. Enfin, presque. Ce qui me plaît, c'est l'idée de parler français et anglais toute la journée, pas seulement pendant les cours de langues." },
    { speaker: 'Gabrielle', voice: 'Gabrielle', fr: "Ça me paraît intéressant. Concrètement, ça veut dire quoi, une vie scolaire bilingue ?" },
    { speaker: 'Léa', voice: 'Lea', fr: "Ça veut dire que les cours d'histoire se font en anglais, mais que les clubs, les sorties et les discussions avec les profs se font dans les deux langues. On passe d'une langue à l'autre sans y penser. C'est ça qui me plaît." },
    { speaker: 'Gabrielle', voice: 'Gabrielle', fr: "Je comprends. Mais je t'avoue que ça m'inquiète un peu. Quand on change de langue toute la journée, on risque de ne bien maîtriser ni l'une ni l'autre, non ?" },
    { speaker: 'Léa', voice: 'Lea', fr: "Je ne crois pas. Mes amis qui sont déjà dans cette école parlent mieux le français qu'avant. Et ils ne se sentent pas moins français pour autant." },
    { speaker: 'Gabrielle', voice: 'Gabrielle', fr: "Ça, c'est une bonne nouvelle. Mais pour moi, la langue, c'est aussi la culture, les expressions, les souvenirs de famille. Ce serait dommage de les mettre de côté." },
    { speaker: 'Léa', voice: 'Lea', fr: "Mais je ne les mets pas de côté ! Au contraire, on peut être fier de sa langue et s'ouvrir à une autre. Mon identité n'est pas figée, elle se construit." },
    { speaker: 'Gabrielle', voice: 'Gabrielle', fr: "Tu as sans doute raison. Je ne veux pas t'empêcher de tenter l'expérience. Je veux seulement que tu gardes le lien avec tes grands-parents, qui parlent surtout français." },
    { speaker: 'Léa', voice: 'Lea', fr: "Ça, je ne l'oublierai jamais. Justement, je veux pouvoir leur parler plus facilement de mes projets. Et un jour, j'aimerais peut-être étudier au Québec." },
    { speaker: 'Gabrielle', voice: 'Gabrielle', fr: "Bon, je vois que tu as bien réfléchi. Je ne suis pas d'accord sur tout, mais je respecte ton choix." },
    { speaker: 'Léa', voice: 'Lea', fr: "Merci, tatie. On pourra en reparler pendant les vacances, quand je serai à la maison ?" },
    { speaker: 'Gabrielle', voice: 'Gabrielle', fr: "Bien sûr. Mais promets-moi une chose : continue à lire en français. Un roman par mois, ça suffit." },
    { speaker: 'Léa', voice: 'Lea', fr: "Marché conclu !" },
  ],
  questionIds: ['l7-q01', 'l7-q02', 'l7-q03', 'l7-q04', 'l7-q05', 'l7-q06', 'l7-q07', 'l7-q08', 'l7-q09', 'l7-q10'],
  audio: '/audio/fr/l7-bilingual-school.mp3',
  source: { kind: 'own', title: "Authors' French B material (2026)" },
};
