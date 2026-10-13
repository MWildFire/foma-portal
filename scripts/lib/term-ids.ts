import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

// The ids of the flashcard terms of every subject, read from the term files without running them. The planner needs
// these ids on its first screen (it skips progress for terms that no longer exist), but not the term texts, so the
// build reads them here and the subject packs keep the texts. The files are the ones that content/<s>/index.ts
// collects with the glob './**/terms/*.ts'; the validator checks that the two lists agree.

// True for a term file: a .ts file whose folder is called terms, at any depth below content/<s>/.
export function isTermFile(file: string): boolean {
  return file.endsWith('.ts') && path.basename(path.dirname(file)) === 'terms';
}

function termFilesIn(folder: string, found: string[] = []): string[] {
  for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
    const absolute = path.join(folder, entry.name);
    if (entry.isDirectory()) termFilesIn(absolute, found);
    else if (entry.isFile() && isTermFile(absolute)) found.push(absolute);
  }
  return found;
}

// The string ids of the objects in `export const terms = [ { id: '…' }, … ]`.
export function termIdsOfSource(file: string, text: string): string[] {
  const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
  const ids: string[] = [];
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      const list = declaration.initializer;
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== 'terms' || !list || !ts.isArrayLiteralExpression(list)) continue;
      for (const element of list.elements) {
        if (!ts.isObjectLiteralExpression(element)) continue;
        for (const property of element.properties) {
          if (ts.isPropertyAssignment(property) && ts.isIdentifier(property.name) && property.name.text === 'id' && ts.isStringLiteral(property.initializer)) {
            ids.push(property.initializer.text);
          }
        }
      }
    }
  }
  return ids;
}

// Subject folder name -> the term ids of its term files, in file order.
export function termIdsByFolder(contentDir: string): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const entry of fs.readdirSync(contentDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const folder = path.join(contentDir, entry.name);
    const ids: string[] = [];
    for (const file of termFilesIn(folder).sort()) {
      ids.push(...termIdsOfSource(file, fs.readFileSync(file, 'utf8')));
    }
    out[entry.name] = Array.from(new Set(ids));
  }
  return out;
}
