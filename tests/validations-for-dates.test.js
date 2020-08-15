const ObjectValidator = require('../src/ObjectValidator');

test('ensure type for Date', () => {
    let validator = new ObjectValidator();

    validator.date('test1')
        .date('test2')
        .date('test3')
        .date('test4')
        .date('test5');

    let result = validator.validate({
        test1: new Date(),
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);

    result = validator.validate({
        test1: 'test',
        test2: 10,
        test3: true,
        test4: { test: 2 },
        test5: [1, 2, 3]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(5);
});
test('date().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with a null value', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: null,
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})

test('date().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with an undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test2: null,
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('date().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with a date value greater than the date to compare', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 8, 6),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('date().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with a date value less than the date to compare', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 2, 6),
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('date().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with a date value equals to the date to compare', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 5, 6),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('date().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .date('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('date().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .date('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('date().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value before the interval', () => {
    let validator = new ObjectValidator();

    validator
        .date('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 4, 6),
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('date().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value after the interval', () => {
    let validator = new ObjectValidator();

    validator
        .date('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 8, 6),
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('date().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value equals to min date', () => {
    let validator = new ObjectValidator();

    validator
        .date('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 5, 1),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('date().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value equals to max date', () => {
    let validator = new ObjectValidator();

    validator
        .date('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 5, 30),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('date().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value within the interval', () => {
    let validator = new ObjectValidator();

    validator
        .date('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 5, 15),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('date().lessThenOrEqualsTo(new Date(2020, 5, 6)) with a null value', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: null,
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})

test('date().lessThenOrEqualsTo(new Date(2020, 5, 6)) with an undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test2: null,
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('date().lessThenOrEqualsTo(new Date(2020, 5, 6)) with a date value greater than the date to compare', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 8, 6),
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('date().lessThenOrEqualsTo(new Date(2020, 5, 6)) with a date value less than the date to compare', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 2, 6),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('date().lessThenOrEqualsTo(new Date(2020, 5, 6)) with a date value equals to the date to compare', () => {
    let validator = new ObjectValidator();

    validator
        .date('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 5, 6),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})