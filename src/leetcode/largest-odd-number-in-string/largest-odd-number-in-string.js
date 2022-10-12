/**
* Leetcode #1903
* Difficulty: Easy
* https://leetcode.com/problems/largest-odd-number-in-string/
*/
export const largestOddNumberInString = num => {
    for (let i = num.length - 1; i >= 0; i -= 1) {
        if (+num[i] % 2 !== 0) return num.slice(0, i + 1);
    }
    
    return '';
};