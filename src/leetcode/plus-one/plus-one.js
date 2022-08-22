/**
 * Leetcode #66
 * Difficulty: Easy
 * https://leetcode.com/problems/plus-one/
 */
export const plusOne = digits => {
  const string = digits.join('');
  const number = BigInt(string) + BigInt(1);
  return number.toString().split('');
};
