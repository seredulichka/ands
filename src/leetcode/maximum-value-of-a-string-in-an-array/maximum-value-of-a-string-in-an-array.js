/**
* Leetcode #2496
* Difficulty: Easy
* https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
*/
export const maximumValueOfAStringInAnArray = strs => {
    let result = -Infinity;

    for (const str of strs) {
        result = Math.max(result, isNaN(+str) ? str.length : +str)
    }

    return result;
};