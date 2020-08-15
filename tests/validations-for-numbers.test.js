const ObjectValidator = require('../src/ObjectValidator');

test('ensure type for Number', () => {
    let validator = new ObjectValidator();

    validator.number('test1')
        .number('test2')
        .number('test3')
        .number('test4')
        .number('test5');

    let result = validator.validate({
        test1: 10,
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);

    result = validator.validate({
        test1: 'test',
        test2: new Date(),
        test3: true,
        test4: { test: 2 },
        test5: [1, 2, 3]
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(5);
});
test('number().exclusiveBetween(10, 20) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().exclusiveBetween(0, 20) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(0, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().exclusiveBetween(-10, 20) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(-10, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().exclusiveBetween(10, 20) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().exclusiveBetween(0, 20) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(0, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().exclusiveBetween(-10, 20) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(-10, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().exclusiveBetween(10, 20) with value after the interval', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 25
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().exclusiveBetween(10, 20) with value before the interval', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().exclusiveBetween(10, 20) with value equals to min number', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().exclusiveBetween(10, 20) with value equals to max number', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 20
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().exclusiveBetween(10, 20) with value within the interval', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().greaterThen(10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThen(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().greaterThen(0) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThen(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().greaterThen(-10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThen(-10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().greaterThen(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThen(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().greaterThen(0) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThen(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().greaterThen(-10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThen(-10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().greaterThen(10) with value greater than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThen(10);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().greaterThen(10) with value less than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThen(10);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().greaterThen(10) with value equals to the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThen(10);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().greaterThenOrEqualsTo(10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().greaterThenOrEqualsTo(0) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThenOrEqualsTo(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().greaterThenOrEqualsTo(-10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThenOrEqualsTo(-10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().greaterThenOrEqualsTo(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().greaterThenOrEqualsTo(0) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThenOrEqualsTo(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().greaterThenOrEqualsTo(-10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThenOrEqualsTo(-10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().greaterThenOrEqualsTo(10) with value greater than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().greaterThenOrEqualsTo(10) with value less than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().greaterThenOrEqualsTo(10) with value equals to the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().inclusiveBetween(10, 20) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().inclusiveBetween(0, 20) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(0, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().inclusiveBetween(-10, 20) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(-10, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().inclusiveBetween(10, 20) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().inclusiveBetween(0, 20) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(0, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().inclusiveBetween(-10, 20) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(-10, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().inclusiveBetween(10, 20) with value after the interval', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 25
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().inclusiveBetween(10, 20) with value before the interval', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().inclusiveBetween(10, 20) with value equals to min number', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().inclusiveBetween(10, 20) with value equals to max number', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 20
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().inclusiveBetween(10, 20) with value within the interval', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().lessThen(10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThen(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().lessThen(0) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThen(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().lessThen(-10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThen(-10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().lessThen(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThen(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().lessThen(0) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThen(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().lessThen(-10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThen(-10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().lessThen(10) with value greater than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThen(10);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().lessThen(10) with value less than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThen(10);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().lessThen(10) with value equals to the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThen(10);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().lessThenOrEqualsTo(10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().lessThenOrEqualsTo(0) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThenOrEqualsTo(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().lessThenOrEqualsTo(-10) with null value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThenOrEqualsTo(-10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().lessThenOrEqualsTo(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().lessThenOrEqualsTo(0) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThenOrEqualsTo(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().lessThenOrEqualsTo(-10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThenOrEqualsTo(-10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().lessThenOrEqualsTo(10) with value greater than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('number().lessThenOrEqualsTo(10) with value less than the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('number().lessThenOrEqualsTo(10) with value equals to the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .number('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});