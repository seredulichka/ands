import { maximumProductOfTwoElementsInAnArray } from './maximum-product-of-two-elements-in-an-array';
describe('[Leetcode] maximum-product-of-two-elements-in-an-array', () => {
  test('example #1', () => {
    expect(maximumProductOfTwoElementsInAnArray([3, 4, 5, 2])).toBe(12);
  });

  test('example #2', () => {
    expect(maximumProductOfTwoElementsInAnArray([1, 5, 4, 5])).toBe(16);
  });

  test('example #3', () => {
    expect(maximumProductOfTwoElementsInAnArray([3, 7])).toBe(12);
  });
});
