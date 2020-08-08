const ObjectValidator = require('./ObjectValidator');

let validator = new ObjectValidator();

    validator.booleanProperty('test').mustBeFalse();

    let result = validator.validate({
        test: true
    })
