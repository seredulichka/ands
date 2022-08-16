import { reverseStringIi } from './reverse-string-ii';
describe('[Leetcode] reverse-string-ii', () => {
  test('example #1', () => {
    expect(reverseStringIi('abcdefg', 2)).toBe('bacdfeg');
  });

  test('example #2', () => {
    expect(reverseStringIi('abcd', 2)).toBe('bacd');
  });
});
