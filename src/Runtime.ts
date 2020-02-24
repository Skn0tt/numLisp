import { AST } from "./ASTGenerator";
import { defaultGlobals } from "./Globals";

export type RuntimeGlobals = Record<string, any>;
export type RuntimeFunction = (args: any[], globals: RuntimeGlobals) => any;

/**
 * 
 * @param ast 
 * @param globals is mutated!
 */
export function execute(ast: AST, globals = defaultGlobals): any {
  const [ funcRef, ...args ] = ast;
  const func: RuntimeFunction = typeof funcRef === "string" ? globals[funcRef] : execute(funcRef, globals);
  const argsToPass = args.map(a => typeof a === "string" ? a : execute(a, globals));
  const result = func(argsToPass, globals);
  return result;
}