import { longestSubstringWithoutRepeatingCharacters } from './longest-substring-without-repeating-characters';
describe('[Leetcode] longest-substring-without-repeating-characters', () => {
  test('example #1', () => {
    expect(longestSubstringWithoutRepeatingCharacters('abcabcbb')).toBe(3);
  });

  test('example #2', () => {
    expect(longestSubstringWithoutRepeatingCharacters('bbbbb')).toBe(1);
  });

  test('example #3', () => {
    expect(longestSubstringWithoutRepeatingCharacters('bpfbhmipx')).toBe(7);
  });

  test('example #4', () => {
    expect(longestSubstringWithoutRepeatingCharacters('dvdf')).toBe(3);
  });

  test('example #5', () => {
    expect(longestSubstringWithoutRepeatingCharacters('pwwkew')).toBe(3);
  });
});
