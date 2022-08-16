/**
* Leetcode #1897
* Difficulty: Easy
* https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
*/
export const redistributeCharactersToMakeAllStringsEqual = (words) => {
    const map = new Map();
    
    for (const word of words) {
        for (let i = 0; i < word.length; i += 1) {
            const letter = word[i]
            map.set(letter, (map.get(letter) ?? 0) + 1 );
        }
    }
    
    for (const value of map.values()) {
      if(value % words.length !== 0) {
          return false;
      }
    }
    return true
};