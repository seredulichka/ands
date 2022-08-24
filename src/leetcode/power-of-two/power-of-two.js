/**
 * Leetcode #231
 * Difficulty: Easy
 * https://leetcode.com/problems/power-of-two/
 */
export const powerOfTwo = n => {
  while (n > 1) {
    n /= 2;
  }

  return n === 1;
};
