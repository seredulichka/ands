/**
* Leetcode #1979
* Difficulty: Easy
* https://leetcode.com/problems/find-greatest-common-divisor-of-array/
*/
export const findGreatestCommonDivisorOfArray  = nums => {
    const smallest = Math.min(...nums);
    const largest = Math.max(...nums);

    for (let i = smallest; i > 0; i -= 1) {
        if (smallest % i === 0 && largest % i === 0) {
            return i;
        }
    }
};