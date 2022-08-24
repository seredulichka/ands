/**
 * Leetcode #2180
 * Difficulty: Easy
 * https://leetcode.com/problems/count-integers-with-even-digit-sum/
 */
export const countIntegersWithEvenDigitSum = num => {
  let counter = 0;

  const digitSumm = num => {
    const string = num + '';
    let counter = 0;
    for (let i = 0; i < string.length; i += 1) {
      counter += +string[i];
    }
    return counter;
  };

  for (let i = 1; i <= num; i += 1) {
    const summ = digitSumm(i);
    if (summ % 2 === 0) {
      counter += 1;
    }
  }

  return counter;
};
