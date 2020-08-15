const PropertyRules = require('./PropertyRules');

class RulesForNumbers extends PropertyRules {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
        this._ensureValueIsANumber();
    }
    //Validates if the value is between two given numbers, NOT including this numbers.
    exclusiveBetween(valueToCompare1, valueToCompare2, customMessage) {
        let rule = (value) => (value || 0) > valueToCompare1 && (value || 0) < valueToCompare2;
        let message = customMessage || `${this._propertyDescription()} must be between ${valueToCompare1} and ${valueToCompare2} (not inclusive)`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is greater than a given number. 
    greaterThen(valueToCompare, customMessage) {
        let rule = (value) => (value || 0) > valueToCompare;
        let message = customMessage || `${this._propertyDescription()} must be greater than ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is greater than or equals to a given number. 
    greaterThenOrEqualsTo(valueToCompare, customMessage) {
        let rule = (value) => (value || 0) >= valueToCompare;
        let message = customMessage || `${this._propertyDescription()} must be greater than or equals to ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is between two given numbers, INCLUDING this numbers.
    inclusiveBetween(valueToCompare1, valueToCompare2, customMessage) {
        let rule = (value) => (value || 0) >= valueToCompare1 && (value || 0) <= valueToCompare2;
        let message = customMessage || `${this._propertyDescription()} must be between ${valueToCompare1} and ${valueToCompare2} (inclusive)`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is less than a given number. 
    lessThen(valueToCompare, customMessage) {
        let rule = (value) => (value || 0) < valueToCompare;
        let message = customMessage || `${this._propertyDescription()} must be less than ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is less than or equals to a given number. 
    lessThenOrEqualsTo(valueToCompare, customMessage) {
        let rule = (value) => (value || 0) <= valueToCompare;
        let message = customMessage || `${this._propertyDescription()} must be less than or equals to ${valueToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    _ensureValueIsANumber() {
        let rule = (value) => this._valueIsNullOrUndefined(value) || this._valueIsOfType(value, 'Number');
        let message = `${this._propertyDescription()} must be a Number`;
        this._addValidationRule(rule, message);
    }   
}

module.exports = RulesForNumbers;