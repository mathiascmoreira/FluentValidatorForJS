
var validator = new ObjectValidation();

validator
.onlyFirstError()
.property('property', 'Alias')
    .notNull()
    .greaterThan()
    .must((value, object) => value > object['property'])
    .onlyFirstError()
.context('salvar', validator.property('property').greaterThenOrEqualTo(2))
.condition(condition, validator.property('property').greaterThenOrEqualTo(2));


    
    validator.validate(object);

