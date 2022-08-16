/**
 * Leetcode #541
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-string-ii/
 */
export const reverseStringIi = (s, k) => {
  const reverse = s => {
    let result = '';
    for (let i = s.length - 1; i >= 0; i -= 1) {
      result += s[i];
    }
    return result;
  };

  let resultString = '';

  for (let i = 0; i < s.length; i += 2 * k) {
    resultString += reverse(s.slice(i, i + k));
    if (s.length - i >= k) {
      resultString += s.slice(i + k, i + 2 * k);
    }
  }

  return resultString;
};
