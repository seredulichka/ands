/**
* Leetcode #217
* Difficulty: Easy
* https://leetcode.com/problems/contains-duplicate/
*/
export const containsDuplicate = nums => {
    const set = new Set();
    
    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    
    return false;
};