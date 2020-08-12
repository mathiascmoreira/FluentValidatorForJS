const ArrayValidations = require('./ArrayValidations');
const BooleanValidations = require('./BooleanValidations');
const DateValidations = require('./DateValidations');
const NumberValidations = require('./NumberValidations');
const StringValidations = require('./StringValidations');

class ObjectValidator {
    constructor() {
        this._context = '';
        this._conditions = [];        
        
        this._onlyFirstError = false;

        this._validations = [];
    }

    arrayProperty(propertyName, alias) {
        let validations = new ArrayValidations(this, propertyName, alias, this._context, [...this._conditions]);
        this._validations.push(validations);
        return validations;
    }
    boolProperty(propertyName, alias) {
        let validations = new BooleanValidations(this, propertyName, alias, this._context, [...this._conditions]);
        this._validations.push(validations);
        return validations;
    }
    booleanProperty(propertyName, alias) {
        let validations = new BooleanValidations(this, propertyName, alias, this._context, [...this._conditions]);
        this._validations.push(validations);
        return validations;
    }
    dateProperty(propertyName, alias) {
        let validations = new DateValidations(this, propertyName, alias, this._context, [...this._conditions]);
        this._validations.push(validations);
        return validations;
    }
    numberProperty(propertyName, alias) {
        let validations = new NumberValidations(this, propertyName, alias, this._context, [...this._conditions]);
        this._validations.push(validations);
        return validations;
    }
    objectProperty(propertyName, alias) {
        // let validations = new ObjectValidations(this, propertyName, alias, this._context, [...this._conditions]);
        // this._validations.push(validations);
        // return validations;
    }
    stringProperty(propertyName, alias) {
        let validations = new StringValidations(this, propertyName, alias, this._context, [...this._conditions]);
        this._validations.push(validations);
        return validations;
    }
    onlyFirstError() {
        this._onlyFirstError = true;
        return this;
    }
    context(contextName, rules) {
        this._context = contextName;
        rules();
        this._context = '';
        return this;
    }
    condition(condition, rules) {
        this._conditions.push(condition);
        rules();
        this._conditions.pop();
        return this;
    }
    addFailure(failure) {
        this._validationResult.failures.push(failure);
        this._validationResult.isValid = false;
    }
    hasFailures() {
        return !this._validationResult.isValid;
    }
    validate(object, contexts) {
        this._validationResult = this._validationSuccess();
        
        contexts = contexts ? contexts : [''];

        let propertyValidations = this._validations
            .filter(c => c.belongsToContexts(contexts));

        propertyValidations.every(propertyValidation => {
            propertyValidation.validate(object);

            return !(this._onlyFirstError && this.hasFailures());
        });

        return this._validationResult;
    }
    _validationSuccess() {
      return  {
            isValid: true,
            failures: []
        };
    }
}


module.exports = ObjectValidator;
