const ArrayValidations = require('./ArrayValidations');
const BooleanValidations = require('./BooleanValidations');
const DateValidations = require('./DateValidations');
const NumberValidations = require('./NumberValidations');
//const StringValidations = require('./StringValidations');

class ObjectValidator {
    constructor() {
        this._context = this._noContext();
        this._condition = this._noCondition();

        this._validationResult = this._validationSuccess();
        
        this._onlyFirstError = false;

        this._validations = [];
    }

    arrayProperty(propertyName, alias) {
        let validations = new ArrayValidations(this, propertyName, alias, this._context, this._condition);
        this._validations.push(validations);
        return validations;
    }
    boolProperty(propertyName, alias) {
        let validations = new BooleanValidations(this, propertyName, alias, this._context, this._condition);
        this._validations.push(validations);
        return validations;
    }
    booleanProperty(propertyName, alias) {
        let validations = new BooleanValidations(this, propertyName, alias, this._context, this._condition);
        this._validations.push(validations);
        return validations;
    }
    dateProperty(propertyName, alias) {
        let validations = new DateValidations(this, propertyName, alias, this._context, this._condition);
        this._validations.push(validations);
        return validations;
    }
    numberProperty(propertyName, alias) {
        let validations = new NumberValidations(this, propertyName, alias, this._context, this._condition);
        this._validations.push(validations);
        return validations;
    }
    objectProperty(propertyName, alias) {
        // let validations = new BooleanValidations(this, propertyName, alias, this._contextName, this._condition);
        // this._validations.push(validations);
        // return validations;
    }
    stringProperty(propertyName, alias) {
        let validations = new StringValidations(this, propertyName, alias, this._contextName, this._condition);
        this._validations.push(validations);
        return validations;
    }
    onlyFirstError() {
        this._onlyFirstError = true;
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
    addFailure(failure) {
        this._validationResult.failures.push(failure);
        this._validationResult.isValid = false;
    }

    hasFailures() {
        return !this._validationResult.isValid;
    }
    validate(object, contexts) {
        contexts = contexts ? contexts : [''];

        let propertyValidations = this._validations
            .filter(c => c.belongsToContexts(contexts));

        propertyValidations.every(propertyValidation => {
            propertyValidation.validate(object);

            return !(this._onlyFirstError && this.hasFailures());
        });

        return this._validationResult;
    }
    _noCondition() {
        return () => true;
    }
    _noContext() {
        return '';
    }
    _validationSuccess() {
      return  {
            isValid: true,
            failures: []
        };
    }
}


module.exports = ObjectValidator;
