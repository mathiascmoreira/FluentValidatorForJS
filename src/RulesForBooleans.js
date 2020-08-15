const PropertyRules = require('./PropertyRules');

class RulesForBooleans extends PropertyRules {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
    }
    //Validates if the value is false (strict).
    mustBeFalse(customMessage) {
        let rule = (value) => value === false;
        let message = customMessage || `${this._propertyDescription()} must be false`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is a falsy value.
    mustBeFalsy(customMessage) {
        let rule = (value) => value ? false : true;
        let message = customMessage || `${this._propertyDescription()} must be falsy`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is true (strict).
    mustBeTrue(customMessage) {
        let rule = (value) => value === true;
        let message = customMessage || `${this._propertyDescription()} must be true`;
        this._addValidationRule(rule, message);
        return this;
    }
    //Validates if the value is a truthy value.
    mustBeTruthy(customMessage) {
        let rule = (value) => value ? true : false;
        let message = customMessage || `${this._propertyDescription()} must be truthy`;
        this._addValidationRule(rule, message);
        return this;
    }
}

module.exports = RulesForBooleans;