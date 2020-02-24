import * as _ from "lodash";
import { interpret } from "./Interpreter";

const code = _.last(process.argv);

if (!code) {
  process.exit(1);
}

const result = interpret(code);

console.log(result.join("\n"));