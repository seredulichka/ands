/**
* Leetcode #1295
* Difficulty: Easy
* https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
*/
export const findNumbersWithEvenNumberOfDigits = nums => {
    let counter = 0;
    
    for (const num of nums) {
        if ((num + '').length % 2 === 0) {
            counter += 1;
        }
    }
    
    return counter;
};