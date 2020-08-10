const ObjectValidation = require('../src/ObjectValidator');

test('booleanProperty().mustBeFalse() with true value', () => {
    let validator = new ObjectValidation();

    validator.booleanProperty('test').mustBeFalse();

    let result = validator.validate({
        test: true
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('booleanProperty().mustBeFalse() with false value', () => {
    let validator = new ObjectValidation();

    validator.booleanProperty('test').mustBeFalse();

    let result = validator.validate({
        test: false
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('booleanProperty().mustBeFalse() with truthy values', () => {
    let validator = new ObjectValidation();

    validator
        .booleanProperty('test1').mustBeFalse()
        .booleanProperty('test2').mustBeFalse()
        .booleanProperty('test3').mustBeFalse()
        .booleanProperty('test4').mustBeFalse()
        .booleanProperty('test5').mustBeFalse()
        .booleanProperty('test6').mustBeFalse()
        .booleanProperty('test7').mustBeFalse()
        .booleanProperty('test8').mustBeFalse();


    let result = validator.validate({
        test1: 2,
        test2: -2,
        test3: [],
        test4: 'filled string',
        test5: "filled string",
        test6: `filled string ${2}`,
        test7: {},
        test8: {
            test: 2
        }
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(8);
});
test('booleanProperty().mustBeFalse() with falsy values', () => {
    let validator = new ObjectValidation();

    validator
        .booleanProperty('test1').mustBeFalse()
        .booleanProperty('test2').mustBeFalse()
        .booleanProperty('test3').mustBeFalse()
        .booleanProperty('test4').mustBeFalse()
        .booleanProperty('test5').mustBeFalse()
        .booleanProperty('test6').mustBeFalse()
        .booleanProperty('test7').mustBeFalse()
        .booleanProperty('test8').mustBeFalse();

    let result = validator.validate({
        test1: +0,
        test2: -0,
        test3: NaN,
        test4: '',
        test5: "",
        test6: ``,
        test7: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(8);
});
test('booleanProperty().mustBeFalsy() with truthy values', () => {
    let validator = new ObjectValidation();

    validator
        .booleanProperty('test1').mustBeFalsy()
        .booleanProperty('test2').mustBeFalsy()
        .booleanProperty('test3').mustBeFalsy()
        .booleanProperty('test4').mustBeFalsy()
        .booleanProperty('test5').mustBeFalsy()
        .booleanProperty('test6').mustBeFalsy()
        .booleanProperty('test7').mustBeFalsy()
        .booleanProperty('test8').mustBeFalsy()
        .booleanProperty('test9').mustBeFalsy();

    let result = validator.validate({
        test1: true,
        test2: 2,
        test3: -2,
        test4: [],
        test5: 'filled string',
        test6: "filled string",
        test7: `filled string ${2}`,
        test8: {},
        test9: {
            test: 2
        },
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(9);
});
test('booleanProperty().mustBeFalsy() with falsy values', () => {
    let validator = new ObjectValidation();

    validator
        .booleanProperty('test1').mustBeFalsy()
        .booleanProperty('test2').mustBeFalsy()
        .booleanProperty('test3').mustBeFalsy()
        .booleanProperty('test4').mustBeFalsy()
        .booleanProperty('test5').mustBeFalsy()
        .booleanProperty('test6').mustBeFalsy()
        .booleanProperty('test7').mustBeFalsy()
        .booleanProperty('test8').mustBeFalsy()
        .booleanProperty('test9').mustBeFalsy();

    let result = validator.validate({
        test1: false,
        test2: +0,
        test3: -0,
        test4: NaN,
        test5: '',
        test6: "",
        test7: ``,
        test8: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('booleanProperty().mustBeTrue() with true value', () => {
    let validator = new ObjectValidation();

    validator.booleanProperty('test').mustBeTrue();

    let result = validator.validate({
        test: true
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('booleanProperty().mustBeTrue() with false value', () => {
    let validator = new ObjectValidation();

    validator.booleanProperty('test').mustBeTrue();

    let result = validator.validate({
        test: false
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('booleanProperty().mustBeTrue() with truthy values', () => {
    let validator = new ObjectValidation();

    validator
        .booleanProperty('test1').mustBeTrue()
        .booleanProperty('test2').mustBeTrue()
        .booleanProperty('test3').mustBeTrue()
        .booleanProperty('test4').mustBeTrue()
        .booleanProperty('test5').mustBeTrue()
        .booleanProperty('test6').mustBeTrue()
        .booleanProperty('test7').mustBeTrue()
        .booleanProperty('test8').mustBeTrue();

    let result = validator.validate({
        test1: 2,
        test2: -2,
        test3: [],
        test4: 'filled string',
        test5: "filled string",
        test6: `filled string ${2}`,
        test7: {},
        test8: {
            test: 2
        }
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(8);
});
test('booleanProperty().mustBeTrue() with falsy values', () => {
    let validator = new ObjectValidation();

    validator
        .booleanProperty('test1').mustBeTrue()
        .booleanProperty('test2').mustBeTrue()
        .booleanProperty('test3').mustBeTrue()
        .booleanProperty('test4').mustBeTrue()
        .booleanProperty('test5').mustBeTrue()
        .booleanProperty('test6').mustBeTrue()
        .booleanProperty('test7').mustBeTrue()
        .booleanProperty('test8').mustBeTrue();

    let result = validator.validate({
        test1: +0,
        test2: -0,
        test3: NaN,
        test4: '',
        test5: "",
        test6: ``,
        test7: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(8);
});
test('booleanProperty().mustBeTruthy() with truthy values', () => {
    let validator = new ObjectValidation();

    validator
        .booleanProperty('test1').mustBeTruthy()
        .booleanProperty('test2').mustBeTruthy()
        .booleanProperty('test3').mustBeTruthy()
        .booleanProperty('test4').mustBeTruthy()
        .booleanProperty('test5').mustBeTruthy()
        .booleanProperty('test6').mustBeTruthy()
        .booleanProperty('test7').mustBeTruthy()
        .booleanProperty('test8').mustBeTruthy()
        .booleanProperty('test9').mustBeTruthy();

    let result = validator.validate({
        test1: true,
        test2: 2,
        test3: -2,
        test4: [],
        test5: 'filled string',
        test6: "filled string",
        test7: `filled string ${2}`,
        test8: {},
        test9: {
            test: 2
        },
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('booleanProperty().mustBeTruthy() with falsy values', () => {
    let validator = new ObjectValidation();

    validator
        .booleanProperty('test1').mustBeTruthy()
        .booleanProperty('test2').mustBeTruthy()
        .booleanProperty('test3').mustBeTruthy()
        .booleanProperty('test4').mustBeTruthy()
        .booleanProperty('test5').mustBeTruthy()
        .booleanProperty('test6').mustBeTruthy()
        .booleanProperty('test7').mustBeTruthy()
        .booleanProperty('test8').mustBeTruthy()
        .booleanProperty('test9').mustBeTruthy();

    let result = validator.validate({
        test1: false,
        test2: +0,
        test3: -0,
        test4: NaN,
        test5: '',
        test6: "",
        test7: ``,
        test8: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(9);
});