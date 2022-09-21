/**
* Leetcode #905
* Difficulty: Easy
* https://leetcode.com/problems/sort-array-by-parity/
*/
export const sortArrayByParity = nums => {
    let last = nums.length;

    for (let i = 0; i < last;) {
        if (nums[i] % 2 !== 0 ) {
            nums.push(nums[i]);
            nums.splice(i, 1);
            last -= 1;
        } else {
            i += 1;
        }
    }
   
    return nums;
};