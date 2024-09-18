// 4. extractProperties Function
// Create a function named extractProperties that accepts the following:
// •	An array of objects.
// •	A list of property names.
// The function should:
// •	Use the spread operator to create a new array of objects with only the specified properties.
// •	Return the new array of objects.

function extractProperties(objects, ...properties) {
    return objects.map(obj => {
        const newObj = {};
        properties.forEach(prop => {
            newObj[prop] = obj[prop];
        });
        return newObj;
    });
}

const people = [
    {
        name: 'John',
        age: 25,
    },
    {
        name: 'Jane',
        age: 30,
    },
    {
        name: 'Jim',
        age: 35,
    }
]

console.log(extractProperties(people, 'name'));