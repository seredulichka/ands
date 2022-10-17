/**
* Leetcode #942
* Difficulty: Easy
* https://leetcode.com/problems/di-string-match/
*/
export const diStringMatch = s => {
    let result = [];
    let low = 0;
    let high = s.length;
    
    for (let i = 0; i <= s.length; i += 1) {
        if (s[i] == 'I') { 
            result.push(low);
            low += 1;
        } else {
            result.push(high);
            high -= 1;
        }
    }
    
    return result;
};