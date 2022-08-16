import { minimumNumberOfMovesToSeatEveryone } from './minimum-number-of-moves-to-seat-everyone';
describe('[Leetcode] minimum-number-of-moves-to-seat-everyone', () => {
  test('example #1', () => {
    expect(minimumNumberOfMovesToSeatEveryone([3, 1, 5], [2, 7, 4])).toBe(4);
  });

  test('example #2', () => {
    expect(minimumNumberOfMovesToSeatEveryone([4, 1, 5, 9], [1, 3, 2, 6])).toBe(7);
  });

  test('example #2', () => {
    expect(minimumNumberOfMovesToSeatEveryone([2, 2, 6, 6], [1, 3, 2, 6])).toBe(4);
  });
});
