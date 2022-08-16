import { reverseWordsInAStringIii } from './reverse-words-in-a-string-iii';
describe('[Leetcode] reverse-words-in-a-string-iii', () => {
  test('example #1', () => {
    expect(reverseWordsInAStringIii("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
  });

  test('example #2', () => {
    expect(reverseWordsInAStringIii('God Ding')).toBe('doG gniD');
  });
});
