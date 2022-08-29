/**
* Leetcode #1848
* Difficulty: Easy
* https://leetcode.com/problems/minimum-distance-to-the-target-element/
*/
export const minimumDistanceToTheTargetElement = (nums, target, start) => {
    let min = Infinity;
    let i = nums.indexOf(target);
    
    for (; i < nums.length; i += 1) {
        if (nums[i]===target) {
            if(Math.abs(i-start)<min) min = Math.abs(i-start);
        }
    }
    
    return min;
};

