/**
* Leetcode #2053
* Difficulty: Easy
* https://leetcode.com/problems/kth-distinct-string-in-an-array/
*/
export const kthDistinctStringInAnArray = (arr, k) => {
    const unique = new Set();
    const duplicated = new Set();
    
    for (const letter of arr) {
        if (unique.has(letter) || duplicated.has(letter)) {
            unique.delete(letter);
            duplicated.add(letter);
        } else {
            unique.add(letter);
        }
    }
    
    return [...unique][k - 1] || '';
};