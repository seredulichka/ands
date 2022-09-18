/**
* Leetcode #2413
* Difficulty: Easy
* https://leetcode.com/problems/smallest-even-multiple/
*/
export const smallestEvenMultiple = n => {
    for (let i = 1; ;i += 1) {
        const integer = n * i;
        if (integer % n === 0 && integer % 2 === 0) return integer;
    }
};