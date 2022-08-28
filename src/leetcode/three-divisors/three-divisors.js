/**
* Leetcode #1952
* Difficulty: Easy
* https://leetcode.com/problems/three-divisors/
*/
export const threeDivisors = n => {
    const set = new Set();
    
    for (let i = 1; i <= n; i += 1) {
        if(n % i === 0) set.add(i)
    }

    return set.size === 3 ? true : false
};