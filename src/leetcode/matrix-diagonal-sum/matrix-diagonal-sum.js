/**
* Leetcode #1572
* Difficulty: Easy
* https://leetcode.com/problems/matrix-diagonal-sum/
*/
export const matrixDiagonalSum = mat => {
    let sum = 0;
    
    for (let i = 0, j = mat.length - 1; i < mat.length; i += 1, j -= 1) {
        if (i === j) {
            sum += mat[i][i];
        } else {
             sum = sum + mat[i][i] + mat[i][j];
        }
    }
    
    return sum;
};