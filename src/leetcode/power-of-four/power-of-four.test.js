import { powerOfFour } from './power-of-four';
describe('[Leetcode] power-of-four', () => {
  test('example #1', () => {
    expect(powerOfFour(16)).toBe(true);
  });

  test('example #2', () => {
    expect(powerOfFour(5)).toBe(false);
  });

  test('example #3', () => {
    expect(powerOfFour(1)).toBe(true);
  });
});
