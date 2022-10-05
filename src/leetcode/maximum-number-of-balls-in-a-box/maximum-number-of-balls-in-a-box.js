/**
* Leetcode #1742
* Difficulty: Easy
* https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
*/
export const maximumNumberOfBallsInABox  = (lowLimit, highLimit) => {
    const map = new Map();
    let max = 0;
    
    for (let i = lowLimit; i <= highLimit; i += 1) {
        const summ = (i + '').split('').reduce((acc, curr) => acc + +curr, 0);
        const count = (map.get(summ) ?? 0) + 1;
        max = Math.max(count, max);
        map.set(summ, count);
    }
   
    return max;
};