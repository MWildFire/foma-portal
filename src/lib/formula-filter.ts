export type FormulaFilter = 'all' | 'booklet' | 'outside';
export function filterFormulas<T extends {inBooklet?:boolean}>(formulas: readonly T[], mode: FormulaFilter): T[] {
 return formulas.filter(f=>mode==='all' || (mode==='booklet' ? f.inBooklet===true : f.inBooklet===false));
}
