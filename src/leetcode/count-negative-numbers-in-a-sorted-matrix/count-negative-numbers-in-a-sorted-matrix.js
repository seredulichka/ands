/**
* Leetcode #1351
* Difficulty: Easy
* https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
*/
export const countNegativeNumbersInASortedMatrix = grid => {
    return grid.flat().filter(el => el < 0).length
};