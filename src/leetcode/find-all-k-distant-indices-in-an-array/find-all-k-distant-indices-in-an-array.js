/**
* Leetcode #2200
* Difficulty: Easy
* https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/
*/
export const findAllKDistantIndicesInAnArray = (nums, key, k) => {
    const set = new Set();

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === key) {
            for (let j = i - k; j <= i; j += 1) {
                if (nums[j]) set.add(j);
            }

            set.add(i);

            for (let j = i; j <= i + k; j += 1) {
                if (nums[j]) set.add(j);
            }
        } 
    }

    return [...set]
};