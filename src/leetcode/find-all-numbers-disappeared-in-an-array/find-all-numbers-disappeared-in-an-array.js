/**
 * Leetcode #448
 * Difficulty: Easy
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */

// export const findAllNumbersDisappearedInAnArray = nums => {
//   let newArr = [];
//   for (let i = 1; i <= nums.length; i += 1) {
//     if (!nums.includes(i)) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// };

// export const findAllNumbersDisappearedInAnArray = nums => {
//     nums.sort((a, b) => a - b)

//     const binarySearch = (list, item) => {
//         let low = 0;
//         let high = list.length - 1;

//         while(low <= high) {
//             let mid = (low + high)
//             let guess = list[mid]
//             if(guess === item) {
//                 return mid
//             }
//             if(guess > item) {
//                 high = mid - 1
//             } else {
//                 low = mid + 1
//             }
//         }
//     }

//     let newArr = [];

//     for (let i = 1; i <= nums.length; i += 1) {
//         binarySearch(nums, i) ?? newArr.push(i)
//     }

//     return newArr;
// };

export const findAllNumbersDisappearedInAnArray = nums => {
  const set = new Set(nums);
  const newArr = [];

  for (let i = 1; i <= nums.length; i += 1) {
    set.has(i) || newArr.push(i);
  }

  return newArr;
};
