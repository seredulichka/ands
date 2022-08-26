/**
* Leetcode #1636
* Difficulty: Easy
* https://leetcode.com/problems/sort-array-by-increasing-frequency/
*/
export const sortArrayByIncreasingFrequency = nums => {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1)
    }
                
    return nums.sort((a,b) => map.get(a) - map.get(b) || b - a)
};