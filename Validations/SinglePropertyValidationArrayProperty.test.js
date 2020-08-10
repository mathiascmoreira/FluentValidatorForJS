const ObjectValidation = require('../src/ObjectValidator');

test('arrayProperty().empty() with undefined value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').empty();

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().empty() with null value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').empty();

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().empty() with filled array', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').empty();

    let result = validator.validate({
        test: [1, 2]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().empty() with empty array', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').empty();

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().length(10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').length(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().length(10) with null value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').length(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().length(10) with filled array with less than 10 items', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').length(10);

    let result = validator.validate({
        test: [1, 2, 3]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().length(10) with filled array with more than 10 items', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').length(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 9, 9, 10, 11, 12]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().length(10) with filled array with 10 items', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').length(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 9, 9, 10]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().length(10) with empty array', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').length(10);

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().maximumLength(10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').maximumLength(10);

    let result = validator.validate({
        test2: []
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().maximumLength(10) with null value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').maximumLength(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().maximumLength(10) with filled array with more than 10 items', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').maximumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().maximumLength(10) with filled array with less than 10 items', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').maximumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().maximumLength(10) with filled array with 10 items', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').maximumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().maximumLength(10) with empty array', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').maximumLength(10);

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().minimumLength(10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').minimumLength(10);

    let result = validator.validate({
        test2: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().minimumLength(10) with null value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').minimumLength(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().minimumLength(10) with filled array with more than 10 items', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').minimumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().minimumLength(10) with filled array with less than 10 items', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').minimumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().minimumLength(10) with filled array with 10 items', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').minimumLength(10);

    let result = validator.validate({
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().minimumLength(10) with empty array', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').minimumLength(10);

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().notEmpty() with undefined value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').notEmpty();

    let result = validator.validate({
        test2: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().notEmpty() with null value', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').notEmpty();

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('arrayProperty().notEmpty() with filled array', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').notEmpty();

    let result = validator.validate({
        test: [1, 2, 3, 4]
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('arrayProperty().notEmpty() with empty array', () => {
    let validator = new ObjectValidation();

    validator.arrayProperty('test').notEmpty();

    let result = validator.validate({
        test: []
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});