/**
* Leetcode #2190
* Difficulty: Easy
* https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/
*/
// export const mostFrequentNumberFollowingKeyInAnArray = (nums, key) => {
//     const map = new Map();
    
//     for (let i = 0; i < nums.length; i += 1) {
//         if(nums[i] === key) {
//             map.set(nums[i + 1], (map.get(nums[i + 1]) ?? 0) + 1)
//         }
//     }
        
//     const sortedArr = [...map].sort((a,b) => b[1] - a[1])
//     return sortedArr[0][0]
// };

export const mostFrequentNumberFollowingKeyInAnArray = (nums, key) => {
    const map = new Map();
    let maxCount = 0;
    let maxValue = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === key) {
            const target = nums[i + 1]
            const count =  (map.get(target) ?? 0) + 1
            map.set(target, count)
            
            if (count > maxCount) {
                maxCount = count;
                maxValue = target;
            }
        }
    }
        
    return maxValue;
};