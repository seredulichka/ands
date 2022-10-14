/**
* Leetcode #1876
* Difficulty: Easy
* https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
*/
export const substringsOfSizeThreeWithDistinctCharacters = s => {
    let result = 0;
    if (s.length < 3) return result;
    
    for (let i = 0; i < s.length - 2; i += 1) {
        const set = new Set([s[i], s[i + 1], s[i + 2]]);
        if (set.size === 3) result += 1;
    }
    
    return result;
};