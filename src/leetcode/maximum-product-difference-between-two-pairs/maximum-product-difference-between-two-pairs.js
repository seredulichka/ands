/**
 * Leetcode #1913
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 */
export const maximumProductDifferenceBetweenTwoPairs = nums => {
  nums.sort((a, b) => a - b);
  const l = nums.length - 1;
  return nums[l] * nums[l - 1] - nums[0] * nums[1];
};
