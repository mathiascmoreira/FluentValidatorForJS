const RulesForArrays = require('./RulesForArrays');
const RulesForBooleans = require('./RulesForBooleans');
const RulesForDates = require('./RulesForDates');
const RulesForNumbers = require('./RulesForNumbers');
const RulesForStrings = require('./RulesForStrings');

class ObjectValidator {
    constructor() {
        this._contextName = '';
        this._conditions = [];
        this._onlyFirstFailure = false;
        this._propertyRules = [];
    }

    array(propertyName, alias) {
        return this._addPropertyRule(RulesForArrays, propertyName, alias);
    }

    bool(propertyName, alias) {
        return this._addPropertyRule(RulesForBooleans, propertyName, alias);
    }

    boolean(propertyName, alias) {
        return this._addPropertyRule(RulesForBooleans, propertyName, alias);
    }

    date(propertyName, alias) {
        return this._addPropertyRule(RulesForDates, propertyName, alias);
    }

    number(propertyName, alias) {
        return this._addPropertyRule(RulesForNumbers, propertyName, alias);
    }

    string(propertyName, alias) {
        return this._addPropertyRule(RulesForStrings, propertyName, alias);
    }

    onlyFirstFailure() {
        this._onlyFirstFailure = true;
        return this;
    }

    context(contextName, rules) {
        this._contextName = contextName;
        rules();
        this._contextName = '';
        return this;
    }

    condition(condition, rules) {
        this._conditions.push(condition);
        rules();
        this._conditions.pop();
        return this;
    }

    validate(object, contexts) {
        this._validationResult = this._validationSuccess();
        this._propertyRules.every(propertyRule => {
            propertyRule.validate(object, contexts);
            return !this._onlyFirstFailure || this._validationResult.isValid;
        });
        return this._validationResult;
    }

    _addPropertyRule(rulesType, propertyName, alias) {
        let propertyRule = new rulesType(this, propertyName, alias, this._contextName, [...this._conditions]);
        this._propertyRules.push(propertyRule);
        return propertyRule;
    }

    _validationSuccess() {
        return {
            isValid: true,
            failures: []
        };
    }
}

module.exports = ObjectValidator;
