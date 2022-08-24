/**
 * Leetcode #344
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-string/
 */
export const reverseString = s => {
  const length = s.length - 1;

  for (let i = 0; i < length / 2; i += 1) {
    const first = s[i];
    const last = s[length - i];
    s[i] = last;
    s[length - i] = first;
  }

  return s;
};
