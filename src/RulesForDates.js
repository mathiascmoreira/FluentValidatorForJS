const PropertyRules = require('./PropertyRules');

class RulesForDates extends PropertyRules {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
        this._ensureValueIsADate();
    }
    //Validates if the value is greater than or equals to a given date.
    greaterThenOrEqualsTo(dateToCompare, customMessage) {
        let rule = (date) => date >= dateToCompare;
        let message = customMessage || `${this._propertyDescription()} must be greater than or equal to ${dateToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is between two given dates, INCLUDING this dates.
    between(dateToCompare1, dateToCompare2, customMessage) {
        let rule = (date) => date >= dateToCompare1 && date <= dateToCompare2;
        let message = customMessage || `${this._propertyDescription()} must be between ${dateToCompare1} and ${dateToCompare2}`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is less than or equals to a given date. 
    lessThenOrEqualsTo(dateToCompare, customMessage) {
        let rule = (date) => !date || date <= dateToCompare;
        let message = customMessage || `${this._propertyDescription()} must be less than or equal to ${dateToCompare}`;
        this._addValidationRule(rule, message);
        return this;
    }
    _ensureValueIsADate() {
        let rule = (value) => this._valueIsNullOrUndefined(value) || this._valueIsOfType(value, 'Date');
        let message = `${this._propertyDescription()} must be a Date`;
        this._addValidationRule(rule, message);
    }  
}

module.exports = RulesForDates;