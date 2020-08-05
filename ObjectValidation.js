const PropertyValidation = require('./PropertyValidation');

class ObjectValidation {
    constructor() {
        this._contextName = '';
        this._condition = () => true;

        this._onlyFirstError = false;

        this._propertyValidations = [];

        this._validationResult = {
            isValid: true,
            failures: []
        };
    }

    onlyFirstError() {
        this._onlyFirstError = true;
    }

    property(propertyName, alias) {
        let propertyValidation = new PropertyValidation(this, propertyName, alias, this._contextName, this._condition)
        this._propertyValidations.push(propertyValidation);
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
        contexts = contexts ? contexts : [''];

        let propertyValidations = this._propertyValidations
            .filter(c => c.belongsToContexts(contexts));

        propertyValidations.every(propertyValidation => {
            propertyValidation.validate(object);

            return !(this._onlyFirstError && this.hasFailures());
        });

        return this._validationResult;
    }

    printValidationTree(contexts) {
        let propertyValidations = contexts ?
            this._propertyValidations.filter(c => c.belongsToContexts(contexts)) :
            this._propertyValidations;

        propertyValidations.forEach(propertyValidation => {
            console.log({
                context: propertyValidation._contextName,
                condition: propertyValidation._condition.toString(),
                validations: propertyValidation._validations.map(c => c.toString())
            });
        });

        return this._validationResult;
    }

    addFailure(failure) {
        this._validationResult.failures.push(failure);
        this._validationResult.isValid = false;
    }

    hasFailures() {
        return !this._validationResult.isValid;
    }
}


module.exports = ObjectValidation;
