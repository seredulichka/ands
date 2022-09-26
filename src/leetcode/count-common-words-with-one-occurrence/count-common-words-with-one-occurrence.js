/**
* Leetcode #2085
* Difficulty: Easy
* https://leetcode.com/problems/count-common-words-with-one-occurrence/
*/
export const countCommonWordsWithOneOccurrence  = (words1, words2) => {
    const findUnique = arr => {
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
        
        return unique;
    }
    
    const uniqueFirst = findUnique(words1);
    const uniqueSecons = findUnique(words2);
    let result = 0;
    
    for (const word of uniqueFirst) {
        if (uniqueSecons.has(word)) result += 1;
    }
    
    return result;
};