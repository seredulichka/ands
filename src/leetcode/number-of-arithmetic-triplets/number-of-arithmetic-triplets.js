/**
 * Leetcode #2367
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-arithmetic-triplets/
 */
export const numberOfArithmeticTriplets = (nums, diff) => {
  let result = 0;
  for (let i = 0; i < nums.length; i += 1) {
    let set = new Set();
    let current = nums[i];
    set.add(current);

    for (let j = i; j < nums.length; j += 1) {
      if (set.size < 3 && !set.has(nums[j])) {
        if (current - diff === nums[j] || nums[j] - diff === current) {
          current = nums[j];
        }
        set.add(current);
      }
    }
    if (set.size === 3) {
      result += 1;
    }
  }
  return result;
};
