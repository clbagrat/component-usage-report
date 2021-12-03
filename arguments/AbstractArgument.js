export class AbstractArgument {
  getName() {
    throw new Error('getName method is not specified');
  }

  getDefaultValue() {
    throw new Error('getDefaultValue method is not specified');
  }

  getType() {
    throw new Error('getType method is not specified');
  }

  getChoices() {
    throw new Error('getChoices method is not specified');
  }

  getMessage() {
    throw new Error('getMessage method in not specified');
  }
}
