/**
* Leetcode #1941
* Difficulty: Easy
* https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
*/
export const checkIfAllCharactersHaveEqualNumberOfOccurrences = s => {
    const map = new Map();
    
    for (const letter of s) {
        map.set(letter, (map.get(letter) ?? 0) + 1);
    }

    let count = map.get(s[0]); 
                
    for (const occurrences of map.values()) {
        if(occurrences !== count) return false;
    }
        
    return true;
};