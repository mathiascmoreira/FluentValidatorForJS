const ObjectValidator = require('../src/ObjectValidator');

test('if onlyFirstFailure() are called from a property, just the first error of that property will be considered', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .onlyFirstFailure()
        .notEmpty()
        .minimumLength(2)
        .length(10)
        .maximumLength(25)
        .string('test2')
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
    expect(result.failures.filter(c => c.propertyName == 'test').length).toBe(1);
    expect(result.failures.filter(c => c.propertyName == 'test2').length).toBe(3);
    expect(result.failures).toHaveLength(4);
});

test('if onlyFirstFailure() are called from the validator (globally), just the first property with validation erros will be considered', () => {
    let validator = new ObjectValidator();

    validator
        .onlyFirstFailure()
        .string('test')
        .notEmpty()
        .minimumLength(2)
        .length(10)
        .maximumLength(25)
        .string('test2')
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
});

test('onlyFirstFailure() can be called from the validator (globally) and from a property at the same time', () => {
    let validator = new ObjectValidator();

    validator
        .onlyFirstFailure()
        .string('test')
        .onlyFirstFailure()
        .notEmpty()
        .minimumLength(2)
        .length(10)
        .maximumLength(25)
        .string('test2')
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
    expect(result.failures.filter(c => c.propertyName == 'test').length).toBe(1);
    expect(result.failures.filter(c => c.propertyName == 'test2').length).toBe(0);
    expect(result.failures).toHaveLength(1);
});
