// 17. Write a JavaScript function to check whether an object contains a given property.

function containsProperty(obj, prop){
    if(obj.hasOwnProperty(prop)){
        return true;
    } else {
        return false;
    }
}

const sampleObject = {
    name: 'George',
    age: 35,
    address: 'Nairobi'
}

console.log(containsProperty(sampleObject, 'name')) //Outputs true
console.log(containsProperty(sampleObject, 'audition')) // Outputs false