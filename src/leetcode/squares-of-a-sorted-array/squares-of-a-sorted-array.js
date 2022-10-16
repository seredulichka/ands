/**
* Leetcode #977
* Difficulty: Easy
* https://leetcode.com/problems/squares-of-a-sorted-array/
*/
export const squaresOfASortedArray = nums => {
    return nums.sort((a, b) => a * a - b * b ).map(el => el * el);
};