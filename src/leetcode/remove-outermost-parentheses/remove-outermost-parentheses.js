/**
 * Leetcode #1021
 * Difficulty: Easy
 * https://leetcode.com/problems/remove-outermost-parentheses/
 */
export const removeOutermostParentheses = s => {
  const map = new Map();
  let result = '';
  let start = 0;

  for (let i = 0; i < s.length; i += 1) {
    let sign = s[i];
    map.set(sign, (map.get(sign) ?? 0) + 1);

    if (map.get('(') === map.get(')')) {
      map.clear();
      result += s.slice(start + 1, i);
      start = i + 1;
    }
  }

  return result;
};
