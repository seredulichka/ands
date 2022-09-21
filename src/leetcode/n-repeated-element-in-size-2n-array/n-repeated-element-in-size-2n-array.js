/**
* Leetcode #961
* Difficulty: Easy
* https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
*/
export const nRepeatedElementInSize2nArray = nums => {
    const map = new Map();
    const n = nums.length / 2;
    
    for (const num of nums) {
        if(map.get(num) === n - 1) return num;
        map.set(num, (map.get(num) ?? 0) + 1);
    }
};