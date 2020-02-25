#! /usr/bin/env node

import program from "commander";
import { interpret } from "./Interpreter";
const { version } = require("../package.json");

program
  .version(version)
  .arguments("<code>")
  .action(code => {
    const result = interpret(code);
    console.log(result.join("\n"));
  });

program.parse(process.argv);