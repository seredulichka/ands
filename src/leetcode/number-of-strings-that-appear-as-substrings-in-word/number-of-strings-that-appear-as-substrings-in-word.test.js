import { numberOfStringsThatAppearAsSubstringsInWord } from './number-of-strings-that-appear-as-substrings-in-word';
describe('[Leetcode] number-of-strings-that-appear-as-substrings-in-word', () => {
  test('example #1', () => {
    expect(numberOfStringsThatAppearAsSubstringsInWord(['a', 'abc', 'bc', 'd'], 'abc')).toBe(3);
  });

  test('example #2', () => {
    expect(numberOfStringsThatAppearAsSubstringsInWord(['a', 'b', 'c'], 'aaaaabbbbb')).toBe(2);
  });

  test('example #3', () => {
    expect(numberOfStringsThatAppearAsSubstringsInWord(['a', 'a', 'a'], 'ab')).toBe(3);
  });
});
