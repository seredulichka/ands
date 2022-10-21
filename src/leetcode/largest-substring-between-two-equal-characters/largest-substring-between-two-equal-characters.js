/**
* Leetcode #1624
* Difficulty: Easy
* https://leetcode.com/problems/largest-substring-between-two-equal-characters/
*/
export const largestSubstringBetweenTwoEqualCharacters = s => {
    let result = -1;
    const map = new Map();
    
    for (let i = 0; i < s.length; i += 1) {
        if (!map.has(s[i])) {
            map.set(s[i], i + 1);
        } else {
            result = Math.max(result, i - map.get(s[i]));
        }
    }
    
    return result;
};