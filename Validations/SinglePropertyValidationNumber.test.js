const ObjectValidation = require('../src/ObjectValidator');

test('numberProperty().exclusiveBetween(10, 20) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().exclusiveBetween(0, 20) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(0, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().exclusiveBetween(-10, 20) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(-10, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().exclusiveBetween(10, 20) with undefined value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().exclusiveBetween(0, 20) with undefined value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(0, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().exclusiveBetween(-10, 20) with undefined value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(-10, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().exclusiveBetween(10, 20) with value after the interval', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 25
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().exclusiveBetween(10, 20) with value before the interval', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().exclusiveBetween(10, 20) with value equals to min number', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().exclusiveBetween(10, 20) with value equals to max number', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 20
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().exclusiveBetween(10, 20) with value within the interval', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .exclusiveBetween(10, 20);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().greaterThen(10) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThen(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().greaterThen(0) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThen(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().greaterThen(-10) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThen(-10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().greaterThen(10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThen(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
 test('numberProperty().greaterThen(0) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThen(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
 test('numberProperty().greaterThen(-10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThen(-10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
test('numberProperty().greaterThen(10) with value greater than the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThen(10);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().greaterThen(10) with value less than the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThen(10);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().greaterThen(10) with value equals to the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThen(10);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().greaterThenOrEqualsTo(10) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().greaterThenOrEqualsTo(0) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThenOrEqualsTo(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().greaterThenOrEqualsTo(-10) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThenOrEqualsTo(-10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().greaterThenOrEqualsTo(10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
 test('numberProperty().greaterThenOrEqualsTo(0) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThenOrEqualsTo(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
 test('numberProperty().greaterThenOrEqualsTo(-10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThenOrEqualsTo(-10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
test('numberProperty().greaterThenOrEqualsTo(10) with value greater than the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().greaterThenOrEqualsTo(10) with value less than the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().greaterThenOrEqualsTo(10) with value equals to the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .greaterThenOrEqualsTo(10);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().inclusiveBetween(10, 20) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().inclusiveBetween(0, 20) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(0, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().inclusiveBetween(-10, 20) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(-10, 20);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().inclusiveBetween(10, 20) with undefined value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().inclusiveBetween(0, 20) with undefined value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(0, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().inclusiveBetween(-10, 20) with undefined value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(-10, 20);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().inclusiveBetween(10, 20) with value after the interval', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 25
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().inclusiveBetween(10, 20) with value before the interval', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().inclusiveBetween(10, 20) with value equals to min number', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().inclusiveBetween(10, 20) with value equals to max number', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 20
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().inclusiveBetween(10, 20) with value within the interval', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .inclusiveBetween(10, 20);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().lessThen(10) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThen(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().lessThen(0) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThen(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().lessThen(-10) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThen(-10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().lessThen(10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThen(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
 test('numberProperty().lessThen(0) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThen(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
 test('numberProperty().lessThen(-10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThen(-10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
test('numberProperty().lessThen(10) with value greater than the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThen(10);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().lessThen(10) with value less than the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThen(10);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().lessThen(10) with value equals to the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThen(10);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().lessThenOrEqualsTo(10) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().lessThenOrEqualsTo(0) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThenOrEqualsTo(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().lessThenOrEqualsTo(-10) with null value', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThenOrEqualsTo(-10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().lessThenOrEqualsTo(10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
 test('numberProperty().lessThenOrEqualsTo(0) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThenOrEqualsTo(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
 test('numberProperty().lessThenOrEqualsTo(-10) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThenOrEqualsTo(-10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
test('numberProperty().lessThenOrEqualsTo(10) with value greater than the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test: 15
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('numberProperty().lessThenOrEqualsTo(10) with value less than the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test: 5
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('numberProperty().lessThenOrEqualsTo(10) with value equals to the value to compare', () => { 
    let validator = new ObjectValidation();

    validator
        .numberProperty('test')
        .lessThenOrEqualsTo(10);

    let result = validator.validate({
        test: 10
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});