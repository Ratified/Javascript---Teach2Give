// 7. Write a JavaScript program that returns a subset of a string. 
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const getSubstrings = (str) => {
    let substrings = [];

    for(let i = 0; i <= str.length; i++){
        for(let j = i + 1; j <= str.length; j++){
            substrings.push(str.slice(i, j));
        }
    }

    return substrings;
}

let sampleString = "dog";
let substrings = getSubstrings(sampleString);
console.log(substrings);