/**
* Leetcode #1704
* Difficulty: Easy
* https://leetcode.com/problems/determine-if-string-halves-are-alike/
*/
export const determineIfStringHalvesAreAlike  = s => {
    const setVowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const mediumInd = s.length / 2;
    let aVowels = 0;
    let bVowels = 0;
    
    for (let i = 0; i < s.length; i += 1) {
        if (setVowels.has(s[i])) {
            i >= mediumInd ?  bVowels += 1 :  aVowels += 1
        }
    }

    return bVowels === aVowels;
};