/**
* Leetcode #1768
* Difficulty: Easy
* https://leetcode.com/problems/merge-strings-alternately/
*/
export const mergeStringsAlternately = (word1, word2) => {
    let result = '';
    const length = Math.max(word1.length, word2.length);
    
    for (let i = 0; i < length; i += 1) {
        result = result + (word1[i] ?? '') + (word2[i] ?? '');
    }
    
    return result;
};