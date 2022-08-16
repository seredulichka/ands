/**
 * Leetcode #28
 * Difficulty: Easy
 * https://leetcode.com/problems/implement-strstr/
 */
export const implementStrstr = (haystack, needle) => {
  if (!needle) return 0;
  let index = -1;

  for (let j = 0; j < haystack.length; j += 1) {
    if (haystack[j] !== needle[0]) continue;

    let equal = true;
    for (let i = 1; i < needle.length; i += 1) {
      if (haystack[j + i] !== needle[i]) {
        equal = false;
        break;
      }
    }
    if (equal) return j;
  }
  return index;
};
