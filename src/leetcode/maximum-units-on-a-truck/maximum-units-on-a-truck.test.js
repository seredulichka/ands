import { maximumUnitsOnATruck } from './maximum-units-on-a-truck';
describe('[Leetcode] maximum-units-on-a-truck', () => {
  test('example #1', () => {
    expect(
      maximumUnitsOnATruck(
        [
          [1, 3],
          [2, 2],
          [3, 1]
        ],
        4
      )
    ).toBe(8);
  });

  test('example #2', () => {
    expect(
      maximumUnitsOnATruck(
        [
          [5, 10],
          [2, 5],
          [4, 7],
          [3, 9]
        ],
        10
      )
    ).toBe(91);
  });
});
