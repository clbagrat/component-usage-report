import { AbstractArgument } from "./AbstractArgument.js";
import { ArgumentSelectionType } from "./consts.js";

export class TargetPathArgument extends AbstractArgument {
  getName() {
    return "TARGET_PATH";
  }

  getType() {
    return ArgumentSelectionType.input;
  }

  getChoices() {
    return [];
  }

  getMessage() {
    return "Please, provide target path to the source of project consumer";
  }
}
