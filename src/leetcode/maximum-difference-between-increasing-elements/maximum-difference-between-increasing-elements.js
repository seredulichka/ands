/**
* Leetcode #2016
* Difficulty: Easy
* https://leetcode.com/problems/maximum-difference-between-increasing-elements/
*/
export const maximumDifferenceBetweenIncreasingElements = nums => {
    let max = null;
    let min = Infinity;
    
    for (let i = 0; i < nums.length; i += 1) {
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i] - min);
    }
    
    return max || -1;
};

// export const maximumDifferenceBetweenIncreasingElements = nums => {
//     let max = null;
    
//     for (let i = 0; i < nums.length; i += 1) {
//         for (let j = i + 1; j < nums.length; j += 1) {
//             max = Math.max(max,  nums[j] - nums[i]);
//         }
//     }
    
//     return max || -1;
// };