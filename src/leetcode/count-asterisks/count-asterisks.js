/**
 * Leetcode #2315
 * Difficulty: Easy
 * https://leetcode.com/problems/count-asterisks/
 */
export const countAsterisks = s => {
  const map = new Map();

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '|' || (map.get('|') ?? 0) % 2 === 0) {
      map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    }
  }

  return map.get('*') ?? 0;
};
