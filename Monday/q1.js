// 1. Check if a String is a Palindrome
// Write a function to determine if a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).

const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))

// const sentence = 'Hello World';
// const cleanedSentence = sentence.toLowerCase().replace(/[^a-z0-9]/g, '')
// const str = cleanedSentence.split('')
// // console.log(str)
// console.log(str.reverse().join(''))