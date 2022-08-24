import { mergeSortedArray } from './merge-sorted-array';
describe('[Leetcode] merge-sorted-array', () => {
  test('example #1', () => {
    expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toStrictEqual([1, 2, 2, 3, 5, 6]);
  });

  test('example #2', () => {
    expect(mergeSortedArray([1], 1, [], 0)).toStrictEqual([1]);
  });

  test('example #3', () => {
    expect(mergeSortedArray([0], 0, [1], 1)).toStrictEqual([1]);
  });

  test('example #4', () => {
    expect(mergeSortedArray([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
