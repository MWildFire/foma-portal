import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import ts from 'typescript';
import vm from 'node:vm';

const source=readFileSync(new URL('../src/sims/cs/trace-table.tsx',import.meta.url),'utf8');
const literal=source.match(/const PROGRAMS: Program\[\] = ([\s\S]*?);\n\nconst norm/)[1];
const programs=JSON.parse(JSON.stringify(vm.runInNewContext(ts.transpile(`const data = ${literal}; data;`))));
const runner=`import ast, json, sys, io, contextlib
payload=json.load(sys.stdin)
rows=[]
ns={}
def capture(line, out=''):
    rows.append({'line':line, 'cells':[str(ns[v]) if v in ns else '' for v in payload['vars']], 'out':out})
def show(line, *values):
    capture(line, ' '.join(map(str, values)))
class Instrument(ast.NodeTransformer):
    def visit_Assign(self,node):
        return [node, ast.Expr(ast.Call(ast.Name('capture',ast.Load()),[ast.Constant(node.lineno)],[]))]
    def visit_For(self,node):
        self.generic_visit(node)
        node.body.insert(0,ast.Expr(ast.Call(ast.Name('capture',ast.Load()),[ast.Constant(node.lineno)],[])))
        return node
    def visit_Call(self,node):
        if isinstance(node.func,ast.Name) and node.func.id=='print':
            node.func.id='show'; node.args.insert(0,ast.Constant(node.lineno))
        return node
ns.update(capture=capture,show=show)
tree=ast.fix_missing_locations(Instrument().visit(ast.parse(payload['code'])))
exec(compile(tree,'<trace>','exec'),ns)
print(json.dumps(rows))
`;
for (const program of programs) {
  test(`Python -I produces every simulator row for ${program.id}`,()=>{
    const result=spawnSync('python3',['-I','-c',runner],{input:JSON.stringify({code:program.code.map(x=>x.en).join('\n'),vars:program.vars}),encoding:'utf8'});
    assert.equal(result.status,0,result.stderr);
    assert.deepEqual(JSON.parse(result.stdout),program.rows);
  });
}
for(const lang of ['en','ru'])test(`topic ${lang} tables reproduce all twelve Python-verified rows`,()=>{
  const body=readFileSync(new URL(`../content/cs/theme-b/topics/b2-3-programming-constructs.${lang}.mdx`,import.meta.url),'utf8');
  const rows=[...body.matchAll(/^\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*([^|]*)\|\s*([^|]*)\|\s*([^|]*)\|$/gm)].map(m=>({line:Number(m[2]),cells:[m[3].trim(),m[4].trim()],out:m[5].trim()}));
  assert.deepEqual(rows,programs.flatMap(p=>p.rows));
});
