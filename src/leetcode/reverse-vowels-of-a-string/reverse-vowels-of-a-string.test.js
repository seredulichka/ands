import { reverseVowelsOfAString } from './reverse-vowels-of-a-string';
describe('[Leetcode] reverse-vowels-of-a-string', () => {
  test('example #1', () => {
    expect(reverseVowelsOfAString('hello')).toBe('holle');
  });

  test('example #2', () => {
    expect(reverseVowelsOfAString('leetcode')).toBe('leotcede');
  });
});
