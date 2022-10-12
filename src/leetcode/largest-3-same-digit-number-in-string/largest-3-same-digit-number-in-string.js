/**
* Leetcode #2264
* Difficulty: Easy
* https://leetcode.com/problems/largest-3-same-digit-number-in-string/
*/
export const largest3SameDigitNumberInString = num => {
    let number = null; 
    let counter = 0;
    let max = null;
    
    for (const one of num) {
        if (number === one) {
            if (counter === 2 && one >= max) {
                max = one;
            } else {
                counter += 1;
            }
        } else {
            number = one; 
            counter = 1;
        }
    }
    
    return max ? max + max + max : '';
};