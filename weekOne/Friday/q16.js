//16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

function invertObject(obj) {
    let inverted = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}

const sampleObject = {
    name: "Alice",
    age: 30,
    city: "New York"
};

console.log(invertObject(sampleObject));