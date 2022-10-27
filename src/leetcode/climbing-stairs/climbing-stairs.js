/**
* Leetcode #70
* Difficulty: Easy
* https://leetcode.com/problems/climbing-stairs/
*/
export const climbingStairs = n => {
    const map = new Map();
    
    for (let i = 0; i <= n + 1; i += 1) {
        if(i === 0 || i === 1) {
            map.set(i, i);
        } else {
            map.set(i, map.get(i - 1) + map.get(i - 2));
        }
    }

    return map.get(n + 1);
};