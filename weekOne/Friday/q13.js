// 13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
function getAllPropertyNames(obj) {
    let propertyNames = new Set();
    
    for (let prop in obj) {
        propertyNames.add(prop);
    }
    
    return Array.from(propertyNames);
}

function Parent() {
    this.parentProp = 'parent';
}
Parent.prototype.inheritedProp = 'inherited';

function Child() {
    this.childProp = 'child';
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const childInstance = new Child();
console.log(getAllPropertyNames(childInstance));