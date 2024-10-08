# JAVASCRIPT FUNCTIONS

**1. Write a JavaScript program to list the properties of a JavaScript object.**

Sample object:

```javascript
    var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
```
__Sample Output__: **name,sclass,rollno**

**2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.**

Sample object:

```javascript
    var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
```

**3. Write a JavaScript program to get the length of a JavaScript object.**

Sample object :

```javascript
    var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
``` 

**4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.** 

```javascript
    var library = [ 
       {
           author: 'Bill Gates',
           title: 'The Road Ahead',
           readingStatus: true
       },
       {
           author: 'Steve Jobs',
           title: 'Walter Isaacson',
           readingStatus: true
       },
       {
           author: 'Suzanne Collins',
           title:  'Mockingjay: The Final Book of The Hunger Games', 
           readingStatus: false
       }
    ];
```

**7. Write a JavaScript program that returns a subset of a string.**

> **Sample Data: dog**
>> **Expected Output: ["d", "do", "dog", "o", "og", "g"]**

**10. Write a JavaScript program to sort an array of JavaScript objects.**

Sample Object :

```javascript
    var library = [ 
       {
           title:  'The Road Ahead',
           author: 'Bill Gates',
           libraryID: 1254
       },
       {
           title: 'Walter Isaacson',
           author: 'Steve Jobs',
           libraryID: 4264
       },
       {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       }
    ];
```

Expected Output:

```javascript
    [[object Object] {
      author: "Walter Isaacson",
      libraryID: 4264,
      title: "Steve Jobs"
    }, [object Object] {
      author: "Suzanne Collins",
      libraryID: 3245,
      title: "Mockingjay: The Final Book of The Hunger Games"
    }, [object Object] {
      author: "The Road Ahead",
      libraryID: 1254,
      title: "Bill Gates"
    }]
```

**11. Write a JavaScript function to print all the methods in a JavaScript object.**

Test Data :

```javascript
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
```

**12. Write a JavaScript function to parse an URL.**
**13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.**
**14. Write a JavaScript function to retrieve all the values of an object's properties.**
**15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.**
**16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.**
**17. Write a JavaScript function to check whether an object contains a given property.**