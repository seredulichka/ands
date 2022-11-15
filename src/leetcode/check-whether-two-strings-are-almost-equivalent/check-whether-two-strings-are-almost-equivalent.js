/**
* Leetcode #2068
* Difficulty: Easy
* https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
*/
export const checkWhetherTwoStringsAreAlmostEquivalent = (word1, word2) => {
    const map1 = new Map();
    const map2 = new Map();
    const set = new Set()
    
    for (const letter of word1) {
        set.add(letter);
        map1.set(letter, (map1.get(letter) ?? 0) + 1);
    }

    for (const letter of word2) {
        set.add(letter);
        map2.set(letter, (map2.get(letter) ?? 0) + 1);
    }

    for (const letter of set) {
        if (Math.abs((map1.get(letter) ?? 0) - (map2.get(letter) ?? 0)) > 3) {
            return false;
        }
    }
    
    return true;
};