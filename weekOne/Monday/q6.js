// 6. Count Palindromes in a String
// Write a function to count how many distinct palindromes are in a given string. A palindrome is considered distinct based on its start and end position in the string.

function countPalindromes(str) {
    let palindromes = new Set(); // To store distinct palindromes

    // Function to expand around the center and check for palindromes
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            palindromes.add(str.substring(left, right + 1)); // Add the palindrome substring
            left--;
            right++;
        }
    }

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Odd-length palindromes
        expandAroundCenter(i, i);
        // Even-length palindromes
        expandAroundCenter(i, i + 1);
    }

    return palindromes.size;
}

// Example usage:
let input = "ababa";
let result = countPalindromes(input);
console.log(result);  // Output: 5 (distinct palindromes are: "a", "b", "aba", "bab", "ababa")
