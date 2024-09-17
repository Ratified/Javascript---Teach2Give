//14. Write a JavaScript function to retrieve all the values of an object's properties.
let person = {
    name: 'George',
    stack: 'PHP-Laravel',
    skill: 'Communication'
}

let retrieveObjectProperties = (obj) => {
    const objectValuesArray = Object.values(obj)
    objectValuesArray.forEach(value => {
        console.log(value)
    })
}

retrieveObjectProperties(person)