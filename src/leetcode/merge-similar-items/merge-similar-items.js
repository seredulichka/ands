/**
* Leetcode #2363
* Difficulty: Easy
* https://leetcode.com/problems/merge-similar-items/
*/
export const mergeSimilarItems = (items1, items2) => {
    let map = new Map();
    const length = Math.max(items1.length, items2.length);
    
    for (let i = 0; i < length; i += 1) {
        items1[i] && map.set(items1[i][0], (map.get(items1[i][0]) ?? 0) + items1[i][1])
        items2[i] && map.set(items2[i][0], (map.get(items2[i][0]) ?? 0) + items2[i][1])
    }
    
    return [...map].sort((a, b) => a[0] - b[0])
};