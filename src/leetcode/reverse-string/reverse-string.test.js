import { reverseString } from './reverse-string';
describe('[Leetcode] reverse-string', () => {
  test('example #1', () => {
    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
  });

  test('example #2', () => {
    expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
