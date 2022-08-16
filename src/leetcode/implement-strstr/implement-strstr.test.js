import { implementStrstr } from './implement-strstr';
describe('[Leetcode] implement-strstr', () => {
  test('example #1', () => {
    expect(implementStrstr('hello', 'll')).toBe(2);
  });

  test('example #2', () => {
    expect(implementStrstr('aaaaa', 'bba')).toBe(-1);
  });

  test('example #3', () => {
    expect(implementStrstr('mississippi', 'issip')).toBe(4);
  });

  test('example #4', () => {
    expect(implementStrstr('aaa', 'aaaa')).toBe(-1);
  });
});
