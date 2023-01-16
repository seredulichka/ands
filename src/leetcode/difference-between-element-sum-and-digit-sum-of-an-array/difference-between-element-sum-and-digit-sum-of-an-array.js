/**
* Leetcode #2535
* Difficulty: Easy
* https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
*/
export const differenceBetweenElementSumAndDigitSumOfAnArray = nums => {
    let elementSumm = 0;
    let digitSumm = 0;

    for (const num of nums) {
        elementSumm += num;

        const string = num + '';
        for (let i = 0; i < string.length; i += 1) {
            digitSumm += +string[i];
        }
    }
    
    return Math.abs(elementSumm - digitSumm);
};