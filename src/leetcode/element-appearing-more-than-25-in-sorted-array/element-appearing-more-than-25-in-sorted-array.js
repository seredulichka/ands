/**
 * Leetcode #1287
 * Difficulty: Easy
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 */
export const elementAppearingMoreThan25InSortedArray = arr => {
  const map = new Map();

  for (let i = 0; i < arr.length; i += 1) {
    const counter = (map.get(arr[i]) ?? 0) + 1;
    if (counter > arr.length * 0.25) return arr[i];
    map.set(arr[i], counter);
  }
};
