/**
* Leetcode #2442
* Difficulty: Easy
* https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
*/
export const largestPositiveIntegerThatExistsWithItsNegative = nums => {
    let result = -1;
    const set = new Set();
    
    for (const num of nums) {
        const corresponding = num * -1;
        
        if (set.has(num * -1)) {
            result = Math.max(result, num > 0 ? num : corresponding);
        }
        
        set.add(num);
    }
    
    return result;
};