const ObjectValidator = require('../src/ObjectValidator');

test('ensure type for String', () => {
    let validator = new ObjectValidator();

    validator.string('test1')
        .string('test2')
        .string('test3')
        .string('test4')
        .string('test5');

    let result = validator.validate({
        test1: 'test',
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);

    result = validator.validate({
        test1: 10,
        test2: new Date(),
        test3: true,
        test4: { test: 2 },
        test5: [1, 2, 3]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(5);
});
test('string().empty() with null value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .empty();

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().empty() with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .empty();

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().empty() with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .empty()

    let result = validator.validate({
        test: '',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().empty() with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .empty()

    let result = validator.validate({
        test: '   ',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().empty() with filled string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .empty()

    let result = validator.validate({
        test: 'test',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().length(10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(10)

    let result = validator.validate({
        test: null,
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().length(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(10)

    let result = validator.validate({
        test2: null,
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().length(10) with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(10)

    let result = validator.validate({
        test: '',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().length(10) with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(10)

    let result = validator.validate({
        test: '   ',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().length(0) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(0)

    let result = validator.validate({
        test: null,
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().length(0) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(0)

    let result = validator.validate({
        test2: null,
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().length(0) with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(0)

    let result = validator.validate({
        test: '',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().length(0) with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(0)

    let result = validator.validate({
        test: '   ',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().length(10) with string length greater than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(10)

    let result = validator.validate({
        test: 'greaterthanvaluetocompare',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().length(10) with string length less than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(10)

    let result = validator.validate({
        test: 'test',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().length(10) with string length equals to the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .length(10)

    let result = validator.validate({
        test: 'testtest10',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(10) with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(10);

    let result = validator.validate({
        test: ''
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(10) with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(10);

    let result = validator.validate({
        test: '   '
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(0) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(0) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(0) with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(0);

    let result = validator.validate({
        test: ''
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(0) with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(0);

    let result = validator.validate({
        test: '   '
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(10) with string length greater than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(10);

    let result = validator.validate({
        test: 'greaterthanvaluetocompare'
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().maximumLength(10) with string length less than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(10);

    let result = validator.validate({
        test: 'test'
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().maximumLength(10) with string length equals to the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .maximumLength(10);

    let result = validator.validate({
        test: 'testtest10'
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().minimumLength(10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().minimumLength(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().minimumLength(10) with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(10);

    let result = validator.validate({
        test: ''
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().minimumLength(10) with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(10);

    let result = validator.validate({
        test: '   '
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().minimumLength(0) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().minimumLength(0) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().minimumLength(0) with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(0);

    let result = validator.validate({
        test: ''
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().minimumLength(0) with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(0);

    let result = validator.validate({
        test: '   '
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().minimumLength(10) with string length greater than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(10);

    let result = validator.validate({
        test: 'greaterthanvaluetocompare'
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().minimumLength(10) with string length less than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(10);

    let result = validator.validate({
        test: 'test'
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().minimumLength(10) with string length equals to the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .minimumLength(10);

    let result = validator.validate({
        test: 'testtest10'
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('string().notEmpty() with null value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .notEmpty();

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().notEmpty() with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .notEmpty();

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().notEmpty() with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .notEmpty()

    let result = validator.validate({
        test: '',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().notEmpty() with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .notEmpty()

    let result = validator.validate({
        test: '   ',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('string().notEmpty() with filled string', () => {
    let validator = new ObjectValidator();

    validator
        .string('test')
        .notEmpty()

    let result = validator.validate({
        test: 'test',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});