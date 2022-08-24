import { powerOfTwo } from './power-of-two';
describe('[Leetcode] power-of-two', () => {
  test('example #1', () => {
    expect(powerOfTwo(1)).toBe(true);
  });

  test('example #2', () => {
    expect(powerOfTwo(16)).toBe(true);
  });

  test('example #3', () => {
    expect(powerOfTwo(3)).toBe(false);
  });
});
