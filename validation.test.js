const ObjectValidation = require('./ObjectValidator');

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
test('dateProperty().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with a null value', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: null,
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})

test('dateProperty().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with an undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test2: null,
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('dateProperty().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with a date value greater than the date to compare', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 8, 6),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('dateProperty().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with a date value less than the date to compare', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 2, 6),
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('dateProperty().greaterThenOrEqualsTo(new Date(2020, 5, 6)) with a date value equals to the date to compare', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').greaterThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 5, 6),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('dateProperty().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with null value', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('dateProperty().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('dateProperty().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value before the interval', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 4, 6),
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('dateProperty().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value after the interval', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 8, 6),
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('dateProperty().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value equals to min date', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 5, 1),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('dateProperty().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value equals to max date', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 5, 30),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('dateProperty().between(new Date(2020, 5, 1), new Date(2020, 5, 30)) with value within the interval', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test')
        .between(new Date(2020, 5, 1), new Date(2020, 5, 30));

    let result = validator.validate({
        test: new Date(2020, 5, 15),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('dateProperty().lessThenOrEqualsTo(new Date(2020, 5, 6)) with a null value', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: null,
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})

test('dateProperty().lessThenOrEqualsTo(new Date(2020, 5, 6)) with an undefined value', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test2: null,
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('dateProperty().lessThenOrEqualsTo(new Date(2020, 5, 6)) with a date value greater than the date to compare', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 8, 6),
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
})
test('dateProperty().lessThenOrEqualsTo(new Date(2020, 5, 6)) with a date value less than the date to compare', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 2, 6),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
test('dateProperty().lessThenOrEqualsTo(new Date(2020, 5, 6)) with a date value equals to the date to compare', () => {
    let validator = new ObjectValidation();

    validator
        .dateProperty('test').lessThenOrEqualsTo(new Date(2020, 5, 6))

    let result = validator.validate({
        test: new Date(2020, 5, 6),
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
})
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











    // let result = validator 
    //     .validate({
    //         name: 'Marty ',
    //         surName: 'McFly',
    //         age: 26,
    //         weight: 80
    //     });

    // expect(result.isValid).toBe(true);
    // expect(result.failures).toHaveLength(0);


// test('test some validation failures', () => {
//     let validator = new ObjectValidation();
//     validator
//         .property('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)

//     let result = validator 
//         .validate({
//             name: 'Name greater than 25 letter',
//             surName: 'C',
//             age: 17,
//             weight: null
//         });

//     expect(result.isValid).toBe(false);
//     expect(result.failures).toHaveLength(5);
// });

// test('test onlyFirstError on properties', () => {
//     let validator = new ObjectValidation();
//     validator
//         .stringProperty('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .stringProperty('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//             .onlyFirstError()    
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//             .equalsTo(20)
//             .onlyFirstError()
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)
//             .equalsTo(25);

//         let result = validator 
//             .validate({
//                 name: '',
//                 surName: '',
//                 age: 17,
//                 weight: 18
//             });

//         expect(result.isValid).toBe(false);
//         expect(result.failures).toHaveLength(5);

// });

// test('test onlyFirstError on properties and global', () => {
//     let result = new ObjectValidation()
//         .onlyFirstError()
//         .property('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//             .onlyFirstError()    
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//             .equalsTo(20)
//             .onlyFirstError()
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)
//             .equalsTo(25)
//         .validate({
//             name: '',
//             surName: '',
//             age: 17,
//             weight: 18
//         });
// });

// test('test conditions', () => {
//     let validator = new ObjectValidation();
//     validator
//         .property('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .condition(person => person.name, validator.property('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25))
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)
//         .condition(object => object.age > 30, validator.property('weight')
//             .greaterThenOrEqualTo(40)
//             .condition(object => object.weight === 70, validator.property('age')
//                 .equalsTo(35)));
// })
// test('test contexts', () => {
//     let validator = new ObjectValidation();
//     validator
//         .property('name')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('surName')
//             .notNullAndNotUndefined()
//             .notEmpty()
//             .minimumLength(2)
//             .maximumLength(25)
//         .property('age')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(18)
//             .lessThenOrEqualTo(80)
//         .property('weight')
//             .notNullAndNotUndefined()
//             .greaterThenOrEqualTo(20)
//             .lessThenOrEqualTo(150)
//         .context('include', validator
//             .nullOrUndefined()
//             .property('id'))
//         .context('update', validator
//             .property('id')
//             .notNullAndNotUndefined()
// });

//test('test custom validation', () => {})