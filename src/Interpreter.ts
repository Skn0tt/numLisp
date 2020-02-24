import { tokenize } from "./Tokenizer";
import { generateASTs } from "./ASTGenerator";
import { execute } from "./Runtime";

export function interpret(program: string): any[] {
  const tokens = tokenize(program);
  const asts = generateASTs(tokens);
  const results = asts.map(ast => execute(ast));
  return results;
}