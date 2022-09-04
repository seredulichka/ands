/**
* Leetcode #34
* Difficulty: Easy
* https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*/
export const findFirstAndLastPositionOfElementInSortedArray = (nums, target) => {
    let start = null;
    let end = null;
    
    for (let i = 0; i < nums.length; i += 1) {
        if (target === nums[i] && start === null) {
            start = i;
            end = i;
        } else if (target === nums[i]) {
            end = i;
        }
    }
    
    return [start ?? -1, end ?? -1]
};