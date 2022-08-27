/**
* Leetcode #2190
* Difficulty: Easy
* https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/
*/
export const mostFrequentNumberFollowingKeyInAnArray = (nums, key) => {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i += 1) {
        if(nums[i] === key) {
            map.set(nums[i + 1], (map.get(nums[i + 1]) ?? 0) + 1)
        }
    }
        
    const sortedArr = [...map].sort((a,b) => b[1] - a[1])
    return sortedArr[0][0]
};