/**
* Leetcode #219
* Difficulty: Easy
* https://leetcode.com/problems/contains-duplicate-ii/
*/
export const containsDuplicateIi  = (nums, k) => {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        
        if (map.get(num)) {
            const arr = map.get(num);
            for (const ind of arr) {
                if (Math.abs(i - ind) <= k) return true;
            }
            map.set(num, [...map.get(num), i]);
        } else {
            map.set(num, [i]);
        }
    }

    return false;
};