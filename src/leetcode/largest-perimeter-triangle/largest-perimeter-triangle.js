/**
 * Leetcode #976
 * Difficulty: Easy
 * https://leetcode.com/problems/largest-perimeter-triangle/
 */
export const largestPerimeterTriangle = nums => {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  return 0;
};
