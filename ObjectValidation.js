class ObjectValidation {
    constructor() {
        this._contextName = '';
        this._condition = () => true;

        this._onlyFirstError = false;

        this._propertyValidations = [];

        this._validationResult = {
            isValid = true,
            failures = []
        };
    }

    onlyFirstError() {
        this._onlyFirstError = true;
    }

    property(propertyName, alias) {
        let propertyValidation = new PropertyValidation(this._validationResult, propertyName, alias, this._contextName, this._condition)
        this.propertyValidations.push(propertyValidation)
        return propertyValidation;
    }

    context(contextName, rules) {
        this._contextName = contextName;
        rules();
        this._contextName = '';
    }

    condition(condition, rules) {
        let previousCondition = this._condition;
        this._condition = previousCondition && condition;
        rules();
        this._condition = previousCondition;
    }

    validate(object, contexts) {
        let propertyValidations = contexts ?
            this._propertyValidations.filter(c => c.belongsToContexts(contexts)) :
            this._propertyValidations;

        propertyValidations.forEach(PropertyValidation => {
            PropertyValidation.validate(object);

            if(this._onlyFirstError && this.hasFailures() > 0)
                break;
        });

        return this._validationResult;
    }

    addFailure(failure) {
        this._validationResult.failures.push(failure);
        this._validationResult.isValid = false;
    }

    hasFailures() {
        return this._validationResult.isValid;
    }
}

