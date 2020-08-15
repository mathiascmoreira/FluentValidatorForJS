const PropertyRules = require('./PropertyRules');

class RulesForArrays extends PropertyRules {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
        this._ensureValueIsAnArray();
    }
    //Validates if the array has no elements, is null or undefined.
    empty(customMessage) {
        let rule = (value) => value == null || value.length < 1;
        let message = customMessage || `${this._propertyDescription()} must be empty`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the array has length equals to a given value.
    length(valueToCompare, customMessage) {
        let rule = (value) => value != null && value.length == valueToCompare;
        let message = customMessage || `${this._propertyDescription()} must have length: ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the array has length less than or equals to a given value.
    maximumLength(valueToCompare, customMessage) {
        let rule = (value) => value == null || value.length <= valueToCompare;
        let message = customMessage || `${this._propertyDescription()} is greater than maximum length: ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the array has length greater than or equals to a given value.
    minimumLength(valueToCompare, customMessage) {
        let rule = (value) => value != null && value.length >= valueToCompare;
        let message = customMessage || `${this._propertyDescription()} is less than minimum length: ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the array is NOT empty, null or undefined. 
    notEmpty(customMessage) {
        let rule = (value) => value != null && value.length > 0;
        let message = customMessage || `${this._propertyDescription()} can't be empty`;
        this._addValidationRule(rule, message);
        return this;
    }
    _ensureValueIsAnArray() {
        let rule = (value) => this._valueIsNullOrUndefined(value) || this._valueIsOfType(value, 'Array');
        let message = `${this._propertyDescription()} must be an array`;
        this._addValidationRule(rule, message);
    }
}

module.exports = RulesForArrays;