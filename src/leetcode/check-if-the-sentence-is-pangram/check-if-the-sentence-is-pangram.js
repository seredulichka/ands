/**
 * Leetcode #1832
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 */
export const checkIfTheSentenceIsPangram = sentence => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const set = new Set(alphabet.split(''));

  for (let i = 0; i < sentence.length; i += 1) {
    set.delete(sentence[i]);
  }

  return !set.size;
};
