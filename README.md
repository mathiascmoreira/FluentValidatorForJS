# FluentValidatorForJS

It's a simple, customizable and very easy-to-use JavaScript library for performing object validations using chained methods.

## Get Started

### Simple Validations

```js
let validator = new ObjectValidator();

validator
  .boolean('booleanPropertyName')
    .mustBeFalse()
  .array('arrayPropertyName')
    .notEmpty()
    .minimumLength(5)
    .maximumLength(30)
  .number('numberPropertyName')
    .greaterThen(5)
    .lessThen(100);
    
let result = validator.validate(objectToValidate);

console.log(result.isValid);
console.log(result.failures);
```

### Custom Failure Messages
You can customize the failure message for each validation method

```js
let validator = new ObjectValidator();

validator
  .boolean('active')
    .mustBeTrue('Account must be active')  
  .number('age')
    .greaterThen(18, 'Applicant must be at least 18 years old')
    
let result = validator.validate(objectToValidate);

console.log(result.isValid);
console.log(result.failures);
```

### Only First Failure
You have the option of getting only the first failure. In this case, only the failures of the first property that have failures will be considered.

```js
let validator = new ObjectValidator();

validator
  .onlyFirstFailure() //Globally
  .boolean('booleanPropertyName')
    .mustBeFalse()
  .array('arrayPropertyName')
    .notEmpty()
    .minimumLength(5)
    .maximumLength(30)
  .number('numberPropertyName')
    .greaterThen(5)
    .lessThen(100);    
```

You can use the onlyFirstFailure method from a property level. In this case, only the first failure from that property will be considered.

```js
let validator = new ObjectValidator();

validator  
  .boolean('booleanPropertyName')
    .mustBeFalse()
  .array('arrayPropertyName')
    .onlyFirstFailure() //Property level
    .notEmpty()
    .minimumLength(5)
    .maximumLength(30)
  .number('numberPropertyName')
    .greaterThen(5)
    .lessThen(100);    
```
### Conditions
You can use conditions for some validations.

```js
let validator = new ObjectValidator();

validator
  .condition(object => object.age > 60, () => validator
    .boolean('vaccinated')
    .mustBeTrue())
  .number('age')
    .greaterThen(18);  

```

If the **age** property is greater than 60, the **vaccinated** property must be true.

### Contexts
You can use contexts to make sets of validations.

```js
let validator = new ObjectValidator();

validator
  .context('CONTEXT_NAME', () => validator
    .string('stringPropertyName')
      .notEmpty()      
      .maximumLength(25))
  .string('stringPropertyName')
    .notEmpty()
    .maximumLength(25)
  
 //Only validations OUT OF 'CONTEXT_NAME' will be considered.
 let noContext = validator
  .validate(objectToValidate); 
 
 //Only validations INSIDE 'CONTEXT_NAME' will be considered.
 let onlyContext = 
  validator.validate(objectToValidate, ['CONTEXT_NAME']); 


 //ALL validations will be considered.
 let allValidations = 
  validator.validate(objectToValidate, ['', 'CONTEXT_NAME']); 
    
```






