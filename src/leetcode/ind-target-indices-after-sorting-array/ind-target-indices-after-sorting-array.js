/**
* Leetcode #12089
* Difficulty: Easy
* https://leetcode.com/problems/ind-target-indices-after-sorting-array/
*/
export const indTargetIndicesAfterSortingArray = (nums, target) => {
    nums.sort((a, b) => a - b)
    const indexes = [];

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] === target) {
        indexes.push(index);
      }
    }
    
    return indexes;
};