/**
* Leetcode #561
* Difficulty: Easy
* https://leetcode.com/problems/array-partition/
*/
export const arrayPartition = nums => {
    nums.sort((a, b) => b - a);
    let result = 0;
   
    for (let i = 0; i < nums.length; i += 1) {
        if (i % 2 !== 0) {
            result += nums[i];
        }
    }
    
    return result;
};