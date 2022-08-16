import { removeOutermostParentheses } from './remove-outermost-parentheses';
describe('[Leetcode] remove-outermost-parentheses', () => {
  test('example #1', () => {
    expect(removeOutermostParentheses('(()())(())')).toBe('()()()');
  });

  test('example #2', () => {
    expect(removeOutermostParentheses('(()())(())(()(()))')).toBe('()()()()(())');
  });

  test('example #3', () => {
    expect(removeOutermostParentheses('()()')).toBe('');
  });
});
