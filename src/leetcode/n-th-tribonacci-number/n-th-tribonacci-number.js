/**
* Leetcode #1137
* Difficulty: Easy
* https://leetcode.com/problems/n-th-tribonacci-number/
*/
export const nThTribonacciNumber = n => {
    const map = new Map();
    
    for (let i = 0; i <= n; i += 1) {
        if(i <= 2) {
            map.set(i, i === 0 ? 0 : 1);
        } else {
            map.set(i, map.get(i - 1) + map.get(i - 2) + map.get(i - 3));
        }
    }

    return map.get(n);
};