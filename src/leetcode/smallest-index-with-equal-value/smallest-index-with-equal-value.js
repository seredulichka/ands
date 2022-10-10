/**
* Leetcode #2057
* Difficulty: Easy
* https://leetcode.com/problems/smallest-index-with-equal-value/
*/
export const smallestIndexWithEqualValue = nums => {
    for (let i = 0; i < nums.length; i += 1) {
        if (i % 10 === nums[i]) return i;
    }
    
    return -1;
};