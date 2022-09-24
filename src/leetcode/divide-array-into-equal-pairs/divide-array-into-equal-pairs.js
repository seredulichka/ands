/**
* Leetcode #2206
* Difficulty: Easy
* https://leetcode.com/problems/divide-array-into-equal-pairs/
*/
export const divideArrayIntoEqualPairs = nums => {
    const map = new Map();
    
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }
  
    for (const count of map.values()) {
        if(count % 2 !== 0) return false;
    }
    
    return true;
};