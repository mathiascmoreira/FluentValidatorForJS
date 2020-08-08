const PropertyValidator = require('./PropertyValidator');

class BooleanValidations extends PropertyValidator {
    constructor(objectValidator, propertyName, alias, contextName, condition) {
        super(objectValidator, propertyName, alias, contextName, condition);
    }
    //Validates if the value is false (strict).
    mustBeFalse(customMessage) {
        let rule = (value) => value === false;
        let message = customMessage || `${this.propertyDescription()} must be false`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is a falsy value.
    mustBeFalsy(customMessage) {
        let rule = (value) => value ? false : true;
        let message = customMessage || `${this.propertyDescription()} must be falsy`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is true (strict).
    mustBeTrue(customMessage) {
        let rule = (value) => value === true;
        let message = customMessage || `${this.propertyDescription()} must be true`;
        this._addValidation(rule, message);
        return this;
    }
    //Validates if the value is a truthy value.
    mustBeTruthy(customMessage) {
        let rule = (value) => value ? true : false;
        let message = customMessage || `${this.propertyDescription()} must be truthy`;
        this._addValidation(rule, message);
        return this;
    }
}

module.exports = BooleanValidations;