const PropertyValidator = require('./PropertyValidator');

class NumberValidations extends PropertyValidator {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
    }
    //Validates if the value is between two given numbers, NOT including this numbers.
    exclusiveBetween(valueToCompare1, valueToCompare2, customMessage) {
        let rule = (value) => value > valueToCompare1 && value < valueToCompare2;
        let message = customMessage || `${this.propertyDescription()} must be between ${valueToCompare1} and ${valueToCompare2} (not inclusive)`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is greater than a given number. 
    greaterThen(valueToCompare, customMessage) {
        let rule = (value) => value > valueToCompare;
        let message = customMessage || `${this.propertyDescription()} must be greater than ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is greater than or equals to a given number. 
    greaterThenOrEqualsTo(valueToCompare, customMessage) {
        let rule = (value) => value >= valueToCompare;
        let message = customMessage || `${this.propertyDescription()} must be greater than or equals to ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is between two given numbers, INCLUDING this numbers.
    inclusiveBetween() {
        let rule = (value) => value >= valueToCompare1 && value <= valueToCompare2;
        let message = customMessage || `${this.propertyDescription()} must be between ${valueToCompare1} and ${valueToCompare2} (inclusive)`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is less than a given number. 
    lessThen(customMessage) {
        let rule = (value) => value < valueToCompare;
        let message = customMessage || `${this.propertyDescription()} must be less than ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is less than or equals to a given number. 
    lessThenOrEqualsTo(valueToCompare, customMessage) {
        let rule = (value) => value <= valueToCompare;
        let message = customMessage || `${this.propertyDescription()} must be less than or equals to ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
}

module.exports = NumberValidations;