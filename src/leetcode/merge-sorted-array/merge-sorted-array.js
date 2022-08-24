/**
 * Leetcode #88
 * Difficulty: Easy
 * https://leetcode.com/problems/merge-sorted-array/
 */
export const mergeSortedArray = (nums1, m, nums2, n) => {
  nums1.splice(m, n, ...nums2.slice(0, n));
  const sorted = nums1.sort((a, b) => a - b);
  return sorted;
};
