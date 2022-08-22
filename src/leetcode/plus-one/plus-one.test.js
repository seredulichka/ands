import { plusOne } from './plus-one';
describe('[Leetcode] plus-one', () => {
  test('example #1', () => {
    expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toStrictEqual([
      '6',
      '1',
      '4',
      '5',
      '3',
      '9',
      '0',
      '1',
      '9',
      '5',
      '1',
      '8',
      '6',
      '7',
      '0',
      '5',
      '5',
      '4',
      '4'
    ]);
  });

  test('example #2', () => {
    expect(plusOne([1, 2, 3])).toStrictEqual(['1', '2', '4']);
  });

  test('example #3', () => {
    expect(plusOne([4, 3, 2, 1])).toStrictEqual(['4', '3', '2', '2']);
  });

  test('example #4', () => {
    expect(plusOne([9])).toStrictEqual(['1', '0']);
  });
});
