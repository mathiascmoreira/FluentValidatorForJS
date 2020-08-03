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

    notNull(message) {
        //NOT IMPLEMENTED
        return this;
    }

    empty(message) {
        //NOT IMPLEMENTED
        return this;
    }

    notEmpty(message) {
        //NOT IMPLEMENTED
        return this;
    }

    greaterThen(message) {
        //NOT IMPLEMENTED
        return this;
    }

    greaterThenOrEqualTo(message) {
        //NOT IMPLEMENTED
        return this;
    }

    lessThen(message) {
        //NOT IMPLEMENTED
        return this;
    }

    lessThenOrEqualTo(message) {
        //NOT IMPLEMENTED
        return this;
    }

    maximumLength(message) {
        //NOT IMPLEMENTED
        return this;
    }

    minimumLength(message) {
        //NOT IMPLEMENTED
        return this;
    }

    property(propertyName, alias) {
        return this._objectValidation.property(propertyName, alias);
    }
    
    validate(object) {
        if(!this._condition())
            return;

        let value = object[this.propertyName];

        this._validations.forEach(validation => {
            validation(value, object);

            if(this._onlyFirstError && this._objectValidation.hasFailures())
                break;
        } )
    }

    belongsToContexts(contexts) {
        return contexts.some(context => context === this._contextName)
    }

    _addValidation(rule, message) {
        let validation = (value, object) => {
            if (!rule(value, object)) {
                let failure = {
                    propertyName = this._propertyName,
                    alias = this._alias,
                    message = message
                };
                this._objectValidation.addFailure(failure);
            }
        }
        this._validations.push(validation);
    }
}