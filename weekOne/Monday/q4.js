// Check if Two Strings are Anagrams
// Write a function to check if two given strings are anagrams of each other. Two strings are anagrams if they contain the same characters in the same frequency but in different orders.

const areAnagrams = (str1, str2) => {
    // Remove non-alphabetic characters and convert both strings to lowercase
    const cleanStr1 = str1.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // If the cleaned strings don't have the same length, they can't be anagrams
    if (cleanStr1.length !== cleanStr2.length) return false;
    
    // Sort the characters in both strings and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    console.log(sortedStr1, sortedStr2)

    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams('Hello', 'World'));   
console.log(areAnagrams('Listen', 'Silent')); 