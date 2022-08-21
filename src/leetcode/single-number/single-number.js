/**
 * Leetcode #136
 * Difficulty: Easy
 * https://leetcode.com/problems/single-number/
 */

// export const singleNumber = nums => {
//     for (let i = 0; i < nums.length; i += 1) {
//         if(nums.findIndex(el => el === nums[i]) === nums.findLastIndex(el => el === nums[i])) {
//             return nums[i]
//         }
//     }
// };

export const singleNumber = nums => {
  const set = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  return [...set][0];
};
