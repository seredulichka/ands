/**
* Leetcode #2469
* Difficulty: Easy
* https://leetcode.com/problems/convert-the-temperature/
*/
export const convertTheTemperature = celsius => {
    return [(celsius + 273.15).toFixed(5), (celsius * 1.80 + 32.00).toFixed(5)]
};