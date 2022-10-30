/**
* Leetcode #1122
* Difficulty: Easy
* https://leetcode.com/problems/relative-sort-array/
*/
export const relativeSortArray = (arr1, arr2) => {
    const map = new Map();
    let result = [];
    
    for (const number of arr1) {
        map.set(number, (map.get(number) ?? 0) + 1);
    }
    
    for (const number of arr2) {
        if (map.get(number)) {
            for (let i = 0; i < map.get(number); i += 1) {
                result.push(number);
            }
            map.delete(number);
        }
        
    }
    
    const rest = [...map.keys()].sort((a, b) => a - b);
    
    for (const number of rest) {
        for (let i = 0; i < map.get(number); i += 1) {
            result.push(number);
        }
    }
    
    return result;
};