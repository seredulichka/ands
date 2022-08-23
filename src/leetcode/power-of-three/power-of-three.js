/**
 * Leetcode #326
 * Difficulty: Easy
 * https://leetcode.com/problems/power-of-three/
 */
export const powerOfThree = n => {
  while (n > 1) {
    n /= 3;
  }

  return n === 1 ? true : false;
};
