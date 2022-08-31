/**
* Leetcode #2108
* Difficulty: Easy
* https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
*/
// export const findFirstPalindromicStringInTheArray = words => {
//     for (const word of words) {
//         if (word === word.split('').reverse().join('')) {
//             return word;
//         }
//     }
    
//     return '';
// };

export const findFirstPalindromicStringInTheArray  = words => {
    const isPalindrome = word => {
        for (let i = 0, j = word.length - 1; i < j; i++, j--) {
          if (word[i] !== word[j]) {
            return false;
          }
        }
        return true;
    }
    
    for (const word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    
    return '';
};