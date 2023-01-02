/**
* Leetcode #2520
* Difficulty: Easy
* https://leetcode.com/problems/count-the-digits-that-divide-a-number/
*/
export const countTheDigitsThatDivideANumber = num => {
    const string = num + '';
    let result = 0;

    for (const number of string) {
        if (num % +number === 0) result += 1;
    }

    return result;
};