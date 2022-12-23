/**
* Leetcode #2500
* Difficulty: Easy
* https://leetcode.com/problems/delete-greatest-value-in-each-row/
*/
export const deleteGreatestValueInEachRow = grid => {
    for (const row of grid) {
        row.sort((a, b) => b - a);
    }

    let result = 0;

    for (let i = 0; i < grid[0].length; i += 1) {
        let max = -Infinity;

        for (const row of grid) {
            max = Math.max(row[i], max);
        }

        result += max;
    }

    return result; 
};