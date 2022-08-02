/**
* Leetcode #1486
* Difficulty: Easy
* https://leetcode.com/problems/xor-operation-in-an-array/
*/
export const xorOperationInAnArray = (n, start) => {
	if (n === 1) return start
    let result = start ^ (start + 2); 
    for (let i = 2; i < n; i += 1) {
        result = result ^ (start + 2 * i);
    }
    return result
};