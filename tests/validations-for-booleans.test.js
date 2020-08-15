const ObjectValidator = require('../src/ObjectValidator');

test('boolean().mustBeFalse() with true value', () => {
    let validator = new ObjectValidator();

    validator.boolean('test').mustBeFalse();

    let result = validator.validate({
        test: true
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('boolean().mustBeFalse() with false value', () => {
    let validator = new ObjectValidator();

    validator.boolean('test').mustBeFalse();

    let result = validator.validate({
        test: false
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('boolean().mustBeFalse() with truthy values', () => {
    let validator = new ObjectValidator();

    validator
        .boolean('test1').mustBeFalse()
        .boolean('test2').mustBeFalse()
        .boolean('test3').mustBeFalse()
        .boolean('test4').mustBeFalse()
        .boolean('test5').mustBeFalse()
        .boolean('test6').mustBeFalse()
        .boolean('test7').mustBeFalse()
        .boolean('test8').mustBeFalse();


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
test('boolean().mustBeFalse() with falsy values', () => {
    let validator = new ObjectValidator();

    validator
        .boolean('test1').mustBeFalse()
        .boolean('test2').mustBeFalse()
        .boolean('test3').mustBeFalse()
        .boolean('test4').mustBeFalse()
        .boolean('test5').mustBeFalse()
        .boolean('test6').mustBeFalse()
        .boolean('test7').mustBeFalse()
        .boolean('test8').mustBeFalse();

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
test('boolean().mustBeFalsy() with truthy values', () => {
    let validator = new ObjectValidator();

    validator
        .boolean('test1').mustBeFalsy()
        .boolean('test2').mustBeFalsy()
        .boolean('test3').mustBeFalsy()
        .boolean('test4').mustBeFalsy()
        .boolean('test5').mustBeFalsy()
        .boolean('test6').mustBeFalsy()
        .boolean('test7').mustBeFalsy()
        .boolean('test8').mustBeFalsy()
        .boolean('test9').mustBeFalsy();

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
test('boolean().mustBeFalsy() with falsy values', () => {
    let validator = new ObjectValidator();

    validator
        .boolean('test1').mustBeFalsy()
        .boolean('test2').mustBeFalsy()
        .boolean('test3').mustBeFalsy()
        .boolean('test4').mustBeFalsy()
        .boolean('test5').mustBeFalsy()
        .boolean('test6').mustBeFalsy()
        .boolean('test7').mustBeFalsy()
        .boolean('test8').mustBeFalsy()
        .boolean('test9').mustBeFalsy();

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
test('boolean().mustBeTrue() with true value', () => {
    let validator = new ObjectValidator();

    validator.boolean('test').mustBeTrue();

    let result = validator.validate({
        test: true
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('boolean().mustBeTrue() with false value', () => {
    let validator = new ObjectValidator();

    validator.boolean('test').mustBeTrue();

    let result = validator.validate({
        test: false
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('boolean().mustBeTrue() with truthy values', () => {
    let validator = new ObjectValidator();

    validator
        .boolean('test1').mustBeTrue()
        .boolean('test2').mustBeTrue()
        .boolean('test3').mustBeTrue()
        .boolean('test4').mustBeTrue()
        .boolean('test5').mustBeTrue()
        .boolean('test6').mustBeTrue()
        .boolean('test7').mustBeTrue()
        .boolean('test8').mustBeTrue();

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
test('boolean().mustBeTrue() with falsy values', () => {
    let validator = new ObjectValidator();

    validator
        .boolean('test1').mustBeTrue()
        .boolean('test2').mustBeTrue()
        .boolean('test3').mustBeTrue()
        .boolean('test4').mustBeTrue()
        .boolean('test5').mustBeTrue()
        .boolean('test6').mustBeTrue()
        .boolean('test7').mustBeTrue()
        .boolean('test8').mustBeTrue();

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
test('boolean().mustBeTruthy() with truthy values', () => {
    let validator = new ObjectValidator();

    validator
        .boolean('test1').mustBeTruthy()
        .boolean('test2').mustBeTruthy()
        .boolean('test3').mustBeTruthy()
        .boolean('test4').mustBeTruthy()
        .boolean('test5').mustBeTruthy()
        .boolean('test6').mustBeTruthy()
        .boolean('test7').mustBeTruthy()
        .boolean('test8').mustBeTruthy()
        .boolean('test9').mustBeTruthy();

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
test('boolean().mustBeTruthy() with falsy values', () => {
    let validator = new ObjectValidator();

    validator
        .boolean('test1').mustBeTruthy()
        .boolean('test2').mustBeTruthy()
        .boolean('test3').mustBeTruthy()
        .boolean('test4').mustBeTruthy()
        .boolean('test5').mustBeTruthy()
        .boolean('test6').mustBeTruthy()
        .boolean('test7').mustBeTruthy()
        .boolean('test8').mustBeTruthy()
        .boolean('test9').mustBeTruthy();

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