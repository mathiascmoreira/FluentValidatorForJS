const ObjectValidator = require('../src/ObjectValidator');

test('stringProperty().empty() with null value', () => {  
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .empty();

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().empty() with undefined value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .empty();

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().empty() with empty string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .empty()

    let result = validator.validate({
        test: '',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().empty() with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .empty()

    let result = validator.validate({
        test: '   ',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
test('stringProperty().empty() with filled string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .empty()

    let result = validator.validate({
        test: 'test',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().length(10) with null value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(10)

    let result = validator.validate({
        test: null,
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().length(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(10)

    let result = validator.validate({
        test2: null,
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
test('stringProperty().length(10) with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(10)

    let result = validator.validate({
        test: '',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
test('stringProperty().length(10) with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(10)

    let result = validator.validate({
        test: '   ',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
test('stringProperty().length(0) with null value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(0)

    let result = validator.validate({
        test: null,
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().length(0) with undefined value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(0)

    let result = validator.validate({
        test2: null,
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().length(0) with empty string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(0)

    let result = validator.validate({
        test: '',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().length(0) with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(0)

    let result = validator.validate({
        test: '   ',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
test('stringProperty().length(10) with string length greater than the value to compare', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(10)

    let result = validator.validate({
        test: 'greaterthanvaluetocompare',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().length(10) with string length less than the value to compare', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(10)

    let result = validator.validate({
        test: 'test',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().length(10) with string length equals to the value to compare', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .length(10)

    let result = validator.validate({
        test: 'testtest10',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().maximumLength(10) with null value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().maximumLength(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
test('stringProperty().maximumLength(10) with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(10);

    let result = validator.validate({
        test: ''
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
test('stringProperty().maximumLength(10) with whitespace string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(10);

    let result = validator.validate({
        test: '   '
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().maximumLength(0) with null value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().maximumLength(0) with undefined value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().maximumLength(0) with empty string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(0);

    let result = validator.validate({
        test: ''
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().maximumLength(0) with whitespace string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(0);

    let result = validator.validate({
        test: '   '
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().maximumLength(10) with string length greater than the value to compare', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(10);

    let result = validator.validate({
        test: 'greaterthanvaluetocompare'
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().maximumLength(10) with string length less than the value to compare', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(10);

    let result = validator.validate({
        test: 'test'
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().maximumLength(10) with string length equals to the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .maximumLength(10);

    let result = validator.validate({
        test: 'testtest10'
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
 test('stringProperty().minimumLength(10) with null value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(10);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().minimumLength(10) with undefined value', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(10);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
test('stringProperty().minimumLength(10) with empty string', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(10);

    let result = validator.validate({
        test: ''
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
test('stringProperty().minimumLength(10) with whitespace string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(10);

    let result = validator.validate({
        test: '   '
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().minimumLength(0) with null value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(0);

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().minimumLength(0) with undefined value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(0);

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().minimumLength(0) with empty string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(0);

    let result = validator.validate({
        test: ''
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().minimumLength(0) with whitespace string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(0);

    let result = validator.validate({
        test: '   '
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().minimumLength(10) with string length greater than the value to compare', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(10);

    let result = validator.validate({
        test: 'greaterthanvaluetocompare'
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});
test('stringProperty().minimumLength(10) with string length less than the value to compare', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(10);

    let result = validator.validate({
        test: 'test'
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().minimumLength(10) with string length equals to the value to compare', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .minimumLength(10);

    let result = validator.validate({
        test: 'testtest10'
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
 });
test('stringProperty().notEmpty() with null value', () => {  
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .notEmpty();

    let result = validator.validate({
        test: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().notEmpty() with undefined value', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .notEmpty();

    let result = validator.validate({
        test2: null
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().notEmpty() with empty string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .notEmpty()

    let result = validator.validate({
        test: '',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
});
test('stringProperty().notEmpty() with whitespace string', () => {
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .notEmpty()

    let result = validator.validate({
        test: '   ',
    });

    expect(result.isValid).toBe(false);
    expect(result.failures).toHaveLength(1);
 });
test('stringProperty().notEmpty() with filled string', () => { 
    let validator = new ObjectValidator();

    validator
        .stringProperty('test')
        .notEmpty()

    let result = validator.validate({
        test: 'test',
    });

    expect(result.isValid).toBe(true);
    expect(result.failures).toHaveLength(0);
});