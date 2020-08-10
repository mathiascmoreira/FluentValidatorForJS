const ObjectValidator = require('./ObjectValidator');

let validator = new ObjectValidator();

validator
    .stringProperty('test')
    .empty()
    

let result = validator.validate({
    test: 'test',
});
