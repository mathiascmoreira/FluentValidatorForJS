const ObjectValidator = require('../src/ObjectValidator');

test('when the condition is NOT met, the validation NOT occurs', () => {
    let validator = new ObjectValidator();

    validator.condition(object => object.test1 > 2, () => validator
        .array('test2')
        .minimumLength(5));

    let result = validator.validate({
        test1: 1,
        test2: [1, 2, 3]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});

test('when the condition is met, the validation occurs', () => {
    let validator = new ObjectValidator();

    validator.condition(object => object.test1 > 2, () => validator
        .array('test2')
        .minimumLength(5));

    let result = validator.validate({
        test1: 4,
        test2: [1, 2, 3]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});