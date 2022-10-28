/**
* Leetcode #1002
* Difficulty: Easy
* https://leetcode.com/problems/find-common-characters/
*/
export const findCommonCharacters = words => {
    const result = new Map();
    let arrayResult = [];
    
    for (const letter of words[0]) {
        result.set(letter, (result.get(letter) ?? 0) + 1)
    } 
    
    for (let i = 1; i < words.length; i += 1) {
        const wordMap = new Map();
       for (const letter of words[i]) {
           if (result.has(letter)) wordMap.set(letter, (wordMap.get(letter) ?? 0) + 1)
       } 
        for (const letter of [...result.keys()]) {
            
            if (wordMap.get(letter) === result.get(letter)) continue;
            
            if (!wordMap.get(letter)) {
                result.delete(letter);
                continue;
            }
               
            if (wordMap.get(letter) !== result.get(letter)) {
                result.set(letter, Math.min(wordMap.get(letter), result.get(letter)))
            }
       } 
    }
            
    for (const letter of result.keys()) {
        arrayResult.push(letter);
        if (result.get(letter) > 1) {
            for (let i = 1; i < result.get(letter); i += 1) {
                 arrayResult.push(letter);
            }
        }
    }
    
    return arrayResult;
};