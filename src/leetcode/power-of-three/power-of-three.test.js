import { powerOfThree } from './power-of-three';
describe('[Leetcode] power-of-three', () => {
  test('example #1', () => {
    expect(powerOfThree(27)).toBe(true);
  });

  test('example #2', () => {
    expect(powerOfThree(0)).toBe(false);
  });

  test('example #3', () => {
    expect(powerOfThree(9)).toBe(true);
  });
});
