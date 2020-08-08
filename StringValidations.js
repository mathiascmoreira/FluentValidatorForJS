const PropertyValidator = require('./PropertyValidator');

class StringValidations extends PropertyValidator {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
    }
    //Validates if the value is an empty or whitespace string, null or undefined. 
    empty(customMessage) {
        let rule = (value) => (value?.length || 0) < 1;
        let message = customMessage || `${this.propertyDescription()} must be empty`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value has length equals to a given value.
    length(valueToCompare, customMessage) {
        let rule = (value) => value?.length == valueToCompare;
        let message = customMessage || `${this.propertyDescription()} must have length: ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value has length less than or equals to a given value.
    maximumLength(valueToCompare, customMessage) {
        let rule = (value) => (value?.length || 0) <= valueToCompare;
        let message = customMessage || `${this.propertyDescription()} is greater than maximum length: ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value has length greater than or equals to a given value.
    minimumLength(valueToCompare, customMessage) {
        let rule = (value) => (value?.length || 0) >= valueToCompare;
        let message = customMessage || `${this.propertyDescription()} is less than minimum length: ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is NOT empty, null or undefined. 
    notEmpty(customMessage) {
        let rule = (value) => (value?.length || 0) < 0;
        let message = customMessage || `${this.propertyDescription()} can't be empty`;
        this._addValidation(rule, message);
        return this;
    }
}

module.exports = StringValidations;