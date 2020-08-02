//ObjectValidation
//PropertyValidation
var validator = new ObjectValidation();

validator
.onlyFirstError()
.property('property', 'Alias')
    .notNull()
    .greaterThan()
    .then(() => validator.property().greaterThenOrEqualTo())
.context('salvar', validator.property('property').greaterThenOrEqualTo())
.condition(condition, validator.property('property').greaterThenOrEqualTo());


    
    validator.validate(object);