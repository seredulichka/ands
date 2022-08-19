import { sumOfDigitsOfStringAfterConvert } from './sum-of-digits-of-string-after-convert';
describe('[Leetcode] sum-of-digits-of-string-after-convert', () => {
  test('example #1', () => {
    expect(sumOfDigitsOfStringAfterConvert('iiii', 1)).toBe(36);
  });

  test('example #2', () => {
    expect(sumOfDigitsOfStringAfterConvert('leetcode', 2)).toBe(6);
  });

  test('example #3', () => {
    expect(sumOfDigitsOfStringAfterConvert('zbax', 2)).toBe(8);
  });
});
