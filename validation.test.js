const ObjectValidation = require('./ObjectValidation');

test('test validation success', () => {
    let result = new ObjectValidation()
        .property('name')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
        .property('surName')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
        .property('age')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(18)
            .lessThenOrEqualTo(80)
        .property('weight')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(20)
            .lessThenOrEqualTo(150)
        .validate({
            name: 'Marty ',
            surName: 'McFly',
            age: 26,
            weight: 80
        });
});

test('test some validation failures', () => {
    let result = new ObjectValidation()
        .property('name')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
        .property('surName')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
        .property('age')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(18)
            .lessThenOrEqualTo(80)
        .property('weight')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(20)
            .lessThenOrEqualTo(150)
        .validate({
            name: 'Name greater than 25 letter',
            surName: 'C',
            age: 17,
            weight: null
        });
});

test('test onlyFirstError on properties', () => {
    let result = new ObjectValidation()
        .property('name')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
        .property('surName')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
            .onlyFirstError()    
        .property('age')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(18)
            .lessThenOrEqualTo(80)
            .equalsTo(20)
            .onlyFirstError()
        .property('weight')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(20)
            .lessThenOrEqualTo(150)
            .equalsTo(25)
        .validate({
            name: '',
            surName: '',
            age: 17,
            weight: 18
        });
});

test('test onlyFirstError on properties and global', () => {
    let result = new ObjectValidation()
        .onlyFirstError()
        .property('name')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
        .property('surName')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
            .onlyFirstError()    
        .property('age')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(18)
            .lessThenOrEqualTo(80)
            .equalsTo(20)
            .onlyFirstError()
        .property('weight')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(20)
            .lessThenOrEqualTo(150)
            .equalsTo(25)
        .validate({
            name: '',
            surName: '',
            age: 17,
            weight: 18
        });
});

test('test conditions', () => {
    let validator = new ObjectValidation();
    validator
        .property('name')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
        .condition(person => person.name, validator.property('surName')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25))
        .property('age')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(18)
            .lessThenOrEqualTo(80)
        .property('weight')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(20)
            .lessThenOrEqualTo(150)
        .condition(object => object.age > 30, validator.property('weight')
            .greaterThenOrEqualTo(40)
            .condition(object => object.weight === 70, validator.property('age')
                .equalsTo(35)));
})
test('test contexts', () => {
    let validator = new ObjectValidation();
    validator
        .property('name')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
        .property('surName')
            .notNullAndNotUndefined()
            .notEmpty()
            .minimumLength(2)
            .maximumLength(25)
        .property('age')
            .notNullAndNotUndefined()
            .greaterThenOrEqualTo(18)
            .lessThenOrEqualTo(80)
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
});

//test('test custom validation', () => {})