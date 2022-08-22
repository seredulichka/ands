/**
 * Leetcode #448
 * Difficulty: Easy
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
export const findAllNumbersDisappearedInAnArray = nums => {
  let newArr = [];
  for (let i = 1; i <= nums.length; i += 1) {
    if (!nums.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};
