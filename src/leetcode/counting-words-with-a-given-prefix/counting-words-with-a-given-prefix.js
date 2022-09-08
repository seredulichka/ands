/**
* Leetcode #2185
* Difficulty: Easy
* https://leetcode.com/problems/counting-words-with-a-given-prefix/
*/
export const countingWordsWithAGivenPrefix = (words, pref) => {
    let result = 0;
    
    for (let i = 0; i < words.length; i += 1) {
        if(words[i].slice(0, pref.length) === pref) result += 1;
    }
        
    return result;
};