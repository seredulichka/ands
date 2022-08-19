/**
 * Leetcode #1816
 * Difficulty: Easy
 * https://leetcode.com/problems/truncate-sentence/
 */
export const truncateSentence = (s, k) => {
  const array = s.split(' ');
  return array.splice(0, k).join(' ');
};
