import { maximumProductDifferenceBetweenTwoPairs } from './maximum-product-difference-between-two-pairs';
describe('[Leetcode] maximum-product-difference-between-two-pairs', () => {
  test('example #1', () => {
    expect(maximumProductDifferenceBetweenTwoPairs([5, 6, 2, 7, 4])).toBe(34);
  });

  test('example #2', () => {
    expect(maximumProductDifferenceBetweenTwoPairs([4, 2, 5, 9, 7, 4, 8])).toBe(64);
  });
});
