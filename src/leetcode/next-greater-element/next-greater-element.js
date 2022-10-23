/**
* Leetcode #496
* Difficulty: Easy
* https://leetcode.com/problems/next-greater-element/
*/
export const nextGreaterElement = (nums1, nums2) => {
    const map = new Map();
    
    for (let i = 0; i < nums2.length; i += 1) {
        const num = nums2[i];
        let firstGreater = -1;
        
        for (let j = i + 1; j < nums2.length; j += 1) {
            if (nums2[j] > num) {
                firstGreater = nums2[j];
                break;
            }
        }
        
        map.set(num, firstGreater);
    }
    
    for (let i = 0; i < nums1.length; i += 1) {
        nums1[i] = map.get(nums1[i]);
    }
    
    return nums1;
};