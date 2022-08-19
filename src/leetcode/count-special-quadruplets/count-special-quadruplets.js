/**
 * Leetcode #1995
 * Difficulty: Easy
 * https://leetcode.com/problems/count-special-quadruplets/
 */
export const countSpecialQuadruplets = nums => {
  let counter = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        for (let z = k + 1; z < nums.length; z += 1) {
          if (nums[i] + nums[j] + nums[k] == nums[z]) {
            counter += 1;
          }
        }
      }
    }
  }

  return counter;
};
