import type { SubjectId } from '../../contract/types';
import { listSubjects } from '../../content/registry';
import { ROUTES } from '../../config/routes';
import { pickText } from '../../lib/text';

// Accent for the thin bar beside a subject. The name is always written out, so colour is never the only signal.
const ACCENTS: Record<string, string> = {
  teal: '#0f766e',
  indigo: '#4f46e5',
  amber: '#b45309',
  violet: '#7c3aed',
  rose: '#be123c',
  sky: '#0369a1',
};

export interface SubjectInfo {
  id: SubjectId;
  name: string;
  level: string;
  accent: string;
  route: string;
}

// Subjects from the packs, named in the UI language. Unknown ids still get a readable fallback.
export function subjectInfos(lang: string): Map<SubjectId, SubjectInfo> {
  const infos = new Map<SubjectId, SubjectInfo>();
  for (const pack of listSubjects()) {
    infos.set(pack.meta.id, {
      id: pack.meta.id,
      name: pickText(pack.meta.title, lang),
      level: pack.meta.level,
      accent: ACCENTS[pack.meta.color] ?? '#64748b',
      route: ROUTES.subject(pack.meta.id),
    });
  }
  return infos;
}

export function subjectInfo(infos: Map<SubjectId, SubjectInfo>, id: SubjectId): SubjectInfo {
  return infos.get(id) ?? { id, name: id.toUpperCase(), level: '', accent: '#64748b', route: ROUTES.subject(id) };
}
