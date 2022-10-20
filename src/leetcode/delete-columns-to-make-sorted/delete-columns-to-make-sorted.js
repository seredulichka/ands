/**
* Leetcode #944
* Difficulty: Easy
* https://leetcode.com/problems/delete-columns-to-make-sorted/
*/
export const deleteColumnsToMakeSorted = strs => {
    const map = new Map();
    const result = new Set();
    
    for (const word of strs) {
        for (let i = 0; i < word.length; i += 1) {
            if (result.has(i)) continue;
            
            const letter = word[i];
            const column = map.get(i);
            if (column) {
                if (column[column.length - 1] > letter) {
                    result.add(i);
                }
                map.set(i, [...column, letter]);
            } else {
                map.set(i, [letter]);
            }
            
        }
    }
    
    return result.size;
};