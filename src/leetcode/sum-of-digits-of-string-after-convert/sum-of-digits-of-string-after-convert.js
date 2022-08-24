/**
 * Leetcode #1945
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
 */
export const sumOfDigitsOfStringAfterConvert = (s, k) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const map = new Map();
  for (let i = 0; i < alphabet.length; i += 1) {
    map.set(alphabet[i], i + 1);
  }

  const count = numm => {
    let string = numm + '';
    let summ = 0;
    for (let j = 0; j < string.length; j += 1) {
      summ += +string[j];
    }
    return summ;
  };

  let summ = '';
  for (let j = 0; j < s.length; j += 1) {
    summ += map.get(s[j]);
  }

  for (let i = 1; i <= k; i += 1) {
    summ = count(summ);
  }
  return summ;
};
