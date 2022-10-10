/**
* Leetcode #2210
* Difficulty: Easy
* https://leetcode.com/problems/count-hills-and-valleys-in-an-array/
*/
export const countHillsAndValleysInAnArray = nums => {
    let result = 0;
    const arr = nums.filter((el, i) => el !== nums[i - 1]);
    
    for (let i = 1; i < arr.length - 1; i += 1) {
        if((arr[i] > arr[i - 1] && arr[i] > arr[i + 1])
           ||(arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
            result += 1;
        }
    }
    
    return result;
};