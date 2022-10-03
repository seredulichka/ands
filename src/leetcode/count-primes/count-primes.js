/**
* Leetcode #204
* Difficulty: Easy
* https://leetcode.com/problems/count-primes/
*/
export const countPrimes = n => {
    const set = new Set();
    let counter = 0;
    
    for (let i = 2; i < n; i += 1) {
        let divisors = 1; 
        
        for (const divisor of set) {
            if (i % divisor === 0) {
                divisors += 1;
                if (divisors === 2) break;
            } 
        }
        
        if (divisors === 1) {
            set.add(i);
            counter += 1;
        }
    }
    
    return counter;
};