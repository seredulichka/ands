import { replaceAllDigitsWithCharacters } from './replace-all-digits-with-characters';
describe('[Leetcode] replace-all-digits-with-characters', () => {
  test('example #1', () => {
    expect(replaceAllDigitsWithCharacters('a1c1e1')).toBe('abcdef');
  });

  test('example #2', () => {
    expect(replaceAllDigitsWithCharacters('a1b2c3d4e')).toBe('abbdcfdhe');
  });
});
