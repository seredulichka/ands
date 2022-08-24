import { countIntegersWithEvenDigitSum } from './count-integers-with-even-digit-sum';
describe('[Leetcode] count-integers-with-even-digit-sum', () => {
  test('example #1', () => {
    expect(countIntegersWithEvenDigitSum(4)).toBe(2);
  });

  test('example #2', () => {
    expect(countIntegersWithEvenDigitSum(30)).toBe(14);
  });
});
