import { elementAppearingMoreThan25InSortedArray } from './element-appearing-more-than-25-in-sorted-array';
describe('[Leetcode] element-appearing-more-than-25-in-sorted-array', () => {
  test('example #1', () => {
    expect(elementAppearingMoreThan25InSortedArray([1, 2, 2, 6, 6, 6, 6, 7, 10])).toBe(6);
  });

  test('example #2', () => {
    expect(elementAppearingMoreThan25InSortedArray([1, 1])).toBe(1);
  });
});
