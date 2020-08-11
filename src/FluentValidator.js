const ObjectValidator = require('./ObjectValidator');

let validator = new ObjectValidator();

validator
    .onlyFirstError()
    .stringProperty('test')
        .notEmpty()
        .minimumLength(2)
        .length(10)
        .maximumLength(25)
    .stringProperty('test2')
        .notEmpty()
        .minimumLength(2)
        .length(10)
        .maximumLength(25)

    let result = validator 
        .validate({
            test: '',
            test2: ''
        });

    expect(result.isValid).toBe(false);
    expect(result.failures.filter(c => c.propertyName == 'test').length).toBe(3);
    expect(result.failures.filter(c => c.propertyName == 'test2').length).toBe(0);
    expect(result.failures).toHaveLength(3);