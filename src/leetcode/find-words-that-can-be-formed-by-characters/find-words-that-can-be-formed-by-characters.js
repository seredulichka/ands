/**
* Leetcode #1160
* Difficulty: Easy
* https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
*/
export const findWordsThatCanBeFormedByCharacters = (words, chars) => {
    const characters = new Map();
    let result = 0;

    for (const letter of chars) {
        characters.set(letter, (characters.get(letter) ?? 0) + 1);
    }

    for (const word of words) {
        const wordMap = new Map();
        let formed = true;

        for (const letter of word) {
            wordMap.set(letter, (wordMap.get(letter) ?? 0) + 1);
        }

        for (letter of wordMap.keys()) {
            if(wordMap.get(letter) > (characters.get(letter) ?? 0)) {
                formed = false
            }
        }

        if (formed) result += word.length;
    }

    return result;
};