// 7. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.
function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Return empty string if the array is empty

    // Assume the first string is the common prefix initially
    let prefix = strs[0];

    // Compare the prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        // Shorten the prefix until it matches the start of the current string
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return ""; // If the prefix becomes empty, no common prefix
        }
    }

    return prefix;
}

// Example usage:
let input = ["flower", "flow", "flight"];
let result = longestCommonPrefix(input);
console.log(result);  // Output: "fl"