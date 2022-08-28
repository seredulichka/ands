/**
* Leetcode #2389
* Difficulty: Easy
* https://leetcode.com/problems/longest-subsequence-with-limited-sum/
*/
export const longestSubsequenceWithLimitedSum = (nums, queries) => {
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < queries.length; i += 1) {
        let summ = 0;
        let elements = 0;
        
        for (let j = 0; j < nums.length; j += 1) {
            if (summ + nums[j] <= queries[i]) {
                summ += nums[j];
                elements += 1;
            } else break
        }
        
        queries[i] = elements
    }
    
    return queries;
};