/**
 * Leetcode #342
 * Difficulty: Easy
 * https://leetcode.com/problems/power-of-four/
 */
export const powerOfFour = n => {
  while (n > 1) {
    n /= 4;
  }

  return n === 1 ? true : false;
};
