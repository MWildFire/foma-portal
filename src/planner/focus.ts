// Describe the work actually scheduled, including changes caused by load and carried work.
import type { L, SubjectId } from '../contract/types.ts';
import type { PlanBlock } from './types.ts';
const names: Record<SubjectId,L>={geo:{en:'Geography',ru:'География'},math:{en:'Maths',ru:'Математика'},econ:{en:'Economics',ru:'Экономика'},cs:{en:'Computer science',ru:'Информатика'},eng:{en:'English',ru:'Английский'},fr:{en:'French',ru:'Французский'}};
export function focusForBlocks(blocks: PlanBlock[]): L | null {
 const work=blocks.filter(b=>b.subject && b.kind!=='recall');
 if(!work.length)return null;
 const describe=(lang:'en'|'ru')=>[...new Set(work.map(b=> b.kind==='timed' && b.title ? b.title[lang] : names[b.subject!][lang]))].join('; ');
 return {en:describe('en'),ru:describe('ru')};
}
