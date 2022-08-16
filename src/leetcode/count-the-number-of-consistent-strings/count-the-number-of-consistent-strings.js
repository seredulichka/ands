/**
 * Leetcode #1684
 * Difficulty: Easy
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 */
export const countTheNumberOfConsistentStrings = (allowed, words) => {
  let result = 0;
  const setAllowed = new Set(allowed.split(''));

  for (let i = 0; i < words.length; i += 1) {
    const currentWord = words[i];
    let consistent = true;
    for (let j = 0; j < currentWord.length; j += 1) {
      if (!setAllowed.has(currentWord[j])) {
        consistent = false;
        break;
      }
    }
    if (consistent) {
      result += 1;
    }
  }

  return result;
};
