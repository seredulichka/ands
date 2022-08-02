/**
* Leetcode #1608
* Difficulty: Easy
* https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
*/
export const specialArrayWithXElementsGreaterThanOrEqualX = (nums) => {
	let result = -1
    for (let i = 0; i <= nums.length; i += 1) {
        let counter = 0
        for (let j = 0; j < nums.length; j += 1) {
            if (nums[j] >= i) {
                counter += 1
            }
        }
        if (counter === i) {
            result = counter
        }
    }
    return result
};