/**
 * Leetcode #1464
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 */
export const maximumProductOfTwoElementsInAnArray = nums => {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};
