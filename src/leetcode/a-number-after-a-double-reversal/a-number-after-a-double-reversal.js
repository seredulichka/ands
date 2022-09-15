/**
* Leetcode #2019
* Difficulty: Easy
* https://leetcode.com/problems/a-number-after-a-double-reversal/
*/
export const aNumberAfterADoubleReversal = num => {
    return (num === 0 || num % 10 !== 0) ? true : false;
};