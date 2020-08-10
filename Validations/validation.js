    // let result = validator 
    //     .validate({
    //         name: 'Marty ',
    //         surName: 'McFly',
    //         age: 26,
    //         weight: 80
    //     });

    // expect(result.isValid).toBe(true);
    // expect(result.failures).toHaveLength(0);


// test('test some validation failures', () => {
//     let validator = new ObjectValidation();
//     validator
//         .property('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)

//     let result = validator 
//         .validate({
//             name: 'Name greater than 25 letter',
//             surName: 'C',
//             age: 17,
//             weight: null
//         });

//     expect(result.isValid).toBe(false);
//     expect(result.failures).toHaveLength(5);
// });

// test('test onlyFirstError on properties', () => {
//     let validator = new ObjectValidation();
//     validator
//         .stringProperty('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .stringProperty('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//             .onlyFirstError()    
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//             .equalsTo(20)
//             .onlyFirstError()
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)
//             .equalsTo(25);

//         let result = validator 
//             .validate({
//                 name: '',
//                 surName: '',
//                 age: 17,
//                 weight: 18
//             });

//         expect(result.isValid).toBe(false);
//         expect(result.failures).toHaveLength(5);

// });

// test('test onlyFirstError on properties and global', () => {
//     let result = new ObjectValidation()
//         .onlyFirstError()
//         .property('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//             .onlyFirstError()    
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//             .equalsTo(20)
//             .onlyFirstError()
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)
//             .equalsTo(25)
//         .validate({
//             name: '',
//             surName: '',
//             age: 17,
//             weight: 18
//         });
// });

// test('test conditions', () => {
//     let validator = new ObjectValidation();
//     validator
//         .property('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .condition(person => person.name, validator.property('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25))
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)
//         .condition(object => object.age > 30, validator.property('weight')
//             .greaterThenOrEqualTo(40)
//             .condition(object => object.weight === 70, validator.property('age')
//                 .equalsTo(35)));
// })
// test('test contexts', () => {
//     let validator = new ObjectValidation();
//     validator
//         .property('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)
//         .context('include', validator
//             .nullOrUndefined()
//             .property('id'))
//         .context('update', validator
//             .property('id')
//             .notNullAndNotUndefined()
// });

//test('test custom validation', () => {})