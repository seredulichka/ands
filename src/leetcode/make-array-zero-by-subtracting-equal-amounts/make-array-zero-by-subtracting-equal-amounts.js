/**
* Leetcode #2375
* Difficulty: Easy
* https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
*/
export const makeArrayZeroBySubtractingEqualAmounts = nums => {
    nums.sort((a, b) => a - b)
    let result = 0;
    let x = 0;
    
    for (const num of nums) {
        if (num - x !== 0) {
            x += num - x;
            result += 1;
        }
    }
    
    return result;
};