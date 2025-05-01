import { Plugin } from "rollup";
import { parse, FunctionDeclaration, Options } from "acorn";
import { generate } from "escodegen";

const scrambleFunction = (code: string) => {
    const ast = parse(code, astConfig);

    const nofn = ast.body.filter(e=>e.type !== "FunctionDeclaration");
    const funcs = ast.body
        .filter(e=>e.type === "FunctionDeclaration")
        .map<[FunctionDeclaration, number]>(e=>[e,
            Math.round(Math.random() * (nofn.length - 1))
        ]);
    
    ast.body = nofn.map((e,i)=>[e, ...funcs.filter(e=>e[1]==i).map(e=>e[0])]).flat();

    return generate(ast);
}

const astConfig: Options = { sourceType: "module", ecmaVersion: "latest" };

const compact_obfuscator_plugin: Plugin = {
    name: "rollup-plugin-compact-obfuscator",
    transform(code, id){
        if(id.endsWith(".vue") || id.endsWith(".js") || id.endsWith(".ts")){
            const ast = parse(code, astConfig);
            return generate(ast);
        }
    },
    renderChunk(code, ){
        return scrambleFunction(code);
    }
}

export default compact_obfuscator_plugin;
