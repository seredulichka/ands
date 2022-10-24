/**
* Leetcode #503
* Difficulty: Easy
* https://leetcode.com/problems/next-greater-element-ii/
*/
export const nextGreaterElementIi = nums => {
    let result = [];
    
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        let firstGreater = -1;
        
        for (let j = i + 1; j < nums.length + i; j += 1) {
            const current = nums[j] ?? nums[j - nums.length];
            
            if (current > num) {
                firstGreater = current;
                break;
            }
        }
        
        result.push(firstGreater);
    }
    
    return result;
};