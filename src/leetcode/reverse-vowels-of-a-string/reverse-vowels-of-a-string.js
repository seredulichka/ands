/**
 * Leetcode #345
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */
export const reverseVowelsOfAString = s => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  let subVowels = '';

  for (let i = 0; i < s.length; i += 1) {
    if (vowels.has(s[i])) subVowels += s[i];
  }

  let result = '';
  let counter = 1;

  for (let i = 0; i < s.length; i += 1) {
    if (vowels.has(s[i])) {
      result += subVowels[subVowels.length - counter];
      counter += 1;
    } else {
      result += s[i];
    }
  }
  return result;
};
