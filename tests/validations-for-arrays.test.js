const ObjectValidator = require('../src/ObjectValidator');

test('ensure type for array', () => {
    let validator = new ObjectValidator();

    validator.array('test1')
        .array('test2')
        .array('test3')
        .array('test4')
        .array('test5');

    let result = validator.validate({
        test1: [1, 2, 3],
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);

    result = validator.validate({
        test1: 'test',
        test2: 10,
        test3: true,
        test4: { test: 2 },
        test5: new Date()
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(5);
});
test('array().empty() with undefined value', () => {
    let validator = new ObjectValidator();

    validator.array('test').empty();

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().empty() with null value', () => {
    let validator = new ObjectValidator();

    validator.array('test').empty();

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().empty() with filled array', () => {
    let validator = new ObjectValidator();

    validator.array('test').empty();

    let result = validator.validate({
        test: [1, 2]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().empty() with empty array', () => {
    let validator = new ObjectValidator();

    validator.array('test').empty();

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().length(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator.array('test').length(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().length(10) with null value', () => {
    let validator = new ObjectValidator();

    validator.array('test').length(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().length(10) with filled array with less than 10 items', () => {
    let validator = new ObjectValidator();

    validator.array('test').length(10);

    let result = validator.validate({
        test: [1, 2, 3]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().length(10) with filled array with more than 10 items', () => {
    let validator = new ObjectValidator();

    validator.array('test').length(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 9, 9, 10, 11, 12]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().length(10) with filled array with 10 items', () => {
    let validator = new ObjectValidator();

    validator.array('test').length(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 9, 9, 10]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().length(10) with empty array', () => {
    let validator = new ObjectValidator();

    validator.array('test').length(10);

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().maximumLength(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator.array('test').maximumLength(10);

    let result = validator.validate({
        test2: []
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().maximumLength(10) with null value', () => {
    let validator = new ObjectValidator();

    validator.array('test').maximumLength(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().maximumLength(10) with filled array with more than 10 items', () => {
    let validator = new ObjectValidator();

    validator.array('test').maximumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().maximumLength(10) with filled array with less than 10 items', () => {
    let validator = new ObjectValidator();

    validator.array('test').maximumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().maximumLength(10) with filled array with 10 items', () => {
    let validator = new ObjectValidator();

    validator.array('test').maximumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().maximumLength(10) with empty array', () => {
    let validator = new ObjectValidator();

    validator.array('test').maximumLength(10);

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().minimumLength(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator.array('test').minimumLength(10);

    let result = validator.validate({
        test2: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().minimumLength(10) with null value', () => {
    let validator = new ObjectValidator();

    validator.array('test').minimumLength(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().minimumLength(10) with filled array with more than 10 items', () => {
    let validator = new ObjectValidator();

    validator.array('test').minimumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().minimumLength(10) with filled array with less than 10 items', () => {
    let validator = new ObjectValidator();

    validator.array('test').minimumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().minimumLength(10) with filled array with 10 items', () => {
    let validator = new ObjectValidator();

    validator.array('test').minimumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().minimumLength(10) with empty array', () => {
    let validator = new ObjectValidator();

    validator.array('test').minimumLength(10);

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().notEmpty() with undefined value', () => {
    let validator = new ObjectValidator();

    validator.array('test').notEmpty();

    let result = validator.validate({
        test2: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().notEmpty() with null value', () => {
    let validator = new ObjectValidator();

    validator.array('test').notEmpty();

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('array().notEmpty() with filled array', () => {
    let validator = new ObjectValidator();

    validator.array('test').notEmpty();

    let result = validator.validate({
        test: [1, 2, 3, 4]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('array().notEmpty() with empty array', () => {
    let validator = new ObjectValidator();

    validator.array('test').notEmpty();

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});