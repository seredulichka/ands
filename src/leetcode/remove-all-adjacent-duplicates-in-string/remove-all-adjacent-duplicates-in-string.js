/**
* Leetcode #1047
* Difficulty: Easy
* https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
*/
export const removeAllAdjacentDuplicatesInString = s => {
    let result = [];
    
    for (let i = 0; i < s.length; i += 1) {
        const prev = result[result.length - 1];
        if (prev !== s[i]) {
            result.push(s[i]);
        } else {
            result.pop();
        }
    }
    
    return result.join('');
};