import { AbstractArgument } from "./AbstractArgument.js";
import { ArgumentSelectionType } from "./consts.js";

const possibleValues = {
  html: "html",
};

export class OutputArgument extends AbstractArgument {
  getName() {
    return "OUTPUT";
  }

  getDefaultValue() {
    return possibleValues.html;
  }

  getType() {
    return ArgumentSelectionType.list;
  }

  getChoices() {
    return Object.keys(possibleValues);
  }

  getMessage() {
    return "Please, select output method.";
  }
}
