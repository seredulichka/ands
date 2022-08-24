import { countSpecialQuadruplets } from './count-special-quadruplets';
describe('[Leetcode] count-special-quadruplets', () => {
  test('example #1', () => {
    expect(countSpecialQuadruplets([1, 2, 3, 6])).toBe(1);
  });

  test('example #2', () => {
    expect(countSpecialQuadruplets([3, 3, 6, 4, 5])).toBe(0);
  });

  test('example #3', () => {
    expect(countSpecialQuadruplets([1, 1, 1, 3, 5])).toBe(4);
  });
});
