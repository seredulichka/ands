/**
* Leetcode #2529
* Difficulty: Easy
* https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
*/
export const maximumCountOfPositiveIntegerAndNegativeInteger = nums => {
    let positive = 0;
    let negative = 0;

    for (const num of nums) {
        if (num > 0) {
            positive += 1;    
        } else if (num < 0) {
            negative += 1;  
        }
    }
    
    return Math.max(positive, negative)
};