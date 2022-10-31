/**
* Leetcode #1925
* Difficulty: Easy
* https://leetcode.com/problems/count-square-sum-triples/
*/
export const countSquareSumTriples = n => {
    let result = 0;
    
    for (let a = 1; a <= n - 1; a += 1) {
        for (let b = 1; b <= n - 1; b += 1) {
            const c = Math.sqrt(a * a + b * b);
            if (Number.isInteger(c) && c <= n) {
                result += 1;
            }    
        }
    }
    
    return result;
};