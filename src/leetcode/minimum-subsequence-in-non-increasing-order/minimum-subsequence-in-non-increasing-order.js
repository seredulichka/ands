/**
* Leetcode #1403
* Difficulty: Easy
* https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
*/
export const minimumSubsequenceInNonIncreasingOrder = nums => {
    const summ = nums.reduce((acc, curr) => acc + curr, 0);
    
    let result = [];
    let summSubArray = 0; 
    
    nums.sort((a, b) => b - a);
    
    for (const num of nums) {
        result.push(num);
        summSubArray += num;
        if (summSubArray > summ - summSubArray) break;
    }
    
    return result;
};