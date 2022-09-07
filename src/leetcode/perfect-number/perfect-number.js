/**
* Leetcode #503
* Difficulty: Easy
* https://leetcode.com/problems/perfect-number/
*/
export const perfectNumber = num => {
    const set = new Set()
    
    for (let i = 2; num / i >= 1; i += 1) {
        if(num % i === 0) set.add(num / i);
    }
    
    return [...set].reduce((prev, curr) => prev + curr, 0) === num
};