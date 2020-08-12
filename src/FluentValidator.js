const ObjectValidator = require('./ObjectValidator');

let validator = new ObjectValidator();

validator
.context('validateTest', () => validator
    .stringProperty('test')
        .notEmpty()
        .minimumLength(2)
        .length(10)
        .maximumLength(25))
.stringProperty('test2')
    .notEmpty()
    .minimumLength(2)
    .length(10)
    .maximumLength(25)



let resultWithContext = validator 
    .validate({
        test: '',
        test2: ''
    }, ['', 'validateTest']);