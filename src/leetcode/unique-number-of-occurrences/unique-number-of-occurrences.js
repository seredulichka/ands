/**
* Leetcode #1207
* Difficulty: Easy
* https://leetcode.com/problems/unique-number-of-occurrences/
*/
export const uniqueNumberOfOccurrences  = arr => {
    const map = new Map();
    
    for (const num of arr) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }
    
    const set = new Set([...map.values()]);
    
    return set.size === map.size;
};