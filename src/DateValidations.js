const PropertyValidator = require('./PropertyValidator');

class DateValidations extends PropertyValidator {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
    }
    //Validates if the value is greater than or equals to a given date.
    greaterThenOrEqualsTo(dateToCompare, customMessage) {
        let rule = (date) => date >= dateToCompare;
        let message = customMessage || `${this.propertyDescription()} must be greater than or equal to ${dateToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is between two given dates, INCLUDING this dates.
    between(dateToCompare1, dateToCompare2, customMessage) {
        let rule = (date) => date >= dateToCompare1 && date <= dateToCompare2;
        let message = customMessage || `${this.propertyDescription()} must be between ${dateToCompare1} and ${dateToCompare2}`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is less than or equals to a given date. 
    lessThenOrEqualsTo(dateToCompare, customMessage) {
        let rule = (date) => !date || date <= dateToCompare;
        let message = customMessage || `${this.propertyDescription()} must be less than or equal to ${dateToCompare}`;
        this._addValidation(rule, message);
        return this;
    }
}

module.exports = DateValidations;