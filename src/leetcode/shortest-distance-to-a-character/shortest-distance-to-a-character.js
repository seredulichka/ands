/**
* Leetcode #821
* Difficulty: Easy
* https://leetcode.com/problems/shortest-distance-to-a-character/
*/
export const shortestDistanceToACharacter = (s, c) => {
    let first = null;
    let result  = [];
    
    for (let i = 0; i < s.length; i += 1) {
        if(s[i] === c) {
            if (first === null) {
                for (let j = 0; j < i; j += 1) {
                    result[j] = i - j;
                }
            } else {
                for (let j = first + 1; j < i; j += 1) {
                    result[j] = (result[j] >= 0) ? Math.min(i - j, result[j]) : i - j;
                }
            }
            first = i;
            result[i] = 0;
        } else {
            result[i] = i - first;
        }
    }
    
    return result;
};