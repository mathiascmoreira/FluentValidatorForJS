class PropertyValidation {
    constructor(objectValidation, propertyName, alias, contextName, condition) {
        this._objectValidation = objectValidation;
       
        this._propertyName = propertyName;
        this._alias = alias;

        this._contextName = contextName;
        this._condition = condition;

        this._validations = [];

        this._onlyFirstError = false;
    }

    onlyFirstError() {
        this._onlyFirstError = true;
        return this;
    }   

    must(custonRule, customMessage) {
        let message = customMessage || `${this._alias || this._propertyName} must be null`;
        this._addValidation(custonRule, message);
        return this;
    }

    null(customMessage) {
        let rule = (value) => value === null;
        let message = customMessage || `${this._alias || this._propertyName} must be null`;
        this._addValidation(rule, message);
        return this;
    }

    equalsTo() {

    }

    notEqualsTo() {

    }

    nullOrUndefined() {

    }
    
    notNullAndNotUndefined() {

    }

    notNull(customMessage) {
        let rule = (value) => value !== null;
        let message = customMessage || `${this._alias || this._propertyName} can't be null`;
        this._addValidation(rule, message);
        return this;
    }

    empty(customMessage) {
        //NOT IMPLEMENTED
        return this;
    }

    integer() {

    }

    notEmpty(customMessage) {
        //NOT IMPLEMENTED
        return this;
    }

    greaterThen(customMessage) {
        //NOT IMPLEMENTED
        return this;
    }

    greaterThenOrEqualTo(valueToCompare, customMessage) {
        let rule = (value) => value >= valueToCompare;
        let message = customMessage || `${this._alias || this._propertyName} must be greater than or equal to ${valueToCompare}`;
        this._addValidation(rule, message);
        return this;
    }

    lessThen(customMessage) {
        //NOT IMPLEMENTED
        return this;
    }

    lessThenOrEqualTo(customMessage) {
        //NOT IMPLEMENTED
        return this;
    }

    maximumLength(customMessage) {
        //NOT IMPLEMENTED
        return this;
    }

    minimumLength(customMessage) {
        //NOT IMPLEMENTED
        return this;
    }

    property(propertyName, alias) {
        return this._objectValidation.property(propertyName, alias);
    }
    
    validate(object) {
        if(!this._condition())
            return;

        let value = object[this._propertyName];

        this._validations.every(validation => {
            validation(value, object);

            var teste = !(this._onlyFirstError && this._objectValidation.hasFailures());

            return !(this._onlyFirstError && this._objectValidation.hasFailures());
        } )
    }

    belongsToContexts(contexts) {
        return contexts.some(context => context === this._contextName)
    }

    _addValidation(rule, message) {
        let validation = (value, object) => {
            if (!rule(value, object)) {
                let failure = {
                    propertyName: this._propertyName,
                    alias: this._alias,
                    message: message
                };
                this._objectValidation.addFailure(failure);
            }
        }
        this._validations.push(validation);
    }
}

module.exports = PropertyValidation;