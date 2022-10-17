/**
* Leetcode #500
* Difficulty: Easy
* https://leetcode.com/problems/keyboard-row/
*/
export const keyboardRow = words => {
    const checkRow = word => {
        const first = new Set('qwertyuiop'.split(''));
        const second = new Set('asdfghjkl'.split(''));
        let row = null;
       
        for (let i = 0; i < word.length; i += 1) {
            let current;
            if (first.has(word[i])) {
                current = 1;
            } else if (second.has(word[i])) {
                current = 2;
            } else {
                current = 3;
            }
            if (row !== current && row !== null) return false;  
            row = current;
        }
        
        return true;
    }
    
    let result = [];
    
    for (const word of words) {
        checkRow(word.toLowerCase()) && result.push(word)
    }
    
    return result;
};