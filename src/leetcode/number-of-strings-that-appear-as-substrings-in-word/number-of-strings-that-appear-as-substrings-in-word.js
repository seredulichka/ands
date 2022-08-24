/**
 * Leetcode #1967
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
 */
export const numberOfStringsThatAppearAsSubstringsInWord = (patterns, word) => {
  let counter = 0;

  for (let i = 0; i <= patterns.length; i += 1) {
    if (word.includes(patterns[i])) {
      counter += 1;
    }
  }

  return counter;
};
