const longestPalindromicSubstring = (s) => {
    if(!s || s.length <= 1 )
        return s;

    let start = 0, maxLength = 1;
    
    const expandAroundCenter = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }

        return right - left - 1; //Length of the palindrome
    }

    for(let i = 0; i < s.length; i++){
        let len1 = expandAroundCenter(i, i) // Odd length palindrome
        let len2 = expandAroundCenter(i, i+1) // Even length palindrome

        let len = Math.max(len1, len2)

        if(len > maxLength){
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
}
const input = "babad";
console.log(longestPalindromicSubstring(input))