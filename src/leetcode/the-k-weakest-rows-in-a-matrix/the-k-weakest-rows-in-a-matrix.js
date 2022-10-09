/**
* Leetcode #1337
* Difficulty: Easy
* https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
*/
export const theKWeakestRowsInAMatrix = (mat, k) => {
    const map = new Map();
    
    for (let i = 0; i < mat.length; i += 1) {
        map.set(i, mat[i].reduce((acc, curr) => acc + curr, 0))
    }
    
    return [...map]
            .sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])
            .slice(0, k)
            .map(el => el[0])
};