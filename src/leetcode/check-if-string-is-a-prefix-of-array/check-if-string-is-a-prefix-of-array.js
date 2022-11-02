/**
* Leetcode #1961
* Difficulty: Easy
* https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/
*/
export const checkIfStringIsAPrefixOfArray = (s, words) => {
    let string = '';
    
    for (const word of words) {
        string += word;
        if (string.length > s.length) break;
        if (string === s) return true;
    }
    
    return false;
};