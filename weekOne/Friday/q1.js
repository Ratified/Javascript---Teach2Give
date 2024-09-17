//1. Write a JavaScript program to list the properties of a JavaScript object.

let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

let keys = Object.keys(student);
keys.forEach((key) => {
    console.log(key);
})


// Just for learning purposes
let values = Object.values(student)
values.forEach(value => console.log(value))

// Use Object.values(obj) when you need to access the values of an object's properties. Please note that Object.values returns an array of those values

let entries = Object.entries(student)
entries.forEach(entry => (console.log(entry)))
// Use Object.entries(obj) This provides both keys and values, which is useful for situations where you need both the property names and their corresponding values. It’s particularly handy when you need to loop through both keys and values simultaneously.