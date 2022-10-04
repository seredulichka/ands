/**
* Leetcode #1304
* Difficulty: Easy
* https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
*/
export const findNUniqueIntegersSumUpToZero = n => {
    let arr = [];
    for (let i = 1; i <= n / 2; i += 1) {
        arr.push(i, i * -1);
    }
    if (n % 2 !== 0)  arr.push(0);
    
    return arr;
};