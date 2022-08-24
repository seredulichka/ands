/**
 * Leetcode #1710
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 */
export const maximumUnitsOnATruck = (boxTypes, truckSize) => {
  let result = 0;
  let boxes = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i += 1) {
    const [numberOfBoxes, numberOfUnits] = boxTypes[i];
    for (let j = 1; j <= numberOfBoxes; j += 1) {
      if (boxes < truckSize) {
        result += numberOfUnits;
        boxes += 1;
      }
    }
  }
  return result;
};
