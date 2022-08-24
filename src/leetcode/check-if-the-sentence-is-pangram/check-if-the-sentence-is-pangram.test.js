import { checkIfTheSentenceIsPangram } from './check-if-the-sentence-is-pangram';
describe('[Leetcode] check-if-the-sentence-is-pangram', () => {
  test('example #1', () => {
    expect(checkIfTheSentenceIsPangram('thequickbrownfoxjumpsoverthelazydog')).toBe(true);
  });

  test('example #2', () => {
    expect(checkIfTheSentenceIsPangram('leetcode')).toBe(false);
  });
});
