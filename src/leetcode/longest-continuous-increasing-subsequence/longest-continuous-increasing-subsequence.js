/**
* Leetcode #674
* Difficulty: Easy
* https://leetcode.com/problems/longest-continuous-increasing-subsequence/
*/
export const longestContinuousIncreasingSubsequence = nums => {
    let last = -Infinity;
    let max = 0;
    let length = 0;
    
    for (const num of nums) {
        if (num > last) {
            length += 1;
        } else {
            max = Math.max(max, length);
            length = 1;
        }
        last = num;
    }
    
    return Math.max(max, length);
};