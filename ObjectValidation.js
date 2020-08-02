class ObjectValidation {

    constructor() {
        this.validationResult
    }

    property(propertyName, alias) {
        return new PropertyValidation(this, propertyName, alias);
    }

    onlyFirstError() {
        this.onlyFirstError = true;
    }

    context(contextName, rules) {
        this.contextName = contextName;

        rules();
    }

    condition(condition, rules) {

    }

    validationSet(setName, ) {

    }

    newValidationResult() {

    }

    validate() {

    }
}

