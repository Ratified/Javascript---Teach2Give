// : mergeObjects Function: Create a function called mergeObjects that accepts an indefinite number of objects. The function should:
// 1.	Use the spread operator to merge all objects into one.
// 2.	Ensure that if multiple objects contain the same key, the last object's value for that key should be used.
// 3.	Return the merged object.

function mergeObjects(...objects){
    return objects.reduce((prevObject, currentObject) => {
        return {...prevObject, ...currentObject}
    }, {});
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 4, c: 3 };
const obj3 = { c: 6, d: 5 };

console.log(mergeObjects(obj1, obj2, obj3));
// console.log({ ...obj1, ...obj2, ...obj3 });