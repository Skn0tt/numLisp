import { RuntimeFunction, RuntimeGlobals } from "./Runtime";
import * as _ from "lodash";

const plus: RuntimeFunction = ([ a, b ]) => (+a) + (+b);
const minus: RuntimeFunction = ([ a, b ]) => (+a) - (+b);
const multiply: RuntimeFunction = ([ a, b ]) => (+a) * (+b);
const divide: RuntimeFunction = ([ a, b ]) => (+a) / (+b);
const list: RuntimeFunction = args => args.map(Number);
const car: RuntimeFunction = ([ lst ]) => _.head(lst);
const cdr: RuntimeFunction = ([ lst ]) => _.tail(lst);
const cons: RuntimeFunction = ([ head, tail ]) => [ +head, ...tail ];

export const defaultGlobals: RuntimeGlobals = {
  plus,
  minus,
  multiply,
  divide,
  list,
  car,
  cdr,
  cons,
  "+": plus,
  "-": minus,
  "*": multiply,
  "/": divide,
}