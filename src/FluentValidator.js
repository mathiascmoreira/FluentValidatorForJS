const ObjectValidator = require('./ObjectValidator');

let validator = new ObjectValidator();

    validator.condition(object => object.test1 > 2, () => validator
        .stringProperty('test2')
        .minimumLength(5));

    let result = validator.validate({
        test1: 4,
        test2: [1, 2, 3]
    });
