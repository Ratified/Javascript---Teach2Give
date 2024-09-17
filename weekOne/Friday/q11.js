// 11. Write a JavaScript function to print all the methods in a JavaScript object.
function allMethods(obj){
    let methods = [];

    let propertyNames = Object.getOwnPropertyNames(obj)

    propertyNames.forEach(property => {
        if(typeof obj[property] === 'function'){
            methods.push(property)
        }
    })

    return methods;
}

console.log(allMethods(Array))