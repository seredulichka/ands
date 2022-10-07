/**
* Leetcode #1752
* Difficulty: Easy
* https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
*/
export const checkIfArrayIsSortedAndRotated = nums => {
    let count = 0;
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
        }
    }
    if (count > 1 || (count == 1 && nums[0] < nums[len])) {
        return false;
    }
    return true;
};