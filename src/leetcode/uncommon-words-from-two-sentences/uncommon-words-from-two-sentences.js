/**
* Leetcode #884
* Difficulty: Easy
* https://leetcode.com/problems/uncommon-words-from-two-sentences/
*/
export const uncommonWordsFromTwoSentences = (s1, s2) => {
    const arr = [...s1.split(' '), ...s2.split(' ')];
    const unique = new Set();
    const duplicated = new Set();

    for (const word of arr) {
        if (unique.has(word) || duplicated.has(word)) {
            unique.delete(word);
            duplicated.add(word);
        } else {
            unique.add(word);
        }
    }   
    
    return [...unique];
};