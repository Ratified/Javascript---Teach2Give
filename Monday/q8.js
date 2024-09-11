// 8. Case Insensitive Palindrome
// Modify the palindrome function to be case insensitive, meaning it should ignore upper and lower case differences when checking for a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase to ignore case differences
    str = str.toLowerCase();

    // Use two-pointer technique to check if the string is a palindrome
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // If characters don't match, it's not a palindrome
        }
        left++;
        right--;
    }

    return true; // If all characters match, it's a palindrome
}

// Example usage:
let input = "Madam";
let result = isPalindrome(input);
console.log(result);  // Output: true