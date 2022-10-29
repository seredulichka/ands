/**
* Leetcode #1502
* Difficulty: Easy
* https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
*/
export const canMakeArithmeticProgressionFromSequence = arr => {
    arr.sort((a, b) => b - a);
    let diff = arr[1] - arr[0];
    
    for (let i = 2; i < arr.length; i += 1) {
        if(arr[i] - arr[i - 1] !== diff) return false;
    } 
    
    return true;
};