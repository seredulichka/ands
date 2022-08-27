/**
* Leetcode #2283
* Difficulty: Easy
* https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
*/
export const checkIfNumberHasEqualDigitCountAndDigitValue = num => {
    let result = true;
    const map = new Map(); 
    const string = num + ''
    
    for (let i = 0; i < string.length; i += 1) {
        map.set(string[i], (map.get(string[i]) ?? 0) + 1)
    }

    for(let i = 0; i < string.length; i += 1) {
        if (+string[i] !== (map.get(i+'') ?? 0)){
             result = false;
        }
    }
        
    return result;
};