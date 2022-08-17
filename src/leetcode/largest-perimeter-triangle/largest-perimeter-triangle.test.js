import { largestPerimeterTriangle } from './largest-perimeter-triangle';
describe('[Leetcode] largest-perimeter-triangle', () => {
  test('example #1', () => {
    expect(largestPerimeterTriangle([2, 1, 2])).toBe(5);
  });

  test('example #2', () => {
    expect(largestPerimeterTriangle([1, 2, 1])).toBe(0);
  });

  test('example #3', () => {
    expect(largestPerimeterTriangle([2, 1, 6, 6, 4, 2, 2, 9, 1, 2, 2, 2, 7, 8, 24])).toBe(24);
  });
});
