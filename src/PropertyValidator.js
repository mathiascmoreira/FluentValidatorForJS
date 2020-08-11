class PropertyValidator {
    constructor(objectValidator, propertyName, alias, contextName, conditions) {
        this._objectValidator = objectValidator;

        this._propertyName = propertyName;
        this._alias = alias;

        this._contextName = contextName;
        this._conditions = conditions;

        this._validations = [];

        this._onlyFirstError = false;
    }

    onlyFirstError() {
        this._onlyFirstError = true;
        return this;
    }
    arrayProperty(propertyName, alias) {
        return this._objectValidator.arrayProperty(propertyName, alias);
    }
    boolProperty(propertyName, alias) {
        return this._objectValidator.boolProperty(propertyName, alias);
    }
    booleanProperty(propertyName, alias) {
        return this._objectValidator.booleanProperty(propertyName, alias);
    }
    dateProperty(propertyName, alias) {
        return this._objectValidator.dateProperty(propertyName, alias);
    }
    numberProperty(propertyName, alias) {
        return this._objectValidator.numberProperty(propertyName, alias);
    }
    objectProperty(propertyName, alias) {
        throw new Error('NOT IMPLEMENTED');
    }
    stringProperty(propertyName, alias) {
        return this._objectValidator.stringProperty(propertyName, alias);
    }

    validate(object) {
        if (!this._testConditions(object))
            return;

        let value = object[this._propertyName];

        this._validations.every(validation => {
            validation(value, object);

            return !(this._onlyFirstError && this._objectValidator.hasFailures());
        })
    }

    belongsToContexts(contexts) {
        return contexts.some(context => context === this._contextName)
    }

    propertyDescription() {
        return this._alias || this._propertyName;
    }

    _addValidation(rule, message) {
        let validation = (value, object) => {
            if (!rule(value, object)) {
                let failure = {
                    propertyName: this._propertyName,
                    alias: this._alias,
                    message: message
                };
                this._objectValidator.addFailure(failure);
            }
        }
        this._validations.push(validation);
    }

    _testConditions(object) {
        return this._conditions.every(condition => {
           return condition(object);
        })
    }
}

module.exports = PropertyValidator;