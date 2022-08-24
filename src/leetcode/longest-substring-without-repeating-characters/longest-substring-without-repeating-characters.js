/**
 * Leetcode #3
 * Difficulty: Medium
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
export const longestSubstringWithoutRepeatingCharacters = s => {
  let counter = 0;
  const map = new Map();
  let start = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i]) && map.get(s[i]) >= start) {
      counter = Math.max(i - start, counter);
      start = map.get(s[i]) + 1;
    }
    map.set(s[i], i);
  }

  return Math.max(s.length - start, counter);
};
