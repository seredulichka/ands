/**
* Leetcode #922
* Difficulty: Easy
* https://leetcode.com/problems/sort-array-by-parity-ii/
*/
export const sortArrayByParityIi = nums => {
    let result = [];
    for(let i = 0, even = 0, odd = 1; i < nums.length; i ++) {
       if(nums[i] % 2 === 0) {
           result[even] = nums[i];
           even += 2;
       } else {
           result[odd] = nums[i];
           odd += 2;
       }
   }
   return result;
};