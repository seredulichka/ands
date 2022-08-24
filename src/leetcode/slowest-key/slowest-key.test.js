import { slowestKey } from './slowest-key';
describe('[Leetcode] slowest-key', () => {
  test('example #1', () => {
    expect(slowestKey([9, 29, 49, 50], 'cbcd')).toBe('c');
  });

  test('example #2', () => {
    expect(slowestKey([12, 23, 36, 46, 62], 'spuda')).toBe('a');
  });

  test('example #3', () => {
    expect(slowestKey([23, 34, 43, 59, 62, 80, 83, 92, 97], 'qgkzzihfc')).toBe('q');
  });
});
