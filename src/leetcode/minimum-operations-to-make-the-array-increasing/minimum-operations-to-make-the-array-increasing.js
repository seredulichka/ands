/**
* Leetcode #1827
* Difficulty: Easy
* https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
*/
export const minimumOperationsToMakeTheArrayIncreasing = nums => {
    let prevEl = nums[0];
    let counter = 0;
    
    for (let i = 0; i < nums.length - 1; i += 1) {
        if (nums[i + 1] <= prevEl) {
            const diff = prevEl + 1 - nums[i+1] 
            counter += diff
            prevEl += 1
        } else {
            prevEl = nums[i+1]
        }
    }

    return counter;
};