/**
* Leetcode #1460
* Difficulty: Easy
* https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/
*/
export const makeTwoArraysEqualByReversingSubarrays = (target, arr) => {
    const map = new Map();
    
    for (const el of target) {
        map.set(el, (map.get(el) ?? 0) + 1);
    }
                
    for (const el of arr) {
        if (map.get(el)) {
            if (map.get(el) === 1) {
                map.delete(el);
            } else {
                map.set(el, map.get(el) - 1);
            }
        } else {
            return false;
        }
    }
        
    return map.size ? false : true;
};