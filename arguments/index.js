import argsParser from "args-parser";
import inqurer from 'inquirer';

const args = argsParser(process.argv);
const env = process.env;

import { OutputArgument } from "./OutputArgument.js";
import { TargetPathArgument } from "./TargetPathArgument.js";
import { ImportPatternArgument } from "./ImportPatternArgument.js";


const expectedArgs = [
  new OutputArgument(),
  new TargetPathArgument(),
  new ImportPatternArgument()
];

const getDefault = (name) => {
  return args[name] || env[name];
}

export const argumentsPromise = inqurer.prompt(
  expectedArgs.map(arg => {
    return {
      name: arg.getName(),
      type: arg.getType(),
      message: arg.getMessage(),
      choices: arg.getChoices(),
      when: () => {
        return !getDefault(arg.getName())
      }
    } 
  })
).then(answers => {
  return expectedArgs.reduce((acc, arg) => {
    const name = arg.getName();
    acc[name] = getDefault(name) || answers[name];
    return acc
  }, {});
})
