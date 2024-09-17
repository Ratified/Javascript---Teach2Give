// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
const sampleObject = {
    name: 'John Doe',
    isActive: true,
    password: 'JohnDoe1234'
}

let convertToList = (obj) => {
    return Object.entries(obj)
}

console.log(convertToList(sampleObject))