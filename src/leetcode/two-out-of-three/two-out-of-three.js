/**
* Leetcode #41974
* Difficulty: Easy
* https://leetcode.com/problems/two-out-of-three/
*/
export const twoOutOfThree = (nums1, nums2, nums3) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const set3 = new Set(nums3);
    const setAll = new Set([...nums1, ...nums2, ...nums3])
   
    for (const number of setAll) {
        const count = +set1.has(number) + +set2.has(number) + +set3.has(number)
        if(count === 1) setAll.delete(number)
    }

    return [...setAll];
}