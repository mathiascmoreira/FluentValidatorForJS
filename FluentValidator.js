const ObjectValidation = require('./ObjectValidation');

var object = {
    name: 'Mathias',
    surName: 'Moreira',
    age: 26,
    weight: 83
}

var validator = new ObjectValidation();

validator
    .property('name')
        .notNull()
    .property('surName')
        .notNull()
    .property('age')
        .notNull()
        .greaterThenOrEqualTo(25)
        .onlyFirstError()
    .property('weight')
        .greaterThenOrEqualTo(80);

console.log(validator.validate(object));

//
//
//
//------------------------------------------------------------------------------------------------------------------------
validator
    .property('name')
        .notNullAndNotUndefined()
        .notEmpty()
        .maximumLength()
        .minimumLength()
    .property('surName')
        .notNullAndNotUndefined()
        .notEmpty()
        .maximumLength()
        .minimumLength()
        .onlyFirstError()    
    .property('age')
        .notNullAndNotUndefined()
        .greaterThenOrEqualTo(25)
        .lessThenOrEqualTo(80)
        .onlyFirstError()
    .property('weight')
        .notNullAndNotUndefined()
        .greaterThenOrEqualTo(20)
        .lessThenOrEqualTo(150);

        validator
        .onlyFirstError()
        .property('name')
            .notNullAndNotUndefined()
            .notEmpty()
            .maximumLength()
            .minimumLength()
        .property('surName')
            .notNullAndNotUndefined()
            .notEmpty()
            .maximumLength()
            .minimumLength()
            .onlyFirstError()    
        .property('age')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(25)
            .lessThenOrEqualTo(80)
            .onlyFirstError()
        .property('weight')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(20)
            .lessThenOrEqualTo(150);

//------------------------------------------------------------------------------------------------------------------------
validator
    .property('name')
        .notNullAndNotUndefined()
        .notEmpty()
        .maximumLength()
        .minimumLength()
    .condition(object => object.name, validator.property('surName')
        .notNullAndNotUndefined()
        .notEmpty()
        .maximumLength()
        .minimumLength()
        .onlyFirstError())    
    .property('age')
        .notNullAndNotUndefined()
        .greaterThenOrEqualTo(25)
        .lessThenOrEqualTo(80)
        .onlyFirstError()
    .condition(object => object.age > 30, validator.property('weight')
        .notNullAndNotUndefined()
        .greaterThenOrEqualTo(20)
        .lessThenOrEqualTo(150)
        .condition(object => object.weight === 70, validator.property('age')
            .equalsTo(35)))
       

//------------------------------------------------------------------------------------------------------------------------
validator
    .property('name')
        .notNullAndNotUndefined()
        .notEmpty()
        .maximumLength()
        .minimumLength()    
    .property('surName')
        .notNullAndNotUndefined()
        .notEmpty()
        .maximumLength()
        .minimumLength()
        .onlyFirstError()
    .property('age')
        .notNullAndNotUndefined()
        .greaterThenOrEqualTo(25)
        .lessThenOrEqualTo(80)
        .onlyFirstError()
    .property('weight')
        .notNullAndNotUndefined()
        .greaterThenOrEqualTo(20)
        .lessThenOrEqualTo(150)
    .context('include', validator
        .nullOrUndefined()
        .property('id'))
    .context('update', validator
        .property('id')
        .notNullAndNotUndefined()
        .integer());
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------






// validator
// .onlyFirstError()
// .property('name', 'Name')
//     .notNull()
//     .onlyFirstError()
// .property
// .context('salvar', validator.property('property').greaterThenOrEqualTo(2))
// .condition(condition, validator.property('property').greaterThenOrEqualTo(2));


    
    

