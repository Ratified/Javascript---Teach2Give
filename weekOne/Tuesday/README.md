# Practice Theory Questions
**1.DATA TYPES AND VARIABLES:**

***What are the different data types used in JavaScript variables in the provided code?** 
> Primitive data types: Integer, String, Boolean, Null, Undefined, BigInt
> Reference data types: Objects, Arrays, and Function

***Explain the difference between var, let, and const in JavaScript.**
> var: Function-scoped and can be reassigned.
> let: Block-scoped and can be reassigned.
> const: Block-scoped and can't be reassigned

***Why does JavaScript allow assigning different data types to the same variable?**
> Javascript is dynamically typed thus a variable can hold a certain data and still be able to switch during runtimes without explicit type declaration.

***How does JavaScript handle variables declared but not initialized? Illustrate with an example from the code.**
>  Variables declared but not assigned hold the value undefined
```javascript
    let user;
    console.log('user') //undefined 
```

***Discuss the significance of variable names in programming and how they are used in JavaScript.**
> Variable names provide a way to reference stored data. It also makes the code cleaner and robust because if you had to change the instance of that variable to another value you'd just change the part you defined your variable name and the value.

**2. Numeric Data Types:**

***What are the various numeric data types used in JavaScript**
> Integer
> Float 
> Double

***Discuss the difference between declaring strings with single quotes ('') and double quotes ("") in JavaScript.**
> There is no difference between declaring strings with single quotes and double quotes in javascript.

***Explain why characters are automatically treated as strings in JavaScript.**
> Javascript treats characters as strings because there's no specific **char** data type
```javascript
    let char = 'A'; //This is a string by default in javascript
```

**3. Boolean and Undefined Data Types:**

***Explain the purpose of boolean variables in JavaScript.**
> Booleans represent logical true or false values, used in conditional logic and control flow

***Discuss the concept of undefined in JavaScript variables and provide examples from the code.**
> Undefined variables in Javascript are variables that have already been declared but have not been assigned any value
```javascript
    let user;
    console.log(user) //Undefined
```

***How are boolean variables useful in conditional statements and control flow in JavaScript?**
```javascript
    let isLoggedIn = true;
    if (isLoggedIn) {
        console.log("Welcome!");
    }
```

**4. Null Data Type**
> null is an intentional absence of value. It indicates that a variable has no value

***Differentiate between null and undefined in JavaScript.**
> null is an assignment value(it can explicitly be set by the programmer), while undefined is the default value for variables whose value has been declared but they have already been declared.

***Provide an example from the code illustrating the use of null.**
```javascript
    let z = null;
    console.log(z) 
```

**5. Object Data Type:**

***Explain how objects are represented in JavaScript.**
> Objects are collections of key-value pairs
```javascript
    let person = {
        name: 'George',
        address: 'Nairobi, Kenya'
    };
```

***How can objects be nested within other objects in JavaScript?**
>> By just defining an object within that object. Below is an example:
```javascript
    let person = {
        name: 'George',
        address: 'Nairobi, Kenya',
        details: {
            email: 'example@email.com',
            phoneNumber: '+2541234567'
        }
    }
```

**6. Array Data Type**

***Describe the purpose and structure of arrays in JavaScript.**
> Arrays can hold a collection of values which can be referenced by indexing
```javascript
    let names = ['George', 'Bush']; //holds a collection of two values and is declared with squared brackets
```

***Discuss the concept of "array of arrays" and its significance.**
> An array of arrays refers to an array where each element is itself an array. Arrays of arrays are useful for structuring data that naturally fits into rows and columns, such as tables, grids, and matrices. This is particularly important in programming areas like game development, data processing, and scientific computations.

```javascript
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
```

**7. Variable Naming Conventions**

***What are the conventions for naming variables in JavaScript?**
> camelCase convention: starting with a small letter and incase you want to include another name, you start that other name with a capital letter e.g: firstName
> using doubled underscores: any time you want to add another name to your already existing variable name, you place double underscores between the two names e.g first__name

***Discuss the importance of choosing meaningful and descriptive variable names.**
> This ensures that your code remains clear and readable to others.

**8. Constants in Javascript**

***Explain the use of const keyword in JavaScript.**
> It is used to declare functions whose values can never be reassigned after initialization

***Discuss why reassigning a value to a constant variable results in an error.**
> Constants must maintain the values they had during declaration, the const key word does not allow reassigning of that variable once declared.