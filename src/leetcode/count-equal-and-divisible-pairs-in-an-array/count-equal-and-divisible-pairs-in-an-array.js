/**
 * Leetcode #2176
 * Difficulty: Easy
 * https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/
 */
export const countEqualAndDivisiblePairsInAnArray = (nums, k) => {
  let counter = 0;
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] == nums[j] && (i * j) % k === 0) {
        counter += 1;
      }
    }
  }
  return counter;
};
