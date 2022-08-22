import { findAllNumbersDisappearedInAnArray } from './find-all-numbers-disappeared-in-an-array';
describe('[Leetcode] find-all-numbers-disappeared-in-an-array', () => {
  test('example #1', () => {
    expect(findAllNumbersDisappearedInAnArray([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([5, 6]);
  });

  test('example #2', () => {
    expect(findAllNumbersDisappearedInAnArray([1, 1])).toStrictEqual([2]);
  });
});
