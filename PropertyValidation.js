class PropertyValidation {
    constructor(propertyName) {
        this.propertyName = propertyName;
        this.validations = [];
        this.validationResults = [];
    }

    
    validate(object) {
        let value = object[this.propertyName];

        this.validations.map(validation => validation(value))
    }

    null(message) {
        this.validations.push((value) => {
            if(value != null)
                this.validationResults.push({
                    propertyName: this.propertyName,
                    message: message || `The value of the property ${this.propertyName} must be null`,
                     
                });
        });
    }

    notNull(message) {

    }

    empty(message) {

    }

    notEmpty(message) {

    }

    greaterThen(message) {

    }

    greaterThenOrEqualTo(message) {

    }

    lessThen(message) {

    }

    lessThenOrEqualTo(message) {

    }

    maximumLength(message) {

    }

    minimumLength(message) {

    }

    newValidationResult
    
}




