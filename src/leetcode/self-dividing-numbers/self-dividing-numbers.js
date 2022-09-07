/**
* Leetcode #728
* Difficulty: Easy
* https://leetcode.com/problems/self-dividing-numbers/
*/
export const selfDividingNumbers = (left, right) => {
    const isSelfDividing = number => {
        const string = number + '';
        
        for (let i = 0; i < string.length; i += 1) {
            if(number % +string[i] !== 0) return false;
        }
        
        return true;
    }
    
    let result = [];
    
    for (let i = left; i <= right; i += 1) {
        if (isSelfDividing(i)) {
            result.push(i)
        }
    }
    
    return result;
};