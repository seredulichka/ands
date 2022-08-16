/**
 * Leetcode #557
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */
export const reverseWordsInAStringIii = s => {
  let words = s.split(' ');
  let result = '';

  for (let j = 0; j < words.length; j += 1) {
    if (j !== 0) result += ' ';
    for (let i = words[j].length - 1; i >= 0; i -= 1) {
      result += words[j][i];
    }
  }

  return result;
};
