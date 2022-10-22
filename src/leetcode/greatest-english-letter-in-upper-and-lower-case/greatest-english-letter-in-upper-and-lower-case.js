/**
* Leetcode #2309
* Difficulty: Easy
* https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
*/
export const greatestEnglishLetterInUpperAndLowerCase = s => {
    const set = new Set();
    let result = "";
    
    for (const letter of s) {
        let changedCase;
        if (letter === letter.toUpperCase()) {
            changedCase = letter.toLowerCase();
        } else {
            changedCase = letter.toUpperCase();
        }
        
        if (set.has(changedCase) && letter.toUpperCase() > result) {
            result = letter.toUpperCase();
        } else {
            set.add(letter);
        }
    }
    
    return result;
};