import { countTheNumberOfConsistentStrings } from './count-the-number-of-consistent-strings';
describe('[Leetcode] count-the-number-of-consistent-strings', () => {
  test('example #1', () => {
    expect(countTheNumberOfConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])).toBe(2);
  });

  test('example #2', () => {
    expect(countTheNumberOfConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])).toBe(7);
  });

  test('example #3', () => {
    expect(countTheNumberOfConsistentStrings('cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'])).toBe(4);
  });
});
