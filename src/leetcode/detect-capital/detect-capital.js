/**
* Leetcode #520
* Difficulty: Easy
* https://leetcode.com/problems/detect-capital/
*/
export const detectCapital = word => {
    const isUpperCase = letters => letters.toUpperCase() === letters;
    const isLowerCase = letters => letters.toLowerCase() === letters; 
    
    if (isUpperCase(word) || isLowerCase(word) ||
        (isUpperCase(word[0]) && isLowerCase(word.slice(1)))) {
        return true;
    } 
    
    return false;
};