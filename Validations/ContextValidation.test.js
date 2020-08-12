const ObjectValidator = require('../src/ObjectValidator');

test('validating context', () => {
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

    let noContext = validator
        .validate({
            test: '',
            test2: ''
        });

    let onlyContext = validator
        .validate({
            test: '',
            test2: ''
        }, ['validateTest']);

    let allValidations = validator
        .validate({
            test: '',
            test2: ''
        }, ['', 'validateTest']);

    expect(noContext.isValid).toBe(false);
    expect(noContext.failures.filter(c => c.propertyName == 'test').length).toBe(0);
    expect(noContext.failures.filter(c => c.propertyName == 'test2').length).toBe(3);
    expect(noContext.failures).toHaveLength(3);

    expect(onlyContext.isValid).toBe(false);
    expect(onlyContext.failures.filter(c => c.propertyName == 'test').length).toBe(3);
    expect(onlyContext.failures.filter(c => c.propertyName == 'test2').length).toBe(0);
    expect(onlyContext.failures).toHaveLength(3);

    expect(allValidations.isValid).toBe(false);
    expect(allValidations.failures.filter(c => c.propertyName == 'test').length).toBe(3);
    expect(allValidations.failures.filter(c => c.propertyName == 'test2').length).toBe(3);
    expect(allValidations.failures).toHaveLength(6);
});