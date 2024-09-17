// 5. Remove Duplicates from a String
// Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.

function removeDuplicates(str) {
    let uniqueStr = '';
    let seen = new Set();

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            uniqueStr += char;
        }
    }

    return uniqueStr;
}

let input = "programming";
let result = removeDuplicates(input);
console.log(result);