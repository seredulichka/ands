/**
* Leetcode #347
* Difficulty: Medium
* https://leetcode.com/problems/top-k-frequent-elements/
*/
export const topKFrequentElements = (nums, k) => {
    const map = new Map();
    
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }
   
    const sorted = new Map([...map].sort((a,b) => b[1] - a[1]));
    return [...sorted.keys()].slice(0, k)
};
