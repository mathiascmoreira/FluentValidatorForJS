const PropertyValidator = require('./PropertyValidator');

class ArrayValidations extends PropertyValidator {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
    }
    //Validates if the array has no elements, is null or undefined.
    empty(customMessage) {
        let rule = (value) => value == null || value.length < 1;
        let message = customMessage || `${this.propertyDescription()} must be empty`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the array has length equals to a given value.
    length(valueToCompare, customMessage) {
        let rule = (value) => value != null && value.length == valueToCompare;
        let message = customMessage || `${this.propertyDescription()} must have length: ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the array has length less than or equals to a given value.
    maximumLength(valueToCompare, customMessage) {
        let rule = (value) => value == null || value.length <= valueToCompare;
        let message = customMessage || `${this.propertyDescription()} is greater than maximum length: ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the array has length greater than or equals to a given value.
    minimumLength(valueToCompare, customMessage) {
        let rule = (value) => value != null && value.length >= valueToCompare;
        let message = customMessage || `${this.propertyDescription()} is less than minimum length: ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the array is NOT empty, null or undefined. 
    notEmpty(customMessage) {
        let rule = (value) => value != null && value.length > 0;
        let message = customMessage || `${this.propertyDescription()} can't be empty`;
        this._addValidation(rule, message);
        return this;
    }
}

module.exports = ArrayValidations;