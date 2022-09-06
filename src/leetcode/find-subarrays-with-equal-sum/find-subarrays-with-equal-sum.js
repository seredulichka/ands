/**
* Leetcode #2395
* Difficulty: Easy
* https://leetcode.com/problems/find-subarrays-with-equal-sum/
*/
export const findSubarraysWithEqualSum = nums => {
    const set = new Set()
    
    for (let i = 0; i < nums.length - 1; i += 1) {
        let summ = nums[i] + nums[i+1]
        if(set.has(summ)) return true
        set.add(summ)
    }
    
    return false;
};