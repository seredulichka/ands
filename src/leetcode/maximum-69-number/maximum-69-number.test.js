import { maximum69Number } from './maximum-69-number';
describe('[Leetcode] maximum-69-number', () => {
  test('example #1', () => {
    expect(maximum69Number(9669)).toBe(9969);
  });

  test('example #2', () => {
    expect(maximum69Number(9996)).toBe(9999);
  });

  test('example #3', () => {
    expect(maximum69Number(9999)).toBe(9999);
  });
});
