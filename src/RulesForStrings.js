const PropertyRules = require('./PropertyRules');

class RulesForStrings extends PropertyRules {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
        this._ensureValueIsAString();
    }
    //Validates if the value is an empty or whitespace string, null or undefined. 
    empty(customMessage) {
        let rule = (value) => !value || !value.trim();
        let message = customMessage || `${this._propertyDescription()} must be empty`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value has length equals to a given value.
    length(valueToCompare, customMessage) {
        let rule = (value) => (value ? (value.trim().length || 0) : 0) === valueToCompare;
        let message = customMessage || `${this._propertyDescription()} must have length: ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value has length less than or equals to a given value.
    maximumLength(valueToCompare, customMessage) {
        let rule = (value) => !value || (value.trim().length || 0) <= valueToCompare;
        let message = customMessage || `${this._propertyDescription()} is greater than maximum length: ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value has length greater than or equals to a given value.
    minimumLength(valueToCompare, customMessage) {
        let rule = (value) => (value ? (value.trim().length || 0) : 0) >= valueToCompare;
        let message = customMessage || `${this._propertyDescription()} is less than minimum length: ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is NOT empty, null or undefined. 
    notEmpty(customMessage) {
        let rule = (value) => value && (value.trim().length || 0) > 0;
        let message = customMessage || `${this._propertyDescription()} can't be empty`;
        this._addValidationRule(rule, message);
        return this;
    }
    _ensureValueIsAString() {
        let rule = (value) => this._valueIsNullOrUndefined(value) || this._valueIsOfType(value, 'String');
        let message = `${this._propertyDescription()} must be a String`;
        this._addValidationRule(rule, message);
    }
}

module.exports = RulesForStrings;