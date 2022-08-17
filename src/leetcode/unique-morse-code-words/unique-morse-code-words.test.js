import { uniqueMorseCodeWords } from './unique-morse-code-words';
describe('[Leetcode] unique-morse-code-words', () => {
  test('example #1', () => {
    expect(uniqueMorseCodeWords(['gin', 'zen', 'gig', 'msg'])).toBe(2);
  });

  test('example #2', () => {
    expect(uniqueMorseCodeWords(['a'])).toBe(1);
  });
});
