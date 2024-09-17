// Question 3: Write a JavaScript program to get the length of a JavaScript object.
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

let keys = Object.keys(student).length;
console.log(`The length of the object is ${keys}`);