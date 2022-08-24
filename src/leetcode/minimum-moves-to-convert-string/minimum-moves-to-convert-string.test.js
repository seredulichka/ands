import { minimumMovesToConvertString } from './minimum-moves-to-convert-string';
describe('[Leetcode] minimum-moves-to-convert-string', () => {
  test('example #1', () => {
    expect(minimumMovesToConvertString('XXX')).toBe(1);
  });

  test('example #2', () => {
    expect(minimumMovesToConvertString('XXOX')).toBe(2);
  });

  test('example #3', () => {
    expect(minimumMovesToConvertString('OOOO')).toBe(0);
  });

  test('example #4', () => {
    expect(minimumMovesToConvertString('OXOX')).toBe(1);
  });
});
