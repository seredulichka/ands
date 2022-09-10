/**
* Leetcode #2373
* Difficulty: Easy
* https://leetcode.com/problems/largest-local-values-in-a-matrix/
*/
export const largestLocalValuesInAMatrix = grid => {
    const size = grid.length - 2;
    
    const returnMax = (tr, td) => {
        let arr = [];
        const length = grid.length - size + 1;
        for (let i = tr; i < length + tr; i += 1) {
            arr = arr.concat(grid[i].slice(td, length + td));
        }
        return Math.max(...arr);
    }
    
    let result = []

    for (let i = 0; i < size; i += 1) {
        result[i] = [];
        for (let j = 0; j < size; j += 1) {
            result[i][j] = returnMax(i, j);
        }
    }
    
    return result;
};