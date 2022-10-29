/**
* Leetcode #1413
* Difficulty: Easy
* https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
*/
export const minimumValueToGetPositiveStepByStepSum = nums => {
    let min = +Infinity
    let summ = 0;
    
    for (const num of nums) {
        summ += num;
        min = Math.min(min, summ)
    }
    
    return min >= 0 ? 1 : min * -1 + 1
};