/**
* Leetcode #2341
* Difficulty: Easy
* https://leetcode.com/problems/maximum-number-of-pairs-in-array/
*/
export const maximumNumberOfPairsInArray = nums => {
    let pairs = 0;
    const set = new Set();
    
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i]
        if (set.has(num)) {
            pairs += 1;
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    
    return [pairs, set.size]
};