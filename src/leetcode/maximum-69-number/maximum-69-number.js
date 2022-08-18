/**
 * Leetcode #1323
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-69-number/
 */
export const maximum69Number = num => {
  const string = num + '';
  let result = '';
  let isChanged = false;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '6' && !isChanged) {
      result += '9';
      isChanged = true;
    } else {
      result += string[i];
    }
  }
  return +result;
};
