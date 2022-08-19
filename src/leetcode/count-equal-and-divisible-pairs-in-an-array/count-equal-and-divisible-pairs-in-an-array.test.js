import { countEqualAndDivisiblePairsInAnArray } from './count-equal-and-divisible-pairs-in-an-array';
describe('[Leetcode] count-equal-and-divisible-pairs-in-an-array', () => {
  test('example #1', () => {
    expect(countEqualAndDivisiblePairsInAnArray([3, 1, 2, 2, 2, 1, 3], 2)).toBe(4);
  });

  test('example #2', () => {
    expect(countEqualAndDivisiblePairsInAnArray([1, 2, 3, 4], 1)).toBe(0);
  });
});
