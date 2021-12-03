import { AbstractArgument } from "./AbstractArgument.js";
import { ArgumentSelectionType } from "./consts.js";

export class ImportPatternArgument extends AbstractArgument {
  getName() {
    return "IMPORT_PATTERN";
  }

  getType() {
    return ArgumentSelectionType.input;
  }

  getChoices() {
    return [];
  }

  getMessage() {
    return "Please, provide the pattern of import of your design system";
  }
}
