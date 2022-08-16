/**
 * Leetcode #1844
 * Difficulty: Easy
 * https://leetcode.com/problems/replace-all-digits-with-characters/
 */
export const replaceAllDigitsWithCharacters = s => {
  let result = '';

  const shift = (letter, ind) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let j = 0; j < alphabet.length; j += 1) {
      if (letter === alphabet[j]) {
        result += alphabet[j + ind];
      }
    }
  };

  for (let i = 0; i < s.length; i += 2) {
    const letter = s[i];
    const ind = s[i + 1];
    result += letter;
    if (letter && ind) shift(letter, +ind);
  }
  return result;
};
