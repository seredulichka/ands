/**
* Leetcode #387
* Difficulty: Easy
* https://leetcode.com/problems/first-unique-character-in-a-string/
*/
export const firstUniqueCharacterInAString = s => {
    const map = new Map();
    const setDuplicated  = new Set();
    
    for (let i = 0; i < s.length; i += 1) {
        const currentLetter = s[i]
        if(map.has(currentLetter)) {
            setDuplicated.add(currentLetter)  
        } else {
            map.set(currentLetter, i);
        }
    }
    
    for (const [key, value] of map.entries()) {
        if(!setDuplicated.has(key)) return value
    }
    return - 1
};